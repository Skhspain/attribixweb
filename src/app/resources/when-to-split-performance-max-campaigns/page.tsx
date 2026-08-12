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
  "headline": "When Should You Split Products Into Multiple PMax Campaigns?",
  "description": "Split PMax campaigns when separate control creates a business advantage.",
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
    "@id": "https://www.attribix.app/resources/when-to-split-performance-max-campaigns"
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
      "name": "When Should You Split Products Into Multiple...",
      "item": "https://www.attribix.app/resources/when-to-split-performance-max-campaigns"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "When Should You Split Products Into Multiple..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            When Should You Split Products Into Multiple PMax Campaigns?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Split PMax campaigns when separate control creates a business advantage. Do not split them merely because the product catalogue has neat categories.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Good reasons to separate</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Different target ROAS or CPA; drastically different margins; separate countries; seasonal products; inventory constraints; hero products that deserve dedicated budget; new products requiring controlled testing.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Weak reasons to separate</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              &quot;Shoes and hats are different categories&quot; is not enough if both have similar economics and target the same market. Fragmentation can reduce conversion data and create more moving parts without improving results.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ask what decision the split enables</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A separate campaign should let you do something useful: allocate budget, set a different target, isolate a market or protect a priority product group. If the answer is simply &quot;better organization,&quot; consider using listing groups, feed labels or reporting dimensions instead.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure after the split</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Watch total Google performance, not only whether each new campaign gets a prettier ROAS. Redistribution of attribution between campaigns can look like improvement without creating more Shopify revenue.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/all-products-one-performance-max-campaign" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Put All Products in One Performance Max Campaign?</Link></li>
            <li><Link href="/resources/best-sellers-vs-low-sellers-google-shopping-structure" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Best Sellers vs Low Sellers: How Should You Structure Google Shopping?</Link></li>
            <li><Link href="/resources/performance-max-vs-standard-shopping" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max vs Standard Shopping: Which Is Better?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this checked against your own numbers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your PMax structure has become too consolidated or too fragmented, contact us. We can group products around the differences that actually affect advertising economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
