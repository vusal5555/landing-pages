"use client";

import { motion } from "framer-motion";

interface ProblemProps {
  text?: string;
}

export default function Problem({ text }: ProblemProps) {
  const defaultText = (
    <>
      <p>
        Every day, your team digs through hundreds of pages — regulations, case
        files, policy manuals, client documents — searching for one answer they
        know is buried somewhere.
      </p>
      <p>
        That search eats 2–5 hours per query. Multiply that across every client,
        every case, every week.
      </p>
      <p>
        The expertise isn&apos;t the bottleneck.{" "}
        <span className="text-white font-medium">
          Finding the right document is.
        </span>
      </p>
    </>
  );

  return (
    <section className="relative py-20 md:py-28 border-t border-border">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto px-6"
      >
        <div className="text-center space-y-6 text-base md:text-lg text-muted leading-relaxed">
          {text ? <p>{text}</p> : defaultText}
        </div>
      </motion.div>
    </section>
  );
}
