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
  headline: "What Is a Transaction ID and Why Does Google Ads Need It?",
  description: "A transaction ID is a unique identifier for the purchase. Its most important role is helping systems recognize that the same order shouldn't be counted repeatedly.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-transaction-id-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Transaction ID explained", item: "https://www.attribix.app/resources/google-ads-transaction-id-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Transaction ID explained" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What is a transaction ID and why does Google Ads need it?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A transaction ID is a unique identifier for the purchase. In
            ecommerce, it is commonly based on the order or transaction
            reference. Its most important tracking role is helping systems
            recognize that the same order should not be counted
            repeatedly.
          </p>
        </Reveal>
      </section>

      {/* EXAMPLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              A customer completes Order #1234 and refreshes the
              confirmation page. If the purchase tag fires again without a
              stable transaction identifier, Google may have difficulty
              distinguishing the repeat signal from a second purchase.
            </p>
            <p>
              With a consistent transaction ID, the platform can use its
              current duplicate-handling logic more effectively.
            </p>
          </div>
        </Reveal>
      </section>

      {/* DEBUGGING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">It also helps debugging</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              When Google reports an unexpected conversion, a
              transaction/order reference can help you reconcile the event
              with Shopify rather than comparing only daily totals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STABLE AND UNIQUE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The ID should be stable and unique</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Do not generate a random new ID every time the tag fires for
            the same order. That defeats the purpose.
          </p>
        </Reveal>
      </section>

      {/* PRIVACY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Privacy still matters</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Use an appropriate order/transaction identifier according
                to platform documentation. Do not put sensitive customer
                information into the field.
              </p>
              <p>
                Transaction ID is a small implementation detail with a
                large impact on data quality.
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
              <Link href="/resources/check-google-ads-conversion-tracking-working-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to check whether Google Ads conversion tracking is working
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-duplicate-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Duplicate Google Ads conversions on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-capi-event-id-deduplication" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why purchase event IDs matter for Meta CAPI
              </Link>
            </li>
            <li>
              <Link href="/resources/test-shopify-purchase-event" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to test a Shopify purchase event
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Stop Google Ads counting a purchase twice</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Google Ads appears to count Shopify purchases more than
            once, contact us. Transaction IDs are one of the first things
            we check.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
