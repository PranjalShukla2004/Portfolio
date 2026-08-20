"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type ProjectCategory } from "@/lib/constants";
import { cn } from "@/lib/utils";

const filters: Array<"All" | ProjectCategory> = ["All", "Web", "ML/AI", "Systems"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = projects
    .filter((project) =>
      activeFilter === "All" ? true : project.category === activeFilter,
    )
    .sort((left, right) => Number(Boolean(right.featured)) - Number(Boolean(left.featured)));

  return (
    <SectionContainer id="projects">
      <SectionHeading
        description="These are my strongest projects across ML research, hackathons, backend systems, and product-focused engineering work."
        eyebrow="Selected Work"
        title="Projects that show compatibility and experience."
      />

      <Reveal className="mt-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              activeFilter === filter
                ? "border-accent/35 bg-accent/12 text-accent"
                : "border-white/10 bg-white/[0.03] text-foreground/76 hover:border-white/20 hover:text-white",
            )}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <Reveal
            key={project.title}
            className={project.featured ? "lg:col-span-2" : undefined}
          >
            <GlowCard
              className={cn(
                "h-full rounded-[32px] p-6 sm:p-7",
                project.featured &&
                  "bg-[linear-gradient(135deg,rgba(55,216,255,0.12),rgba(255,255,255,0.04))]",
              )}
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant={project.featured ? "accent" : "default"}>
                  {project.featured ? "Featured" : project.category}
                </Badge>
                {project.featured ? <Badge>{project.category}</Badge> : null}
              </div>

              <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/8 bg-black/20 px-4 py-3 text-sm text-foreground/74 lg:max-w-xs">
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-muted-foreground">
                    Outcome
                  </p>
                  <p className="mt-3 leading-6">{project.outcome}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-foreground/76"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground/80 transition hover:border-accent/30 hover:text-white"
                  href={project.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github className="h-4 w-4" />
                  {project.linkLabel ?? "GitHub"}
                </a>
                {project.live ? (
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm text-accent transition hover:bg-accent/14"
                    href={project.live}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
