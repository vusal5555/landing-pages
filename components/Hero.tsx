"use client";

import { motion } from "framer-motion";

interface HeroProps {
  badge?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero({
  badge = "AI Research Assistants for Professional Firms",
  headline,
  subheadline,
  ctaText = "Book a Strategy Call",
  ctaHref = "/#booking",
}: HeroProps) {
  const defaultHeadline = (
    <>
      Your team searches documents for hours. Our systems find the answer in
      seconds —{" "}
      <span className="text-accent">with the source attached.</span>
    </>
  );

  const defaultSubheadline =
    "AI-powered research assistants for professional firms. Every answer cited. Every source linked. Your experts stay in control.";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute inset-12 rounded-full bg-accent/10 blur-[80px] animate-float" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center gap-10 md:gap-12">
          <div className="flex flex-col items-center gap-5 md:gap-6 max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]"
            >
              {headline || defaultHeadline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
            >
              {subheadline || defaultSubheadline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-accent text-background hover:bg-accent-dark transition-all duration-200 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
            >
              {ctaText}
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
    </section>
  );
}
