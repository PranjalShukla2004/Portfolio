"use client";

import { Menu, RotateCcw, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

type NavbarProps = {
  onReplayIntro: () => void;
};

export function Navbar({ onReplayIntro }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-white/10 px-4 py-3 transition-all duration-300 sm:px-5",
            scrolled
              ? "bg-[rgba(5,10,20,0.78)] shadow-glow backdrop-blur-xl"
              : "bg-[rgba(5,10,20,0.45)] backdrop-blur-md",
          )}
        >
          <a
            className="flex items-center gap-3"
            href="#home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-[radial-gradient(circle_at_top,#37d8ff,#0b1428)] text-sm font-semibold text-white shadow-[0_0_24px_rgba(55,216,255,0.2)]">
              PS
            </span>
            <div className="hidden min-w-0 sm:block">
              <p className="text-sm font-medium text-white">Pranjal Shukla</p>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                Software x ML
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="rounded-full px-4 py-2 text-sm text-foreground/76 transition hover:bg-white/[0.06] hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              variant="ghost"
              size="sm"
              onClick={onReplayIntro}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Replay Intro
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
            >
              <a href="#contact">Let&apos;s Talk</a>
            </Button>
          </div>

          <Button
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden"
            size="icon"
            variant="ghost"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {menuOpen ? (
        <div className="px-4 pt-3 sm:px-6 lg:hidden">
          <div className="mx-auto max-w-6xl rounded-[30px] border border-white/10 bg-[rgba(6,16,29,0.94)] p-5 shadow-glow backdrop-blur-2xl">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="rounded-2xl px-4 py-3 text-sm text-foreground/85 transition hover:bg-white/[0.05] hover:text-white"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
              <Button
                variant="ghost"
                onClick={() => {
                  setMenuOpen(false);
                  onReplayIntro();
                }}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Replay Intro
              </Button>
              <Button
                asChild
                variant="glow"
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
