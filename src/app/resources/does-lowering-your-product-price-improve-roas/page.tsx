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
  "headline": "Does Lowering Your Product Price Improve ROAS?",
  "description": "Lowering price can improve conversion and ROAS while reducing profit.",
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
    "@id": "https://www.attribix.app/resources/does-lowering-your-product-price-improve-roas"
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
      "name": "Does Lowering Your Product Price Improve ROAS",
      "item": "https://www.attribix.app/resources/does-lowering-your-product-price-improve-roas"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Does Lowering Your Product Price Improve ROAS" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does Lowering Your Product Price Improve ROAS?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Lowering price can improve conversion and ROAS while reducing profit.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That is why ROAS alone is a poor metric for deciding whether a price change worked.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Original:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Price: $100
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            CPA: $25
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            ROAS: 400%
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            After lowering price:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Price: $80
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">CPA improves to $16</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              ROAS: 500%
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The advertising percentage improved.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Now assume product and variable cost is $50.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Original contribution after ads: $25.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              New contribution after ads: $14.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The higher ROAS created less profit per order.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Volume can change the result</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If the lower price doubles customer volume, total contribution may still be larger. You need both unit economics and order volume.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider customer quality</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Discounted customers may repeat differently from full-price buyers.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test more than price</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If conversion is weak, the problem might be:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>unclear value</li>
            <li>poor product proof</li>
            <li>shipping</li>
            <li>trust</li>
            <li>wrong traffic</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            Lowering the price is one of the most expensive ways to solve a problem that was not actually price.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-roas-do-you-need-with-a-30-percent-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What ROAS Do You Need With a 30% Gross Margin?</Link></li>
            <li><Link href="/resources/what-roas-do-you-need-with-a-50-percent-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What ROAS Do You Need With a 50% Gross Margin?</Link></li>
            <li><Link href="/resources/how-discounts-change-your-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Discounts Change Your Break-Even ROAS</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want to know what the number actually means?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are considering discounting because ad performance is weak, contact us. We can model whether the conversion gain would actually create more profit.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
