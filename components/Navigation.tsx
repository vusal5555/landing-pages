"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNavigation } from "@/lib/site";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#03130f]">
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white"
          onClick={() => setMobileOpen(false)}
        >
          Novra <span className="text-emerald-300">AI</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {primaryNavigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact#book-a-demo"
          className="hidden rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-[#03130f] transition hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#03130f] md:inline-flex"
        >
          Book a Demo
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-300 md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-b border-white/10 bg-[#03130f]/98 px-5 pb-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {primaryNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#book-a-demo"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-[#03130f]"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
