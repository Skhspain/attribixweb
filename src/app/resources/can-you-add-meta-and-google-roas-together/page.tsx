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
  headline: "Can You Add Meta and Google ROAS Together?",
  description: "No. Adding ROAS percentages together doesn't produce a meaningful total, and adding Meta-attributed revenue to Google-attributed revenue can double-count the same orders. Use total spend and one consistent revenue number instead.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/can-you-add-meta-and-google-roas-together" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Adding Meta and Google ROAS", item: "https://www.attribix.app/resources/can-you-add-meta-and-google-roas-together" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Adding Meta and Google ROAS" }]} />
          <Eyebrow>Attribution &amp; Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Can you add Meta and Google ROAS together?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            No. Adding ROAS percentages together does not produce a
            meaningful total ROAS, and adding Meta-attributed revenue to
            Google-attributed revenue can double-count the same orders.
          </p>
        </Reveal>
      </section>

      {/* CONSISTENT REVENUE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use total spend and a consistent revenue number</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              If Meta spends $10,000 and Google spends $5,000, total
              paid-media spend is $15,000.
            </p>
            <p>
              If Shopify records $60,000 store revenue, a simple blended
              revenue-to-ad-spend ratio is: $60,000 ÷ $15,000 = 4.0x, or
              400%.
            </p>
            <p>
              That is different from saying Meta reported 500% and Google
              reported 600%, therefore total ROAS is 1,100%. It is not.
            </p>
          </div>
        </Reveal>
      </section>

      {/* OVERLAP */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution overlap is the reason</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A customer can click a Meta ad, later search Google and
              purchase. Both platforms may claim revenue under their own
              attribution rules.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DECIDE WHAT MEASURING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Decide what you are measuring</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              For campaign optimization, platform ROAS is useful. For
              overall business efficiency, use a consistent revenue base and
              total spend. For channel contribution, use an attribution
              method that applies the same rules across platforms.
            </p>
            <p>
              One metric cannot answer every question, but mathematically
              combining unrelated ROAS percentages answers none of them.
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
              <Link href="/resources/ad-platforms-report-more-revenue-than-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Meta and Google both claim the same Shopify sale
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-ga4-meta-google-revenue-different" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify, GA4, Meta and Google all show different revenue
              </Link>
            </li>
            <li>
              <Link href="/resources/mer-vs-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                MER vs ROAS for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate true ROAS on Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Stop the ROAS math from exceeding your actual revenue</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta and Google both look profitable but the combined
            numbers exceed Shopify revenue, send us an inquiry or review{" "}
            <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Attribix&apos;s attribution approach
            </Link>
            .
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
