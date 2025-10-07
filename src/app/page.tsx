import Container from "@/components/container";
import { Metadata } from "next";
import { Hero } from "@/components/hero";
import HeroImage from "@/assets/img/hero.png";
import HeroProfile from "@/assets/img/profpic.png";
import { Book, Info, GraduationCap, Server, Smartphone } from "lucide-react";
import { EducationAndLinks } from "@/components/education";
import { SelfHostedServices } from "@/components/selfhosted";
import { TextScroll } from "@/components/ui/text-scroll";
import { TechGear } from "@/components/tech-gear";
import { PageContainer } from "@/components/page-container";

export const metadata: Metadata = {
  title: "Kisswe Music| Portfolio",
  description: "Graphic Designer based in Assam, India",
  openGraph: {
    title: "Kisswe Music| Portfolio",
    description: "Graphic Designer based in Assam, India",
  },
};

export default function Home() {
  return (
    <>
      <PageContainer>
        <Hero />
      </PageContainer>
      <PageContainer className="pt-4 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="w-full bg-background rounded-lg border border-border">
              <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
                <Book className="size-4" />
                <span className="text-sm font-mono">DESCRIPTION.md</span>
              </h2>
              <p className="px-5 py-3">
                I&apos;m not trying to sound all fancy here. Welcome to my personal site. I&apos;m Kisswe Music, a graphic designer based in Assam, India. I&apos;m 22. For work inquiries, feel free to hit me up through my social media handles.
              </p>
            </div>
            <div className="w-full bg-background rounded-lg border border-border">
              <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
                <GraduationCap className="size-4" />
                <span className="text-sm font-mono">ABOUT.md</span>
              </h2>
              <EducationAndLinks />
            </div>
            <div className="w-full bg-background rounded-lg border border-border">
              <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
                <Server className="size-4" />
                <span className="text-sm font-mono">PROJECTS.md</span>
              </h2>
              <p className="px-5 py-3 border-b border-border">
                These are some projects that I have worked on:
              </p>
              <SelfHostedServices />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="w-full bg-background rounded-lg border border-border">
              <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
                <Smartphone className="size-4" />
                <span className="text-sm font-mono">MYTECH.md</span>
              </h2>
              <TechGear />
            </div>
            <div className="w-full bg-background rounded-lg border border-border">
              <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
                <Info className="size-4" />
                <span className="text-sm font-mono">ABOUT_SITE.md</span>
              </h2>
              <p className="px-5 py-3">
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
                . It is hosted on Vercel. This site is a copy of irvanma.eu.org
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
      <TextScroll
        className="w-full text-5xl md:text-7xl text-muted-foreground/50 dark:font-semibold font-bold py-24 md:space-y-2"
        textClassName="py-1 md:py-3"
        default_velocity={0.66}
        text="I will not crash your browser.  "
      />
    </>
  );
}
