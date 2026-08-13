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
  "headline": "Should You Put All Products in One Performance Max Campaign?",
  "description": "Putting every product into one PMax campaign is simple.",
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
    "@id": "https://www.attribix.app/resources/all-products-one-performance-max-campaign"
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
      "name": "Should You Put All Products in One...",
      "item": "https://www.attribix.app/resources/all-products-one-performance-max-campaign"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should You Put All Products in One..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Put All Products in One Performance Max Campaign?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Putting every product into one PMax campaign is simple. It also gives Google freedom to concentrate spend wherever it predicts the best return, which may not match your business priorities.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">One campaign can work when products are similar</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If products share margins, markets, conversion values and growth goals, a consolidated campaign can accumulate data efficiently.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Separation matters when economics differ</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Consider separate structures when products have materially different: margins; stock levels; seasonality; target ROAS; countries; customer value; strategic importance. A low-margin bestseller can absorb most spend even if a higher-margin category would create more profit.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid fragmentation for tiny categories</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Creating 20 PMax campaigns for 20 products can starve each campaign of data and make budget management unnecessarily complicated. A useful grouping should represent a real business difference, not an organizational preference.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Review product distribution</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Before splitting anything, check where spend and conversions are already going. If one category dominates, ask whether that is because it genuinely offers the best opportunity or because the current structure gives Google no reason to respect other priorities.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/performance-max-vs-standard-shopping" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max vs Standard Shopping: Which Is Better?</Link></li>
            <li><Link href="/resources/when-to-split-performance-max-campaigns" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When Should You Split Products Into Multiple PMax Campaigns?</Link></li>
            <li><Link href="/resources/how-to-see-what-performance-max-is-doing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Tell What Performance Max Is Actually Doing</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Review product distribution</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If PMax is concentrating spend on the wrong products or your catalogue has very different margins, send us an inquiry. We can restructure around profit rather than catalogue convenience.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
