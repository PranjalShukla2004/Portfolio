"use client";

import { AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { IntroOverlay } from "@/components/intro/IntroOverlay";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

const INTRO_STORAGE_KEY = "pranjal-portfolio-intro-seen";

export function PortfolioShell() {
  const reducedMotion = useReducedMotion();
  const [showIntro, setShowIntro] = useState(false);
  const [introKey, setIntroKey] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);

    if (reducedMotion) {
      setShowIntro(false);
      return;
    }

    const hasSeenIntro = sessionStorage.getItem(INTRO_STORAGE_KEY) === "true";
    setShowIntro(!hasSeenIntro);
  }, [reducedMotion]);

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  const handleIntroComplete = () => {
    sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem(INTRO_STORAGE_KEY);
    setIntroKey((value) => value + 1);
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <div className="site-shell min-h-screen">
      <Navbar onReplayIntro={handleReplayIntro} />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <AnimatePresence>
        {hydrated && showIntro ? (
          <IntroOverlay
            key={introKey}
            onComplete={handleIntroComplete}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
