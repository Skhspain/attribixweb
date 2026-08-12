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
  "headline": "What Should Be Above the Fold on a Shopify Product Page?",
  "description": "The first screen of a product page should help a customer answer one question: \"Is this worth looking at?\" It does not need to contain every sales argument on the page.",
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
    "@id": "https://www.attribix.app/resources/shopify-product-page-above-the-fold"
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
      "name": "What Should Be Above the Fold on a Shopify...",
      "item": "https://www.attribix.app/resources/shopify-product-page-above-the-fold"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Should Be Above the Fold on a Shopify..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Should Be Above the Fold on a Shopify Product Page?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The first screen of a product page should help a customer answer one question: &quot;Is this worth looking at?&quot; It does not need to contain every sales argument on the page.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The essentials usually include</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Clear product imagery; product name or understandable descriptor; price; variant or size selection where required; primary purchase CTA; one or two high-value trust/value cues. Depending on the product, ratings, delivery information or a concise value proposition may also deserve early visibility.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid making the customer hunt</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If the page opens with a huge lifestyle image and the price or Add to Cart button is two screens down, ready-to-buy visitors are forced to work unnecessarily. On the other hand, cramming eight badges, payment logos, shipping promises and five benefit bullets into a small mobile screen can make the page feel chaotic.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match the buying complexity</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A familiar low-cost product needs less explanation than an unfamiliar premium device. The latter may need a short explanatory sentence or proof before price feels meaningful.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test on mobile</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              &quot;Above the fold&quot; varies by device. Review common phone sizes and make sure the primary action and product information are not pushed away by announcement bars, cookie banners or sticky widgets. The first screen should orient the customer and make the next action obvious. The rest of the page can do the deeper persuasion.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/shopify-product-page-not-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Product Page Not Converting: What to Check</Link></li>
            <li><Link href="/resources/reviews-near-top-product-page" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify Product Pages Show Reviews Near the Top?</Link></li>
            <li><Link href="/resources/improve-shopify-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Improve Shopify Conversion Rate Without Increasing Ad Spend</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clear read on your funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify product page feels crowded or hides the key purchase information, contact us. We can review the mobile and paid-traffic experience.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
