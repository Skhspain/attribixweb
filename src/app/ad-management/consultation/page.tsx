"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/marketing/Reveal";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";

const INCLUDES = [
  { title: "Your current setup", desc: "What you're running on Meta and Google today, and what's working or not." },
  { title: "Tracking and attribution", desc: "Whether your Pixel, CAPI and Google conversion tracking are set up in a way we'd trust." },
  { title: "Fit", desc: "An honest read on whether ongoing management or an audit makes more sense for where you are." },
];

export default function AdManagementConsultationPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white overflow-hidden">
      <Header />

      <section className="relative mx-auto max-w-4xl px-4 pt-24 pb-10">
        <Breadcrumbs items={[{ label: "Ad management", href: "/ad-management" }, { label: "Book a free consultation call" }]} />
        <Reveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-center">
            Book a free consultation call
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/65 max-w-xl mx-auto text-center leading-relaxed">
            A 30-minute call with the team that would actually manage your
            campaigns, not a salesperson. Pick a time below.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr] items-start">
          <Reveal className="space-y-5">
            <h2 className="text-lg font-bold text-white/90">What we&apos;ll cover</h2>
            <div className="space-y-4">
              {INCLUDES.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/8 bg-white/4 p-4">
                  <div className="font-semibold text-sm text-white mb-1">{item.title}</div>
                  <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              We discuss your current advertising setup, tracking, challenges
              and goals. You can share your screen during the call if
              reviewing part of the account would be useful. We don&apos;t
              require account access ahead of time.
            </p>
            <Link href="/ad-management" className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors">
              ← Back to Ad management
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-white/4 backdrop-blur-sm overflow-hidden shadow-2xl">
              <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Pick a time</div>
                  <div className="text-xs text-white/45 mt-0.5">30 minutes, free</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px rgba(74,222,128,0.8)" }} />
                  <span className="text-xs text-white/40">Available</span>
                </div>
              </div>
              <iframe
                src="https://calendar.app.google/gttKSfK188TrcETA8"
                className="w-full"
                style={{ height: "640px", border: "none" }}
                title="Book a free consultation call"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 pb-24 text-center">
        <Reveal>
          <p className="text-white/40 text-sm">
            Prefer to send details in writing?{" "}
            <Link href="/ad-management/inquiry" className="text-white/70 underline underline-offset-4 hover:text-white transition-colors">
              Send an inquiry
            </Link>{" "}
            instead.
          </p>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
