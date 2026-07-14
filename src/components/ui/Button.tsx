import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline" | "text" | "gold" | "sumi";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-crimson text-white hover:bg-crimson-hover",
  ghost:   "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20",
  outline: "border border-crimson text-crimson hover:bg-crimson hover:text-white",
  text:    "text-crimson hover:text-crimson-hover underline-offset-4 hover:underline p-0",
  gold:    "bg-gold text-sumi hover:bg-gold/90",
  sumi:    "bg-sumi text-ivory hover:bg-sumi-light",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2 rounded-full",
  md: "text-sm px-6 py-3 rounded-full",
  lg: "text-base px-8 py-4 rounded-full",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2",
    variantStyles[variant],
    variant !== "text" && sizeStyles[size],
    className
  );

  if (props.as === "link") {
    return (
      <Link href={props.href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={base}
      onClick={(props as ButtonAsButton).onClick}
      type={(props as ButtonAsButton).type ?? "button"}
      disabled={(props as ButtonAsButton).disabled}
    >
      {children}
    </button>
  );
}
