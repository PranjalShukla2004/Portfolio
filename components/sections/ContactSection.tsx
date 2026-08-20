"use client";

import { FileText, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { GlowCard } from "@/components/ui/GlowCard";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Textarea } from "@/components/ui/textarea";
import { contactDetails } from "@/lib/constants";

function getGmailComposeUrl({
  body,
  subject,
}: {
  body?: string;
  subject?: string;
}) {
  const params = new URLSearchParams({
    fs: "1",
    tf: "1",
    to: contactDetails.email,
    view: "cm",
  });

  if (subject) {
    params.set("su", subject);
  }

  if (body) {
    params.set("body", body);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const composeUrl = getGmailComposeUrl({
      body: [
        `Name: ${name || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        "",
        message || "I would like to connect about your work.",
      ].join("\n"),
      subject: `Portfolio inquiry from ${name || "a visitor"}`,
    });

    window.location.assign(composeUrl);
  };

  return (
    <SectionContainer id="contact">
      <SectionHeading
        description="Reach out for software engineering, ML systems, backend and quant opportunities. The direct links below use the contact details from the CV."
        eyebrow="Contact"
        title="Would like to know more about me?"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <GlowCard className="h-full rounded-[32px] p-6 sm:p-7">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-accent/78">
              Direct Channels
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Make the next step obvious.
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Email is the fastest route, but the profile links and resume are
              here as well for quick screening or follow-up.
            </p>

            <div className="mt-8 space-y-4">
              <a
                className="flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-foreground/78 transition hover:border-accent/30 hover:text-white"
                href={getGmailComposeUrl({})}
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent" />
                  {contactDetails.email}
                </span>
                <Send className="h-4 w-4" />
              </a>
              <a
                className="flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-foreground/78 transition hover:border-accent/30 hover:text-white"
                href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent" />
                  {contactDetails.phone}
                </span>
                <Send className="h-4 w-4" />
              </a>
              <a
                className="flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-foreground/78 transition hover:border-accent/30 hover:text-white"
                href={contactDetails.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-accent" />
                  LinkedIn
                </span>
                <Send className="h-4 w-4" />
              </a>
              <a
                className="flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-foreground/78 transition hover:border-accent/30 hover:text-white"
                href={contactDetails.github}
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-accent" />
                  GitHub
                </span>
                <Send className="h-4 w-4" />
              </a>
              <a
                className="flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-foreground/78 transition hover:border-accent/30 hover:text-white"
                href={contactDetails.resume}
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-accent" />
                  Resume PDF
                </span>
                <Send className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-foreground/78">
                <MapPin className="h-4 w-4 text-accent" />
                {contactDetails.location}
              </div>
            </div>
          </GlowCard>
        </Reveal>

        <Reveal>
          <GlowCard className="rounded-[32px] p-6 sm:p-7">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-accent/78">
              Gmail Compose Form
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={handleSubmit}
            >
              <Input
                maxLength={120}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                required
                value={name}
              />
              <Input
                maxLength={240}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                required
                type="email"
                value={email}
              />
              <Textarea
                maxLength={4000}
                minLength={10}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="What are you reaching out about?"
                required
                value={message}
              />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-6 text-muted-foreground">
                  This opens a prefilled Gmail compose screen to {contactDetails.email}.
                  If the visitor is not signed into Gmail yet, Google will ask them
                  to sign in first.
                </p>
                <AnimatedButton
                  size="lg"
                  type="submit"
                  variant="glow"
                >
                  Open Gmail
                  <Send className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </div>
            </form>
          </GlowCard>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
