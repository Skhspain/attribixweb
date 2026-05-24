// src/app/ads/page.tsx — Standalone landing page for Meta & Google Ads campaigns
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
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

function AttributionDiagram() {
  const { ref, seen } = useReveal();

  const channels = [
    { label: "Meta Ads", color: "from-blue-500 to-blue-400", reported: "4.8x", real: "2.4x", textColor: "text-blue-400" },
    { label: "Google Ads", color: "from-emerald-500 to-emerald-400", reported: "5.2x", real: "3.1x", textColor: "text-emerald-400" },
  ];

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/40">
        Illustrative example — Shopify store, $50k/mo ad spend
      </p>
      <h3 className="mb-6 text-base font-semibold text-white">
        Platform-reported ROAS vs. server-side attributed ROAS
      </h3>
      <div className="space-y-6">
        {channels.map((ch, i) => (
          <div key={ch.label}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-white/70">{ch.label}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="mb-1.5 text-xs text-white/40">Platform reports</p>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={cx("h-full rounded-full bg-gradient-to-r opacity-40 transition-all duration-1000", ch.color)}
                    style={{ width: seen ? "96%" : "0%", transitionDelay: `${i * 150}ms` }}
                  />
                </div>
                <p className={cx("mt-1 text-sm font-bold", ch.textColor)}>{ch.reported} ROAS</p>
              </div>
              <div>
                <p className="mb-1.5 text-xs text-white/40">Attribix server-side</p>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={cx("h-full rounded-full bg-gradient-to-r transition-all duration-1000", ch.color)}
                    style={{ width: seen ? `${(parseFloat(ch.real) / 6) * 100}%` : "0%", transitionDelay: `${i * 150 + 200}ms` }}
                  />
                </div>
                <p className="mt-1 text-sm font-bold text-cyan-300">{ch.real} ROAS</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3">
        <p className="text-xs text-cyan-300">
          <strong>Outcome:</strong> Accurate attribution allowed this store to reallocate budget toward genuinely profitable campaigns — recovering 38% of previously misdirected spend.
        </p>
      </div>
    </div>
  );
}

export default function AdsLandingPage() {
  return (
    <div className="min-h-screen bg-[#050819] font-sans text-white antialiased">

      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.08] blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-600/6 blur-[100px]" />
      </div>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050819]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
            <span className="text-base font-bold tracking-tight text-white">Attribix</span>
          </Link>
          <CtaButton href="/book-demo" className="py-2.5 text-xs">
            Book a free consultation
          </CtaButton>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative px-5 pb-20 pt-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
          <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Server-side attribution for Shopify
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Attribution you can{" "}
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            actually rely on.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          Platform ROAS numbers are often inflated by double-counting, iOS blind spots,
          and last-click bias. Attribix gives Shopify stores{" "}
          <strong className="text-white/90">server-side, de-duplicated attribution</strong>{" "}
          — so every budget decision is grounded in what actually converted.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <CtaButton href="/book-demo" className="w-full sm:w-auto">
            Book a free consultation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </CtaButton>
          <CtaButton href="/pricing" variant="outline" className="w-full sm:w-auto">
            View pricing
          </CtaButton>
        </div>

        <p className="mt-4 text-xs text-white/35">No commitment required · Connects in under 5 minutes</p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
          <p className="w-full text-xs font-medium uppercase tracking-widest text-white/30">Works across</p>
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

      {/* ── STATS ── */}
      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard value="37%" label="Average misdirected spend recovered" delay={0} />
          <StatCard value="98%" label="Attribution accuracy via server-side" delay={100} />
          <StatCard value="2.1×" label="Improvement in ROAS visibility" delay={200} />
          <StatCard value="< 5 min" label="Time to connect Shopify and ad accounts" delay={300} />
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-indigo-400">
              The challenge
            </div>
            <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Standard pixel tracking is no longer sufficient
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-white/55">
              iOS 14+, third-party cookie deprecation, and ad blockers mean client-side
              pixels miss up to <strong className="text-white">40% of real conversions.</strong>{" "}
              Meta and Google fill those gaps with statistical modelling — and both
              platforms frequently claim credit for the same order.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <Reveal delay={100}>
              <div className="space-y-4">
                {[
                  {
                    emoji: "🔁",
                    title: "Cross-platform double-counting",
                    body: "Meta and Google each attribute the same purchase to their own campaigns. Combined, the numbers look strong — until they're reconciled against actual Shopify revenue.",
                  },
                  {
                    emoji: "👁️",
                    title: "iOS privacy blind spots",
                    body: "Roughly 65% of iPhone users have opted out of tracking. Those conversions still happen — they simply don't reach your ad manager via the pixel.",
                  },
                  {
                    emoji: "📉",
                    title: "Optimising on inaccurate signals",
                    body: "When platforms optimise based on inflated conversion data, they surface audiences that appear profitable but aren't — compounding the misallocation over time.",
                  },
                  {
                    emoji: "⏱️",
                    title: "Manual reconciliation overhead",
                    body: "Cross-referencing Meta Business Suite, Google Ads, and Shopify admin to build a coherent picture is time-intensive and rarely conclusive.",
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

            <Reveal delay={200}>
              <AttributionDiagram />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── THE SOLUTION ── */}
      <section className="border-t border-white/10 bg-gradient-to-b from-indigo-950/30 to-transparent px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-cyan-400">
              How Attribix works
            </div>
            <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              A single, accurate source of truth
            </h2>
            <p className="mx-auto mb-16 max-w-xl text-center text-base leading-relaxed text-white/55">
              Attribix combines server-side event firing with browser-level signals
              to build a complete, de-duplicated conversion picture — matched against
              real Shopify orders.
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
              title="Server-side Conversions API"
              body="Events fire directly from your Shopify store's server — bypassing iOS restrictions, browser-based ad blockers, and cookie limitations entirely."
            />
            <FeatureCard
              delay={100}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="True ROAS, not platform ROAS"
              body="Revenue is attributed per campaign, ad set, and ad — reconciled against real Shopify orders, not platform-modelled estimates."
            />
            <FeatureCard
              delay={200}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              }
              title="Cross-channel de-duplication"
              body="When Meta and Google both claim a conversion, Attribix applies your chosen attribution model and assigns credit once — and only once."
            />
            <FeatureCard
              delay={300}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Unified performance dashboard"
              body="Meta Ads, Google Ads, and Shopify revenue in one view — with consistent definitions and no manual reconciliation required."
            />
            <FeatureCard
              delay={400}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              }
              title="UTM & campaign tracking"
              body="Built-in UTM management ensures every paid click is tagged, tracked, and reported against real revenue from day one."
            />
            <FeatureCard
              delay={500}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Native Shopify integration"
              body="No theme edits, no developer required. Connect your Shopify store and ad accounts in minutes — server-side tracking activates automatically."
            />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="border-t border-white/10 px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Getting started
            </div>
            <h2 className="mb-16 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Up and running in three steps
            </h2>
          </Reveal>

          <div className="relative grid gap-8 sm:grid-cols-3">
            <div
              aria-hidden
              className="absolute left-1/6 right-1/6 top-8 hidden h-px bg-gradient-to-r from-indigo-500/30 via-cyan-500/30 to-indigo-500/30 sm:block"
            />
            {[
              {
                step: "01",
                title: "Book a consultation",
                body: "We'll walk through your current attribution setup, identify gaps, and show you what accurate data looks like for your specific store.",
              },
              {
                step: "02",
                title: "Connect in minutes",
                body: "Install the Shopify app, authorise your Meta and Google accounts. Server-side tracking goes live immediately — no code changes needed.",
              },
              {
                step: "03",
                title: "Make better decisions",
                body: "Your dashboard shows de-duplicated, server-side attributed revenue per campaign. Budget decisions become straightforward.",
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

      {/* ── TESTIMONIALS ── */}
      <section className="border-t border-white/10 bg-gradient-to-b from-indigo-950/20 to-transparent px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Client results
            </div>
            <h2 className="mb-16 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              What accurate attribution changes
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3">
            <TestimonialCard
              delay={0}
              metric="38% of ad spend reallocated to higher-ROI campaigns"
              quote="We had assumed our Meta campaigns were performing well based on reported ROAS. Server-side attribution told a different story — and allowed us to make budget decisions we could actually justify."
              name="Sarah K."
              role="Founder, Apex Skin · Shopify Plus"
            />
            <TestimonialCard
              delay={100}
              metric="22% reduction in monthly spend, same revenue"
              quote="The cross-channel de-duplication was the key insight. Google and Meta were both claiming credit for orders that email had assisted. Once we saw the real picture, the reallocation was obvious."
              name="Marcus T."
              role="Head of Growth, Tempo Gear"
            />
            <TestimonialCard
              delay={200}
              metric="Reporting time reduced from half a day to minutes"
              quote="Previously, building a reliable weekly performance view meant pulling data from three platforms and reconciling manually. Attribix replaced that entire process with a single dashboard."
              name="Priya M."
              role="Performance Marketing Lead, Glow Collective"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/10 bg-gradient-to-b from-indigo-950/15 to-transparent px-5 py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Common questions
            </div>
            <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Frequently asked
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-sm">
              {[
                {
                  q: "How does server-side attribution differ from the Meta pixel or Google tag?",
                  a: "The Meta pixel and Google tag are client-side tools — they fire from the visitor's browser. If that visitor has iOS privacy enabled, an ad blocker, or a strict browser setting, the event never reaches the platform. Attribix fires conversion events directly from your Shopify store's server, so nothing is blocked. Browser and server signals are then stitched together to avoid duplicate events.",
                },
                {
                  q: "Does it integrate with Shopify's native checkout?",
                  a: "Yes. Attribix is installed as a Shopify app and integrates natively with Shopify's order and customer data. No theme edits, custom code, or checkout modifications are required.",
                },
                {
                  q: "Will sending better conversion data to Meta and Google affect campaign performance?",
                  a: "Typically, yes — positively. When you send accurate server-side conversion data to Meta (via Conversions API) and Google (via Enhanced Conversions), the platforms' algorithms have better signals to optimise against. Most stores see measurable improvement within two to four weeks.",
                },
                {
                  q: "What's the difference between platform ROAS and the ROAS Attribix reports?",
                  a: "Platform ROAS is calculated by each ad platform using its own attribution model — often including view-through conversions and conversions also claimed by other channels. Attribix ROAS is reconciled against actual Shopify revenue, de-duplicated across channels, using your chosen attribution window.",
                },
                {
                  q: "How long does initial setup take?",
                  a: "Most stores are fully connected in under five minutes. You install the Shopify app, authorise Meta and Google, and server-side tracking is live. Historical data imports begin immediately.",
                },
                {
                  q: "What does the free consultation involve?",
                  a: "We review your current tracking and attribution setup, identify where data is likely being lost or double-counted, and walk through what accurate attribution looks like for your store specifically. No obligations — it's a working session, not a sales call.",
                },
              ].map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="border-t border-white/10 px-5 py-24">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/50 via-[#050819] to-cyan-900/30 px-8 py-16 text-center backdrop-blur-sm">
            <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Get started
            </p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              See what your attribution data actually shows
            </h2>
            <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-white/55">
              Book a free consultation and we&apos;ll walk through your current setup,
              identify where data is being lost, and show you what accurate attribution
              looks like for your store.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CtaButton href="/book-demo">
                Book a free consultation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </CtaButton>
              <CtaButton href="/pricing" variant="outline">
                View pricing
              </CtaButton>
            </div>
            <p className="mt-5 text-xs text-white/35">
              No commitment required · Connects in under 5 minutes
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={20} height={20} />
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
