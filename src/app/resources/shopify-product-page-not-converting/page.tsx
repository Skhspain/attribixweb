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
  "headline": "Shopify Product Page Not Converting: What to Check",
  "description": "A product page can fail even when the ad is doing its job.",
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
    "@id": "https://www.attribix.app/resources/shopify-product-page-not-converting"
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
      "name": "Shopify Product Page Not Converting",
      "item": "https://www.attribix.app/resources/shopify-product-page-not-converting"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Shopify Product Page Not Converting" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify Product Page Not Converting: What to Check
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A product page can fail even when the ad is doing its job. The key is figuring out whether visitors do not understand the product, do not believe the promise or simply do not think the value justifies the price.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with traffic quality</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If the page receives visitors from irrelevant searches or curiosity-driven ads, no amount of button optimization will rescue conversion. Compare the landing traffic source and the promise that brought people there.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Can the customer answer the basic buying questions quickly?</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A strong page should make it easy to understand: what the product is; who it is for; why it is different; price; variants/sizing; delivery; returns; proof; what happens after clicking Add to Cart.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at behaviour</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If visitors spend time on the page but rarely add to cart, investigate price, product fit, proof and offer. If add-to-cart is healthy but purchase rate is weak, the product page may not be the main problem. Follow the funnel into cart and checkout.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check mobile first</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Buttons hidden below huge images, awkward variant selectors and popup overlap can destroy mobile conversion while the desktop page looks fine. Product-page optimization is not a list of &quot;best practices.&quot; It is the process of answering the questions your specific customer needs answered before buying.
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
            <li><Link href="/resources/shopify-product-page-above-the-fold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Above the Fold on a Shopify Product Page?</Link></li>
            <li><Link href="/resources/good-shopify-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Shopify Conversion Rate?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the funnel reviewed properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your ads generate product-page traffic but the page does not turn it into carts and sales, send us an inquiry. We can review the ad-to-page journey.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
