"use client";

import { Cpu, ScanSearch, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { introPromptLines } from "@/lib/constants";
import { introTypingDurationMs } from "@/lib/motion";

function useTypedLines(lines: string[], targetDurationMs = introTypingDurationMs) {
  const [typedLines, setTypedLines] = useState<string[]>(() => lines.map(() => ""));
  const speed = useMemo(() => {
    const totalChars = lines.reduce((sum, line) => sum + line.length, 0);

    return Math.max(12, Math.floor(targetDurationMs / Math.max(totalChars, 1)));
  }, [lines, targetDurationMs]);

  useEffect(() => {
    setTypedLines(lines.map(() => ""));

    let lineIndex = 0;
    let charIndex = 0;

    const timer = window.setInterval(() => {
      setTypedLines((current) => {
        if (lineIndex >= lines.length) {
          window.clearInterval(timer);
          return current;
        }

        const next = [...current];
        const line = lines[lineIndex];
        next[lineIndex] = line.slice(0, charIndex + 1);

        if (charIndex >= line.length) {
          lineIndex += 1;
          charIndex = 0;
        } else {
          charIndex += 1;
        }

        return next;
      });
    }, speed);

    return () => window.clearInterval(timer);
  }, [lines, speed]);

  return typedLines;
}

export function PromptScene() {
  const typedLines = useTypedLines(introPromptLines);

  const activeLine = useMemo(() => {
    const firstIncompleteIndex = typedLines.findIndex(
      (line, index) => line.length < introPromptLines[index].length,
    );

    return firstIncompleteIndex === -1
      ? typedLines.length - 1
      : firstIncompleteIndex;
  }, [typedLines]);

  return (
    <div className="mx-auto grid h-full w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="terminal-panel scanlines px-6 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="accent">Phase 01</Badge>
          <Badge>Profile Reconstruction</Badge>
          <Badge variant="success">Safe Signals Only</Badge>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-300/75" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-[0.72rem] uppercase tracking-[0.32em] text-muted-foreground">
            boot.prompt
          </span>
        </div>

        <div className="mt-8 rounded-[24px] border border-white/8 bg-black/20 p-5 font-mono text-sm leading-7 text-foreground/88 sm:text-base">
          {typedLines.map((line, index) => (
            <div
              key={introPromptLines[index]}
              className="flex gap-3"
            >
              <span className="text-accent/70">$</span>
              <span className="min-h-[1.75rem]">
                {line}
                {index === activeLine ? (
                  <span className="ml-1 inline-block h-5 w-2 translate-y-1 rounded-sm bg-accent align-middle animate-blink" />
                ) : null}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <div className="glass-panel rounded-[28px] p-5">
          <ScanSearch className="h-5 w-5 text-accent" />
          <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
            Signal Loading
          </p>
          <p className="mt-3 text-sm leading-6 text-foreground/78">
            Text, context, and portfolio-ready highlights are staged without
            leaning on edgy terminal theatrics.
          </p>
        </div>
        <div className="glass-panel rounded-[28px] p-5">
          <Cpu className="h-5 w-5 text-accent-2" />
          <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
            Clean Inference
          </p>
          <p className="mt-3 text-sm leading-6 text-foreground/78">
            The motion language reads as AI inference and representation
            building, not fake intrusion or exploit fantasy.
          </p>
        </div>
        <div className="glass-panel rounded-[28px] p-5">
          <ShieldCheck className="h-5 w-5 text-accent-3" />
          <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
            Recruiter Safe
          </p>
          <p className="mt-3 text-sm leading-6 text-foreground/78">
            High polish, high contrast, and clear hierarchy keep the story
            legible once the intro hands off to the portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
