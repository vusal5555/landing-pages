import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHero,
  PrimaryLink,
  SectionHeading,
  SiteShell,
} from "@/components/Marketing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Novra AI Revenue Recovery System pricing: $2,500 USD per month, a three-month initial commitment, and no one-time setup fee.",
  alternates: { canonical: "/pricing" },
};

const included = [
  "Access to the configured Novra AI Revenue Recovery System",
  "Hotel-specific initial workflow configuration",
  "AI-powered enquiry processing",
  "Supported booking-intent classification",
  "Configured follow-up, routing, and escalation workflows",
  "Missing-information checks defined for the deployment",
  "Revenue-recovery workflow capabilities",
  "Reporting in the format agreed during implementation",
  "Technical support",
  "Ongoing system optimization within the agreed scope",
];

export default function PricingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Transparent pricing"
        title="One commercial offer for the Novra AI system."
        description="The primary offer is a recurring software subscription with hotel-specific configuration and operational support."
      />

      <section className="border-t border-white/[0.08] px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_.9fr]">
          <article className="rounded-[2rem] border border-emerald-300/25 bg-[#061814] p-7 shadow-2xl shadow-black/20 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
              Novra AI Revenue Recovery System
            </p>
            <div className="mt-6 flex flex-wrap items-end gap-3">
              <span className="text-5xl font-black tracking-[-0.05em] text-white md:text-7xl">
                $2,500
              </span>
              <span className="pb-2 text-lg text-zinc-400">USD / month</span>
            </div>
            <dl className="mt-8 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-wider text-zinc-500">Billing frequency</dt>
                <dd className="mt-2 font-semibold text-white">Monthly</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-zinc-500">Initial commitment</dt>
                <dd className="mt-2 font-semibold text-white">3 months</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-zinc-500">Setup fee</dt>
                <dd className="mt-2 font-semibold text-white">$0 USD</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-zinc-500">Payment status</dt>
                <dd className="mt-2 font-semibold text-white">Live checkout not enabled</dd>
              </div>
            </dl>
            <div className="mt-8">
              <PrimaryLink href="/contact#book-a-demo">Book a Demo</PrimaryLink>
            </div>
            <p className="mt-5 text-xs leading-5 text-zinc-500">
              No live payment is collected from this website while payment-provider
              review and integration are pending.
            </p>
          </article>

          <div>
            <h2 className="text-2xl font-bold text-white">What is included</h2>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-300"
                >
                  <span aria-hidden="true" className="text-emerald-300">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-white/[0.02] px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Commercial clarity"
            title="Software is the product. Configuration supports its delivery."
            description="The subscription is not a promise of general consulting services. Initial configuration maps the software to the hotel's agreed sources, fields, routing rules, and staff controls."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-xl font-bold text-white">Implementation services</h2>
              <p className="mt-4 leading-7 text-zinc-400">
                Hotel-specific configuration is provided to make the software
                operational and carries a published one-time setup fee of $0.
                Any work outside the agreed product scope requires a separate
                written agreement before it is performed or billed.
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-xl font-bold text-white">AI and infrastructure costs</h2>
              <p className="mt-4 leading-7 text-zinc-400">
                The published offer does not state a separate AI API or
                third-party infrastructure charge. If a deployment requires a
                customer-owned account or pass-through cost, it will be
                disclosed and agreed in writing before the subscription begins.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Billing, renewal & cancellation"
            title="Terms disclosed before any payment."
          />
          <div className="space-y-4">
            <article className="rounded-2xl border border-white/10 p-5">
              <h2 className="font-semibold text-white">Initial term</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                The initial commitment is three months at $2,500 USD per month.
                Cancellation does not shorten that initial commitment unless
                required by law or agreed in writing.
              </p>
            </article>
            <article className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.04] p-5">
              <h2 className="font-semibold text-amber-100">Terms pending final owner approval</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Automatic payment authorization, renewal after the initial
                three-month term, the post-term cancellation notice period, and
                final refund rules have not been published as settled terms.
                They will be stated in the order form and accepted before any
                payment is collected. This is a current checkout-launch blocker.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 p-5">
              <h2 className="font-semibold text-white">Payment provider</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Novra AI has not represented Paddle or Dodo Payments as an active
                payment provider. If an approved Merchant of Record is selected,
                the provider and applicable buyer terms will be shown at
                checkout and reflected in these policies before launch.
              </p>
            </article>
          </div>
          <p className="mt-7 text-sm text-zinc-500">
            Read the{" "}
            <Link href="/terms" className="text-emerald-300 underline">Terms of Service</Link>
            {" "}and{" "}
            <Link href="/refund-policy" className="text-emerald-300 underline">Refund Policy</Link>.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
