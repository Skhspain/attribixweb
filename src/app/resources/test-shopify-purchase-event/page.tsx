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
  headline: "How to Test a Shopify Purchase Event",
  description: "A purchase event should represent one completed order with the correct commercial data. How to test it across every marketing platform.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/test-shopify-purchase-event" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Test a Shopify purchase event", item: "https://www.attribix.app/resources/test-shopify-purchase-event" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Test a Shopify purchase event" }]} />
          <Eyebrow>Tracking &amp; Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to test a Shopify purchase event
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A purchase event should represent one completed order with the
            correct commercial data. Testing it once across every
            marketing platform is one of the highest-value things you can
            do after changing tracking.
          </p>
        </Reveal>
      </section>

      {/* CONTROLLED ORDER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Create a controlled order</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Use a legitimate test method supported by your Shopify/payment setup. Record:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>order ID;</li>
              <li>total/subtotal expected;</li>
              <li>currency;</li>
              <li>time;</li>
              <li>products.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* CHECK EACH DESTINATION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check each destination separately</h2>
            <ul className="space-y-3 text-sm text-white/60 leading-relaxed max-w-2xl">
              <li><span className="text-white/80 font-medium">Meta:</span> browser/server Purchase, value, currency, deduplication.</li>
              <li><span className="text-white/80 font-medium">Google Ads:</span> correct conversion action, transaction ID, value, currency.</li>
              <li><span className="text-white/80 font-medium">GA4:</span> purchase event and ecommerce parameters.</li>
              <li><span className="text-white/80 font-medium">Attribix/other attribution tools:</span> order and source data.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* DUPLICATES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch for duplicates</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A single Shopify order should not become two purchases because
            two integrations fire. Duplicate conversion actions can also
            create confusion even when the underlying event fires once.
          </p>
        </Reveal>
      </section>

      {/* MISSING EVENTS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch for missing events</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Test in different consent states and browsers where
              applicable. Some variation is expected because privacy
              choices matter, but the intended implementation should
              behave consistently under each permitted state.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DOCUMENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Document the result</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Keep a simple tracking map so future developers know which
            integration owns each event. Most duplicate setups start
            because a second implementation is added without realizing
            the first exists.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/how-to-check-meta-pixel-working-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to check whether your Meta Pixel is working
              </Link>
            </li>
            <li>
              <Link href="/resources/check-google-ads-conversion-tracking-working-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to check whether Google Ads conversion tracking is working
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-transaction-id-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What is a transaction ID and why does Google Ads need it?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-capi-event-id-deduplication" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why purchase event IDs matter for Meta CAPI
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Trace the event from order to platform</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If one test Shopify order appears differently across Meta,
            Google and analytics, send us an inquiry. We can trace the
            event from order to platform.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
