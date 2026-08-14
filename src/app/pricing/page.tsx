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
    core: [
      "300 orders tracked / month",
      "Meta & Google Ads data",
      "Server-side tracking & attribution",
      "30 days analytics history",
      "UTM builder",
    ],
    extra: [
      "500 newsletter sends / month",
      "50 reviews / month",
      "25 leads / month",
      "SEO audit (unlimited)",
    ],
  },
  {
    name: "Growth",
    monthly: 79,
    yearly: 720,
    highlight: true,
    badge: "Most popular",
    core: [
      "2,500 orders tracked / month",
      "Meta & Google Ads data",
      "Server-side tracking & attribution",
      "90 days analytics history",
    ],
    extra: [
      "5,000 subscribers, 20k sends",
      "Unlimited reviews",
      "Unlimited leads",
      "SEO audit (unlimited)",
      "Social calendar & analytics",
      "Product feed for Google & Meta",
    ],
  },
  {
    name: "Pro",
    monthly: 149,
    yearly: 1356,
    highlight: false,
    badge: null,
    core: [
      "Unlimited orders tracked",
      "Meta & Google Ads data",
      "Server-side tracking & attribution",
      "365 days analytics history",
      "Visitor flow analysis",
    ],
    extra: [
      "Unlimited subscribers & sends",
      "Unlimited reviews & leads",
      "Product feed for Google & Meta",
      "Social calendar & analytics",
      "Priority support",
    ],
  },
];

const PRICING_FAQ: { q: string; a: string }[] = [
  {
    q: "What counts as an order tracked?",
    a: "Each new Shopify order that reaches Attribix through your store's order webhook counts once toward your plan's monthly order limit, matched by order ID.",
  },
  {
    q: "What happens if I exceed my plan's order limit?",
    a: "Attribix stops recording additional orders for that month once you hit your plan's limit, until it resets or you upgrade. Your Shopify store keeps taking orders as normal either way; only further tracking pauses.",
  },
  {
    q: "Can I upgrade or downgrade?",
    a: "Yes. Plan changes are handled through your Shopify billing settings once your store is connected.",
  },
  {
    q: "Can I cancel during the trial?",
    a: "Yes. You can cancel any time during the trial or afterward by uninstalling the app or canceling the plan, with no penalty for canceling during the trial.",
  },
  {
    q: "Do all plans include server-side tracking?",
    a: "Yes. Every plan includes server-side tracking, Meta and Google Ads data and full attribution. What changes between plans is order volume, history length and access to the additional tools.",
  },
  {
    q: "Is a credit card required for the trial?",
    a: "No. The 14-day free trial does not require a credit card to start.",
  },
  {
    q: "Which plan is suitable for higher-volume stores?",
    a: "Pro, which tracks unlimited orders and keeps 365 days of analytics history rather than a fixed monthly cap.",
  },
  {
    q: "Is Shopify Plus supported?",
    a: "Yes. Attribix connects through Shopify's standard app and webhook APIs, so it works the same way on Shopify Plus as on other Shopify plans.",
  },
];

const PRICING_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRICING_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function PricingPage() {
  const [yearly, setYearly] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_FAQ_JSON_LD) }} />
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

              <div className="mb-5 flex-1">
                <p className={cx("mb-2 text-[11px] font-semibold uppercase tracking-wide", plan.highlight ? "text-cyan-300/80" : "text-white/40")}>
                  Core Attribix
                </p>
                <ul className="space-y-2.5">
                  {plan.core.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                      <svg className={cx("mt-0.5 h-4 w-4 shrink-0", plan.highlight ? "text-cyan-400" : "text-white/40")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-white/30">
                  Additional tools included
                </p>
                <ul className="space-y-2.5">
                  {plan.extra.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/55">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/signup"
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

        {/* Bottom note */}
        <div className="mt-12 text-center text-sm text-white/40">
          All plans include a 14-day free trial. No credit card required.{" "}
          <Link href="/book-demo" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
            Book a demo
          </Link>{" "}
          if you need help choosing.
        </div>

        {/* FAQ */}
        <div className="mt-16 mx-auto max-w-2xl">
          <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6">Pricing questions</h2>
          <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {PRICING_FAQ.map((item, idx) => (
              <details key={item.q} className="group px-5 py-4 open:bg-white/[0.02]" open={idx === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white marker:content-none">
                  {item.q}
                  <span aria-hidden className="shrink-0 text-white/40 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-2 text-sm leading-relaxed text-white/60">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
