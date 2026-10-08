import type { Metadata } from "next";
import {
  CTASection,
  PageHero,
  PrimaryLink,
  SectionHeading,
  SiteShell,
} from "@/components/Marketing";

export const metadata: Metadata = {
  title: "Hotel Enquiry & Revenue Recovery Platform",
  description:
    "Explore Novra AI's hotel enquiry processing, booking-intent classification, follow-up, routing, and revenue recovery workflow capabilities.",
  alternates: { canonical: "/product" },
};

const capabilities = [
  {
    letter: "A",
    title: "Enquiry processing",
    mode: "Automated software",
    description:
      "Novra AI analyzes messages from enquiry sources configured during implementation. It extracts relevant details from the message and structures them for classification, routing, or follow-up.",
    boundary:
      "Source connections and extraction fields are configured for the hotel. The public website does not promise a universal connection to every inbox, CRM, or reservation system.",
  },
  {
    letter: "B",
    title: "Booking intent detection",
    mode: "Automated software",
    description:
      "The system classifies supported enquiry types so a workflow can distinguish likely room reservations, group or event business, and general questions. Categories are matched to the hotel's operating process.",
    boundary:
      "Classification supports prioritization; it does not confirm inventory, price, or a booking unless an approved connected workflow provides that information.",
  },
  {
    letter: "C",
    title: "Automated follow-ups",
    mode: "Automation with staff controls",
    description:
      "Configured rules can identify enquiries requiring attention and initiate supported follow-up steps. Workflows may prepare an action, send an approved response, or notify a staff member, depending on the hotel's configuration.",
    boundary:
      "Fully automated actions are enabled only where agreed. Sensitive, exceptional, or low-confidence cases can be routed for staff review.",
  },
  {
    letter: "D",
    title: "Missing information collection",
    mode: "Workflow support",
    description:
      "The system can check for required information such as dates, party size, room requirements, contact details, and configured event needs before an enquiry advances.",
    boundary:
      "The fields checked and the method used to request missing details are defined during implementation.",
  },
  {
    letter: "E",
    title: "Routing and escalation",
    mode: "Configured automation",
    description:
      "Enquiries can be assigned to the appropriate reservation, sales, meetings, or events path using hotel-specific rules. Exceptions can be escalated to a designated employee or department.",
    boundary:
      "Routing destinations depend on the channels and systems the hotel makes available for the deployment.",
  },
  {
    letter: "F",
    title: "Revenue recovery",
    mode: "Configured workflow",
    description:
      "Unresolved enquiries can be retained for review so hotel teams can identify opportunities that did not progress and decide whether to re-engage the potential guest or organizer.",
    boundary:
      "Novra AI supports the recovery workflow. It does not guarantee that an enquiry will convert or attribute revenue without reliable outcome data.",
  },
  {
    letter: "G",
    title: "Reporting and visibility",
    mode: "Implementation-specific",
    description:
      "Processing status, workflow activity, and available outcomes can be provided through the reporting method agreed for the deployment.",
    boundary:
      "Novra AI is not currently represented as a universal self-service customer dashboard. Reporting format and data sources are confirmed during onboarding.",
  },
];

export default function ProductPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Product"
        title="Novra AI — Hotel Enquiry & Revenue Recovery Platform"
        description="Configured software that helps hospitality teams process incoming enquiries, identify booking intent, coordinate follow-up, and review opportunities that have not progressed."
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryLink href="/contact#book-a-demo">Book a Demo</PrimaryLink>
        </div>
      </PageHero>

      <section className="border-t border-white/[0.08] px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Platform scope"
            title="What the software does—and where staff stay involved."
            description="Novra AI combines automated message processing with hotel-specific workflow rules. The exact sources, fields, actions, and escalation paths are confirmed during implementation."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm text-emerald-300">
                    {capability.letter}
                  </span>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-1 text-[11px] text-emerald-200">
                    {capability.mode}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-bold text-white">{capability.title}</h2>
                <p className="mt-4 leading-7 text-zinc-400">{capability.description}</p>
                <div className="mt-5 rounded-2xl border border-white/[0.08] bg-black/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Scope note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {capability.boundary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-white/[0.02] px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Conceptual workflow"
            title="From incoming message to an accountable next step."
            description="This diagram explains the operating model. It is not a fabricated screenshot or a promise of a particular customer interface."
          />
          <div
            className="grid gap-3 rounded-[2rem] border border-white/10 bg-[#061814] p-5 md:grid-cols-5 md:p-8"
            role="img"
            aria-label="Conceptual workflow: enquiry source, AI processing, intent and field checks, follow-up or staff review, then outcome reporting"
          >
            {[
              ["1", "Enquiry source", "A configured source supplies an incoming message."],
              ["2", "AI processing", "Relevant content is extracted and organized."],
              ["3", "Opportunity check", "Intent and missing information are identified."],
              ["4", "Next action", "Rules follow up, route, or request staff review."],
              ["5", "Outcome", "Available activity and outcomes support recovery review."],
            ].map(([number, title, copy], index) => (
              <div
                key={number}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5"
              >
                <span className="font-mono text-xs text-emerald-300">{number}</span>
                <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-zinc-500">{copy}</p>
                {index < 4 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 text-emerald-300 md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:translate-x-0 md:-translate-y-1/2"
                  >
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            {
              title: "Software access",
              copy: "Access to the configured Novra AI processing and workflow system for the subscription term.",
            },
            {
              title: "Implementation support",
              copy: "Hotel-specific source, category, field, routing, and approval configuration. This supports the software and is not a separate consulting product.",
            },
            {
              title: "Ongoing operation",
              copy: "Technical support and workflow optimization within the agreed deployment scope. No unlisted service level or usage entitlement is implied.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 p-6">
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-4 leading-7 text-zinc-400">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteShell>
  );
}
