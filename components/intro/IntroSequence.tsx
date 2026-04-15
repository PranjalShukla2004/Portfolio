"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "motion/react";

import { PromptScene } from "@/components/intro/PromptScene";
import { TerminalScene } from "@/components/intro/TerminalScene";
import { GridBackground } from "@/components/ui/GridBackground";
import type { IntroPhase } from "@/lib/motion";

const NeuralNetworkScene = dynamic(
  () => import("@/components/intro/NeuralNetworkScene"),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(55,216,255,0.12),rgba(6,16,29,0.92))]" />
    ),
  },
);

type IntroSequenceProps = {
  phase: IntroPhase;
};

export function IntroSequence({ phase }: IntroSequenceProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <GridBackground className="opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(55,216,255,0.12),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(28,255,162,0.1),transparent_22%)]" />

      <AnimatePresence mode="wait">
        {phase === "prompt" ? (
          <motion.div
            key="prompt"
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -18, filter: "blur(12px)" }}
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full w-full items-center px-6 py-10 sm:px-10 sm:py-14"
          >
            <PromptScene />
          </motion.div>
        ) : null}

        {phase === "neural" ? (
          <motion.div
            key="neural"
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(16px)" }}
            initial={{ opacity: 0, scale: 0.96, filter: "blur(20px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <NeuralNetworkScene />
          </motion.div>
        ) : null}

        {phase === "terminal" ? (
          <motion.div
            key="terminal"
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 16, filter: "blur(16px)" }}
            initial={{ opacity: 0, y: 24, filter: "blur(16px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full w-full items-center px-6 py-10 sm:px-10 sm:py-14"
          >
            <TerminalScene />
          </motion.div>
        ) : null}

        {phase === "reveal" ? (
          <motion.div
            key="reveal"
            animate={{ opacity: 0, scale: 1.04, filter: "blur(24px)" }}
            initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,216,255,0.16),rgba(6,16,29,0.92)_48%,rgba(6,16,29,1)_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-4 text-center">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.42em] text-accent/80">
                  Interface Ready
                </p>
                <h2 className="text-4xl font-semibold text-white sm:text-6xl">
                  Resolving portfolio surface
                </h2>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
