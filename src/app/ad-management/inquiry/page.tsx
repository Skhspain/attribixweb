"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";

export default function AdManagementInquiryPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Breadcrumbs
          items={[
            { label: "Ad management", href: "/ad-management" },
            { label: "Send inquiry" },
          ]}
        />

        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Send inquiry
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Tell us about your store.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/60 max-w-md">
              A few details about your business, your current advertising, and
              what you&apos;re trying to fix. We read every inquiry personally,
              with no auto-replies and no sales queue.
            </p>

            <div className="mt-10 space-y-4 text-sm text-white/50 max-w-md">
              <p>
                Prefer to talk it through first? You can{" "}
                <Link href="/ad-management/consultation" className="text-white/80 underline underline-offset-4 hover:text-white">
                  book a free consultation call
                </Link>{" "}
                instead.
              </p>
              <p>
                Want to read about the services first?{" "}
                <Link href="/ad-management" className="text-white/80 underline underline-offset-4 hover:text-white">
                  Go back to Ad management
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 backdrop-blur-sm">
            <p className="mb-1 text-base font-semibold text-white">Send inquiry</p>
            <p className="mb-7 text-sm text-white/35">We&apos;ll reply within 1–2 business days.</p>
            <InquiryForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
