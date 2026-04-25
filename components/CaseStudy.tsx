"use client";

import { motion } from "framer-motion";

interface CaseStudyProps {
  bridge?: string;
}

export default function CaseStudy({ bridge }: CaseStudyProps) {
  return (
    <section
      id="case-study"
      className="relative py-24 md:py-32 border-t border-border"
    >
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
            Proof, Not Promises
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* HeyData case study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-surface/50 overflow-hidden"
          >
            {/* Mockup screenshot */}
            <div className="aspect-video bg-surface-light border-b border-border relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col">
                {/* Mini app header */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-background/50">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[9px] font-mono text-muted/50">
                      heydata-research.novraai.dev
                    </span>
                  </div>
                </div>
                {/* Mini chat interface */}
                <div className="flex-1 p-4 space-y-3">
                  <div className="max-w-[70%] px-3 py-2 rounded-lg bg-background/50 border border-border">
                    <p className="text-[10px] text-muted">
                      What are the EDPB guidelines on cookie consent banners?
                    </p>
                  </div>
                  <div className="max-w-[85%] ml-auto px-3 py-2 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="text-[10px] text-foreground/70">
                      According to EDPB Guidelines 05/2020, cookie consent must
                      be...{" "}
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded bg-accent/15 text-accent text-[7px] font-mono font-bold">
                        1
                      </span>
                    </p>
                  </div>
                  <div className="max-w-[60%] ml-auto px-3 py-2 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="text-[10px] text-foreground/70">
                      Pre-ticked boxes do not constitute valid consent...{" "}
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded bg-accent/15 text-accent text-[7px] font-mono font-bold">
                        2
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-accent/10 text-accent text-xs font-semibold">
                  Case Study
                </span>
                <span className="text-sm text-muted">GDPR Compliance</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">HeyData</h3>
              <p className="text-sm text-muted mb-4">
                German GDPR compliance-as-a-service firm managing hundreds of
                client accounts across the EU.
              </p>

              {bridge && (
                <p className="text-sm text-muted/70 italic mb-4">{bridge}</p>
              )}

              <dl className="space-y-3">
                <div>
                  <dt className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
                    What we built
                  </dt>
                  <dd className="text-sm text-foreground/70">
                    RAG-powered research system over the full GDPR regulatory
                    corpus, EDPB guidance documents, and their internal
                    compliance templates.
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
                    The problem it solved
                  </dt>
                  <dd className="text-sm text-foreground/70">
                    Consultants spent 2–4 hours per client query manually
                    searching through regulations and prior work product.
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
                    The result
                  </dt>
                  <dd className="text-sm text-foreground/70">
                    Research time reduced from hours to minutes. Consultants now
                    handle more client accounts with higher confidence in every
                    answer.
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>

          {/* Coming Soon placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border/50 bg-surface/20 flex items-center justify-center min-h-[300px]"
          >
            <div className="text-center px-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-surface-light border border-border flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-muted/50"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <p className="text-sm font-medium text-muted/50">
                Next case study coming soon
              </p>
              <p className="text-xs text-muted/30 mt-1">
                Currently in deployment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
