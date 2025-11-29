"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import faq from "@/content/faq.json";

// Type guard (optional safety)
type FAQ = { q: string; a: string };
function isFAQArray(x: unknown): x is FAQ[] {
  return Array.isArray(x) && x.every(i => i && typeof i.q === "string" && typeof i.a === "string");
}

export default function FAQPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const items: FAQ[] = isFAQArray(faq) ? faq : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(i => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      {/* Nav (aligned with homepage) */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
            <span className="font-semibold">Attribix</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/features" className="opacity-80 hover:opacity-100 relative">
              Features
            </Link>
            <Link href="/#how" className="opacity-80 hover:opacity-100 relative">
              How it works
            </Link>
            <Link href="/#integrations" className="opacity-80 hover:opacity-100 relative">
              Integrations
            </Link>
            <Link href="/pricing" className="opacity-80 hover:opacity-100 relative">
              Pricing
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/15"
              >
                Log in
              </Link>
              <Link
                href="/book-demo"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-md hover:bg-neutral-200 transition"
              >
                Book demo
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs font-medium text-white/80 hover:bg-white/10"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            <span className="mr-1">Menu</span>
            <span className="flex flex-col gap-[3px]">
              <span className="h-[2px] w-4 bg-white rounded-full" />
              <span className="h-[2px] w-4 bg-white rounded-full" />
            </span>
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-sm">
            <nav className="mx-auto max-w-7xl px-4 py-4 space-y-2 text-sm">
              <Link
                href="/features"
                onClick={() => setMobileOpen(false)}
                className="block py-1 text-white/80 hover:text-white"
              >
                Features
              </Link>
              <Link
                href="/#how"
                onClick={() => setMobileOpen(false)}
                className="block py-1 text-white/80 hover:text-white"
              >
                How it works
              </Link>
              <Link
                href="/#integrations"
                onClick={() => setMobileOpen(false)}
                className="block py-1 text-white/80 hover:text-white"
              >
                Integrations
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className="block py-1 text-white/80 hover:text-white"
              >
                Pricing
              </Link>

              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg border border-white/15 px-4 py-2 text-center text-sm text-white/90 hover:bg-white/10"
                >
                  Log in
                </Link>
                <Link
                  href="/book-demo"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-white text-center text-gray-900 px-4 py-2 font-semibold hover:bg-neutral-200"
                >
                  Book demo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-5xl px-4 py-20">
        {/* JSON-LD for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">FAQ</h1>
        <p className="mt-3 text-sm md:text-base text-white/80 max-w-2xl">
          The most common questions brands ask before switching their tracking over to Attribix.
        </p>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/40">
          {items.map((item, idx) => (
            <details
              key={idx}
              className="group [&[open]>summary]:bg-white/5"
              open={idx === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium">
                <span>{item.q}</span>
                <span className="text-xs text-white/60 group-open:hidden">+</span>
                <span className="hidden text-xs text-white/60 group-open:inline">−</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-white/80 whitespace-pre-line">
                {item.a}
              </div>
            </details>
          ))}

          {items.length === 0 && (
            <div className="px-5 py-6 text-sm text-white/70">
              No FAQ items yet. Add them in{" "}
              <code className="text-white/90">src/content/faq.json</code>.
            </div>
          )}
        </div>

        <div className="mt-10">
          <Link
            href="/analytics"
            className="inline-block rounded-full bg-white text-gray-900 px-5 py-3 font-semibold hover:opacity-90"
          >
            Open analytics
          </Link>
        </div>
      </main>
    </div>
  );
}
