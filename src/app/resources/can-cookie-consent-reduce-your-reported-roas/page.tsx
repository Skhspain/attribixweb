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
  "headline": "Can Cookie Consent Reduce Your Reported ROAS?",
  "description": "Yes.",
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
    "@id": "https://www.attribix.app/resources/can-cookie-consent-reduce-your-reported-roas"
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
      "name": "Can Cookie Consent Reduce Your Reported ROAS",
      "item": "https://www.attribix.app/resources/can-cookie-consent-reduce-your-reported-roas"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Can Cookie Consent Reduce Your Reported ROAS" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Can Cookie Consent Reduce Your Reported ROAS?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              Yes. A consent change can reduce how many advertising interactions and conversions are directly observable, which can change reported ROAS even if actual Shopify sales do not move in the same way.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measurement depends on permission and platform behaviour</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            When users decline relevant storage or marketing consent, some browser tracking may not run as it did previously. Google Consent Mode can use consent signals and modelling in supported scenarios; Meta and other platforms have their own requirements and limitations.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">This can look like a campaign decline</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              If Meta or Google conversions fall 30% immediately after a CMP change but Shopify orders remain stable, investigate measurement before rebuilding the advertising.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not “fix” it by ignoring consent</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            The goal is accurate, compliant tracking within user choices and applicable law. Server-side tracking is not permission to bypass consent.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Validate the implementation</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Check:
            </p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>whether consent categories map correctly</li>
              <li>whether tags fire in each consent state as intended</li>
              <li>Consent Mode parameters where relevant</li>
              <li>CMP integration</li>
              <li>duplicate or blocked events</li>
            </ul>
            <p className="text-white/60 leading-relaxed text-sm">
              A lower reported ROAS can sometimes be a measurement consequence rather than a real revenue loss.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/what-should-be-included-in-a-meta-ads-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Included in a Meta Ads Management Service?</Link></li>
            <li><Link href="/resources/what-should-be-included-in-a-google-ads-management" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What Should Be Included in a Google Ads Management Service?</Link></li>
            <li><Link href="/resources/why-meta-view-through-attribution-can-overvalue-meta" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Meta View-Through Attribution Can Overvalue Meta Ads</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need the real economics laid out?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your tracking changed after a cookie banner or consent update, send us an inquiry. We can audit the consent-to-event flow and compare it with Shopify sales.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
