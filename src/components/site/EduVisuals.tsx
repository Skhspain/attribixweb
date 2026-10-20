"use client";

// Small teaching visuals for the marketing site. Plain HTML/CSS, no chart
// libraries. Every number here is a fictional example and is labelled so.

import Image from "next/image";
import React from "react";
import { cx } from "./ui";

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function ExampleNote({ children = "Example numbers, not a real customer result." }: { children?: React.ReactNode }) {
  return <p className="mt-3 text-xs text-white/45">{children}</p>;
}

function Logo({ src, size = 16 }: { src: string; size?: number }) {
  return <Image src={src} alt="" width={size} height={size} className="object-contain" style={{ width: size, height: size }} />;
}

function Chip({ children, tone = "plain" }: { children: React.ReactNode; tone?: "plain" | "good" | "warn" | "muted" }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium",
        tone === "plain" && "border-white/15 bg-white/[0.06] text-white/85",
        tone === "good" && "border-emerald-300/30 bg-emerald-400/10 text-emerald-200",
        tone === "warn" && "border-amber-300/30 bg-amber-400/10 text-amber-100",
        tone === "muted" && "border-dashed border-white/20 bg-transparent text-white/40"
      )}
    >
      {children}
    </span>
  );
}

function Arrow({ broken = false }: { broken?: boolean }) {
  return (
    <span aria-hidden className={cx("text-sm", broken ? "text-amber-300/70" : "text-white/35")}>
      {broken ? "⋯✕⋯" : "→"}
    </span>
  );
}

/* ---------- Problem card visuals ---------- */

export function DoubleCreditVisual() {
  return (
    <div className="space-y-2" aria-hidden>
      <div className="flex items-center justify-between gap-2">
        <Chip><Logo src="/assets/logos/meta.svg" />Facebook: 1 sale, $100</Chip>
        <Chip><Logo src="/assets/logos/google.svg" />Google: 1 sale, $100</Chip>
      </div>
      <div className="flex justify-center">
        <Chip tone="good"><Logo src="/assets/logos/shopify.svg" />Your store: 1 order, $100</Chip>
      </div>
    </div>
  );
}

export function MissingSignalVisual() {
  return (
    <div className="flex flex-wrap items-center gap-2" aria-hidden>
      <Chip>Clicks ad</Chip>
      <Arrow />
      <Chip>Buys</Chip>
      <Arrow broken />
      <Chip tone="muted">Ad platform never hears about it</Chip>
    </div>
  );
}

