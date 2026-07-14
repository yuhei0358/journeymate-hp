import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({
  children,
  light = false,
  className,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-eyebrow tracking-[0.2em] uppercase",
        light ? "text-gold/70" : "text-crimson",
        className
      )}
    >
      {children}
    </p>
  );
}
