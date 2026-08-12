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
  "headline": "Performance Max Spending Mostly on One Product: Is That a Problem?",
  "description": "Not necessarily.",
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
    "@id": "https://www.attribix.app/resources/performance-max-spending-mostly-one-product"
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
      "name": "Performance Max Spending Mostly on One...",
      "item": "https://www.attribix.app/resources/performance-max-spending-mostly-one-product"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Performance Max Spending Mostly on One..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Performance Max Spending Mostly on One Product: Is That a Problem?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Not necessarily. Google may simply have found that one product is the easiest way to generate conversion value. The question is whether that allocation matches your business priorities.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why spend concentrates</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              The dominant product may have: stronger search demand; better price competitiveness; more conversion history; higher conversion rate; stronger images/reviews; better stock availability. Success creates more data, which can lead to more delivery.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When concentration becomes a problem</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              It deserves attention if: the product has poor margins; inventory is limited; another strategic category receives no test; the business needs more diversified revenue; PMax performance collapses whenever the hero product goes out of stock.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not force equal spend</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Equal catalogue representation is not the objective. If one SKU genuinely creates the best profit, allowing it to lead can be sensible. For products that need protected budget or different economics, consider separate campaign structures or feed segmentation rather than fighting the system inside one campaign.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at profit, not product fairness</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A campaign is not unfair to a product. It is allocating toward predicted conversion value. Your job is to tell Google when business value differs from that prediction through structure, values and budgets.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-shopping-high-roas-low-volume" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Shopping Has High ROAS but Low Volume: Should You Scale?</Link></li>
            <li><Link href="/resources/why-performance-max-stops-spending" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Performance Max Stops Spending</Link></li>
            <li><Link href="/resources/google-shopping-products-no-impressions" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Some Shopify Products Never Get Google Shopping Impressions</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if the number is actually good?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If one product is carrying your entire PMax account and you want to know whether that concentration is healthy, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
