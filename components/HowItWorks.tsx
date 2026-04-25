"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StepData {
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps?: [StepData, StepData, StepData];
}

const defaultSteps: [StepData, StepData, StepData] = [
  {
    title: "Your documents go in",
    description:
      "Case files, regulations, policy manuals, templates, prior deliverables — we ingest everything your team works with. Each document is indexed with full metadata: source, page, paragraph, date.",
  },
  {
    title: "Your team asks questions",
    description:
      "Natural language queries in a simple interface. \"What's the EDPB stance on cross-border transfers?\" or \"Find all prior approvals for this employer\" or \"Pull the lien history on this property.\"",
  },
  {
    title: "Cited answers come back",
    description:
      "Every statement links to the exact source document, page, and paragraph. Click the citation, see the original text highlighted. If the system can't find a verified source, it says so — it doesn't guess.",
  },
];

const stepIcons = [
  <svg
    key="upload"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <polyline points="9 15 12 12 15 15" />
  </svg>,
  <svg
    key="search"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>,
  <svg
    key="check"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>,
];

export default function HowItWorks({ steps }: HowItWorksProps) {
  const [active, setActive] = useState(0);
  const data = steps || defaultSteps;

  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Three steps. Every answer traced back to its source.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {data.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-1 flex items-center gap-3 px-5 py-4 rounded-xl border text-left transition-all duration-300 ${
                  active === i
                    ? "border-accent/40 bg-accent/5 shadow-[0_0_20px_rgba(20,184,166,0.08)]"
                    : "border-border bg-surface/50 hover:border-border hover:bg-surface-light/50"
                }`}
              >
                <div
                  className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    active === i
                      ? "bg-accent/10 text-accent"
                      : "bg-surface-light text-muted"
                  }`}
                >
                  {stepIcons[i]}
                </div>
                <div>
                  <span
                    className={`font-mono text-xs transition-colors duration-300 ${
                      active === i ? "text-accent" : "text-muted"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      active === i ? "text-white" : "text-muted"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="relative min-h-[140px] p-8 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    {stepIcons[active]}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-accent">
                      Step 0{active + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {data[active].title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted leading-relaxed max-w-2xl">
                  {data[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
