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
  "headline": "Shopify Mobile Conversion Rate Lower Than Desktop: Is That Normal?",
  "description": "It is common for mobile and desktop conversion rates to differ, but \"mobile is always lower\" is not a useful excuse for a poor mobile store.",
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
    "@id": "https://www.attribix.app/resources/shopify-mobile-conversion-rate-lower-than-desktop"
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
      "name": "Shopify Mobile Conversion Rate Lower Than...",
      "item": "https://www.attribix.app/resources/shopify-mobile-conversion-rate-lower-than-desktop"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Shopify Mobile Conversion Rate Lower Than..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify Mobile Conversion Rate Lower Than Desktop: Is That Normal?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            It is common for mobile and desktop conversion rates to differ, but &quot;mobile is always lower&quot; is not a useful excuse for a poor mobile store.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Traffic behaviour differs</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Mobile users may discover products casually through social media while desktop users arrive later with stronger purchase intent. That alone can create a conversion gap.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The experience can also be worse</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Check for: slow loading; difficult variant selectors; tiny text; popups covering content; awkward payment flows; long forms; hidden delivery information; excessive sticky elements. A problem that feels minor on desktop can make the mobile page almost unusable.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment by channel</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Meta traffic is often mobile-heavy. Branded Google may contain more high-intent desktop users. Comparing device conversion without controlling for traffic source can mislead you.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at funnel steps</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Does mobile fall behind at product view → cart, or only at checkout → purchase? The answer tells you whether the issue is product-page persuasion or transaction friction. A lower mobile rate can be normal. A large unexplained drop compared with your own historical performance deserves investigation.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/shopify-page-speed-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Much Does Page Speed Affect Shopify Sales?</Link></li>
            <li><Link href="/resources/shopify-mobile-traffic-not-converting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Shopify Mobile Traffic Doesn&apos;t Convert</Link></li>
            <li><Link href="/resources/free-shipping-vs-discount-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Free Shipping vs Discount: Which Converts Better?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the funnel reviewed properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If most of your ad traffic is mobile but desktop drives a disproportionate share of sales, send us an inquiry. We can find where the mobile funnel breaks.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
