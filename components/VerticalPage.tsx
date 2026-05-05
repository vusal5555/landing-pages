"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { VerticalData } from "@/data/verticals";

export default function VerticalPage({ data }: { data: VerticalData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          SECTION 1: ABOVE THE FOLD
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" />
          <div className="absolute inset-12 rounded-full bg-accent/10 blur-[80px] animate-float" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <div className="flex flex-col items-center text-center gap-8 md:gap-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {data.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl"
            >
              {data.heroHeadline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted max-w-3xl leading-relaxed"
            >
              {data.heroSubheadline}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-accent text-background hover:bg-accent-dark transition-all duration-200 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
              >
                {data.ctaButtonText}
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

            {/* VSL Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="w-full max-w-4xl"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-surface shadow-2xl shadow-black/50">
                <iframe
                  src="https://player.vimeo.com/video/1189307274"
                  title="Watch the walkthrough"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <p className="text-xs text-muted text-center mt-3">
                10-minute walkthrough. The math, the proof, and exactly what gets built.
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap justify-center gap-4 mt-2"
            >
              {data.trustBadges.map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface/50 text-xs text-muted"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent shrink-0"
                  >
                    <path d="M9 11l3 3L22 4" />
                  </svg>
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Social proof row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-3xl mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Case study compact */}
              <div className="rounded-xl border border-border bg-surface/50 p-4 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-accent/10 text-accent text-xs font-semibold">
                    Case Study
                  </span>
                  <span className="text-xs text-muted">HeyData</span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {data.caseStudyCompactMetric}
                </p>
              </div>

              {/* Tech credibility */}
              <div className="rounded-xl border border-border bg-surface/50 p-4 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-white/5 text-muted text-xs font-semibold">
                    Stack
                  </span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed font-mono">
                  {data.techCredibilityLine}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: PAIN (PAS Framework)
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 border-t border-border">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-3xl mx-auto px-6">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {data.painProblemHeader}
            </h2>
            <div className="space-y-4 text-base text-muted leading-relaxed">
              {data.painProblemBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Agitate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {data.painAgitateHeader}
            </h2>
            <div className="space-y-4 text-base text-muted leading-relaxed mb-8">
              {data.painAgitateBody.map((p, i) => (
                <p key={i} className={i === 1 ? "text-xl font-semibold text-white" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* Alternatives that fail */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                You've tried the alternatives. They don't work:
              </p>
              {data.painAgitateAlternatives.map((alt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-surface/50"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-red-400 shrink-0 mt-0.5"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <div>
                    <span className="text-sm font-semibold text-white">
                      {alt.name}:
                    </span>{" "}
                    <span className="text-sm text-muted">{alt.failure}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
              {data.painSolveHeader}
            </h2>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed">
              {data.painSolveBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SOCIAL PROOF A: Full Case Study (after pain)
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2.5 py-1 rounded-md bg-accent/10 text-accent text-xs font-semibold">
                Case Study
              </span>
              <span className="text-sm text-muted">
                {data.caseStudyCompany}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {data.caseStudyCompany}
            </h3>
            <p className="text-sm text-muted mb-6">
              {data.caseStudyDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Before */}
              <div>
                <p className="text-xs font-mono text-red-400 uppercase tracking-wider mb-3">
                  Before
                </p>
                <ul className="space-y-2">
                  {data.caseStudyBefore.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-red-400 shrink-0 mt-0.5"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div>
                <p className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  After
                </p>
                <ul className="space-y-2">
                  {data.caseStudyAfter.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-accent shrink-0 mt-0.5"
                      >
                        <path d="M9 11l3 3L22 4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                What was built
              </p>
              <p className="text-sm text-muted leading-relaxed">
                {data.caseStudyBuilt}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3: VALUE PROPS (8 blocks)
      ═══════════════════════════════════════════════════ */}
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
              What Gets Built in <span className="text-accent">30 Days</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Six components. One sprint. Your firm owns the result.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {data.valueProps.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-xl border border-border bg-surface/50 p-6 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-xs font-mono text-muted uppercase tracking-wider">
                    {prop.feature}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {prop.header}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {prop.description}
                </p>
                <p className="text-sm text-foreground/70 italic leading-relaxed">
                  {prop.emotionalPayoff}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SOCIAL PROOF B: Technical Credibility
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why It <span className="text-accent">Can't</span> Hallucinate
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              This isn't a chatbot with a regulatory prompt bolted on. The architecture is fundamentally different.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-surface/50 p-6 md:p-8"
          >
            <div className="space-y-4">
              {data.techSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-mono text-accent font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed pt-1.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted leading-relaxed">
                If the system can't find a relevant source, it says so. It doesn't guess. It doesn't fill in. This is retrieval, not generation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SOCIAL PROOF C: What Gets Shipped (Deliverables)
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Deliverables at Day 30
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.deliverables.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-border bg-surface/50 p-5"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                  >
                    <path d="M9 11l3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {d.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {d.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5: THE MATH (Pricing Comparison)
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Cost of Not Fixing This
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Alternatives */}
            {data.pricingAlternatives.map((alt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-surface/50 p-6"
              >
                <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
                  Option {String.fromCharCode(65 + i)}
                </p>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {alt.name}
                </h3>
                <p className="text-2xl font-bold text-red-400 mb-4">
                  {alt.cost}
                </p>
                <ul className="space-y-2">
                  {alt.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-red-400 shrink-0 mt-1"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Our offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-2xl border-2 border-accent/40 bg-accent/5 p-6 relative"
            >
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-accent text-background text-xs font-bold">
                Research Ops
              </div>
              <p className="text-xs font-mono text-accent uppercase tracking-wider mb-3 mt-2">
                Option C
              </p>
              <h3 className="text-lg font-semibold text-white mb-1">
                Research Ops
              </h3>
              <p className="text-2xl font-bold text-accent mb-4">
                {data.pricingOurs.cost}
              </p>
              <ul className="space-y-2">
                {data.pricingOurs.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent shrink-0 mt-1"
                    >
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-sm text-muted mt-8 max-w-2xl mx-auto"
          >
            Your team is currently burning €40,000-€100,000/year on manual document search. The system pays for itself in the first month. Every month after is pure recovered capacity.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6: FAQ (Objection Handling)
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions You Should Be Asking
            </h2>
          </motion.div>

          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="rounded-xl border border-border bg-surface/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-semibold text-white leading-snug">
                    {faq.question}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`text-muted shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7: GUARANTEE
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 border-t border-border">
        <div className="absolute inset-0 bg-accent/[0.02]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-accent"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The Working Build Guarantee
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {data.guaranteeText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SOCIAL PROOF D: Founding Cohort Transparency
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-16 border-t border-border">
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-surface/50 p-6 md:p-8"
          >
            <h3 className="text-lg font-bold text-white mb-4">
              You'd be client #2. Here's why that's an advantage.
            </h3>
            <div className="space-y-3 text-sm text-muted leading-relaxed">
              <p>
                <span className="text-white font-semibold">Founding pricing.</span>{" "}
                $5,000 build + $800/month. After 5 clients, it's $10,000 + $1,500. You're getting the system at half rate because you're taking a chance on a vendor with one reference instead of five.
              </p>
              <p>
                <span className="text-white font-semibold">Full attention.</span>{" "}
                I take 2 clients per month. You're not #47 in a queue. Every question gets answered the same day.
              </p>
              <p>
                <span className="text-white font-semibold">Aligned incentives.</span>{" "}
                Your success becomes my second case study. The Working Build Guarantee exists because I need you to succeed as much as you do.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 8: FINAL CTA
      ═══════════════════════════════════════════════════ */}
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
            <p className="text-base text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              {data.finalCtaHeader}
            </p>
            <a
              href="#booking-embed"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-accent text-background hover:bg-accent-dark transition-all duration-200 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
            >
              {data.ctaButtonText}
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
            <p className="text-sm text-muted mt-4">
              {data.finalCtaSubtext}
            </p>
          </motion.div>

          <motion.div
            id="booking-embed"
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
