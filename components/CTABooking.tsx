"use client";

import { motion } from "framer-motion";

interface CTABookingProps {
  subline?: string;
}

export default function CTABooking({ subline }: CTABookingProps) {
  const defaultSubline =
    "15-minute technical walkthrough. No sales pitch. We show you the system running live.";

  return (
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
            <span className="text-accent">your documents.</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            {subline || defaultSubline}
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
  );
}
