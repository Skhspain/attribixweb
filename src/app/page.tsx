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
        "opacity-0 translate-y-6",
        seen && "opacity-100 translate-y-0",
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
   Constellation canvas (idle start + pause on hidden)
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

    // Idle start
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
            className="min-w-[320px] max-w-[360px] px-5 py-4 rounded-xl border border-white/10 bg-white/5"
          >
            <p className="text-sm leading-relaxed text-white/90">“{it.quote}”</p>
            <div className="mt-3 text-xs text-white/60">
              {it.author} · {it.role}
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
   Case studies grid
----------------------------------------------------- */
type CaseItem = { brand: string; metric: string; summary: string; image?: string };
function CaseStudies({ items }: { items: CaseItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((c) => (
        <NeonCard key={c.brand} className="p-5 group overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-25 group-hover:opacity-40 transition-opacity"
            style={{
              background:
                c.image ??
                "radial-gradient(600px 200px at 0% 0%, rgba(56,189,248,.25), transparent 50%)",
            }}
          />
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">{c.brand}</div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-200">
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
    <div className="relative h-12 -mb-8">
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,50 C240,80 360,20 600,40 C840,60 960,10 1200,30 C1320,40 1380,60 1440,50 L1440,100 L0,100 Z"
          fill="url(#g)"
        />
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(34,211,238,.25)" />
            <stop offset="50%" stopColor="rgba(168,85,247,.25)" />
            <stop offset="100%" stopColor="rgba(59,130,246,.25)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* -----------------------------------------------------
   Micro sparkline
----------------------------------------------------- */
function Sparkline({ w = 72, h = 22 }: { w?: number; h?: number }) {
  const ref = React.useRef<SVGPathElement | null>(null);
  React.useEffect(() => {
    const pts = Array.from({ length: 14 }, (_, i) => {
      const x = (i / (14 - 1)) * w;
      const y =
        h - ((Math.sin(i * 0.7) + 1) / 2) * (h - 4) - 2 + (Math.random() * 2 - 1);
      return [x, y] as const;
    });
    const d = "M" + pts.map((p) => p.join(",")).join(" L ");
    if (ref.current) ref.current.setAttribute("d", d);
  }, [w, h]);
  return (
    <svg width={w} height={h} className="opacity-70">
      <path
        ref={ref}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-cyan-300/70"
      />
    </svg>
  );
}

/* -----------------------------------------------------
   Animated number (continuous from previous value)
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
  restartKey?: number; // bump this to re-animate
  prefix?: string;
  suffix?: string;
}) {
  const [val, setVal] = React.useState(from);
  const prevTo = React.useRef(from);

  React.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const d = Math.max(300, duration);
    const startVal = prevTo.current; // animate from last end value
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
        prevTo.current = endVal; // lock in for next run
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
  const isCost = label.toLowerCase().includes("cost");
  const green = "bg-emerald-500/15 text-emerald-300 border-emerald-400/20";
  const red = "bg-rose-500/15 text-rose-300 border-rose-400/20";
  const chip = isCost ? green : trend === "down" ? red : green;
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-center gap-2">
        <div className="text-xs text-white/70">{label}</div>
        {typeof delta === "number" && (
          <span className={cx("text-[10px] px-1.5 py-0.5 rounded-full border", chip)}>
            {delta > 0 ? "▲" : "▼"} {Math.abs(delta)}%
          </span>
        )}
      </div>
      <div className="mt-1 text-xl font-semibold">{children}</div>
    </div>
  );
}

/* -----------------------------------------------------
   Hero Attribution Chart (looping, KPIs update per event)
----------------------------------------------------- */
type Bubble = { id: number; bar: number; label: string; cls: string; lane: number; life: number };
function HeroAttributionChart() {
  const BAR_COUNT = 36;
  const [heights, setHeights] = React.useState<number[]>(
    Array.from({ length: BAR_COUNT }, () => 0)
  );
  const [revealed, setRevealed] = React.useState(0);
  const [bubbles, setBubbles] = React.useState<Bubble[]>([]);
  const nextId = React.useRef(0);

  // KPI step progression + pulse
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

      // generate new smooth targets
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

        // animate bar i
        setHeights((prev) => {
          const copy = prev.slice();
          copy[i] = targets[i];
          return copy;
        });
        setRevealed(i + 1);

        // bubble event
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

        // advance KPI step + pulse
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

  // KPI baselines and goals
  const roasFrom = 3.2,
    roasTo = 11.0;
  const purFrom = 180,
    purTo = 260;
  const cppFrom = 19.0,
    cppTo = 3.0;

  // progress and interpolated values
  const p = Math.min(1, step / BAR_COUNT);
  const roasNow = roasFrom + (roasTo - roasFrom) * p;
  const purNow = Math.round(purFrom + (purTo - purFrom) * p);
  const cppNow = cppFrom + (cppTo - cppFrom) * p;

  // deltas vs baseline (rounded)
  const roasDeltaNow = Math.round((roasNow / roasFrom - 1) * 100);
  const purDeltaNow = Math.round((purNow / purFrom - 1) * 100);
  const cppDeltaNow = Math.round((cppFrom / cppNow - 1) * 100);

  // SSR-safe read
  const barEase =
    typeof window !== "undefined" && (window as any).__BAR_EASE_MS__
      ? (window as any).__BAR_EASE_MS__
      : 900;

  // make Counter re-run each tick (but it starts from previous value now)
  const kRestart = loopKey * 1000 + step;

  return (
    <div className="relative overflow-visible">
      {/* subtle animated glow behind the whole card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[28px] opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(1200px 320px at 70% -40%, rgba(56,189,248,.25), transparent 60%), radial-gradient(800px 200px at -10% 110%, rgba(168,85,247,.18), transparent 60%)",
          animation: "heroGlow 12s ease-in-out infinite alternate",
        }}
      />

      {/* top "search" pill */}
      <div className="h-6 w-40 rounded bg-white/10" />

      {/* KPIs */}
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

      {/* Local CSS for animations */}
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
            filter: drop-shadow(0 0 0 rgba(56,189,248,0));
          }
          40% {
            transform: scale(1.04);
            filter: drop-shadow(0 6px 14px rgba(56,189,248,0.35));
          }
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(56,189,248,0));
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
    <div id={id} className="sticky top-16 z-10 mb-6">
      <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold">
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
        className="w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
          title="Attribix demo"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

/* -----------------------------------------------------
   Copy email helper
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
        } catch {}
      }}
      className="hover:text-white/90 underline underline-offset-4"
      aria-label={`Copy ${email}`}
    >
      {ok ? "Copied!" : email}
    </button>
  );
}

/* -----------------------------------------------------
   PAGE
----------------------------------------------------- */
export default function Home() {
  const active = useScrollSpy(["features", "how", "integrations", "pricing"], 120);
  const [showDemo, setShowDemo] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

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

      {/* Global animated layers */}
      <ProgressHeader />
      <CursorSpotlight />
      <Aurora />
      <Constellation />

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
            <span className="font-semibold">Attribix</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href="/features"
              className={cx(
                "opacity-80 hover:opacity-100 relative",
                active === "features" &&
                  "opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400/70 rounded"
              )}
            >
              Features
            </Link>
            <Link
              href="/#how"
              className={cx(
                "opacity-80 hover:opacity-100 relative",
                active === "how" &&
                  "opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400/70 rounded"
              )}
            >
              How it works
            </Link>
            <Link
              href="/#integrations"
              className={cx(
                "opacity-80 hover:opacity-100 relative",
                active === "integrations" &&
                  "opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400/70 rounded"
              )}
            >
              Integrations
            </Link>
            <Link
              href="/pricing"
              className={cx(
                "opacity-80 hover:opacity-100 relative",
                active === "pricing" &&
                  "opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400/70 rounded"
              )}
            >
              Pricing
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/15"
              >
                Log in
              </Link>
              <MagneticButton href="/book-demo" className="text-sm px-4 py-2">
                Book demo
              </MagneticButton>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-2 text-xs font-medium text-white/80 hover:bg-white/10"
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

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-sm">
            <nav className="mx-auto max-w-7xl px-4 py-4 space-y-2 text-sm">
              <Link
                href="/features"
                onClick={() => setMobileOpen(false)}
                className="block py-1 text-white/80 hover:text-white"
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
                  className="block rounded-lg border border-white/20 px-4 py-2 text-center text-white/90 hover:bg-white/10"
                >
                  Log in
                </Link>
                <Link
                  href="/book-demo"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-white text-center text-gray-900 px-4 py-2 font-semibold"
                >
                  Book demo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              New — Ads Review & Attribution
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
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
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl">
              See which channels actually drive revenue. Connect Shopify or
              WooCommerce, pipe in Meta/Google/TikTok, and make decisions with
              real, trustworthy data.
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
              Works with Shopify & WordPress (WooCommerce). No heavy setup.
            </p>
          </div>

          <div className="relative mt-6 md:mt-0">
            <div className="absolute -inset-6 rounded-3xl bg-cyan-400/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm p-4 shadow-2xl">
              <HeroAttributionChart />
            </div>
          </div>
        </div>

        <DemoModal open={showDemo} onClose={() => setShowDemo(false)} />
      </section>

      {/* LOGO CLOUD */}
      <section className="relative mx-auto max-w-7xl px-4 py-10">
        <Reveal>
          <p className="text-center text-sm text-white/60 mb-6">
            Trusted by growth-minded brands
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-90">
          {["Acme", "North", "Apex", "Tempo", "Nova", "Glow"].map((n, i) => (
            <Reveal key={n} delay={i * 60}>
              <NeonCard className="py-3 flex items-center justify-center">
                <span className="text-white/70 text-sm">{n}</span>
              </NeonCard>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider />

      {/* FEATURES */}
      <section id="features" className="relative mx-auto max-w-7xl px-4 py-24">
        <SectionTitle>Why teams pick Attribix</SectionTitle>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Accurate Tracking",
              d: "Pixels + CAPI with deduplication and consent-aware capture.",
              icon: "🎯",
            },
            {
              t: "Attribution models",
              d: "Last/First, Linear, Time-Decay, and position-based.",
              icon: "🧭",
            },
            {
              t: "Ads Review",
              d: "CPP, ROAS, revenue per ad — sortable and filterable.",
              icon: "📊",
            },
            {
              t: "Real-time insights",
              d: "Fresh metrics, alerts for high CPA or low ROAS.",
              icon: "⚡",
            },
          ].map((f, i) => (
            <Reveal key={f.t} delay={100 + i * 80}>
              <NeonCard className="p-5 group">
                <TiltCard>
                  <div className="flex items-center gap-2">
                    <span className="text-xl opacity-80">{f.icon}</span>
                    <div className="text-lg font-semibold">{f.t}</div>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{f.d}</p>
                  <div className="mt-4 flex justify-end">
                    <Sparkline />
                  </div>
                  <div className="mt-2 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </TiltCard>
              </NeonCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS MARQUEE */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="text-2xl font-extrabold mb-4">Loved by performance teams</h3>
        <Marquee
          items={[
            {
              quote: "Finally trustable ROAS. Cut CPA by 38% in 2 weeks.",
              author: "Mia K.",
              role: "Growth @ Tempo",
            },
            {
              quote: "Attribution models that actually reflect our funnel.",
              author: "Jon A.",
              role: "CMO @ Apex",
            },
            {
              quote: "CPP dropped and scale got easier. 10/10.",
              author: "Sofia R.",
              role: "Paid Lead @ Nova",
            },
            {
              quote: "We can defend budgets with clarity now.",
              author: "Evan D.",
              role: "Founder @ North",
            },
          ]}
        />
      </section>

      <WaveDivider />

      {/* HOW IT WORKS */}
      <section id="how" className="relative mx-auto max-w-7xl px-4 py-24">
        <SectionTitle>Get value in 3 steps</SectionTitle>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { n: "1", t: "Connect your store", d: "Shopify or WooCommerce in minutes." },
            {
              n: "2",
              t: "Link ad platforms",
              d: "Meta, Google, TikTok OAuth — we sync spend and conversions.",
            },
            {
              n: "3",
              t: "Decide with clarity",
              d: "See which ads and channels actually drive revenue.",
            },
          ].map((s, i) => (
            <Reveal key={s.n} delay={100 + i * 100}>
              <NeonCard className="p-5">
                <TiltCard>
                  <div className="text-4xl font-extrabold text-white/70">{s.n}</div>
                  <div className="mt-3 text-lg font-semibold">{s.t}</div>
                  <p className="mt-2 text-sm text-white/70">{s.d}</p>
                </TiltCard>
              </NeonCard>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-6 hidden md:block max-w-5xl">
          <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0" />
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="relative mx-auto max-w-7xl px-4 py-24">
        <SectionTitle>Integrations</SectionTitle>
        <p className="mt-2 text-white/70">
          One click to connect your ad platforms and storefront.
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Meta", "Google", "TikTok", "Shopify", "WooCommerce"].map((n, i) => (
            <Reveal key={n} delay={100 + i * 80}>
              <NeonCard className="py-4 flex items-center justify-center group">
                <TiltCard>
                  <span className="text-sm text-white/80 group-hover:text-white transition">
                    {n}
                  </span>
                </TiltCard>
              </NeonCard>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider />

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h3 className="text-2xl font-extrabold mb-4">Case studies</h3>
        <CaseStudies
          items={[
            {
              brand: "Apex",
              metric: "+22% Purchases",
              summary:
                "Unified pixel + CAPI with de-dupe lifted tracked conversions.",
            },
            {
              brand: "Tempo",
              metric: "ROAS 3.2 → 6.8",
              summary:
                "Channel split + model comparison reallocated 34% of spend.",
            },
            {
              brand: "Glow",
              metric: "CPP ↓ 41%",
              summary:
                "Creative-level review surfaced winners and paused bleeders.",
            },
          ]}
        />
      </section>

      <WaveDivider />

      {/* PRICING */}
      <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-24">
        <SectionTitle>Pricing</SectionTitle>
        <p className="mt-2 text-white/70">Start free. Upgrade when you see value.</p>
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
                  "p-6 relative",
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
          <NeonCard className="relative overflow-hidden p-6 md:p-10" tilt={false}>
            <div className="absolute inset-0 -z-10 opacity-60">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/25 blur-2xl" />
              <div className="absolute right-0 -bottom-16 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-extrabold">Ready to see true ROAS?</h3>
                <p className="text-white/80">
                  Open your analytics and review ads & attribution now.
                </p>
              </div>
              <MagneticButton href="/login">Launch Analytics</MagneticButton>
            </div>
          </NeonCard>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={20} height={20} />
            <span>Attribix</span>
          </div>
          <div className="flex gap-4">
            <CopyEmail email="hello@attribix.app" />
            <a href="/privacy" className="hover:text-white/90">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white/90">
              Terms
            </a>
          </div>
        </div>
      </footer>

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
