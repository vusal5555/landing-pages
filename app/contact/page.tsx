import type { Metadata } from "next";
import {
  PageHero,
  SectionHeading,
  SiteShell,
} from "@/components/Marketing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Novra AI for a hotel enquiry and revenue recovery product demo or customer support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Talk through your hotel enquiry workflow."
        description="Book a product walkthrough or email us with a sales, implementation, privacy, or support question."
      />

      <section
        id="book-a-demo"
        className="scroll-mt-24 border-t border-white/[0.08] px-5 py-20 md:px-6 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Book a demo"
            title="See the software operating model before you buy."
            description="We will review your current enquiry flow, explain the supported automation, and identify the source connections and staff controls that would need configuration."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-emerald-300/20 bg-emerald-300/[0.05] p-7 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300">
                Product demo
              </p>
              <h2 className="mt-5 text-2xl font-bold text-white">
                Schedule a walkthrough
              </h2>
              <p className="mt-4 leading-7 text-zinc-400">
                Choose an available time through our external scheduling provider.
                You will leave novraai.dev and Calendly&apos;s privacy terms will apply.
              </p>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-[#03130f] transition hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                Open Demo Calendar <span aria-hidden="true" className="ml-2">↗</span>
              </a>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300">
                Email
              </p>
              <h2 className="mt-5 text-2xl font-bold text-white">
                Sales and customer support
              </h2>
              <p className="mt-4 leading-7 text-zinc-400">
                Use the monitored business address below for product questions,
                implementation support, billing questions, or privacy requests.
              </p>
              <a
                href={`mailto:${site.email}?subject=Novra%20AI%20enquiry`}
                className="mt-7 inline-flex text-lg font-semibold text-emerald-300 underline decoration-emerald-300/30 transition hover:text-emerald-200"
              >
                {site.email}
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-white/[0.02] px-5 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Business information" title="Novra AI" />
          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-5">
              <dt className="text-xs uppercase tracking-wider text-zinc-500">Business type</dt>
              <dd className="mt-2 text-zinc-200">Registered individual entrepreneur</dd>
            </div>
            <div className="rounded-2xl border border-white/10 p-5">
              <dt className="text-xs uppercase tracking-wider text-zinc-500">Business location</dt>
              <dd className="mt-2 text-zinc-200">{site.location}</dd>
            </div>
            <div className="rounded-2xl border border-white/10 p-5">
              <dt className="text-xs uppercase tracking-wider text-zinc-500">Brand</dt>
              <dd className="mt-2 text-zinc-200">{site.name}</dd>
            </div>
            <div className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.04] p-5">
              <dt className="text-xs uppercase tracking-wider text-amber-200">Legal identity status</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-400">
                The operator&apos;s full registered legal name, registration details,
                and legal notice address require owner confirmation before checkout launch.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </SiteShell>
  );
}
