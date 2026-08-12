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
  headline: "Klaviyo Attribution Explained for Shopify Stores",
  description: "How Klaviyo connects orders to email and SMS interactions, why click and view attribution differ, and how attribution windows change the reported number.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/klaviyo-attribution-explained" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Klaviyo attribution explained", item: "https://www.attribix.app/resources/klaviyo-attribution-explained" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Klaviyo attribution explained" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Klaviyo attribution explained for Shopify stores
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Klaviyo attribution connects an order to a recent email or SMS
            interaction according to the attribution rules configured in the
            account. That makes it useful for comparing campaigns and flows.
            It does not make it a perfect causal model of what created the
            purchase.
          </p>
        </Reveal>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Think of the customer journey</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              A customer receives an abandoned-cart email and clicks it. Two
              days later they return directly and buy. Klaviyo may attribute
              the order to the email because the interaction remains within
              the eligible window.
            </p>
            <p>
              That may be a reasonable interpretation. But if the customer
              was already going to buy, the incremental effect could be
              smaller than the attributed revenue suggests.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CLICK VS VIEW */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Click and view attribution differ</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A click is a stronger observable interaction than simply
              receiving/opening a message. Review Klaviyo&apos;s current
              attribution settings and privacy-related open measurement
              carefully.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WINDOWS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution windows change the number</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              Longer windows generally give email more opportunities to
              receive credit. Shorter windows are stricter but can miss
              longer consideration journeys.
            </p>
            <p>
              There is no universally correct window. Use consistent
              settings and understand what the number means.
            </p>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/klaviyo-revenue-too-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Klaviyo revenue looks too high: is email taking too much credit?
                </Link>
              </li>
              <li>
                <Link href="/resources/does-klaviyo-over-attribute-revenue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Does Klaviyo over-attribute revenue?
                </Link>
              </li>
              <li>
                <Link href="/resources/shopify-vs-klaviyo-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Shopify vs Klaviyo revenue doesn&apos;t match: why?
                </Link>
              </li>
              <li>
                <Link href="/resources/shopify-attribution-models" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Shopify attribution models explained
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Make sense of email alongside paid media</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you use Klaviyo alongside Meta and Google and want a less
            confusing view of cross-channel revenue, contact us.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
