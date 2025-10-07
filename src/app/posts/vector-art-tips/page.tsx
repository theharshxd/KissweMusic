"use client";

import { ArrowLeft, Github, Download, Plus, Info, Smartphone } from "lucide-react";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PageContainer } from "@/components/page-container";

export default function VectorArtTips() {
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
                <h1 className="text-2xl font-bold">Vector Art Tips</h1>
                <p className="text-muted-foreground">Creating beautiful vector illustrations from scratch</p>
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
                    <p className="font-medium">Illustrations</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date :</p>
                    <p className="font-medium">Jun 15, 2023</p>
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
                      <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">Vector</span>
                      <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">Illustration</span>
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
                  <h2>Getting Started</h2>
                  <p>
                    Vector art is a form of digital art that uses mathematical equations to create scalable graphics. Here are some essential tips for creating vector illustrations:
                  </p>

                  <h2>Essential Tools</h2>
                  <ul>
                    <li>Adobe Illustrator - Industry standard vector editor</li>
                    <li>Figma - Modern design tool with vector capabilities</li>
                    <li>Inkscape - Free and open-source alternative</li>
                    <li>Affinity Designer - Professional vector design software</li>
                  </ul>

                  <h2>Best Practices</h2>
                  <ul>
                    <li>Use the pen tool effectively for precise paths</li>
                    <li>Master the art of anchor points and handles</li>
                    <li>Create reusable components and symbols</li>
                    <li>Maintain clean and organized layers</li>
                    <li>Use appropriate color modes (RGB/CMYK)</li>
                  </ul>

                  <h2>Advanced Techniques</h2>
                  <ul>
                    <li>Path operations (union, intersection, etc.)</li>
                    <li>Gradient meshes for complex shading</li>
                    <li>Blend tools for smooth transitions</li>
                    <li>Pattern creation and application</li>
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
                        <h4 className="font-medium mb-2">Tutorials</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>
                            <a href="#" className="text-primary hover:underline">Vector Basics</a>
                          </li>
                          <li>
                            <a href="#" className="text-primary hover:underline">Advanced Techniques</a>
                          </li>
                          <li>
                            <a href="#" className="text-primary hover:underline">Workflow Tips</a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Tools & Plugins</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>
                            <a href="#" className="text-primary hover:underline">Vector Asset Libraries</a>
                          </li>
                          <li>
                            <a href="#" className="text-primary hover:underline">Useful Plugins</a>
                          </li>
                          <li>
                            <a href="#" className="text-primary hover:underline">Color Palettes</a>
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