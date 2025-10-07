import { NextResponse } from 'next/server';

interface AxionBuild {
  datetime: number;
  filename: string;
  id: string;
  romtype: string;
  size: number;
  url: string;
  version: string;
}

interface AxionResponse {
  response: AxionBuild[];
}

interface AxionData {
  gms: AxionBuild | null;
  vanilla: AxionBuild | null;
  changelog: string;
  bannerUrl: string;
  lastUpdated: string;
}

function getBannerUrl(version: string): string {
  // Extract major version number (1.x, 2.x, 3.x, etc.)
  const majorVersion = version.split('.')[0];
  
  if (majorVersion === '1') {
    // Only 1.x releases use the 1.3.png banner
    return 'https://raw.githubusercontent.com/AxionAOSP/official_devices/main/OTA/Banners/1.3.png';
  } else {
    // All other versions (2.x, 3.x, 4.x, etc.) use their respective banners
    return `https://raw.githubusercontent.com/AxionAOSP/official_devices/main/OTA/Banners/${majorVersion}.x.png`;
  }
}

async function fetchGitHubRaw(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3.raw',
      'User-Agent': 'notayan-website'
    },
    next: { revalidate: 300 } // Cache for 5 minutes
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  
  return response.text();
}

async function fetchAxionData(): Promise<AxionData> {
  try {
    // Fetch GMS build info
    const gmsData = await fetchGitHubRaw(
      'https://raw.githubusercontent.com/AxionAOSP/official_devices/main/OTA/GMS/cancunf.json'
    );
    const gmsJson: AxionResponse = JSON.parse(gmsData);
    const gmsBuild = gmsJson.response?.[0] || null;

    // Fetch Vanilla build info
    const vanillaData = await fetchGitHubRaw(
      'https://raw.githubusercontent.com/AxionAOSP/official_devices/main/OTA/VANILLA/cancunf.json'
    );
    const vanillaJson: AxionResponse = JSON.parse(vanillaData);
    const vanillaBuild = vanillaJson.response?.[0] || null;

    // Fetch changelog
    const changelog = await fetchGitHubRaw(
      'https://raw.githubusercontent.com/AxionAOSP/official_devices/main/OTA/CHANGELOG/cancunf.txt'
    );

    // Determine banner URL based on version (prefer GMS version, fallback to Vanilla)
    const currentVersion = gmsBuild?.version || vanillaBuild?.version || '1.6';
    const bannerUrl = getBannerUrl(currentVersion);

    return {
      gms: gmsBuild,
      vanilla: vanillaBuild,
      changelog: changelog.trim(),
      bannerUrl: bannerUrl,
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error fetching Axion data:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const data = await fetchAxionData();
    
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Axion data' },
      { status: 500 }
    );
  }
}
