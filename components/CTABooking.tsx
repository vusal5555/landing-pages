"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CALENDLY_URL =
  "https://calendly.com/novruzovvusal364/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=111118&text_color=e4e4e7&primary_color=14b8a6";

interface CTABookingProps {
  subline?: string;
}

export default function CTABooking({ subline }: CTABookingProps) {
  const router = useRouter();
  const widgetRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const defaultSubline =
    "15-minute technical walkthrough. No sales pitch. We show you the system running live.";

  useEffect(() => {
    if (!scriptLoaded || !widgetRef.current || !window.Calendly) return;
    widgetRef.current.innerHTML = "";
    window.Calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: widgetRef.current,
    });
  }, [scriptLoaded]);

  useEffect(() => {
    function parseData(raw: unknown) {
      if (typeof raw === "string") {
        try {
          return JSON.parse(raw);
        } catch {
          return null;
        }
      }
      return raw;
    }

    function onMessage(e: MessageEvent) {
      const data = parseData(e.data);
      const eventName =
        data && typeof data === "object" && "event" in data
          ? (data as { event?: unknown }).event
          : undefined;

      if (
        typeof eventName === "string" &&
        eventName === "calendly.event_scheduled"
      ) {
        router.push("/thank-you");
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [router]);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
        onReady={() => setScriptLoaded(true)}
      />
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
            <div
              ref={widgetRef}
              className="w-full"
              style={{ minWidth: 320, height: 700 }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
