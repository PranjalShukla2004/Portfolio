"use client";

import { CalendarRange } from "lucide-react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceEntries } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <SectionHeading
        description="This section will show you an easy to follow vertical flow of the different professional and academic relevant experiences in my field."
        eyebrow="Trajectory"
        title="Experiences through the last few years"
      />

      <div className="relative mt-14">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(55,216,255,0.35),rgba(255,255,255,0.02))] sm:block" />

        <div className="space-y-8">
          {experienceEntries.map((entry, index) => (
            <Reveal key={`${entry.role}-${entry.organization}`}>
              <div className="relative pl-0 sm:pl-16">
                <div className="absolute left-0 top-10 hidden h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-background text-accent shadow-[0_0_24px_rgba(55,216,255,0.18)] sm:flex">
                  0{index + 1}
                </div>

                <GlowCard className="rounded-[30px] p-6 sm:p-7">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-accent/78">
                        Experience 0{index + 1}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        {entry.role}
                      </h3>
                      <p className="mt-2 text-base text-foreground/78">
                        {entry.organization}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground">
                      <CalendarRange className="h-4 w-4 text-accent" />
                      {entry.dates}
                    </div>
                  </div>

                  <div className="mt-7 space-y-4">
                    {entry.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex gap-4 rounded-[22px] border border-white/8 bg-black/15 px-4 py-4"
                      >
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                        <p className="text-sm leading-7 text-foreground/76 sm:text-base">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
