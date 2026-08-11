"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ProductCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "Do I need Consent Mode to use Enhanced Conversions?",
    a: "They're separate features, but they work together — Consent Mode governs what Google can measure based on the customer's choice, while Enhanced Conversions improve matching within whatever's allowed to be measured.",
  },
  {
    q: "Is customer data sent to Google in plain text?",
    a: "No. Email, phone and other identifiers are hashed before they leave your server or browser, using a one-way hash Google matches against its own hashed records.",
  },
  {
    q: "Will Enhanced Conversions fix a conversion count that looks wrong?",
    a: "Only if the problem was missed matches from cookie loss. If the real issue is duplicate conversion actions, stale refund data, or an attribution window mismatch, Enhanced Conversions won't touch it — the underlying tracking configuration needs fixing separately.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Enhanced Conversions for Shopify Explained",
  description: "What Enhanced Conversions do, what they don't fix, and how they relate to server-side tracking.",
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/enhanced-conversions-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Enhanced Conversions", item: "https://www.attribix.app/resources/enhanced-conversions-shopify" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Enhanced Conversions" }]} />
          <Eyebrow>Google Ads Tracking</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Enhanced Conversions for Shopify explained
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Enhanced Conversions send Google hashed first-party customer data
            alongside a standard conversion, so it can match conversions that
            cookie loss or click-ID expiry would otherwise drop. It improves
            matching. It doesn&apos;t fix a broken conversion setup underneath it.
          </p>
        </Reveal>
      </section>

      {/* WHAT IT IS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What actually gets sent</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            When a customer converts, Google Ads normally relies on a click
            ID or cookie to tie that conversion back to the ad click that
            led to it. Enhanced Conversions add hashed customer details —
            typically email, sometimes name, phone or address — as a second
            matching path. If the click-ID match fails but the hashed
            customer data matches a known Google account, the conversion
            still gets counted.
          </p>
        </Reveal>
      </section>

      {/* WHAT IT FIXES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What it recovers, specifically</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The gap it closes is narrow but real: conversions lost because
              a browser blocked or shortened the lifespan of the click-ID
              cookie between the click and the purchase, or because the
              purchase happened on a different device than the click. It
              doesn&apos;t create new attribution logic — it just gives Google a
              second way to recognize a conversion it would otherwise have
              missed entirely.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT IT DOESN'T FIX */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What it isn&apos;t</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Enhanced Conversions aren&apos;t attribution magic. They don&apos;t
            resolve duplicate conversion actions, don&apos;t reconcile refunds
            after the fact, and don&apos;t change which attribution model or
            window Google Ads is using. If your Google Ads revenue doesn&apos;t
            match Shopify&apos;s for one of those reasons, turning on Enhanced
            Conversions won&apos;t move the needle — the underlying issue sits
            somewhere else.
          </p>
        </Reveal>
      </section>

      {/* SERVER-SIDE RELATIONSHIP */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">How it relates to server-side tracking</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Enhanced Conversions can be implemented either on the page
              (browser-side, using the same hashed data pattern as the
              Pixel) or server-side, sent directly from your backend at the
              time of purchase. The server-side version has the same
              advantage server-side tracking has generally: it doesn&apos;t
              depend on the customer&apos;s browser successfully completing the
              request.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consent still applies</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Enhanced Conversions still operate within whatever consent the
            customer has given, governed the same way any other conversion
            tracking is. Turning the feature on doesn&apos;t expand what you&apos;re
            allowed to measure — it only improves matching within that
            boundary.
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Google Ads and Shopify revenue don&apos;t match
              </Link>
            </li>
            <li>
              <Link href="/server-side-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify server-side tracking
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See what your current setup is capturing</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and Google Ads account to see conversion
            coverage against actual Shopify orders.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
