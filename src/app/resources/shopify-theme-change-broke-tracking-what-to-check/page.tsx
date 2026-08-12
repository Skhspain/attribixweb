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
  "headline": "Shopify Theme Change Broke Tracking: What to Check",
  "description": "A theme change can remove scripts that were installed manually, alter page structure and expose tracking setups nobody realized depended on the old theme.",
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
    "@id": "https://www.attribix.app/resources/shopify-theme-change-broke-tracking-what-to-check"
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
      "name": "Shopify Theme Change Broke Tracking",
      "item": "https://www.attribix.app/resources/shopify-theme-change-broke-tracking-what-to-check"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Shopify Theme Change Broke Tracking" }]} />
          <Eyebrow>Tracking & Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify Theme Change Broke Tracking: What to Check
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A theme change can remove scripts that were installed manually, alter page structure and expose tracking setups nobody realized depended on the old theme.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Find out where each tag lived</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If Meta, Google or GTM code was inserted directly into `theme.liquid`, replacing the theme can remove it. Shopify-native app and Customer Events integrations may survive because they are not tied to the same theme files.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test the full purchase journey</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Do not stop at PageView. Verify:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>product view</li>
              <li>cart</li>
              <li>checkout events where applicable</li>
              <li>purchase</li>
              <li>value/currency</li>
              <li>browser/server deduplication</li>
            </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare deployment timing with reporting</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If Meta/Google conversions fell on the exact date the theme was published while Shopify sales remained stable, tracking is a strong suspect.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check URLs and data layers</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A redesign can change templates, DOM elements or custom JavaScript that old GTM triggers relied on.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Build tracking outside fragile theme hacks where possible</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Use current Shopify-supported integration patterns and document any theme dependency that remains.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/shopify-app-installation-changed-conversion-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify App Installation Changed Conversion Tracking: What Happened?</Link></li>
            <li><Link href="/resources/google-tag-assistant-shows-multiple-google-tags-what" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Tag Assistant Shows Multiple Google Tags: What Does It Mean?</Link></li>
            <li><Link href="/resources/shopify-pixel-vs-meta-capi-do-you-need-both" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Pixel vs Meta CAPI: Do You Need Both?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure your tracking is telling the truth?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If conversion tracking dropped after a Shopify redesign, send us an inquiry. We can compare the old/new implementation and restore the missing signals without duplicating them.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
