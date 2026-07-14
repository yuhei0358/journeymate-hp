"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, fadeIn, fadeLeft, fadeRight, reducedFadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Direction = "up" | "none" | "left" | "right";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
  /** Use animate instead of whileInView — for hero sections that are visible on load */
  immediate?: boolean;
}

const directionVariants = {
  up:    fadeUp,
  none:  fadeIn,
  left:  fadeLeft,
  right: fadeRight,
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
  immediate = false,
}: FadeInProps) {
  const prefersReduced = useReducedMotion();
  const base = prefersReduced ? reducedFadeIn : directionVariants[direction];

  const variants = {
    hidden: base.hidden,
    visible: {
      ...base.visible,
      transition: {
        ...(base.visible as { transition: Record<string, unknown> }).transition,
        delay,
      },
    },
  };

  if (immediate) {
    return (
      <motion.div
        className={cn(className)}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
