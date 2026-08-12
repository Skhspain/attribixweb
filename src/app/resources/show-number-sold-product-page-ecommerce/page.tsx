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
  headline: "Should Shopify Stores Show the Number of Products Sold?",
  description: "Showing purchase counts can create useful social proof when the number is genuine and meaningful, and look manipulative when it exists only to fake popularity.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/show-number-sold-product-page-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Number sold social proof", item: "https://www.attribix.app/resources/show-number-sold-product-page-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Number sold social proof" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Shopify stores show the number of products sold?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Showing purchase counts can create useful social proof when the
            number is genuine and meaningful. It can look manipulative when
            the counter exists only to create artificial popularity.
          </p>
        </Reveal>
      </section>

      {/* WHEN IT HELPS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When it helps</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Statements such as: &ldquo;Over 10,000 sold&rdquo;</p>
            <p>
              can reassure shoppers that many people have trusted the
              product, especially when the brand is unfamiliar.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ACCURACY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Accuracy matters</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The claim must be based on real data and should not quietly
              combine unrelated products just to inflate the figure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SMALL NUMBERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Small numbers can have the opposite effect</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            &ldquo;14 sold this month&rdquo; may make a product feel less
            established unless scarcity or exclusivity is genuinely part of
            the positioning.
          </p>
        </Reveal>
      </section>

      {/* DOES CUSTOMER NEED IT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Does the customer need this proof?</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              High-quality reviews, customer photos or recognizable
              third-party proof may be more persuasive than a sales
              counter.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAKE COUNTERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid fake live counters</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              Widgets showing &ldquo;83 people are viewing this right
              now&rdquo; or random purchase popups can quickly damage trust
              if customers suspect the numbers are fabricated.
            </p>
            <p>
              Real popularity can be persuasive. Artificial popularity
              makes the store look less credible.
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
              <Link href="/resources/only-x-left-ecommerce-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does &ldquo;only X left&rdquo; increase conversion or hurt trust?
              </Link>
            </li>
            <li>
              <Link href="/resources/scarcity-marketing-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Is scarcity marketing hurting your ecommerce brand?
              </Link>
            </li>
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
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Build proof customers actually trust</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want stronger product-page proof without using gimmicky
            scarcity widgets, contact us. We can help identify what
            customers actually need to see.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
