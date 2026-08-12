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
  "headline": "How to Improve Shopify Conversion Rate Without Increasing Ad Spend",
  "description": "If traffic stays the same and conversion rate improves, revenue can grow without buying another click.",
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
    "@id": "https://www.attribix.app/resources/improve-shopify-conversion-rate"
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
      "name": "How to Improve Shopify Conversion Rate...",
      "item": "https://www.attribix.app/resources/improve-shopify-conversion-rate"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Improve Shopify Conversion Rate..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Improve Shopify Conversion Rate Without Increasing Ad Spend
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            If traffic stays the same and conversion rate improves, revenue can grow without buying another click. That is why conversion work is often the cheapest growth opportunity in an account already spending heavily on ads. The mistake is applying random CRO tactics without finding the bottleneck first.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Find the weak stage</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Look at the journey: sessions → product views → add to cart → checkout → purchase. If product views are healthy but add-to-cart is weak, focus on product value, price, imagery, reviews and offer. If carts are strong but checkout is weak, inspect shipping, delivery, payment methods and unexpected costs. If checkout starts are strong but purchase completion is poor, investigate errors, localization and payment friction.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Improve message match</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Paid visitors should land on a page that continues the promise made in the ad. A Meta ad selling &quot;easy setup in five minutes&quot; should not send visitors to a generic homepage where that benefit is buried.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Remove uncertainty</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Clear delivery dates, returns, sizing, guarantees, reviews and product demonstration can reduce the questions that stop a purchase.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Protect speed and mobile usability</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Most ecommerce traffic is often mobile. Test the entire buying path on a real phone, not only a desktop browser. CRO is not about adding more persuasion everywhere. It is about removing the specific reason qualified customers fail to complete the next step.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/good-shopify-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Is a Good Shopify Conversion Rate?</Link></li>
            <li><Link href="/resources/shopify-product-page-not-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Product Page Not Converting: What to Check</Link></li>
            <li><Link href="/resources/shopify-product-page-above-the-fold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Above the Fold on a Shopify Product Page?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure where the page loses customers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are paying for traffic that reaches Shopify but does not convert well enough, contact us. We can identify where the funnel loses customers before you increase ad spend.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
