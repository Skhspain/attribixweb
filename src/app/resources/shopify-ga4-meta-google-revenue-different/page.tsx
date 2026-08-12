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
  headline: "Why Shopify, GA4, Meta and Google All Show Different Revenue",
  description: "Four systems can show four different revenue numbers without all four being broken. Here's why Shopify, ad platforms and GA4 are measuring different things, with a worked example.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-ga4-meta-google-revenue-different" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Different revenue numbers", item: "https://www.attribix.app/resources/shopify-ga4-meta-google-revenue-different" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Different revenue numbers" }]} />
          <Eyebrow>Attribution &amp; Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Shopify, GA4, Meta and Google all show different revenue
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Four systems can show four different revenue numbers without all
            four being broken. They are often measuring different things.
          </p>
        </Reveal>
      </section>

      {/* SHOPIFY LEDGER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shopify is the order ledger</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Shopify records the transactions processed by the store. That is
            usually the best starting point for &quot;How much did the
            store sell?&quot;
          </p>
        </Reveal>
      </section>

      {/* AD PLATFORMS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ad platforms report attributed revenue</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Meta and Google assign credit according to their own
              interactions, attribution windows and models. The same order
              can therefore appear in both platforms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GA4 */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">GA4 has its own collection and attribution</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Consent, browser restrictions, session definitions and
            implementation can affect what GA4 sees. It may also assign
            channel credit differently from Google Ads.
          </p>
        </Reveal>
      </section>

      {/* EXAMPLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
            <div className="space-y-2 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Shopify: $100,000 revenue.</p>
              <p>Meta: $60,000 attributed.</p>
              <p>Google Ads: $55,000 attributed.</p>
              <p>GA4 paid-channel revenue: another figure.</p>
            </div>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Adding the platform numbers does not create extra orders. Some
              revenue overlaps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* USE EACH SYSTEM */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use each system for the right question</h2>
          <div className="space-y-2 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>Shopify: actual store transactions.</p>
            <p>Platforms: campaign optimization and platform attribution.</p>
            <p>Cross-channel attribution: comparing marketing contribution with a consistent methodology.</p>
          </div>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            The mistake is expecting identical numbers from systems designed
            to answer different questions.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/can-you-add-meta-and-google-roas-together" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Can you add Meta and Google ROAS together?
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-ga4-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads and GA4 don&apos;t match: which numbers should you trust?
              </Link>
            </li>
            <li>
              <Link href="/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate true ROAS on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/ad-platforms-report-more-revenue-than-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Meta and Google both claim the same Shopify sale
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Get one consistent revenue picture for budget decisions</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your reports cannot agree on revenue and that is making
            budget decisions difficult, contact us or see how{" "}
            <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Attribix approaches cross-platform measurement
            </Link>
            .
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
