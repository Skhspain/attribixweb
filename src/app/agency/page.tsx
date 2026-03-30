"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function useReveal() {
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
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function Reveal({ children, className = "", delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number;
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
   Data
----------------------------------------------------- */
const SERVICES = [
  {
    icon: "📣",
    title: "Meta Ads Management",
    desc: "Full-funnel Meta campaigns built around your actual revenue data, not just platform ROAS. Setup, creative strategy, audience builds, and ongoing optimisation.",
    tags: ["Prospecting", "Retargeting", "Creative testing"],
  },
  {
    icon: "🔍",
    title: "Google Ads Management",
    desc: "Search, Shopping and Performance Max campaigns managed with a focus on real profit — not vanity clicks. Regular bid strategy reviews and negative keyword hygiene included.",
    tags: ["Search", "Shopping", "Performance Max"],
  },
  {
    icon: "📊",
    title: "Campaign Audits",
    desc: "A deep dive into your existing ad accounts. We find budget leaks, broken tracking, and underperforming campaigns — and give you a clear action list to fix them.",
    tags: ["Account audit", "Tracking review", "Action plan"],
  },
  {
    icon: "🎯",
    title: "Attribution Setup",
    desc: "Pair our agency work with Attribix tracking so you finally see which campaigns actually drive sales — not just which ones take credit.",
    tags: ["Server-side events", "Pixel health", "Attribution modelling"],
  },
];

const REVIEWS = [
  {
    quote: "Stian resolved a problem in our ad manager within hours and laid out a clear plan for our new campaign. Highly recommend.",
    author: "R. M.",
    role: "E-commerce founder",
    stars: 5,
  },
  {
    quote: "The results were nothing short of remarkable. Our Facebook ad performance improved dramatically after the setup.",
    author: "A. K.",
    role: "DTC brand owner",
    stars: 5,
  },
  {
    quote: "I've used Stian many times. He does a lot more than ordered and is responsive around the clock. Amazing.",
    author: "T. H.",
    role: "Growth marketer",
    stars: 5,
  },
  {
    quote: "Very knowledgeable — Stian really knows his stuff. Already excited to work on the next campaign together.",
    author: "L. P.",
    role: "Shopify store owner",
    stars: 5,
  },
];

const PROCESS = [
  {
    n: "1",
    title: "Discovery call",
    desc: "We start with a 30-minute call to understand your business, current ad setup, and what good results actually look like for you.",
  },
  {
    n: "2",
    title: "Audit & strategy",
    desc: "We review your accounts, tracking, and data quality. You get a clear strategy doc before anything goes live.",
  },
  {
    n: "3",
    title: "Launch & optimise",
    desc: "Campaigns go live. We test, iterate and scale what works — with weekly updates so you always know what's happening.",
  },
  {
    n: "4",
    title: "Clear reporting",
    desc: "Monthly reports that connect ad spend to real revenue. No fluff, no vanity metrics — just the numbers that matter.",
  },
];

/* -----------------------------------------------------
   Stars
----------------------------------------------------- */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* -----------------------------------------------------
   Page
----------------------------------------------------- */
export default function AgencyPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white overflow-hidden">

      {/* Ambient background blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-600/8 blur-3xl" />
      </div>

      <Header />

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* Left */}
          <div>
            {/* Human-run badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 7px rgba(74,222,128,0.9)" }} />
              Human-run · Top Rated since 2024
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-extrabold leading-[1.06] tracking-tight">
              Attribix{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400">
                Agency
              </span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/75 max-w-lg">
              Real people. Real campaigns. Paid ads managed by an experienced human
              marketer — not an AI autopilot. We handle Meta and Google so you can
              focus on running your business.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/book-demo"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-md hover:bg-neutral-100 transition"
              >
                Book a free strategy call
              </Link>
              <a
                href="https://www.fiverr.com/stanhenderson"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/8 transition"
              >
                View Fiverr profile →
              </a>
            </div>

            {/* Social proof strip */}
            <div className="mt-8 flex items-center gap-4">
              <Stars />
              <span className="text-sm text-white/60">Top Rated on Fiverr · 100% satisfaction</span>
            </div>
          </div>

          {/* Right — profile card */}
          <Reveal delay={100}>
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/8 via-transparent to-fuchsia-500/8" />

              <div className="relative flex items-start gap-5">
                {/* Avatar placeholder */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-2xl font-bold text-white shadow-lg">
                  S
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">Stian</span>
                    <span className="rounded-full bg-emerald-400/15 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 uppercase tracking-wide">
                      Top Rated
                    </span>
                  </div>
                  <p className="text-sm text-white/60 mt-0.5">Paid Ads Specialist · Attribix Agency</p>
                  <Stars />
                </div>
              </div>

              <blockquote className="relative mt-6 text-sm text-white/80 leading-relaxed italic border-l-2 border-cyan-400/40 pl-4">
                "I started in 3D visualisation and moved into marketing. Over the years I've run campaigns for a huge range of clients — my goal is always a long-lasting, successful relationship, not a one-off transaction."
              </blockquote>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "Top Rated", value: "Since '24" },
                  { label: "Satisfaction", value: "100%" },
                  { label: "Repeat clients", value: "Most" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/5 border border-white/8 p-3">
                    <div className="text-lg font-bold text-cyan-300">{s.value}</div>
                    <div className="text-[11px] text-white/55 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="mb-px h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold">What we do</h2>
          <p className="mt-3 text-white/65 max-w-xl">
            Hands-on campaign work from a marketer who's been in the trenches. Every
            service is done by a real person, not a template or automation.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-cyan-400/30 hover:bg-white/8 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 ring-1 ring-white/10 text-xl">
                    {s.icon}
                  </div>
                  <h3 className="font-semibold text-base">{s.title}</h3>
                </div>
                <p className="text-sm text-white/65 leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/55">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold">How it works</h2>
            <p className="mt-3 text-white/65 max-w-lg">
              Simple, transparent process. You'll know exactly what's happening at every step.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 h-full">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-sm font-bold">
                    {step.n}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold">What clients say</h2>
          <p className="mt-3 text-white/65 max-w-md">From real Fiverr reviews — no edits, no made-up quotes.</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.author} delay={i * 80}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Stars count={r.stars} />
                <blockquote className="mt-3 text-sm text-white/80 leading-relaxed">
                  "{r.quote}"
                </blockquote>
                <div className="mt-4 text-xs text-white/45">
                  {r.author} · {r.role}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Fiverr attribution */}
        <Reveal delay={200}>
          <p className="mt-6 text-xs text-white/35 text-center">
            Reviews sourced from{" "}
            <a
              href="https://www.fiverr.com/stanhenderson"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white/60 transition"
            >
              fiverr.com/stanhenderson
            </a>
          </p>
        </Reveal>
      </section>

      {/* ── WHY ATTRIBIX AGENCY ── */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[#050819]/80" />
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-fuchsia-500/10 p-8 md:p-12">
              <div className="grid gap-10 md:grid-cols-2 items-center">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
                    The Attribix difference
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold">
                    Agency work backed by{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                      real data
                    </span>
                  </h2>
                  <p className="mt-4 text-white/70 text-sm md:text-base leading-relaxed">
                    Most agencies make decisions based on the numbers inside Meta or Google.
                    Those numbers are often wrong. We pair agency management with
                    Attribix tracking so every campaign decision is based on actual
                    revenue — not platform-reported ROAS.
                  </p>
                  <Link
                    href="/book-demo"
                    className="mt-6 inline-block rounded-xl bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-neutral-100 transition"
                  >
                    Book a free strategy call
                  </Link>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: "👤", t: "Human expert, not a bot", d: "Every campaign is touched by a real person who thinks about your specific business." },
                    { icon: "📡", t: "Clean tracking built in", d: "Server-side event tracking reduces the gaps that inflate ad platform numbers." },
                    { icon: "🔁", t: "Repeat clients the norm", d: "Most clients work with us long-term because results hold up over time." },
                  ].map((f) => (
                    <div key={f.t} className="flex gap-4 rounded-xl border border-white/8 bg-white/5 p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 ring-1 ring-white/10 text-lg">
                        {f.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{f.t}</div>
                        <p className="text-xs text-white/55 mt-0.5 leading-relaxed">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to fix your ads?</h2>
          <p className="mt-4 text-white/65 max-w-lg mx-auto">
            Book a free 30-minute strategy call. No pitch deck, no pressure — just
            an honest look at your campaigns and what can be improved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/book-demo"
              className="rounded-xl bg-white text-gray-900 px-8 py-3.5 font-semibold text-sm shadow-md hover:bg-neutral-100 transition"
            >
              Book a free strategy call
            </Link>
            <a
              href="https://www.fiverr.com/stanhenderson"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-8 py-3.5 text-sm font-medium hover:bg-white/8 transition"
            >
              View Fiverr profile →
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
