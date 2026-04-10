"use client";

import { useState, useEffect, useRef } from "react";

const results = [
  { name: "Austin Family Dental", phone: "(512) 555-0142", email: "info@austinfamily.dental", rating: "4.8" },
  { name: "Smile Studio ATX", phone: "(512) 555-0287", email: "hello@smilestudioatx.com", rating: "4.9" },
  { name: "Bright Dental Care", phone: "(512) 555-0391", email: "contact@brightdental.co", rating: "4.7" },
  { name: "Lakeway Dental Group", phone: "(512) 555-0463", email: "team@lakewaydg.com", rating: "4.6" },
];

export default function LeadScraperMockup() {
  const [phase, setPhase] = useState<"search" | "loading" | "results">("search");
  const [visibleResults, setVisibleResults] = useState(0);
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
    const t1 = setTimeout(() => setPhase("loading"), 1500);
    return () => clearTimeout(t1);
  }, [started]);

  useEffect(() => {
    if (phase !== "loading") return;
    const t2 = setTimeout(() => setPhase("results"), 1800);
    return () => clearTimeout(t2);
  }, [phase]);

  useEffect(() => {
    if (phase !== "results") return;
    if (visibleResults >= results.length) return;

    const timer = setTimeout(() => {
      setVisibleResults((v) => v + 1);
    }, 400);

    return () => clearTimeout(timer);
  }, [phase, visibleResults]);

  useEffect(() => {
    if (phase === "results" && visibleResults >= results.length) {
      const resetTimer = setTimeout(() => {
        setPhase("search");
        setVisibleResults(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [phase, visibleResults]);

  return (
    <div ref={containerRef} className="h-full p-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 px-3 py-1.5 rounded-lg bg-surface-light border border-border text-[11px] text-white flex items-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted mr-2 shrink-0">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <span>Dental clinics in Austin, TX</span>
          {phase === "search" && <span className="animate-cursor text-accent ml-0.5">|</span>}
        </div>
        <div className={`px-3 py-1.5 rounded-lg text-[10px] font-medium ${phase === "search" ? "bg-accent text-background" : "bg-surface-light text-muted"}`}>
          Search
        </div>
      </div>

      {phase === "loading" && (
        <div className="h-40 flex flex-col items-center justify-center gap-3">
          <div className="w-6 h-6 border-2 border-muted border-t-accent rounded-full animate-spin-slow" />
          <span className="text-[10px] text-muted">Scraping leads...</span>
        </div>
      )}

      {phase === "results" && (
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted">{visibleResults} of {results.length} results</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-accent/10 text-accent">Export CSV</span>
          </div>
          {results.slice(0, visibleResults).map((r, i) => (
            <div
              key={i}
              className="animate-slide-in-right px-3 py-2 rounded-lg bg-surface-light border border-border"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-medium text-white">{r.name}</span>
                <span className="text-[9px] text-yellow-400">★ {r.rating}</span>
              </div>
              <div className="flex items-center gap-3 text-[9px] text-muted">
                <span>{r.phone}</span>
                <span>{r.email}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {phase === "search" && (
        <div className="h-40 flex flex-col items-center justify-center text-[10px] text-muted/50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-2 text-muted/30">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          Enter a niche and location to start
        </div>
      )}
    </div>
  );
}
