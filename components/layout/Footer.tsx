import { contactDetails } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-8 pt-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          Pranjal Shukla&apos;s portfolio focused on ML systems, backend APIs,
          quantitative builds, and recruiter-friendly clarity.
        </p>
        <a
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80 transition hover:text-accent"
          href={`mailto:${contactDetails.email}`}
        >
          {contactDetails.email}
        </a>
      </div>
    </footer>
  );
}
