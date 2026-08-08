"use client";

import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ProductCTA } from "@/components/marketing/CTAGroup";

export default function ComparePage() {
  return (
    <ProductPageShell>
      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Compare" }]} />
          <Eyebrow>Comparisons</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Attribix compares
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            We're not publishing comparison pages until we can verify the
            other side of them — current pricing, current feature sets, and
            an honest read of who each tool actually suits.
          </p>
        </Reveal>
      </section>

      {/* HONEST STATE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why there's nothing here yet</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Competitor pricing and feature sets change, and a comparison
            built on stale or unverified information is worse than no
            comparison at all. When we publish one, it'll cover pricing and
            features we've actually verified, be honest about which tool
            fits which store, and won't pretend every alternative is worse
            across the board.
          </p>
        </Reveal>
      </section>

      {/* WHAT ATTRIBIX FOCUSES ON */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What Attribix is built around</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Shopify attribution, server-side tracking for Meta and Google,
              and ROAS reporting that reconciles platform claims against
              actual Shopify orders — in one connected setup rather than
              several separate tools.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See it on your own store</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            The most useful comparison is against your own current setup —
            connect your store to see it directly.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
