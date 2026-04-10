"use client";

import { useState, useEffect, useRef } from "react";

const leads = [
  { name: "Sarah Chen", email: "sarah@acme.io", company: "Acme Corp", size: "50-200", industry: "SaaS", linked: true },
  { name: "Mike Ross", email: "mike@lawfirm.co", company: "Ross Legal", size: "10-50", industry: "Legal", linked: true },
  { name: "Lena Park", email: "lena@growth.io", company: "GrowthLab", size: "200-500", industry: "Marketing", linked: true },
  { name: "James Wu", email: "james@techco.dev", company: "TechCo", size: "500+", industry: "Tech", linked: true },
];

export default function LeadEnricherMockup() {
  const [visibleRows, setVisibleRows] = useState<number>(0);
  const [enrichedCols, setEnrichedCols] = useState<number[]>([]);
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
    if (visibleRows >= leads.length) return;

    const timer = setTimeout(() => {
      setVisibleRows((v) => v + 1);
    }, 600);

    return () => clearTimeout(timer);
  }, [visibleRows, started]);

  useEffect(() => {
    if (!started || visibleRows === 0) return;

    const newRow = visibleRows - 1;
    const timer = setTimeout(() => {
      setEnrichedCols((prev) => [...prev, newRow]);
    }, 400);

    return () => clearTimeout(timer);
  }, [visibleRows, started]);

  useEffect(() => {
    if (started && visibleRows >= leads.length && enrichedCols.length >= leads.length) {
      const resetTimer = setTimeout(() => {
        setVisibleRows(0);
        setEnrichedCols([]);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [visibleRows, enrichedCols, started]);

  return (
    <div ref={containerRef} className="h-full p-3 font-mono">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded">ENRICHING</span>
        <span className="text-[10px] text-muted">{visibleRows}/{leads.length} leads processed</span>
      </div>

      <div className="overflow-hidden">
        <div className="grid grid-cols-[1fr_1fr_0.7fr_0.7fr_0.5fr] gap-px text-[9px] mb-1">
          <span className="text-muted uppercase tracking-wider px-2 py-1">Name</span>
          <span className="text-muted uppercase tracking-wider px-2 py-1">Email</span>
          <span className="text-muted uppercase tracking-wider px-2 py-1">Size</span>
          <span className="text-muted uppercase tracking-wider px-2 py-1">Industry</span>
          <span className="text-muted uppercase tracking-wider px-2 py-1 text-center">Status</span>
        </div>

        {leads.slice(0, visibleRows).map((lead, i) => {
          const enriched = enrichedCols.includes(i);
          return (
            <div
              key={i}
              className="animate-fade-in-up grid grid-cols-[1fr_1fr_0.7fr_0.7fr_0.5fr] gap-px text-[10px] border-t border-border"
            >
              <span className="text-white px-2 py-1.5 truncate">{lead.name}</span>
              <span className="text-muted px-2 py-1.5 truncate">{lead.email}</span>
              <span className={`px-2 py-1.5 transition-all duration-500 ${enriched ? "text-foreground" : "text-transparent"}`}>
                {enriched ? lead.size : "---"}
              </span>
              <span className={`px-2 py-1.5 transition-all duration-500 ${enriched ? "text-foreground" : "text-transparent"}`}>
                {enriched ? lead.industry : "---"}
              </span>
              <span className="px-2 py-1.5 flex items-center justify-center">
                {enriched ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <span className="w-3 h-3 border-2 border-muted border-t-accent rounded-full animate-spin-slow" />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
