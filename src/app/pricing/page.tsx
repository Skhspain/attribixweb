"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      <Header />

      {/* Header text */}
      <section className="mx-auto max-w-5xl px-4 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Pricing</h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Simple, transparent pricing. Use this page to mirror whatever plans and
          numbers you show on the homepage – or keep it high-level and push people
          to book a demo.
        </p>
      </section>

      {/* Pricing cards – adjust the numbers/text to match your homepage */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Plan 1 – e.g. Starter */}
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6 flex flex-col">
            <p className="text-sm font-semibold text-white/80">Starter</p>
            <p className="mt-3 text-3xl font-bold">Custom</p>
            <p className="text-xs text-white/60 mt-1">
              Match this to your entry plan from the main page.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              <li>• Core tracking & attribution</li>
              <li>• Pixel + server events</li>
              <li>• Basic reports</li>
            </ul>
          </div>

          {/* Plan 2 – e.g. Growth (highlight) */}
          <div className="rounded-3xl border border-cyan-400/60 bg-gradient-to-b from-cyan-500/20 to-slate-950/80 p-6 shadow-[0_0_40px_rgba(34,211,238,0.35)] flex flex-col relative overflow-hidden">
            <div className="absolute -top-6 right-4 rounded-full bg-cyan-400 text-black text-[11px] font-semibold px-3 py-1">
              Most popular
            </div>
            <p className="text-sm font-semibold text-white/90">Growth</p>
            <p className="mt-3 text-3xl font-bold">Custom</p>
            <p className="text-xs text-white/70 mt-1">
              Mirror your main plan here – traffic and spend typically land here.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/90">
              <li>• All core tracking features</li>
              <li>• Multi-platform attribution (Meta, Google, TikTok…)</li>
              <li>• Advanced reports & cohorts</li>
              <li>• Priority support</li>
            </ul>
          </div>

          {/* Plan 3 – e.g. Scale / Enterprise */}
          <div className="rounded-3xl border border-white/15 bg-black/40 p-6 flex flex-col">
            <p className="text-sm font-semibold text-white/80">Scale</p>
            <p className="mt-3 text-3xl font-bold">Talk to us</p>
            <p className="text-xs text-white/60 mt-1">
              For high-volume brands and agencies. Use the same language as your homepage.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              <li>• Everything in Growth</li>
              <li>• Custom modelling & exports</li>
              <li>• Dedicated support & Slack</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-white/70">
          Need exact numbers to match the homepage? Just update the prices and limits
          in these cards so they’re 1:1 with your main pricing section.
          <br />
          Or skip the details and{" "}
          <Link href="/book-demo" className="text-cyan-300 hover:text-cyan-200 underline">
            book a demo
          </Link>{" "}
          and we&apos;ll talk through it.
        </div>
      </section>

      <Footer />
    </div>
  );
}
