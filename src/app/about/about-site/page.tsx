import { ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import { PageContainer } from "@/components/page-container";

export const metadata: Metadata = {
  title: "About Site | Ayan Biswas",
  description: "Information about this website",
};

export default function AboutSite() {
  return (
    <PageContainer className="py-6">
      <div className="space-y-4">
        <Button variant="ghost" className="gap-2 -ml-2" asChild>
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back
          </Link>
        </Button>
        <div className="w-full bg-background rounded-lg border border-border overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Info className="size-4" />
              <span className="text-sm font-mono">ABOUT-SITE.md</span>
            </div>
            <div className="space-y-4">
              <p className="text-base">
                This site is built using{" "}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  Next.js
                </a>
                ,{" "}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  TailwindCSS
                </a>
                ,{" "}
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  shadcn/ui
                </a>
                , and{" "}
                <a
                  href="https://tanstack.com/query"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  Tanstack Query
                </a>
                .
              </p>
              <p className="text-base">
                The site features a modern, responsive design with a focus on user experience. 
                It includes features like:
              </p>
              <ul className="list-disc list-inside text-base space-y-2">
                <li>Dark/Light mode support</li>
                <li>Responsive layout for all screen sizes</li>
                <li>Modern animations and transitions</li>
                <li>Fast page loads with Next.js App Router</li>
                <li>Clean and minimal UI with shadcn/ui components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
} 