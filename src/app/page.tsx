// src/app/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* -----------------------------------------------------
   Utilities
----------------------------------------------------- */
function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/* -----------------------------------------------------
   Reduced motion
----------------------------------------------------- */
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

/* -----------------------------------------------------
   Scroll reveal
----------------------------------------------------- */
function useReveal(options: IntersectionObserverInit = { threshold: 0.15 }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
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

/* -----------------------------------------------------
   Scroll spy (active nav)
   (kept for potential future use, not used now)
----------------------------------------------------- */
function useScrollSpy(ids: string[], offset = 100) {
  const [active, setActive] = React.useState<string | null>(null);
  React.useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target) setActive((visible.target as HTMLElement).id);
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: [0, 0.3, 0.6] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids, offset]);
  return active;
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
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    let w = (c.width = window.innerWidth);
    let h = (c.height = Math.max(window.innerHeight, document.body.scrollHeight));

    function resize() {
      w = (c.width = window.innerWidth);
      h = (c.height = Math.max(window.innerHeight, document.body.scrollHeight));
    }
    window.addEventListener("resize", resize);

    const COUNT = 70;
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
   3D Tilt + Neon/glass cards
----------------------------------------------------- */
function TiltCard({
  children,
  className = "",
  max = 10,
  scale = 1.02,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  scale?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) * 2 * max;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
  }
  function onLeave() {
    const el = ref.current!;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
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

function NeonCard({
  children,
  className = "",
  tilt = true,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  const card = (
    <div
      className={cx(
        "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "before:absolute before:inset-0 before:-z-10 before:rounded-[18px]",
        "before:bg-[radial-gradient(120px_60px_at_var(--mx,50%)_-20px,rgba(56,189,248,.25),transparent)]",
        "after:absolute after:left-6 after:right-6 after:-bottom-5 after:h-8 after:rounded-full after:bg-cyan-400/10 after:blur-2xl after:opacity-60 after:-z-10",
        "transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(56,189,248,0.15)]",
        className
      )}
      onMouseMove={(e) => {
        const t = e.currentTarget as HTMLDivElement;
        const r = t.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        t.style.setProperty("--mx", `${x}%`);
      }}
    >
      {children}
    </div>
  );
  return tilt ? <TiltCard>{card}</TiltCard> : card;
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
    const el = ref.current!;
    el.style.transform = `translate(0,0)`;
  }
  return (
    <Link
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
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
   Marquee (testimonials)
----------------------------------------------------- */
type MarqueeItem = { quote: string; author: string; role: string };

function Marquee({ items }: { items: MarqueeItem[] }) {
  const reduce = usePrefersReducedMotion();
  const list = [...items, ...items];
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div
        className="flex gap-6 py-6 will-change-transform"
        style={
          reduce
            ? undefined
            : {
                animation: "marquee 28s linear infinite",
              }
        }
      >
        {list.map((it, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-[340px] px-5 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col gap-3"
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <svg key={s} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-white/85 flex-1">"{it.quote}"</p>
            <div className="flex items-center gap-2 pt-1 border-t border-white/8">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">
                {it.author[0]}
              </div>
              <div className="text-xs text-white/55">{it.author} · {it.role}</div>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

/* -----------------------------------------------------
   Metrics strip (kept, not used right now)
----------------------------------------------------- */
function MetricsStrip() {
  const reduce = usePrefersReducedMotion();
  const metrics = [
    "+36% tracked purchases",
    "CPP down 41%",
    "ROAS 3.2 → 6.8",
    "Fewer lost sales",
    "Server-side + pixel together",
    "Model-ready data",
  ];

  const items = reduce ? metrics : [...metrics, ...metrics];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/25 via-transparent to-fuchsia-500/25 opacity-70" />
      <div className="relative">
        <div
          className="flex items-center gap-4 py-3 px-4 text-xs sm:text-sm text-white/80 whitespace-nowrap will-change-transform"
          style={
            reduce
              ? undefined
              : {
                  animation: "metricsMarquee 32s linear infinite",
                }
          }
        >
          {items.map((m, i) => (
            <div
              key={`${m}-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-black/40 px-3 py-1 shadow-[0_0_0_1px_rgba(15,23,42,0.7)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------------
   Case studies grid
----------------------------------------------------- */
type CaseItem = { brand: string; metric: string; summary: string; image?: string };

function CaseStudies({ items }: { items: CaseItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((c) => (
        <NeonCard
          key={c.brand}
          className="p-5 group overflow-hidden bg-gradient-to-br from-sky-500/10 via-transparent to-fuchsia-500/10"
        >
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">{c.brand}</div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-200">
              {c.metric}
            </div>
          </div>
          <p className="mt-3 text-sm text-white/70">{c.summary}</p>
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="mt-3 text-xs text-white/60 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
            View breakdown →
          </div>
        </NeonCard>
      ))}
    </div>
  );
}

/* -----------------------------------------------------
   Wave divider
----------------------------------------------------- */
function WaveDivider() {
  return (
    <div className="relative h-16 -mb-8">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="mx-auto h-10 max-w-5xl rounded-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/25 to-cyan-400/0 blur-2xl opacity-80" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/0 via-white/8 to-white/0" />
    </div>
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
  const BAR_COUNT = 36;
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
      setRevealed(0);
      setBubbles([]);
      setStep(0);
      setLoopKey((k) => k + 1);

      const STEP_MS = 720;
      const BAR_EASE_MS = 920;
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
        setPulseKey((k) => k + 1);

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
          Live preview • Conversions increasing • Tracking improving
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
   Sticky section title
----------------------------------------------------- */
function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div id={id} className="mb-6">
      <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold animate-sectionTitle">
        {children}
        <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0" />
      </h2>
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
   Copy email helper (only used in Footer component now)
----------------------------------------------------- */
function CopyEmail({ email }: { email: string }) {
  const [ok, setOk] = React.useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setOk(true);
          setTimeout(() => setOk(false), 1200);
        } catch {
          // ignore
        }
      }}
      className="hover:text-white/90 underline underline-offset-4"
      aria-label={`Copy ${email}`}
    >
      {ok ? "Copied!" : email}
    </button>
  );
}

/* -----------------------------------------------------
   Integrations diagram – updated graph
----------------------------------------------------- */
type IntegrationNode = {
  id: string;
  label: string;
  logo: string;
  angleDeg: number;
  radius: number;
};

const INTEGRATION_NODES: IntegrationNode[] = [
  // Evenly spread at 120° intervals — clean triangle
  {
    id: "meta",
    label: "Meta",
    logo: "/assets/logos/meta.svg",
    angleDeg: -90,
    radius: 178,
  },
  {
    id: "google",
    label: "Google",
    logo: "/assets/logos/google.svg",
    angleDeg: 30,
    radius: 178,
  },
  {
    id: "shopify",
    label: "Shopify",
    logo: "/assets/logos/shopify.svg",
    angleDeg: 150,
    radius: 178,
  },
];

const NODE_COLORS: Record<string, string> = {
  meta: "#818cf8",
  google: "#38bdf8",
  shopify: "#4ade80",
};

function IntegrationsDiagram() {
  const SIZE = 520;
  const CENTER = SIZE / 2;

  const coords = INTEGRATION_NODES.map((n) => {
    const rad = (n.angleDeg * Math.PI) / 180;
    return {
      ...n,
      x: CENTER + n.radius * Math.cos(rad),
      y: CENTER + n.radius * Math.sin(rad),
      color: NODE_COLORS[n.id] ?? "#38bdf8",
    };
  });

  return (
    <>
      <div className="relative mx-auto h-[420px] w-[420px] lg:h-[500px] lg:w-[500px]">

        {/* Soft ambient glow behind everything */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[-40px] -z-10 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(56,189,248,0.18) 0%, rgba(168,85,247,0.12) 45%, transparent 70%)",
          }}
        />

        {/* SVG layer — rings, gradient lines, traveling dots */}
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden
        >
          <defs>
            {coords.map((n) => (
              <linearGradient
                key={`lg-${n.id}`}
                id={`lg-${n.id}`}
                x1={CENTER} y1={CENTER}
                x2={n.x} y2={n.y}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%"   stopColor={n.color} stopOpacity={0.05} />
                <stop offset="55%"  stopColor={n.color} stopOpacity={0.7} />
                <stop offset="100%" stopColor={n.color} stopOpacity={0.9} />
              </linearGradient>
            ))}
            <radialGradient id="hubHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="rgba(56,189,248,0.35)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Hub ambient halo */}
          <circle cx={CENTER} cy={CENTER} r={72} fill="url(#hubHalo)" />

          {/* Rings */}
          <circle cx={CENTER} cy={CENTER} r={82}  stroke="rgba(148,163,184,0.30)" strokeWidth={1}   fill="none" />
          <circle cx={CENTER} cy={CENTER} r={145} stroke="rgba(148,163,184,0.13)" strokeWidth={1}   fill="none" strokeDasharray="3 9" />
          <circle cx={CENTER} cy={CENTER} r={202} stroke="rgba(148,163,184,0.07)" strokeWidth={0.8} fill="none" />

          {/* Gradient lines */}
          {coords.map((n) => (
            <line
              key={`line-${n.id}`}
              x1={CENTER} y1={CENTER}
              x2={n.x}    y2={n.y}
              stroke={`url(#lg-${n.id})`}
              strokeWidth={1.5}
            />
          ))}

          {/* Traveling dots — flow inward from node → hub */}
          {coords.map((n, i) => (
            <circle key={`dot-${n.id}`} r={3} fill={n.color}>
              <animateMotion
                dur={`${2.4 + i * 0.5}s`}
                begin={`${i * 0.8}s`}
                repeatCount="indefinite"
                path={`M ${n.x} ${n.y} L ${CENTER} ${CENTER}`}
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.08;0.82;1"
                dur={`${2.4 + i * 0.5}s`}
                begin={`${i * 0.8}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="2;3.5;2.5;1.5"
                dur={`${2.4 + i * 0.5}s`}
                begin={`${i * 0.8}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>

        {/* Platform pills */}
        {coords.map((n) => (
          <div
            key={n.id}
            className="absolute"
            style={{ left: n.x, top: n.y, transform: "translate(-50%, -50%)" }}
          >
            {/* Per-platform color glow halo */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-50 blur-xl"
              style={{ background: n.color, transform: "scale(1.5)" }}
            />
            <div className="relative flex items-center gap-2.5 rounded-2xl border border-white/10 bg-slate-950/92 px-4 py-2.5 shadow-[0_16px_40px_rgba(5,7,20,0.9)] backdrop-blur-sm">
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-900 ring-1 ring-white/10">
                <Image src={n.logo} alt={n.label} width={18} height={18} className="object-contain" />
              </div>
              <span className="text-[13px] font-medium text-white">{n.label}</span>
              {/* Live status dot */}
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: "#4ade80", boxShadow: "0 0 7px rgba(74,222,128,0.85)" }}
              />
            </div>
          </div>
        ))}

        {/* Center hub */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          {/* Outer pulse ring */}
          <div
            aria-hidden
            className="hub-pulse pointer-events-none absolute rounded-full border border-cyan-400/25"
            style={{ inset: -22 }}
          />
          {/* Second pulse ring, offset timing */}
          <div
            aria-hidden
            className="hub-pulse-2 pointer-events-none absolute rounded-full border border-cyan-400/15"
            style={{ inset: -36 }}
          />
          {/* Hub circle */}
          <div className="relative flex h-[96px] w-[96px] flex-col items-center justify-center rounded-full border border-cyan-300/50 bg-slate-950 shadow-[0_0_0_1px_rgba(56,189,248,0.08),0_0_50px_rgba(56,189,248,0.22),inset_0_0_24px_rgba(56,189,248,0.06)]">
            <div className="absolute inset-[6px] rounded-full border border-white/[0.07]" />
            <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} className="mb-1" />
            <span className="text-[11px] font-semibold tracking-wide text-white/90">Attribix</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes hubPulse {
          0%   { opacity: 0;   transform: scale(0.88); }
          40%  { opacity: 0.7; transform: scale(1);    }
          100% { opacity: 0;   transform: scale(1.18); }
        }
        .hub-pulse  { animation: hubPulse 3.2s ease-out infinite; }
        .hub-pulse-2 { animation: hubPulse 3.2s ease-out 1.6s infinite; }
      `}</style>
    </>
  );
}

/* -----------------------------------------------------
   PAGE
----------------------------------------------------- */
export default function Home() {
  // const active = useScrollSpy(["features", "how", "integrations", "pricing"], 120);
  const [showDemo, setShowDemo] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white overflow-hidden">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Attribix",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: [
              { "@type": "Offer", name: "Starter", price: "69", priceCurrency: "USD" },
              { "@type": "Offer", name: "Growth", price: "149", priceCurrency: "USD" },
              { "@type": "Offer", name: "Scale", price: "299", priceCurrency: "USD" },
            ],
            url: "https://attribix.app",
          }),
        }}
      />

      <ProgressHeader />
      <CursorSpotlight />
      <Aurora />
      <Constellation />
      <NoiseOverlay />

      {/* SHARED NAV */}
      <Header />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
              Smarter{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                Attribution
              </span>
              .
              <br />
              Bigger{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#2563EB] to-[#9333EA]">
                Impact
              </span>
              .
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
              Pixels were not built for today’s privacy rules. Attribix sits between your
              store and the ad platforms, captures server-side events the pixels miss, and
              shows you which ads actually drive revenue.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <MagneticButton href="/login">Open Dashboard</MagneticButton>
              <button
                onClick={() => setShowDemo(true)}
                className="rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10 text-sm"
              >
                Watch demo
              </button>
            </div>

            <p className="mt-4 text-xs text-white/60">
              Works with Shopify. No heavy setup.
            </p>
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

      {/* FEATURES */}
      <section id="features" className="relative mx-auto max-w-7xl px-4 pb-24 md:pb-28">
        <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <Reveal>
          {/* Section label */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/50 uppercase tracking-widest">
            What it does
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-4">
            Stop guessing.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
              Start knowing.
            </span>
          </h2>
          <p className="text-white/55 max-w-xl mb-12 text-base md:text-lg">
            Attribix recovers the conversions your pixels miss and shows you exactly which ads drive real revenue — not platform-reported guesses.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Rebuilt signal quality",
                d: "Server-side and browser events in one clean stream your ad platforms can actually use.",
                icon: "✨",
                accent: "from-cyan-500/20 to-cyan-500/5",
                border: "border-cyan-500/20",
                iconBg: "bg-cyan-500/15",
                dot: "bg-cyan-400",
              },
              {
                t: "Truthful attribution",
                d: "See where revenue actually comes from — not last-click guesses or inflated platform numbers.",
                icon: "🧭",
                accent: "from-indigo-500/20 to-indigo-500/5",
                border: "border-indigo-500/20",
                iconBg: "bg-indigo-500/15",
                dot: "bg-indigo-400",
              },
              {
                t: "Clear ads review",
                d: "CPP, ROAS and revenue in one view. Obvious what to scale, obvious what to kill.",
                icon: "📊",
                accent: "from-fuchsia-500/20 to-fuchsia-500/5",
                border: "border-fuchsia-500/20",
                iconBg: "bg-fuchsia-500/15",
                dot: "bg-fuchsia-400",
              },
              {
                t: "Decisions, not dashboards",
                d: "Built so you know what to do today — not so you spend all day staring at charts.",
                icon: "⚡",
                accent: "from-emerald-500/20 to-emerald-500/5",
                border: "border-emerald-500/20",
                iconBg: "bg-emerald-500/15",
                dot: "bg-emerald-400",
              },
            ].map((f) => (
              <div
                key={f.t}
                className={cx(
                  "group relative rounded-2xl border p-5 bg-gradient-to-b backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1",
                  f.border, f.accent
                )}
              >
                <div className={cx("flex h-10 w-10 items-center justify-center rounded-xl mb-4 text-xl", f.iconBg)}>
                  {f.icon}
                </div>
                <div className="font-semibold text-sm mb-2">{f.t}</div>
                <p className="text-xs text-white/60 leading-relaxed">{f.d}</p>
                <span className={cx("absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full opacity-60", f.dot)} />
              </div>
            ))}
          </div>

          {/* Proof strip */}
          <div className="mt-10 flex flex-wrap gap-6 items-center">
            {[
              { n: "+36%", l: "more conversions tracked" },
              { n: "–41%", l: "lower cost per purchase" },
              { n: "3.2→6.8", l: "ROAS improvement" },
            ].map(s => (
              <div key={s.l} className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-white">{s.n}</span>
                <span className="text-sm text-white/45">{s.l}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS MARQUEE */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-30"
          style={{ background: "radial-gradient(700px 260px at 50% 0%, rgba(34,211,238,0.3), transparent 65%)" }}
        />
        <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">What customers say</div>
            <h3 className="text-2xl md:text-3xl font-extrabold">Loved by performance teams</h3>
          </div>
          <div className="flex items-center gap-1.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
            <span className="text-sm text-white/50 ml-1">5.0</span>
          </div>
        </div>
        <Marquee
          items={[
            { quote: "Finally trustable ROAS. Cut CPA by 38% in 2 weeks.", author: "Mia K.", role: "Growth @ Tempo" },
            { quote: "Attribution models that actually reflect our funnel.", author: "Jon A.", role: "CMO @ Apex" },
            { quote: "CPP dropped and scale got easier. 10/10.", author: "Sofia R.", role: "Paid Lead @ Nova" },
            { quote: "We can defend budgets with clarity now.", author: "Evan D.", role: "Founder @ North" },
            { quote: "Finally trustable ROAS. in 2 weeks.", author: "Mia K.", role: "Growth @ Tempo" },
          ]}
        />
      </section>

      <WaveDivider />

      {/* HOW IT WORKS */}
      <section id="how" className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/25 via-transparent to-black/40" />
        <div className="mx-auto max-w-7xl px-4 grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
          <div>
            <SectionTitle>Get value in 3 steps</SectionTitle>
            <p className="text-white/75 max-w-xl">
              No 30-page setup doc. Install once, connect your ad platforms, and start
              seeing which campaigns actually drive sales.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  n: "1",
                  t: "Connect your store",
                  d: "Install once on Shopify. No fragile scripts or manual hacks.",
                },
                {
                  n: "2",
                  t: "Link ad platforms",
                  d: "Connect Meta and Google. We sync spend, conversions and server events.",
                },
                {
                  n: "3",
                  t: "Decide with clarity",
                  d: "See which campaigns and creatives actually drive profit and then scale with confidence.",
                },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-sm font-bold">
                    {s.n}
                  </div>
                  <div>
                    <div className="font-semibold">{s.t}</div>
                    <p className="text-sm text-white/70">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={150} className="md:mt-6">
            <NeonCard
              tilt={false}
              className="p-5 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-fuchsia-500/10"
            >
              <div className="text-xs font-semibold text-cyan-300 mb-1">
                TRACKING THAT DOES NOT FALL APART
              </div>
              <h3 className="text-lg font-bold">
                Never lose sales just because tracking broke.
              </h3>
              <p className="mt-3 text-sm text-white/75">
                Pixels miss a lot of sales because of ad blockers, iOS updates and strict
                cookie rules. Attribix pairs pixel data with server-side tracking so those
                lost sales are recovered and your reports stay close to reality.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-white/75">
                <li>• Server-side and browser tracking working together</li>
                <li>• Recover sales pixels miss, especially on iOS and ad-blocked traffic</li>
                <li>• Automatic tracking health checks so you see when something breaks</li>
                <li>• Clean, model-ready data for attribution and future AI</li>
              </ul>
            </NeonCard>
          </Reveal>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="relative py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0 0, rgba(56,189,248,0.24), transparent 55%), radial-gradient(circle at 100% 100%, rgba(168,85,247,0.18), transparent 55%), linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "auto, auto, 46px 46px, 46px 46px",
          }}
        />

        <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-[1fr,1.2fr] items-center">
          {/* Left copy */}
          <div className="space-y-6 max-w-lg">
            <SectionTitle>Integrations</SectionTitle>

            <p className="text-base md:text-lg text-white/80">
              One click to connect your ad platforms and storefront. Attribix sits
              in the middle and keeps the data clean — no custom dev needed.
            </p>

            <div className="space-y-2 text-sm md:text-base text-white/75">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Meta and Google both see the same cleaned, deduplicated events.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shrink-0" />
                <span>Shopify connected without fragile theme edits or custom dev work.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shrink-0" />
                <span>Server-side + pixel stitched together into one source of truth.</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            <IntegrationsDiagram />
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* CASE STUDIES */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[#050819]/95" />
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-2xl font-extrabold mb-2">
            Know what works. Fix what does not.
          </h3>
          <p className="text-white/75 max-w-2xl mb-8 text-sm">
            These are examples, not guarantees. But the pattern is the same: once tracking
            is clean it is easier to scale the right things.
          </p>
          <CaseStudies
            items={[
              {
                brand: "Apex",
                metric: "+22% tracked purchases",
                summary: "Server-side events filled the gaps their pixels were missing.",
              },
              {
                brand: "Tempo",
                metric: "ROAS 3.2 → 6.8",
                summary:
                  "Channel split and model changes based on real, cleaned data.",
              },
              {
                brand: "Glow",
                metric: "CPP ↓ 41%",
                summary:
                  "Honest reporting made it obvious which ads to kill and which to push.",
              },
            ]}
          />
        </div>
      </section>

      <WaveDivider />

      {/* SUMMARY STRIP */}
      <section className="relative py-6">
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm">
            <p className="text-white/80">
              Clean tracking → honest attribution → smarter decisions.
            </p>
            <p className="text-white/60">
              Pixels were not built for today’s privacy rules. Attribix fills the gaps so
              your ad data matches reality.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-24">
        <SectionTitle>Pricing</SectionTitle>
        <p className="mt-2 text-white/75">Start free. Upgrade when you see value.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Starter",
              price: 69,
              note: "First 15 days free",
              features: ["Up to 50k sessions", "Basic attribution", "Email support"],
              highlight: false,
            },
            {
              name: "Growth",
              price: 149,
              note: "15-day free trial",
              features: ["Up to 250k sessions", "All models", "Slack alerts"],
              highlight: true,
            },
            {
              name: "Scale",
              price: 299,
              note: "15-day free trial",
              features: ["Unlimited", "API access", "Priority support"],
              highlight: false,
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={100 + i * 120}>
              <NeonCard
                className={cx(
                  "p-6 relative bg-gradient-to-br from-sky-500/10 via-slate-900/60 to-fuchsia-500/10",
                  p.highlight &&
                    "ring-1 ring-cyan-400/40 shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_25px_80px_-20px_rgba(34,211,238,0.25)]"
                )}
              >
                <TiltCard>
                  {p.highlight && (
                    <span className="absolute -top-3 right-4 rounded-full border border-cyan-300/30 bg-cyan-400/15 px-2 py-0.5 text-[10px] text-cyan-200">
                      Most Popular
                    </span>
                  )}
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="mt-2 text-3xl font-extrabold">
                    ${p.price}{" "}
                    <span className="text-sm font-normal text-white/60">/mo</span>
                  </div>
                  <div className="text-xs text-emerald-300 mt-1">{p.note}</div>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    {p.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={cx(
                      "mt-6 inline-block rounded-lg border px-4 py-2 transition",
                      p.highlight
                        ? "border-cyan-300/40 bg-cyan-400/10 hover:bg-cyan-400/20"
                        : "border-white/15 hover:bg-white/10"
                    )}
                  >
                    Get started
                  </a>
                </TiltCard>
              </NeonCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24">
        <Reveal>
          <NeonCard
            className="relative overflow-hidden p-6 md:p-10 bg-gradient-to-r from-cyan-500/20 via-transparent to-fuchsia-500/25"
            tilt={false}
          >
            <div className="absolute inset-0 -z-10 opacity-60">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/25 blur-2xl" />
              <div className="absolute right-0 -bottom-16 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-extrabold">Ready to see true ROAS?</h3>
                <p className="text-white/80">
                  Open your analytics and review ads, tracking and attribution in one
                  place.
                </p>
              </div>
              <MagneticButton href="/login">Launch Analytics</MagneticButton>
            </div>
          </NeonCard>
        </Reveal>
      </section>

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
