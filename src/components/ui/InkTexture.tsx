"use client";

import { cn } from "@/lib/utils";

interface InkTextureProps {
  opacity?: number;
  className?: string;
}

export default function InkTexture({
  opacity = 0.04,
  className,
}: InkTextureProps) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="ink-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#ink-noise)" />
      </svg>
    </div>
  );
}
