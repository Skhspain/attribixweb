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
  "headline": "Shopify Pixel vs Meta CAPI: Do You Need Both?",
  "description": "For most robust Meta tracking setups, browser Pixel and server-side CAPI are complementary rather than mutually exclusive.",
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
    "@id": "https://www.attribix.app/resources/shopify-pixel-vs-meta-capi-do-you-need-both"
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
      "name": "Shopify Pixel vs Meta CAPI",
      "item": "https://www.attribix.app/resources/shopify-pixel-vs-meta-capi-do-you-need-both"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Shopify Pixel vs Meta CAPI" }]} />
          <Eyebrow>Tracking & Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify Pixel vs Meta CAPI: Do You Need Both?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              For most robust Meta tracking setups, browser Pixel and server-side CAPI are complementary rather than mutually exclusive.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Pixel observes browser activity</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            The browser event can capture actions and browser identifiers directly from the user&apos;s session, subject to consent and browser limitations.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">CAPI sends eligible events from the server side</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Server events can be more resilient to certain browser restrictions and can include first-party matching data when properly collected and permitted.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Sending both requires deduplication</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If the same purchase is sent through Pixel and CAPI, Meta needs a shared identifier such as the appropriate event ID so it can recognize one business event rather than two separate purchases.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            Seeing “Browser” and “Server” in Events Manager is therefore not evidence of duplication by itself.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why not use only CAPI?</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Browser and server signals can complement each other. Meta&apos;s current documentation should guide the recommended implementation because platform details evolve.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test the actual purchase count</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A technically elegant setup is worthless if Meta receives the wrong value, currency or duplicate purchase events. Compare test orders and live Shopify orders carefully.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-tag-assistant-shows-multiple-google-tags-what" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Tag Assistant Shows Multiple Google Tags: What Does It Mean?</Link></li>
            <li><Link href="/resources/shopify-theme-change-broke-tracking-what-to-check" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Theme Change Broke Tracking: What to Check</Link></li>
            <li><Link href="/resources/shopify-app-installation-changed-conversion-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify App Installation Changed Conversion Tracking: What Happened?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want the numbers checked before you act on them?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are unsure whether Pixel and CAPI are working together correctly on Shopify, contact us. We can audit the events and deduplication.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
