"use client";

import { useState, useEffect, useRef } from "react";

const chatMessages = [
  { role: "user" as const, text: "📎 contract_v2.pdf uploaded" },
  { role: "system" as const, text: "Analyzing contract clause 4.2..." },
  { role: "system" as const, text: "Found 3 potential risks in liability section" },
  { role: "system" as const, text: "⚠️ Non-compete clause exceeds 24-month limit in 2 jurisdictions" },
];

export default function LegalEngineMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [typing, setTyping] = useState(false);
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
    if (visibleMessages >= chatMessages.length) return;

    setTyping(true);
    const delay = visibleMessages === 0 ? 800 : 1500;
    const timer = setTimeout(() => {
      setTyping(false);
      setVisibleMessages((v) => v + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleMessages, started]);

  useEffect(() => {
    if (started && visibleMessages >= chatMessages.length) {
      const resetTimer = setTimeout(() => {
        setVisibleMessages(0);
        setStarted(true);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [visibleMessages, started]);

  return (
    <div ref={containerRef} className="h-full flex flex-col p-3">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
        <div className="w-5 h-5 rounded bg-accent/20 flex items-center justify-center">
          <span className="text-[8px] text-accent font-bold">AI</span>
        </div>
        <span className="text-[11px] font-medium text-white">Heuristiq Legal Engine</span>
        <span className="ml-auto text-[9px] text-accent bg-accent/10 px-2 py-0.5 rounded-full">Online</span>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden">
        {chatMessages.slice(0, visibleMessages).map((msg, i) => (
          <div
            key={i}
            className={`animate-fade-in-up flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-3 py-1.5 rounded-lg text-[11px] leading-relaxed ${
                msg.role === "user"
                  ? "bg-accent/20 text-accent"
                  : "bg-surface-light text-foreground border border-border"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {typing && visibleMessages < chatMessages.length && (
          <div className="flex justify-start">
            <div className="bg-surface-light border border-border rounded-lg px-3 py-2 flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
