"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import confetti from "canvas-confetti";

interface Step {
  id: string;
  title: string;
  description: string;
  listItems?: string[];
  checkboxLabel: string;
}

const steps: Step[] = [
  {
    id: "accept-invite",
    title: "Accept the Calendar Invite",
    description:
      "Check your email and click 'Yes' to accept the calendar invite for our upcoming call. This locks the time on both our calendars.",
    checkboxLabel: "I have accepted the calendar invite",
  },
  {
    id: "come-prepared",
    title: "Come Prepared",
    description:
      "To get the most out of our 30 minutes, please come ready to share:",
    listItems: [
      "The specific document type or workflow you want to automate",
      "How many people on your team would use this system",
      "What tools and software you currently use day-to-day",
    ],
    checkboxLabel: "I'm ready for the call",
  },
];

const STORAGE_KEY = "novra-thankyou-steps";

function loadCheckedState(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveCheckedState(state: Record<string, boolean>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable
  }
}

export default function ThankYouContent() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const confettiFired = useRef(false);

  useEffect(() => {
    setChecked(loadCheckedState());
    setMounted(true);
  }, []);

  const completedCount = steps.filter((s) => checked[s.id]).length;
  const allComplete = completedCount === steps.length;
  const progress = steps.length > 0 ? completedCount / steps.length : 0;

  const fireConfetti = useCallback(() => {
    if (confettiFired.current) return;
    confettiFired.current = true;

    const duration = 2500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ["#14b8a6", "#0d9488", "#e4e4e7", "#ffffff"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ["#14b8a6", "#0d9488", "#e4e4e7", "#ffffff"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  }, []);

  useEffect(() => {
    if (allComplete && mounted) {
      fireConfetti();
    } else {
      confettiFired.current = false;
    }
  }, [allComplete, mounted, fireConfetti]);

  const toggleStep = (id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      saveCheckedState(next);
      return next;
    });
  };

  return (
    <>
      {/* Sticky progress bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-surface">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
          You&apos;re almost there.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          Ahead of our call, please complete these steps so we can make the most
          of our time.
        </p>
      </section>

      {/* Step Cards */}
      <section className="max-w-4xl mx-auto px-6 pb-16 md:pb-24 space-y-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="rounded-2xl bg-surface-light border border-border p-8 md:p-12 transition-colors duration-200"
          >
            <h2 className="text-3xl font-bold text-accent">
              Step {index + 1}: {step.title}
            </h2>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              {step.description}
            </p>

            {step.listItems && (
              <ul className="mt-5 space-y-3">
                {step.listItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <label className="mt-8 flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={mounted ? !!checked[step.id] : false}
                onChange={() => toggleStep(step.id)}
                className="sr-only"
              />
              <div
                className={`h-6 w-6 rounded-md border-2 transition-all duration-200 flex items-center justify-center shrink-0 ${
                  mounted && checked[step.id]
                    ? "border-accent bg-accent"
                    : "border-muted group-hover:border-accent/60"
                }`}
              >
                <svg
                  className={`h-4 w-4 text-background transition-opacity duration-200 ${
                    mounted && checked[step.id] ? "opacity-100" : "opacity-0"
                  }`}
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
                </svg>
              </div>
              <span className="text-base text-muted group-hover:text-foreground transition-colors duration-200">
                {step.checkboxLabel}
              </span>
            </label>
          </div>
        ))}

        {/* Completion banner */}
        {allComplete && mounted && (
          <div className="rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center animate-fade-in-up">
            <p className="text-2xl font-bold text-accent">
              You&apos;re all set. See you on the call.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
