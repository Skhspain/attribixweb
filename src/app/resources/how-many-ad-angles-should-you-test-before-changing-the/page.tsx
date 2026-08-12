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
  "headline": "How Many Ad Angles Should You Test Before Changing the Offer?",
  "description": "There is no magic number of ad angles that proves an offer is bad.",
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
    "@id": "https://www.attribix.app/resources/how-many-ad-angles-should-you-test-before-changing-the"
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
      "name": "How Many Ad Angles Should You Test Before...",
      "item": "https://www.attribix.app/resources/how-many-ad-angles-should-you-test-before-changing-the"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Many Ad Angles Should You Test Before..." }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Many Ad Angles Should You Test Before Changing the Offer?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              There is no magic number of ad angles that proves an offer is bad.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The useful question is whether several credible ways of presenting the product have generated qualified traffic and the same conversion problem keeps appearing.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">One bad creative proves little</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If one UGC video gets no sales, you have learned almost nothing about the underlying offer.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Multiple strong angles create better evidence</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Suppose you test:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>problem</li>
              <li>demonstration</li>
              <li>customer proof</li>
              <li>price</li>
              <li>comparison</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              Several achieve respectable CTR and send engaged customers to the product page, but Add-to-Cart remains consistently weak.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Now the offer deserves more scrutiny.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look across channels</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If high-intent Google users also reject the product at a relevant price/page, that strengthens the evidence that the problem sits beyond Meta creative.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid endless creative as an excuse</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Some teams produce 100 new ads because admitting the product or offer is weak is harder.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Creative testing should help localize the problem. Once traffic repeatedly behaves the same way after the click, investigate the next stage.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-testing-new-creatives-won-t-fix-a-weak-offer" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Testing New Creatives Won&apos;t Fix a Weak Offer</Link></li>
            <li><Link href="/resources/how-to-create-different-ad-angles-for-the-same-product" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Create Different Ad Angles for the Same Product</Link></li>
            <li><Link href="/resources/how-to-know-whether-you-have-a-creative-problem-or-an" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Know Whether You Have a Creative Problem or an Offer Problem</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need a second opinion on the offer?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you have tested dozens of Meta creatives and qualified visitors still do not buy, contact us. We can help determine whether it is time to stop blaming the ads.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
