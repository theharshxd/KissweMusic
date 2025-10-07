"use client";

import { useQuery } from '@tanstack/react-query';

interface AxionBuild {
  datetime: number;
  filename: string;
  id: string;
  romtype: string;
  size: number;
  url: string;
  version: string;
}

interface AxionData {
  gms: AxionBuild | null;
  vanilla: AxionBuild | null;
  changelog: string;
  bannerUrl: string;
  lastUpdated: string;
}

export function useAxionData() {
  return useQuery<AxionData>({
    queryKey: ['axion-data'],
    queryFn: async () => {
      const response = await fetch('/api/axion');
      if (!response.ok) {
        throw new Error('Failed to fetch Axion data');
      }
      return response.json();
    },
    staleTime: 12 * 60 * 60 * 1000, // 12 hours
    refetchInterval: 12 * 60 * 60 * 1000, // Refetch every 12 hours
  });
}

export function formatFileSize(bytes: number): string {
  const gb = bytes / (1024 * 1024 * 1024);
  return `${gb.toFixed(2)} GB`;
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

export function parseChangelog(changelog: string) {
  const lines = changelog.split('\n');
  const version = lines[0]?.trim() || '';
  const buildDate = lines[1]?.replace('Build Date :', '').trim() || '';
  const credits = lines[2]?.replace('Credits:', '').trim() || '';
  
  // Extract changelog items (lines starting with -)
  const changelogItems = lines
    .slice(4) // Skip header lines
    .filter(line => line.trim().startsWith('-'))
    .map(line => line.replace(/^-\s*/, '').trim())
    .filter(item => item.length > 0);
  
  return {
    version,
    buildDate,
    credits,
    items: changelogItems
  };
}
