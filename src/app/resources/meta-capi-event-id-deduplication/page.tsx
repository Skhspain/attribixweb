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
  headline: "Why Purchase Event IDs Matter for Meta CAPI",
  description: "When the same purchase is sent from both the browser Pixel and CAPI, the event ID is the key part of how Meta deduplicates the two.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-capi-event-id-deduplication" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Meta CAPI event ID deduplication", item: "https://www.attribix.app/resources/meta-capi-event-id-deduplication" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Meta CAPI event ID deduplication" }]} />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why purchase event IDs matter for Meta CAPI
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            When the same purchase is sent to Meta from both the browser
            Pixel and CAPI, Meta needs a way to know those are two
            representations of one business event. The event ID is a key
            part of that deduplication process.
          </p>
        </Reveal>
      </section>

      {/* WHAT GOES WRONG */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What goes wrong without a match</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Suppose Order #500 triggers:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>one browser Purchase;</li>
              <li>one server Purchase.</li>
            </ul>
            <p>
              If Meta cannot associate them, reporting may treat the
              events incorrectly. A properly coordinated implementation
              provides matching event information according to Meta&apos;s
              current deduplication requirements.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CONSISTENCY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consistency is more important than complexity</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The browser and server copies of the same event need the
              same intended identifier. Generating unrelated IDs on each
              side defeats deduplication.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test in Events Manager</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Review current browser/server event details and diagnostics.
            Do not assume that seeing two data sources means two
            conversions; Meta can receive both and count one when
            deduplication is working. See{" "}
            <Link href="/resources/how-to-check-meta-capi-working" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how to check whether Meta CAPI is working
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* NOT EVERYTHING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Event IDs do not repair everything</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Wrong purchase value, currency, duplicated server calls or
                multiple separate CAPI integrations can still create
                inaccurate data.
              </p>
              <p>Think of event ID as one component of an accurate event architecture.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/how-to-check-meta-capi-working" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to check whether Meta CAPI is working
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/fix-duplicate-meta-purchases-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to fix duplicate purchases in Meta Ads for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-helper-multiple-pixels" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel Helper shows multiple Pixels: is that a problem?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Inspect the CAPI implementation</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta shows browser and server purchases and you cannot tell
            whether they are deduplicated correctly, contact us. We can
            inspect the CAPI implementation.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
