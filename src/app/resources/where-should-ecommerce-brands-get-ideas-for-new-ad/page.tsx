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
  "headline": "Where Should Ecommerce Brands Get Ideas for New Ad Creatives?",
  "description": "Good ad ideas come from the market more often than from other ads.",
  "datePublished": "2026-08-12",
  "dateModified": "2026-08-12",
  "author": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.attribix.app/assets/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/where-should-ecommerce-brands-get-ideas-for-new-ad"
  }
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.attribix.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources",
      "item": "https://www.attribix.app/resources"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Where Should Ecommerce Brands Get Ideas for...",
      "item": "https://www.attribix.app/resources/where-should-ecommerce-brands-get-ideas-for-new-ad"
    }
  ]
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Where Should Ecommerce Brands Get Ideas for..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Where Should Ecommerce Brands Get Ideas for New Ad Creatives?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Good ad ideas come from the market more often than from other ads.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Competitor research is useful, but copying the same format everyone else uses usually creates more sameness.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Customer reviews</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Positive reviews reveal valued outcomes. Negative reviews reveal objections and expectation gaps.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Customer service</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Questions asked before purchase are ready-made creative topics.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              “Does it work with X?”
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              “Is it suitable for Y?”
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              “How long does it take?”
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Sales data</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Best sellers, bundles and repeat purchase patterns can reveal which use cases matter commercially.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Search queries</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Google Search terms and Search Console can expose the exact language people use around the category.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Organic social</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Comments on your own posts show what creates curiosity, confusion and conversation.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Competitors</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Use competitor ads to understand category conventions and gaps, not as templates to duplicate.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The creative backlog should come from customer questions, motivations and proof. Format comes afterwards.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-find-new-meta-ad-angles-without-guessing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Find New Meta Ad Angles Without Guessing</Link></li>
            <li><Link href="/resources/how-to-turn-customer-objections-into-high-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Turn Customer Objections Into High-Converting Ads</Link></li>
            <li><Link href="/resources/product-features-vs-customer-benefits-what-should-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Product Features vs Customer Benefits: What Should Ads Focus On?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want this tested properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If creative production has become a weekly scramble for ideas, send us an inquiry. We can turn customer and campaign data into a structured testing backlog.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
