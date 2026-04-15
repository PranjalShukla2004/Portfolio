"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

import { IntroSequence } from "@/components/intro/IntroSequence";
import { Button } from "@/components/ui/button";
import { introTimeline, type IntroPhase } from "@/lib/motion";

type IntroOverlayProps = {
  onComplete: () => void;
};

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const reducedMotion = useReducedMotion();
  const [phaseIndex, setPhaseIndex] = useState(0);
  const completionRef = useRef(false);

  const phases = useMemo(
    () =>
      reducedMotion
        ? ([{ phase: "reveal", duration: 420 }] as const)
        : introTimeline,
    [reducedMotion],
  );

  const currentPhase = phases[phaseIndex]?.phase ?? "reveal";
  const currentPhaseDuration = phases[phaseIndex]?.duration ?? 0;
  const totalDuration = phases.reduce((sum, phase) => sum + phase.duration, 0);
  const elapsedBeforePhase = phases
    .slice(0, phaseIndex)
    .reduce((sum, phase) => sum + phase.duration, 0);
  const progressStart = totalDuration === 0 ? 0 : (elapsedBeforePhase / totalDuration) * 100;
  const progressEnd =
    totalDuration === 0
      ? 100
      : ((elapsedBeforePhase + currentPhaseDuration) / totalDuration) * 100;

  const finish = () => {
    if (completionRef.current) {
      return;
    }

    completionRef.current = true;
    onComplete();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        finish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const phase = phases[phaseIndex];

    if (!phase) {
      finish();
      return;
    }

    const timer = window.setTimeout(() => {
      if (phaseIndex === phases.length - 1) {
        finish();
      } else {
        setPhaseIndex((index) => index + 1);
      }
    }, phase.duration);

    return () => window.clearTimeout(timer);
  }, [finish, phaseIndex, phases]);

  return (
    <motion.div
      aria-label="Portfolio intro animation"
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-[rgba(3,9,18,0.92)] backdrop-blur-2xl"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      role="dialog"
    >
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 px-6 pt-6 sm:px-8">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-accent/80">
            Intro Sequence
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            AI-inspired system boot with skip and replay controls.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={finish}
        >
          Skip Intro
        </Button>
      </div>

      <IntroSequence phase={currentPhase as IntroPhase} />

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-6 sm:px-8">
        <div className="mx-auto w-full max-w-5xl rounded-full border border-white/10 bg-black/20 p-1">
          <motion.div
            key={phaseIndex}
            animate={{ width: `${progressEnd}%` }}
            className="h-1.5 rounded-full bg-[linear-gradient(90deg,rgba(55,216,255,0.9),rgba(28,255,162,0.8))]"
            initial={{ width: `${progressStart}%` }}
            transition={{
              duration: reducedMotion ? 0 : currentPhaseDuration / 1000,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
