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
  headline: "Where Should Customer Reviews Appear on a Shopify Product Page?",
  description: "Reviews should appear where they help customers answer questions, not only in one giant block at the bottom of the page. A guide to placement across the buying journey.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/where-to-put-reviews-shopify-product-page" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Review placement", item: "https://www.attribix.app/resources/where-to-put-reviews-shopify-product-page" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Review placement" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Where should customer reviews appear on a Shopify product page?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Reviews should appear where they help customers answer
            questions, not only in one giant block at the bottom of the
            page.
          </p>
        </Reveal>
      </section>

      {/* SUMMARY NEAR TOP */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with a summary near the top</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A genuine star rating and review count near the product name
            can provide immediate reassurance without taking over the page.
          </p>
        </Reveal>
      </section>

      {/* DETAILED REVIEWS LOWER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep detailed reviews lower down</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Full customer reviews are useful when shoppers want deeper
                evidence.
              </p>
              <p>Add filtering where useful for:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>size;</li>
                <li>rating;</li>
                <li>product variation;</li>
                <li>customer images;</li>
                <li>specific use case.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PULL PROOF IN */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Pull strong proof into relevant sections</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If several reviews mention that the jacket stays waterproof in
            heavy rain, one short review near the waterproofing section can
            reinforce the claim.
          </p>
        </Reveal>
      </section>

      {/* DON'T CHERRY PICK */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not cherry-pick deceptively</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Featured reviews should be genuine and representative. The
              full review system should remain accessible.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BUYING JOURNEY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider the buying journey</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              A customer may first need to understand the product before
              reading 100 reviews. Put proof where uncertainty naturally
              appears.
            </p>
            <p>
              Reviews are not one page section. They are a trust resource
              that can support several stages of the decision.
            </p>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/social-proof-ecommerce-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does social proof actually increase ecommerce conversion rate?
              </Link>
            </li>
            <li>
              <Link href="/resources/star-ratings-vs-written-reviews-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Star ratings vs written reviews: which matter more?
              </Link>
            </li>
            <li>
              <Link href="/resources/product-reviews-vs-testimonials-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Product reviews vs testimonials: which build more trust?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-many-product-images-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many product images should a Shopify product page have?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Put proof where the doubt actually appears</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your reviews sit at the very bottom of long pages and rarely
            support the actual sales argument, contact us. We can help
            integrate proof more naturally.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
