"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BookDemoForm from "../../components/BookDemoForm";

export default function BookDemoPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      {/* === HEADER (aligned with homepage) === */}
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

      {/* HERO + FORM */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Get a walkthrough
            </p>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.05]">
              Book a demo
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl">
              20–30 minutes on Zoom. We&apos;ll review your current tracking, show live reports, and
              outline the setup plan.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] text-emerald-200">
                  1
                </span>
                <div>
                  <p className="font-medium text-white">We look at your current tracking.</p>
                  <p className="text-white/70">
                    Pixel events, server events, UTMs, and what your ad platforms &amp; Shopify are
                    actually saying.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] text-emerald-200">
                  2
                </span>
                <div>
                  <p className="font-medium text-white">We show you live reports.</p>
                  <p className="text-white/70">
                    How Attribix stitches together journeys and makes ROAS &amp; MER actually
                    trustworthy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] text-emerald-200">
                  3
                </span>
                <div>
                  <p className="font-medium text-white">We leave you with a plan.</p>
                  <p className="text-white/70">
                    Exact steps to clean up tracking whether you use Attribix, something else, or
                    build it in-house.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="rounded-3xl border border-white/15 bg-black/40 p-6 md:p-8 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
            <BookDemoForm />
          </div>
        </div>
      </section>
    </div>
  );
}
