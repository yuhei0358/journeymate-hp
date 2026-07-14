"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp, reducedFadeIn, reducedStagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function ScrollRevealContainer({
  children,
  className,
  staggerDelay = 0.12,
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();
  const container = prefersReduced
    ? reducedStagger
    : {
        ...staggerContainer,
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.05,
          },
        },
      };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const item = prefersReduced ? reducedFadeIn : fadeUp;

  return (
    <motion.div className={cn(className)} variants={item}>
      {children}
    </motion.div>
  );
}
