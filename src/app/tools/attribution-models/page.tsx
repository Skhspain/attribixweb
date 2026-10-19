"use client";

// Educational attribution-model simulator. Moved here from /features
// (2026-10-19) so the Features page can show the actual product; the model
// logic mirrors src/app/analytics/attribution/logic.ts.

import React from "react";
import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { SectionHeader, TrialLink, btnSecondary, textLink } from "@/components/site/ui";

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
        <h2 className="text-lg font-semibold">One order, four models</h2>
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
              type="button"
              aria-pressed={model === m}
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

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.attribix.app/tools" },
    { "@type": "ListItem", position: 3, name: "Attribution model explorer", item: "https://www.attribix.app/tools/attribution-models" },
  ],
};

export default function AttributionModelsPage() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <main className="mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-32">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "Attribution models" }]} />
        <SectionHeader
          as="h1"
          eyebrow="Free tool"
          title="Attribution model explorer"
          intro="The same Shopify order can be credited very differently depending on the attribution model. Switch models on a fixed example to see how credit moves between Meta and Google while the order itself stays the same."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <section aria-label="Model descriptions" className="min-w-0 lg:col-span-5">
            <div className="grid gap-3">
              {(Object.keys(MODEL_LABEL) as ModelKind[]).map((m) => (
                <div key={m} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h2 className="font-semibold">{MODEL_LABEL[m]}</h2>
                  <p className="mt-1 text-sm text-white/70">{MODEL_COPY[m]}</p>
                </div>
              ))}
            </div>
          </section>
          <section aria-label="Interactive example" className="min-w-0 lg:col-span-7">
            <AttributionDemo />
          </section>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">Why this matters</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-white/80">
            <li>Different models change which channel looks responsible for a sale, before you make a budget decision.</li>
            <li>Meta and Google can each report reasonable-looking numbers that add up to more than the store sold.</li>
            <li>Agreeing on one model makes budget conversations about the same numbers.</li>
          </ul>
          <p className="mt-4 text-sm text-white/70">
            Attribix applies these four models to your real Shopify orders.{" "}
            <Link href="/features#attribution" className={textLink}>See attribution in the product</Link>{" "}
            or read the <Link href="/resources/shopify-attribution-models" className={textLink}>guide to Shopify attribution models</Link>.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrialLink location="tool_attribution_models" />
            <Link href="/tools" className={btnSecondary}>More free tools</Link>
          </div>
        </div>
      </main>
    </ProductPageShell>
  );
}
