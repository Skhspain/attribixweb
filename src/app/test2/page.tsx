// src/app/test2/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────────────────────────────────────
   Utilities
───────────────────────────────────────────────────────────────────────────── */
function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefers(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return prefers;
}

function useReveal(options: IntersectionObserverInit = { threshold: 0.15 }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setSeen(true); io.disconnect(); }
      });
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [options]);
  return { ref, seen };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, seen } = useReveal();
  return (
    <div
      ref={ref}
      className={cx(
        "transition-all duration-700 will-change-transform",
        seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / d);
      setVal(startVal + (to - startVal) * easeOutCubic(t));
      if (t < 1) { raf = requestAnimationFrame(tick); } else { prevTo.current = to; }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, restartKey]);
  return <>{prefix}{val.toFixed(decimals)}{suffix}</>;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Background
───────────────────────────────────────────────────────────────────────────── */
function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-30"
      style={{
        background: "#030712",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  );
}

function AmbientGlow() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            top: "-15%", left: "-10%", width: "55vw", height: "55vh",
            background: "radial-gradient(circle, rgba(99,102,241,0.13), transparent 65%)",
            filter: "blur(100px)",
            animation: "t2ambientA 28s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: "-20%", right: "-10%", width: "50vw", height: "50vh",
            background: "radial-gradient(circle, rgba(6,182,212,0.10), transparent 65%)",
            filter: "blur(100px)",
            animation: "t2ambientB 34s ease-in-out infinite alternate",
          }}
        />
      </div>
      <style jsx global>{`
        @keyframes t2ambientA { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(6%,10%) scale(1.15); } }
        @keyframes t2ambientB { 0% { transform: translate(0,0) scale(1.1); } 100% { transform: translate(-6%,-8%) scale(1); } }
      `}</style>
    </>
  );
}

function CursorSpotlight() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const el = ref.current!;
    function onMove(e: MouseEvent) {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY + (window.scrollY || 0)}px`);
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
        background: "radial-gradient(280px 280px at var(--x,50%) var(--y,20%), rgba(255,255,255,0.05), transparent 60%)",
      }}
    />
  );
}

function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.14] mix-blend-overlay"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
        backgroundSize: "4px 4px",
      }}
    />
  );
}

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
    <div aria-hidden className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-[2px] bg-white/[0.04]">
      <div
        ref={ref}
        className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500"
        style={{ width: "var(--p, 0%)", transition: "width 80ms linear" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   UI Components
───────────────────────────────────────────────────────────────────────────── */
function TiltCard({
  children,
  className = "",
  max = 8,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -2 * max;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 2 * max;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.015)`;
  }
  function onLeave() {
    ref.current!.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cx("transition-transform duration-200 will-change-transform", className)}
    >
      {children}
    </div>
  );
}

function MagneticButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
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
    ref.current!.style.transform = "translate(0,0)";
  }
  return (
    <Link
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cx(
        "relative inline-flex items-center justify-center rounded-xl bg-white text-gray-900 font-semibold transition-transform will-change-transform",
        "shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_14px_50px_-12px_rgba(255,255,255,0.4)]",
        className
      )}
    >
      <span ref={ref} className="block">{children}</span>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Typewriter
