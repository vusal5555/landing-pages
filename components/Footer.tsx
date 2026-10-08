import Link from "next/link";
import { legalNavigation, primaryNavigation, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#020d0a]">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight text-white">
              Novra <span className="text-emerald-300">AI</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              AI-powered hotel enquiry processing and revenue recovery
              workflows for hospitality teams.
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Operated by an individual entrepreneur registered in {site.location}.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Platform</h2>
            <ul className="mt-4 space-y-3">
              {primaryNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition hover:text-emerald-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Legal & support</h2>
            <ul className="mt-4 space-y-3">
              {legalNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition hover:text-emerald-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-zinc-400 transition hover:text-emerald-200"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a
            href="https://www.linkedin.com/in/vusal-novruzovv/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
