"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* -----------------------------------------------------
   Utilities
----------------------------------------------------- */
function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}
const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });

/* -----------------------------------------------------
   Attribution model types
   Same model set and weighting logic as the production
   /analytics/attribution dashboard (src/app/analytics/attribution/logic.ts):
   last-click, first-click, linear, and positional time-decay (2^i weights).
----------------------------------------------------- */
type ModelKind = "last" | "first" | "linear" | "decay";
const MODEL_LABEL: Record<ModelKind, string> = {
  last: "Last Click",
  first: "First Click",
  linear: "Linear",
  decay: "Time-decay",
};
const MODEL_COPY: Record<ModelKind, string> = {
  last: "Protects brand and retargeting. Gives all the credit to the final touch before the purchase.",
  first: "Finds top-of-funnel winners. Rewards the touch that started the journey.",
  linear: "Keeps everyone honest. Splits credit evenly across every touch in the journey.",
  decay: "Leans into recency. Touches closer to the purchase get more credit than earlier ones, without ignoring them.",
};

/* -----------------------------------------------------
   Fixed example journey
   One Shopify order, two ad touches. The order itself
   never changes; only how each model splits credit does.
----------------------------------------------------- */
type Touch = { channel: "Meta" | "Google"; label: string; day: string };
const JOURNEY: Touch[] = [
  { channel: "Meta", label: "Meta Ad click", day: "Day 1" },
  { channel: "Google", label: "Google Search click", day: "Day 3" },
];
const ORDER_VALUE = 100;
const ORDER_LABEL = "Shopify order #1042";

function attributeJourney(model: ModelKind): Record<"Meta" | "Google", number> {
  const L = JOURNEY.length;
  const shares: Record<"Meta" | "Google", number> = { Meta: 0, Google: 0 };

  if (model === "last") {
    shares[JOURNEY[L - 1].channel] = ORDER_VALUE;
  } else if (model === "first") {
    shares[JOURNEY[0].channel] = ORDER_VALUE;
  } else if (model === "linear") {
    const w = 1 / L;
    JOURNEY.forEach((t) => (shares[t.channel] += ORDER_VALUE * w));
  } else {
    // Positional time-decay: weight = 2^i, oldest touch i=0
    const weights = JOURNEY.map((_, i) => Math.pow(2, i));
    const sumW = weights.reduce((a, b) => a + b, 0);
    JOURNEY.forEach((t, i) => (shares[t.channel] += ORDER_VALUE * (weights[i] / sumW)));
  }
  return shares;
}

