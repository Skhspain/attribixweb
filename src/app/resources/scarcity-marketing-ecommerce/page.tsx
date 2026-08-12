"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is Scarcity Marketing Hurting Your Ecommerce Brand?",
  description: "Scarcity works because people value opportunities they may lose, which makes it powerful enough to be abused. Genuine scarcity vs permanent scarcity that trains distrust.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/scarcity-marketing-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Scarcity marketing", item: "https://www.attribix.app/resources/scarcity-marketing-ecommerce" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Scarcity marketing" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Is scarcity marketing hurting your ecommerce brand?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Scarcity works because people value opportunities they may
            lose. That makes it powerful enough to be abused.
          </p>
        </Reveal>
      </section>

      {/* GENUINE SCARCITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Genuine scarcity is useful</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Examples:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>limited production;</li>
              <li>sale deadline;</li>
              <li>final stock;</li>
              <li>preorder cutoff;</li>
              <li>shipping deadline.</li>
            </ul>
            <p>The information helps customers make a timely decision.</p>
          </div>
        </Reveal>
      </section>

      {/* PERMANENT SCARCITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Permanent scarcity loses credibility</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                If every Monday is the &ldquo;last chance&rdquo; and the
                same promotion returns Tuesday, customers learn that there
                is no deadline.
              </p>
              <p>The result can be:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>lower trust;</li>
                <li>customers waiting for promotions;</li>
                <li>damaged full-price conversion;</li>
                <li>reduced brand quality.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AD CREATIVE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch your ad creative too</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Meta ads filled with fake timers and constant &ldquo;selling
            fast&rdquo; claims can produce clicks and attract
            discount-driven customers who have little loyalty.
          </p>
        </Reveal>
      </section>

      {/* URGENCY SELECTIVELY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use urgency selectively</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                A stronger product and offer should be able to sell without
                making every visitor anxious.
              </p>
              <p>
                Scarcity should explain a genuine constraint, not replace
                customer value.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/only-x-left-ecommerce-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does &ldquo;only X left&rdquo; increase conversion or hurt trust?
              </Link>
            </li>
            <li>
              <Link href="/resources/countdown-timer-ecommerce-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Do countdown timers actually improve ecommerce conversion rates?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-much-discount-is-too-much-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much discount is too much for ecommerce?
              </Link>
            </li>
            <li>
              <Link href="/resources/show-number-sold-product-page-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores show the number of products sold?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Sell on value, not manufactured anxiety</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If promotions are producing sales but the brand is becoming
            dependent on urgency and discounts, contact us. We can help
            evaluate the trade-off.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
