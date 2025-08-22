// src/app/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/* -----------------------------------------------------
   Utilities
----------------------------------------------------- */
function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/* -----------------------------------------------------
   Animated number (re-animates whenever key changes)
----------------------------------------------------- */
function Counter({
  from = 0,
  to,
  duration = 1500,
  decimals = 0,
  restartKey = 0,
  prefix = "",
  suffix = "",
}: {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  restartKey?: number; // change to restart the animation
  prefix?: string;
  suffix?: string;
}) {
  const [val, setVal] = React.useState(from);

  React.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const d = Math.max(300, duration);

    const tick = () => {
      const t = (performance.now() - start) / d;
      const eased = t < 1 ? 1 - Math.pow(1 - t, 3) : 1;
      setVal(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [from, to, duration, restartKey]);

  const str = val.toFixed(decimals);
  return (
    <>
      {prefix}
      {str}
      {suffix}
    </>
  );
}

/* -----------------------------------------------------
   KPI Card
----------------------------------------------------- */
function KPICard({
  label,
  delta,
  trend = "up",
  children,
}: {
  label: string;
  delta?: number;
  trend?: "up" | "down";
  children: React.ReactNode;
}) {
  // Force green when the metric going DOWN is good (Cost ↓)
  const isCost = label.toLowerCase().includes("cost");
  const green = "bg-emerald-500/15 text-emerald-300 border-emerald-400/20";
  const red = "bg-rose-500/15 text-rose-300 border-rose-400/20";
  const chip = isCost ? green : trend === "down" ? red : green;

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center gap-2">
        <div className="text-xs text-white/70">{label}</div>
        {typeof delta === "number" && (
          <span
            className={cx(
              "text-[10px] px-1.5 py-0.5 rounded-full border",
              chip
            )}
          >
            {delta > 0 ? "▲" : "▼"} {Math.abs(delta)}%
          </span>
        )}
      </div>
      <div className="mt-1 text-xl font-semibold">{children}</div>
    </div>
  );
}

/* -----------------------------------------------------
   Hero Attribution Chart (looping) — SSR-safe
----------------------------------------------------- */
type Bubble = {
  id: number;
  bar: number;
  label: string;
  cls: string;
  lane: number;
  life: number;
};

