"use client";

import { Mail, Twitter, Github, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import HeroProfile from "@/assets/img/profpic.png";
import HeroImage from "@/assets/img/hero.png";

export function Hero() {
  return (
    <div className="pt-16 pb-8">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hey,
            </h1>
            <h1 className="text-5xl md:text-6xl font-light">
              I&apos;m Ayan Biswas
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="rounded-lg px-5 py-2 h-auto hover:bg-muted/50 border-border/50" 
              asChild
            >
              <a href="mailto:ayan98542@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Mail className="size-4" />
                <span className="text-sm">Email</span>
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-lg px-5 py-2 h-auto hover:bg-muted/50 border-border/50" 
              asChild
            >
              <a href="https://twitter.com/notayan69" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Twitter className="size-4" />
                <span className="text-sm">Twitter</span>
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-lg px-5 py-2 h-auto hover:bg-muted/50 border-border/50" 
              asChild
            >
              <a href="https://github.com/not-ayan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="size-4" />
                <span className="text-sm">Github</span>
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-lg px-5 py-2 h-auto hover:bg-muted/50 border-border/50" 
              asChild
            >
              <a href="https://instagram.com/notayan_99" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Instagram className="size-4" />
                <span className="text-sm">Instagram</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-[500px] h-[180px] overflow-hidden bg-muted rounded-full">
            <Image
              src={HeroImage}
              alt="Hero Banner"
              fill
              className="object-cover"
              priority
              sizes="500px"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-8">
              <div className="relative w-[120px] aspect-square overflow-hidden rounded-full border-4 border-background">
                <Image
                  src={HeroProfile}
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                  sizes="120px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-6">
        <div className="relative">
          <div className="relative w-full h-[120px] overflow-hidden rounded-[1.5rem]">
            <Image
              src={HeroImage}
              alt="Hero Banner"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-12">
            <div className="relative w-[100px] aspect-square overflow-hidden rounded-full border-4 border-background">
              <Image
                src={HeroProfile}
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
                sizes="100px"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-16">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">
              Hey,
            </h1>
            <h1 className="text-3xl font-light">
              I&apos;m Ayan Biswas
            </h1>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-lg h-10 w-10 hover:bg-muted/50 border-border/50" 
              asChild
            >
              <a href="mailto:ayan98542@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="size-4" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-lg h-10 w-10 hover:bg-muted/50 border-border/50" 
              asChild
            >
              <a href="https://twitter.com/notayan69" target="_blank" rel="noopener noreferrer">
                <Twitter className="size-4" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-lg h-10 w-10 hover:bg-muted/50 border-border/50" 
              asChild
            >
              <a href="https://github.com/not-ayan" target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-lg h-10 w-10 hover:bg-muted/50 border-border/50" 
              asChild
            >
              <a href="https://instagram.com/notayan_99" target="_blank" rel="noopener noreferrer">
                <Instagram className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
