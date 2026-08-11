"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/marketing/Reveal";

export default function InquiryThankYouPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      <Header />
      <main className="mx-auto max-w-lg px-4 py-28 text-center">
        <Reveal>
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 ring-1 ring-cyan-500/30">
            <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold">Inquiry received</h1>
          <p className="mt-4 text-white/60 leading-relaxed">
            We read every inquiry personally and reply within 1–2 business
            days. In the meantime, if you&apos;d rather talk it through, you
            can still book a call.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/ad-management/consultation" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-neutral-100 transition">
              Book a free consultation call
            </Link>
            <Link href="/ad-management" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 transition">
              Back to Ad management
            </Link>
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
