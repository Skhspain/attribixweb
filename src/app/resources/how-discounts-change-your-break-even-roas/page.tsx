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
  "headline": "How Discounts Change Your Break-Even ROAS",
  "description": "Discounting reduces revenue while product and fulfilment costs often stay largely the same.",
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
    "@id": "https://www.attribix.app/resources/how-discounts-change-your-break-even-roas"
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
      "name": "How Discounts Change Your Break-Even ROAS",
      "item": "https://www.attribix.app/resources/how-discounts-change-your-break-even-roas"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Discounts Change Your Break-Even ROAS" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Discounts Change Your Break-Even ROAS
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Discounting reduces revenue while product and fulfilment costs often stay largely the same. That means the percentage margin available for advertising can shrink quickly.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Normal price: $100
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            COGS/variable cost before ads: $50
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Contribution before ads: $50 / 50%
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Break-even ROAS: 2.0x.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Now discount 20%:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Sale price: $80
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Costs: still $50
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Contribution: $30 / 37.5%
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Break-even ROAS: about 2.67x.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            You need a higher ROAS to break even after the discount, even though promotions often make Ads Manager performance look better because conversion increases.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion must compensate</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              The sale can still be profitable if CPA falls enough or order volume rises enough. Calculate the required lift rather than assuming more orders equals more profit.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch stacked incentives</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A discounted product plus free shipping plus affiliate commission can leave much less contribution than the headline promotion suggests.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-roas-do-you-need-with-a-50-percent-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What ROAS Do You Need With a 50% Gross Margin?</Link></li>
            <li><Link href="/resources/how-refunds-affect-your-true-advertising-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Refunds Affect Your True Advertising ROAS</Link></li>
            <li><Link href="/resources/what-roas-do-you-need-with-a-30-percent-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What ROAS Do You Need With a 30% Gross Margin?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the real economics laid out?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your campaigns perform best during promotions but profit is hard to reconcile, contact us. We can calculate the true break-even ROAS at sale pricing.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