───────────────────────────────────────────────────────────────────────────── */
function Typewriter({ words, className = "" }: { words: string[]; className?: string }) {
  const [wi, setWi] = React.useState(0);
  const [ci, setCi] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const reduce = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reduce) return;
    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false); }, 2400);
      return () => clearTimeout(t);
    }
    const word = words[wi];
    if (!deleting) {
      if (ci < word.length) {
        const t = setTimeout(() => setCi(c => c + 1), 55 + Math.random() * 35);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (ci > 0) {
        const t = setTimeout(() => setCi(c => c - 1), 28);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setWi(w => (w + 1) % words.length);
      }
    }
  }, [ci, deleting, paused, wi, words, reduce]);

  const word = words[wi];
  const displayed = reduce ? words[0] : word.slice(0, ci);

  return (
    <span className={cx("inline", className)}>
      {displayed}
      {!reduce && <span className="t2-cursor ml-1" aria-hidden>|</span>}
      <style jsx global>{`
        @keyframes t2Blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .t2-cursor { animation: t2Blink 1s step-end infinite; font-weight: inherit; }
      `}</style>
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Browser Mockup
───────────────────────────────────────────────────────────────────────────── */
function BrowserMockup({ children, url = "attribix.app/dashboard" }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.09] shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
      {/* Tab bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.035] border-b border-white/[0.07]">
        <div className="flex gap-1.5 shrink-0">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 rounded-md bg-white/[0.04] border border-white/[0.07] px-3 py-1 text-[11px] text-white/25 max-w-[240px] w-full">
            <svg className="h-2.5 w-2.5 shrink-0 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {url}
          </div>
        </div>
      </div>
      {/* App shell */}
      <div className="flex bg-[#060c1a]">
        {/* Sidebar */}
        <div className="hidden md:flex w-44 shrink-0 flex-col border-r border-white/[0.05] py-4 px-2">
          <div className="flex items-center gap-2 px-3 mb-5">
            <div className="h-6 w-6 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
              <div className="h-3 w-3 rounded-sm bg-cyan-400/80" />
            </div>
            <span className="text-[11px] font-semibold text-white/50">Attribix</span>
          </div>
          {["Dashboard", "Attribution", "Ads", "Audience", "SEO"].map((item, i) => (
            <div
              key={item}
              className={cx(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 mb-0.5 text-[11px] font-medium",
                i === 0 ? "bg-white/[0.07] text-white/90" : "text-white/25 hover:text-white/50"
              )}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-current opacity-60 shrink-0" />
              {item}
            </div>
          ))}
        </div>
        {/* Content */}
        <div className="flex-1 p-4 min-w-0">{children}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MetricsTicker
───────────────────────────────────────────────────────────────────────────── */
function MetricsTicker() {
  const items = [
    "+36% conversions tracked", "CPP down 41%", "ROAS 3.2 → 6.8×",
    "iOS-proof tracking", "Server-side + pixel", "Shopify native", "No setup required",
    "Meta & Google unified", "365-day history on Pro",
  ];
  const doubled = [...items, ...items];
  const reduce = usePrefersReducedMotion();

  return (
    <div className="relative overflow-hidden py-3.5 border-y border-white/[0.05]">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#030712] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#030712] to-transparent" />
      <div
        className="flex gap-8 whitespace-nowrap"
        style={reduce ? undefined : { animation: "t2ticker 35s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-[11px] text-white/20 font-medium uppercase tracking-[0.12em] flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-cyan-500/40 shrink-0" />
            {item}
          </span>
        ))}
      </div>
      <style jsx global>{`
        @keyframes t2ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Hero Attribution Chart  (reused from test)
───────────────────────────────────────────────────────────────────────────── */
type Bubble = { id: number; bar: number; label: string; cls: string; lane: number; life: number };

function HeroAttributionChart() {
  const BAR_COUNT = 36;
  const [heights, setHeights] = React.useState<number[]>(Array.from({ length: BAR_COUNT }, () => 0));
  const [revealed, setRevealed] = React.useState(0);
  const [bubbles, setBubbles] = React.useState<Bubble[]>([]);
  const nextId = React.useRef(0);
  const [step, setStep] = React.useState(0);
  const [loopKey, setLoopKey] = React.useState(0);
  const [pulseKey, setPulseKey] = React.useState(0);

  const PLATFORMS = [
    { name: "Meta", cls: "bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-white/90 border-white/10" },
    { name: "Google", cls: "bg-gradient-to-r from-[#22D3EE] to-[#60A5FA] text-white/90 border-white/10" },
  ] as const;

  const LANES = 4;
  const MAX_BUBBLES = 6;

  React.useEffect(() => {
    let cancelled = false;
    const runCycle = () => {
      if (cancelled) return;
      const targets: number[] = [];
      let v = 22 + Math.random() * 5;
      for (let i = 0; i < BAR_COUNT; i++) {
        v += 0.9 + Math.random() * 0.9;
        targets.push(Math.max(16, Math.min(82, v + Math.random() * 3 - 1.5)));
      }
      setHeights(Array.from({ length: BAR_COUNT }, () => 0));
      setRevealed(0); setBubbles([]); setStep(0); setLoopKey(k => k + 1);
      const STEP_MS = 720;
      const BAR_EASE_MS = 920;
      if (typeof window !== "undefined") (window as any).__BAR_EASE_MS__ = BAR_EASE_MS;
      const lift = (i: number) => {
        if (cancelled) return;
        if (i >= BAR_COUNT) { setTimeout(runCycle, 2000); return; }
        setHeights(prev => { const copy = prev.slice(); copy[i] = targets[i]; return copy; });
        setRevealed(i + 1);
        const plat = PLATFORMS[i % PLATFORMS.length];
        const id = nextId.current++;
        const lane = i % LANES;
        const life = 2400 + Math.random() * 1200;
        setBubbles(prev => [...prev, { id, bar: i, label: `${plat.name}: +${Math.random() < 0.75 ? 1 : 2} Purchase`, cls: plat.cls, lane, life }].slice(-MAX_BUBBLES));
        setTimeout(() => setBubbles(prev => prev.filter(b => b.id !== id)), life);
        setStep(i + 1); setPulseKey(k => k + 1);
        setTimeout(() => lift(i + 1), STEP_MS);
      };
      lift(0);
    };
    runCycle();
    return () => { cancelled = true; };
  }, []);

  const roasFrom = 3.2, roasTo = 11.0;
  const purFrom = 180, purTo = 260;
  const cppFrom = 19.0, cppTo = 3.0;
  const p = Math.min(1, step / BAR_COUNT);
  const roasNow = roasFrom + (roasTo - roasFrom) * p;
  const purNow = Math.round(purFrom + (purTo - purFrom) * p);
  const cppNow = cppFrom + (cppTo - cppFrom) * p;
  const roasDeltaNow = Math.round((roasNow / roasFrom - 1) * 100);
  const purDeltaNow = Math.round((purNow / purFrom - 1) * 100);
  const cppDeltaNow = Math.round((cppFrom / cppNow - 1) * 100);
  const barEase = typeof window !== "undefined" && (window as any).__BAR_EASE_MS__ ? (window as any).__BAR_EASE_MS__ : 900;
  const kRestart = loopKey * 1000 + step;

  return (
    <div className="relative overflow-visible">
      <div className="h-5 w-36 rounded bg-white/8 mb-3" />
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "ROAS", delta: `▲ ${roasDeltaNow}%`, val: roasNow, decimals: 2, restartKey: kRestart },
          { label: "Purchases", delta: `▲ ${purDeltaNow}%`, val: purNow, decimals: 0, restartKey: kRestart },
          { label: "Cost / Purchase", delta: `▼ ${cppDeltaNow}%`, val: cppNow, decimals: 2, prefix: "$", restartKey: kRestart },
        ].map((m) => (
          <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2">
              <div className="text-xs text-white/60">{m.label}</div>
              <span key={`${m.label}-${pulseKey}`} className="text-[10px] px-1.5 py-0.5 rounded-full border bg-emerald-500/15 text-emerald-300 border-emerald-400/20 t2chip">
                {m.delta}
              </span>
            </div>
            <div className="mt-1 text-xl font-semibold">
              <Counter from={0} to={m.val} duration={640} decimals={m.decimals} restartKey={m.restartKey} prefix={m.prefix ?? ""} />
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-4 overflow-visible">
        <div
          className="h-40 rounded-xl border border-white/10 bg-white/5 px-3 pt-3 pb-2 relative overflow-visible grid items-end"
          style={{ gridTemplateColumns: `repeat(${BAR_COUNT}, minmax(0,1fr))`, columnGap: "5px" }}
        >
          {heights.map((h, i) => (
            <div key={i} className="rounded-t"
              style={{
                height: `${i < revealed ? h : 4}%`,
                transition: `height ${barEase}ms cubic-bezier(.22,.7,.2,1)`,
                background: "linear-gradient(to top, rgba(124,58,237,.55) 0%, rgba(59,130,246,.55) 50%, rgba(6,182,212,.85) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.28)",
                opacity: i < revealed ? 1 : 0.7,
              }}
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 overflow-visible">
            {bubbles.map((b) => {
              const leftPct = Math.max(5, Math.min(95, ((b.bar + 0.5) / BAR_COUNT) * 100));
              const barH = heights[b.bar] ?? 0;
              const bottom = Math.min(90, barH + 12 + b.lane * 22);
              return (
                <div
                  key={b.id}
                  className={`absolute border px-2 py-1 rounded-xl text-[10px] shadow-lg backdrop-blur-[2px] ${b.cls}`}
                  style={{ left: `${leftPct}%`, bottom: `calc(${bottom}%)`, transform: "translateX(-50%)", whiteSpace: "nowrap", animation: `t2bubble ${b.life}ms ease-in-out forwards` }}
                >
                  {b.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-2 text-[10px] text-white/40">Live preview · Conversions increasing · Tracking improving</div>
      </div>
      <style jsx>{`
        @keyframes t2bubble {
          0%   { opacity: 0; transform: translateX(-50%) translateY(6px) scale(0.98); }
          10%  { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
          85%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(-50%) translateY(-6px) scale(0.98); }
        }
        @keyframes t2chipPop {
          0%   { transform: scale(0.96); }
          40%  { transform: scale(1.04); }
          100% { transform: scale(1); }
        }
        .t2chip { animation: t2chipPop 420ms ease; }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Feature Panels (reused)
───────────────────────────────────────────────────────────────────────────── */
function LiveAdsPanel() {
  const rows = [
    { name: "Meta — Retargeting", roas: 6.8, cpp: 4.2, trend: 28, good: true },
    { name: "Google — Shopping", roas: 4.1, cpp: 7.8, trend: 12, good: true },
    { name: "Meta — Prospecting", roas: 1.9, cpp: 24.5, trend: -8, good: false },
  ];
  const [tick, setTick] = React.useState(0);
  const [events, setEvents] = React.useState<{ id: number; label: string; cls: string }[]>([]);
  const nextId = React.useRef(0);

  React.useEffect(() => {
    const iv = setInterval(() => setTick(t => t + 1), 2200);
    return () => clearInterval(iv);
  }, []);

  React.useEffect(() => {
    const labels = ["Meta: +1 Purchase", "Google: +1 Purchase", "Meta: +2 Purchases", "Google: +1 Purchase"];
    const clss = [
      "bg-gradient-to-r from-[#2563EB] to-[#9333EA]",
      "bg-gradient-to-r from-[#22D3EE] to-[#60A5FA]",
      "bg-gradient-to-r from-[#2563EB] to-[#9333EA]",
      "bg-gradient-to-r from-[#22D3EE] to-[#60A5FA]",
    ];
    const id = nextId.current++;
    const idx = id % labels.length;
    setEvents(prev => [...prev.slice(-4), { id, label: labels[idx], cls: clss[idx] }]);
    const t = setTimeout(() => setEvents(prev => prev.filter(e => e.id !== id)), 2000);
    return () => clearTimeout(t);
  }, [tick]);

  const bars = [38, 52, 44, 60, 68, 55, 72, 78, 70, 85, 62, 74, 80, 68, 90];

  return (
    <div className="relative rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/6">
        <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Ad performance</span>
        <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>
      <div className="px-5 pt-4 pb-2 flex items-end gap-1.5 h-28">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t transition-all duration-700"
            style={{
              height: `${h + Math.sin((tick + i) * 0.7) * 6}%`,
              background: "linear-gradient(to top, rgba(99,102,241,0.6), rgba(34,211,238,0.9))",
              boxShadow: "0 0 6px rgba(34,211,238,0.3)",
            }}
          />
        ))}
      </div>
      <div className="relative h-10 mx-5 mb-1 overflow-hidden">
        {events.map(e => (
          <div key={e.id}
            className={`absolute left-0 top-1 text-white text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/10 ${e.cls}`}
            style={{ animation: "t2fevent 2s ease-in-out forwards" }}>
            {e.label}
          </div>
        ))}
      </div>
      <div className="px-4 pb-4 space-y-2">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center justify-between rounded-xl border border-white/6 bg-white/3 px-4 py-3">
            <div>
              <div className="text-sm font-medium text-white/90">{row.name}</div>
              <div className="text-xs text-white/35 mt-0.5">CPP ${row.cpp.toFixed(2)}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-white">{row.roas}x</div>
              <div className={cx("text-[11px] font-semibold mt-0.5", row.good ? "text-emerald-400" : "text-rose-400")}>
                {row.trend > 0 ? "+" : ""}{row.trend}%
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes t2fevent {
          0%   { opacity:0; transform: translateX(-8px); }
          12%  { opacity:1; transform: translateX(0); }
          75%  { opacity:1; }
          100% { opacity:0; transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
}

function AttributionPanel() {
  const channels = [
    { name: "Meta Ads", reported: 4.2, real: 2.8, color: "#818cf8" },
    { name: "Google Ads", reported: 3.8, real: 3.1, color: "#38bdf8" },
    { name: "Email", reported: 1.2, real: 2.4, color: "#f472b6" },
    { name: "Organic", reported: 0.8, real: 1.9, color: "#4ade80" },
  ];
  const [showReal, setShowReal] = React.useState(false);

  React.useEffect(() => {
    const t1 = setTimeout(() => setShowReal(true), 1200);
    const iv = setInterval(() => setShowReal(r => !r), 3400);
    return () => { clearTimeout(t1); clearInterval(iv); };
  }, []);

  return (
    <div className="relative rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/6">
        <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Attribution</span>
        <div className="flex items-center gap-2 text-[11px]">
          <span className={cx("transition-colors duration-500", !showReal ? "text-white/50" : "text-white/30")}>Platform reported</span>
          <div className="w-8 h-4 rounded-full bg-white/10 relative cursor-pointer" onClick={() => setShowReal(r => !r)}>
            <div className={cx("absolute top-0.5 h-3 w-3 rounded-full transition-all duration-500", showReal ? "left-4 bg-indigo-400" : "left-0.5 bg-white/30")} />
          </div>
          <span className={cx("transition-colors duration-500", showReal ? "text-indigo-300" : "text-white/30")}>True ROAS</span>
        </div>
      </div>
      <div className="px-5 py-4 space-y-3">
        {channels.map(ch => {
          const val = showReal ? ch.real : ch.reported;
          const maxVal = 4.5;
          return (
            <div key={ch.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-white/80">{ch.name}</span>
                <span className={cx("text-sm font-bold tabular-nums transition-all duration-700",
                  showReal && ch.real > ch.reported ? "text-emerald-400" :
                  showReal && ch.real < ch.reported ? "text-rose-400" : "text-white")}>
                  {val.toFixed(1)}x ROAS
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/6 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${(val / maxVal) * 100}%`, background: `linear-gradient(to right, ${ch.color}88, ${ch.color})`, boxShadow: `0 0 8px ${ch.color}60` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-5 pb-4">
        <div className={cx("rounded-xl px-4 py-3 text-xs transition-all duration-700 border",
          showReal ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-300" : "bg-white/3 border-white/6 text-white/40")}>
          {showReal ? "Email is your best channel. Meta is overstated by 33%." : "Viewing platform-reported data. Toggle for true attribution."}
        </div>
      </div>
    </div>
  );
}

function AudiencePanel() {
  const [count, setCount] = React.useState(4821);
  const [reviews, setReviews] = React.useState([
    { name: "Sarah M.", text: "Incredible experience, will buy again.", stars: 5 },
    { name: "James T.", text: "Fast shipping, exactly as described.", stars: 5 },
  ]);
  const [newReview, setNewReview] = React.useState(false);
  const allReviews = [
    { name: "Alex R.", text: "Best purchase this year. Highly recommended.", stars: 5 },
    { name: "Emma L.", text: "Exceeded all expectations!", stars: 5 },
    { name: "Carlos M.", text: "Great quality and super fast delivery.", stars: 5 },
  ];
  const nextReview = React.useRef(0);

  React.useEffect(() => {
    const iv = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3 + 1));
      setNewReview(true);
      const r = allReviews[nextReview.current % allReviews.length];
      nextReview.current++;
      setReviews(prev => [r, ...prev.slice(0, 1)]);
      setTimeout(() => setNewReview(false), 600);
    }, 3200);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="relative rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/6">
        <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Audience</span>
        <span className="text-[11px] text-fuchsia-400 font-medium">Growing</span>
      </div>
      <div className="mx-4 mt-4 rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 px-4 py-3 flex items-center justify-between">
        <div>
          <div className="text-xs text-white/50">Newsletter subscribers</div>
          <div className={cx("text-2xl font-extrabold text-white mt-0.5 tabular-nums transition-all duration-300", newReview && "text-fuchsia-300")}>
            {count.toLocaleString()}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-emerald-400 font-semibold">+143 this week</div>
          <div className="text-xs text-white/35 mt-0.5">42.3% open rate</div>
        </div>
      </div>
      <div className="px-4 mt-3 space-y-2 pb-4">
        <div className="text-xs text-white/35 px-1 mb-1">Recent reviews</div>
        {reviews.map((r, i) => (
          <div key={r.name + i}
            className="rounded-xl border border-white/6 bg-white/3 px-4 py-3 transition-all duration-500"
            style={{ opacity: i === 0 && newReview ? 0 : 1, transform: i === 0 && newReview ? "translateY(-6px)" : "translateY(0)" }}>
            <div className="flex items-center gap-2 mb-1">
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center text-[9px] font-bold text-white shrink-0">{r.name[0]}</div>
              <span className="text-xs font-medium text-white/80">{r.name}</span>
              <span className="text-amber-400 text-[10px]">{"★".repeat(r.stars)}</span>
            </div>
            <p className="text-xs text-white/50">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewsPanel() {
  const allReviews = [
    { name: "Sarah M.", text: "Incredible experience, will buy again.", stars: 5, country: "🇺🇸" },
    { name: "James T.", text: "Fast shipping, exactly as described.", stars: 5, country: "🇬🇧" },
    { name: "Alex R.", text: "Best purchase this year. Highly recommended.", stars: 5, country: "🇩🇪" },
    { name: "Emma L.", text: "Exceeded all my expectations!", stars: 5, country: "🇦🇺" },
    { name: "Carlos M.", text: "Great quality and super fast delivery.", stars: 5, country: "🇧🇷" },
  ];
  const [visible, setVisible] = React.useState(allReviews.slice(0, 3));
  const next = React.useRef(3);
  const [leads, setLeads] = React.useState(47);

  React.useEffect(() => {
    const iv = setInterval(() => {
      const r = allReviews[next.current % allReviews.length];
      next.current++;
      setVisible(prev => [r, ...prev.slice(0, 2)]);
      setLeads(l => l + Math.floor(Math.random() * 2 + 1));
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="relative rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/6">
        <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Reviews & leads</span>
        <span className="flex items-center gap-1.5 text-[11px] text-pink-400 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
          Live
        </span>
      </div>
      <div className="mx-4 mt-4 rounded-xl border border-pink-500/20 bg-pink-500/5 px-4 py-3 flex items-center justify-between">
        <div>
          <div className="text-xs text-white/40">New leads today</div>
          <div className="text-2xl font-extrabold text-white tabular-nums">{leads}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-emerald-400 font-semibold">+12 from popup</div>
          <div className="text-xs text-white/30 mt-0.5">+35 from checkout</div>
        </div>
      </div>
      <div className="px-4 mt-3 space-y-2 pb-4">
        {visible.map((r, i) => (
          <div key={r.name + r.text}
            className="rounded-xl border border-white/6 bg-white/3 px-4 py-3 transition-all duration-500"
            style={{ opacity: i === 0 ? 1 : 0.75 - i * 0.15 }}>
            <div className="flex items-center gap-2 mb-1">
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center text-[9px] font-bold text-white shrink-0">{r.name[0]}</div>
              <span className="text-xs font-medium text-white/80">{r.name}</span>
              <span className="text-amber-400 text-[10px]">{"★".repeat(r.stars)}</span>
              <span className="ml-auto text-xs">{r.country}</span>
            </div>
            <p className="text-xs text-white/50">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoreHealthPanel() {
  const [score, setScore] = React.useState(61);
  const [feedRows, setFeedRows] = React.useState([
    { name: "Google Shopping feed", status: "Fixing…", ok: false, count: "1,240 products" },
    { name: "Meta catalogue", status: "Active", ok: true, count: "1,240 products" },
    { name: "Missing descriptions", status: "3 issues", ok: false, count: "Fix required" },
  ]);

  React.useEffect(() => {
    const steps = [
      () => { setScore(72); },
      () => { setFeedRows(r => r.map((row, i) => i === 0 ? { ...row, status: "Active", ok: true } : row)); setScore(80); },
      () => { setFeedRows(r => r.map((row, i) => i === 2 ? { ...row, status: "Fixed", ok: true, count: "All good" } : row)); setScore(91); },
      () => {
        setScore(61);
        setFeedRows([
          { name: "Google Shopping feed", status: "Fixing…", ok: false, count: "1,240 products" },
          { name: "Meta catalogue", status: "Active", ok: true, count: "1,240 products" },
          { name: "Missing descriptions", status: "3 issues", ok: false, count: "Fix required" },
        ]);
      },
    ];
    const iv = setInterval(() => {
      setScore(s => {
        const idx = s < 72 ? 0 : s < 80 ? 1 : s < 91 ? 2 : 3;
        steps[(idx + 1) % steps.length]();
        return s;
      });
    }, 2200);
    return () => clearInterval(iv);
  }, []);

  const grade = score >= 90 ? "A" : score >= 80 ? "B+" : score >= 70 ? "B" : "C+";
  const scoreColor = score >= 80 ? "text-emerald-400" : score >= 70 ? "text-cyan-400" : "text-amber-400";
  const ringColor = score >= 80 ? "border-emerald-400/50" : score >= 70 ? "border-cyan-400/50" : "border-amber-400/50";

  return (
    <div className="relative rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/6">
        <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Store health</span>
        <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Auto-fixing
        </span>
      </div>
      <div className="mx-4 mt-4 rounded-xl border border-white/8 bg-white/3 px-4 py-3 flex items-center justify-between">
        <div>
          <div className="text-xs text-white/50">SEO score</div>
          <div className={cx("text-3xl font-extrabold mt-0.5 tabular-nums transition-all duration-700", scoreColor)}>
            {score}<span className="text-sm font-normal text-white/30">/100</span>
          </div>
        </div>
        <div className={cx("h-14 w-14 rounded-full border-4 flex items-center justify-center transition-all duration-700", ringColor)}>
          <span className={cx("text-lg font-bold transition-all duration-700", scoreColor)}>{grade}</span>
        </div>
      </div>
      <div className="px-4 mt-3 space-y-2 pb-5">
        <div className="text-xs text-white/35 px-1 mb-1">Product feed status</div>
        {feedRows.map(row => (
          <div key={row.name} className="flex items-center justify-between rounded-xl border border-white/6 bg-white/3 px-4 py-3 transition-all duration-500">
            <div>
              <div className="text-sm font-medium text-white/90">{row.name}</div>
              <div className="text-xs text-white/35 mt-0.5">{row.count}</div>
            </div>
            <span className={cx("text-[11px] font-semibold px-2 py-0.5 rounded-full border transition-all duration-500",
              row.ok ? "text-emerald-400 border-emerald-400/25 bg-emerald-400/10" : "text-amber-400 border-amber-400/25 bg-amber-400/10")}>
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Spotlight feature data
───────────────────────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    tag: "Ad tracking",
    headline: "Your pixel misses more than you think.",
    sub: "Server-side tracking + pixel combined. Every conversion captured — even on iOS and ad-blocked traffic.",
    color: "from-cyan-400 to-indigo-400",
    glow: "rgba(56,189,248,0.15)",
    pills: ["Server-side events", "Meta & Google", "UTM builder", "Visitor flow"],
    Panel: () => <LiveAdsPanel />,
  },
  {
    tag: "Attribution",
    headline: "Meta says 4x. Shopify says 2x. We fix that.",
    sub: "See where revenue actually comes from. Not last-click guesses or inflated platform numbers.",
    color: "from-indigo-400 to-fuchsia-400",
    glow: "rgba(99,102,241,0.15)",
    pills: ["True ROAS", "Cross-channel", "No last-click bias", "Clean data"],
    Panel: () => <AttributionPanel />,
  },
  {
    tag: "Newsletter & email",
    headline: "Grow your list. Keep customers coming back.",
    sub: "Send campaigns to your subscribers directly from Attribix. Up to unlimited sends on Pro.",
    color: "from-fuchsia-400 to-pink-400",
    glow: "rgba(168,85,247,0.15)",
    pills: ["Unlimited sends", "Subscriber growth", "Open rate tracking", "Segmentation"],
    Panel: () => <AudiencePanel />,
  },
  {
    tag: "Reviews & leads",
    headline: "Social proof on autopilot.",
    sub: "Automatically collect reviews after purchase and capture leads with built-in forms.",
    color: "from-pink-400 to-orange-400",
    glow: "rgba(236,72,153,0.15)",
    pills: ["Auto-collect", "Display on store", "Lead forms", "Inbox management"],
    Panel: () => <ReviewsPanel />,
  },
  {
    tag: "Social & SEO",
    headline: "More reach. Less manual work.",
    sub: "Schedule social posts, track your SEO score, and run unlimited audits — all in one place.",
    color: "from-emerald-400 to-teal-400",
    glow: "rgba(52,211,153,0.15)",
    pills: ["Unlimited SEO scans", "Social scheduling", "Post calendar", "Keyword tracking"],
    Panel: () => <StoreHealthPanel />,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Feature Showcase — sticky scroll
───────────────────────────────────────────────────────────────────────────── */
function FeatureShowcase() {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [animKey, setAnimKey] = React.useState(0);
  const sectionRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const observers = FEATURES.map((_, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIdx(i);
            setAnimKey(k => k + 1);
          }
        },
        { threshold: 0.4, rootMargin: "-10% 0px -40% 0px" }
      );
      if (sectionRefs.current[i]) obs.observe(sectionRefs.current[i]!);
      return obs;
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const f = FEATURES[activeIdx];

  return (
    <section id="features" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <Reveal className="mx-auto max-w-2xl px-4 text-center mb-24">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-semibold mb-4">Platform features</p>
        <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
          One platform.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
            Every channel covered.
          </span>
        </h2>
      </Reveal>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-20 items-start">

          {/* Left — scrollable feature copy */}
          <div>
            {FEATURES.map((feat, i) => (
              <div
                key={feat.tag}
                ref={(el) => { sectionRefs.current[i] = el; }}
                className="min-h-[65vh] flex flex-col justify-center py-16"
              >
                <div className="space-y-7 max-w-lg">
                  <div className="flex items-center gap-4">
                    <span className={cx("font-mono text-xs font-bold tracking-widest transition-colors duration-400",
                      i === activeIdx ? "text-white/60" : "text-white/15")}>
                      0{i + 1}
                    </span>
                    <div className={cx("h-px flex-1 bg-gradient-to-r transition-all duration-500",
                      i === activeIdx ? "from-white/20 to-transparent" : "from-white/6 to-transparent")} />
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/45">
                    {feat.tag}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black leading-[1.1]">
                    <span className={cx("text-transparent bg-clip-text bg-gradient-to-r", feat.color)}>
                      {feat.headline}
                    </span>
                  </h3>
                  <p className="text-lg text-white/45 leading-relaxed">{feat.sub}</p>
                  <div className="flex flex-wrap gap-2">
                    {feat.pills.map(pill => (
                      <span key={pill} className="text-xs rounded-full px-3 py-1.5 border border-white/[0.09] bg-white/[0.04] text-white/50 font-medium">
                        {pill}
                      </span>
                    ))}
                  </div>
                  {/* Mobile: panel inline */}
                  <div className="lg:hidden mt-6">
                    <feat.Panel />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — sticky panel (desktop) */}
          <div className="hidden lg:block sticky top-24">
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl blur-3xl opacity-50 transition-all duration-700"
              style={{ background: `radial-gradient(circle, ${f.glow}, transparent 70%)` }}
            />
            <div key={animKey} style={{ animation: "t2panelSwap 0.4s ease-out" }}>
              <f.Panel />
            </div>
            <div className="mt-6 flex items-center justify-center gap-2">
              {FEATURES.map((_, i) => (
                <div key={i} className={cx("rounded-full transition-all duration-300",
                  i === activeIdx ? "w-6 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/15")} />
              ))}
            </div>
            <style jsx global>{`
              @keyframes t2panelSwap {
                0%   { opacity: 0; transform: translateY(10px) scale(0.98); }
                100% { opacity: 1; transform: translateY(0) scale(1); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Stats section
───────────────────────────────────────────────────────────────────────────── */
function StatItem({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
  color,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  color: string;
}) {
  const { ref, seen } = useReveal({ threshold: 0.3 });
  return (
    <div ref={ref} className="text-center px-6">
      <div className={cx("text-6xl md:text-7xl font-black tabular-nums tracking-tight", color)}>
        {seen
          ? <Counter to={to} decimals={decimals} prefix={prefix} suffix={suffix} duration={2200} />
          : `${prefix}0${suffix}`}
      </div>
      <div className="text-sm text-white/30 mt-3 font-medium uppercase tracking-[0.15em] max-w-[160px] mx-auto leading-relaxed">
        {label}
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.07), transparent 70%)" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />

      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-semibold">By the numbers</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4">
          <StatItem to={36} prefix="+" suffix="%" label="More conversions tracked on average" color="text-cyan-400" />
          <StatItem to={6.8} decimals={1} suffix="×" label="Average ROAS after 60 days" color="text-indigo-400" />
          <StatItem to={41} prefix="-" suffix="%" label="Average cost per purchase reduction" color="text-fuchsia-400" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Testimonials
───────────────────────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  { quote: "Finally trustable ROAS. Cut CPA by 38% in two weeks.", author: "Mia K.", role: "Growth Lead", company: "Tempo" },
  { quote: "Attribution models that actually reflect our funnel. Game-changer for the whole team.", author: "Jon A.", role: "CMO", company: "Apex" },
  { quote: "CPP dropped and scale got way easier. Best tool we've added this year.", author: "Sofia R.", role: "Paid Lead", company: "Nova" },
  { quote: "We can finally defend our ad budgets with actual numbers, not guesses.", author: "Evan D.", role: "Founder", company: "North" },
];

function TestimonialsSection() {
  const [active, setActive] = React.useState(0);
  const [animKey, setAnimKey] = React.useState(0);
  const reduce = usePrefersReducedMotion();

  React.useEffect(() => {
    if (reduce) return;
    const iv = setInterval(() => {
      setActive(a => (a + 1) % TESTIMONIALS.length);
      setAnimKey(k => k + 1);
    }, 5000);
    return () => clearInterval(iv);
  }, [reduce]);

  const t = TESTIMONIALS[active];

  return (
    <section className="relative py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 text-[220px] font-black text-white/[0.018] leading-none select-none"
        aria-hidden
      >
        &ldquo;
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-semibold mb-14">What people say</p>
        </Reveal>

        <div key={animKey} style={{ animation: "t2tIn 0.5s ease-out" }}>
          <blockquote className="text-2xl md:text-3xl font-semibold text-white/90 leading-relaxed mb-10">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-sm font-bold text-white shrink-0">
              {t.author[0]}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-white/80">{t.author}</div>
              <div className="text-xs text-white/35">{t.role} · {t.company}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setAnimKey(k => k + 1); }}
              className={cx("rounded-full transition-all duration-300",
                i === active ? "w-6 h-2 bg-white/70" : "w-2 h-2 bg-white/15 hover:bg-white/30")}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes t2tIn { 0% { opacity: 0; transform: translateY(8px); } 100% { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   How it works
───────────────────────────────────────────────────────────────────────────── */
function HowItWorks() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-semibold mb-4">Getting started</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Value in 3 steps.</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div
            aria-hidden
            className="hidden md:block absolute top-7 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent)" }}
          />

          {[
            {
              n: "01",
              title: "Install on Shopify",
              desc: "One-click install. No theme edits, no custom dev, no fragile scripts that break with updates.",
              color: "text-cyan-400",
              glow: "rgba(34,211,238,0.2)",
            },
            {
              n: "02",
              title: "Connect ad platforms",
              desc: "Link Meta and Google in seconds. We sync spend, conversions and server-side events automatically.",
              color: "text-indigo-400",
              glow: "rgba(99,102,241,0.2)",
            },
            {
              n: "03",
              title: "Scale with confidence",
              desc: "See which campaigns drive actual profit. Kill losers, double down on winners, trust the data.",
              color: "text-fuchsia-400",
              glow: "rgba(168,85,247,0.2)",
            },
          ].map((step, i) => (
            <Reveal key={step.n} delay={i * 130}>
              <div className="relative group">
                <div
                  className="pointer-events-none absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
                  style={{ background: `radial-gradient(circle, ${step.glow}, transparent 70%)` }}
                />
                <div
                  className={cx("text-7xl font-black opacity-[0.07] mb-5 leading-none font-mono select-none", step.color)}
                  aria-hidden
                >
                  {step.n}
                </div>
                <div className={cx("w-8 h-8 rounded-full flex items-center justify-center border mb-4",
                  "border-white/10 bg-white/[0.04]")}>
                  <span className={cx("text-sm font-bold", step.color)}>{parseInt(step.n)}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Pricing
───────────────────────────────────────────────────────────────────────────── */
function PricingSection() {
  const [annual, setAnnual] = React.useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: 39,
      annualTotal: 354,
      note: "14-day free trial",
      features: ["300 orders tracked/mo", "Meta & Google Ads data", "30 days history", "UTM builder"],
      highlight: false,
    },
    {
      name: "Growth",
      monthly: 79,
      annualTotal: 720,
      note: "Most popular",
      features: ["2,500 orders tracked/mo", "90 days history", "Social calendar & analytics", "Product feed — Google & Meta"],
      highlight: true,
    },
    {
      name: "Pro",
      monthly: 149,
      annualTotal: 1356,
      note: "14-day free trial",
      features: ["Unlimited orders tracked", "365 days history", "Visitor flow analysis", "Priority support"],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      <Reveal className="mx-auto max-w-7xl px-4 text-center mb-14">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-semibold mb-4">Pricing</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Simple, honest pricing.</h2>

        {/* Toggle */}
        <div className="inline-flex items-center gap-4 rounded-full border border-white/[0.09] bg-white/[0.03] px-5 py-2.5">
          <span className={cx("text-sm transition-colors duration-300", !annual ? "text-white font-semibold" : "text-white/35")}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(a => !a)}
            className="relative h-7 w-12 rounded-full transition-colors duration-300"
            style={{ background: annual ? "rgba(34,211,238,0.8)" : "rgba(255,255,255,0.08)" }}
            aria-label="Toggle annual billing"
          >
            <div
              className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300"
              style={{ left: annual ? "26px" : "4px" }}
            />
          </button>
          <span className={cx("text-sm transition-colors duration-300", annual ? "text-white font-semibold" : "text-white/35")}>
            Annual
          </span>
          {annual && (
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2.5 py-1">
              Save ~24%
            </span>
          )}
        </div>
      </Reveal>

      <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => {
          const price = annual ? Math.round(plan.annualTotal / 12) : plan.monthly;
          return (
            <Reveal key={plan.name} delay={i * 100}>
              <TiltCard>
                <div className={cx(
                  "relative rounded-2xl border p-7 h-full flex flex-col",
                  plan.highlight
                    ? "border-cyan-400/35 bg-gradient-to-b from-cyan-950/60 to-indigo-950/60 shadow-[0_0_60px_rgba(34,211,238,0.1)]"
                    : "border-white/[0.07] bg-white/[0.025]"
                )}>
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 text-black text-[10px] font-black uppercase tracking-wider px-4 py-1 shadow-lg">
                      Most popular
                    </div>
                  )}
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">{plan.name}</div>
                  <div className="mb-1 flex items-end gap-1">
                    <span className="text-5xl font-black text-white tabular-nums">${price}</span>
                    <span className="text-white/35 text-sm mb-1">/mo</span>
                  </div>
                  {annual && (
                    <div className="text-xs text-emerald-400 mb-1">Billed ${plan.annualTotal}/year</div>
                  )}
                  <div className="text-xs text-white/25 mb-7">{plan.note}</div>
                  <ul className="space-y-3.5 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                        <svg className="h-4 w-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/login"
                    className={cx(
                      "block w-full text-center rounded-xl py-3 text-sm font-semibold transition-all duration-200",
                      plan.highlight
                        ? "bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_8px_24px_rgba(34,211,238,0.3)]"
                        : "border border-white/[0.09] text-white/70 hover:bg-white/[0.06] hover:text-white"
                    )}
                  >
                    Get started
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Final CTA
───────────────────────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative py-36 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18), rgba(6,182,212,0.10), transparent 70%)" }}
      />
      <div className="mx-auto max-w-3xl px-4 text-center relative">
        <Reveal>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] mb-6">
            Ready to see<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400">
              what you&apos;re missing?
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-lg mx-auto mb-12 leading-relaxed">
            14-day free trial. No card required. Connect Shopify in under 2 minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <MagneticButton href="/login" className="text-base px-9 py-4">
              Start free trial →
            </MagneticButton>
            <Link
              href="/agency/consultation"
              className="text-sm text-white/40 hover:text-white/80 transition-colors underline underline-offset-4"
            >
              Talk to the team
            </Link>
          </div>
          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/20">
            {["No credit card required", "Cancel anytime", "Shopify native", "GDPR compliant"].map((t, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-emerald-500/50 shrink-0" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Hero Dashboard Card
───────────────────────────────────────────────────────────────────────────── */
function HeroDashboardCard() {
  const channels = [
    { name: "Meta Ads", color: "#818cf8", spend: "$1,240", roas: 6.8, pct: 88 },
    { name: "Google Ads", color: "#38bdf8", spend: "$880",  roas: 5.1, pct: 66 },
    { name: "Email",      color: "#f472b6", spend: "$0",    roas: 9.2, pct: 100 },
    { name: "Organic",    color: "#4ade80", spend: "$0",    roas: 4.4, pct: 57 },
  ];

  const [purchases, setPurchases] = React.useState(243);
  const [revenue, setRevenue] = React.useState(8_412);
  const [toast, setToast] = React.useState<{ id: number; text: string; color: string } | null>(null);
  const toastId = React.useRef(0);
  const [bars, setBars] = React.useState(channels.map(c => c.pct));

  React.useEffect(() => {
    const toasts = [
      { text: "Meta: +2 Purchases  $118", color: "#818cf8" },
      { text: "Google: +1 Purchase  $54", color: "#38bdf8" },
      { text: "Email: +3 Purchases  $201", color: "#f472b6" },
      { text: "Meta: +1 Purchase  $67", color: "#818cf8" },
    ];
    let i = 0;
    const iv = setInterval(() => {
      const add = Math.floor(Math.random() * 4 + 1);
      const rev = Math.floor(Math.random() * 180 + 40);
      setPurchases(p => p + add);
      setRevenue(r => r + rev);
      setBars(b => b.map(v => Math.max(40, Math.min(100, v + (Math.random() * 8 - 4)))));
      const id = toastId.current++;
      const t = toasts[i % toasts.length]; i++;
      setToast({ id, ...t });
      setTimeout(() => setToast(null), 2600);
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  const sparkBars = [32, 44, 38, 52, 60, 50, 66, 72, 64, 80, 58, 70, 76, 62, 88, 74, 92, 84, 96, 88];

  return (
    <div className="relative">
      {/* Outer glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] blur-3xl"
        style={{ background: "radial-gradient(circle at 55% 45%, rgba(99,102,241,0.35), rgba(6,182,212,0.2), transparent 70%)", opacity: 0.7 }}
      />

      <div className="rounded-3xl border border-white/[0.09] bg-[#07091a]/98 backdrop-blur-xl shadow-[0_48px_120px_rgba(0,0,0,0.85)] overflow-hidden">

        {/* Window bar */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-[11px] text-white/20 font-medium">attribix.app/dashboard</span>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>

        <div className="p-5">
          {/* Top metrics row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: "Revenue today", value: `$${revenue.toLocaleString()}`, delta: "+24%", good: true },
              { label: "Purchases", value: purchases, delta: "+18%", good: true },
              { label: "Avg. ROAS", value: "6.9×", delta: "+248%", good: true },
            ].map(m => (
              <div key={m.label} className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-3">
                <div className="text-[10px] text-white/30 mb-1.5 font-medium">{m.label}</div>
                <div className="text-xl font-black text-white tabular-nums leading-none">{m.value}</div>
                <div className="text-[10px] text-emerald-400 font-semibold mt-1">{m.delta}</div>
              </div>
            ))}
          </div>

          {/* Sparkline */}
          <div className="mb-5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-white/35 font-medium">Revenue this week</span>
              <span className="text-[10px] text-cyan-400 font-semibold">↑ Trending</span>
            </div>
            <div className="flex items-end gap-1 h-16">
              {sparkBars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t transition-all duration-700"
                  style={{
                    height: `${h}%`,
                    background: i >= sparkBars.length - 4
                      ? "linear-gradient(to top, rgba(99,102,241,0.7), rgba(34,211,238,1))"
                      : "linear-gradient(to top, rgba(99,102,241,0.25), rgba(34,211,238,0.4))",
                    boxShadow: i === sparkBars.length - 1 ? "0 0 12px rgba(34,211,238,0.7)" : undefined,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Channel breakdown */}
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] text-white/35 font-medium uppercase tracking-wider">Channels</span>
              <span className="text-[10px] text-indigo-300 border border-indigo-400/20 bg-indigo-400/10 rounded-full px-2 py-0.5">True ROAS</span>
            </div>
            <div className="space-y-3.5">
              {channels.map((ch, i) => (
                <div key={ch.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ch.color }} />
                      <span className="text-sm text-white/75 font-medium">{ch.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-white/30">{ch.spend}</span>
                      <span className="text-sm font-black tabular-nums" style={{ color: ch.color }}>
                        {ch.roas}×
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${bars[i]}%`, background: `linear-gradient(to right, ${ch.color}55, ${ch.color})` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Toast */}
        <div className="relative h-10 px-5 pb-3 overflow-hidden">
          {toast && (
            <div
              key={toast.id}
              className="absolute bottom-3 left-5 flex items-center gap-2 rounded-lg px-3 py-1.5 border border-white/[0.09] bg-[#07091a] text-[11px] font-medium text-white/80"
              style={{ boxShadow: `0 0 12px ${toast.color}30`, animation: "t2toast 2.6s ease-in-out forwards" }}
            >
              <span className="h-1.5 w-1.5 rounded-full shrink-0 animate-pulse" style={{ background: toast.color }} />
              {toast.text}
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes t2toast {
          0%   { opacity: 0; transform: translateY(6px); }
          10%  { opacity: 1; transform: translateY(0); }
          80%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────────────────── */
export default function Test2Page() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      <GridBackground />
      <AmbientGlow />
      <CursorSpotlight />
      <NoiseOverlay />
      <ProgressHeader />

      <Header />

      {/* ── HERO ── */}
      <section className="relative min-h-[96vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-full -z-10"
          style={{ background: "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(99,102,241,0.14), transparent 65%)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-[55vw] h-full -z-10"
          style={{ background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(6,182,212,0.07), transparent 65%)" }}
        />

        <div className="mx-auto max-w-7xl px-4 w-full grid lg:grid-cols-[1fr_1.05fr] gap-14 xl:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.04] px-4 py-1.5 text-xs text-white/40 font-medium mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                For Shopify stores &nbsp;·&nbsp; Free 14-day trial
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.0] tracking-tight text-white mb-7">
                More sales.
                <br />
                Same ad spend.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500">
                  <Typewriter words={["Finally.", "For real.", "Guaranteed.", "Starting today."]} />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-xl text-white/40 leading-relaxed mb-9 max-w-lg">
                Your ads are working harder than you think. Attribix shows you exactly which ones — so you stop wasting money and double down on what actually converts.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <MagneticButton href="/login" className="text-base px-9 py-4">
                  Start free trial →
                </MagneticButton>
                <Link href="/pricing" className="text-sm text-white/35 hover:text-white/80 transition-colors underline underline-offset-4 decoration-white/15">
                  See pricing
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#4f46e5", "#0891b2", "#7c3aed", "#be185d", "#059669"].map((c, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-[#030712] flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                      style={{ background: c }}
                    >
                      {["M", "J", "A", "S", "E"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs text-white/25">Loved by 500+ Shopify stores</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — dashboard card */}
          <Reveal delay={260} className="hidden lg:block">
            <HeroDashboardCard />
          </Reveal>
        </div>
      </section>

      {/* ── METRICS TICKER ── */}
      <MetricsTicker />

      {/* ── FEATURE SHOWCASE ── */}
      <FeatureShowcase />

      {/* ── STATS ── */}
      <StatsSection />

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── HOW IT WORKS ── */}
      <HowItWorks />

      {/* ── PRICING ── */}
      <PricingSection />

      {/* ── FINAL CTA ── */}
      <FinalCTA />

      <Footer />
    </div>
  );
}
