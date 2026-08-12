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
  "headline": "Good Email Click Rate but No Sales: What to Check",
  "description": "If email recipients click and do not buy, stop optimizing the subject line.",
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
    "@id": "https://www.attribix.app/resources/good-email-click-rate-but-no-sales-what-to-check"
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
      "name": "Good Email Click Rate but No Sales",
      "item": "https://www.attribix.app/resources/good-email-click-rate-but-no-sales-what-to-check"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Good Email Click Rate but No Sales" }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Good Email Click Rate but No Sales: What to Check
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              If email recipients click and do not buy, stop optimizing the subject line. The customer has already reached the website.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check landing-page match</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            An email promoting one product should not lead to a broad collection unless browsing is intentional. Preserve the promise and offer from email to page.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check customer state</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Existing customers may click to browse without immediate intent. First-time subscribers may still need proof. Segment conversion by lifecycle where possible.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Follow the Shopify funnel</h2>
          <div className="space-y-4">
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>clicks → product engagement</li>
            <li>product engagement → cart</li>
            <li>cart → checkout</li>
            <li>checkout → purchase</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            The first weak transition tells you more than the email CTR.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Inspect offer mechanics</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Expired codes, incorrect auto-discounts, unavailable variants and promotion exclusions can create high clicks and frustration.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Verify attribution</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Some customers click, return later directly and buy. Depending on attribution windows, the email platform may or may not receive credit.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            A good click rate proves the email created enough interest to visit. Now diagnose why the visit fails commercially.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/email-open-rate-is-high-but-sales-are-low-what-does" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Email Open Rate Is High but Sales Are Low: What Does That Mean?</Link></li>
            <li><Link href="/resources/how-to-measure-email-profitability-instead-of-just" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Measure Email Profitability Instead of Just Revenue</Link></li>
            <li><Link href="/resources/are-you-sending-too-many-marketing-emails" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Are You Sending Too Many Marketing Emails?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need this measured properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If email traffic reaches Shopify but conversion is poor, contact us. We can review the landing experience and attribution alongside paid traffic.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
