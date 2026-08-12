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
  headline: "Shopify vs Klaviyo Revenue Doesn't Match: Why?",
  description: "Shopify records orders. Klaviyo reports attributed revenue. Why the two numbers aren't designed to match, and when a difference is actually worth investigating.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-vs-klaviyo-revenue-doesnt-match" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Shopify vs Klaviyo mismatch", item: "https://www.attribix.app/resources/shopify-vs-klaviyo-revenue-doesnt-match" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Shopify vs Klaviyo mismatch" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify vs Klaviyo revenue doesn&apos;t match: why?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Shopify records orders. Klaviyo reports revenue it attributes to
            email/SMS interactions. Those numbers are not designed to match
            one-to-one.
          </p>
        </Reveal>
      </section>

      {/* SHOPIFY ANSWERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shopify answers &quot;what sold?&quot;</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            The order ledger shows the actual transactions processed by the
            store.
          </p>
        </Reveal>
      </section>

      {/* KLAVIYO ANSWERS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Klaviyo answers &quot;what revenue fits our attribution rules?&quot;</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If a customer interacted with a message within the configured
              attribution window before ordering, Klaviyo may associate that
              order with email or SMS.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEVERAL INFLUENCES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">One order can have several marketing influences</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            The same purchase can be attributed to Klaviyo, Meta and Google.
            That is normal when each system evaluates its own interactions
            independently.
          </p>
        </Reveal>
      </section>

      {/* DATE/TIMEZONE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Date and timezone differences can add smaller gaps</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Reporting dates, refunds, currency handling and integration
              timing can also create discrepancies. Check the current
              platform definitions before diagnosing a technical error.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHEN TO INVESTIGATE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When to investigate</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Look more closely if:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Klaviyo records orders that do not exist in Shopify</li>
              <li>Values are materially wrong</li>
              <li>Revenue jumps after a tracking change</li>
              <li>One order appears multiple times unexpectedly</li>
            </ul>
            <p>A difference by itself is not proof that tracking is broken.</p>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/klaviyo-revenue-too-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Klaviyo revenue looks too high: is email taking too much credit?
              </Link>
            </li>
            <li>
              <Link href="/resources/klaviyo-attribution-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Klaviyo attribution explained for Shopify stores
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-abandoned-checkout-vs-klaviyo-abandoned-cart" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify abandoned checkout vs Klaviyo abandoned cart: why the numbers differ
              </Link>
            </li>
            <li>
              <Link href="/resources/how-much-revenue-should-email-marketing-generate-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much revenue should email marketing generate for a Shopify store?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Get one measurement framework, not three stories</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Klaviyo, Shopify and ad platforms tell three different
            stories about the same revenue, send us an inquiry. We can help
            interpret them under one measurement framework.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
