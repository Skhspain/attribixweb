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
  "headline": "Should Ecommerce Landing Pages Have Navigation?",
  "description": "Removing navigation can keep users focused on the offer, but ecommerce shoppers often need to browse before buying. How to decide, and what to measure beyond conversion rate.",
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
    "@id": "https://www.attribix.app/resources/should-ecommerce-landing-pages-have-navigation"
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
      "name": "Should Ecommerce Landing Pages Have Navigation",
      "item": "https://www.attribix.app/resources/should-ecommerce-landing-pages-have-navigation"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Ecommerce Landing Pages Have Navigation" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Ecommerce Landing Pages Have Navigation?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Removing navigation can keep users focused on the offer. Keeping navigation can increase trust and let customers explore the brand. The right choice depends on the page and traffic, and it&apos;s a design decision to test, not a conversion superstition.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why removing navigation can help</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Every navigation link is another place the visitor can go instead of completing the intended action. A dedicated promotion or one-product funnel may genuinely benefit from reducing unrelated exits.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why ecommerce shoppers often want reassurance instead</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A shopper may legitimately need to check reviews, About, shipping, returns, other products or contact information before purchasing. That exploration is not necessarily &ldquo;leakage&rdquo;; a page that traps them can feel less trustworthy instead.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider traffic intent and mobile space</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Cold Meta visitors may need more brand reassurance than returning customers. High-intent Google visitors may prefer to compare related products. On mobile, a full navigation bar also consumes valuable space; a compact menu can preserve access without distracting from the CTA.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test more than conversion rate</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Look at purchase rate, AOV, bounce, assisted product discovery and returning behaviour together. Removing navigation may increase immediate conversion and still reduce average order value if customers stop exploring complementary products. If conversion rises 5% but AOV falls 15%, the simplification may not be a win.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Do not treat &ldquo;remove all navigation&rdquo; as a CRO law. Decide whether exploration helps or hurts this specific buying journey, and measure the full outcome before calling it a win.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-your-landing-page-show-the-price-above-the-fold" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Your Landing Page Show the Price Above the Fold?</Link></li>
            <li><Link href="/resources/what-should-the-first-screen-of-an-ecommerce-landing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should the First Screen of an Ecommerce Landing Page Say?</Link></li>
            <li><Link href="/resources/how-long-should-an-ecommerce-landing-page-be" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Long Should an Ecommerce Landing Page Be?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clear read on your funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your paid landing pages feel distracting or overly restrictive, send us an inquiry. We can review the page around the intent of the campaign.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
