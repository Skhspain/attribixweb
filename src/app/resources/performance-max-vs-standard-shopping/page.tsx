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
  "headline": "Performance Max vs Standard Shopping: Which Is Better?",
  "description": "Performance Max offers more automation and access to broader Google inventory.",
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
    "@id": "https://www.attribix.app/resources/performance-max-vs-standard-shopping"
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
      "name": "Performance Max vs Standard Shopping",
      "item": "https://www.attribix.app/resources/performance-max-vs-standard-shopping"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Performance Max vs Standard Shopping" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Performance Max vs Standard Shopping: Which Is Better?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Performance Max offers more automation and access to broader Google inventory. Standard Shopping offers more traditional campaign control. Neither is automatically better for every store.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">PMax is built for automation</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              It combines product feed data with Google&apos;s automated bidding and wider inventory. For stores with strong conversion tracking and broad growth goals, that can create scale with less manual query management.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Standard Shopping offers clearer control</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Traditional Shopping can give advertisers more direct control over product structure and bidding, depending on the features currently available in the account and market. It can be useful when transparency and strict product-level management matter more than broad automation.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The feed matters in both</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Poor titles, incorrect prices, missing identifiers or weak product data will hurt either approach. Campaign type cannot rescue a bad feed.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare incremental business results</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A PMax campaign may report higher ROAS partly because it captures branded or other assisted demand. Standard Shopping may look less impressive while producing clearer non-brand acquisition. Compare Shopify sales, new customers and total Google contribution, not only platform ROAS. Google evolves campaign capabilities frequently, so confirm which Shopping options are currently supported before publishing implementation advice.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-see-what-performance-max-is-doing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Tell What Performance Max Is Actually Doing</Link></li>
            <li><Link href="/resources/all-products-one-performance-max-campaign" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should You Put All Products in One Performance Max Campaign?</Link></li>
            <li><Link href="/resources/performance-max-brand-revenue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Much of Performance Max Revenue Comes From Brand Searches?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a straight answer for your account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are deciding between PMax and Shopping or running both without a clear role for each, contact us. We can structure the account around your product economics and demand.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
