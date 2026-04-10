"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-12 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <p className="text-sm text-muted tracking-wide uppercase">
            Trusted by agencies managing{" "}
            <span className="text-white font-semibold">$2M+</span> in monthly ad spend
          </p>
          <div className="flex items-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-24 h-8 rounded bg-surface-light/50 border border-border/50 flex items-center justify-center"
              >
                <span className="text-[10px] text-muted/50 font-mono uppercase tracking-widest">
                  Agency {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
