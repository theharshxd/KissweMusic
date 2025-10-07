"use client";

import { ArrowLeft, Github, Download, Plus, Info, Smartphone } from "lucide-react";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CopyableCommand } from "@/components/ui/copyable-command";
import { PageContainer } from "@/components/page-container";

export default function LineageOS() {
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
                <h1 className="text-2xl font-bold">LineageOS</h1>
                <p className="text-muted-foreground">for Motorola G54 (cancunf)</p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Model :</p>
                    <p className="font-medium">G54 5G</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status :</p>
                    <p className="font-medium">active</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Release :</p>
                    <p className="font-medium">weekly</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Maintainer :</p>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Ayan Biswas</p>
                      <a href="https://github.com/not-ayan" target="_blank" rel="noopener noreferrer">
                        <Github className="size-4" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Recovery :</p>
                    <p className="text-sm mt-2">Please extract the recovery from rom&apos;s payload with something like mt manager.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Codename :</p>
                    <p className="font-medium">cancunf</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Version :</p>
                    <p className="font-medium">fourteen</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Latest Release :</p>
                    <p className="font-medium">21 August 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Latest Build :</p>
                    <Button variant="secondary" className="mt-2" asChild>
                      <a href="#download">
                        <Download className="size-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Changelogs Section */}
            <div>
              <div className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
                <Info className="size-4" />
                <span className="text-sm font-mono">CHANGELOGS.md</span>
              </div>
              <div className="px-5 py-3">
                <div className="flex flex-col gap-3">
                  <Button variant="outline" className="w-full justify-between" asChild>
                    <a 
                      href="https://github.com/LineageOS" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between"
                    >
                      <span>Source Changelog</span>
                      <Github className="size-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-between" asChild>
                    <a 
                      href="https://github.com/LineageOS/android_device_motorola_cancunf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between"
                    >
                      <span>Device Changelog</span>
                      <Github className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Instructions Section */}
            <div>
              <div className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
                <Info className="size-4" />
                <span className="text-sm font-mono">INSTRUCTIONS.md</span>
              </div>
              <div className="px-5 py-3">
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
                          <span className="font-semibold">For sideloading zip files (e.g. Magisk, custom ROM):</span>
                          <Plus className="size-4 transition-transform group-data-[state=open]:rotate-45" />
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
                          <li>Select either ADB sideload or external storage sideload.
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>For ADB, connect the phone to the PC, open the command prompt, and type:
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

            <Separator />

            {/* Support Section */}
            <div>
              <div className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
                <Info className="size-4" />
                <span className="text-sm font-mono">SUPPORT.md</span>
              </div>
              <div className="px-5 py-3">
                <h3 className="font-semibold mb-2">Support Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Help me in maintaining the rom by providing me with server or server costs. Any amount is appreciated.
                </p>
                <div className="flex gap-2">
                  <Button variant="secondary" asChild>
                    <a href="#paypal">
                      PayPal
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href="#upi">
                      UPI
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
} 