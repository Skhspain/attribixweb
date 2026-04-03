"use client";

import React from "react";
import Link from "next/link";
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

const INCLUDES = [
  {
    icon: "🔍",
    title: "Ad account audit",
    desc: "We go through your active campaigns and identify exactly what's wasting budget and what's underreported.",
  },
  {
    icon: "📊",
    title: "Tracking health check",
    desc: "We check your pixel, server-side events and attribution setup — and tell you what data you're currently missing.",
  },
  {
    icon: "🎯",
    title: "Growth strategy",
    desc: "A clear, prioritised action plan tailored to your business — not a generic checklist.",
  },
  {
    icon: "💬",
    title: "Live Q&A",
    desc: "Bring your hardest questions. We'll go through them together and leave you with clear answers.",
  },
];

export default function ConsultationPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(900px 600px at 60% 20%, rgba(168,85,247,0.12), transparent 60%), radial-gradient(600px 400px at 20% 80%, rgba(56,189,248,0.1), transparent 60%)",
        }}
      />

      <Header />

      {/* HERO */}
      <section className="relative mx-auto max-w-4xl px-4 pt-24 pb-16 text-center">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center justify-center gap-2 text-xs text-white/40">
          <Link href="/agency" className="hover:text-white/70 transition-colors">Agency</Link>
          <span>/</span>
          <span className="text-white/60">Book a Consultation</span>
        </div>

        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/50">
            Paid Consultation
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            <span className="block text-white">Get clarity on</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-orange-400">
              your ad account.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            A focused, one-on-one session with an ads specialist who has managed campaigns for 150+ clients across 20+ countries.
          </p>

          {/* Proof bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400">★★★★★</span>
              <span>5.0 from 158 reviews</span>
            </div>
            <div className="h-3 w-px bg-white/15 hidden sm:block" />
            <span>150+ clients</span>
            <div className="h-3 w-px bg-white/15 hidden sm:block" />
            <span>Top Rated since 2008</span>
          </div>
        </Reveal>
      </section>

      {/* WHAT'S INCLUDED + CALENDAR SIDE BY SIDE */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr] items-start">

          {/* Left — what's included */}
          <Reveal className="space-y-5">
            <h2 className="text-xl font-bold text-white/90">What's included</h2>

            <div className="space-y-4">
              {INCLUDES.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="flex gap-4 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-4 hover:border-white/15 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white mb-1">{item.title}</div>
                      <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Trust note */}
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-sm text-white/60 leading-relaxed">
              <span className="text-cyan-400 font-semibold">Honest advice only.</span>{" "}
              If we don't think paid ads are your biggest lever right now, we'll tell you — and point you in the right direction instead.
            </div>

            <Link
              href="/agency"
              className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              ← Back to Agency
            </Link>
          </Reveal>

          {/* Right — Google Calendar embed */}
          <Reveal delay={150}>
            <div className="rounded-3xl border border-white/10 bg-white/4 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Header bar */}
              <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Book your session</div>
                  <div className="text-xs text-white/45 mt-0.5">Pick a time that works for you</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px rgba(74,222,128,0.8)" }} />
                  <span className="text-xs text-white/40">Available</span>
                </div>
              </div>

              {/* Iframe */}
              <iframe
                src="https://calendar.app.google/gttKSfK188TrcETA8"
                className="w-full"
                style={{ height: "640px", border: "none" }}
                title="Book a paid consultation"
                allow="payment"
              />
            </div>
          </Reveal>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-2xl px-4 pb-24 text-center">
        <Reveal>
          <p className="text-white/40 text-sm">
            Prefer to reach out first?{" "}
            <Link href="/agency#reviews" className="text-white/70 underline underline-offset-4 hover:text-white transition-colors">
              Read client reviews
            </Link>
            {" "}or{" "}
            <Link href="/agency" className="text-white/70 underline underline-offset-4 hover:text-white transition-colors">
              learn about our services
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
