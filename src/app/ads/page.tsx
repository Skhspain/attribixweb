// src/app/ads/page.tsx — Standalone landing page for Meta & Google Ads campaigns
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Utilities
───────────────────────────────────────────── */
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

function useReveal(threshold = 0.15) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setSeen(true); io.disconnect(); }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
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

/* ─────────────────────────────────────────────
   Reusable CTA button
───────────────────────────────────────────── */
function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";
  const variants = {
    primary:
      "bg-white text-slate-900 hover:bg-cyan-50 shadow-[0_0_24px_rgba(255,255,255,0.12)] hover:shadow-[0_0_32px_rgba(6,182,212,0.25)]",
    outline:
      "border border-white/20 text-white hover:border-cyan-400/50 hover:bg-white/5",
  };
  return (
    <Link href={href} className={cx(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

/* ─────────────────────────────────────────────
   Stat card
───────────────────────────────────────────── */
function StatCard({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-sm">
        <p className="text-3xl font-extrabold text-white">{value}</p>
        <p className="mt-1 text-sm text-white/60">{label}</p>
      </div>
    </Reveal>
  );
}

/* ─────────────────────────────────────────────
   Feature card
───────────────────────────────────────────── */
function FeatureCard({
  icon,
  title,
  body,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-cyan-400 ring-1 ring-white/10">
          {icon}
        </div>
        <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/60">{body}</p>
      </div>
    </Reveal>
  );
}

/* ─────────────────────────────────────────────
   Testimonial card
───────────────────────────────────────────── */
function TestimonialCard({
  quote,
  name,
  role,
  metric,
  delay = 0,
}: {
  quote: string;
  name: string;
  role: string;
  metric: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <p className="mb-4 text-sm font-semibold tracking-wide text-cyan-400">{metric}</p>
        <blockquote className="flex-1 text-sm leading-relaxed text-white/75 italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-xs font-bold text-white">
            {name[0]}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-white/50">{role}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─────────────────────────────────────────────
   FAQ accordion item
───────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-white transition-colors hover:text-cyan-300"
      >
        {q}
        <svg
          className={cx("h-4 w-4 shrink-0 text-cyan-400 transition-transform duration-200", open && "rotate-180")}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={cx(
          "overflow-hidden text-sm leading-relaxed text-white/60 transition-all duration-300",
          open ? "max-h-60 pb-5 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {a}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ROAS Comparison widget (animated bars)
───────────────────────────────────────────── */
function RoasComparison() {
  const { ref, seen } = useReveal();
  const reduced = usePrefersReducedMotion();
  const progress = seen && !reduced ? 1 : 0;

  const bars = [
    { label: "Meta Ads Claims", value: 4.8, color: "from-blue-500 to-blue-400", textColor: "text-blue-400", note: "Inflated (pixel-only)" },
    { label: "Google Ads Claims", value: 5.2, color: "from-emerald-500 to-emerald-400", textColor: "text-emerald-400", note: "Inflated (last-click)" },
    { label: "Attribix True ROAS", value: 2.9, color: "from-indigo-500 to-cyan-400", textColor: "text-cyan-300", note: "Accurate (server-side)" },
  ];
  const max = 6;

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
    >
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/40">
        Real example — Shopify store, $50k/mo spend
      </p>
      <h3 className="mb-6 text-base font-semibold text-white">
        What your ad platforms report vs. what&apos;s real
      </h3>
      <div className="space-y-5">
        {bars.map((bar, i) => (
          <div key={bar.label}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm text-white/70">{bar.label}</span>
              <span className={cx("text-sm font-bold", bar.textColor)}>{bar.value}x ROAS</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className={cx("h-full rounded-full bg-gradient-to-r transition-all duration-1000", bar.color)}
                style={{
                  width: `${(bar.value / max) * 100 * progress}%`,
                  transitionDelay: `${i * 150}ms`,
                }}
              />
            </div>
            <p className="mt-1 text-xs text-white/40">{bar.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3">
        <p className="text-xs text-cyan-300">
          <strong>Result:</strong> Without Attribix, this store was overspending by ~40% on ads that appeared profitable but weren&apos;t.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main page
───────────────────────────────────────────── */
export default function AdsLandingPage() {
  return (
    <div className="min-h-screen bg-[#050819] font-sans text-white antialiased">

      {/* ── Aurora background ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.08] blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-600/6 blur-[100px]" />
      </div>

      {/* ════════════════════════════════════════
          MINIMAL HEADER (no nav distractions)
      ════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050819]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/assets/icons/logo.svg" alt="Attribix" width={28} height={28} />
            <span className="text-base font-bold tracking-tight text-white">Attribix</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden text-sm text-white/60 transition-colors hover:text-white sm:block"
            >
              Sign in
            </Link>
            <CtaButton href="/signup" className="py-2.5 text-xs">
              Start free trial
            </CtaButton>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative px-5 pb-20 pt-20 text-center">
        {/* Ad badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
          <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Built for Meta & Google Ads marketers
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Your ads are{" "}
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            lying to you.
          </span>
          <br />
          Here&apos;s the truth.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          Meta claims 4.8x ROAS. Google claims 5.2x. Your bank account tells a
          different story. Attribix gives Shopify stores{" "}
          <strong className="text-white/90">accurate, server-side attribution</strong>{" "}
          so you know exactly which ads are profitable — and which are burning cash.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <CtaButton href="/signup" className="w-full sm:w-auto">
            Start free — 14 days
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </CtaButton>
          <CtaButton href="/book-demo" variant="outline" className="w-full sm:w-auto">
            Book a 20-min demo
          </CtaButton>
        </div>

        <p className="mt-4 text-xs text-white/35">No credit card required · Connects in 5 minutes · Cancel anytime</p>

        {/* Trust logos */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
          <p className="w-full text-xs font-medium uppercase tracking-widest text-white/30">Tracks your ads on</p>
          {[
            { src: "/assets/logos/meta.svg", alt: "Meta", w: 64 },
            { src: "/assets/logos/google.svg", alt: "Google Ads", w: 96 },
            { src: "/assets/logos/shopify.svg", alt: "Shopify", w: 80 },
          ].map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={28}
              className="h-6 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-80 hover:grayscale-0"
            />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════════ */}
      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard value="37%" label="Average wasted ad spend recovered" delay={0} />
          <StatCard value="2.1×" label="Improvement in true ROAS clarity" delay={100} />
          <StatCard value="98%" label="Attribution accuracy (server-side)" delay={200} />
          <StatCard value="5 min" label="Time to connect Shopify + ads" delay={300} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE PROBLEM
      ════════════════════════════════════════ */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-indigo-400">
              The problem
            </div>
            <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ad attribution broke — and most stores don&apos;t know it
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-white/55">
              iOS 14+, Chrome blocking third-party cookies, and aggressive ad blockers means
              your pixel misses up to <strong className="text-white">40% of real conversions.</strong>{" "}
              Both Meta and Google fill the gaps with statistical modeling — and both claim
              credit for the same sale.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            {/* Pain points */}
            <Reveal delay={100}>
              <div className="space-y-4">
                {[
                  {
                    emoji: "🔁",
                    title: "Double-counted conversions",
                    body: "Meta and Google each claim the same purchase. Add them up and your combined ROAS looks great — until you check bank revenue.",
                  },
                  {
                    emoji: "👁️",
                    title: "Blind spots from iOS privacy",
                    body: "iOS 14.5+ opt-outs block the Meta pixel for ~65% of iPhone users. Those sales still happen — they're just invisible to your ad manager.",
                  },
                  {
                    emoji: "📉",
                    title: "Optimizing toward the wrong signals",
                    body: "When your ad platform optimizes on inflated conversion data, it finds audiences that look like converters — but aren't profitable in reality.",
                  },
                  {
                    emoji: "⏱️",
                    title: "Hours lost across multiple dashboards",
                    body: "Switching between Meta Business Suite, Google Ads, and Shopify admin to reconcile numbers is a full-time job — and the numbers never match.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/55">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ROAS comparison widget */}
            <Reveal delay={200}>
              <RoasComparison />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE SOLUTION
      ════════════════════════════════════════ */}
      <section className="border-t border-white/10 bg-gradient-to-b from-indigo-950/30 to-transparent px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-cyan-400">
              The solution
            </div>
            <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              One source of truth for every ad dollar
            </h2>
            <p className="mx-auto mb-16 max-w-xl text-center text-base leading-relaxed text-white/55">
              Attribix stitches server-side events with browser signals to build
              a complete, de-duplicated picture of every conversion — across Meta,
              Google, and your Shopify storefront.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              delay={0}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              }
              title="Server-side conversion API"
              body="Events fire directly from your Shopify store's server — completely bypassing iOS restrictions, ad blockers, and cookie limits."
            />
            <FeatureCard
              delay={100}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="True ROAS — not platform ROAS"
              body="See revenue actually attributed to each campaign, ad set, and ad — reconciled against real Shopify orders, not modeled estimates."
            />
            <FeatureCard
              delay={200}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              }
              title="Cross-channel de-duplication"
              body="When Meta and Google both claim the same sale, Attribix uses your chosen attribution model to assign credit once — and only once."
            />
            <FeatureCard
              delay={300}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Unified ads dashboard"
              body="Meta Ads, Google Ads, and Shopify revenue side-by-side in one view. No more tab-switching or spreadsheet reconciliation."
            />
            <FeatureCard
              delay={400}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              }
              title="UTM & campaign tracking"
              body="Built-in UTM builder and campaign tracking so every paid click is tagged, attributed, and reported against real revenue from the start."
            />
            <FeatureCard
              delay={500}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Connect in 5 minutes"
              body="No code, no developer needed. Install the Shopify app, connect your ad accounts, and see your real attribution data immediately."
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════ */}
      <section className="border-t border-white/10 px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-indigo-400">
              How it works
            </div>
            <h2 className="mb-16 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Up and running in three steps
            </h2>
          </Reveal>

          <div className="relative grid gap-8 sm:grid-cols-3">
            {/* Connector line */}
            <div
              aria-hidden
              className="absolute left-1/6 right-1/6 top-8 hidden h-px bg-gradient-to-r from-indigo-500/30 via-cyan-500/30 to-indigo-500/30 sm:block"
            />

            {[
              {
                step: "01",
                title: "Install the Shopify app",
                body: "Add Attribix from the Shopify app store. Server-side tracking activates automatically — no theme edits required.",
              },
              {
                step: "02",
                title: "Connect Meta & Google",
                body: "Authorize your Meta Business Suite and Google Ads accounts. Attribix pulls spend, impressions, and clicks in real time.",
              },
              {
                step: "03",
                title: "See your real ROAS",
                body: "Within minutes, your dashboard shows de-duplicated, server-side attributed revenue for every campaign. No guesswork.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 150}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/30 to-cyan-600/20 backdrop-blur-sm">
                    <span className="text-2xl font-extrabold text-white/30">{item.step}</span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════ */}
      <section className="border-t border-white/10 bg-gradient-to-b from-indigo-950/20 to-transparent px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Social proof
            </div>
            <h2 className="mb-16 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              What Shopify stores are saying
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3">
            <TestimonialCard
              delay={0}
              metric="+$28k recovered ad spend in 60 days"
              quote="We thought our Meta campaigns were crushing it at 5x ROAS. Attribix showed us the real number was 2.3x. Painful — but we immediately reallocated budget and our profitability jumped."
              name="Sarah K."
              role="Founder, Apex Skin · Shopify Plus"
            />
            <TestimonialCard
              delay={100}
              metric="Cut monthly ad spend by 22%, same revenue"
              quote="The cross-channel de-duplication alone was worth it. Google and Meta were both claiming our email-assisted orders. We were funding both platforms for work email was doing for free."
              name="Marcus T."
              role="Head of Growth, Tempo Gear"
            />
            <TestimonialCard
              delay={200}
              metric="3x faster reporting — one dashboard"
              quote="Before Attribix I spent Monday mornings reconciling numbers across four tabs. Now I open one dashboard and immediately know where to shift budget. Game-changer for a lean team."
              name="Priya M."
              role="Performance Marketing Lead, Glow Collective"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PRICING
      ════════════════════════════════════════ */}
      <section className="border-t border-white/10 px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Pricing
            </div>
            <h2 className="mb-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Start free. Scale as you grow.
            </h2>
            <p className="mx-auto mb-16 max-w-md text-center text-base text-white/55">
              14-day free trial on all plans. No credit card required.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$39",
                period: "/mo",
                highlight: false,
                badge: null,
                desc: "Perfect for stores starting with paid ads",
                features: [
                  "300 orders tracked / month",
                  "Meta & Google Ads data",
                  "Server-side conversion API",
                  "UTM builder",
                  "30 days analytics history",
                ],
              },
              {
                name: "Growth",
                price: "$79",
                period: "/mo",
                highlight: true,
                badge: "Most popular",
                desc: "For scaling stores that need full attribution",
                features: [
                  "2,500 orders tracked / month",
                  "Full cross-channel attribution",
                  "De-duplication across platforms",
                  "90 days analytics history",
                  "Product feed — Google & Meta",
                  "Priority support",
                ],
              },
              {
                name: "Pro",
                price: "$149",
                period: "/mo",
                highlight: false,
                badge: null,
                desc: "For high-volume stores and agencies",
                features: [
                  "Unlimited orders tracked",
                  "365 days analytics history",
                  "Visitor flow analysis",
                  "Custom attribution windows",
                  "Agency multi-store management",
                  "Dedicated onboarding",
                ],
              },
            ].map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <div
                  className={cx(
                    "relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300",
                    plan.highlight
                      ? "border-cyan-500/40 bg-gradient-to-b from-indigo-900/40 to-cyan-900/10 shadow-[0_0_60px_rgba(6,182,212,0.12)]"
                      : "border-white/10 bg-white/5"
                  )}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-white shadow-[0_0_16px_rgba(6,182,212,0.5)]">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-white/60">{plan.name}</p>
                    <div className="mt-1 flex items-end gap-1">
                      <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                      <span className="mb-1 text-sm text-white/40">{plan.period}</span>
                    </div>
                    <p className="mt-2 text-xs text-white/50">{plan.desc}</p>
                  </div>
                  <ul className="mb-6 flex-1 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/signup"
                    className={cx(
                      "block rounded-full py-3 text-center text-sm font-semibold transition-all duration-200",
                      plan.highlight
                        ? "bg-white text-slate-900 hover:bg-cyan-50 shadow-[0_0_24px_rgba(255,255,255,0.15)]"
                        : "border border-white/20 text-white hover:border-cyan-400/40 hover:bg-white/5"
                    )}
                  >
                    Start free trial
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <p className="mt-8 text-center text-xs text-white/35">
              All plans include 14-day free trial · No setup fees · Cancel anytime
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section className="border-t border-white/10 bg-gradient-to-b from-indigo-950/15 to-transparent px-5 py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-indigo-400">
              FAQ
            </div>
            <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Common questions
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-sm">
              {[
                {
                  q: "How is Attribix different from the Meta pixel or Google tag?",
                  a: "The Meta pixel and Google tag are client-side tools — they fire from the visitor's browser. If that visitor has iOS privacy enabled, an ad blocker, or a strict browser setting, the event never reaches the platform. Attribix fires conversion events directly from your Shopify store's server, so nothing is blocked. We also stitch browser and server signals together to avoid duplicate events.",
                },
                {
                  q: "Does it work with Shopify's built-in tracking?",
                  a: "Yes. Attribix is installed as a Shopify app and integrates natively with Shopify's order and customer data. You don't need to edit your theme, add custom code, or modify checkout. The app handles everything automatically.",
                },
                {
                  q: "Will this affect how Meta and Google optimize my campaigns?",
                  a: "Yes — positively. When you send more accurate server-side conversion data back to Meta (via Conversions API) and Google (via Enhanced Conversions), the platforms' algorithms have better signals to optimize against. Most stores see improved campaign performance within 2–4 weeks of enabling server-side events.",
                },
                {
                  q: "What's the difference between 'platform ROAS' and 'true ROAS'?",
                  a: "Platform ROAS is what Meta or Google reports in their own ad manager — it's often inflated because they use their own attribution models, include view-through conversions, and don't account for conversions also claimed by other channels. True ROAS in Attribix is reconciled against your actual Shopify revenue, de-duplicated across channels, using your chosen attribution window and model.",
                },
                {
                  q: "How long does setup take?",
                  a: "Most stores are fully connected in under 5 minutes. You install the Shopify app, click to authorize Meta and Google, and server-side tracking is live. Historical data imports start immediately. No developer or code changes required.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes — every plan starts with a 14-day free trial. No credit card required to start. You can connect all your accounts and see your real attribution data during the trial period before deciding whether to continue.",
                },
              ].map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════ */}
      <section className="border-t border-white/10 px-5 py-24">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/50 via-[#050819] to-cyan-900/30 px-8 py-16 text-center backdrop-blur-sm">
            {/* Glow blobs */}
            <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Ready to find out?
            </p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              See your real ad performance — free for 14 days
            </h2>
            <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-white/55">
              Stop optimizing toward numbers your ad platforms made up. Connect Attribix
              today and know exactly which campaigns drive profit.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CtaButton href="/signup">
                Start free trial — no card needed
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </CtaButton>
              <CtaButton href="/book-demo" variant="outline">
                Talk to a human first
              </CtaButton>
            </div>
            <p className="mt-5 text-xs text-white/35">
              14-day free trial · Connects in 5 minutes · No developer needed
            </p>
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════════
          MINIMAL FOOTER
      ════════════════════════════════════════ */}
      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/icons/logo.svg" alt="Attribix" width={20} height={20} />
            <span className="text-sm font-semibold text-white/70">Attribix</span>
          </Link>
          <div className="flex gap-6 text-xs text-white/35">
            <Link href="/privacy" className="transition-colors hover:text-white/60">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white/60">Terms</Link>
            <Link href="/" className="transition-colors hover:text-white/60">Home</Link>
          </div>
          <p className="text-xs text-white/25">© {new Date().getFullYear()} Attribix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
