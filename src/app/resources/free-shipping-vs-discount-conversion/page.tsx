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
  "headline": "Free Shipping vs Discount: Which Converts Better?",
  "description": "A discount reduces the price of the product.",
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
    "@id": "https://www.attribix.app/resources/free-shipping-vs-discount-conversion"
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
      "name": "Free Shipping vs Discount",
      "item": "https://www.attribix.app/resources/free-shipping-vs-discount-conversion"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Free Shipping vs Discount" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Free Shipping vs Discount: Which Converts Better?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A discount reduces the price of the product. Free shipping removes a fee customers often resent. Which one converts better depends on the numbers and how customers perceive the offer.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare equivalent economics</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If average shipping is $7, compare the impact of free shipping with a discount that costs the business roughly the same amount. Comparing &quot;free shipping&quot; with &quot;30% off&quot; tells you more about offer size than offer type.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Free shipping can remove checkout friction</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              It is particularly valuable when shipping charges are a common abandonment reason. The customer knows the price they see is close to the price they will pay.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Discounts can create stronger headline value</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A visible 15% off may be more compelling in ads, especially for products where shipping is already cheap or expected. But frequent discounts can train customers to wait for sales and reduce perceived product value.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at AOV and margin</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Free shipping thresholds may increase basket size. Percentage discounts can reduce contribution margin more heavily on large orders. Run the offer through actual order economics. The winner is not the one with the highest conversion rate. It is the one that generates the strongest contribution profit and customer quality after acquisition cost.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/does-free-shipping-increase-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Does Free Shipping Increase Shopify Conversion Rate?</Link></li>
            <li><Link href="/resources/shopify-page-speed-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Much Does Page Speed Affect Shopify Sales?</Link></li>
            <li><Link href="/resources/reviews-near-top-product-page" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify Product Pages Show Reviews Near the Top?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clear read on your funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are choosing between free shipping and discounting for paid campaigns, send us an inquiry. We can compare the offers against your margins and conversion funnel.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
