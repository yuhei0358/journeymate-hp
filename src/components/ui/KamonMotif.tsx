"use client";

import { cn } from "@/lib/utils";

interface KamonMotifProps {
  size?: number;
  className?: string;
  opacity?: number;
  color?: string;
}

export default function KamonMotif({
  size = 120,
  className,
  opacity = 0.05,
  color = "currentColor",
}: KamonMotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="60" cy="60" r="56" stroke={color} strokeWidth="1.5" />
      {/* Inner circle */}
      <circle cx="60" cy="60" r="42" stroke={color} strokeWidth="1" />
      {/* Cross pattern — 4 petals resembling a simplified kamon */}
      <path
        d="M60 18 Q68 40 60 60 Q52 40 60 18Z"
        fill={color}
      />
      <path
        d="M60 102 Q68 80 60 60 Q52 80 60 102Z"
        fill={color}
      />
      <path
        d="M18 60 Q40 68 60 60 Q40 52 18 60Z"
        fill={color}
      />
      <path
        d="M102 60 Q80 68 60 60 Q80 52 102 60Z"
        fill={color}
      />
      {/* Center dot */}
      <circle cx="60" cy="60" r="4" fill={color} />
    </svg>
  );
}