/* -----------------------------------------------------
   Journey diagram
----------------------------------------------------- */
function JourneyDiagram() {
  const steps = [
    { t: "Meta Ad", sub: "Day 1" },
    { t: "Shopify visit", sub: "session started" },
    { t: "Google Search", sub: "Day 3" },
    { t: "Shopify purchase", sub: `${ORDER_LABEL} · ${money(ORDER_VALUE)}` },
  ];
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((s, i) => (
        <React.Fragment key={s.t}>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center">
            <div className="text-sm font-semibold text-white">{s.t}</div>
            <div className="text-[11px] text-white/50">{s.sub}</div>
          </div>
          {i < steps.length - 1 && (
            <span aria-hidden className="text-white/25">
              →
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* -----------------------------------------------------
   Attribution demo: same order, different credit per model
----------------------------------------------------- */
function AttributionDemo() {
  const [model, setModel] = React.useState<ModelKind>("linear");
  const shares = attributeJourney(model);
  const rows: { channel: "Meta" | "Google"; revenue: number }[] = [
    { channel: "Meta" as const, revenue: shares.Meta },
    { channel: "Google" as const, revenue: shares.Google },
  ].sort((a, b) => b.revenue - a.revenue);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between gap-4">
        <div className="text-lg font-semibold">One order, four models</div>
        <div className="text-[11px] text-white/60">Fixed example, not a projection</div>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 overflow-x-auto">
        <JourneyDiagram />
      </div>

      <div className="mt-5">
        <div className="text-xs text-white/70 mb-2">Attribution model</div>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(MODEL_LABEL) as ModelKind[]).map((m) => (
            <button
              key={m}
              onClick={() => setModel(m)}
              className={cx(
                "px-3 py-1.5 rounded-lg border text-sm transition",
                model === m ? "border-cyan-400/40 bg-cyan-400/15" : "border-white/10 hover:bg-white/5"
              )}
            >
              {MODEL_LABEL[m]}
            </button>
          ))}
        </div>
        <p className="mt-2 text-[12px] text-white/60 leading-relaxed">{MODEL_COPY[model]}</p>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/[0.04]">
            <tr>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white/50">Channel</th>
              <th className="px-4 py-2.5 text-right text-[11px] font-semibold uppercase tracking-wide text-white/50">Attributed revenue</th>
              <th className="px-4 py-2.5 text-right text-[11px] font-semibold uppercase tracking-wide text-white/50">Share</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.channel} className="border-t border-white/10">
                <td className="px-4 py-3 font-medium text-white">{r.channel}</td>
                <td className="px-4 py-3 text-right text-white/85">{money(r.revenue)}</td>
                <td className="px-4 py-3 text-right text-white/60">
                  {((r.revenue / ORDER_VALUE) * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
            <tr className="border-t border-white/10 bg-white/[0.03]">
              <td className="px-4 py-2.5 text-white/60">Order total</td>
              <td className="px-4 py-2.5 text-right text-white/60">{money(ORDER_VALUE)}</td>
              <td className="px-4 py-2.5 text-right text-white/60">100%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-[12px] text-white/55 leading-relaxed">
        {ORDER_LABEL} stays {money(ORDER_VALUE)} in Shopify no matter which model is selected. Attribix
        doesn&apos;t change what the store sold; it changes which channel gets credit for having sold it,
        using the same last-click, first-click, linear and time-decay logic as your account&apos;s live
        attribution dashboard.
      </p>
    </div>
  );
}

/* -----------------------------------------------------
   Sample dashboard preview (mirrors the real /analytics
   attribution table structure with clearly labeled sample data)
----------------------------------------------------- */
function DashboardPreview() {
  const sampleRows = [
    { channel: "Meta", conversions: 148, revenue: 9820, share: 41.2 },
    { channel: "Google", conversions: 121, revenue: 8340, share: 35.0 },
    { channel: "Direct / Other", conversions: 63, revenue: 5670, share: 23.8 },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h3 className="text-xl font-bold">What you&apos;ll see after connecting your store</h3>
        <span className="rounded-full border border-amber-300/20 bg-amber-400/10 px-2.5 py-1 text-[11px] text-amber-200/90">
          Sample data, not a live account
        </span>
      </div>
      <p className="mt-3 text-sm text-white/70 max-w-2xl">
        This mirrors the layout of the real Attribution dashboard inside your Attribix account: a model
        picker, then attributed revenue and conversions by channel for the period you select.
      </p>
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden overflow-x-auto">
        <table className="w-full text-sm min-w-[480px]">
          <thead className="bg-white/[0.04]">
            <tr>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white/50">Channel</th>
              <th className="px-4 py-2.5 text-right text-[11px] font-semibold uppercase tracking-wide text-white/50">Conversions</th>
              <th className="px-4 py-2.5 text-right text-[11px] font-semibold uppercase tracking-wide text-white/50">Attributed revenue</th>
              <th className="px-4 py-2.5 text-right text-[11px] font-semibold uppercase tracking-wide text-white/50">Share</th>
            </tr>
          </thead>
          <tbody>
            {sampleRows.map((r) => (
              <tr key={r.channel} className="border-t border-white/10">
                <td className="px-4 py-3 font-medium text-white">{r.channel}</td>
                <td className="px-4 py-3 text-right text-white/70">{r.conversions}</td>
                <td className="px-4 py-3 text-right text-white/85">{money(r.revenue)}</td>
                <td className="px-4 py-3 text-right text-white/60">{r.share.toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* -----------------------------------------------------
   Page shell
----------------------------------------------------- */
export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-12">
          <section className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/70 mb-2">
              Attribution Features
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Shopify attribution &amp; tracking, made simple
            </h1>
            <p className="mt-2 text-white/75">
              The same Shopify order can look completely different depending on which attribution
              model gets applied to it. Switch models on the fixed example to see how credit moves
              between Meta and Google while the order itself stays the same.
            </p>

            <div className="mt-4 grid gap-3">
              {(Object.keys(MODEL_LABEL) as ModelKind[]).map((m) => (
                <div key={m} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold">{MODEL_LABEL[m]}</div>
                  <p className="text-sm text-white/70 mt-1">{MODEL_COPY[m]}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="lg:col-span-7">
            <AttributionDemo />
          </section>
        </div>

        {/* Why this is useful */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-bold mb-2">Why this is useful</h3>
          <ul className="list-disc pl-5 space-y-1 text-white/80 text-sm">
            <li>
              See how different models change <b>which channel looks responsible</b> for a sale,
              before you make a budget decision based on platform-reported ROAS.
            </li>
            <li>
              Understand why Meta and Google can both report reasonable-looking numbers that add up
              to more than the store actually sold.
            </li>
            <li>
              Walk into a budget conversation able to say which model you&apos;re using and why, instead
              of comparing two platforms that are each grading their own homework.
            </li>
          </ul>
        </div>

        {/* Dashboard preview */}
        <div className="mt-8">
          <DashboardPreview />
        </div>

        {/* Tracking layer highlight */}
        <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-white/5 p-5 md:p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-2">
            Tracking Layer
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Better tracking, not just prettier reports
              </h3>
              <p className="text-sm text-white/80">
                Attribix sits between your store and the ad platforms. We
                combine{" "}
                <b>first-party cookies, server-side events and clean IDs</b>{" "}
                so you see sales that pixels miss, and your attribution models
                are built on real data, not guesswork.
              </p>
            </div>
            <div className="grid gap-3 text-sm">
              <div className="rounded-xl border border-white/12 bg-black/30 px-4 py-3">
                <div className="font-semibold text-white/90">
                  First-party IDs
                </div>
                <p className="text-white/70 text-[13px]">
                  First-party identifiers help maintain more consistent
                  measurement across sessions where browser-based tracking
                  is limited.
                </p>
              </div>
              <div className="rounded-xl border border-white/12 bg-black/30 px-4 py-3">
                <div className="font-semibold text-white/90">
                  Server-side events
                </div>
                <p className="text-white/70 text-[13px]">
                  Purchases and key events sent via CAPI with smart deduping
                  against your pixels.
                </p>
              </div>
              <div className="rounded-xl border border-white/12 bg-black/30 px-4 py-3">
                <div className="font-semibold text-white/90">
                  Model-ready data
                </div>
                <p className="text-white/70 text-[13px]">
                  Clean, joined event stream so Attribix can run attribution
                  models and reports instantly, tightly integrated with your
                  store.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary tools note */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Additional tools included</p>
          <p className="text-sm text-white/70 max-w-2xl">
            Attribution and tracking are why Attribix exists. Accounts also include supporting tools
            such as newsletter, reviews, lead capture, SEO audit and product feeds, built on the same
            connected store data.{" "}
            <a href="/pricing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              See what&apos;s on each plan
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
