// Framer Motion variant presets for JourneyMate — 和モダン edition

const EXPO_EASE = [0.19, 1, 0.22, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EXPO_EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EXPO_EASE },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EXPO_EASE },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EXPO_EASE },
  },
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EXPO_EASE },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const drawLine = {
  hidden: { scaleX: 0, originX: "0%" },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease: EXPO_EASE },
  },
};

// 和モダン: Brush stroke reveal (horizontal, like ink on washi)
export const brushStroke = {
  hidden: { scaleX: 0, originX: "0%" },
  visible: {
    scaleX: 1,
    transition: { duration: 1.4, ease: EXPO_EASE },
  },
};

// 和モダン: Ripple reveal for circular motifs
export const rippleReveal = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: EXPO_EASE },
  },
};

// 和モダン: Gentle parallax float for background decorations
export const parallaxFloat = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, ease: EXPO_EASE },
  },
};

// Reduced motion fallbacks
export const reducedFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export const reducedStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};
