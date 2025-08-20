// src/app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

/* ---------- Types ---------- */
type KPIProps = { label: string; children: React.ReactNode };
type Bubble = {
  id: number;
  barIndex: number;          // index in the window (0..BAR_COUNT-1)
  plat: "Meta" | "Google" | "TikTok";
  cls: string;
  label: string;
  lifeMs: number;
  lane: number;              // 0..LANES-1 for stacking
};

/* ---------- Page (default export) ---------- */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      {/* NAV */}
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
            <span className="font-semibold">Attribix</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="opacity-80 hover:opacity-100">Features</a>
            <a href="#how" className="opacity-80 hover:opacity-100">How it works</a>
            <a href="#integrations" className="opacity-80 hover:opacity-100">Integrations</a>
            <Link href="/faq" className="opacity-80 hover:opacity-100">FAQ</Link>
            <Link href="/login" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/15">Log in</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              New — Ads Review & Attribution
            </p>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.05]">
              Smarter{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                Attribution
              </span>
              .
              <br className="hidden md:block" />
              Bigger{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#22D3EE] to-[#60A5FA]">
                Impact
              </span>
              .
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl">
              See which channels actually drive revenue. Connect Shopify or WooCommerce,
              pipe in Meta/Google/TikTok, and make decisions with real, trustworthy data.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/login" className="rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold hover:opacity-90">
                Open Dashboard
              </Link>
              <a href="#features" className="rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10">
                Explore features
              </a>
            </div>

            <p className="mt-4 text-xs text-white/60">Works with Shopify & WordPress (WooCommerce). No heavy setup.</p>
          </div>

          {/* Animated preview card */}
          <div className="relative">
            <div className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full bg-gradient-to-tr from-[#2563EB]/40 to-[#06B6D4]/30 blur-3xl animate-spin-slow" />
            <div className="pointer-events-none absolute -bottom-12 -right-6 h-64 w-64 rounded-full bg-gradient-to-tr from-[#7C3AED]/30 to-[#22D3EE]/30 blur-3xl animate-spin-slower" />
            <div className="absolute -inset-4 rounded-3xl bg-cyan-400/20 blur-2xl animate-pulse-soft" />
            <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm p-3 shadow-2xl overflow-visible">
              <TrendingPreviewCard />
            </div>
          </div>
        </div>

        {/* Scoped styles */}
        <style jsx>{`
          @keyframes pulseSoft { 0%,100% { opacity: .35; } 50% { opacity: .6; } }
          @keyframes spinSlow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
          .animate-pulse-soft { animation: pulseSoft 4s ease-in-out infinite; }
          .animate-spin-slow { animation: spinSlow 24s linear infinite; }
          .animate-spin-slower { animation: spinSlow 42s linear infinite; }

          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .shimmer {
            background-image: linear-gradient(
              90deg,
              rgba(255,255,255,0.06) 25%,
              rgba(255,255,255,0.14) 37%,
              rgba(255,255,255,0.06) 63%
            );
            background-size: 200% 100%;
            animation: shimmer 2.2s linear infinite;
          }

          @keyframes bubbleFloat {
            0%   { transform: translate(-50%, 12px); opacity: 0; }
            15%  { opacity: 1; }
            100% { transform: translate(-50%, -160px); opacity: 0; }
          }
          .bubble { animation: bubbleFloat var(--life, 5600ms) cubic-bezier(.22,.61,.36,1) forwards; }

          @media (prefers-reduced-motion: reduce) {
            .animate-pulse-soft, .animate-spin-slow, .animate-spin-slower, .shimmer, .bubble { animation: none !important; }
          }
        `}</style>
      </section>
    </div>
  );
}

/* ---------- Smooth rolling window + left→right reveal + non-overlapping bubbles ---------- */
function TrendingPreviewCard() {
  const BAR_COUNT = 36;

  // spacing / density
  const LANES = 4;
  const LANE_SPACING = 22;
  const MAX_BUBBLES = 8;

  // bar clamp in %
  const BAND_MIN = 22;
  const BAND_MAX = 76;

  // animation timing
  const STEP_MS = 260;                // stream cadence
  const TRANSITION_MS = 420;          // height tween
  const SMOOTH = 0.35;                // lerp factor

  // KPIs
  const [roas, setRoas] = React.useState(3.2);
  const [purch, setPurch] = React.useState(48);
  const [cpp, setCpp] = React.useState(21.4);
  const [sig, setSig] = React.useState([74, 76, 78, 80, 82, 83, 84]);
  const [match, setMatch] = React.useState([66, 68, 70, 71, 72, 74, 76]);
  const [dedup, setDedup] = React.useState([84, 85, 86, 87, 88, 89, 90]);

  // bars
  const [heights, setHeights] = React.useState<number[]>(
    Array.from({ length: BAR_COUNT }, (_, i) => 12 + i * 0.3)
  );

  // initial LEFT→RIGHT reveal
  const [reveal, setReveal] = React.useState(1);
  const fullyRevealed = reveal >= BAR_COUNT;

  // bubbles
  const [bubbles, setBubbles] = React.useState<Bubble[]>([]);
  const nextBubbleId = React.useRef(0);
  const platforms = React.useMemo(
    () =>
      [
        { name: "Meta",   cls: "bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white/90 border-white/10" },
        { name: "Google", cls: "bg-gradient-to-r from-[#22D3EE] to-[#60A5FA] text-white/90 border-white/10" },
        { name: "TikTok", cls: "bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] text-white/90 border-white/10" },
      ] as const,
    []
  );

  // gentle up-trend generator
  const lastBaseline = React.useRef(30 + Math.random() * 6);
  const nextTarget = React.useCallback(() => {
    lastBaseline.current += 0.18 + Math.random() * 0.16; // soft slope
    const jitter = Math.random() * 1.6 - 0.8;            // light jitter
    const v = lastBaseline.current + jitter;
    return Math.max(BAND_MIN, Math.min(BAND_MAX, v));
  }, []);

  // helper: lerp
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  // left→right reveal (one time)
  React.useEffect(() => {
    if (fullyRevealed) return;
    const r = setInterval(() => setReveal((v) => Math.min(BAR_COUNT, v + 1)), 240);
    return () => clearInterval(r);
  }, [fullyRevealed]);

  // stream (rolling window)
  React.useEffect(() => {
    const t = setInterval(() => {
      setHeights((prev) => {
        const target = nextTarget();
        const eased = lerp(prev[prev.length - 1], target, SMOOTH);
        return [...prev.slice(1), eased];
      });

      // spawn above newest revealed bar
      if (Math.random() < 0.38) {
        setBubbles((prev) => {
          if (prev.length >= MAX_BUBBLES) return prev;

          const spawnIndex = fullyRevealed ? BAR_COUNT - 1 : Math.max(0, reveal - 1);

          // lanes used at spawn position
          const used = new Set(prev.filter(p => p.barIndex === spawnIndex).map(p => p.lane));
          let lane = 0;
          while (used.has(lane) && lane < LANES) lane++;
          if (lane >= LANES) return prev; // all lanes busy

          const plat = platforms[Math.floor(Math.random() * platforms.length)];
          const life = 4200 + Math.random() * 900;

          const id = nextBubbleId.current++;
          // auto-remove after life
          setTimeout(() => {
            setBubbles((curr) => curr.filter((x) => x.id !== id));
          }, life);

          return [
            ...prev,
            {
              id,
              barIndex: spawnIndex,
              plat: plat.name as Bubble["plat"],
              cls: plat.cls,
              label: `+${Math.random() < 0.8 ? 1 : 2} Purchase`,
              lifeMs: life,
              lane,
            },
          ];
        });
      }
    }, STEP_MS);
    return () => clearInterval(t);
  }, [platforms, nextTarget, reveal, fullyRevealed]);

  // KPIs drift
  React.useEffect(() => {
    const k = setInterval(() => {
      setRoas((r) => Math.min(6.6, r + (0.016 + Math.random() * 0.028)));
      setPurch((p) => p + (Math.random() < 0.55 ? 1 : 0));
      setCpp((c) => Math.max(12, c - (0.016 + Math.random() * 0.03)));
      setSig((s) => { const n = s.slice(1); n.push(Math.min(96, s[s.length - 1] + (Math.random() < 0.65 ? 1 : 0))); return n; });
      setMatch((s) => { const n = s.slice(1); n.push(Math.min(93, s[s.length - 1] + (Math.random() < 0.6 ? 1 : 0))); return n; });
      setDedup((s) => { const n = s.slice(1); n.push(Math.min(98, s[s.length - 1] + (Math.random() < 0.6 ? 1 : 0))); return n; });
    }, 1400);
    return () => clearInterval(k);
  }, []);

  return (
    <div className="relative overflow-visible">
      {/* Header stub */}
      <div className="h-6 w-40 rounded bg-white/10" />

      {/* KPIs */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <KPI label="ROAS">{roas.toFixed(2)}</KPI>
        <KPI label="Purchases">{purch}</KPI>
        <KPI label="Cost / Purchase">${cpp.toFixed(2)}</KPI>
      </div>

      {/* Mini KPIs */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        <MiniKPI title="Signal Quality" values={sig} suffix="%" />
        <MiniKPI title="Match Rate" values={match} suffix="%" />
        <MiniKPI title="Event Dedup" values={dedup} suffix="%" />
      </div>

      {/* Tracking pill */}
      <div className="mt-3">
        <TrackingHealth />
      </div>

      {/* Bars + bubbles */}
      <div className="relative mt-4 overflow-visible">
        <div className="h-44 rounded-xl border border-white/10 bg-white/5 px-3 pt-3 pb-2 relative overflow-hidden">
          {/* bars */}
          <div
            className="h-full grid items-end"
            style={{ gridTemplateColumns: `repeat(${BAR_COUNT}, minmax(0,1fr))`, columnGap: "6px" } as React.CSSProperties}
          >
            {heights.map((h, i) => {
              const revealed = i < reveal;
              return (
                <div
                  key={i}
                  className="rounded-t"
                  style={{
                    height: `${revealed ? h : 4}%`,
                    transition: `height ${TRANSITION_MS}ms cubic-bezier(.22,.7,.2,1)`,
                    willChange: "height",
                    // tiered color when revealed; muted stub when not yet revealed
                    background: revealed
                      ? `
                        linear-gradient(
                          to top,
                          rgba(124,58,237,.55) 0%,   rgba(124,58,237,.55) 25%,
                          rgba(59,130,246,.55) 25%,  rgba(59,130,246,.55) 60%,
                          rgba(16,185,129,.70) 60%,  rgba(16,185,129,.70) 100%
                        )
                      `
                      : "linear-gradient(to top, rgba(255,255,255,.12), rgba(255,255,255,.06))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,.28)",
                    opacity: revealed ? 1 : 0.7,
                  } as React.CSSProperties}
                />
              );
            })}
          </div>

          {/* bubbles (float up over newest revealed bar) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0">
            {bubbles.map((b) => {
              const leftPct = ((b.barIndex + 0.5) / BAR_COUNT) * 100;
              const h = heights[b.barIndex] ?? 0;
              const extra = 12 + b.lane * LANE_SPACING; // lane spacing
              const bottom = Math.min(92, h) + extra;   // keep inside card
              return (
                <div
                  key={b.id}
                  className={`absolute bubble border px-2 py-1 rounded-xl text-[10px] shadow-lg backdrop-blur-[2px] ${b.cls}`}
                  style={
                    {
                      left: `${leftPct}%`,
                      bottom: `calc(${bottom}% - ${b.lane * 0}px)`,
                      transform: "translateX(-50%)",
                      whiteSpace: "nowrap",
                      ["--life" as any]: `${b.lifeMs}ms`,
                    } as React.CSSProperties
                  }
                >
                  {b.plat}: {b.label}
                </div>
              );
            })}
          </div>

          {/* shimmer stays clipped by overflow-hidden */}
          <div className="pointer-events-none absolute inset-0 shimmer" />
        </div>

        <div className="mt-2 text-[10px] text-white/50">
          Live preview • Conversions increasing • Tracking improving
        </div>
      </div>
    </div>
  );
}

/* ---------- Helpers ---------- */
function KPI({ label, children }: KPIProps) {
  return (
    <div className="rounded-xl border border-white/10 p-3">
      <div className="text-[10px] uppercase tracking-wide text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white/90">{children}</div>
    </div>
  );
}

function MiniKPI({ title, values, suffix = "" }: { title: string; values: number[]; suffix?: string }) {
  const last = values[values.length - 1];
  const first = values[0];
  const delta = last - first;
  const up = delta >= 0;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-wide text-white/60">{title}</div>
        <div className={`text-[10px] ${up ? "text-emerald-300" : "text-rose-300"}`}>
          {up ? "▲" : "▼"} {Math.abs(delta).toFixed(0)}
          {suffix}
        </div>
      </div>
      <div className="mt-1 text-sm font-semibold text-white/90">
        {last.toFixed(0)}
        {suffix}
      </div>
      <div className="h-8 mt-1 relative">
        <TinySpark values={values} />
      </div>
    </div>
  );
}

function TinySpark({ values }: { values: number[] }) {
  const w = 120, h = 32;
  const min = Math.min(...values), max = Math.max(...values);
  const rng = Math.max(1, max - min);
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / rng) * h;
    return `${x},${y}`;
  });
  const d = `M${pts[0]} L${pts.slice(1).join(" ")}`;

  const [len, setLen] = React.useState(0);
  const ref = React.useRef<SVGPathElement | null>(null);
  React.useEffect(() => { if (ref.current) setLen(ref.current.getTotalLength()); }, [d]);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="absolute inset-0">
      <path
        ref={ref}
        d={d}
        fill="none"
        stroke="rgba(255,255,255,.65)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ strokeDasharray: len, strokeDashoffset: len, animation: "dash 900ms ease-out forwards" } as React.CSSProperties}
      />
      <style jsx>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
    </svg>
  );
}

