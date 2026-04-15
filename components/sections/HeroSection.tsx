"use client";

import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { GridBackground } from "@/components/ui/GridBackground";
import { contactDetails, heroContent, heroStats } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-32"
    >
      <GridBackground />
      <div className="absolute left-[8%] top-28 h-48 w-48 rounded-full bg-accent/18 blur-[120px]" />
      <div className="absolute right-[12%] top-20 h-56 w-56 rounded-full bg-accent-2/14 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <motion.div
          initial={reducedMotion ? false : "hidden"}
          animate={reducedMotion ? undefined : "show"}
          variants={staggerContainer}
          className="relative z-10"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="accent">{heroContent.badge}</Badge>
          </motion.div>

          <motion.p
            className="mt-6 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.38em] text-muted-foreground"
            variants={fadeUp}
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {heroContent.roleLine}
          </motion.p>

          <motion.h1
            className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl"
            variants={fadeUp}
          >
            Pranjal Shukla
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            variants={fadeUp}
          >
            {heroContent.intro}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            variants={fadeUp}
          >
            <AnimatedButton
              asChild
              size="lg"
              variant="glow"
            >
              <a href="#projects">
                View Projects
                <ArrowDownRight className="ml-2 h-4 w-4" />
              </a>
            </AnimatedButton>
            <AnimatedButton
              asChild
              size="lg"
              variant="outline"
            >
              <a
                href={contactDetails.resume}
                rel="noreferrer"
                target="_blank"
              >
                Resume
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </AnimatedButton>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap gap-3"
            variants={fadeUp}
          >
            {heroContent.pills.map((pill) => (
              <div
                key={pill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground/78"
              >
                {pill}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={reducedMotion ? undefined : "show"}
          className="relative"
          initial={reducedMotion ? false : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="terminal-panel scanlines overflow-hidden rounded-[34px] p-6 sm:p-8"
            variants={fadeUp}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-accent/80">
                  Final Output
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Profile surface is live.
                </h2>
              </div>
              <div className="rounded-full border border-success/25 bg-success/10 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.26em] text-success">
                Online
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {heroStats.map((stat, index) => (
                <GlowCard
                  key={stat.label}
                  className="rounded-[26px] border-white/8 bg-black/20 p-5 shadow-none"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-3 text-lg font-medium text-white">
                        {stat.value}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-accent">
                      0{index + 1}
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>

            <div className="mt-6 rounded-[26px] border border-white/8 bg-[linear-gradient(135deg,rgba(55,216,255,0.12),rgba(255,255,255,0.03))] p-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
                Current Snapshot
              </p>
              <p className="mt-4 text-sm leading-7 text-foreground/76">
                The portfolio is grounded in the actual work: research-grade ML
                experimentation, production-style internships, and systems builds
                with measurable outcomes rather than generic portfolio filler.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
