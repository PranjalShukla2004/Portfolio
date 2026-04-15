"use client";

import { motion, useReducedMotion } from "motion/react";

import { fadeUp, sharedViewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "show"}
      viewport={sharedViewport}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}
