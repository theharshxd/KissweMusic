import { PageContainer } from "@/components/page-container";
import { ImageComponent } from "@/components/image";
import { Button } from "@/components/ui/button";
import { TextScroll } from "@/components/ui/text-scroll";
import { LastFMStats } from "@/components/lastfm-stats";
import { GamingSection } from "@/components/gaming-section";
import {
  Book,
  Eye,
  GitPullRequest,
  HandMetal,
  ThumbsUp,
  Vote,
  Joystick,
  Crown,
  Copy,
  Check,
} from "lucide-react";
import { Metadata } from "next";
import AwooImage from "@/assets/img/about-banner.png";

export const metadata: Metadata = {
  title: "About",
  description: "Slice and dice!",
  openGraph: {
    title: "About",
    description: "Slice and dice!",
  },
};

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <PageContainer className="space-y-4 pt-4 lg:pt-8">
          <ImageComponent
            img={AwooImage}
            alt="Awoo"
            className="w-full max-h-96 rounded-lg z-10"
            height={720}
          />
          <p className="w-fit relative -mt-12 z-20 mx-auto text-xl md:text-2xl dark:font-semibold font-medium text-center px-7 py-3 bg-primary text-primary-foreground rounded-full border-6 border-background">
            about me and whatnot.
          </p>
          <div className="w-full bg-background rounded-lg border border-border">
            <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
              <Book className="size-4" />
              <span className="text-sm font-mono">SHITPOSTING.md</span>
            </h2>
            <p className="px-5 py-3">
              A no-shame self-proclaimed ace of all trades, I learn things based
              on my whim and needs. A fast learner, yet a slow practitioner. Brain
              cell counts are pretty low to say the least but they&apos;re doing
              their best lmao. I don&apos;t like bad design and aesthetics. Retro
              is amazing and modern is minimal. Make things good, not just work.
              Not picky about food and stuffs but I really love spiciness. Not
              really into movies and shit but if you wanna talk about anime,
              I&apos;m your man.
            </p>
          </div>
          <div className="w-full bg-background rounded-lg border border-border">
            <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
              <ThumbsUp className="size-4" />
              <span className="text-sm font-mono">USEFUL_CARDS.md</span>
            </h2>
            <div className="w-full p-5 grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="md:aspect-square size-full overflow-clip rounded-md border border-border flex flex-col">
                <div className="w-full bg-muted/20 px-4 py-2 border-b border-border">
                  <h3 className="text-sm text-center line-clamp-1">
                    Typing Speed
                  </h3>
                </div>
                <div className="py-3 w-full h-full grow flex flex-col gap-1 items-center justify-center">
                  <p className="font-mono font-bold text-5xl">68</p>
                  <p className="text-foreground/60 font-mono text-center text-sm">
                    WPM
                  </p>
                </div>
              </div>
              <div className="md:aspect-square size-full overflow-clip rounded-md border border-border flex flex-col">
                <div className="w-full bg-muted/20 px-4 py-2 border-b border-border">
                  <h3 className="text-sm text-center line-clamp-1">Timezone</h3>
                </div>
                <div className="py-3 w-full h-full grow flex flex-col gap-1 items-center justify-center">
                  <p className="font-mono font-bold text-5xl">+5:30</p>
                  <p className="text-foreground/60 font-mono text-center text-sm">
                    IST
                  </p>
                </div>
              </div>
              <div className="md:aspect-square size-full overflow-clip rounded-md border border-border flex flex-col">
                <div className="w-full bg-muted/20 px-4 py-2 border-b border-border">
                  <h3 className="text-sm text-center line-clamp-1">
                    Nationality
                  </h3>
                </div>
                <div className="py-3 w-full h-full grow flex flex-col gap-1 items-center justify-center">
                  <p className="font-mono font-bold text-5xl">IND</p>
                  <p className="text-foreground/60 font-mono text-center text-sm">
                    (Indian)
                  </p>
                </div>
              </div>
              <div className="md:aspect-square size-full overflow-clip rounded-md border border-border flex flex-col">
                <div className="w-full bg-muted/20 px-4 py-2 border-b border-border">
                  <h3 className="text-sm text-center line-clamp-1">Favorites</h3>
                </div>
                <div className="py-3 w-full h-full grow flex flex-col gap-1 items-center justify-center">
                  <p className="font-mono font-bold text-5xl">Dog</p>
                  <p className="text-foreground/60 font-mono text-center text-sm">
                    Yes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <GamingSection />
          <div className="w-full bg-background rounded-lg border border-border">
            <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
              <HandMetal className="size-4" />
              <span className="text-sm font-mono">ABOUT_MUSIC.md</span>
            </h2>
            <div className="px-5 py-3 space-y-5">
              <p>
              And here is the fun part! My music taste is all over the place in the best way. I am big on South Asian indie, especially the hidden gems like Umer Anjum, Natasha Noorani, and Talal Qureshi. Emotional lyrics, slick production, and that local meets global vibe? I am all in.
              </p>
              <p>
              I have got a soft spot for hiphop, soft tracks and glitchy electronic sounds. My playlists are a mix of mellow indie and experimental beats, I dont gatekeep, I just vibe. Good music is good music after all!</p>
              <p></p>
              <LastFMStats />
            </div>
          </div>
        </PageContainer>
        <TextScroll
          className="text-5xl md:text-7xl text-muted-foreground/50 dark:font-semibold font-bold py-24 md:space-y-2"
          textClassName="py-1 md:py-3"
          default_velocity={0.66}
          text="this is the end of this page, cuh.  "
        />
      </div>
    </>
  );
}