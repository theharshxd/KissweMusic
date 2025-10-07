"use client";

import Container from "@/components/container";
import { MoreVertical, ArrowLeft, Info, Smartphone, Loader2, Download, Newspaper } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import AxionThumb from "@/assets/img/axion.png";
import LineageThumb from "@/assets/img/lineage.png";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/page-container";
import { useAxionData, formatFileSize, formatDate } from "@/hooks/useAxionData";

interface Post {
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string | StaticImageData;
  href: string;
  date: string;
  author?: {
    name: string;
    image: string;
    initials: string;
  };
}

const pinnedPosts: Post[] = [
  {
    category: "Custom ROM",
    title: "LOS-EXT.md",
    subtitle: "LOS EXT for cancunf",
    description: "Extended version of LineageOS with additional features",
    image: LineageThumb,
    href: "/posts/lineageos-ext",
    date: "10:30 PM Monday",
  },
];

const posts: Post[] = [
  {
    category: "Typography",
    title: "Font Pairing Guide",
    description: "A comprehensive guide to combining typefaces in design projects",
    image: "/lamp.jpg",
    href: "/posts/font-pairing-guide",
    date: "Jun 20, 2023",
    author: {
      name: "Ayan Biswas",
      image: "/profpic.png",
      initials: "AB"
    }
  },
  {
    category: "Illustrations",
    title: "Vector Art Tips",
    description: "Creating beautiful vector illustrations from scratch",
    image: "/lamp.jpg",
    href: "/posts/vector-art-tips",
    date: "Jun 15, 2023",
    author: {
      name: "Ayan Biswas",
      image: "/profpic.png",
      initials: "AB"
    }
  },
  {
    category: "Design Kits",
    title: "UI Components",
    description: "Ready-to-use design components for your next project",
    image: "/lamp.jpg",
    href: "/posts/ui-components",
    date: "Jun 10, 2023",
    author: {
      name: "Ayan Biswas",
      image: "/profpic.png",
      initials: "AB"
    }
  },
];

