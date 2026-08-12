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
  "headline": "Should Shopify Product Pages Show Reviews Near the Top?",
  "description": "For many products, showing a review summary near the top is useful because it answers an immediate trust question: \"Have other people bought this, and were they happy?\" That does not mean the full review feed belongs above the Add to Cart button.",
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
    "@id": "https://www.attribix.app/resources/reviews-near-top-product-page"
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
      "name": "Should Shopify Product Pages Show Reviews...",
      "item": "https://www.attribix.app/resources/reviews-near-top-product-page"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Shopify Product Pages Show Reviews..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Shopify Product Pages Show Reviews Near the Top?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            For many products, showing a review summary near the top is useful because it answers an immediate trust question: &quot;Have other people bought this, and were they happy?&quot; That does not mean the full review feed belongs above the Add to Cart button.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use compact proof early</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A star rating with a genuine review count can add confidence without dominating the page. It can also act as a link that jumps to detailed reviews further down.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Full reviews belong where customers need evidence</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Long written reviews, photos and customer questions are especially useful after the visitor understands the product and starts evaluating risk.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t fake abundance</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A new store with six reviews should not design the page to imply thousands. Genuine modest proof is better than suspicious social proof.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Review quality matters more than stars alone</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Specific reviews that explain fit, durability, shipping or use cases answer objections. &quot;Amazing product!!!&quot; repeated 100 times does not teach the shopper much.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test whether reviews solve the actual problem</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              If the product page has strong Add to Cart but poor checkout completion, moving review stars five centimetres higher may not matter. CRO should follow the bottleneck. For many ecommerce pages, a compact rating near the title is sensible. The deeper review content should support the decision later without overwhelming the first screen.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/shopify-product-page-above-the-fold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Above the Fold on a Shopify Product Page?</Link></li>
            <li><Link href="/resources/does-free-shipping-increase-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Does Free Shipping Increase Shopify Conversion Rate?</Link></li>
            <li><Link href="/resources/shopify-product-page-not-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Product Page Not Converting: What to Check</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure where the page loses customers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your store has reviews but they are not helping customers make the buying decision, send us an inquiry. We can review where proof belongs in the funnel.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
