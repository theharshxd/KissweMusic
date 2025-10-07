"use client";

import {
  ArrowRight,
  ArrowUp,
  Code2,
  Home,
  Info,
  Newspaper,
  X,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Image from "next/image";
import Hero from "@/assets/img/fab-hero.png";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export function FAB() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const pathname = usePathname();

  const handleOpen = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClosePopover = () => {
    setOpen(false);
  };

  useEffect(() => {
    const trackScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", trackScroll);

    return () => {
      window.removeEventListener("scroll", trackScroll);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {scrollY > 10 && (
        <motion.button
          key={`scroll-${pathname}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut"
          }}
          className={cn(
            "fixed bottom-20 md:bottom-25 flex items-center justify-center",
            "right-5 md:right-10 z-50 p-3 bg-background hover:bg-secondary rounded-lg",
            "text-foreground hover:text-secondary-foreground cursor-pointer",
            "border border-border transition-all outline-0"
          )}
          onClick={handleScrollToTop}
        >
          <ArrowUp className="size-6" />
          <span className="sr-only">Scroll to top</span>
        </motion.button>
      )}
      <motion.div
        key={`fab-${pathname}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
      >
        <Popover open={open} onOpenChange={handleOpen}>
          <PopoverTrigger asChild>
            <button
              className={cn(
                "fixed bottom-5 md:bottom-10 flex items-center justify-center",
                "right-5 z-50 md:right-10 p-3 bg-background hover:bg-secondary rounded-lg",
                "text-foreground hover:text-secondary-foreground cursor-pointer",
                "border border-border transition-colors outline-0"
              )}
            >
              <X
                className={cn(
                  "size-6 transition-transform",
                  open ? "rotate-0" : "rotate-45"
                )}
              />
              <span className="sr-only">Open FAB menu</span>
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="max-w-3xs sm:max-w-xs md:max-w-sm w-full p-0 overflow-clip"
            align="end"
            sideOffset={10}
          >
            <div className="h-auto overflow-clip w-full border-b border-border">
              <Image
                src={Hero}
                height={120}
                placeholder="blur"
                alt="FAB Hero Image"
                blurDataURL={Hero.blurDataURL}
                onLoad={() => setIsImageLoading(false)}
                className={`${
                  isImageLoading ? "blur scale-150" : "remove-blur scale-100"
                } transition-all ease-[cubic-bezier(0.22,_1,_0.36,_1)] duration-500`}
              />
            </div>
            <h3 className="w-full bg-muted/20 px-4 py-2 border-b border-border font-bold">
              Portfolio v1
            </h3>
            <Link 
              href="/"
              onClick={handleClosePopover}
              className="group relative w-full border-b border-border text-sm cursor-pointer flex items-center gap-3 px-4 py-2 hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Home className="size-4" />
              <span>Home</span>
              <div className="absolute opacity-0 translate-x-1/2 right-4 top-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                <ArrowRight className="size-4" />
              </div>
            </Link>
            <Link 
              href="/posts"
              onClick={handleClosePopover}
              className="group relative w-full border-b border-border text-sm cursor-pointer flex items-center gap-3 px-4 py-2 hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <FileText className="size-4" />
              <span>Posts</span>
              <div className="absolute opacity-0 translate-x-1/2 right-4 top-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                <ArrowRight className="size-4" />
              </div>
            </Link>
            <Link 
              href="/projects"
              onClick={handleClosePopover}
              className="group relative w-full border-b border-border text-sm cursor-pointer flex items-center gap-3 px-4 py-2 hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Code2 className="size-4" />
              <span>Projects</span>
              <div className="absolute opacity-0 translate-x-1/2 right-4 top-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                <ArrowRight className="size-4" />
              </div>
            </Link>
            <Link 
              href="/about"
              onClick={handleClosePopover} 
              className="group relative w-full border-b border-border text-sm cursor-pointer flex items-center gap-3 px-4 py-2 hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Info className="size-4" />
              <span>About</span>
              <div className="absolute opacity-0 translate-x-1/2 right-4 top-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                <ArrowRight className="size-4" />
              </div>
            </Link>
          </PopoverContent>
        </Popover>
      </motion.div>
    </AnimatePresence>
  );
}
