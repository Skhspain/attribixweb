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
  "headline": "Does Free Shipping Increase Shopify Conversion Rate?",
  "description": "Free shipping can increase conversion because it removes one of ecommerce's most disliked surprises.",
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
    "@id": "https://www.attribix.app/resources/does-free-shipping-increase-conversion-rate"
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
      "name": "Does Free Shipping Increase Shopify...",
      "item": "https://www.attribix.app/resources/does-free-shipping-increase-conversion-rate"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Does Free Shipping Increase Shopify..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does Free Shipping Increase Shopify Conversion Rate?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Free shipping can increase conversion because it removes one of ecommerce&apos;s most disliked surprises. It can also destroy margin if the business pays too much to make every order &quot;free.&quot;
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Customers care about the total delivered price</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A $50 product with $10 shipping and a $60 product with free shipping may be economically identical. Psychologically, they can feel different because the shipping charge appears late and feels like an added penalty.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure profit, not conversion alone</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Suppose free shipping raises conversion by 12% but adds $8 cost to every order. The extra sales may or may not compensate for the reduced contribution margin. Calculate: shipping cost per order; gross margin; conversion lift; AOV change; repeat purchase impact.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Thresholds can protect margin</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              &quot;Free shipping over $75&quot; can encourage customers to add an item while avoiding full subsidy on small baskets. The threshold should be based on economics, not a competitor&apos;s number.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Communicate it early</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If shipping is free or free over a threshold, tell customers before checkout. Hiding the benefit until the last step wastes part of its conversion value. Free shipping is an offer decision, not merely a CRO trick. The best version improves both customer confidence and total order economics.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/reviews-near-top-product-page" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify Product Pages Show Reviews Near the Top?</Link></li>
            <li><Link href="/resources/free-shipping-vs-discount-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Free Shipping vs Discount: Which Converts Better?</Link></li>
            <li><Link href="/resources/shopify-product-page-above-the-fold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Above the Fold on a Shopify Product Page?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the funnel reviewed properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If shipping cost is hurting checkout conversion but universal free shipping would damage margin, contact us. We can model a threshold around your AOV and acquisition costs.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
