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
  "headline": "Why Shopify Mobile Traffic Doesn't Convert",
  "description": "When mobile traffic does not convert, start by separating traffic quality from mobile experience.",
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
    "@id": "https://www.attribix.app/resources/shopify-mobile-traffic-not-converting"
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
      "name": "Why Shopify Mobile Traffic Doesn't Convert",
      "item": "https://www.attribix.app/resources/shopify-mobile-traffic-not-converting"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Shopify Mobile Traffic Doesn&apos;t Convert" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Shopify Mobile Traffic Doesn&apos;t Convert
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            When mobile traffic does not convert, start by separating traffic quality from mobile experience. A store can receive thousands of cheap social clicks from people with low purchase intent. Improving button size will not turn all of them into buyers.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare mobile by source</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Look at Meta, Google, email and direct traffic separately. If all mobile sources underperform, the site is more suspicious. If only one channel struggles, traffic quality may be the bigger issue.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Walk the entire purchase path on a phone</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Check: page load; cookie banner; popup behaviour; product images; variant selection; Add to Cart; cart drawer; discount code; shipping information; Shop Pay/card/BNPL; form fields; error messages. Do not test only on a large modern phone connected to office Wi-Fi.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Follow the funnel</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Mobile product views but few carts = product/offer/page problem. Healthy carts but weak checkout = cart friction. Healthy checkout but no purchase = payment, shipping or technical issue.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check tracking too</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If Shopify orders are occurring but an ad platform reports few mobile conversions, measurement can make the channel look worse than it is.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/shopify-mobile-conversion-rate-lower-than-desktop" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Mobile Conversion Rate Lower Than Desktop: Is That Normal?</Link></li>
            <li><Link href="/resources/shopify-page-speed-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Much Does Page Speed Affect Shopify Sales?</Link></li>
            <li><Link href="/resources/free-shipping-vs-discount-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Free Shipping vs Discount: Which Converts Better?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a clear read on your funnel?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If mobile is generating most of your paid traffic and too little revenue, contact us. We can review traffic quality and the mobile buying path together.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
