"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/img/logo.svg";
import { motion, AnimatePresence } from "framer-motion";

interface SiteLoaderProps {
  onLoadComplete?: () => void;
}

export function SiteLoader({ onLoadComplete }: SiteLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start exit animation after delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadComplete?.();
      // Add small delay before removing from DOM
      setTimeout(() => {
        setIsVisible(false);
      }, 300); // Shorter fade-out duration
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ 
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <div className="w-[180px] h-[75px] relative">
          <Image
            src={Logo}
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
} 