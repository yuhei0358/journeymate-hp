import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "dark" | "white" | "gold";
  className?: string;
}

export default function Badge({
  children,
  variant = "accent",
  className,
}: BadgeProps) {
  const variants = {
    accent: "bg-crimson-light text-crimson border border-crimson/20",
    dark:   "bg-white/10 text-white border border-white/20",
    white:  "bg-white text-crimson border border-crimson/20",
    gold:   "bg-gold-light text-gold border border-gold/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-semibold tracking-[0.1em] uppercase px-3 py-1 rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
