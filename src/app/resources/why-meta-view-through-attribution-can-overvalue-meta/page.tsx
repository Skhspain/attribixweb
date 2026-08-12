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
  "headline": "Why Meta View-Through Attribution Can Overvalue Meta Ads",
  "description": "View-through attribution gives Meta credit when a person sees an ad, does not click it and later purchases within the relevant window.",
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
    "@id": "https://www.attribix.app/resources/why-meta-view-through-attribution-can-overvalue-meta"
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
      "name": "Why Meta View-Through Attribution Can...",
      "item": "https://www.attribix.app/resources/why-meta-view-through-attribution-can-overvalue-meta"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Meta View-Through Attribution Can..." }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Meta View-Through Attribution Can Overvalue Meta Ads
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              View-through attribution gives Meta credit when a person sees an ad, does not click it and later purchases within the relevant window. That can capture real advertising influence. It can also assign credit to people who would have bought anyway.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why view-through exists</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Not every advertising effect produces an immediate click. Someone may notice a product, remember it and later return directly or through Google.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Ignoring all of those journeys can undervalue visual advertising.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why it can overstate impact</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Large retargeting audiences can show ads to people already very close to purchase. If a shopper added to cart before seeing the ad, the impression may receive credit without being the true cause of the order.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use it as one perspective</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Compare click-only views, view-inclusive views and total Shopify results where the platform allows. Pay particular attention to retargeting and high-frequency audiences.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Incrementality is the deeper question</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              The only perfect attribution would know what the shopper would have done without the impression. Reporting models cannot observe that counterfactual directly.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              View-through is neither fake nor automatically incremental. Treat it as attributed influence with uncertainty.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/why-last-click-attribution-undervalues-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Last-Click Attribution Undervalues Meta Ads</Link></li>
            <li><Link href="/resources/ltv-vs-cac-for-ecommerce-what-should-you-aim-for" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">LTV vs CAC for Ecommerce: What Should You Aim For?</Link></li>
            <li><Link href="/resources/how-to-calculate-cac-for-a-shopify-store" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Calculate CAC for a Shopify Store</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want to know what the number actually means?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If a large share of Meta ROAS comes from view-through conversions and you are unsure how much to trust, send us an inquiry. We can compare it with the broader Shopify performance.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
