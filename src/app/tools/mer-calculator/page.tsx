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
    { "@type": "ListItem", position: 3, name: "MER Calculator", item: "https://www.attribix.app/tools/mer-calculator" },
  ],
};

function parseNum(v: string): number {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

export default function MerCalculatorPage() {
  const [revenue, setRevenue] = useState("50000");
  const [spend, setSpend] = useState("8000");

  const mer = useMemo(() => {
    const r = parseNum(revenue);
    const s = parseNum(spend);
    return s > 0 ? r / s : 0;
  }, [revenue, spend]);

  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "MER Calculator" }]} />
          <Eyebrow>Free tool</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            MER calculator
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Marketing efficiency ratio: total store revenue divided by
            total marketing spend, across every channel — no attribution
            model involved.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-6">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Total store revenue ($)</label>
                <input
                  type="number"
                  min="0"
                  inputMode="decimal"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className={inputClass}
                />
                <p className="mt-1.5 text-xs text-white/35">For the period you're measuring — not just ad-attributed revenue.</p>
              </div>
              <div>
                <label className={labelClass}>Total marketing spend ($)</label>
                <input
                  type="number"
                  min="0"
                  inputMode="decimal"
                  value={spend}
                  onChange={(e) => setSpend(e.target.value)}
                  className={inputClass}
                />
                <p className="mt-1.5 text-xs text-white/35">Meta, Google, and any other paid channel combined.</p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="text-xs uppercase tracking-wide text-white/40">MER</div>
              <div className="mt-1 text-3xl font-extrabold text-white">{mer.toFixed(2)}x</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">How this is calculated</h2>
          <p className="text-sm text-white/60 leading-relaxed max-w-2xl">
            MER is total revenue ÷ total marketing spend. Unlike ROAS, it
            doesn't rely on any platform crediting specific orders to
            specific ads — which makes it steadier, but less useful for
            comparing individual campaigns. See{" "}
            <Link href="/resources/mer-vs-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              MER vs ROAS
            </Link>{" "}
            for when to use which.
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
              <Link href="/tools/roas-calculator" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                ROAS calculator
              </Link>
            </li>
            <li>
              <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate true ROAS on Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
