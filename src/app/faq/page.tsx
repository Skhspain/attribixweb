"use client";

import React from "react";
import Link from "next/link";
import faq from "@/content/faq.json";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Type guard
type FAQ = { q: string; a: string };
function isFAQArray(x: unknown): x is FAQ[] {
  return Array.isArray(x) && x.every(i => i && typeof i.q === "string" && typeof i.a === "string");
}

export default function FAQPage() {
  const items: FAQ[] = isFAQArray(faq) ? faq : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(i => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white">

      {/* ✔️ Global header */}
      <Header />

      <main className="mx-auto max-w-5xl px-4 py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">FAQ</h1>
        <p className="mt-3 text-sm md:text-base text-white/80 max-w-2xl">
          The most common questions brands ask before switching their tracking over to Attribix.
        </p>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/40">
          {items.map((item, idx) => (
            <details key={idx} className="group [&[open]>summary]:bg-white/5" open={idx === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium">
                <span>{item.q}</span>
                <span className="text-xs text-white/60 group-open:hidden">+</span>
                <span className="hidden text-xs text-white/60 group-open:inline">−</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-white/80 whitespace-pre-line">
                {item.a}
              </div>
            </details>
          ))}

          {items.length === 0 && (
            <div className="px-5 py-6 text-sm text-white/70">
              No FAQ items yet. Add them in{" "}
              <code className="text-white/90">src/content/faq.json</code>.
            </div>
          )}
        </div>

        <div className="mt-10">
          <Link
            href="/book-demo"
            className="inline-block rounded-full bg-white text-gray-900 px-5 py-3 font-semibold hover:opacity-90"
          >
            Book a demo
          </Link>
        </div>
      </main>

      {/* ✔️ Global footer */}
      <Footer />
    </div>
  );
}
