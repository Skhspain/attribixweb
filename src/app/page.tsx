// src/app/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSections from "@/components/site/HomeSections";
import { softwareApplicationJsonLd } from "@/lib/pricing";
import { trackTrialClick as trackTrial } from "@/lib/track";

/* -----------------------------------------------------
   Utilities
----------------------------------------------------- */
function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}
/* -----------------------------------------------------
   Cursor spotlight
----------------------------------------------------- */
function CursorSpotlight() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const el = ref.current!;
    function onMove(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY + (window.scrollY || 0);
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(240px 240px at var(--x,50%) var(--y,20%), rgba(255,255,255,0.08), transparent 60%)",
      }}
    />
  );
}

/* -----------------------------------------------------
   Aurora sweep
----------------------------------------------------- */
function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-1/3 top-1/4 h-[120vh] w-[120vw] animate-aurora opacity-40" />
      <style jsx global>{`
        @keyframes auroraMove {
          0% {
            transform: translateX(-20%) translateY(0) rotate(0deg) skewX(-8deg);
          }
          50% {
            transform: translateX(10%) translateY(-2%) rotate(3deg) skewX(-6deg);
          }
          100% {
            transform: translateX(40%) translateY(0) rotate(0deg) skewX(-8deg);
          }
        }
        .animate-aurora {
          background: conic-gradient(
            from 0deg,
            rgba(34, 211, 238, 0.1),
            rgba(168, 85, 247, 0.15),
            rgba(59, 130, 246, 0.12),
            rgba(56, 189, 248, 0.15),
            rgba(34, 211, 238, 0.1)
          );
          filter: blur(60px) saturate(140%);
          animation: auroraMove 22s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}

/* -----------------------------------------------------
   Constellation canvas
----------------------------------------------------- */
type Dot = { x: number; y: number; vx: number; vy: number; size: number };

function Constellation() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const hoverRef = React.useRef(false);
  const mouse = React.useRef({ x: 0, y: 0, active: false });
  const dotsRef = React.useRef<Dot[]>([]);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    let w = (c.width = window.innerWidth);
    let h = (c.height = Math.max(window.innerHeight, document.body.scrollHeight));

    function resize() {
      w = (c.width = window.innerWidth);
      h = (c.height = Math.max(window.innerHeight, document.body.scrollHeight));
    }
    window.addEventListener("resize", resize);

    const COUNT = 45;
    dotsRef.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 2 + 0.6,
    }));
    function step() {
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = "rgba(255,255,255,0.5)";
      dotsRef.current.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
      });

      const maxDist = hoverRef.current ? 120 : 80;
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const a = dotsRef.current[i];
          const b = dotsRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;
            ctx.strokeStyle = `rgba(56,189,248,${0.25 * alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (mouse.current.active) {
        const R = 140;
        dotsRef.current.forEach((d) => {
          const dx = d.x - mouse.current.x;
          const dy = d.y - mouse.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < R) {
            const alpha = 1 - dist / R;
            ctx.strokeStyle = `rgba(99,102,241,${0.35 * alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.stroke();
          }
        });
      }

      rafRef.current = requestAnimationFrame(step);
    }

    function start() {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
    }

    const idleHandle: any =
      (window as any).requestIdleCallback
        ? (window as any).requestIdleCallback(start, { timeout: 1500 })
        : setTimeout(start, 300);

    function onVisibility() {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else {
        start();
      }
    }

    function onMove(e: PointerEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY + (window.scrollY || 0);
      mouse.current.active = true;
    }
    function onLeave() {
      mouse.current.active = false;
    }
    function onEnter() {
      hoverRef.current = true;
    }
    function onOut() {
      hoverRef.current = false;
    }

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    c.addEventListener("pointerenter", onEnter);
    c.addEventListener("pointerout", onOut);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      (window as any).cancelIdleCallback?.(idleHandle);
      clearTimeout(idleHandle);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      c.removeEventListener("pointerenter", onEnter);
      c.removeEventListener("pointerout", onOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-auto fixed inset-0 -z-20 opacity-60"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

/* -----------------------------------------------------
   Global grain / noise overlay
----------------------------------------------------- */
function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-30 opacity-[0.16] mix-blend-soft-light"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.13) 1px, transparent 0)",
        backgroundSize: "3px 3px",
      }}
    />
  );
}
/* -----------------------------------------------------
   Scroll progress header
----------------------------------------------------- */
function ProgressHeader() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const h = doc.scrollHeight - doc.clientHeight;
      const p = h > 0 ? (doc.scrollTop / h) * 100 : 0;
      ref.current?.style.setProperty("--p", `${p}%`);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div aria-hidden className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-1 bg-white/5">
      <div
        ref={ref}
        className="h-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400"
        style={{ width: "var(--p, 0%)", transition: "width 80ms linear" }}
      />
    </div>
  );
}

/* -----------------------------------------------------
   Magnetic CTA button
----------------------------------------------------- */
function MagneticButton({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current!;
    const r = (e.currentTarget as HTMLAnchorElement).getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  }
  function onLeave() {
    const el = ref.current!;
    el.style.transform = `translate(0,0)`;
  }
  return (
    <Link
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={cx(
        "relative inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold transition-transform will-change-transform",
        "shadow-[0_10px_40px_-10px_rgba(255,255,255,.25)] hover:shadow-[0_14px_50px_-12px_rgba(255,255,255,.35)]",
        className
      )}
    >
      <span ref={ref} className="block">
        {children}
      </span>
      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5" />
    </Link>
  );
}

/* -----------------------------------------------------
   Animated number
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
  restartKey?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [val, setVal] = React.useState(from);
  const prevTo = React.useRef(from);

  React.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const d = Math.max(300, duration);
    const startVal = prevTo.current;
    const endVal = to;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / d);
      const eased = easeOutCubic(t);
      const newVal = startVal + (endVal - startVal) * eased;
      setVal(newVal);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        prevTo.current = endVal;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, restartKey]);

  return (
    <>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </>
  );
}

/* -----------------------------------------------------
   Hero Attribution Chart
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
  const BAR_COUNT = 20;
  const [heights, setHeights] = React.useState<number[]>(
    Array.from({ length: BAR_COUNT }, () => 0)
  );
  const [revealed, setRevealed] = React.useState(0);
  const [bubbles, setBubbles] = React.useState<Bubble[]>([]);
  const nextId = React.useRef(0);

  const [step, setStep] = React.useState(0);
  const [loopKey, setLoopKey] = React.useState(0);
  const [pulseKey, setPulseKey] = React.useState(0);

  const PLATFORMS = [
    {
      name: "Meta",
      cls: "bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white/90 border-white/10",
    },
    {
      name: "Google",
      cls: "bg-gradient-to-r from-[#22D3EE] to-[#60A5FA] text-white/90 border-white/10",
    },
  ] as const;

  const LANES = 4;
  const MAX_BUBBLES = 3;

  React.useEffect(() => {
    let cancelled = false;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const targets = Array.from({ length: BAR_COUNT }, (_, i) => 20 + i * 3);
      setHeights(targets);
      setRevealed(BAR_COUNT);
      setStep(BAR_COUNT);
      return;
    }

    const runCycle = () => {
      if (cancelled) return;

      const targets: number[] = [];
      let v = 22 + Math.random() * 5;
      for (let i = 0; i < BAR_COUNT; i++) {
        v += 0.9 + Math.random() * 0.9;
        targets.push(Math.max(16, Math.min(82, v + Math.random() * 3 - 1.5)));
      }

      setHeights(Array.from({ length: BAR_COUNT }, () => 0));
      setRevealed(0);
      setBubbles([]);
      setStep(0);
      setLoopKey((k) => k + 1);

      const STEP_MS = 1100;
      const BAR_EASE_MS = 1000;
      if (typeof window !== "undefined") {
        (window as any).__BAR_EASE_MS__ = BAR_EASE_MS;
      }

      const lift = (i: number) => {
        if (cancelled) return;
        if (i >= BAR_COUNT) {
          setTimeout(runCycle, 2000);
          return;
        }

        setHeights((prev) => {
          const copy = prev.slice();
          copy[i] = targets[i];
          return copy;
        });
        setRevealed(i + 1);

        const plat = PLATFORMS[i % PLATFORMS.length];
        const id = nextId.current++;
        const lane = i % LANES;
        const life = 2400 + Math.random() * 1200;

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

        setStep(i + 1);
        if (i % 5 === 4) setPulseKey((k) => k + 1);

        setTimeout(() => lift(i + 1), STEP_MS);
      };

      lift(0);
    };

    runCycle();
    return () => {
      cancelled = true;
    };
  }, []);

  const roasFrom = 3.2,
    roasTo = 11.0;
  const purFrom = 180,
    purTo = 260;
  const cppFrom = 19.0,
    cppTo = 3.0;

  const p = Math.min(1, step / BAR_COUNT);
  const roasNow = roasFrom + (roasTo - roasFrom) * p;
  const purNow = Math.round(purFrom + (purTo - purFrom) * p);
  const cppNow = cppFrom + (cppTo - cppFrom) * p;

  const roasDeltaNow = Math.round((roasNow / roasFrom - 1) * 100);
  const purDeltaNow = Math.round((purNow / purFrom - 1) * 100);
  const cppDeltaNow = Math.round((cppFrom / cppNow - 1) * 100);

  const barEase =
    typeof window !== "undefined" && (window as any).__BAR_EASE_MS__
      ? (window as any).__BAR_EASE_MS__
      : 900;

  const kRestart = loopKey * 1000 + step;

  return (
    <div className="relative overflow-visible">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[28px] opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(1200px 320px at 70% -40%, rgba(56,189,248,.25), transparent 60%), radial-gradient(800px 200px at -10% 110%, rgba(168,85,247,.18), transparent 60%)",
          animation: "heroGlow 12s ease-in-out infinite alternate",
        }}
      />

      <div className="h-6 w-40 rounded bg-white/10" />

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2">
            <div className="text-xs text-white/70">ROAS</div>
            <span
              key={`r-${pulseKey}`}
              className={cx(
                "text-[10px] px-1.5 py-0.5 rounded-full border",
                "bg-emerald-500/15 text-emerald-300 border-emerald-400/20",
                "animate-chip"
              )}
            >
              ▲ {roasDeltaNow}%
            </span>
          </div>
          <div className="mt-1 text-xl font-semibold">
            <Counter
              from={roasFrom}
              to={roasNow}
              duration={640}
              decimals={2}
              restartKey={kRestart}
            />
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2">
            <div className="text-xs text-white/70">Purchases</div>
            <span
              key={`p-${pulseKey}`}
              className={cx(
                "text-[10px] px-1.5 py-0.5 rounded-full border",
                "bg-emerald-500/15 text-emerald-300 border-emerald-400/20",
                "animate-chip"
              )}
            >
              ▲ {purDeltaNow}%
            </span>
          </div>
          <div className="mt-1 text-xl font-semibold">
            <Counter from={purFrom} to={purNow} duration={640} restartKey={kRestart} />
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2">
            <div className="text-xs text-white/70">Cost / Purchase</div>
            <span
              key={`c-${pulseKey}`}
              className={cx(
                "text-[10px] px-1.5 py-0.5 rounded-full border",
                "bg-emerald-500/15 text-emerald-300 border-emerald-400/20",
                "animate-chip"
              )}
            >
              ▼ {cppDeltaNow}%
            </span>
          </div>
          <div className="mt-1 text-xl font-semibold">
            <Counter
              prefix="$"
              from={cppFrom}
              to={cppNow}
              duration={640}
              decimals={2}
              restartKey={kRestart}
            />
          </div>
        </div>
      </div>

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
                background:
                  "linear-gradient(to top, rgba(124,58,237,.55) 0%, rgba(59,130,246,.55) 50%, rgba(6,182,212,.85) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.28)",
                opacity: i < revealed ? 1 : 0.7,
              }}
            />
          ))}

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
          Illustrative dashboard preview • Sample data, not customer results
        </div>
      </div>

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
        @keyframes chipPop {
          0% {
            transform: scale(0.96);
            filter: drop-shadow(0 0 0 rgba(56, 189, 248, 0));
          }
          40% {
            transform: scale(1.04);
            filter: drop-shadow(0 6px 14px rgba(56, 189, 248, 0.35));
          }
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(56, 189, 248, 0));
          }
        }
        .animate-chip {
          animation: chipPop 420ms ease;
        }
        @keyframes heroGlow {
          0% {
            opacity: 0.5;
            transform: translateY(0);
          }
          100% {
            opacity: 0.75;
            transform: translateY(-6px);
          }
        }
      `}</style>
    </div>
  );
}

/* -----------------------------------------------------
   Demo video modal
----------------------------------------------------- */
function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-slate-900 rounded-2xl overflow-hidden ring-1 ring-white/10 p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400/15 ring-1 ring-cyan-400/30 mx-auto mb-4">
          <svg className="w-7 h-7 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Demo video coming soon</h3>
        <p className="text-white/60 text-sm mb-6">
          Want to see Attribix in action? Book a live walkthrough with our team.
        </p>
        <Link
          href="/book-demo"
          className="inline-block rounded-xl bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-neutral-200 transition"
          onClick={onClose}
        >
          Book a live demo
        </Link>
      </div>
    </div>
  );
}

/* -----------------------------------------------------
   PAGE
----------------------------------------------------- */
function trackTrialClick() {
  trackTrial("home_hero");
}

export default function Home() {
  const [showDemo, setShowDemo] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white overflow-hidden">
      {/* JSON-LD for SEO (Organization lives in the root layout) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd()) }}
      />

      <ProgressHeader />
      <CursorSpotlight />
      <Aurora />
      <Constellation />
      <NoiseOverlay />

      <Header />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/50 uppercase tracking-widest">
              Smarter Attribution. Bigger Impact.
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
              Shopify{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                Attribution
              </span>
              {" "}&amp; Server-Side{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#2563EB] to-[#9333EA]">
                Tracking
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
              Pixels were not built for today’s privacy rules. Attribix sits between your
              Shopify store and Meta and Google Ads, connects{" "}
              <Link href="/server-side-tracking-shopify" className="underline decoration-white/30 underline-offset-2 hover:decoration-white/70">
                server-side and browser signals
              </Link>{" "}
              to reduce tracking loss, and shows you which campaigns actually drive revenue.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <MagneticButton href="https://apps.shopify.com/attribix-app" className="text-base px-9 py-4" onClick={trackTrialClick}>
                Start free trial →
              </MagneticButton>
              <Link
                href="/ad-management"
                className="text-sm text-white/60 underline decoration-white/25 underline-offset-4 hover:text-white/90 hover:decoration-white/60"
              >
                Prefer we run the ads ourselves? See Ad Management
              </Link>
            </div>
          </div>

          <div className="relative mt-6 md:mt-0">
            <div className="absolute -inset-6 rounded-3xl bg-cyan-400/20 blur-2xl" />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-12 -right-10 h-40 w-40 rounded-full bg-cyan-400/35 blur-3xl opacity-70"
              style={{ animation: "parallaxDrift 24s ease-in-out infinite alternate" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[-40px] left-[-30px] h-32 w-56 rounded-full bg-fuchsia-500/25 blur-3xl opacity-70"
              style={{
                animation: "parallaxDriftSlow 30s ease-in-out infinite alternate",
              }}
            />
            <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm p-4 shadow-2xl">
              <HeroAttributionChart />
            </div>
          </div>
        </div>

        <DemoModal open={showDemo} onClose={() => setShowDemo(false)} />
      </section>

      <HomeSections />

      {/* SHARED FOOTER */}
      <Footer />

      {/* global keyframes */}
      <style jsx global>{`
        @keyframes floatY {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: floatY 14s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatY 18s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: floatY 22s ease-in-out infinite;
        }

        @keyframes metricsMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes parallaxDrift {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(10px, -12px, 0);
          }
          100% {
            transform: translate3d(-6px, 8px, 0);
          }
        }
        @keyframes parallaxDriftSlow {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-12px, 10px, 0);
          }
          100% {
            transform: translate3d(8px, -6px, 0);
          }
        }

        @keyframes sectionTitleIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-sectionTitle {
          animation: sectionTitleIn 600ms ease-out both;
        }

        @keyframes dataFlow {
          0% {
            background-position: 0% 0%;
            opacity: 0.25;
          }
          40% {
            opacity: 0.9;
          }
          100% {
            background-position: 200% 0%;
            opacity: 0.25;
          }
        }

        html:focus-within {
          scroll-behavior: smooth;
        }
        :focus-visible {
          outline: 2px solid rgba(56, 189, 248, 0.7);
          outline-offset: 3px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}