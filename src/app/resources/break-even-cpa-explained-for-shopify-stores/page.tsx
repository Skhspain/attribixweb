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
  "headline": "Break-Even CPA Explained for Shopify Stores",
  "description": "Break-even CPA is the maximum acquisition cost an order can absorb before the contribution profit you are measuring reaches zero.",
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
    "@id": "https://www.attribix.app/resources/break-even-cpa-explained-for-shopify-stores"
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
      "name": "Break-Even CPA Explained for Shopify Stores",
      "item": "https://www.attribix.app/resources/break-even-cpa-explained-for-shopify-stores"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Break-Even CPA Explained for Shopify Stores" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Break-Even CPA Explained for Shopify Stores
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Break-even CPA is the maximum acquisition cost an order can absorb before the contribution profit you are measuring reaches zero.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Simple example</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Product price: $100.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Product cost: $50.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Variable shipping/fees: $10.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Contribution before advertising = $40.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            In that simplified example, a $40 CPA is break-even on the first order.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Add the costs that actually change per order</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Depending on the business, include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>cost of goods</li>
              <li>payment fees</li>
              <li>fulfilment</li>
              <li>shipping subsidy</li>
              <li>expected refunds/returns</li>
              <li>sales commission</li>
              <li>other variable costs</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              Fixed overhead is usually handled separately, but your target CPA must still leave enough contribution to support the business.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Break-even CPA is not target CPA</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If you acquire every customer at exact break-even and they never buy again, advertising creates no first-order contribution. Set an allowable CPA below break-even unless lifetime value justifies spending more.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use new-customer economics</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Returning customer orders can make blended CPA look better. For acquisition decisions, calculate what you can afford to pay specifically for a new customer.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-is-a-good-cpa-for-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good CPA for Ecommerce?</Link></li>
            <li><Link href="/resources/how-to-calculate-break-even-roas-for-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Calculate Break-Even ROAS for Ecommerce</Link></li>
            <li><Link href="/resources/roas-vs-profit-why-high-roas-doesn-t-always-mean-more" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">ROAS vs Profit: Why High ROAS Doesn&apos;t Always Mean More Profit</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the real economics laid out?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your team uses a CPA target that was guessed rather than calculated, contact us. We can build the target from your actual Shopify economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
