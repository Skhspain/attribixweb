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
  headline: "Google Tag Manager vs Shopify Customer Events",
  description: "GTM is a tag-management system. Customer Events is Shopify's framework for customer-event/pixel integrations. Why they aren't direct substitutes.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-tag-manager-vs-shopify-customer-events" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "GTM vs Shopify Customer Events", item: "https://www.attribix.app/resources/google-tag-manager-vs-shopify-customer-events" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "GTM vs Shopify Customer Events" }]} />
          <Eyebrow>Tracking &amp; Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Tag Manager vs Shopify Customer Events
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Google Tag Manager and Shopify Customer Events are not direct
            substitutes in every situation. GTM is a tag-management
            system. Customer Events is Shopify&apos;s framework for
            customer-event/pixel integrations.
          </p>
        </Reveal>
      </section>

      {/* WHY IT MATTERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why the comparison matters</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Many older Shopify setups used GTM inserted into the theme
            and, on eligible plans, checkout areas. Shopify&apos;s evolving
            pixel architecture changes where and how scripts can run.
          </p>
        </Reveal>
      </section>

      {/* GTM ORCHESTRATION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">GTM remains useful for orchestration</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              GTM can manage multiple marketing/analytics tags from one
              interface and provides flexible triggers and variables. But
              embedding it does not automatically grant access to every
              Shopify checkout event or bypass Shopify&apos;s sandbox and
              privacy model.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CUSTOMER EVENTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Customer Events provides Shopify-native signals</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            It can expose structured ecommerce events in the environment
            Shopify supports. A custom pixel can then send data to
            external platforms, subject to current platform rules. See{" "}
            <Link href="/resources/shopify-customer-events-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Shopify Customer Events explained for marketers
            </Link>{" "}
            for what to check.
          </p>
        </Reveal>
      </section>

      {/* CHOOSE ARCHITECTURE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Choose architecture, not fashion</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>The right implementation depends on:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Shopify plan/current capabilities;</li>
                <li>tools you need to send data to;</li>
                <li>consent system;</li>
                <li>checkout requirements;</li>
                <li>maintainability;</li>
                <li>server-side components.</li>
              </ul>
              <p>
                Avoid stacking GTM, custom pixels and apps without a clear
                ownership map.
              </p>
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
              <Link href="/resources/shopify-customer-events-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify Customer Events explained for marketers
              </Link>
            </li>
            <li>
              <Link href="/resources/should-shopify-use-google-tag-manager" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores still use Google Tag Manager?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-server-side-tracking-guide" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Shopify server-side tracking works
              </Link>
            </li>
            <li>
              <Link href="/resources/google-consent-mode-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Consent Mode on Shopify: why Google Ads conversions may change
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Map the tracking architecture</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify store uses GTM plus several new pixel
            integrations and you are worried about missing or duplicate
            conversions, contact us. We can map the tracking architecture.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