export function TwoCampaignsVisual() {
  return (
    <div className="grid grid-cols-2 gap-2" aria-hidden>
      {[
        { n: "Campaign A", s: "$100 spent", r: "Sales: ?" },
        { n: "Campaign B", s: "$100 spent", r: "Sales: ?" },
      ].map((c) => (
        <div key={c.n} className="rounded-lg border border-white/15 bg-white/[0.06] p-2.5 text-xs">
          <div className="font-semibold text-white/90">{c.n}</div>
          <div className="mt-1 text-white/60">{c.s}</div>
          <div className="text-amber-200/80">{c.r}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Shopify -> Attribix -> Meta / Google ---------- */

export function ConnectFlow({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cx("flex items-center justify-center gap-2 sm:gap-3", compact ? "flex-wrap" : "flex-col sm:flex-row")}
      role="img"
      aria-label="Your Shopify store connects to Attribix, which connects to Facebook and Google"
    >
      <Chip><Logo src="/assets/logos/shopify.svg" />Shopify</Chip>
      <span aria-hidden className="text-white/35">{compact ? "→" : <span className="rotate-90 inline-block sm:rotate-0">→</span>}</span>
      <Chip tone="good"><Logo src="/assets/logo.svg" />Attribix</Chip>
      <span aria-hidden className="text-white/35">{compact ? "→" : <span className="rotate-90 inline-block sm:rotate-0">→</span>}</span>
      <span className="flex flex-col gap-1.5">
        <Chip><Logo src="/assets/logos/meta.svg" />Facebook and Instagram</Chip>
        <Chip><Logo src="/assets/logos/google.svg" />Google</Chip>
      </span>
    </div>
  );
}

/* ---------- Without / with Attribix ---------- */

export function TrackingCompare() {
  return (
    <figure className="m-0">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm font-semibold text-white/80">Without Attribix</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Chip><Logo src="/assets/logos/shopify.svg" />Someone buys</Chip>
            <Arrow broken />
            <Chip tone="warn">Browser message blocked</Chip>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Your store tells Facebook and Google about the sale from the shopper&apos;s browser. An ad blocker can stop
            that message, so the sale may never show up in your ad reports.
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-300/25 bg-emerald-400/[0.04] p-5">
          <p className="text-sm font-semibold text-emerald-200">With Attribix</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Chip><Logo src="/assets/logos/shopify.svg" />Someone buys</Chip>
            <Arrow />
            <Chip tone="good"><Logo src="/assets/logo.svg" />Also sent from a server</Chip>
            <Arrow />
            <Chip>Facebook and Google</Chip>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Attribix also sends the sale from a server, where ad blockers can&apos;t stop it. Both messages carry the same
            ID, so the sale is counted once, not twice.
          </p>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-white/45">
        A simplified picture. Attribix only sends what your visitors&apos; cookie choices allow, and some sales can still
        be missed.
      </figcaption>
    </figure>
  );
}

/* ---------- $100 spent -> $400 in sales ---------- */

export function MoneyExample() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <dl className="grid grid-cols-3 gap-3 text-center">
        <div>
          <dt className="text-xs text-white/55">You spend on ads</dt>
          <dd className="mt-1 text-2xl font-bold text-white">$100</dd>
        </div>
        <div>
          <dt className="text-xs text-white/55">Sales linked to ads</dt>
          <dd className="mt-1 text-2xl font-bold text-white">$400</dd>
        </div>
        <div>
          <dt className="text-xs text-white/55">Back for every $1</dt>
          <dd className="mt-1 text-2xl font-bold text-cyan-300">$4</dd>
        </div>
      </dl>
      <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/70">
        <span className="font-semibold text-white">This is sales, not profit.</span> You still pay for products,
        shipping and other costs, so $400 in sales does not mean $300 profit. Marketers call the &quot;$4 back for every
        $1&quot; number ROAS (return on ad spend).
      </p>
      <ExampleNote />
    </div>
  );
}

/* ---------- Campaign A vs B ---------- */

export function CampaignCompare() {
  const rows = [
    { n: "Campaign A", spend: 100, sales: 400 },
    { n: "Campaign B", spend: 100, sales: 80 },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        {rows.map((r) => {
          const back = r.sales / r.spend;
          const good = back >= 1;
          return (
            <div key={r.n} className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm font-semibold text-white">{r.n}</p>
              <p className="mt-2 text-sm text-white/65">Spent {usd(r.spend)}</p>
              <p className="text-sm text-white/65">Sales linked to it {usd(r.sales)}</p>
              <p className={cx("mt-2 text-sm font-semibold", good ? "text-emerald-300" : "text-amber-200")}>
                {usd(back)} back for every $1
              </p>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/70">
        Campaign A seems to bring back more sales for the same cost. That does not automatically mean it made more
        profit. Product costs, and how credit for each sale is given, still matter.
      </p>
      <ExampleNote />
    </div>
  );
}

/* ---------- One customer, two platforms, one order ---------- */

type Rule = "last" | "first" | "split";
const RULES: { id: Rule; label: string; explain: string; credit: { ig: number; g: number } }[] = [
  { id: "last", label: "Last click", explain: "The last ad clicked before buying gets all the credit.", credit: { ig: 0, g: 100 } },
  { id: "first", label: "First click", explain: "The first ad that brought the customer gets all the credit.", credit: { ig: 100, g: 0 } },
  { id: "split", label: "Equal split", explain: "Each ad the customer clicked gets an equal share.", credit: { ig: 50, g: 50 } },
];

export function CreditExample() {
  const [rule, setRule] = React.useState<Rule>("split");
  const r = RULES.find((x) => x.id === rule)!;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
      <ol className="flex flex-wrap items-center gap-2" aria-label="Customer journey">
        <li><Chip><Logo src="/assets/logos/meta.svg" />Sees your Instagram ad</Chip></li>
        <li aria-hidden><Arrow /></li>
        <li><Chip><Logo src="/assets/logos/google.svg" />Searches on Google 2 days later</Chip></li>
        <li aria-hidden><Arrow /></li>
        <li><Chip tone="good"><Logo src="/assets/logos/shopify.svg" />Buys for $100</Chip></li>
      </ol>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
          <p className="text-xs text-white/55">Facebook reports</p>
          <p className="mt-1 text-xl font-bold text-white">$100</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-center">
          <p className="text-xs text-white/55">Google reports</p>
          <p className="mt-1 text-xl font-bold text-white">$100</p>
        </div>
        <div className="rounded-xl border border-emerald-300/25 bg-emerald-400/[0.05] p-3 text-center">
          <p className="text-xs text-emerald-200/80">Your store got</p>
          <p className="mt-1 text-xl font-bold text-emerald-200">$100</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-white/70">
        Add the two reports together and it looks like $200. But only one $100 order happened.
      </p>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p id="credit-rule-label" className="text-sm font-semibold text-white">
          How should the $100 be shared? Pick a rule:
        </p>
        <div role="radiogroup" aria-labelledby="credit-rule-label" className="mt-3 flex flex-wrap gap-2">
          {RULES.map((x) => (
            <button
              key={x.id}
              type="button"
              role="radio"
              aria-checked={rule === x.id}
              onClick={() => setRule(x.id)}
              className={cx(
                "min-h-[40px] rounded-full border px-4 text-sm font-semibold transition",
                rule === x.id ? "border-white bg-white text-gray-900" : "border-white/15 bg-white/5 text-white/75 hover:bg-white/10"
              )}
            >
              {x.label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-white/65">{r.explain}</p>
        <div className="mt-4 space-y-2" aria-live="polite">
          {[
            { k: "Instagram ad", v: r.credit.ig },
            { k: "Google search", v: r.credit.g },
          ].map((x) => (
            <div key={x.k} className="grid grid-cols-[110px_1fr_48px] items-center gap-3 text-sm">
              <span className="text-white/75">{x.k}</span>
              <span className="h-2.5 rounded-full bg-white/10">
                <span
                  className="block h-2.5 rounded-full bg-cyan-300 transition-[width] duration-300"
                  style={{ width: `${x.v}%` }}
                />
              </span>
              <span className="text-right font-semibold tabular-nums text-white">${x.v}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/50">
          The total is always $100. These rules are called attribution models. Example only.
        </p>
      </div>
    </div>
  );
}
