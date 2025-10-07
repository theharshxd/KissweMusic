"use client";

import { Smartphone, Laptop, Headphones, Keyboard, Cpu, Microchip, ChevronDown, Mouse } from "lucide-react";
import { useState } from "react";

export const TechGear = () => {
  const [expandedDevice, setExpandedDevice] = useState<string | null>(null);

  const toggleDevice = (device: string) => {
    setExpandedDevice(expandedDevice === device ? null : device);
  };

  return (
    <div className="p-0">
      <div className="space-y-2">
        <h3 className="px-5 py-3 text-sm font-medium text-muted-foreground border-b border-border">Current Devices</h3>
        <div className="grid">
          <button 
            onClick={() => toggleDevice('phone')}
            className="flex items-center justify-between w-full px-5 py-3 hover:bg-muted/50 transition-colors border-b border-border"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-muted/50">
                <Smartphone className="size-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium">Motorola G54</p>
              </div>
            </div>
            <ChevronDown className={`size-4 text-muted-foreground transition-transform ${expandedDevice === 'phone' ? 'rotate-180' : ''}`} />
          </button>
          {expandedDevice === 'phone' && (
            <div className="px-5 py-3 border-b border-border bg-muted/5">
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Processor</span>
                  <span>MediaTek Dimensity 7020</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">RAM</span>
                  <span>8GB LPDDR4X</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Storage</span>
                  <span>128GB UFS 2.2</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Display</span>
                  <span>6.5&quot; FHD+ 120Hz</span>
                </li>
              </ul>
            </div>
          )}

          <button 
            onClick={() => toggleDevice('pc')}
            className="flex items-center justify-between w-full px-5 py-3 hover:bg-muted/50 transition-colors border-b border-border"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-muted/50">
                <Cpu className="size-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium">Custom Rig</p>
              </div>
            </div>
            <ChevronDown className={`size-4 text-muted-foreground transition-transform ${expandedDevice === 'pc' ? 'rotate-180' : ''}`} />
          </button>
          {expandedDevice === 'pc' && (
            <div className="px-5 py-3 border-b border-border bg-muted/5">
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">CPU</span>
                  <span>AMD Ryzen 5 4500</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">GPU</span>
                  <span>AMD Radeon RX 580 8GB</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">RAM</span>
                  <span>16GB DDR4 3200MHz</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Storage</span>
                  <span>512GB NVMe SSD</span>
                </li>
              </ul>
            </div>
          )}

          <button 
            onClick={() => toggleDevice('server')}
            className="flex items-center justify-between w-full px-5 py-3 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-muted/50">
                <Laptop className="size-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium">HP 245 G7</p>
              </div>
            </div>
            <ChevronDown className={`size-4 text-muted-foreground transition-transform ${expandedDevice === 'server' ? 'rotate-180' : ''}`} />
          </button>
          {expandedDevice === 'server' && (
            <div className="px-5 py-3 bg-muted/5">
              <div className="mb-2 text-xs text-muted-foreground italic">
                Currently used as Home Server
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">CPU</span>
                  <span>AMD A6-6000</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">RAM</span>
                  <span>4GB DDR4</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Storage</span>
                  <span>1TB HDD</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">OS</span>
                  <span>Arch + hyprland</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-2">
        <h3 className="px-5 py-3 text-sm font-medium text-muted-foreground border-t border-b border-border">Current Gear</h3>
        <div className="grid">
          <div className="flex items-center gap-3 px-5 py-3 hover:bg-muted/50 transition-colors border-b border-border">
            <div className="p-2 rounded-md bg-muted/50">
              <Headphones className="size-4 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">7Hz x Crinacle Zero:2</p>
              <p className="text-sm text-muted-foreground">Tripowin Grace IEM Cable</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 hover:bg-muted/50 transition-colors border-b border-border">
            <div className="p-2 rounded-md bg-muted/50">
              <Microchip className="size-4 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">Tiandirenhe ES Pro</p>
              <p className="text-sm text-muted-foreground">ES9318C DAC</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 hover:bg-muted/50 transition-colors border-b border-border">
            <div className="p-2 rounded-md bg-muted/50">
              <Keyboard className="size-4 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">Aula F75</p>
              <p className="text-sm text-muted-foreground">75% Wireless Gasket Mounted Keyboard</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 hover:bg-muted/50 transition-colors">
            <div className="p-2 rounded-md bg-muted/50">
              <Mouse className="size-4 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">Ant Esports GM810 Pro</p>
              <p className="text-sm text-muted-foreground">Tri-connectivity Wireless Mouse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 