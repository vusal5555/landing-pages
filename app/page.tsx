import type { Metadata } from "next";
import {
  CTASection,
  Eyebrow,
  PrimaryLink,
  SecondaryLink,
  SectionHeading,
  SiteShell,
} from "@/components/Marketing";

export const metadata: Metadata = {
  title: "Novra AI | Hotel Enquiry & Revenue Recovery",
  description:
    "Turn more hotel enquiries into booked revenue with AI-powered enquiry processing, follow-up workflows, routing, and revenue recovery support.",
  openGraph: {
    title: "Turn More Hotel Enquiries Into Booked Revenue",
    description:
      "Novra AI helps hotel teams process enquiries, identify booking intent, and support timely follow-up.",
    url: "https://novraai.dev",
    siteName: "Novra AI",
    type: "website",
  },
  alternates: {
    canonical: "https://novraai.dev",
  },
};

const capabilities = [
  {
    title: "AI enquiry processing",
    status: "Automated software",
    problem: "High-volume inboxes make it easy for valuable enquiries to wait or get missed.",
    description:
      "The software analyzes configured incoming enquiry messages and structures the details needed for the next workflow step.",
    benefit: "Hotel teams receive organized enquiries instead of manually sorting every message.",
  },
  {
    title: "Booking intent detection",
    status: "Automated software",
    problem: "General questions, room requests, and group business need different handling.",
    description:
      "AI classification identifies the likely purpose of each supported enquiry so the correct workflow can begin.",
    benefit: "Time-sensitive booking opportunities can be prioritized earlier.",
  },
  {
    title: "Rooms, meetings & events",
    status: "Configured workflow",
    problem: "Room and event enquiries arrive with different fields, owners, and response paths.",
    description:
      "Novra AI can be configured to distinguish supported reservation, meeting, conference, and event enquiry categories.",
    benefit: "Each category follows a hotel-specific process instead of a generic response path.",
  },
  {
    title: "Missing information checks",
    status: "Workflow support",
    problem: "An enquiry can stall when dates, party size, room needs, or event details are incomplete.",
    description:
      "The workflow identifies configured information gaps and prepares the enquiry for follow-up or staff review.",
    benefit: "Teams can move enquiries forward with fewer manual checks.",
  },
  {
    title: "Follow-up, routing & escalation",
    status: "Automation with staff controls",
    problem: "Manual handoffs and inconsistent follow-up create avoidable leakage.",
    description:
      "Rules can route enquiries and initiate supported follow-up actions. Staff approval and escalation remain available where the hotel requires them.",
    benefit: "The right team receives the opportunity while hotel staff stay in control.",
  },
  {
    title: "Revenue recovery visibility",
    status: "Configured reporting",
    problem: "Hotels often lack a consistent view of enquiries that did not progress.",
    description:
      "Novra AI can record workflow outcomes and surface unresolved opportunities using the reporting agreed during implementation.",
    benefit: "Teams have a practical list of opportunities to review and re-engage.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pb-20 pt-32 md:px-6">
        <div className="dot-pattern absolute inset-0 opacity-50" />
        <div className="absolute left-1/2 top-16 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-emerald-400/16 blur-[150px]" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Built for hotel enquiry teams
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl md:text-7xl">
              Turn More Hotel Enquiries Into Booked Revenue
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Novra AI helps hotels capture booking opportunities, automate
              enquiry follow-ups, and recover potential revenue using
              intelligent AI-powered workflows.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              The system works alongside reservations and sales teams. It is
              configured around each hotel&apos;s enquiry sources, routing
              rules, and approval process.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact#book-a-demo">Book a Demo</PrimaryLink>
              <SecondaryLink href="/product">Explore the Platform</SecondaryLink>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-[#061814]/90 p-5 shadow-2xl shadow-black/30 md:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-semibold text-white">Enquiry workflow</p>
                <p className="mt-1 text-xs text-zinc-500">Conceptual product flow</p>
              </div>
              <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                Hotel configured
              </span>
            </div>
            <ol className="mt-5 space-y-3">
              {[
                ["01", "Incoming enquiry", "Message received from a configured source"],
                ["02", "AI processing", "Intent and booking details identified"],
                ["03", "Workflow decision", "Follow up, route, or request staff review"],
                ["04", "Outcome record", "Activity retained for recovery review"],
              ].map(([number, title, copy]) => (
                <li
                  key={number}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4"
                >
                  <span className="font-mono text-xs text-emerald-300">{number}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Product overview"
            title="A clear operating layer for hotel enquiries."
            description="Each capability addresses a specific point where a booking opportunity can slow down, lose context, or disappear from view."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-300">
                  {capability.status}
                </p>
                <h3 className="mt-4 text-xl font-bold text-white">{capability.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {capability.description}
                </p>
                <dl className="mt-5 space-y-3 border-t border-white/[0.08] pt-5 text-sm">
                  <div>
                    <dt className="font-semibold text-zinc-200">Problem</dt>
                    <dd className="mt-1 leading-6 text-zinc-500">{capability.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-200">Hotel benefit</dt>
                    <dd className="mt-1 leading-6 text-zinc-500">{capability.benefit}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <SecondaryLink href="/product">View detailed capabilities</SecondaryLink>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-white/[0.02] px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>What customers purchase</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Software, configured for a real hotel workflow.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-zinc-400">
              The subscription provides access to the Novra AI Revenue Recovery
              System. Initial configuration and ongoing optimization support the
              software deployment; they are not sold as a standalone consulting
              engagement.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.05] p-7 md:p-8">
            <p className="text-sm text-zinc-400">Novra AI Revenue Recovery System</p>
            <p className="mt-3 text-5xl font-black tracking-tight text-white">
              $2,500 <span className="text-lg font-medium text-zinc-400">USD / month</span>
            </p>
            <ul className="mt-7 space-y-3 text-sm text-zinc-300">
              {[
                "Three-month initial commitment",
                "$0 one-time setup fee",
                "Hotel-specific configuration",
                "Enquiry processing and workflow capabilities",
                "Technical support and ongoing optimization",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="text-emerald-300">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PrimaryLink href="/pricing">Review pricing and terms</PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
