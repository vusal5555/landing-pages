"use client";

import { motion } from "framer-motion";

const painPoints = [
  "Slow Lead Response",
  "Manual Reporting",
  "Content Bottlenecks",
  "No CRO Process",
  "Client Churn",
  "Proving ROI",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />

      {/* Gradient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute inset-12 rounded-full bg-accent/10 blur-[80px] animate-float" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Built for Marketing Agencies
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          We Build AI Systems That Make Your Agency{" "}
          <span className="text-accent">More Profitable</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Custom AI tools for lead generation, client reporting, content
          automation, and more — built specifically for digital marketing
          agencies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-accent text-background hover:bg-accent-dark transition-all duration-200 hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]"
          >
            See Our Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full border border-border text-white hover:bg-surface-light transition-all duration-200"
          >
            Book a Discovery Call
          </a>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 w-full mt-24 border-y border-border bg-surface/50 backdrop-blur-sm">
        <div className="overflow-hidden py-4">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...painPoints, ...painPoints].map((point, i) => (
              <span key={i} className="flex items-center mx-8 text-sm text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-3 shrink-0" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
