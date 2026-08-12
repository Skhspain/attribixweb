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
  "headline": "What ROAS Do You Need With a 30% Gross Margin?",
  "description": "With a true 30% margin available before advertising, simple break-even ROAS is approximately:",
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
    "@id": "https://www.attribix.app/resources/what-roas-do-you-need-with-a-30-percent-gross-margin"
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
      "name": "What ROAS Do You Need With a 30% Gross Margin",
      "item": "https://www.attribix.app/resources/what-roas-do-you-need-with-a-30-percent-gross-margin"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What ROAS Do You Need With a 30% Gross Margin" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What ROAS Do You Need With a 30% Gross Margin?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              With a true 30% margin available before advertising, simple break-even ROAS is approximately:
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              1 ÷ 0.30 = 3.33x = 333%.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That means $100 of ad spend needs to generate about $333 of revenue just to consume the full 30% margin.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">But gross margin may not be the real number</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If the 30% figure is calculated only after product cost and you still pay payment fees, fulfilment, shipping subsidy and refunds, contribution margin could be lower.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            At 25% true contribution margin, break-even becomes 4.0x / 400%.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Break-even is not a sensible long-term target</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              At exactly break-even, the order contributes nothing toward staff, software, rent, tax or profit. A sustainable operating target normally needs a cushion above it.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">LTV can justify lower first-order ROAS</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If new customers reliably reorder profitably, you may accept a first-order result below break-even as a deliberate acquisition investment. Use actual cohort contribution and payback time.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Low-margin businesses need high ROAS or strong repeat economics because every revenue dollar leaves little room for acquisition.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-roas-do-you-need-with-a-50-percent-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What ROAS Do You Need With a 50% Gross Margin?</Link></li>
            <li><Link href="/resources/how-discounts-change-your-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Discounts Change Your Break-Even ROAS</Link></li>
            <li><Link href="/resources/how-refunds-affect-your-true-advertising-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Refunds Affect Your True Advertising ROAS</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want to know what the number actually means?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your products sit around 30% margin and paid acquisition feels difficult to scale, contact us. We can build targets around the full contribution model.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
