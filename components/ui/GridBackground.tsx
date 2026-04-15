import { cn } from "@/lib/utils";

type GridBackgroundProps = {
  className?: string;
};

export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 section-grid opacity-[0.18]" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(55,216,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,29,0.08),rgba(6,16,29,0.72)_80%,rgba(6,16,29,1))]" />
    </div>
  );
}
