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
  "headline": "What Should Be Included in a Google Ads Management Service?",
  "description": "Google Ads management should cover the parts of the ecosystem that determine whether clicks become profitable customers.",
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
    "@id": "https://www.attribix.app/resources/what-should-be-included-in-a-google-ads-management"
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
      "name": "What Should Be Included in a Google Ads...",
      "item": "https://www.attribix.app/resources/what-should-be-included-in-a-google-ads-management"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "What Should Be Included in a Google Ads..." }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Should Be Included in a Google Ads Management Service?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Google Ads management should cover the parts of the ecosystem that determine whether clicks become profitable customers. For ecommerce, that usually extends beyond the Google Ads interface.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Search management</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Expect work around:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>keyword/query strategy</li>
            <li>search terms</li>
            <li>negative keywords</li>
            <li>ad copy/assets</li>
            <li>bidding</li>
            <li>budget</li>
            <li>brand/non-brand separation</li>
            <li>landing pages</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shopping and PMax</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Ecommerce management should also understand:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Merchant Center</li>
              <li>product feeds</li>
              <li>disapprovals</li>
              <li>product-level performance</li>
              <li>PMax structure</li>
              <li>margin/product priorities</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion tracking</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            The agency should know which purchase action drives bidding, whether values/transaction IDs are correct and whether GA4/native conversions are duplicated.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Reporting</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A useful service explains what Google is claiming and checks the result against Shopify. Strong branded ROAS should not hide weak acquisition.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Strategy, not activity</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Not every campaign needs edits every day. The service should create deliberate changes based on data and business goals.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-should-be-included-in-a-meta-ads-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Included in a Meta Ads Management Service?</Link></li>
            <li><Link href="/resources/can-cookie-consent-reduce-your-reported-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Can Cookie Consent Reduce Your Reported ROAS?</Link></li>
            <li><Link href="/resources/why-meta-view-through-attribution-can-overvalue-meta" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Meta View-Through Attribution Can Overvalue Meta Ads</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Strategy, not activity</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want Google Ads management that includes Search, Shopping, PMax and conversion measurement rather than bid changes alone, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
