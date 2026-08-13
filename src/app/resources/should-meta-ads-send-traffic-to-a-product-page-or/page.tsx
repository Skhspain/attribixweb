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
  "headline": "Should Meta Ads Send Traffic to a Product Page or Landing Page?",
  "description": "Send Meta traffic to the page that continues the selling argument with the least friction.",
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
    "@id": "https://www.attribix.app/resources/should-meta-ads-send-traffic-to-a-product-page-or"
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
      "name": "Should Meta Ads Send Traffic to a Product...",
      "item": "https://www.attribix.app/resources/should-meta-ads-send-traffic-to-a-product-page-or"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Meta Ads Send Traffic to a Product..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Meta Ads Send Traffic to a Product Page or Landing Page?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Send Meta traffic to the page that continues the selling argument with the least friction.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Sometimes that is the normal product page. Sometimes it is a dedicated landing page.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why Meta traffic specifically needs this decision made deliberately</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Most Meta traffic is colder than Google Search traffic: the
            scroll interrupted someone who wasn&apos;t actively looking for
            your product, so the page has to do more work carrying the
            feed or Stories creative&apos;s specific hook and visual
            straight through, not just confirm a search query. A product
            page that opens with generic brand navigation can lose that
            momentum in a way a Search click, which already carries
            explicit intent, tolerates better.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product pages work when the product is easy to understand</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If the ad shows the item clearly and the Shopify product page already contains strong imagery, reviews, price, variants and delivery information, rebuilding everything on a separate landing page may add little.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Dedicated pages help when the ad has a specific angle</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Suppose the product has several use cases but the ad targets runners. A landing page can continue that running-specific message, proof and objections without forcing the shopper through generic brand copy.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep commerce functionality intact</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A beautiful landing page that makes variant selection, cart behaviour or mobile checkout harder is a step backwards.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test conversion quality</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Compare:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>landing-page engagement</li>
              <li>add-to-cart</li>
              <li>checkout</li>
              <li>purchase</li>
              <li>AOV</li>
              <li>CPA</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              Do not judge only bounce rate.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The best destination feels like the next part of the ad rather than a new conversation.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/landing-page-vs-product-page-for-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Landing Page vs Product Page for Ecommerce Ads</Link></li>
            <li><Link href="/resources/when-does-an-ecommerce-brand-need-a-dedicated-landing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">When Does an Ecommerce Brand Need a Dedicated Landing Page?</Link></li>
            <li><Link href="/resources/why-your-landing-page-gets-clicks-but-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Your Landing Page Gets Clicks but No Sales</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure where the page loses customers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta gets clicks but your generic product pages fail to convert the promise made in the ad, send us an inquiry. We can help connect campaign and landing-page strategy.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
