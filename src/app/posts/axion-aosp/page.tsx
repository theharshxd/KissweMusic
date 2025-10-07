"use client";

import { ArrowLeft, Github, Download, Plus, Info, Smartphone, Loader2, FileDown } from "lucide-react";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CopyableCommand } from "@/components/ui/copyable-command";
import Image from "next/image";
import AxionImage from "@/assets/img/axion.png";
import { StaticImageData } from "next/image";
import { PageContainer } from "@/components/page-container";
import { useAxionData, formatFileSize, formatDate, parseChangelog } from "@/hooks/useAxionData";

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

export default function AxionAOSP() {
  const { data: axionData, isLoading, error } = useAxionData();
  const changelog = axionData ? parseChangelog(axionData.changelog) : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <PageContainer>
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="size-4 animate-spin" />
              <span>Loading Axion data...</span>
            </div>
          </div>
        </PageContainer>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <PageContainer>
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Failed to load Axion data</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Retry
              </Button>
            </div>
          </div>
        </PageContainer>
      </div>
    );
  }

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
                {/* Desktop Layout: Side by side, Mobile: Stacked */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
                  {/* Left side: ROM Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-[42px] h-[42px] bg-muted rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={AxionImage}
                          alt="Axion AOSP"
                          fill
                          className="object-cover"
                          sizes="42px"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-base leading-none mb-1">
                          Axion AOSP {axionData?.gms?.version ? `v${axionData.gms.version}` : 'v1.6'}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          Build Date: {axionData?.gms ? formatDate(axionData.gms.datetime) : '08/07/2025'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm bg-secondary/30 px-3 py-1 rounded-lg">Android 15</span>
                      <span className="text-sm bg-secondary/30 px-3 py-1 rounded-lg">Official</span>
                    </div>
                  </div>

                  {/* Right side: Version Banner */}
                  {axionData?.bannerUrl && (
                    <div className="lg:flex-1 lg:max-w-md mt-6 lg:mt-0">
                      <div className="relative w-full aspect-[2/1] max-h-32 rounded-xl overflow-hidden">
                        <Image
                          src={axionData.bannerUrl}
                          alt={`Axion AOSP ${axionData?.gms?.version || axionData?.vanilla?.version || 'v1.6'} Banner`}
                          fill
                          className="object-cover object-top"
                          priority
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 border border-blue-200/50 dark:border-blue-800/30 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <FileDown className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <span className="text-base font-semibold text-blue-900 dark:text-blue-100">Download GMS</span>
                        <p className="text-xs text-blue-600 dark:text-blue-300">
                          {axionData?.gms ? formatFileSize(axionData.gms.size) : '2.07 GB'} • With Google Services
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="h-10 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 group" 
                      asChild
                    >
                      <Link 
                        href={axionData?.gms?.url || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                        Download
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20 border border-green-200/50 dark:border-green-800/30 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                        <FileDown className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <span className="text-base font-semibold text-green-900 dark:text-green-100">Download Vanilla</span>
                        <p className="text-xs text-green-600 dark:text-green-300">
                          {axionData?.vanilla ? formatFileSize(axionData.vanilla.size) : '1.62 GB'} • Pure Android Experience
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-10 px-6 rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 group" 
                      asChild
                    >
                      <Link 
                        href={axionData?.vanilla?.url || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                        Download
                      </Link>
                    </Button>
                  </div>
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
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    {changelog?.version || 'AxionAosp v1.6'} Changelog
                  </h3>
                  <div className="text-sm text-muted-foreground mb-2">
                    {changelog?.credits || 'Credits: @cyberknight777 & @sarthakroy2002'}
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg space-y-2 text-sm">
                    {changelog?.items?.map((item, index) => (
                      <div 
                        key={index}
                        className={item.toLowerCase().includes('important') ? 'text-red-500 font-medium' : ''}
                      >
                        • {item}
                      </div>
                    )) || (
                      <>
                        <div className="text-red-500 font-medium">• [IMPORTANT] To be able to seamlessly update to Android 15 Firmware based Axion 2.x, you must update to this build!</div>
                        <div>• Drop ATCI service as it is useless.</div>
                        <div>• Enable hide cutout emulations for full screen within games.</div>
                        <div>• Silence HWUI logspam.</div>
                        <div>• Fixed an issue where Google Lens crashed in Moto Camera.</div>
                        <div>• Implement dynamic sensors HAL for peripherals that support head-tracking.</div>
                        <div>• Fixed an issue where DriveDroid stopped working.</div>
                        <div>• Add symlinks for UFS preloader boot regions to support A/B OTA updates.</div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl" asChild>
                    <Link href="https://github.com/AxionAOSP/axion_changelogs" target="_blank" rel="noopener noreferrer">
                      Source Changelog
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