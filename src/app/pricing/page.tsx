"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      {/* NAVBAR (same style as homepage, but with proper links) */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
            <span className="font-semibold">Attribix</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Home
            </Link>
            <Link href="/analytics" className="opacity-80 hover:opacity-100">
              Analytics
            </Link>
            <Link href="/features" className="opacity-80 hover:opacity-100">
              Features
            </Link>
            <Link href="/faq" className="opacity-80 hover:opacity-100">
              FAQ
            </Link>
            <Link href="/pricing" className="opacity-100 font-semibold">
              Pricing
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/15"
            >
              Log in
            </Link>
            <Link
              href="/book-demo"
              className="rounded-xl bg-white text-gray-900 px-4 py-2 font-semibold shadow hover:scale-[1.02] transition"
            >
              Book demo
            </Link>
          </div>
        </div>
      </header>

      {/* PAGE HEADER */}
      <section className="mx-auto max-w-5xl px-4 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Pricing</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto">
          Start free. Upgrade when you see value. Built for performance-driven
          ecommerce brands.
        </p>
      </section>

      {/* PRICING GRID */}
      <section className="mx-auto max-w-6xl px-4 pb-28">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Starter",
              price: 69,
              note: "First 15 days free",
              features: ["Up to 50k sessions", "Basic attribution", "Email support"],
              highlight: false,
            },
            {
              name: "Growth",
              price: 149,
              note: "15-day free trial",
              features: ["Up to 250k sessions", "All models", "Slack alerts"],
              highlight: true,
            },
            {
              name: "Scale",
              price: 299,
              note: "15-day free trial",
              features: ["Unlimited", "API access", "Priority support"],
              highlight: false,
            },
          ].map((p) => (
            <div
              key={p.name}
              className={cx(
                "relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
                p.highlight &&
                  "border-cyan-300/40 ring-1 ring-cyan-400/40 shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_25px_80px_-20px_rgba(34,211,238,0.25)]"
              )}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-4 rounded-full border border-cyan-300/30 bg-cyan-400/15 px-2 py-0.5 text-[10px] text-cyan-200">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-2 text-3xl md:text-4xl font-extrabold">
                ${p.price}
                <span className="text-sm font-normal text-white/60">/mo</span>
              </div>
              <p className="text-xs text-emerald-300 mt-1">{p.note}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Link
                href="/login"
                className={cx(
                  "mt-6 inline-block w-full text-center rounded-lg border px-4 py-2 text-sm font-medium transition",
                  p.highlight
                    ? "border-cyan-300/60 bg-cyan-400/10 hover:bg-cyan-400/20"
                    : "border-white/20 hover:bg-white/10"
                )}
              >
                Start now
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/50 max-w-2xl mx-auto">
          All plans include CAPI + pixel tracking, multi-channel attribution, and
          access to analytics. Custom plans available for agencies and large
          ecommerce brands.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={20} height={20} />
            <span>Attribix</span>
          </div>
          <div className="flex gap-4">
            <a href="mailto:hello@attribix.app" className="hover:text-white/90">
              hello@attribix.app
            </a>
            <Link href="/privacy" className="hover:text-white/90">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/90">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
