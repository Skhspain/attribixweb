"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookDemoForm from "../../components/BookDemoForm";

export default function BookDemoPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      <Header />

      {/* HERO + FORM */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Free, no obligation
            </p>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.05]">
              Get a free walkthrough
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl">
              A 20 to 30 minute video call. We show you Attribix, look at how your store counts sales
              today, and tell you what we would fix.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] text-emerald-200">
                  1
                </span>
                <div>
                  <p className="font-medium text-white">We look at how your sales are counted today.</p>
                  <p className="text-white/70">
                    We compare what Facebook and Google report with the real sales in your Shopify
                    store.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] text-emerald-200">
                  2
                </span>
                <div>
                  <p className="font-medium text-white">We show you Attribix.</p>
                  <p className="text-white/70">
                    How it shows which ads bring you customers, and how much you get back for each
                    dollar you spend on ads.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] text-emerald-200">
                  3
                </span>
                <div>
                  <p className="font-medium text-white">You leave with a plan.</p>
                  <p className="text-white/70">
                    Clear next steps to get your sales counted correctly, whether or not you use
                    Attribix.
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
