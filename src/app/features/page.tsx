"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/* -----------------------------------------------------
   Utilities
----------------------------------------------------- */
const LOCALE = "en-US";

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}
const nf0 = (n: number) =>
  n.toLocaleString(LOCALE, { maximumFractionDigits: 0 });
const nf2 = (n: number) =>
  n.toLocaleString(LOCALE, { maximumFractionDigits: 2 });
const money0 = (n: number) =>
  n.toLocaleString(LOCALE, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
const money2 = (n: number) =>
  n.toLocaleString(LOCALE, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

/* -----------------------------------------------------
   Tiny counter (ints) so numbers feel alive
----------------------------------------------------- */
function CounterInt({
  value,
  duration = 600,
  prefix = "",
}: {
  value: number;
  duration?: number;
  prefix?: string;
}) {
  const [v, setV] = React.useState(value);
  const startRef = React.useRef<number | null>(null);
  const fromRef = React.useRef(value);

  React.useEffect(() => {
    let raf = 0;
    startRef.current = null;
    const from = fromRef.current;
    const to = value;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const p = Math.min(1, (ts - startRef.current) / duration);
      setV(from + (to - from) * ease(p));
      if (p < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = to;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return (
    <>
      {prefix}
      {nf0(Math.round(v))}
    </>
  );
}

/* -----------------------------------------------------
   Visual bars (purely decorative)
   UPDATED: low bars become gray (0-ish %)
----------------------------------------------------- */
function Bars({ mixNew }: { mixNew: number }) {
  const bars = Array.from({ length: 18 }, (_, i) => {
    const t = i / 17;
    const center = 0.5 + (mixNew - 50) / 400;
    const base = 0.3 + 0.5 * Math.exp(-((t - center) ** 2) / 0.05);
    const jitter = (Math.sin(i * 1.6) + 1) * 0.04;
    return Math.min(0.95, base + jitter);
  });
  return (
    <div className="flex items-end gap-2 h-40 w-full">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-3 rounded-t"
          style={{
            height: `${h * 100}%`,
            background:
              h < 0.05
                ? "linear-gradient(180deg, rgba(120,120,130,0.3) 0%, rgba(90,90,100,0.25) 100%)"
                : "linear-gradient(180deg, rgba(59,130,246,0.9) 0%, rgba(34,211,238,0.8) 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.25)",
          }}
        />
      ))}
    </div>
  );
}

/* -----------------------------------------------------
   Attribution model types
----------------------------------------------------- */
type ModelKind = "last" | "first" | "linear" | "decay";
const modelLabel = (m: ModelKind) =>
  ({
    last: "Last Click",
    first: "First Click",
    linear: "Linear",
    decay: "Time-decay",
  }[m]);

/* -----------------------------------------------------
   Platforms + assumptions (editable defaults)
----------------------------------------------------- */
type PlatformKey = "meta" | "google" | "tiktok";
type Platform = {
  key: PlatformKey;
  name: string;
  color: string;
  roasWarm: number;
  roasNew: number;
  cppWarm: number;
  cppNew: number;
};

const DEFAULT_PLATFORMS: Platform[] = [
  {
    key: "meta",
    name: "Meta (FB/IG)",
    color: "bg-gradient-to-r from-[#2563EB] to-[#9333EA]",
    roasWarm: 3.4,
    roasNew: 2.4,
    cppWarm: 17,
    cppNew: 26,
  },
  {
    key: "google",
    name: "Google",
    color: "bg-gradient-to-r from-[#22D3EE] to-[#60A5FA]",
    roasWarm: 3.8,
    roasNew: 2.6,
    cppWarm: 16,
    cppNew: 24,
  },
  {
    key: "tiktok",
    name: "TikTok",
    color: "bg-gradient-to-r from-[#ec4899] to-[#8b5cf6]",
    roasWarm: 2.8,
    roasNew: 2.0,
    cppWarm: 19,
    cppNew: 28,
  },
];

/* -----------------------------------------------------
   Playground math
----------------------------------------------------- */
function usePlayground() {
  const [model, setModel] = React.useState<ModelKind>("linear");
  const [budget, setBudget] = React.useState(20000);
  const [mixNew, setMixNew] = React.useState(35);
  const [alloc, setAlloc] = React.useState<Record<PlatformKey, number>>({
    meta: 50,
    google: 35,
    tiktok: 15,
  });

  const modelNudge = {
    last: { roas: 1.0, cpp: 1.0 },
    first: { roas: 0.98, cpp: 1.02 },
    linear: { roas: 1.02, cpp: 0.98 },
    decay: { roas: 1.01, cpp: 0.99 },
  }[model];

  const setAllocOne = (k: PlatformKey, valPct: number) => {
    const v = Math.max(0, Math.min(100, valPct));
    const others = (Object.keys(alloc) as PlatformKey[]).filter((x) => x !== k);
    const rest = 100 - v;
    const currSumOthers = others.reduce((s, x) => s + alloc[x], 0);
    const next: Record<PlatformKey, number> = { ...alloc, [k]: v };

    others.forEach((x) => {
      const share =
        currSumOthers > 0 ? alloc[x] / currSumOthers : 1 / others.length;
      next[x] = Math.max(0, Math.round(rest * share));
    });

    const drift = 100 - (next.meta + next.google + next.tiktok);
    if (drift !== 0) {
      const tgt =
        [k, ...others].sort((a, b) => next[b] - next[a]).find((x) => x !== k) ||
        others[0];
      next[tgt] = Math.max(0, next[tgt] + drift);
    }
    setAlloc(next);
  };

  const mixWarm = 100 - mixNew;
  const platforms = DEFAULT_PLATFORMS;

  let revenue = 0;
  let purchases = 0;

  platforms.forEach((p) => {
    const spend = budget * (alloc[p.key] / 100);
    const warmSpend = spend * (mixWarm / 100);
    const newSpend = spend * (mixNew / 100);

    const roasWarm = p.roasWarm * modelNudge.roas;
    const roasNew = p.roasNew * modelNudge.roas;
    const cppWarm = p.cppWarm * modelNudge.cpp;
    const cppNew = p.cppNew * modelNudge.cpp;

    revenue += warmSpend * roasWarm + newSpend * roasNew;
    purchases += warmSpend / cppWarm + newSpend / cppNew;
  });

  const blendedROAS = revenue / Math.max(1, budget);
  const blendedCPP = budget / Math.max(1, purchases);

  const baseBudget = 20000;
  const baseMixNew = 35;
  const baseAlloc = {
    meta: 50,
    google: 35,
    tiktok: 15,
  } as Record<PlatformKey, number>;
  function calcBase() {
    let r = 0;
    let pu = 0;
    const mw = 100 - baseMixNew;
    platforms.forEach((p) => {
      const s = baseBudget * (baseAlloc[p.key] / 100);
      const ws = s * (mw / 100);
      const ns = s * (baseMixNew / 100);
      r +=
        ws * (p.roasWarm * modelNudge.roas) +
        ns * (p.roasNew * modelNudge.roas);
      pu +=
        ws / (p.cppWarm * modelNudge.cpp) +
        ns / (p.cppNew * modelNudge.cpp);
    });
    return { roas: r / baseBudget, cpp: baseBudget / pu, rev: r, pur: pu };
  }
  const base = calcBase();

  return {
    model,
    setModel,
    budget,
    setBudget,
    mixNew,
    setMixNew,
    mixWarm,
    alloc,
    setAllocOne,
    platforms,
    blendedROAS,
    blendedCPP,
    revenue,
    purchases,
    base,
  };
}

/* -----------------------------------------------------
   KPI Chip helper
   NEUTRAL: between -0.1% and +0.01% → gray
----------------------------------------------------- */
function DeltaChip({
  value,
  goodIsDown = false,
}: {
  value: number;
  goodIsDown?: boolean;
}) {
  const v = Number.isFinite(value) ? value : 0;

  // Neutral zone: -0.1% … +0.01%
  const NEUTRAL_LOW = -0.1;
  const NEUTRAL_HIGH = 0.01;
  const isNeutral = v >= NEUTRAL_LOW && v <= NEUTRAL_HIGH;

  let cls: string;
  let arrow: string;

  if (isNeutral) {
    // Gray chip for ≈0%
    cls = "bg-white/10 text-white/60 border-white/20";
    arrow = "•";
  } else {
    const goingUp = v > 0;
    // For metrics where down is good (e.g. CPP), invert
    const good = goodIsDown ? !goingUp : goingUp;

    cls = good
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-400/20"
      : "bg-rose-500/15 text-rose-300 border-rose-400/20";
    arrow = goingUp ? "▲" : "▼";
  }

  const displayPct = Math.abs(Math.round(v));

  return (
    <span
      className={cx(
        "ml-2 text-[10px] px-1.5 py-0.5 rounded-full border",
        cls
      )}
    >
      {arrow} {displayPct}% vs base
    </span>
  );
}

/* -----------------------------------------------------
   Playground UI
----------------------------------------------------- */
function Playground() {
  const pg = usePlayground();

  const dROAS = ((pg.blendedROAS / pg.base.roas - 1) * 100) || 0;
  const dCPP = ((pg.blendedCPP / pg.base.cpp - 1) * 100) || 0;
  const dPUR = ((pg.purchases / pg.base.pur - 1) * 100) || 0;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between gap-4">
        <div className="text-lg font-semibold">Model playground</div>
        <div className="text-[11px] text-white/60">
          Answer “what if we…” in seconds.
        </div>
      </div>

      {/* KPIs */}
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-xs text-white/70">ROAS (blended)</div>
          <div className="mt-1 text-2xl font-bold">
            {nf2(pg.blendedROAS)}
            <DeltaChip value={dROAS} />
          </div>
          <div className="text-[11px] text-white/60">
            Dollars back for each $1 spent.
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-xs text-white/70">Cost per Purchase</div>
          <div className="mt-1 text-2xl font-bold">
            {money2(pg.blendedCPP)}
            <DeltaChip value={dCPP} goodIsDown />
          </div>
          <div className="text-[11px] text-white/60">
            Average ad cost to get one purchase.
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-xs text-white/70">Estimated purchases</div>
          <div className="mt-1 text-2xl font-bold">
            <CounterInt value={pg.purchases} />
            <DeltaChip value={dPUR} />
          </div>
          <div className="text-[11px] text-white/60">
            Based on today’s inputs (not a promise).
          </div>
        </div>
      </div>

      {/* Visual + Budget & Mix */}
      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        {/* Chart & mix */}
        <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-xs text-white/70 mb-2">
            What the chart hints at
          </div>
          <Bars mixNew={pg.mixNew} />
          <div className="mt-2 text-[11px] text-white/60">
            Taller bars = more expected impact for this split. Blue leans{" "}
            <span className="font-medium text-white/80">New customers</span>,
            green leans{" "}
            <span className="font-medium text-white/80">
              Returning customers
            </span>
            .
          </div>

          <div className="mt-4">
            <div className="text-xs text-white/70 mb-1">
              Budget mix — how you split spend
            </div>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={pg.mixNew}
              onChange={(e) => pg.setMixNew(Number(e.target.value))}
              className="w-full accent-indigo-400"
              aria-label="Budget mix slider"
            />
            <div className="mt-2 text-[13px]">
              <span className="font-semibold text-emerald-300">
                {pg.mixWarm}% Returning
              </span>{" "}
              •{" "}
              <span className="font-semibold text-cyan-300">
                {pg.mixNew}% New
              </span>
            </div>
            <div className="mt-1 text-[11px] text-white/60">
              <strong>Returning</strong> = people who already know you
              (cheaper, higher ROAS). <strong>New</strong> = people who
              haven’t met you yet (pricier, growth).
            </div>
          </div>
        </div>

        {/* Budget + platform alloc */}
        <div className="lg:col-span-5 grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="text-xs text-white/70 mb-1">
              Monthly ad budget
            </div>
            <input
              type="range"
              min={1000}
              max={250000}
              step={500}
              value={pg.budget}
              onChange={(e) => pg.setBudget(Number(e.target.value))}
              className="w-full accent-cyan-400"
              aria-label="Monthly ad budget"
            />
            <div className="mt-1 flex items-center gap-2">
              <input
                className="w-full rounded-md bg-black/20 border border-white/10 px-2 py-1 text-sm"
                type="number"
                value={pg.budget}
                onChange={(e) =>
                  pg.setBudget(Math.max(0, Number(e.target.value || 0)))
                }
              />
              <span className="text-xs text-white/60">USD</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="text-xs text-white/70">Estimated revenue</div>
            <div className="mt-1 text-2xl font-bold">
              {money0(pg.revenue)}
            </div>
          </div>
        </div>
      </div>

      {/* Platform allocation */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="text-xs text-white/70 mb-2">
          Split across platforms
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {pg.platforms.map((p) => (
            <div
              key={p.key}
              className="rounded-xl border border-white/10 bg-white/5 p-3"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium text-sm">{p.name}</div>
                <span className={cx("h-2 w-2 rounded-full", p.color)} />
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={pg.alloc[p.key]}
                onChange={(e) =>
                  pg.setAllocOne(p.key, Number(e.target.value))
                }
                className="mt-2 w-full accent-cyan-400"
                aria-label={`${p.name} allocation`}
              />
              <div className="mt-1 text-xs text-white/80">
                {pg.alloc[p.key]}% of budget
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] text-white/60">
                <div>
                  <div>Warm ROAS {nf2(p.roasWarm)}</div>
                  <div>Warm CPP {money0(p.cppWarm)}</div>
                </div>
                <div>
                  <div>New ROAS {nf2(p.roasNew)}</div>
                  <div>New CPP {money0(p.cppNew)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-[11px] text-white/60">
          Tip: drag any slider — we’ll keep the others balanced so everything
          still adds up to 100%.
        </div>
      </div>

      {/* Model picker + assumptions explainer */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-xs text-white/70 mb-1">Attribution model</div>
          <div className="flex flex-wrap gap-2">
            {(["last", "first", "linear", "decay"] as ModelKind[]).map(
              (m) => (
                <button
                  key={m}
                  onClick={() => pg.setModel(m)}
                  className={cx(
                    "px-3 py-1.5 rounded-lg border text-sm transition",
                    pg.model === m
                      ? "border-cyan-400/40 bg-cyan-400/15"
                      : "border-white/10 hover:bg-white/5"
                  )}
                  title={modelLabel(m)}
                >
                  {modelLabel(m)}
                </button>
              )
            )}
          </div>
          <p className="mt-2 text-[11px] text-white/60 leading-relaxed">
            Models don&apos;t change the cash in your bank — they change{" "}
            <b>how you tell the story</b> of which touchpoints get credit. Use
            them to pressure-test plans and defend budget decisions.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="text-xs text-white/70 mb-1">
            Assumptions (plain language)
          </div>
          <ul className="text-[12px] text-white/75 space-y-1">
            <li>
              <b>Returning</b> customers (warm): already know you → cheaper,
              higher ROAS and more predictable performance.
            </li>
            <li>
              <b>New</b> customers (prospecting): don&apos;t know you yet →
              pricier, lower ROAS in the short term, but this is where future
              growth comes from.
            </li>
            <li>
              Platform defaults here are demos. In your workspace, Attribix
              uses <b>your real tracking data</b> so these curves reflect your
              brand, not a generic template.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------
   Page shell
----------------------------------------------------- */
export default function FeaturesPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      {/* Nav – aligned with main page menu */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              alt="Attribix"
              src="/assets/logo.svg"
              width={24}
              height={24}
            />
            <span className="font-semibold">Attribix</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/features" className="opacity-100 relative">
              Features
            </Link>
            <Link href="/#how" className="opacity-80 hover:opacity-100">
              How it works
            </Link>
            <Link href="/#integrations" className="opacity-80 hover:opacity-100">
              Integrations
            </Link>
            <Link href="/pricing" className="opacity-80 hover:opacity-100">
              Pricing
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/15"
              >
                Log in
              </Link>
              {/* Book demo glassy style */}
              <Link
                href="/book-demo"
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/20 backdrop-blur transition"
              >
                Book demo
              </Link>
            </div>
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs font-medium text-white/80 hover:bg-white/10"
            onClick={() => setMobileOpen((v) => !v)}
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
                className="block py-1 text-white"
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

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-12">
          <section className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/70 mb-2">
              Attribution Features
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Attribution models, made simple
            </h1>
            <p className="mt-2 text-white/75">
              Switch between <b>Last / First / Linear / Time-decay</b> and
              instantly see how <b>ROAS, cost per purchase and total sales</b>{" "}
              move when you change budget and channel mix. Perfect for answering
              “what if we move 20% from Meta to Google?” without touching a
              single live campaign.
            </p>

            <div className="mt-4 grid gap-3">
              {[
                {
                  t: "Last Click",
                  d: "Protects brand and retargeting — gives most credit to the final click before someone buys.",
                },
                {
                  t: "First Click",
                  d: "Finds true top-of-funnel winners — rewards the first ad that brought the customer in.",
                },
                {
                  t: "Linear",
                  d: "Keeps everyone honest — shares credit across all steps when journeys are long and messy.",
                },
                {
                  t: "Time-decay",
                  d: "Leans into recency — closer touches to purchase get slightly more credit, without ignoring earlier steps.",
                },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="font-semibold">{c.t}</div>
                  <p className="text-sm text-white/70 mt-1">{c.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="lg:col-span-7">
            <Playground />
          </section>
        </div>

        {/* What this unlocks */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-bold mb-2">What this unlocks for you</h3>
          <ul className="list-disc pl-5 space-y-1 text-white/80 text-sm">
            <li>
              See how different models change{" "}
              <b>which channels look “good”</b> — before you make big budget
              decisions.
            </li>
            <li>
              Understand the balance between <b>Returning</b> vs <b>New</b>{" "}
              customers and how that mix impacts ROAS, CPP and total purchases.
            </li>
            <li>
              Walk into budget meetings with <b>screenshots and stories</b>, not
              gut feeling — “Here is what happens if we shift 15% more into
              prospecting.”
            </li>
          </ul>
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
                so you see sales that pixels miss — and your attribution models
                are built on real data, not guesswork.
              </p>
            </div>
            <div className="grid gap-3 text-sm">
              <div className="rounded-xl border border-white/12 bg-black/30 px-4 py-3">
                <div className="font-semibold text-white/90">
                  First-party IDs
                </div>
                <p className="text-white/70 text-[13px]">
                  Durable session &amp; customer IDs that survive ITP,
                  adblockers and cross-device journeys.
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
                  models and reports instantly — similar to what tools like
                  wetracked.io promise, but tightly integrated with your store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg"
              alt="Attribix"
              width={20}
              height={20}
            />
            <span>Attribix</span>
          </Link>
          <div className="flex gap-4">
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
