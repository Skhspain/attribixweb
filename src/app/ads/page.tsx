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

function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-cyan-50 shadow-[0_0_32px_rgba(255,255,255,0.10)] hover:shadow-[0_0_40px_rgba(6,182,212,0.20)] focus:outline-none",
        className
      )}
    >
      {children}
    </Link>
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
      <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-cyan-400 ring-1 ring-white/10">
          {icon}
        </div>
        <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/55">{body}</p>
      </div>
    </Reveal>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  result,
  delay = 0,
}: {
  quote: string;
  name: string;
  role: string;
  result: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
        <blockquote className="flex-1 text-sm leading-relaxed text-white/70 italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-6 border-t border-white/10 pt-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-xs font-bold text-white">
              {name[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{name}</p>
              <p className="text-xs text-white/40">{role}</p>
            </div>
          </div>
          <p className="text-xs font-semibold text-cyan-400 text-right max-w-[120px]">{result}</p>
        </div>
      </div>
    </Reveal>
  );
}

function AttributionDiagram() {
  const { ref, seen } = useReveal();

  const rows = [
    { label: "Meta Ads", platform: "4.8×", real: "2.4×", platformW: 80, realW: 40 },
    { label: "Google Ads", platform: "5.2×", real: "3.1×", platformW: 87, realW: 52 },
  ];

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/30">
        Illustrative — $50k/mo spend, Shopify store
      </p>
      <h3 className="mb-7 text-base font-semibold text-white">
        What platforms report vs. what actually converted
      </h3>

      <div className="space-y-7">
        {rows.map((row, i) => (
          <div key={row.label}>
            <p className="mb-3 text-xs font-medium text-white/50">{row.label}</p>
            <div className="space-y-2.5">
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs text-white/35">Platform claims</span>
                  <span className="text-xs font-bold text-white/40">{row.platform} ROAS</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-white/20 transition-all duration-1000"
                    style={{ width: seen ? `${row.platformW}%` : "0%", transitionDelay: `${i * 100}ms` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs text-white/35">Attribix server-side</span>
                  <span className="text-xs font-bold text-cyan-400">{row.real} ROAS</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 transition-all duration-1000"
                    style={{ width: seen ? `${row.realW}%` : "0%", transitionDelay: `${i * 100 + 200}ms` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
        <p className="text-xs text-white/50">
          With accurate data, this store reallocated 38% of spend — same budget, meaningfully better returns.
        </p>
      </div>
    </div>
  );
}

export default function AdsLandingPage() {
  return (
    <div className="min-h-screen bg-[#050819] font-sans text-white antialiased">

      {/* Aurora */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-600/5 blur-[100px]" />
      </div>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050819]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
            <span className="text-base font-bold tracking-tight text-white">Attribix</span>
          </Link>
          <Link
            href="/signup"
            className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white"
          >
            Start free trial
          </Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative px-5 pb-24 pt-24 text-center">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/50">
            We work with a small number of stores at a time
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.75rem]">
            We know what your ads
            <br />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              are actually doing.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg">
            Most stores are optimising toward numbers their ad platforms invented.
            We fix that — with server-side attribution that reflects what actually
            happened, not what Meta or Google chose to claim.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <PrimaryButton href="/signup">
              Start your free trial
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </PrimaryButton>
          </div>

          <p className="mt-4 text-xs text-white/25">
            We occasionally open spots for new stores. No credit card required to start.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <p className="w-full text-[11px] font-medium uppercase tracking-widest text-white/20">Works across</p>
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
              className="h-6 w-auto object-contain opacity-30 grayscale transition-all hover:opacity-60 hover:grayscale-0"
            />
          ))}
        </div>
      </section>

      {/* ── DIVIDER STAT STRIP ── */}
      <section className="border-y border-white/[0.07] bg-white/[0.015] px-5 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { value: "37%", label: "Average spend recovered from misattributed campaigns" },
            { value: "98%", label: "Attribution accuracy with server-side tracking" },
            { value: "< 5 min", label: "To connect Shopify and ad accounts" },
            { value: "2–4 wks", label: "Before campaign performance measurably improves" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="px-6 py-4 text-center">
                <p className="text-2xl font-extrabold text-white">{s.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/35">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">The problem</p>
            <h2 className="mb-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Standard pixel tracking stopped working years ago.
              Most stores haven&apos;t noticed yet.
            </h2>
            <p className="mb-16 max-w-xl text-base leading-relaxed text-white/50">
              iOS 14+, cookie deprecation, and ad blockers mean your pixel misses
              up to 40% of real conversions. Platforms fill the gap with modelling —
              and both Meta and Google claim credit for the same sales.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal delay={100}>
              <div className="space-y-3">
                {[
                  {
                    title: "Double-counted conversions",
                    body: "Meta and Google each attribute the same purchase to their campaigns. Totalled up, reported ROAS looks strong — until it's compared to actual Shopify revenue.",
                  },
                  {
                    title: "iOS blind spots",
                    body: "~65% of iPhone users have opted out of tracking. Those conversions still happen. They just don't reach your ad manager.",
                  },
                  {
                    title: "Optimising toward the wrong signal",
                    body: "Platforms optimising on inflated data find audiences that look like buyers — but aren't profitable. The misallocation compounds quietly over time.",
                  },
                  {
                    title: "No single source of truth",
                    body: "Meta, Google, and Shopify each tell a different story. Reconciling them manually is slow and still doesn't resolve the attribution conflict.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5"
                  >
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/45">{item.body}</p>
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

      {/* ── WHAT WE DO ── */}
      <section className="border-t border-white/[0.07] bg-gradient-to-b from-indigo-950/25 to-transparent px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">What Attribix does</p>
            <h2 className="mb-4 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              One accurate number for every ad dollar.
            </h2>
            <p className="mb-16 max-w-lg text-base leading-relaxed text-white/50">
              Server-side attribution, cross-channel de-duplication, and real
              Shopify revenue — in a single dashboard. We&apos;ve done this long enough
              to know exactly where most setups break.
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
              body="Events fire directly from your Shopify server — bypassing iOS restrictions, ad blockers, and cookie limits entirely."
            />
            <FeatureCard
              delay={100}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="True ROAS"
              body="Revenue attributed per campaign, ad set, and ad — reconciled against real Shopify orders, not platform estimates."
            />
            <FeatureCard
              delay={200}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              }
              title="Cross-channel de-duplication"
              body="When Meta and Google both claim a sale, credit is assigned once — using your chosen attribution model."
            />
            <FeatureCard
              delay={300}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Unified dashboard"
              body="Meta Ads, Google Ads, and Shopify revenue side-by-side — consistent definitions, no reconciliation needed."
            />
            <FeatureCard
              delay={400}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              }
              title="UTM & campaign tracking"
              body="Every paid click tagged, attributed, and reported against real revenue from the moment it lands."
            />
            <FeatureCard
              delay={500}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Connects in minutes"
              body="No developer, no theme edits. Install the Shopify app, connect your ad accounts, and you're live."
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="border-t border-white/[0.07] px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Results</p>
            <h2 className="mb-16 max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl">
              What changes when the data is right.
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3">
            <TestimonialCard
              delay={0}
              result="38% of spend reallocated"
              quote="We thought Meta was our best channel. Attribix showed us half of what it was claiming was already converted through email. That reallocation funded our best quarter on record."
              name="Sarah K."
              role="Founder, Apex Skin · Shopify Plus"
            />
            <TestimonialCard
              delay={100}
              result="22% less spend, same revenue"
              quote="Google and Meta were both claiming credit for email-assisted orders. Once we saw the real picture, cutting spend was obvious. We just needed someone to show us the actual numbers."
              name="Marcus T."
              role="Head of Growth, Tempo Gear"
            />
            <TestimonialCard
              delay={200}
              result="Reporting down from hours to minutes"
              quote="I used to spend Monday mornings reconciling three dashboards that never agreed. Now I look at one number and know exactly where to move budget. It's not a small thing."
              name="Priya M."
              role="Performance Lead, Glow Collective"
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="border-t border-white/[0.07] px-5 py-28">
        <Reveal>
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/40 via-[#050819] to-cyan-900/20 px-8 py-20 text-center">
            <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/8 blur-3xl" />

            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
              We work with a limited number of stores
            </p>
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              If you&apos;re ready to see what&apos;s real,
              <br />start a free trial.
            </h2>
            <p className="mx-auto mb-10 max-w-sm text-sm leading-relaxed text-white/40">
              No credit card. No setup fee. Connect your store, see your actual
              attribution data, and decide from there.
            </p>

            <PrimaryButton href="/signup" className="mx-auto">
              Start free trial
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </PrimaryButton>
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.07] px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={20} height={20} />
            <span className="text-sm font-semibold text-white/50">Attribix</span>
          </Link>
          <div className="flex gap-6 text-xs text-white/25">
            <Link href="/privacy" className="transition-colors hover:text-white/50">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white/50">Terms</Link>
            <Link href="/" className="transition-colors hover:text-white/50">Home</Link>
          </div>
          <p className="text-xs text-white/20">© {new Date().getFullYear()} Attribix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
