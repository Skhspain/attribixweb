"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PricingPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      {/* Nav – same structure as main page */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={24} height={24} />
            <span className="font-semibold">Attribix</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/features" className="opacity-80 hover:opacity-100">
              Features
            </Link>
            <Link href="/#how" className="opacity-80 hover:opacity-100">
              How it works
            </Link>
            <Link href="/#integrations" className="opacity-80 hover:opacity-100">
              Integrations
            </Link>
            <Link href="/pricing" className="opacity-100">
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

          {/* Mobile button */}
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

        {/* Mobile menu */}
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
                className="block py-1 text-white hover:text-white"
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

      {/* Header text */}
      <section className="mx-auto max-w-5xl px-4 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Pricing</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Simple, transparent pricing. Use this page to mirror whatever plans and numbers you show
          on the homepage – or keep it high-level and push people to book a demo.
        </p>
      </section>

      {/* Pricing cards – adjust the numbers/text to match your homepage */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Plan 1 – e.g. Starter */}
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 flex flex-col">
            <p className="text-sm font-semibold text-white/80">Starter</p>
            <p className="mt-3 text-3xl font-bold">Custom</p>
            <p className="text-xs text-white/60 mt-1">
              Match this to your entry plan from the main page.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              <li>• Core tracking & attribution</li>
              <li>• Pixel + server events</li>
              <li>• Basic reports</li>
            </ul>
          </div>

          {/* Plan 2 – e.g. Growth (highlight) */}
          <div className="rounded-3xl border border-cyan-400/60 bg-gradient-to-b from-cyan-500/20 to-slate-950/80 p-6 shadow-[0_0_40px_rgba(34,211,238,0.35)] flex flex-col relative overflow-hidden">
            <div className="absolute -top-6 right-4 rounded-full bg-cyan-400 text-black text-[11px] font-semibold px-3 py-1">
              Most popular
            </div>
            <p className="text-sm font-semibold text-white/90">Growth</p>
            <p className="mt-3 text-3xl font-bold">Custom</p>
            <p className="text-xs text-white/70 mt-1">
              Mirror your main plan here – traffic and spend typically land here.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/90">
              <li>• All core tracking features</li>
              <li>• Multi-platform attribution (Meta, Google, TikTok…)</li>
              <li>• Advanced reports & cohorts</li>
              <li>• Priority support</li>
            </ul>
          </div>

          {/* Plan 3 – e.g. Scale / Enterprise */}
          <div className="rounded-3xl border border-white/15 bg-black/40 p-6 flex flex-col">
            <p className="text-sm font-semibold text-white/80">Scale</p>
            <p className="mt-3 text-3xl font-bold">Talk to us</p>
            <p className="text-xs text-white/60 mt-1">
              For high-volume brands and agencies. Use the same language as your homepage.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              <li>• Everything in Growth</li>
              <li>• Custom modelling & exports</li>
              <li>• Dedicated support & Slack</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-white/70">
          Need exact numbers to match the homepage? Just update the prices and limits in these cards
          so they’re 1:1 with your main pricing section.
          <br />
          Or skip the details and{" "}
          <Link href="/book-demo" className="text-cyan-300 hover:text-cyan-200 underline">
            book a demo
          </Link>{" "}
          and we&apos;ll talk through it.
        </div>
      </section>
    </div>
  );
}
