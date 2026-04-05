"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const PLANS = [
  {
    name: "Starter",
    monthly: 39,
    yearly: 354,
    highlight: false,
    badge: null,
    features: [
      "300 orders tracked / month",
      "500 newsletter sends / month",
      "50 reviews / month",
      "25 leads / month",
      "SEO audit — unlimited",
      "Meta & Google Ads data",
      "30 days analytics history",
      "UTM builder",
    ],
  },
  {
    name: "Growth",
    monthly: 79,
    yearly: 720,
    highlight: true,
    badge: "Most popular",
    features: [
      "2,500 orders tracked / month",
      "5,000 subscribers — 20k sends",
      "Unlimited reviews",
      "Unlimited leads",
      "SEO audit — unlimited",
      "90 days analytics history",
      "Social calendar & analytics",
      "Product feed — Google & Meta",
    ],
  },
  {
    name: "Pro",
    monthly: 149,
    yearly: 1356,
    highlight: false,
    badge: null,
    features: [
      "Unlimited orders tracked",
      "Unlimited subscribers & sends",
      "Unlimited reviews & leads",
      "365 days analytics history",
      "Visitor flow analysis",
      "Product feed — Google & Meta",
      "Social calendar & analytics",
      "Priority support",
    ],
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 10%, rgba(56,189,248,0.1), transparent 60%), radial-gradient(600px 400px at 80% 80%, rgba(168,85,247,0.1), transparent 60%)",
        }}
      />

      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-white/60 text-base max-w-xl mx-auto">
          All plans include server-side tracking, Meta & Google Ads data, and full attribution. No hidden fees.
        </p>

        {/* Monthly / Yearly toggle */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1">
          <button
            onClick={() => setYearly(false)}
            className={cx(
              "rounded-full px-5 py-2 text-sm font-semibold transition-all",
              !yearly ? "bg-white text-gray-900 shadow" : "text-white/50 hover:text-white"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cx(
              "rounded-full px-5 py-2 text-sm font-semibold transition-all flex items-center gap-2",
              yearly ? "bg-white text-gray-900 shadow" : "text-white/50 hover:text-white"
            )}
          >
            Yearly
            <span className={cx(
              "text-[10px] font-bold rounded-full px-1.5 py-0.5 transition-colors",
              yearly ? "bg-emerald-500 text-white" : "bg-emerald-500/20 text-emerald-400"
            )}>
              Save up to 24%
            </span>
          </button>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-6 md:grid-cols-3 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cx(
                "relative rounded-3xl border p-7 flex flex-col",
                plan.highlight
                  ? "border-cyan-400/60 bg-gradient-to-b from-cyan-500/15 to-slate-950/80 shadow-[0_0_50px_rgba(34,211,238,0.2)]"
                  : "border-white/10 bg-black/30"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 text-black text-[11px] font-bold px-4 py-1 whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-5">
                <p className={cx("text-sm font-semibold", plan.highlight ? "text-cyan-300" : "text-white/60")}>
                  {plan.name}
                </p>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-extrabold">
                    ${yearly ? Math.round(plan.yearly / 12) : plan.monthly}
                  </span>
                  <span className="text-white/50 text-sm mb-1.5">/mo</span>
                </div>
                {yearly && (
                  <p className="text-xs text-white/40 mt-1">
                    Billed ${plan.yearly}/yr
                  </p>
                )}
                {!yearly && (
                  <p className="text-xs text-emerald-400 mt-1">
                    Save ${plan.monthly * 12 - plan.yearly}/yr with annual
                  </p>
                )}
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                    <svg className={cx("mt-0.5 h-4 w-4 shrink-0", plan.highlight ? "text-cyan-400" : "text-white/40")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/login"
                className={cx(
                  "rounded-xl py-3 text-sm font-semibold text-center transition",
                  plan.highlight
                    ? "bg-white text-gray-900 hover:bg-neutral-100 shadow-lg"
                    : "border border-white/20 text-white hover:bg-white/8"
                )}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ / bottom note */}
        <div className="mt-12 text-center text-sm text-white/40">
          All plans include a 14-day free trial. No credit card required.{" "}
          <Link href="/book-demo" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
            Book a demo
          </Link>{" "}
          if you need help choosing.
        </div>
      </section>

      <Footer />
    </div>
  );
}
