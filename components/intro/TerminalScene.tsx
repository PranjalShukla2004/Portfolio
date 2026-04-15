"use client";

import { useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { introTerminalSequence } from "@/lib/constants";
import { introTypingDurationMs } from "@/lib/motion";

function useTypedOutput(lines: string[], targetDurationMs = introTypingDurationMs) {
  const [visibleLines, setVisibleLines] = useState<string[]>(() =>
    lines.map(() => ""),
  );
  const speed = useMemo(() => {
    const totalChars = lines.reduce((sum, line) => sum + line.length, 0);

    return Math.max(8, Math.floor(targetDurationMs / Math.max(totalChars, 1)));
  }, [lines, targetDurationMs]);

  useEffect(() => {
    setVisibleLines(lines.map(() => ""));

    let lineIndex = 0;
    let charIndex = 0;

    const timer = window.setInterval(() => {
      setVisibleLines((current) => {
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

  return visibleLines;
}

export function TerminalScene() {
  const flattenedLines = useMemo(
    () =>
      introTerminalSequence.flatMap((entry) => [
        `> ${entry.command}`,
        ...entry.output.map((line) => `  ${line}`),
      ]),
    [],
  );
  const visibleLines = useTypedOutput(flattenedLines);

  const activeLine = useMemo(() => {
    const firstIncompleteIndex = visibleLines.findIndex(
      (line, index) => line.length < flattenedLines[index].length,
    );

    return firstIncompleteIndex === -1
      ? visibleLines.length - 1
      : firstIncompleteIndex;
  }, [flattenedLines, visibleLines]);

  return (
    <div className="mx-auto grid h-full w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="glass-panel rounded-[30px] p-6 sm:p-7">
        <Badge variant="accent">Phase 03</Badge>
        <h3 className="mt-6 text-2xl font-semibold text-white">
          Command surface resolves the narrative.
        </h3>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
          This is where the intro stops implying hidden state formation and
          starts spelling out the portfolio information architecture directly.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-[24px] border border-white/8 bg-black/20 p-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-accent/80">
              Parse
            </p>
            <p className="mt-3 text-sm text-foreground/75">
              Experience and project signals are transformed into structured
              surface areas.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/8 bg-black/20 p-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-accent-2/80">
              Map
            </p>
            <p className="mt-3 text-sm text-foreground/75">
              Skills are clustered into categories that feel deliberate rather
              than keyword-stuffed.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/8 bg-black/20 p-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-accent-3/80">
              Render
            </p>
            <p className="mt-3 text-sm text-foreground/75">
              The final handoff is into a clear landing page, not another layer
              of interface theater.
            </p>
          </div>
        </div>
      </div>

      <div className="terminal-panel scanlines px-6 py-6 sm:px-8 sm:py-8">
        <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-300/75" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 font-mono text-[0.72rem] uppercase tracking-[0.32em] text-muted-foreground">
              render.terminal
            </span>
          </div>
          <Badge>Fast Path</Badge>
        </div>

        <div className="mt-6 space-y-2 font-mono text-sm leading-7 text-foreground/88 sm:text-[0.95rem]">
          {visibleLines.map((line, index) => {
            const isCommand = flattenedLines[index].startsWith(">");

            return (
              <div
                key={`${flattenedLines[index]}-${index}`}
                className={isCommand ? "text-accent/95" : "text-foreground/72"}
              >
                {line}
                {index === activeLine ? (
                  <span className="ml-1 inline-block h-5 w-2 translate-y-1 rounded-sm bg-accent align-middle animate-blink" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
