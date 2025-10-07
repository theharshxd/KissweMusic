"use client";

import { useState, useEffect } from "react";
import { SiteLoader } from "@/components/site-loader";
import { PageTransition } from "@/components/page-transition";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {isLoading && <SiteLoader onLoadComplete={() => setIsLoading(false)} />}
      {!isLoading && children}
    </>
  );
} 