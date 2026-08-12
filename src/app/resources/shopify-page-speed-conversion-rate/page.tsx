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
  "headline": "How Much Does Page Speed Affect Shopify Sales?",
  "description": "Page speed matters because every extra wait gives a visitor another chance to leave, especially on mobile and paid traffic.",
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
    "@id": "https://www.attribix.app/resources/shopify-page-speed-conversion-rate"
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
      "name": "How Much Does Page Speed Affect Shopify Sales",
      "item": "https://www.attribix.app/resources/shopify-page-speed-conversion-rate"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Much Does Page Speed Affect Shopify Sales" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Much Does Page Speed Affect Shopify Sales?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Page speed matters because every extra wait gives a visitor another chance to leave, especially on mobile and paid traffic. But speed scores can also become an obsession disconnected from actual customer behaviour.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure real experience</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A laboratory score is useful for diagnosing technical issues, but customers experience actual load time on actual devices and networks. Use field performance data where available and test common mobile journeys yourself.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Paid traffic makes slowness expensive</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If 10% of ad clicks leave before the landing page meaningfully loads, you paid for traffic that never had a chance to evaluate the product. Compare ad clicks with landing-page views where the platform provides them. A large gap can suggest loading or redirect problems, though tracking definitions also differ.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Focus on the elements customers need first</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Optimize large hero images, scripts, app widgets, fonts and third-party code. Lazy-load content that does not need to appear immediately.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not sacrifice the store to chase a score</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Removing every review app, video and useful product feature can make the page technically faster and commercially worse. The goal is a fast useful page. Speed is part of conversion hygiene. Fix obvious delays, particularly on mobile, then judge whether the customer journey improves.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/free-shipping-vs-discount-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Free Shipping vs Discount: Which Converts Better?</Link></li>
            <li><Link href="/resources/shopify-mobile-conversion-rate-lower-than-desktop" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Mobile Conversion Rate Lower Than Desktop: Is That Normal?</Link></li>
            <li><Link href="/resources/does-free-shipping-increase-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Does Free Shipping Increase Shopify Conversion Rate?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure where the page loses customers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your paid traffic is expensive and the Shopify store feels slow or overloaded with apps, contact us. We can review the performance bottleneck in the context of conversion.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
