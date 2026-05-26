// src/app/ads/page.tsx — Agency landing page
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

function ServiceCard({
  title,
  body,
  delay = 0,
}: {
  title: string;
  body: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/50">{body}</p>
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
        <blockquote className="flex-1 text-sm leading-relaxed text-white/65 italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-6 border-t border-white/10 pt-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-xs font-bold text-white">
              {name[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{name}</p>
              <p className="text-xs text-white/35">{role}</p>
            </div>
          </div>
          <p className="text-xs font-semibold text-cyan-400 text-right max-w-[110px] leading-snug">{result}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function AdsAgencyPage() {
  return (
    <div className="min-h-screen bg-[#050819] font-sans text-white antialiased">

      {/* Aurora */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[100px]" />
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
            href="/consultation"
            className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold text-white/60 transition-colors hover:border-white/30 hover:text-white"
          >
            Book a consultation
          </Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative px-5 pb-28 pt-28 text-center">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/40 tracking-wide">
            We take on very few new clients each year
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.75rem]">
            A paid ads agency that
            <br />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              lets the results speak.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-white/45 sm:text-lg">
            We manage Meta and Google Ads for a small number of Shopify brands.
            We don&apos;t pitch. We don&apos;t chase. When we have capacity,
            we open the door — briefly.
          </p>

          <div className="mt-10">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-cyan-50 shadow-[0_0_32px_rgba(255,255,255,0.10)]"
            >
              Book a free consultation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/20">
            No commitment. We&apos;ll tell you honestly if we&apos;re the right fit.
          </p>
        </Reveal>
      </section>

      {/* ── STAT STRIP ── */}
      <section className="border-y border-white/[0.06] bg-white/[0.015] px-5 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { value: "Top rated", label: "Across every client we have worked with" },
            { value: "< 10", label: "Active clients at any given time" },
            { value: "Meta & Google", label: "The only two channels that consistently scale" },
            { value: "Shopify", label: "The only platform we work with" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="px-6 py-5 text-center">
                <p className="text-xl font-extrabold text-white">{s.value}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/30">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">How we work</p>
            <h2 className="mb-4 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              We don&apos;t manage ads. We own the outcome.
            </h2>
            <p className="mb-16 max-w-lg text-base leading-relaxed text-white/45">
              We only take clients we know we can deliver for. That means staying
              small, staying focused, and saying no more than we say yes.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              delay={0}
              title="Paid media strategy"
              body="We build the structure — account architecture, campaign types, budget allocation, and audience segmentation — based on what actually scales Shopify brands."
            />
            <ServiceCard
              delay={100}
              title="Meta Ads management"
              body="Full management across Meta and Instagram. Creative direction, audience testing, campaign optimisation, and weekly reporting — handled."
            />
            <ServiceCard
              delay={200}
              title="Google Ads management"
              body="Search, Shopping, Performance Max, and Display. We know which campaign types work for which Shopify setups, and we don't run the ones that won't."
            />
            <ServiceCard
              delay={300}
              title="Creative direction"
              body="Ad creative is usually the biggest lever. We provide direction, briefs, and feedback — and we know what converts on each platform."
            />
            <ServiceCard
              delay={400}
              title="Attribution & tracking"
              body="Before we touch a budget, we make sure we know what's actually working. Server-side tracking, proper UTM structure, and reliable ROAS figures — not platform estimates."
            />
            <ServiceCard
              delay={500}
              title="Honest reporting"
              body="No vanity metrics. You see real revenue, real ROAS, and real recommendations — including when we think you should spend less."
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="border-t border-white/[0.06] bg-gradient-to-b from-indigo-950/20 to-transparent px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Client results</p>
            <h2 className="mb-16 max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl">
              The work tends to speak for itself.
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3">
            <TestimonialCard
              delay={0}
              result="Best revenue quarter on record"
              quote="They restructured our entire Meta account in the first month. We'd been wasting budget on audiences that looked right but weren't. The shift was immediately visible in revenue."
              name="Sarah K."
              role="Founder, Apex Skin · Shopify Plus"
            />
            <TestimonialCard
              delay={100}
              result="22% less spend, same revenue"
              quote="Most agencies want you to spend more — it's how they justify their fee. Attribix told us to cut two campaigns entirely. They were right. That budget went somewhere it actually worked."
              name="Marcus T."
              role="Head of Growth, Tempo Gear"
            />
            <TestimonialCard
              delay={200}
              result="Google ROAS up 2.4× in 6 weeks"
              quote="We'd been running the same Google structure for two years assuming it was fine. It wasn't. Within six weeks of them taking over, the numbers were completely different."
              name="Priya M."
              role="Performance Lead, Glow Collective"
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="border-t border-white/[0.06] px-5 py-28">
        <Reveal>
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/40 via-[#050819] to-cyan-900/20 px-8 py-20 text-center">
            <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/8 blur-3xl" />

            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/25">
              Currently reviewing new enquiries
            </p>
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-white">
              If it feels like a fit,<br />let&apos;s talk.
            </h2>
            <p className="mx-auto mb-10 max-w-sm text-sm leading-relaxed text-white/35">
              A free consultation. We&apos;ll look at your current setup,
              tell you what we see, and be straight with you about whether
              we can help.
            </p>

            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-cyan-50 shadow-[0_0_32px_rgba(255,255,255,0.10)]"
            >
              Book a free consultation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={20} height={20} />
            <span className="text-sm font-semibold text-white/40">Attribix</span>
          </Link>
          <div className="flex gap-6 text-xs text-white/20">
            <Link href="/privacy" className="transition-colors hover:text-white/40">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white/40">Terms</Link>
            <Link href="/" className="transition-colors hover:text-white/40">Home</Link>
          </div>
          <p className="text-xs text-white/15">© {new Date().getFullYear()} Attribix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