export default function Posts() {
  const { data: axionData, isLoading, error } = useAxionData();

  return (
    <div className="min-h-screen bg-background">
      <PageContainer>
        {/* Page Title */}
        <div className="mb-6 pt-8 pb-4">
          <Button variant="outline" className="gap-2 bg-background/50 hover:bg-background" asChild>
            <Link href="/">
              <ArrowLeft className="size-4" />
              Back
            </Link>
          </Button>
        </div>

        {/* Pinned Posts */}
        <div className="mb-8">
          <div className="w-full bg-background rounded-lg border border-border overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Smartphone className="size-4" aria-hidden="true" />
                <span className="text-sm font-mono">ROMS.md</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* Dynamic Axion Post */}
                <div className="bg-background hover:bg-secondary/5 rounded-[1.25rem] border border-border overflow-hidden transition-colors">
                  <div className="p-5 space-y-4">
                    {/* Axion Banner */}
                    {axionData?.bannerUrl && (
                      <div className="relative w-full aspect-[2/1] max-h-24 rounded-xl overflow-hidden">
                        <Image
                          src={axionData.bannerUrl}
                          alt={`Axion AOSP ${axionData?.gms?.version || axionData?.vanilla?.version || 'v1.6'} Banner`}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    
                    <Link href="/posts/axion-aosp" className="block">
                      <div className="flex items-center gap-3">
                        <div className="relative w-[42px] h-[42px] bg-muted rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={AxionThumb}
                            alt="Axion AOSP"
                            fill
                            className="object-cover"
                            sizes="42px"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-base leading-none mb-1 hover:text-primary transition-colors">
                            Axion AOSP {axionData?.gms?.version ? `v${axionData.gms.version}` : 'v1.6'}
                          </h3>
                          {isLoading ? (
                            <div className="flex items-center gap-1">
                              <Loader2 className="size-3 animate-spin" />
                              <span className="text-sm text-muted-foreground">Loading...</span>
                            </div>
                          ) : (
                            <span className="text-sm text-muted-foreground">
                              {axionData?.gms ? formatDate(axionData.gms.datetime) : '5 days ago'}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm bg-secondary/30 px-3 py-1 rounded-lg">Custom ROM</span>
                      <span className="text-sm bg-secondary/30 px-3 py-1 rounded-lg">Android 15</span>
                      <span className="text-sm bg-secondary/30 px-3 py-1 rounded-lg">Official</span>
                    </div>

                    {/* Download Buttons for Both Builds */}
                    <div className="flex gap-2 pt-2">
                      {/* GMS Build */}
                      {axionData?.gms && (
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="h-8 px-3 rounded-lg text-xs flex-1" 
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a 
                            href={axionData.gms.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1"
                          >
                            <Download className="h-3 w-3" />
                            GMS
                          </a>
                        </Button>
                      )}

                      {/* Vanilla Build */}
                      {axionData?.vanilla && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-8 px-3 rounded-lg text-xs flex-1" 
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a 
                            href={axionData.vanilla.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1"
                          >
                            <Download className="h-3 w-3" />
                            Vanilla
                          </a>
                        </Button>
                      )}

                      {/* Loading State */}
                      {isLoading && (
                        <div className="flex items-center justify-center py-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Loader2 className="size-3 animate-spin" />
                            <span className="text-xs">Loading builds...</span>
                          </div>
                        </div>
                      )}

                      {/* Error State */}
                      {error && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Builds unavailable</span>
                          <Button variant="outline" size="sm" className="h-8 px-3 rounded-lg text-xs" asChild>
                            <Link href="/posts/axion-aosp">
                              View Details
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Static Pinned Posts */}
                {pinnedPosts.map((post, index) => (
                  <div key={index} className="bg-background hover:bg-secondary/5 rounded-[1.25rem] border border-border overflow-hidden transition-colors">
                    <div className="p-5 space-y-4">
                      {/* LineageOS Banner */}
                      <div className="relative w-full aspect-[2/1] max-h-24 rounded-xl overflow-hidden">
                        <Image
                          src="/lext.png"
                          alt="LineageOS Extended Banner"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                      
                      <Link href={post.href} className="block">
                        <div className="flex items-center gap-3">
                          <div className="relative w-[42px] h-[42px] bg-muted rounded-xl overflow-hidden flex-shrink-0">
                            <Image
                              src={post.image}
                              alt={post.subtitle || post.title}
                              fill
                              className="object-cover"
                              sizes="42px"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-base leading-none mb-1 hover:text-primary transition-colors">
                              {post.subtitle || post.title}
                            </h3>
                            <span className="text-sm text-muted-foreground">5 days ago</span>
                          </div>
                        </div>
                      </Link>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm bg-secondary/30 px-3 py-1 rounded-lg">{post.category}</span>
                        <span className="text-sm bg-secondary/30 px-3 py-1 rounded-lg">Android 14</span>
                      </div>

                      {/* Download Button */}
                      <div className="flex gap-2 pt-2">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="h-8 px-3 rounded-lg text-xs flex-1" 
                          asChild
                        >
                          <Link href={post.href} className="flex items-center justify-center gap-1">
                            <Download className="h-3 w-3" />
                            Download
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Posts */}
        <div>
          <div className="w-full bg-background rounded-lg border border-border overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Newspaper className="size-4" aria-hidden="true" />
                <span className="text-sm font-mono">POSTS.md</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {posts.map((post, index) => (
                  <div
                    key={index}
                    className="group bg-background hover:bg-secondary/5 rounded-[1.25rem] border border-border overflow-hidden transition-colors"
                    style={{ viewTransitionName: `post-${index}` }}
                  >
                    <div className="p-5 space-y-4">
                      {/* Post Image Banner */}
                      <div className="relative w-full aspect-[2/1] max-h-24 rounded-xl overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      
                      <Link href={post.href} className="block">
                        <div className="flex items-center gap-3">
                          <Avatar className="size-[42px] rounded-xl">
                            <AvatarImage src={post.author?.image || ""} alt={post.author?.name || ""} />
                            <AvatarFallback className="rounded-xl">{post.author?.initials || "AB"}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium text-base leading-none mb-1 hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <span className="text-sm text-muted-foreground">{post.date}</span>
                          </div>
                        </div>
                      </Link>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm bg-secondary/30 px-3 py-1 rounded-lg">{post.category}</span>
                        <span className="text-sm bg-secondary/30 px-3 py-1 rounded-lg">Guide</span>
                      </div>

                      {/* Read More Button */}
                      <div className="flex gap-2 pt-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-8 px-3 rounded-lg text-xs flex-1" 
                          asChild
                        >
                          <Link href={post.href} className="flex items-center justify-center gap-1">
                            <Newspaper className="h-3 w-3" />
                            Read More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
} 