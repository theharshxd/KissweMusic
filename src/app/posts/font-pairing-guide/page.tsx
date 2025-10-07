"use client";

import { ArrowLeft, Github, Download, Plus, Info, Smartphone } from "lucide-react";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PageContainer } from "@/components/page-container";

export default function FontPairingGuide() {
  return (
    <PageContainer className="py-6">
      <div className="space-y-4">
        <Button variant="outline" className="gap-2 bg-background/50 hover:bg-background" asChild>
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to posts
          </Link>
        </Button>

        <div className="w-full bg-background rounded-lg border border-border overflow-hidden">
          <div className="space-y-6">
            {/* Header Section */}
            <div className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
              <Smartphone className="size-4" />
              <span className="text-sm font-mono">INFO.md</span>
            </div>
            <div className="px-5 space-y-6">
              <div>
                <h1 className="text-2xl font-bold">Font Pairing Guide</h1>
                <p className="text-muted-foreground">A comprehensive guide to combining typefaces in design projects</p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Author :</p>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Ayan Biswas</p>
                      <a href="https://github.com/not-ayan" target="_blank" rel="noopener noreferrer">
                        <Github className="size-4" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Category :</p>
                    <p className="font-medium">Typography</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date :</p>
                    <p className="font-medium">Jun 20, 2023</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Status :</p>
                    <p className="font-medium">Published</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Type :</p>
                    <p className="font-medium">Guide</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tags :</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">Typography</span>
                      <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">Fonts</span>
                      <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Content Section */}
            <div>
              <div className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
                <Info className="size-4" />
                <span className="text-sm font-mono">CONTENT.md</span>
              </div>
              <div className="px-5 py-3">
                <div className="prose dark:prose-invert max-w-none">
                  <h2>Understanding Typeface Categories</h2>
                  <p>
                    Before pairing fonts, it&apos;s important to understand the main typeface categories:
                  </p>
                  <ul>
                    <li>Serif - Traditional, formal fonts with decorative strokes</li>
                    <li>Sans-serif - Clean, modern fonts without decorative strokes</li>
                    <li>Script - Decorative, handwritten-style fonts</li>
                    <li>Display - Bold, attention-grabbing fonts for headlines</li>
                    <li>Monospace - Fixed-width fonts, great for code</li>
                  </ul>

                  <h2>Basic Principles</h2>
                  <ul>
                    <li>Contrast - Pair fonts with distinct characteristics</li>
                    <li>Hierarchy - Use different weights and sizes effectively</li>
                    <li>Readability - Ensure text remains legible at all sizes</li>
                    <li>Consistency - Maintain a cohesive look throughout</li>
                  </ul>

                  <h2>Popular Combinations</h2>
                  <ul>
                    <li>Serif + Sans-serif (e.g., Merriweather + Open Sans)</li>
                    <li>Display + Sans-serif (e.g., Playfair Display + Roboto)</li>
                    <li>Modern Sans-serif pairs (e.g., Inter + Inter)</li>
                    <li>Classic combinations (e.g., Georgia + Verdana)</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Resources Section */}
            <div>
              <div className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
                <Info className="size-4" />
                <span className="text-sm font-mono">RESOURCES.md</span>
              </div>
              <div className="px-5 py-3">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <Button variant="ghost" className="w-full justify-between p-4 group" asChild>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Additional Resources</span>
                        <Plus className="size-4 transition-transform group-data-[state=open]:rotate-45" />
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="p-4 space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Font Resources</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>
                            <a href="#" className="text-primary hover:underline">Google Fonts</a>
                          </li>
                          <li>
                            <a href="#" className="text-primary hover:underline">Adobe Fonts</a>
                          </li>
                          <li>
                            <a href="#" className="text-primary hover:underline">Font Pair</a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Tools</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>
                            <a href="#" className="text-primary hover:underline">Type Scale Calculator</a>
                          </li>
                          <li>
                            <a href="#" className="text-primary hover:underline">Font Combination Tools</a>
                          </li>
                          <li>
                            <a href="#" className="text-primary hover:underline">Typography Checker</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
} 