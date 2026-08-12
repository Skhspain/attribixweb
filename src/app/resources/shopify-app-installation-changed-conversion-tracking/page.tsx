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
  "headline": "Shopify App Installation Changed Conversion Tracking: What Happened?",
  "description": "Marketing and analytics apps often install their own pixels, server events or customer-event integrations.",
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
    "@id": "https://www.attribix.app/resources/shopify-app-installation-changed-conversion-tracking"
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
      "name": "Shopify App Installation Changed Conversion...",
      "item": "https://www.attribix.app/resources/shopify-app-installation-changed-conversion-tracking"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Shopify App Installation Changed Conversion..." }]} />
          <Eyebrow>Tracking & Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify App Installation Changed Conversion Tracking: What Happened?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Marketing and analytics apps often install their own pixels, server events or customer-event integrations. Adding one can therefore change tracking even when the app&apos;s main purpose seems unrelated to advertising.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check what the app installed</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Review its documentation and Shopify permissions. Does it send:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>Meta CAPI</li>
            <li>Google Ads conversions</li>
            <li>GA4</li>
            <li>server-side events</li>
            <li>customer data</li>
            <li>checkout events?</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare before and after</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Did conversion counts jump, disappear or change value on the installation date? Did Shopify order volume stay stable? That pattern can reveal measurement changes rather than performance changes.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch for duplicated ownership</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A new tracking app can sit beside Meta&apos;s native integration or an existing Google setup. Two “correct” implementations together can become one incorrect result.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Disable carefully</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Removing an app without understanding dependencies can create the opposite problem. Map the event flow before turning things off.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep a tracking inventory</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Document every app or script that sends marketing events. That simple habit makes future troubleshooting dramatically easier.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/shopify-theme-change-broke-tracking-what-to-check" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Theme Change Broke Tracking: What to Check</Link></li>
            <li><Link href="/resources/google-tag-assistant-shows-multiple-google-tags-what" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Tag Assistant Shows Multiple Google Tags: What Does It Mean?</Link></li>
            <li><Link href="/resources/shopify-pixel-vs-meta-capi-do-you-need-both" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify Pixel vs Meta CAPI: Do You Need Both?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want the numbers checked before you act on them?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your conversion data changed after installing a Shopify app, contact us. We can identify whether the app added, replaced or duplicated an existing tracking path.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
