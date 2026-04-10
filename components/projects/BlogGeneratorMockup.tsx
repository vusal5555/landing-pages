"use client";

import { useState, useEffect, useRef } from "react";

const blogLines = [
  { type: "h1" as const, text: "SEO Tips for E-commerce in 2025" },
  { type: "p" as const, text: "E-commerce SEO is more competitive than ever. Here are proven strategies to rank higher and drive organic traffic to your store." },
  { type: "h2" as const, text: "1. Optimize Product Descriptions" },
  { type: "p" as const, text: "Write unique, keyword-rich descriptions for every product. Avoid manufacturer copy — search engines penalize duplicate content." },
  { type: "h2" as const, text: "2. Improve Site Speed" },
  { type: "p" as const, text: "A 1-second delay in load time reduces conversions by 7%. Compress images, leverage CDNs, and minimize JavaScript." },
];

export default function BlogGeneratorMockup() {
  const [phase, setPhase] = useState<"input" | "loading" | "typing">("input");
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const timer1 = setTimeout(() => setPhase("loading"), 1200);
    return () => clearTimeout(timer1);
  }, [started]);

  useEffect(() => {
    if (phase !== "loading") return;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setPhase("typing");
          return 100;
        }
        return p + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "typing") return;
    if (visibleLines >= blogLines.length) return;

    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, 500);

    return () => clearTimeout(timer);
  }, [phase, visibleLines]);

  useEffect(() => {
    if (phase === "typing" && visibleLines >= blogLines.length) {
      const resetTimer = setTimeout(() => {
        setPhase("input");
        setProgress(0);
        setVisibleLines(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [phase, visibleLines]);

  return (
    <div ref={containerRef} className="h-full p-3">
      {phase === "input" && (
        <div className="space-y-3 animate-fade-in-up">
          <label className="text-[10px] text-muted uppercase tracking-wider">Topic</label>
          <div className="px-3 py-2 rounded-lg bg-surface-light border border-border text-[11px] text-white">
            SEO Tips for E-commerce
            <span className="animate-cursor text-accent">|</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[9px] px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">SEO</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">Long-form</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">1500 words</span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] text-muted">Generating...</span>
          </div>
        </div>
      )}

      {phase === "loading" && (
        <div className="h-full flex flex-col items-center justify-center gap-3">
          <div className="w-48 h-1.5 rounded-full bg-surface-light overflow-hidden">
            <div
              className="h-full rounded-full bg-accent transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] text-muted">Generating content... {progress}%</span>
        </div>
      )}

      {phase === "typing" && (
        <div className="space-y-2 overflow-hidden">
          {blogLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="animate-fade-in-up">
              {line.type === "h1" && (
                <h3 className="text-[13px] font-bold text-white">{line.text}</h3>
              )}
              {line.type === "h2" && (
                <h4 className="text-[11px] font-semibold text-accent mt-2">{line.text}</h4>
              )}
              {line.type === "p" && (
                <p className="text-[10px] text-muted leading-relaxed">{line.text}</p>
              )}
            </div>
          ))}
          {visibleLines < blogLines.length && (
            <span className="inline-block animate-cursor text-accent text-[11px]">▊</span>
          )}
        </div>
      )}
    </div>
  );
}
