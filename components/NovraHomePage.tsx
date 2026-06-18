"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { motion } from "framer-motion";

const EMAIL = "help@novraai.dev";
const CALENDLY_URL =
  "https://calendly.com/novruzovvusal364/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=111118&text_color=e4e4e7&primary_color=14b8a6";

type CalendlyPopupWindow = Window & {
  Calendly?: {
    initInlineWidget: (opts: {
      url: string;
      parentElement: HTMLElement;
    }) => void;
  };
};

const services = [
  {
    title: "Automate manual workflows",
    outcome: "Efficiency",
    copy: "Turn repetitive handoffs, inbox work, data entry, and review queues into systems that run without a person babysitting every step.",
  },
  {
    title: "Build assistants over your own data",
    outcome: "Time",
    copy: "Give your team a fast way to ask questions across docs, policies, product knowledge, and client files, with answers grounded in your sources.",
  },
  {
    title: "Ship agents that handle busywork",
    outcome: "Efficiency",
    copy: "Research, draft, classify, route, enrich, summarize, follow up. The boring loop gets handled. Your team stays in control.",
  },
  {
    title: "Integrate AI into existing systems",
    outcome: "Money",
    copy: "Add AI where the work already happens. CRM, support, internal tools, backend services, data pipelines. No side dashboard nobody opens.",
  },
];

const featuredWork = [
  {
    label: "Hotel email-response system",
    stat: "~15,000",
    statLabel: "emails/day",
    outcome:
      "Automates responses that would otherwise eat a support team alive.",
    build:
      "RAG-based email classifier on AWS Bedrock with Nova Micro in Frankfurt, FastAPI, pgvector, and Celery.",
  },
  {
    label: "HeyData GDPR-compliance SaaS",
    stat: "~70%",
    statLabel: "less human support involvement",
    outcome:
      "Production legal-research and customer-support assistant over 60+ legal PDFs. Real money and hours saved.",
    build: "RAG assistant for legal research and customer support.",
  },
];

const compactWork = [
  {
    label: "Website-crawler chatbot",
    outcome:
      "Crawls a platform, builds a sitemap, and guides users through the product in natural language so support does not have to.",
  },
  {
    label: "Custom CRM for crypto traders",
    outcome: "Full backend for a CRM used by 500+ real users.",
  },
  {
    label: "Four-agent AI content system",
    outcome:
      "Research to draft to editor to publisher, built with LangChain and LangGraph.",
  },
  {
    label: "Lead enrichment tool",
    outcome: "Small, practical system for enriching lead data before outreach.",
  },
  {
    label: "Wall-artist marketplace backend",
    outcome: "Backend build for a marketplace product.",
  },
];

const workingPrinciples = [
  {
    title: "You talk to the builder",
    copy: "No account manager. No junior team. You work with Vusal, the person writing the code and making the technical calls.",
  },
  {
    title: "Built around your business",
    copy: "The system follows your workflow, data, edge cases, and constraints. Not a generic chatbot with your logo on it.",
  },
  {
    title: "Tied to a number",
    copy: "Hours saved. Support load cut. Revenue unlocked. If the work cannot move a real metric, it does not belong in the build.",
  },
  {
    title: "Fast by default",
    copy: "Small scope. Clear first version. Direct feedback. Production code without the slow agency theater.",
  },
];

const techStack = [
  "Python",
  "FastAPI",
  "Next.js",
  "AWS Bedrock",
  "pgvector",
  "LangChain/LangGraph",
  "Celery",
  "Redis",
  "Docker",
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 md:mb-14"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          {copy}
        </p>
      ) : null}
    </motion.div>
  );
}

function PrimaryButton({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b7ffe6] to-emerald-400 px-6 py-3 text-sm font-bold text-[#03130f] shadow-[0_0_35px_rgba(52,211,153,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(52,211,153,0.35)] focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#03130f] ${className}`}
    >
      {children}
      <ArrowIcon />
    </button>
  );
}

