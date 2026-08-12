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
  "headline": "How Much Discount Is Too Much for Ecommerce?",
  "description": "A discount becomes too large when the incremental sales and customer value it creates no longer compensate for the margin you give away.",
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
    "@id": "https://www.attribix.app/resources/how-much-discount-is-too-much-for-ecommerce"
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
      "name": "How Much Discount Is Too Much for Ecommerce",
      "item": "https://www.attribix.app/resources/how-much-discount-is-too-much-for-ecommerce"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Much Discount Is Too Much for Ecommerce" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Much Discount Is Too Much for Ecommerce?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A discount becomes too large when the incremental sales and customer value it creates no longer compensate for the margin you give away.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              That point is different for every product.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with contribution margin</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Suppose a $100 product has $55 in variable costs.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Full-price contribution before advertising = $45.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            At 20% off:
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Revenue becomes $80.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            If costs remain $55, contribution falls to $25.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            You did not reduce profit by 20%. You reduced contribution before ads by roughly 44%.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion must increase enough to compensate</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              The discount can still be profitable if it generates substantially more orders, increases AOV or acquires valuable repeat customers.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch customer training</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Frequent discounts teach shoppers to delay purchases. Once customers expect 25% off every month, the “normal” price becomes less believable.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use targeted discounts where possible</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Rather than discounting every order, consider:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>bundles</li>
              <li>first-order incentives</li>
              <li>clearance</li>
              <li>customer-specific offers</li>
              <li>free-shipping thresholds</li>
              <li>gifts</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Calculate before publishing the promotion</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Discount depth should come from margin and expected lift, not because a competitor ran 30% off.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/when-increasing-your-price-can-actually-improve" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When Increasing Your Price Can Actually Improve Advertising Performance</Link></li>
            <li><Link href="/resources/why-too-many-trust-badges-can-make-a-store-look-less" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Too Many Trust Badges Can Make a Store Look Less Trustworthy</Link></li>
            <li><Link href="/resources/do-trust-badges-still-improve-ecommerce-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Do Trust Badges Still Improve Ecommerce Conversion Rates?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need a second opinion on the offer?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify store generates strong promotional revenue but very little profit, contact us. We can help calculate how much discount your economics can actually support.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
