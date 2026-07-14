"use client";

import { cn } from "@/lib/utils";

interface ToriiSilhouetteProps {
  className?: string;
  opacity?: number;
  color?: string;
}

export default function ToriiSilhouette({
  className,
  opacity = 0.06,
  color = "currentColor",
}: ToriiSilhouetteProps) {
  return (
    <svg
      viewBox="0 0 200 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Top beam (kasagi) — curved */}
      <path
        d="M10 40 Q100 20 190 40 L185 52 Q100 35 15 52 Z"
        fill={color}
      />
      {/* Second beam (nuki) */}
      <rect x="30" y="60" width="140" height="8" rx="2" fill={color} />
      {/* Left pillar */}
      <rect x="35" y="52" width="12" height="200" rx="2" fill={color} />
      {/* Right pillar */}
      <rect x="153" y="52" width="12" height="200" rx="2" fill={color} />
      {/* Center vertical */}
      <rect x="94" y="40" width="12" height="28" rx="2" fill={color} />
    </svg>
  );
}
