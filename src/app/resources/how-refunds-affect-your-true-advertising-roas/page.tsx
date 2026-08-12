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
  "headline": "How Refunds Affect Your True Advertising ROAS",
  "description": "Ad platforms usually report conversion value when the purchase happens.",
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
    "@id": "https://www.attribix.app/resources/how-refunds-affect-your-true-advertising-roas"
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
      "name": "How Refunds Affect Your True Advertising ROAS",
      "item": "https://www.attribix.app/resources/how-refunds-affect-your-true-advertising-roas"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Refunds Affect Your True Advertising ROAS" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Refunds Affect Your True Advertising ROAS
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Ad platforms usually report conversion value when the purchase happens. If the order is refunded later and that adjustment does not flow back into the same reporting, platform ROAS can overstate retained revenue.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Ads spend: $10,000.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Attributed purchase revenue: $50,000.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Platform ROAS: 5.0x.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            If $8,000 of those orders are later refunded, retained revenue is $42,000 before considering attribution overlap.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Net revenue ROAS: 4.2x.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Returns vary by product and campaign</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A clothing campaign attracting poor-fit customers may have higher refund rates than a repeat purchase campaign. Product-level ROAS without return behaviour can promote the wrong SKU.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use contribution after expected refunds</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            For target-setting, include a realistic return/refund allowance based on historical data.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Track creative quality too</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Overpromising ads can increase conversion and returns simultaneously. A high-purchase campaign with high refund rate is not a winner.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-shipping-revenue-count-toward-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shipping Revenue Count Toward ROAS?</Link></li>
            <li><Link href="/resources/how-discounts-change-your-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Discounts Change Your Break-Even ROAS</Link></li>
            <li><Link href="/resources/what-roas-do-you-need-with-a-50-percent-gross-margin" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What ROAS Do You Need With a 50% Gross Margin?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want to know what the number actually means?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If platform ROAS looks strong but Shopify refunds materially reduce what the business keeps, send us an inquiry. We can build more realistic net performance reporting.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
