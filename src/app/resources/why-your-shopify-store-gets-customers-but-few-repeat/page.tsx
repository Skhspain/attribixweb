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
  "headline": "Why Your Shopify Store Gets Customers but Few Repeat Purchases",
  "description": "Strong first-order acquisition and weak retention can indicate that marketing is selling the first purchase more effectively than the product experience earns the second.",
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
    "@id": "https://www.attribix.app/resources/why-your-shopify-store-gets-customers-but-few-repeat"
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
      "name": "Why Your Shopify Store Gets Customers but...",
      "item": "https://www.attribix.app/resources/why-your-shopify-store-gets-customers-but-few-repeat"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Your Shopify Store Gets Customers but..." }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Your Shopify Store Gets Customers but Few Repeat Purchases
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Strong first-order acquisition and weak retention can indicate that marketing is selling the first purchase more effectively than the product experience earns the second.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with the natural buying cycle</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Do not call retention weak after 30 days if customers normally replace the product once a year.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at product experience</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Repeat purchase suffers when:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>quality disappoints</li>
              <li>sizing/expectation was wrong</li>
              <li>delivery was poor</li>
              <li>support failed</li>
              <li>the product simply does not need replacing</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              No email flow can fully repair a bad first experience.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check acquisition source</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Aggressive discounts and giveaway traffic may attract low-loyalty customers. Compare repeat rate by channel, offer and first product.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Build useful post-purchase communication</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Replenishment reminders, care instructions, complementary products and relevant launches can create natural reasons to return without constant coupons.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ask customers</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Reviews, support tickets and surveys often explain retention faster than analytics.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Acquisition buys the first chance. Product and customer experience earn the next order.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-is-a-good-repeat-purchase-rate-for-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Repeat Purchase Rate for Shopify?</Link></li>
            <li><Link href="/resources/how-to-increase-repeat-purchase-rate-without-constant" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Increase Repeat Purchase Rate Without Constant Discounts</Link></li>
            <li><Link href="/resources/how-to-measure-email-profitability-instead-of-just" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Measure Email Profitability Instead of Just Revenue</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this measured properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If new-customer acquisition is working but LTV is too low to support your ad costs, send us an inquiry. We can help analyse customer cohorts alongside marketing.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
