"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-cyan-500/50 focus:bg-white/[0.08] focus:ring-0";
const labelClass = "block text-xs font-semibold uppercase tracking-wide text-white/40";

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://www.attribix.app/tools" },
    { "@type": "ListItem", position: 3, name: "ROAS Calculator", item: "https://www.attribix.app/tools/roas-calculator" },
  ],
};

function parseNum(v: string): number {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

export default function RoasCalculatorPage() {
  const [spend, setSpend] = useState("1000");
  const [revenue, setRevenue] = useState("3500");
  const [margin, setMargin] = useState("40");

  const { roas, breakEvenRoas, profitAfterAds } = useMemo(() => {
    const s = parseNum(spend);
    const r = parseNum(revenue);
    const m = parseNum(margin) / 100;
    const roasVal = s > 0 ? r / s : 0;
    const breakEven = m > 0 ? 1 / m : 0;
    const grossProfit = r * m;
    const profit = grossProfit - s;
    return { roas: roasVal, breakEvenRoas: breakEven, profitAfterAds: profit };
  }, [spend, revenue, margin]);

  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "ROAS Calculator" }]} />
          <Eyebrow>Free tool</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            ROAS calculator
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Calculate return on ad spend, and the break-even ROAS your
            store needs to cover its cost of goods.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-6">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Ad spend ($)</label>
                <input
                  type="number"
                  min="0"
                  inputMode="decimal"
                  value={spend}
                  onChange={(e) => setSpend(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Revenue from ads ($)</label>
                <input
                  type="number"
                  min="0"
                  inputMode="decimal"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Gross margin (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  inputMode="decimal"
                  value={margin}
                  onChange={(e) => setMargin(e.target.value)}
                  className={inputClass}
                />
                <p className="mt-1.5 text-xs text-white/35">
                  Revenue minus cost of goods, as a percentage of revenue.
                  Used only to calculate break-even ROAS below.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 border-t border-white/10 pt-6">
              <div>
                <div className="text-xs uppercase tracking-wide text-white/40">ROAS</div>
                <div className="mt-1 text-2xl font-extrabold text-white">{roas.toFixed(2)}x</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-white/40">Break-even ROAS</div>
                <div className="mt-1 text-2xl font-extrabold text-white">{breakEvenRoas.toFixed(2)}x</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-white/40">Profit after ad spend</div>
                <div className={`mt-1 text-2xl font-extrabold ${profitAfterAds >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                  ${profitAfterAds.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">How this is calculated</h2>
          <p className="text-sm text-white/60 leading-relaxed max-w-2xl">
            ROAS is revenue divided by ad spend. Break-even ROAS is 1 ÷
            gross margin: the ROAS at which ad spend exactly consumes your
            gross profit on the resulting sales, before accounting for any
            other costs (shipping, returns, fixed overhead). This is
            platform-style ROAS math, not blended or true ROAS. See{" "}
            <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how to calculate true ROAS
            </Link>{" "}
            for the difference.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
            <li>
              <Link href="/tools/mer-calculator" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                MER calculator
              </Link>
            </li>
            <li>
              <Link href="/resources/mer-vs-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                MER vs ROAS for Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
