"use client";

import { motion } from "motion/react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/constants";

export function SkillsSection() {
  return (
    <SectionContainer id="skills">
      <SectionHeading
        description="The skills layout intentionally structures as clusters so that it is grouped, quick to scan, and consistent."
        eyebrow="Capability Map"
        title="Skills that form the base of everything."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.category}>
            <GlowCard className="h-full rounded-[30px] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-accent/78">
                    Cluster 0{groupIndex + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,#37d8ff33,#0b1428)]" />
              </div>

              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                {group.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {group.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground/80"
                    transition={{ type: "spring", stiffness: 240, damping: 22 }}
                    whileHover={{ y: -2 }}
                  >
                    {String(itemIndex + 1).padStart(2, "0")} {item}
                  </motion.span>
                ))}
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
