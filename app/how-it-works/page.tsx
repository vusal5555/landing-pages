import type { Metadata } from "next";
import {
  CTASection,
  PageHero,
  SectionHeading,
  SiteShell,
} from "@/components/Marketing";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Novra AI connects configured hotel enquiry sources, processes messages, supports follow-up, and tracks available outcomes.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    number: "01",
    title: "Connect enquiry sources",
    description:
      "During implementation, we map the hotel’s current enquiry path and configure the sources supported for that deployment. We do not claim a pre-built integration with every hotel system; each connection is confirmed before work begins.",
    automation: "Human-assisted implementation",
  },
  {
    number: "02",
    title: "Process incoming enquiries",
    description:
      "The software analyzes relevant incoming messages, extracts configured booking details, and structures the information for the next workflow decision.",
    automation: "Automated software",
  },
  {
    number: "03",
    title: "Identify opportunities",
    description:
      "AI classification detects supported booking intent and checks whether required information is present. Low-confidence or exceptional cases can be marked for staff review.",
    automation: "Automated with review controls",
  },
  {
    number: "04",
    title: "Support follow-up and recovery",
    description:
      "Rules can initiate approved follow-up actions, route the enquiry, or notify the appropriate employee. The hotel decides which actions may run automatically and which require staff involvement.",
    automation: "Configured automation",
  },
  {
    number: "05",
    title: "Track available outcomes",
    description:
      "Workflow activity and available booking outcomes can be retained for reporting and recovery review. The reporting format depends on the agreed deployment and connected data; a universal customer dashboard is not promised.",
    automation: "Implementation-specific reporting",
  },
];

export default function HowItWorksPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="How it works"
        title="A practical workflow around the enquiry channels you already use."
        description="Novra AI adds processing, decision logic, and follow-up support without asking reservation and sales teams to abandon their operating process."
      />

      <section className="border-t border-white/[0.08] px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Operational flow"
            title="Five steps from source to outcome."
            description="The boundaries between software automation, connected systems, and implementation support are made explicit for every deployment."
          />
          <ol className="relative space-y-5 md:space-y-0">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className="relative grid gap-4 border-white/10 md:grid-cols-[8rem_1fr_15rem] md:border-l md:pb-12 md:pl-10"
              >
                <div className="flex items-center gap-3 md:block">
                  <span className="font-mono text-sm text-emerald-300">{step.number}</span>
                  {index < steps.length - 1 ? (
                    <span className="ml-3 hidden text-emerald-300 md:inline">↓</span>
                  ) : null}
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                  <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                  <p className="mt-4 leading-7 text-zinc-400">{step.description}</p>
                </div>
                <div className="md:pt-6">
                  <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-1.5 text-xs text-emerald-200">
                    {step.automation}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-white/[0.02] px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Responsibilities"
            title="Software automation and implementation are separate parts of delivery."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.05] p-7">
              <h2 className="text-2xl font-bold text-white">The software operates</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-300">
                <li>• Message analysis and configured information extraction</li>
                <li>• Supported enquiry-intent classification</li>
                <li>• Rule-based workflow decisions and routing</li>
                <li>• Approved automated actions where enabled</li>
                <li>• Workflow activity records for agreed reporting</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
              <h2 className="text-2xl font-bold text-white">Our team supports</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">
                <li>• Initial workflow discovery and hotel-specific configuration</li>
                <li>• Connection setup for the sources confirmed in scope</li>
                <li>• Definition of categories, required fields, and escalation rules</li>
                <li>• Testing, monitoring, and ongoing workflow optimization</li>
                <li>• Technical support for the configured deployment</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
