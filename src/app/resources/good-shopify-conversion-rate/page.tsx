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
  "headline": "What Is a Good Shopify Conversion Rate?",
  "description": "A good Shopify conversion rate is one that supports profitable customer acquisition for your product, traffic mix and margins.",
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
    "@id": "https://www.attribix.app/resources/good-shopify-conversion-rate"
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
      "name": "What Is a Good Shopify Conversion Rate",
      "item": "https://www.attribix.app/resources/good-shopify-conversion-rate"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Is a Good Shopify Conversion Rate" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Is a Good Shopify Conversion Rate?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A good Shopify conversion rate is one that supports profitable customer acquisition for your product, traffic mix and margins. A single industry average cannot tell you whether your store is healthy.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why benchmarks vary so much</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A store selling a $25 replenishable product will behave differently from one selling $2,000 furniture. Branded email traffic will usually convert differently from cold Meta traffic. Returning customers are different from first-time visitors. Mobile traffic can behave differently from desktop. A blended store conversion rate hides all of that.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use your own funnel first</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Segment conversion rate by: channel; new vs returning customer; device; country; product or collection; landing page. If Meta prospecting converts at 1.8%, email at 7% and branded Google at 10%, averaging everything into 3.5% tells you very little about what needs improvement.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Connect conversion rate to traffic cost</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If paid clicks cost $1.50 and the store converts 3%, acquisition cost before other factors is roughly $50. If your allowable CPA is $80, that may be excellent. If allowable CPA is $25, it is not.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch changes more closely than averages</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A store falling from its stable 3.2% baseline to 1.9% deserves investigation even if an industry article says 2% is &quot;normal.&quot; Your own historical trend is often the strongest benchmark. Use external benchmarks for context. Use your unit economics and funnel to make decisions.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/improve-shopify-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Improve Shopify Conversion Rate Without Increasing Ad Spend</Link></li>
            <li><Link href="/resources/shopify-product-page-not-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Product Page Not Converting: What to Check</Link></li>
            <li><Link href="/resources/shopify-product-page-above-the-fold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Above the Fold on a Shopify Product Page?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clear read on your funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you know your Shopify conversion rate but not whether it is good enough for your ad costs and margins, send us an inquiry. We can analyse the full funnel.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
