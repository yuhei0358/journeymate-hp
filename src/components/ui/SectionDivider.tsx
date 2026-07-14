"use client";

import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "ripple" | "brush" | "wave";
  color?: string;
  flip?: boolean;
  className?: string;
}

export default function SectionDivider({
  variant = "ripple",
  color = "#F5F0E8",
  flip = false,
  className,
}: SectionDividerProps) {
  const paths: Record<string, string> = {
    ripple:
      "M0,64 C160,32 320,96 480,64 C640,32 800,96 960,64 L960,128 L0,128 Z",
    brush:
      "M0,80 C120,40 200,100 320,70 C440,40 560,90 680,60 C800,30 900,80 960,50 L960,128 L0,128 Z",
    wave:
      "M0,96 Q240,32 480,96 Q720,160 960,96 L960,128 L0,128 Z",
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-[0]",
        flip && "rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 960 128"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-12 lg:h-16"
        fill={color}
      >
        <path d={paths[variant]} />
      </svg>
    </div>
  );
}
