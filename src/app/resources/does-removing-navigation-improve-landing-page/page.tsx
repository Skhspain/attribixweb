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
  "headline": "Does Removing Navigation Improve Landing Page Conversion Rate?",
  "description": "It can, particularly when the page is built around one clear action.",
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
    "@id": "https://www.attribix.app/resources/does-removing-navigation-improve-landing-page"
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
      "name": "Does Removing Navigation Improve Landing...",
      "item": "https://www.attribix.app/resources/does-removing-navigation-improve-landing-page"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Does Removing Navigation Improve Landing..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does Removing Navigation Improve Landing Page Conversion Rate?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              It can, particularly when the page is built around one clear action. It can also reduce trust and product discovery.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why removal can help</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Every navigation link is another place the visitor can go instead of completing the intended action.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            For a focused lead-generation page or limited promotion, reducing distractions can improve completion.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why ecommerce is different</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A shopper may legitimately need to browse other sizes, products, policies or brand information before purchasing. That exploration is not necessarily “leakage.”
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider intent</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Cold Meta visitors may need more brand reassurance than returning customers. High-intent Google visitors may prefer to compare related products.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test more than conversion rate</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Look at:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>purchase rate</li>
              <li>AOV</li>
              <li>bounce</li>
              <li>assisted product discovery</li>
              <li>returning behaviour</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              If conversion rises 5% but AOV falls 15%, the simplification may not be a win.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Navigation is a design decision, not a conversion superstition.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-ecommerce-landing-pages-have-navigation" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Ecommerce Landing Pages Have Navigation?</Link></li>
            <li><Link href="/resources/what-should-the-first-screen-of-an-ecommerce-landing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should the First Screen of an Ecommerce Landing Page Say?</Link></li>
            <li><Link href="/resources/should-your-landing-page-show-the-price-above-the-fold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Your Landing Page Show the Price Above the Fold?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure where the page loses customers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are simplifying paid landing pages and want to know which distractions are actually harmful, contact us. We can assess the full purchase behaviour.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
