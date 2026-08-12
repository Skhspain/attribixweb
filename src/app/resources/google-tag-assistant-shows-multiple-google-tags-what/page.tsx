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
  "headline": "Google Tag Assistant Shows Multiple Google Tags: What Does It Mean?",
  "description": "Seeing multiple Google tags is not automatically an error.",
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
    "@id": "https://www.attribix.app/resources/google-tag-assistant-shows-multiple-google-tags-what"
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
      "name": "Google Tag Assistant Shows Multiple Google...",
      "item": "https://www.attribix.app/resources/google-tag-assistant-shows-multiple-google-tags-what"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google Tag Assistant Shows Multiple Google..." }]} />
          <Eyebrow>Tracking & Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Tag Assistant Shows Multiple Google Tags: What Does It Mean?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Seeing multiple Google tags is not automatically an error. A store may legitimately use GA4, Google Ads conversions and other Google products. The concern is whether multiple implementations are sending the same business event more than once.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Identify each destination</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Document the tag IDs and which systems own them:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>Google & YouTube app</li>
            <li>GTM</li>
            <li>Shopify custom pixel</li>
            <li>theme code</li>
            <li>third-party tracking app</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Pay special attention to Purchase</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Page-view duplication is messy. Purchase duplication directly affects ROAS, bidding and conversion count.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Check whether:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>GA4 Purchase is imported into Google Ads</li>
              <li>a native Google Ads Purchase action also fires</li>
              <li>both are set to Primary</li>
              <li>transaction IDs are present</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not remove tags based only on quantity</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A second Google tag may be intentionally configured for a different Ads account. Verify business ownership and campaign dependencies before deleting anything.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Aim for one clear event map</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              For every purchase destination, know exactly which integration sends it and why.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/shopify-theme-change-broke-tracking-what-to-check" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Theme Change Broke Tracking: What to Check</Link></li>
            <li><Link href="/resources/shopify-app-installation-changed-conversion-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify App Installation Changed Conversion Tracking: What Happened?</Link></li>
            <li><Link href="/resources/shopify-pixel-vs-meta-capi-do-you-need-both" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Pixel vs Meta CAPI: Do You Need Both?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this verified end to end?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Tag Assistant shows several Google implementations and your conversion counts do not make sense, contact us. We can trace which tags are actually affecting Google Ads.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