export default function NovraHomePage() {
  const router = useRouter();
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    function parseData(raw: unknown) {
      if (typeof raw !== "string") return raw;

      try {
        return JSON.parse(raw);
      } catch {
        return null;
      }
    }

    function onMessage(event: MessageEvent) {
      const data = parseData(event.data);
      const eventName =
        data && typeof data === "object" && "event" in data
          ? (data as { event?: unknown }).event
          : undefined;

      if (eventName === "calendly.event_scheduled") {
        router.push("/thank-you");
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [router]);

  useEffect(() => {
    const calendly = (window as CalendlyPopupWindow).Calendly;
    const parentElement = calendlyRef.current;

    if (!calendlyLoaded || !calendly || !parentElement) return;

    parentElement.innerHTML = "";
    calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement,
    });
  }, [calendlyLoaded]);

  function scrollToBooking() {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#03130f] text-zinc-100">
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setCalendlyLoaded(true)}
        onReady={() => setCalendlyLoaded(true)}
      />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#03130f]/80 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-6"
          aria-label="Main navigation"
        >
          <a href="#" className="text-lg font-bold tracking-tight text-white">
            Novra<span className="text-emerald-300">AI</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            <a
              href="#services"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              What I do
            </a>
            <a
              href="#work"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              Work
            </a>
            <a
              href="#process"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              How I work
            </a>
          </div>
          <button
            type="button"
            onClick={scrollToBooking}
            className="cursor-pointer rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/60 hover:bg-emerald-300/15 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            Book a call
          </button>
        </nav>
      </header>

      <main>
        <section className="relative min-h-screen overflow-hidden px-5 py-28 md:px-6">
          <div className="absolute inset-0 dot-pattern opacity-40" />
          <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[140px]" />
          <div className="absolute right-[-120px] top-1/3 h-72 w-72 rounded-full bg-[#b7ffe6]/10 blur-[100px]" />

          <div className="relative mx-auto max-w-6xl pt-[14vh] text-center md:pt-[18vh]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                AI that removes bottlenecks
              </p>
              <h1 className="mx-auto max-w-6xl text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                AI that scales your business without scaling the busywork.
              </h1>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                Your team is buried in repetitive tasks, slow handoffs, and
                support work that does not grow the business. I build the AI
                systems that take that work off their plate, including one that
                processes ~15,000 hotel emails/day.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {["Efficiency", "Time", "Money"].map((outcome) => (
                  <span
                    key={outcome}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-300"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                <PrimaryButton onClick={scrollToBooking} className="sm:px-8">
                  Book a call
                </PrimaryButton>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                >
                  See the work
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="services"
          className="relative border-t border-white/[0.06] px-5 py-20 md:px-6 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="What I do"
              title="I build systems around the work that costs you time, margin, and momentum."
              copy="Not chatbots for the sake of chatbots. Systems that remove bottlenecks and keep moving after the demo is over."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-emerald-300/[0.06]"
                >
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
                    {service.outcome}
                  </p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-200">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400">
                    {service.copy}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="work"
          className="relative border-t border-white/[0.06] px-5 py-20 md:px-6 md:py-28"
        >
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Selected work"
              title="Real systems. Real volume. No fake logos."
              copy="The proof is what shipped and what number it moved."
            />

            <div className="grid gap-5 lg:grid-cols-2">
              {featuredWork.map((work, index) => (
                <motion.article
                  key={work.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-emerald-300/20 bg-[#061814] p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/45 md:p-8"
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">
                      {work.label}
                    </h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-zinc-400">
                      Shipped
                    </span>
                  </div>
                  <p className="text-7xl font-black tracking-[-0.08em] text-transparent bg-gradient-to-r from-[#d7fff0] to-emerald-300 bg-clip-text md:text-8xl">
                    {work.stat}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.24em] text-emerald-200">
                    {work.statLabel}
                  </p>
                  <p className="mt-7 text-lg leading-8 text-zinc-200">
                    {work.outcome}
                  </p>
                  <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-7 text-zinc-500">
                    {work.build}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {compactWork.map((work, index) => (
                <motion.article
                  key={work.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-emerald-300/[0.05]"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {work.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {work.outcome}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] px-5 py-10 md:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Stack used in production builds
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="border-t border-white/[0.06] px-5 py-20 md:px-6 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="How I work"
              title="Direct, technical, tied to the result."
              copy="A one-person studio is the point. Less translation. Fewer meetings. Better software."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {workingPrinciples.map((principle, index) => (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35"
                >
                  <span className="font-mono text-sm text-emerald-300">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {principle.copy}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative border-t border-white/[0.06] px-5 py-24 md:px-6 md:py-32"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.16),transparent_55%)]" />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto max-w-4xl text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-emerald-300">
              Start here
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
              Tell me where your time and money are leaking. I will show you
              what AI can fix.
            </h2>
            <div className="mt-9">
              <PrimaryButton onClick={scrollToBooking} className="px-8">
                Book a call
              </PrimaryButton>
            </div>
            <p className="mt-5 text-sm text-zinc-400">
              Email fallback:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                {EMAIL}
              </a>
            </p>
          </motion.div>
          <motion.div
            id="booking"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mx-auto mt-12 max-w-4xl scroll-mt-24"
          >
            <div
              ref={calendlyRef}
              className="h-[720px] w-full [&>iframe]:block [&>iframe]:h-full [&>iframe]:w-full"
              style={{ minWidth: 320 }}
            />
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] px-5 py-8 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-white">
            Novra<span className="text-emerald-300">AI</span>
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="transition hover:text-emerald-300"
          >
            {EMAIL}
          </a>
          <p>{new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
