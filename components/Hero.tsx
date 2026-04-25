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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Video — stacks first on mobile */}
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
              {/* Replace with: <iframe src="YOUR_VIDEO_URL" ... /> */}
            </div>
          </motion.div>

          {/* Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6"
            >
              {headline || defaultHeadline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {subheadline || defaultSubheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
      </div>
    </section>
  );
}