function TrackingHealth() {
  return (
    <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-emerald-300">
        <path fill="currentColor" d="M12 2l7 3v6c0 5-3.5 9.4-7 11c-3.5-1.6-7-6-7-11V5l7-3z" opacity=".35" />
        <path fill="currentColor" d="M10.5 12.8l-1.9-1.9l-1.1 1.1l3 3l6-6l-1.1-1.1z" />
      </svg>
      <div className="text-xs">
        <div className="font-medium">Tracking Health</div>
        <div className="text-white/70">+18% week over week</div>
      </div>
      <div className="flex items-end gap-1 ml-2">
        <div className="w-1.5 bg-emerald-300/40 rounded-sm animate-h1" style={{ height: 8 }} />
        <div className="w-1.5 bg-emerald-300/60 rounded-sm animate-h2" style={{ height: 12 }} />
        <div className="w-1.5 bg-emerald-300 rounded-sm animate-h3" style={{ height: 18 }} />
      </div>
      <style jsx>{`
        @keyframes h1 { 0%,100%{transform:scaleY(.7)} 50%{transform:scaleY(1)} }
        @keyframes h2 { 0%,100%{transform:scaleY(.8)} 50%{transform:scaleY(1.05)} }
        @keyframes h3 { 0%,100%{transform:scaleY(.85)} 50%{transform:scaleY(1.1)} }
        .animate-h1 { transform-origin: bottom; animation: h1 2.8s ease-in-out infinite; }
        .animate-h2 { transform-origin: bottom; animation: h2 2.8s ease-in-out infinite .12s; }
        .animate-h3 { transform-origin: bottom; animation: h3 2.8s ease-in-out infinite .24s; }
      `}</style>
    </div>
  );
}
