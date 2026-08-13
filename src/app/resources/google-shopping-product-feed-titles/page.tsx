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
  "headline": "Product Feed Titles: How Much Do They Matter for Google Shopping?",
  "description": "Product titles are one of the clearest signals Google has for understanding what you sell.",
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
    "@id": "https://www.attribix.app/resources/google-shopping-product-feed-titles"
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
      "name": "Product Feed Titles",
      "item": "https://www.attribix.app/resources/google-shopping-product-feed-titles"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Product Feed Titles" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Product Feed Titles: How Much Do They Matter for Google Shopping?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Product titles are one of the clearest signals Google has for understanding what you sell. A weak title can reduce relevance before your ad ever reaches the auction.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use the words customers actually need</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A title like &quot;The Alpine&quot; may work on your branded website and tell Google almost nothing. &quot;Men&apos;s Waterproof Leather Hiking Boots – Alpine&quot; communicates category, audience and key attribute. Do not turn titles into keyword dumps. The goal is accurate product identification.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Put important information early</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Shopping placements can truncate titles. Lead with the attributes most likely to define the buying query: product type, brand where relevant, material, size, gender, model or key specification.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match the product page</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Feed data and landing-page information should agree. Misleading titles can generate clicks that bounce and can also create Merchant Center issues.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use search data to improve the feed</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Search term insights, onsite search and SEO queries can reveal how customers describe products. That language is often more useful than internal catalogue naming. Titles matter a lot, but they are one part of the feed. Image, price, availability, identifiers and landing-page quality still affect Shopping performance.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/exclude-poor-performing-products-performance-max" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Exclude Poor-Performing Products From Performance Max?</Link></li>
            <li><Link href="/resources/google-shopping-feed-optimization" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Shopping Feed Optimization: What Actually Matters?</Link></li>
            <li><Link href="/resources/best-sellers-vs-low-sellers-google-shopping-structure" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Best Sellers vs Low Sellers: How Should You Structure Google Shopping?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Use search data to improve the feed</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your products receive impressions but the wrong searches or too few useful clicks, send us an inquiry. We can review the feed and campaign together.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
