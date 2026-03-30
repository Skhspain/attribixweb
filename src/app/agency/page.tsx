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
  { quote: "I'm totally satisfied with his services. He not only solved my problems but also keeps the bigger picture in mind at all times. His professionalism, reliability, and clear communication have truly impressed me. Highly recommended!", country: "Germany", service: "Marketing Consulting" },
  { quote: "The team has been amazing at managing our social media ads! They really understand what works and have helped us reach the right audience. We've seen great results, and it's been a pleasure working with them.", country: "United States", service: "Paid Social Media" },
  { quote: "Went above and beyond both the effort, scope and time invested! Very professional and seems to really care to fix the problem of the client, not just to finalize the job. He helped me with things that were not even in my initial scope.", country: "Czech Republic", service: "Paid Social Media" },
  { quote: "Deeply knowledgeable about advertising and online platforms, creative, hard-working, and a pleasure to work with. I can't recommend them enough — help that's invaluable, and they exceeded all of my expectations.", country: "United States", service: "Paid Social Media" },
  { quote: "Working with Bevit Agency was an outstanding experience. Their expertise in social media marketing, combined with a high level of professionalism, strategic thinking, and impeccable attention to detail, made our collaboration seamless.", country: "Bahamas", service: "Paid Social Media" },
  { quote: "High professional level of setting up Meta business accounts and ad campaigns — great level of consultancy. Kind and attentive to all the details, pleasant to work with.", country: "Switzerland", service: "Paid Social Media" },
  { quote: "Attribix Agency were exceptional to work with. Professional, analytical, and agile in thinking for our company to put its best paw forward.", country: "Australia", service: "Search Engine Marketing" },
  { quote: "Very Polite and knowledgeable — I had some doubt about my campaign so I asked for a consultation and we were able to manage it within a few hours. All of my questions were answered.", country: "United Arab Emirates", service: "Marketing Consulting" },
  { quote: "They know exactly what they are doing. Following up every little detail, and communication has always been on point. Really the team to turn to if you need help with Meta or Google Ads.", country: "Norway", service: "Search Engine Marketing" },
  { quote: "I really like working with Attribix Agency! Thank you for helping my business and consulting me!", country: "Saudi Arabia", service: "Paid Social Media" },
  { quote: "It's the second time I've worked with Attribix Agency. They really know their stuff. Very short response time and you always get clear answers. I highly recommend them to anyone who needs help with ads.", country: "Norway", service: "Paid Social Media" },
  { quote: "Easy to work with — they know what to do to get a good result, and you get good advice along the way. Looking forward to working with them again.", country: "Norway", service: "Search Engine Marketing" },
  { quote: "Exactly what we were looking for! Everything was explained very clearly, and I feel like I have a much better understanding of our marketing.", country: "United States", service: "Marketing Consulting" },
  { quote: "Amazing job — very professional.", country: "Switzerland", service: "Search Engine Marketing" },
  { quote: "Great service and attention to detail.", country: "United Kingdom", service: "Paid Social Media" },
  { quote: "Very happy, always delivers.", country: "Sweden", service: "Search Engine Marketing" },
  { quote: "Professional :)", country: "Canada", service: "Paid Social Media" },
  { quote: "He did everything I needed and more. Very responsive and helpful throughout the whole process.", country: "Bahamas", service: "Paid Social Media" },
  { quote: "Happy with the service — delivered exactly what was promised.", country: "Norway", service: "Paid Social Media" },
  { quote: "Very professional and knows Google Ads inside out. They optimised our campaigns and we saw immediate improvement.", country: "United Kingdom", service: "Search Engine Marketing" },
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

          {/* Right — results card */}
          <Reveal delay={100}>
            <div className="relative">

              {/* Floating badges */}
              <div className="absolute -top-5 -left-4 z-10 flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-md px-4 py-2 shadow-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-300">+312% ROAS this month</span>
              </div>
              <div className="absolute -bottom-4 -right-3 z-10 flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-md px-4 py-2 shadow-xl">
                <svg className="h-3.5 w-3.5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                <span className="text-xs font-semibold text-cyan-300">Revenue up 4.8× vs last quarter</span>
              </div>

              {/* Main card */}
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-fuchsia-600/10 pointer-events-none" />

                {/* Header */}
                <div className="relative flex items-center justify-between mb-5">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-0.5">Campaign snapshot</div>
                    <div className="text-base font-bold text-white">E-commerce · Meta + Google</div>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 border border-emerald-400/30 px-3 py-1 text-[11px] font-semibold text-emerald-300 uppercase tracking-wide">
                    ● Live
                  </span>
                </div>

                {/* Big metric */}
                <div className="relative flex items-end gap-3 mb-6">
                  <div>
                    <div className="text-xs text-white/40 mb-1">Total revenue attributed</div>
                    <div className="text-5xl font-extrabold tracking-tight text-white">$128,400</div>
                  </div>
                  <div className="mb-1.5 flex items-center gap-1 rounded-xl bg-emerald-400/15 px-2.5 py-1.5 text-sm font-bold text-emerald-300">
                    ▲ 38%
                  </div>
                </div>

                {/* Stats row */}
                <div className="relative grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Ad Spend", value: "$26,800" },
                    { label: "ROAS", value: "4.79×" },
                    { label: "Purchases", value: "1,042" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl bg-white/6 border border-white/8 px-4 py-3">
                      <div className="text-[11px] text-white/45 mb-1">{s.label}</div>
                      <div className="text-base font-bold text-white">{s.value}</div>
                    </div>
                  ))}
                </div>

                {/* Mini bar chart */}
                <div className="relative">
                  <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Weekly revenue</div>
                  <div className="flex items-end gap-1.5 h-10">
                    {[38, 52, 45, 67, 80, 72, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 6
                            ? "linear-gradient(to top, #22d3ee, #818cf8)"
                            : "rgba(255,255,255,0.12)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="relative mt-5 flex items-center justify-between border-t border-white/8 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {["#6366f1","#22d3ee","#f472b6"].map((c, i) => (
                        <div key={i} className="h-6 w-6 rounded-full border-2 border-[#1a1040]" style={{ background: c }} />
                      ))}
                    </div>
                    <span className="text-xs text-white/50">158 verified reviews</span>
                  </div>
                  <Stars />
                </div>
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
      <section className="relative py-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 mb-10">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold">What clients say</h2>
                <p className="mt-3 text-white/65 max-w-md">158 reviews · 5.0 stars · All verified on Fiverr.</p>
              </div>
              <div className="flex items-center gap-3">
                <Stars />
                <span className="text-2xl font-bold">5.0</span>
                <span className="text-white/50 text-sm">/ 158 reviews</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0E1530] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0E1530] to-transparent" />
          <div className="flex gap-4 review-scroll-left" style={{ width: "max-content" }}>
            {[...REVIEWS.slice(0, 10), ...REVIEWS.slice(0, 10)].map((r, i) => (
              <div key={i} className="w-[320px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <Stars />
                  <span className="text-[11px] text-white/40">{r.country}</span>
                </div>
                <blockquote className="text-sm text-white/80 leading-relaxed">"{r.quote}"</blockquote>
                <div className="mt-3 text-[11px] text-cyan-400/70">{r.service}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0E1530] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0E1530] to-transparent" />
          <div className="flex gap-4 review-scroll-right" style={{ width: "max-content" }}>
            {[...REVIEWS.slice(10), ...REVIEWS.slice(10)].map((r, i) => (
              <div key={i} className="w-[320px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <Stars />
                  <span className="text-[11px] text-white/40">{r.country}</span>
                </div>
                <blockquote className="text-sm text-white/80 leading-relaxed">"{r.quote}"</blockquote>
                <div className="mt-3 text-[11px] text-cyan-400/70">{r.service}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 mt-8 text-center">
          <a
            href="https://www.fiverr.com/agencies/bevitagency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/35 underline underline-offset-2 hover:text-white/60 transition"
          >
            View all 158 reviews on Fiverr →
          </a>
        </div>

        <style jsx>{`
          @keyframes scrollLeft {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .review-scroll-left  { animation: scrollLeft  40s linear infinite; }
          .review-scroll-right { animation: scrollRight 40s linear infinite; }
          .review-scroll-left:hover,
          .review-scroll-right:hover { animation-play-state: paused; }
        `}</style>
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
