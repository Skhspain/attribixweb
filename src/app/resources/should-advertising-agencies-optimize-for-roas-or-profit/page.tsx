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
  "headline": "Should Advertising Agencies Optimize for ROAS or Profit?",
  "description": "An agency can influence ROAS directly through advertising.",
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
    "@id": "https://www.attribix.app/resources/should-advertising-agencies-optimize-for-roas-or-profit"
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
      "name": "Should Advertising Agencies Optimize for...",
      "item": "https://www.attribix.app/resources/should-advertising-agencies-optimize-for-roas-or-profit"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Should Advertising Agencies Optimize for..." }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Advertising Agencies Optimize for ROAS or Profit?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              An agency can influence ROAS directly through advertising. It cannot control every component of company profit. That is why the sensible answer is: use ROAS as an operating metric, but manage it inside a profit framework.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why ROAS alone is incomplete</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A campaign with 600% ROAS may sell low-margin products. Another at 350% may sell products with higher contribution and stronger repeat purchase.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            If the agency is rewarded only for platform ROAS, it can be incentivized to protect easy branded or retargeting revenue instead of expanding profitable acquisition.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The client needs to provide business economics</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Agencies need accurate information about:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>product margins</li>
              <li>shipping/fulfilment</li>
              <li>target contribution</li>
              <li>AOV</li>
              <li>refund rates</li>
              <li>new vs returning customer value</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              Without those inputs, “optimize for profit” becomes a slogan.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use several layers</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Campaign teams can manage CPA/ROAS daily. Weekly/monthly reporting should connect those results to new-customer volume, blended marketing efficiency and contribution where available.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            The strongest agency relationship is not built around the prettiest Ads Manager screenshot. It is built around commercially useful growth.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/is-a-meta-ads-agency-worth-it" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is a Meta Ads Agency Worth It?</Link></li>
            <li><Link href="/resources/is-a-google-ads-agency-worth-it" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is a Google Ads Agency Worth It?</Link></li>
            <li><Link href="/resources/is-an-ecommerce-marketing-agency-worth-the-cost" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is an Ecommerce Marketing Agency Worth the Cost?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure what you should be getting?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want Meta and Google management that considers actual Shopify economics rather than platform ROAS alone, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
