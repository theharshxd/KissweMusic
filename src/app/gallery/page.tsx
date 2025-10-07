import Container from "@/components/container";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Ayan Biswas",
  description: "My gallery page showcasing various content",
};

export default function Gallery() {
  return (
    <Container>
      <div className="w-full bg-background rounded-lg border border-border overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Gallery</h1>
          <div className="space-y-6">
            <p className="text-lg font-medium">work in progress :p</p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
                alt="Never gonna give you up"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
} 