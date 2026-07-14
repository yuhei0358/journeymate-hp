import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  gradient?: string;
  className?: string;
  aspectRatio?: string;
  children?: React.ReactNode;
}

export default function ImagePlaceholder({
  gradient = "linear-gradient(135deg, #1A1A1A 0%, #1B3A5C 100%)",
  className,
  aspectRatio = "3/2",
  children,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl", className)}
      style={{ background: gradient, aspectRatio }}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Light reflection */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent" />
      {children}
    </div>
  );
}
