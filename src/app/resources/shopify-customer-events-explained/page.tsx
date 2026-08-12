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
  headline: "Shopify Customer Events Explained for Marketers",
  description: "What marketers need to know about Shopify Customer Events: which customer actions are available and how your tracking tool consumes them.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-customer-events-explained" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Shopify Customer Events explained", item: "https://www.attribix.app/resources/shopify-customer-events-explained" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Shopify Customer Events explained" }]} />
          <Eyebrow>Tracking &amp; Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify Customer Events explained for marketers
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Shopify Customer Events provides a framework for pixels and
            customer-behaviour events in the Shopify environment. For
            marketers, the important point is not the developer
            terminology. It is understanding which customer actions are
            available and how your tracking tool consumes them.
          </p>
        </Reveal>
      </section>

      {/* WHY IT CHANGED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why Shopify changed the tracking landscape</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Historically, many stores injected scripts directly into
            themes or checkout pages. Shopify&apos;s newer event/pixel
            architecture creates a more structured and privacy-aware way
            for supported tracking to observe storefront and checkout
            behaviour.
          </p>
        </Reveal>
      </section>

      {/* WHAT TO CARE ABOUT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What marketers should care about</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Verify that your setup correctly captures the events required for optimization:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>page/product views;</li>
                <li>cart actions;</li>
                <li>checkout progression where available;</li>
                <li>completed purchases;</li>
                <li>order value;</li>
                <li>currency;</li>
                <li>transaction/order identifier.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPS CONFLICT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Apps can still conflict</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A store may have a native sales-channel integration, custom
            pixel, GTM-style implementation and third-party tracking app
            all trying to send the same purchase. Customer Events does not
            eliminate the need for an implementation audit.
          </p>
        </Reveal>
      </section>

      {/* FOLLOW DOCS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Follow current Shopify documentation</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                The exact events, sandbox behaviour and checkout
                capabilities can change. Technical implementation should
                always use Shopify&apos;s current developer documentation.
              </p>
              <p>
                For marketers, the principle remains simple: know which
                system sends each event and make sure one real order is
                not accidentally counted multiple times.
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
              <Link href="/resources/google-tag-manager-vs-shopify-customer-events" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Tag Manager vs Shopify Customer Events
              </Link>
            </li>
            <li>
              <Link href="/resources/should-shopify-use-google-tag-manager" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores still use Google Tag Manager?
              </Link>
            </li>
            <li>
              <Link href="/resources/fix-duplicate-meta-purchases-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to fix duplicate purchases in Meta Ads for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-server-side-tracking-guide" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Shopify server-side tracking works
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Know which system owns each event</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Shopify tracking grew organically through several apps
            and no one knows which implementation owns each event, send us
            an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