function HeroAttributionChart() {
  const BAR_COUNT = 36;

  const [heights, setHeights] = React.useState<number[]>(
    Array.from({ length: BAR_COUNT }, () => 0)
  );
  const [revealed, setRevealed] = React.useState(0);
  const [bubbles, setBubbles] = React.useState<Bubble[]>([]);
  const [loopKey, setLoopKey] = React.useState(0); // restart counters each loop
  const nextId = React.useRef(0);

  const PLATFORMS = [
    {
      name: "Meta",
      cls: "bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white/90 border-white/10",
    },
    {
      name: "Google",
      cls: "bg-gradient-to-r from-[#22D3EE] to-[#60A5FA] text-white/90 border-white/10",
    },
    {
      name: "TikTok",
      cls: "bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] text-white/90 border-white/10",
    },
  ] as const;

  const LANES = 4;
  const MAX_BUBBLES = 6;

  React.useEffect(() => {
    let cancelled = false;

    const runCycle = () => {
      if (cancelled) return;

      // Build smooth, steadily rising targets
      const targets: number[] = [];
      let v = 22 + Math.random() * 5;
      for (let i = 0; i < BAR_COUNT; i++) {
        v += 0.9 + Math.random() * 0.9;
        targets.push(Math.max(16, Math.min(82, v + Math.random() * 3 - 1.5)));
      }

      setHeights(Array.from({ length: BAR_COUNT }, () => 0));
      setRevealed(0);
      setBubbles([]);
      setLoopKey((k) => k + 1); // restart counters

      const STEP_MS = 720; // reveal next bar every 0.72s
      const BAR_EASE_MS = 920; // animate each height change

      // safe to touch window inside effects
      if (typeof window !== "undefined") {
        (window as any).__BAR_EASE_MS__ = BAR_EASE_MS;
      }

      const lift = (i: number) => {
        if (cancelled) return;
        if (i >= BAR_COUNT) {
          // loop again after a pause
          setTimeout(runCycle, 2000);
          return;
        }

        // bar height
        setHeights((prev) => {
          const copy = prev.slice();
          copy[i] = targets[i];
          return copy;
        });
        setRevealed(i + 1);

        // attribution bubble
        const plat = PLATFORMS[i % PLATFORMS.length];
        const id = nextId.current++;
        const lane = i % LANES;
        const life = 2600 + Math.random() * 1200;

        setBubbles((prev) =>
          [
            ...prev,
            {
              id,
              bar: i,
              label: `${plat.name}: +${Math.random() < 0.75 ? 1 : 2} Purchase`,
              cls: plat.cls,
              lane,
              life,
            },
          ].slice(-MAX_BUBBLES)
        );
        setTimeout(() => {
          setBubbles((prev) => prev.filter((b) => b.id !== id));
        }, life);

        setTimeout(() => lift(i + 1), STEP_MS);
      };

      lift(0);
    };

    runCycle();
    return () => {
      cancelled = true;
    };
  }, []);

  // KPI animation config (re-animate each loop)
  const totalRevealMs = 720 * BAR_COUNT;
  const roasFrom = 3.2,
    roasTo = 11.0,
    roasDelta = +244;
  const purFrom = 180,
    purTo = 260,
    purDelta = +22;
  const cppFrom = 19.0,
    cppTo = 3.0,
    cppDelta = -84;

  // ✅ SSR-safe read: don't touch window in render unless it exists
  const barEase =
    typeof window !== "undefined" && (window as any).__BAR_EASE_MS__
      ? (window as any).__BAR_EASE_MS__
      : 900;

  return (
    <div className="relative overflow-visible">
      {/* top "search" pill */}
      <div className="h-6 w-40 rounded bg-white/10" />

      {/* KPIs */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <KPICard label="ROAS" delta={roasDelta} trend="up">
          <Counter
            from={roasFrom}
            to={roasTo}
            duration={totalRevealMs}
            decimals={2}
            restartKey={loopKey}
          />
        </KPICard>
        <KPICard label="Purchases" delta={purDelta} trend="up">
          <Counter
            from={purFrom}
            to={purTo}
            duration={totalRevealMs}
            restartKey={loopKey}
          />
        </KPICard>
        <KPICard label="Cost / Purchase" delta={cppDelta} trend="down">
          <Counter
            prefix="$"
            from={cppFrom}
            to={cppTo}
            duration={totalRevealMs}
            decimals={2}
            restartKey={loopKey}
          />
        </KPICard>
      </div>

      {/* Bars + bubbles */}
      <div className="relative mt-4 overflow-visible">
        <div
          className="h-44 rounded-xl border border-white/10 bg-white/5 px-3 pt-3 pb-2 relative overflow-visible grid items-end"
          style={{
            gridTemplateColumns: `repeat(${BAR_COUNT}, minmax(0,1fr))`,
            columnGap: "6px",
          }}
        >
          {heights.map((h, i) => (
            <div
              key={i}
              className="rounded-t"
              style={{
                height: `${i < revealed ? h : 4}%`,
                transition: `height ${barEase}ms cubic-bezier(.22,.7,.2,1)`,
                // subtle 2-color increase marker in the middle
                background:
                  "linear-gradient(to top, rgba(124,58,237,.55) 0%, rgba(59,130,246,.55) 50%, rgba(6,182,212,.85) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.28)",
                opacity: i < revealed ? 1 : 0.7,
              }}
            />
          ))}

          {/* floating purchases */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 overflow-visible">
            {bubbles.map((b) => {
              const leftPct = Math.max(
                5,
                Math.min(95, ((b.bar + 0.5) / BAR_COUNT) * 100)
              );
              const barH = heights[b.bar] ?? 0;
              const bottom = Math.min(90, barH + 12 + b.lane * 22);
              return (
                <div
                  key={b.id}
                  className={`absolute border px-2 py-1 rounded-xl text-[10px] shadow-lg backdrop-blur-[2px] ${b.cls}`}
                  style={{
                    left: `${leftPct}%`,
                    bottom: `calc(${bottom}%)`,
                    transform: "translateX(-50%)",
                    whiteSpace: "nowrap",
                    animation: `bubbleFade ${b.life}ms ease-in-out forwards`,
                  }}
                >
                  {b.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-2 text-[10px] text-white/50">
          Live preview • Conversions increasing • Tracking improving
        </div>
      </div>

      {/* local CSS for bubble fade */}
      <style jsx>{`
        @keyframes bubbleFade {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(6px) scale(0.98);
          }
          10% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-6px) scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}

/* -----------------------------------------------------
   PAGE
----------------------------------------------------- */
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
            {/* 🔗 changed: now navigate to the new pages */}
            <Link href="/features" className="opacity-80 hover:opacity-100">
              Features
            </Link>
            <a href="#how" className="opacity-80 hover:opacity-100">
              How it works
            </a>
            <a href="#integrations" className="opacity-80 hover:opacity-100">
              Integrations
            </a>
            <a href="#pricing" className="opacity-80 hover:opacity-100">
              Pricing
            </a>
            <a href="#contact" className="opacity-80 hover:opacity-100">
              Contact
            </a>
            <Link
              href="/login"
              className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/15"
            >
              Log in
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              New — Ads Review & Attribution
            </p>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.05]">
              Smarter{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                Attribution
              </span>
              .<br className="hidden md:block" />
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
              <Link
                href="/login"
                className="rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold hover:opacity-90"
              >
                Open Dashboard
              </Link>
              {/* 🔗 changed: hero button now goes to the new /features page */}
              <Link
                href="/features"
                className="rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10"
              >
                Explore features
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/60">
              Works with Shopify & WordPress (WooCommerce). No heavy setup.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-cyan-400/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm p-4 shadow-2xl">
              <HeroAttributionChart />
            </div>
          </div>
        </div>
      </section>

      {/* the rest of the page (logo cloud, sections, footer) stays unchanged */}
      {/* LOGO CLOUD */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <p className="text-center text-sm text-white/60 mb-6">
          Trusted by growth‑minded brands
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-80">
          {["Acme", "North", "Apex", "Tempo", "Nova", "Glow"].map((n) => (
            <div
              key={n}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-3"
            >
              <span className="text-white/70 text-sm">{n}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES (kept for SEO/scroll, but main Features entry now goes to /features) */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Why teams pick Attribix
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Accurate Tracking",
              d: "Pixels + CAPI with deduplication and consent‑aware capture.",
            },
            {
              t: "Attribution models",
              d: "Last/First, Linear, Time‑Decay, and position‑based.",
            },
            {
              t: "Ads Review",
              d: "CPP, ROAS, revenue per ad — sortable and filterable.",
            },
            {
              t: "Real‑time insights",
              d: "Fresh metrics, alerts for high CPA or low ROAS.",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-lg font-semibold">{f.t}</div>
              <p className="mt-2 text-sm text-white/70">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-7xl px_4 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Get value in 3 steps
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { n: "1", t: "Connect your store", d: "Shopify or WooCommerce in minutes." },
            { n: "2", t: "Link ad platforms", d: "Meta, Google, TikTok OAuth — we sync spend and conversions." },
            { n: "3", t: "Decide with clarity", d: "See which ads and channels actually drive revenue." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-4xl font-extrabold text-white/70">{s.n}</div>
              <div className="mt-3 text-lg font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">Integrations</h2>
        <p className="mt-2 text-white/70">One click to connect your ad platforms and storefront.</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Meta","Google","TikTok","Shopify","WooCommerce"].map((n) => (
            <div key={n} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 py-4">
              <span className="text-sm text_white/80">{n}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">Pricing</h2>
        <p className="mt-2 text-white/70">Start free. Upgrade when you see value.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { name: "Starter", price: 69, note: "First 15 days free", features: ["Up to 50k sessions", "Basic attribution", "Email support"] },
            { name: "Growth", price: 149, note: "15‑day free trial", features: ["Up to 250k sessions", "All models", "Slack alerts"] },
            { name: "Scale", price: 299, note: "15‑day free trial", features: ["Unlimited", "API access", "Priority support"] },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="mt-2 text-3xl font-extrabold">
                ${p.price} <span className="text-sm font-normal text-white/60">/mo</span>
              </div>
              <div className="text-xs text-emerald-300 mt-1">{p.note}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {p.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-block rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10">
                Get started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA & FOOTER */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="rounded-3xl border border-white/10 bg_white/10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold">Ready to see true ROAS?</h3>
            <p className="text-white/80">Open your analytics and review ads & attribution now.</p>
          </div>
          <Link href="/login" className="rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold hover:opacity-90">
            Launch Analytics
          </Link>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={20} height={20} />
            <span>Attribix</span>
          </div>
          <div className="flex gap-4">
            <a href="mailto:hello@attribix.app" className="hover:text-white/90">hello@attribix.app</a>
            <a href="/privacy" className="hover:text-white/90">Privacy</a>
            <a href="/terms" className="hover:text-white/90">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
