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
  headline: "How to Check Whether Google Ads Conversion Tracking Is Working",
  description: "A Google Ads conversion action can say 'active' and still record the wrong thing. Testing should confirm the entire purchase event.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/check-google-ads-conversion-tracking-working-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Check Google Ads conversion tracking", item: "https://www.attribix.app/resources/check-google-ads-conversion-tracking-working-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Check Google Ads conversion tracking" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to check whether Google Ads conversion tracking is working
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A Google Ads conversion action can say &quot;active&quot; and
            still record the wrong thing. Testing should confirm the
            entire purchase event, not only whether a tag exists.
          </p>
        </Reveal>
      </section>

      {/* IDENTIFY ACTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Identify the exact conversion action</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Make sure you know which action Google uses for bidding. Stores often have several:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>native Google Ads Purchase;</li>
              <li>GA4 Purchase import;</li>
              <li>old legacy conversion;</li>
              <li>add-to-cart or checkout events.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* RUN CONTROLLED PURCHASE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Run a controlled purchase</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Verify:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>correct conversion ID/label where relevant;</li>
                <li>one purchase per order;</li>
                <li>transaction ID;</li>
                <li>conversion value;</li>
                <li>currency;</li>
                <li>timing;</li>
                <li>Enhanced Conversions diagnostics if enabled.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIAGNOSTIC TOOLS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use Google&apos;s current diagnostic tools</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Tag Assistant, conversion diagnostics and Shopify/Google
            integration status can help identify missing or duplicated
            implementations.
          </p>
        </Reveal>
      </section>

      {/* COMPARE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare with Shopify</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Google Ads should not necessarily equal Shopify because
              attribution differs. But if Google records twice as many
              purchases as the store or suddenly records none while sales
              continue, investigate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRIMARY VS SECONDARY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check Primary vs Secondary</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Multiple purchase actions included as Primary can affect
            bidding and reporting. Make sure the action set reflects your
            real optimization goal.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/google-ads-not-tracking-shopify-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads not tracking Shopify purchases? Step-by-step diagnosis
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-duplicate-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Duplicate Google Ads conversions on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-transaction-id-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What is a transaction ID and why does Google Ads need it?
              </Link>
            </li>
            <li>
              <Link href="/resources/enhanced-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Enhanced Conversions for Shopify explained
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Know which purchase event you&apos;re optimizing toward</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are not confident which Google purchase event your
            campaigns are optimizing toward, contact us. We can audit the
            Shopify conversion setup.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
