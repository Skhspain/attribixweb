"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ConsultationForm from "@/components/ConsultationForm";

export default function BookConsultationPage() {
  return (
    <div className="min-h-screen bg-[#050819] font-sans text-white antialiased">

      {/* Aurora */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-60 -top-60 h-[800px] w-[800px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[100px]" />
      </div>

      {/* Header */}
      <header className="border-b border-white/[0.07] bg-[#050819]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/assets/logo.svg" alt="Attribix" width={26} height={26} />
            <span className="text-sm font-bold tracking-tight text-white">Attribix</span>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-16 md:grid-cols-2 md:items-start md:gap-20">

          {/* ── LEFT: Key points ── */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Free consultation
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl">
              Let&apos;s look at
              <br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                your ads honestly.
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/50">
              A 30-minute call. We&apos;ll review what you&apos;re running,
              tell you what we see, and be straight about whether we can help.
              No pitch. No obligation.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  n: "01",
                  title: "We review your current setup",
                  body: "We look at your Meta and Google accounts — structure, spend allocation, attribution, and what the numbers are actually saying vs. what the platforms are claiming.",
                },
                {
                  n: "02",
                  title: "We tell you where the gaps are",
                  body: "Most accounts have the same problems: double-counted conversions, misallocated budget, weak creative testing. We'll show you exactly what we find.",
                },
                {
                  n: "03",
                  title: "We're honest about fit",
                  body: "We only work with a small number of clients. If we think we can make a real difference, we'll say so. If we can't, we'll tell you that too.",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-5">
                  <span className="mt-0.5 shrink-0 text-2xl font-extrabold text-white/10">
                    {item.n}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/45">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="mt-12 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/25">
                What to expect
              </p>
              <ul className="space-y-2.5">
                {[
                  "30 minutes on Zoom",
                  "We review your live ad accounts",
                  "No slides, no sales script",
                  "You leave with a clear picture of what's working and what isn't",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-white/50">
                    <svg className="h-4 w-4 shrink-0 text-cyan-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:sticky md:top-10">
            <p className="mb-1 text-base font-semibold text-white">Book your consultation</p>
            <p className="mb-7 text-sm text-white/40">We&apos;ll confirm a time within one business day.</p>
            <ConsultationForm />
          </div>

        </div>
      </main>
    </div>
  );
}
