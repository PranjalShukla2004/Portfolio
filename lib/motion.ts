import type { Transition, Variants } from "motion/react";

export const easeOutQuint = [0.22, 1, 0.36, 1] as const;

export const baseTransition: Transition = {
  duration: 0.68,
  ease: easeOutQuint,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const softReveal: Variants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(8px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: easeOutQuint,
    },
  },
};

export const sharedViewport = {
  once: true,
  amount: 0.2,
};

export const introSceneDurationMs = 4000;
export const introTypingDurationMs = 3400;
export const introRevealDurationMs = 800;

export const introTimeline = [
  { phase: "prompt", duration: introSceneDurationMs },
  { phase: "neural", duration: introSceneDurationMs },
  { phase: "terminal", duration: introSceneDurationMs },
  { phase: "reveal", duration: introRevealDurationMs },
] as const;

export type IntroPhase = (typeof introTimeline)[number]["phase"];
