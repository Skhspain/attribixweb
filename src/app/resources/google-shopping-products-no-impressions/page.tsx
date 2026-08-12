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
  "headline": "Why Some Shopify Products Never Get Google Shopping Impressions",
  "description": "A product can be approved in Merchant Center and still receive almost no Shopping impressions.",
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
    "@id": "https://www.attribix.app/resources/google-shopping-products-no-impressions"
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
      "name": "Why Some Shopify Products Never Get Google...",
      "item": "https://www.attribix.app/resources/google-shopping-products-no-impressions"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Some Shopify Products Never Get Google..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Some Shopify Products Never Get Google Shopping Impressions
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A product can be approved in Merchant Center and still receive almost no Shopping impressions. Approval means the item is eligible. It does not mean Google has found enough relevant, competitive opportunities to show it.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check whether the product can match meaningful searches</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Weak titles and incomplete attributes can make it difficult for Google to understand the item. A branded product name such as &quot;Nova 2&quot; tells the system little unless the feed also makes the product type and important attributes clear.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Demand may simply be low</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Some products have very little search demand. If customers do not commonly describe or search for the item, Shopping cannot create large volumes of intent that do not exist.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The campaign may favour other products</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              In Performance Max, strong sellers can absorb most spend. A new item may receive little delivery because the system predicts another product will convert more efficiently.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check competitiveness</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Price, shipping, image quality and availability affect how attractive your product is compared with other Shopping results. The issue may not be eligibility at all.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check technical constraints</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Review: country/feed targeting; product status; disapprovals or warnings; campaign listing groups; excluded products; inventory; Merchant Center diagnostics. &quot;No impressions&quot; is a distribution problem. Diagnose eligibility, query relevance, demand and campaign allocation before assuming the product itself cannot sell.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-shopping-feed-optimization" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Shopping Feed Optimization: What Actually Matters?</Link></li>
            <li><Link href="/resources/google-shopping-high-roas-low-volume" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Shopping Has High ROAS but Low Volume: Should You Scale?</Link></li>
            <li><Link href="/resources/google-shopping-product-feed-titles" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Product Feed Titles: How Much Do They Matter for Google Shopping?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second opinion on the account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If important Shopify products are approved but barely visible in Google Shopping, send us an inquiry. We can trace whether the problem is feed quality, demand or campaign structure.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
