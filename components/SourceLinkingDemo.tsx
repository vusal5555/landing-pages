"use client";

import { motion } from "framer-motion";

export default function SourceLinkingDemo() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Every Claim, <span className="text-accent">Traced to Source</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            One click to verify. No hallucination. No guesswork.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Product mockup container */}
          <div className="rounded-2xl border border-border bg-surface overflow-hidden shadow-2xl shadow-black/40">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-light/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 mx-4">
                <div className="max-w-sm mx-auto px-3 py-1 rounded-md bg-background/50 border border-border text-xs text-muted font-mono text-center">
                  research.novraai.dev
                </div>
              </div>
            </div>

            {/* Two-panel layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
              {/* Left: AI answer */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent"
                    >
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">
                    AI Response
                  </span>
                </div>

                <div className="mb-4 px-3 py-2 rounded-lg bg-background/50 border border-border">
                  <p className="text-xs text-muted">
                    <span className="text-accent font-mono mr-1">Q:</span>
                    What are the requirements for lawful cross-border data
                    transfers under GDPR?
                  </p>
                </div>

                <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
                  <p>
                    Under the GDPR, cross-border data transfers to third
                    countries are only permitted when adequate safeguards are in
                    place.{" "}
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-accent/15 text-accent text-[10px] font-mono font-bold mx-0.5 cursor-pointer hover:bg-accent/25 transition-colors">
                      1
                    </span>
                  </p>
                  <p>
                    The European Commission may issue adequacy decisions for
                    specific countries, confirming their data protection
                    framework provides equivalent protection.{" "}
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-accent/15 text-accent text-[10px] font-mono font-bold mx-0.5 cursor-pointer hover:bg-accent/25 transition-colors">
                      2
                    </span>
                  </p>
                  <p>
                    In the absence of an adequacy decision, controllers must
                    implement appropriate safeguards such as Standard
                    Contractual Clauses (SCCs) or Binding Corporate Rules
                    (BCRs).{" "}
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-accent/15 text-accent text-[10px] font-mono font-bold mx-0.5 cursor-pointer hover:bg-accent/25 transition-colors">
                      3
                    </span>
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-[10px] font-mono text-muted uppercase tracking-wider mb-2">
                    Sources
                  </p>
                  <div className="space-y-1.5">
                    {[
                      {
                        num: 1,
                        text: "GDPR Article 44 — General principle for transfers",
                      },
                      {
                        num: 2,
                        text: "GDPR Article 45 — Transfers on the basis of an adequacy decision",
                      },
                      {
                        num: 3,
                        text: "GDPR Article 46 — Transfers subject to appropriate safeguards",
                      },
                    ].map((src) => (
                      <div
                        key={src.num}
                        className="flex items-start gap-2 text-xs text-muted hover:text-foreground/70 transition-colors cursor-pointer group"
                      >
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-accent/10 text-accent text-[9px] font-mono font-bold shrink-0 mt-0.5">
                          {src.num}
                        </span>
                        <span className="group-hover:underline">
                          {src.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Source document */}
              <div className="p-6 md:p-8 bg-background/30">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-muted"
                    >
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-muted uppercase tracking-wider">
                    Source Document
                  </span>
                </div>

                <div className="mb-4 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-accent/10 text-accent text-[10px] font-mono font-bold">
                    GDPR
                  </span>
                  <span className="text-xs text-muted">
                    Chapter V — Transfers of personal data to third countries
                  </span>
                </div>

                <div className="space-y-4 text-sm text-muted/70 leading-relaxed font-mono">
                  <div className="flex gap-3">
                    <span className="text-[10px] text-muted/40 shrink-0 pt-0.5 w-6 text-right">
                      42
                    </span>
                    <p>
                      The controller and processor shall ensure that the data
                      subject...
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[10px] text-muted/40 shrink-0 pt-0.5 w-6 text-right">
                      43
                    </span>
                    <p>
                      Appropriate safeguards may be provided for by standard
                      data protection...
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[10px] text-muted/40 shrink-0 pt-0.5 w-6 text-right">
                      44
                    </span>
                    <div className="rounded-md px-3 py-2 -mx-3 bg-accent/8 border-l-2 border-accent">
                      <p className="text-foreground/80">
                        <span className="text-accent font-bold">
                          Article 44 — General principle for transfers.
                        </span>{" "}
                        Any transfer of personal data which are undergoing
                        processing or are intended for processing after transfer
                        to a third country or to an international organisation
                        shall take place only if the conditions laid down in
                        this Chapter are complied with by the controller and
                        processor.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[10px] text-muted/40 shrink-0 pt-0.5 w-6 text-right">
                      45
                    </span>
                    <p>
                      A transfer of personal data to a third country or an
                      international organisation may take place where the
                      Commission has decided...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted mt-6">
            Every claim traces back to the source. One click to verify. No
            hallucination. No guesswork.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
