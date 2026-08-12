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
  "headline": "Merchant Center Feed Issues That Quietly Hurt Performance",
  "description": "Not every Merchant Center problem produces a dramatic red \"account suspended\" warning.",
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
    "@id": "https://www.attribix.app/resources/merchant-center-feed-issues-hurt-performance"
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
      "name": "Merchant Center Feed Issues That Quietly...",
      "item": "https://www.attribix.app/resources/merchant-center-feed-issues-hurt-performance"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Merchant Center Feed Issues That Quietly..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Merchant Center Feed Issues That Quietly Hurt Performance
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Not every Merchant Center problem produces a dramatic red &quot;account suspended&quot; warning. Smaller feed issues can quietly reduce how many useful auctions your products enter.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Missing or weak attributes</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Incomplete identifiers, generic product types, weak titles and missing variant information can reduce relevance or eligibility for certain experiences.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Price and availability drift</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If feed data does not match the landing page, products can be flagged, automatically updated or disapproved. Even temporary mismatches create poor customer experiences.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Poor images</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Low-quality, cropped or inappropriate promotional imagery can reduce click appeal or violate requirements. Shopping is visual; image quality is part of ad quality.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shipping inconsistencies</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Unexpected shipping costs can reduce conversion even if the product remains approved. Merchant Center settings should reflect what shoppers actually see.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Partial disapprovals hide in large catalogues</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A store with 5,000 products can have hundreds of affected items without anyone noticing because the campaign continues to spend on the rest. Review diagnostics routinely and connect affected products to revenue importance. A disapproved bestseller deserves different urgency from a discontinued low-volume SKU.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-shopping-wrong-price" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Google Shopping Shows the Wrong Price</Link></li>
            <li><Link href="/resources/performance-max-vs-meta-ads-new-product-launch" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max vs Meta Ads for New Product Launches</Link></li>
            <li><Link href="/resources/performance-max-learning-period-avoid-changing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max Learning Period: What Should You Avoid Changing?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a straight answer for your account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If PMax or Shopping performance declined without an obvious campaign change, send us an inquiry. We can check whether feed health is quietly reducing coverage.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
