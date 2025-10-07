"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ 
        opacity: 0,
        scale: 0.995,
        y: 4
      }}
      animate={{ 
        opacity: 1,
        scale: 1,
        y: 0
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        opacity: {
          duration: 0.35
        },
        scale: {
          duration: 0.45
        }
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
} 