import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#03130f] text-zinc-100">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-300">
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 md:px-6 md:pb-28 md:pt-44">
      <div className="dot-pattern absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-16 h-[460px] w-[640px] -translate-x-1/2 rounded-full bg-emerald-400/14 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl md:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          {description}
        </p>
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-[#03130f] shadow-[0_0_35px_rgba(52,211,153,0.2)] transition hover:-translate-y-0.5 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#03130f]"
    >
      {children}
      <span aria-hidden="true" className="ml-2">→</span>
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-300/[0.08] focus:outline-none focus:ring-2 focus:ring-emerald-300"
    >
      {children}
    </Link>
  );
}

export function CTASection({
  title = "See how Novra AI fits your enquiry workflow.",
  description = "We will map your current process, show the software workflow, and identify where staff approval or integration work is needed.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative border-t border-white/[0.08] px-5 py-20 md:px-6 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.13),transparent_58%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Eyebrow>Book a walkthrough</Eyebrow>
        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
          {description}
        </p>
        <div className="mt-8">
          <PrimaryLink href="/contact#book-a-demo">Book a Demo</PrimaryLink>
        </div>
      </div>
    </section>
  );
}

export function LegalPage({
  title,
  description,
  updated,
  children,
}: {
  title: string;
  description: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <SiteShell>
      <PageHero eyebrow="Legal" title={title} description={description}>
        <p className="text-sm text-zinc-500">Last updated: {updated}</p>
      </PageHero>
      <article className="border-t border-white/[0.08] px-5 py-16 md:px-6 md:py-20">
        <div className="legal-copy mx-auto max-w-3xl">{children}</div>
      </article>
    </SiteShell>
  );
}
