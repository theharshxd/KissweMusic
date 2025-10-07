"use client";

import { ArrowLeft, Github, Download, Plus, Info, Smartphone } from "lucide-react";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import LineageOSImage from "@/assets/img/lineage.png";
import { StaticImageData } from "next/image";
import { CopyableCommand } from "@/components/ui/copyable-command";
import { PageContainer } from "@/components/page-container";

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

export default function LineageOSExt() {
  return (
    <div className="min-h-screen bg-background">
      <PageContainer>
        {/* Page Title */}
        <div className="mb-6 pt-8 pb-4">
          <Button variant="outline" className="gap-2 bg-background/50 hover:bg-background" asChild>
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to posts
            </Link>
          </Button>
        </div>

        {/* Device Info */}
        <div className="mb-8">
          <div className="w-full bg-background rounded-lg border border-border overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Smartphone className="size-4" aria-hidden="true" />
                <span className="text-sm font-mono">INFO.md</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-[42px] h-[42px] bg-muted rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={LineageOSImage}
                      alt="LineageOS Extended"
                      fill
                      className="object-cover"
                      sizes="42px"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-base leading-none mb-1">LineageOS Extended</h3>
                    <span className="text-sm text-muted-foreground">Latest Build</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-secondary/30 px-3 py-1 rounded-lg">Custom ROM</span>
                  <span className="text-sm bg-secondary/30 px-3 py-1 rounded-lg">Android 15</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-base font-medium">Download</span>
                  <Button variant="default" size="sm" className="h-9 px-4 rounded-xl">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Changelogs */}
        <div className="mb-8">
          <div className="w-full bg-background rounded-lg border border-border overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Info className="size-4" aria-hidden="true" />
                <span className="text-sm font-mono">CHANGELOGS.md</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Changelogs</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl" asChild>
                    <Link href="https://github.com/LineageOS/android" target="_blank" rel="noopener noreferrer">
                      Source Changelog
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl" asChild>
                    <Link href="https://github.com/LineageOS/android_device_motorola_cancunf" target="_blank" rel="noopener noreferrer">
                      Device Changelog
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <div className="w-full bg-background rounded-lg border border-border overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Info className="size-4" aria-hidden="true" />
                <span className="text-sm font-mono">INSTRUCTIONS.md</span>
              </div>
              <div className="space-y-4">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <Button variant="outline" className="w-full justify-between p-4 group" asChild>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Steps to flash Custom Roms:</span>
                        <Plus className="size-4 transition-transform group-data-[state=open]:rotate-45" />
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="p-4 space-y-4 mt-2 border rounded-md bg-muted/30">
                      <div>
                        <h5 className="font-medium mb-2">Required Firmware:</h5>
                        <p className="text-sm">Android 14 U1TD34M.94-12-7 or newer</p>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Steps:</h5>
                        <ol className="list-decimal list-inside text-sm space-y-1">
                          <li>Unlock the bootloader.</li>
                          <li>Enable USB debugging.</li>
                        </ol>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-md text-sm">
                        <strong>Note:</strong> Any slot must not be empty, means if u have ever used blankflash or flashed stock ROM using RSA then make sure u got any ota. Else don&apos;t flash.
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">To flash custom recovery:</h5>
                        <ol className="list-decimal list-inside text-sm space-y-1">
                          <li>Connect your phone to the PC.</li>
                          <li>Power off the device.</li>
                          <li>Press the volume down and power buttons simultaneously to enter fastboot mode.</li>
                          <li>Open the command prompt.</li>
                          <li>Execute following commands
                            <CopyableCommand 
                              command="fastboot reboot fastboot\nfastboot flash vendor_boot vendor_boot.img" 
                              className="mt-1"
                            />
                            <p className="text-xs text-muted-foreground mt-1">(attach vendor_boot.img in place of vendor_boot.img)</p>
                          </li>
                          <li>Press Enter.</li>
                          <li>Done</li>
                        </ol>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <Button variant="outline" className="w-full justify-between p-4 group" asChild>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm sm:text-base truncate max-w-[80%]">For sideloading zip files (e.g. Magisk, custom ROM):</span>
                        <Plus className="size-4 flex-shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="p-4 space-y-4 mt-2 border rounded-md bg-muted/30">
                      <p className="text-sm mb-2">After flashing recovery,</p>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>Enter fastboot mode.</li>
                        <li>Use the volume key to select Recovery and press power button to boot into recovery.</li>
                        <li>After recovery is shown,</li>
                        <li>Format data (must for those who are flashing for the first time or switching roms).</li>
                        <li>Select the &quot;Apply update&quot; option.</li>
                        <li className="space-y-2">
                          <span>Select either ADB sideload or external storage sideload.</span>
                          <ul className="list-disc list-inside ml-4 space-y-2">
                            <li className="space-y-2">
                              <span>For ADB, connect the phone to the PC, open the command prompt, and type:</span>
                              <CopyableCommand 
                                command="adb sideload rom.zip" 
                                className="mt-1"
                              />
                              <p className="text-xs text-muted-foreground mt-1">(replace rom.zip with your actual ROM filename)</p>
                            </li>
                            <li>For external storage, select the file location and flash.</li>
                          </ul>
                        </li>
                        <li>Reboot the device.</li>
                      </ol>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div>
          <div className="w-full bg-background rounded-lg border border-border overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Info className="size-4" aria-hidden="true" />
                <span className="text-sm font-mono">SUPPORT.md</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Support Development</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl" asChild>
                    <Link href="https://paypal.me/ayanbiswas" target="_blank" rel="noopener noreferrer">
                      PayPal
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl" asChild>
                    <Link href="https://upi.com/ayanbiswas" target="_blank" rel="noopener noreferrer">
                      UPI
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
} 