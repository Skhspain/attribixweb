"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookDemoForm from "../../components/BookDemoForm";

export default function BookDemoPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      <Header />

      {/* HERO + FORM */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Get a walkthrough
            </p>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.05]">
              Book a demo
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl">
              20–30 minutes on Zoom. We&apos;ll review your current tracking, show live reports, and
              outline the setup plan.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] text-emerald-200">
                  1
                </span>
                <div>
                  <p className="font-medium text-white">We look at your current tracking.</p>
                  <p className="text-white/70">
                    Pixel events, server events, UTMs, and what your ad platforms &amp; Shopify are
                    actually saying.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] text-emerald-200">
                  2
                </span>
                <div>
                  <p className="font-medium text-white">We show you live reports.</p>
                  <p className="text-white/70">
                    How Attribix stitches together journeys and makes ROAS &amp; MER actually
                    trustworthy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] text-emerald-200">
                  3
                </span>
                <div>
                  <p className="font-medium text-white">We leave you with a plan.</p>
                  <p className="text-white/70">
                    Exact steps to clean up tracking whether you use Attribix, something else, or
                    build it in-house.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="rounded-3xl border border-white/15 bg-black/40 p-6 md:p-8 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
            <BookDemoForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
