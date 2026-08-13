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
  headline: "How to Check Whether Your Meta Pixel Is Working",
  description: "Don't decide a Pixel works simply because Meta receives a PageView. How to test the full journey through to Purchase.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-to-check-meta-pixel-working-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Check Meta Pixel is working", item: "https://www.attribix.app/resources/how-to-check-meta-pixel-working-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Check Meta Pixel is working" }]} />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to check whether your Meta Pixel is working
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Do not decide that a Pixel &quot;works&quot; simply because
            Meta receives a PageView. The event that matters most for
            ecommerce is usually Purchase, and it needs the correct value,
            currency and order behaviour.
          </p>
        </Reveal>
      </section>

      {/* START WITH DIAGNOSTICS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with Meta&apos;s diagnostics tools</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Use Events Manager, Test Events and current supported
            browser/debugging tools to confirm that expected events appear
            as you move through the store.
          </p>
        </Reveal>
      </section>

      {/* TEST FULL JOURNEY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test the full journey</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Check:</p>
              <ol className="list-decimal list-inside space-y-1.5 marker:text-cyan-400">
                <li>product view;</li>
                <li>add to cart;</li>
                <li>checkout where applicable;</li>
                <li>completed purchase.</li>
              </ol>
              <p>For a purchase, verify:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>the event occurs once from the browser implementation;</li>
                <li>value matches the intended order value;</li>
                <li>currency is correct;</li>
                <li>the correct Pixel/dataset receives it.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IF CAPI ACTIVE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">If CAPI is also active</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            You may see browser and server copies of the same purchase.
            Confirm that the implementation provides the identifiers Meta
            needs to deduplicate them. See{" "}
            <Link href="/resources/how-to-check-meta-capi-working" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how to check whether Meta CAPI is working
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* COMPARE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare with real Shopify orders</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Events Manager can show data even when the business numbers
              do not reconcile. Over a sensible period, compare purchase
              counts and investigate large discrepancies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONSENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch consent and browser behaviour</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Not every browser session will be observable in exactly the
            same way. Tracking health is about correct implementation, not
            achieving a mathematically identical count in every system.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify: full setup overview
              </Link>
            </li>
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
              <Link href="/resources/meta-event-match-quality-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Event Match Quality for Shopify explained
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Audit the Pixel and CAPI setup together</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta receives events but purchases, values or
            deduplication still look wrong, contact us. We can audit the
            Shopify Pixel and CAPI setup together.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
