"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { VerticalData } from "@/data/verticals";

const stepIcons = [
  <svg key="upload" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <polyline points="9 15 12 12 15 15" />
  </svg>,
  <svg key="search" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>,
  <svg key="check" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>,
];

export default function VerticalPage({ data }: { data: VerticalData }) {
  const [active, setActive] = useState(0);

  const steps = [
    { title: "Your documents go in", description: data.documentsIn },
    { title: "Your team asks questions", description: data.queryExample },
    { title: "Cited answers come back", description: data.citedAnswers },
  ];

  return (
    <>
      {/* V-Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" />
          <div className="absolute inset-12 rounded-full bg-accent/10 blur-[80px] animate-float" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2 order-first lg:order-last"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-surface shadow-2xl shadow-black/50">
                <div className="absolute inset-0 flex items-center justify-center bg-surface-light/50">
                  <div className="flex flex-col items-center gap-4">
                    <button
                      className="w-20 h-20 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center hover:bg-accent/20 transition-colors duration-300 group"
                      aria-label="Play video"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-accent ml-1 group-hover:scale-110 transition-transform"
                      >
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </button>
                    <span className="text-xs text-muted font-mono tracking-wider uppercase">
                      Watch the walkthrough
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {data.badge}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6"
              >
                {data.heroHeadline}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-accent text-background hover:bg-accent-dark transition-all duration-200 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                >
                  Book a Strategy Call
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* V-Pain */}
      <section className="relative py-20 md:py-28 border-t border-border">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-6"
        >
          <div className="text-center text-base md:text-lg text-muted leading-relaxed">
            <p>{data.painText}</p>
          </div>
        </motion.div>
      </section>

      {/* V-How It Works */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              Three steps. Every answer traced back to its source.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex-1 flex items-center gap-3 px-5 py-4 rounded-xl border text-left transition-all duration-300 ${
                    active === i
                      ? "border-accent/40 bg-accent/5 shadow-[0_0_20px_rgba(20,184,166,0.08)]"
                      : "border-border bg-surface/50 hover:border-border hover:bg-surface-light/50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      active === i
                        ? "bg-accent/10 text-accent"
                        : "bg-surface-light text-muted"
                    }`}
                  >
                    {stepIcons[i]}
                  </div>
                  <div>
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        active === i ? "text-accent" : "text-muted"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <h3
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        active === i ? "text-white" : "text-muted"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>

            <div className="relative min-h-[140px] p-8 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      {stepIcons[active]}
                    </div>
                    <div>
                      <span className="font-mono text-xs text-accent">
                        Step 0{active + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {steps[active].title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed max-w-2xl">
                    {steps[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* V-Source Demo */}
      <section className="relative py-24 md:py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Every Claim,{" "}
              <span className="text-accent">Traced to Source</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              One click to verify. No hallucination. No guesswork.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-6xl mx-auto"
          >
            <div className="rounded-2xl border border-border bg-surface overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-light/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="max-w-sm mx-auto px-3 py-1 rounded-md bg-background/50 border border-border text-xs text-muted font-mono text-center">
                    research.novraai.dev
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                    </div>
                    <span className="text-xs font-mono text-accent uppercase tracking-wider">
                      AI Response
                    </span>
                  </div>

                  <div className="mb-4 px-3 py-2 rounded-lg bg-background/50 border border-border">
                    <p className="text-xs text-muted">
                      <span className="text-accent font-mono mr-1">Q:</span>
                      What are the requirements for lawful cross-border data
                      transfers under GDPR?
                    </p>
                  </div>

                  <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
                    <p>
                      Under the GDPR, cross-border data transfers to third
                      countries are only permitted when adequate safeguards are
                      in place.{" "}
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-accent/15 text-accent text-[10px] font-mono font-bold mx-0.5">
                        1
                      </span>
                    </p>
                    <p>
                      The European Commission may issue adequacy decisions for
                      specific countries.{" "}
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-accent/15 text-accent text-[10px] font-mono font-bold mx-0.5">
                        2
                      </span>
                    </p>
                    <p>
                      In the absence of an adequacy decision, controllers must
                      implement SCCs or BCRs.{" "}
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-accent/15 text-accent text-[10px] font-mono font-bold mx-0.5">
                        3
                      </span>
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8 bg-background/30">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <span className="text-xs font-mono text-muted uppercase tracking-wider">
                      Source Document
                    </span>
                  </div>

                  <div className="space-y-4 text-sm text-muted/70 leading-relaxed font-mono">
                    <div className="flex gap-3">
                      <span className="text-[10px] text-muted/40 shrink-0 pt-0.5 w-6 text-right">
                        44
                      </span>
                      <div className="rounded-md px-3 py-2 -mx-3 bg-accent/8 border-l-2 border-accent">
                        <p className="text-foreground/80">
                          <span className="text-accent font-bold">
                            Article 44.
                          </span>{" "}
                          Any transfer of personal data to a third country shall
                          take place only if the conditions laid down in this
                          Chapter are complied with.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* V-Case Study */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Proof, Not Promises
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-surface/50 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-accent/10 text-accent text-xs font-semibold">
                Case Study
              </span>
              <span className="text-sm text-muted">GDPR Compliance</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">HeyData</h3>
            <p className="text-sm text-muted mb-4">
              German GDPR compliance-as-a-service firm managing hundreds of
              client accounts across the EU.
            </p>

            <p className="text-sm text-muted/70 italic mb-6">
              {data.caseStudyBridge}
            </p>

            <dl className="space-y-3">
              <div>
                <dt className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
                  What we built
                </dt>
                <dd className="text-sm text-foreground/70">
                  RAG-powered research system over the full GDPR regulatory
                  corpus, EDPB guidance documents, and their internal compliance
                  templates.
                </dd>
              </div>
              <div>
                <dt className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
                  The result
                </dt>
                <dd className="text-sm text-foreground/70">
                  Research time reduced from hours to minutes. Consultants now
                  handle more client accounts with higher confidence in every
                  answer.
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* V-CTA */}
      <section
        id="booking"
        className="relative py-24 md:py-32 border-t border-border"
      >
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              See how it works with{" "}
              <span className="text-accent">your {data.documentTypes}.</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              15-minute technical walkthrough. No sales pitch. We show you the
              system running live.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface/50 overflow-hidden"
          >
            <iframe
              src="https://calendly.com/novruzovvusal364/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=111118&text_color=e4e4e7&primary_color=14b8a6"
              width="100%"
              height="700"
              frameBorder="0"
              title="Book a Strategy Call"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
