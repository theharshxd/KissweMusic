"use client";

import { Joystick, Crown, Monitor, Smartphone, Gamepad2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

export function GamingSection() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const toggleFlip = (game: string) => {
    setFlippedCard(flippedCard === game ? null : game);
  };

  const openPlatformLink = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };
  
  // Close flipped card when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.game-card')) {
        setFlippedCard(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-background rounded-xl border border-border shadow-sm overflow-hidden">
      <h2 className="w-full flex items-center gap-3 text-muted-foreground px-4 py-3 border-b border-border">
        <Joystick className="size-4" />
        <span className="text-sm font-mono">I_PLAY_GAMES_MAYBE.md</span>
      </h2>
      
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {/* Clash of Clans Card */}
        <div 
          className={`game-card flex-shrink-0 w-full h-[280px] rounded-xl shadow-sm cursor-pointer perspective ${flippedCard === 'coc' ? 'is-flipped' : ''} hover:shadow transition-shadow`}
          onClick={() => toggleFlip('coc')}
        >
          <div className="card-content absolute w-full h-full transition-all duration-500 preserve-3d">
            {/* Front of the card */}
            <div className="card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border">
              <div className="w-full h-full relative">
                <Image 
                  src="/games/clash-of-clans.jpg" 
                  alt="Clash of Clans"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-3">
                  <h3 className="text-white text-base font-medium">Clash of Clans</h3>
                  <p className="text-slate-300 text-xs">Supercell&apos;s strategy game</p>
                </div>
              </div>
            </div>

            {/* Back of the card */}
            <div className="card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-card p-3 flex flex-col justify-between rotate-y-180 border border-border">
              <div>
                <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center mb-2">
                  <Crown className="size-4 text-yellow-500" />
                </div>
                <h3 className="text-base font-medium mb-1">Clash of Clans</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Train troops and battle players worldwide
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://apps.apple.com/us/app/clash-of-clans/id529479190", e)}
                  >
                    <Smartphone className="size-3" />
                    iOS
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://play.google.com/store/apps/details?id=com.supercell.clashofclans", e)}
                  >
                    <Smartphone className="size-3" />
                    Android
                  </Button>
                </div>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-medium text-xs text-muted-foreground">My Accounts</h4>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-muted/5 text-[10px]">
                    <div className="p-1 rounded-md bg-yellow-500/10">
                      <Crown className="size-3 text-yellow-500" />
                    </div>
                    <span className="font-medium">『 WeeD々AyaN』</span>
                    <span className="ml-auto font-mono text-muted-foreground">#PPY9Q0JYU</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-muted/5 text-[10px]">
                    <div className="p-1 rounded-md bg-purple-500/10">
                      <Crown className="size-3 text-purple-500" />
                    </div>
                    <span className="font-medium">Notayan</span>
                    <span className="ml-auto font-mono text-muted-foreground">#2QCUR28C0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wuthering Waves Card */}
        <div 
          className={`game-card flex-shrink-0 w-full h-[280px] rounded-xl shadow-sm cursor-pointer perspective ${flippedCard === 'ww' ? 'is-flipped' : ''} hover:shadow transition-shadow`}
          onClick={() => toggleFlip('ww')}
        >
          <div className="card-content absolute w-full h-full transition-all duration-500 preserve-3d">
            {/* Front of the card */}
            <div className="card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border">
              <div className="w-full h-full relative">
                <Image 
                  src="/games/wuthering-waves.jpg" 
                  alt="Wuthering Waves"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-3">
                  <h3 className="text-white text-base font-medium">Wuthering Waves</h3>
                  <p className="text-slate-300 text-xs">Action RPG adventure</p>
                </div>
              </div>
            </div>

            {/* Back of the card */}
            <div className="card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-card p-3 flex flex-col justify-between rotate-y-180 border border-border">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                  <Joystick className="size-4 text-blue-500" />
                </div>
                <h3 className="text-base font-medium mb-1">Wuthering Waves</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  A beautiful open-world ARPG with resonator combat and stunning visuals
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://download.kurogames.net/transfer/mc_WnGtDn85y8lJB4mTmYHYuNjIl9n6YGVm/official/global/en/pc_app", e)}
                  >
                    <Monitor className="size-3" />
                    PC
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://apps.apple.com/us/app/wuthering-waves/id6475033368", e)}
                  >
                    <Smartphone className="size-3" />
                    iOS
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://play.google.com/store/apps/details?id=com.kurogame.wuthering.waves.global", e)}
                  >
                    <Smartphone className="size-3" />
                    Android
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dragon Ball Z: Sparking Zero Card */}
        <div 
          className={`game-card flex-shrink-0 w-full h-[280px] rounded-xl shadow-sm cursor-pointer perspective ${flippedCard === 'dbz' ? 'is-flipped' : ''} hover:shadow transition-shadow`}
          onClick={() => toggleFlip('dbz')}
        >
          <div className="card-content absolute w-full h-full transition-all duration-500 preserve-3d">
            {/* Front of the card */}
            <div className="card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border">
              <div className="w-full h-full relative">
                <Image 
                  src="/games/dbz-sparking-zero.jpg" 
                  alt="Dragon Ball Z: Sparking Zero"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-3">
                  <h3 className="text-white text-base font-medium">DBZ: Sparking Zero</h3>
                  <p className="text-slate-300 text-xs">High-octane fighting game</p>
                </div>
              </div>
            </div>

            {/* Back of the card */}
            <div className="card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-card p-3 flex flex-col justify-between rotate-y-180 border border-border">
              <div>
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
                  <Joystick className="size-4 text-red-500" />
                </div>
                <h3 className="text-base font-medium mb-1">DBZ: Sparking Zero</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Next-gen Dragon Ball fighting game with destructible environments and a massive roster
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://store.steampowered.com/app/1790600/DRAGON_BALL_Sparking_ZERO/", e)}
                  >
                    <Monitor className="size-3" />
                    PC
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://store.playstation.com/en-us/product/UP0700-PPSA15211_00-DRAGONBALLSPARK0", e)}
                  >
                    <Gamepad2 className="size-3" />
                    PS5
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://www.xbox.com/en-IN/games/store/dragon-ball-sparking-zero/9N7XMJJHNFC3", e)}
                  >
                    <Gamepad2 className="size-3" />
                    Xbox
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Devil May Cry 5 Card */}
        <div 
          className={`game-card flex-shrink-0 w-full h-[280px] rounded-xl shadow-sm cursor-pointer perspective ${flippedCard === 'dmc5' ? 'is-flipped' : ''} hover:shadow transition-shadow`}
          onClick={() => toggleFlip('dmc5')}
        >
          <div className="card-content absolute w-full h-full transition-all duration-500 preserve-3d">
            {/* Front of the card */}
            <div className="card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border">
              <div className="w-full h-full relative">
                <Image 
                  src="/games/devil-may-cry-5.jpg" 
                  alt="Devil May Cry 5"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-3">
                  <h3 className="text-white text-base font-medium">Devil May Cry 5</h3>
                  <p className="text-slate-300 text-xs">Stylish demon-slaying action</p>
                </div>
              </div>
            </div>

            {/* Back of the card */}
            <div className="card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-card p-3 flex flex-col justify-between rotate-y-180 border border-border">
              <div>
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mb-2">
                  <Joystick className="size-4 text-purple-500" />
                </div>
                <h3 className="text-base font-medium mb-1">Devil May Cry 5</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Fast-paced, combo-driven action game featuring three unique playable characters
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://store.steampowered.com/app/601150/Devil_May_Cry_5/", e)}
                  >
                    <Monitor className="size-3" />
                    PC
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://www.playstation.com/en-in/games/devil-may-cry-5/", e)}
                  >
                    <Gamepad2 className="size-3" />
                    PS5
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1.5 bg-muted/5 hover:bg-muted/50"
                    onClick={(e) => openPlatformLink("https://www.xbox.com/en-IN/games/store/devil-may-cry-5/BNLG5J5KDVJ3", e)}
                  >
                    <Gamepad2 className="size-3" />
                    Xbox
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}