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
  headline: "Why High Repeat Purchase Rate Changes Your Break-Even ROAS",
  description: "A store with strong retention can afford a lower first-order ROAS than a business where every customer buys once.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/repeat-purchase-rate-break-even-roas" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Repeat rate and break-even ROAS", item: "https://www.attribix.app/resources/repeat-purchase-rate-break-even-roas" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Repeat rate and break-even ROAS" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why high repeat purchase rate changes your break-even ROAS
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A store with strong retention can afford a lower first-order
            ROAS than a business where every customer buys once. That does
            not change the mathematics of the first order. It changes how
            much the business is willing to invest to acquire the customer.
          </p>
        </Reveal>
      </section>

      {/* FIRST ORDER STAYS SAME */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">First-order break-even stays the same</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If contribution before advertising is 40%, the first-order
            break-even ROAS remains around 250% in the simplified model.
          </p>
        </Reveal>
      </section>

      {/* CUSTOMER LEVEL BREAK EVEN */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Customer-level break-even can be different</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If each new customer is expected to generate substantial
              repeat contribution, the business may willingly run
              first-order acquisition below 250% because future orders
              recover the cost.
            </p>
          </Reveal>
        </div>
      </section>

      {/* USE EXPECTED CONTRIBUTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use expected contribution, not revenue</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If repeat purchases generate $100 revenue but only $35
            contribution, the business has $35 of additional acquisition
            room, not $100.
          </p>
        </Reveal>
      </section>

      {/* CHANNEL SPECIFIC + PAYBACK */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep targets channel-specific where useful</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>
                A channel that acquires better-retaining customers can
                potentially support a higher CAC than one that attracts
                discount-driven one-time buyers.
              </p>
              <p>
                High lifetime value does not eliminate cash-flow
                constraints. The time required to recover marketing spend
                still matters. That's the subject covered in{" "}
                <Link href="/resources/cac-payback-period-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  CAC payback period for ecommerce
                </Link>
                . Retention turns ROAS from an order-level metric into a
                customer-economics discussion.
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
              <Link href="/resources/calculate-repeat-customer-value-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to Calculate Repeat Customer Value for a Shopify Store
              </Link>
            </li>
            <li>
              <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to Calculate True ROAS on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/first-order-profit-vs-lifetime-value-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                First-Order Profit vs Lifetime Value: Which Should Drive Ad Spend?
              </Link>
            </li>
            <li>
              <Link href="/resources/cac-payback-period-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What Is CAC Payback Period in Ecommerce?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Incorporate real customer value into your targets</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your repeat purchase rate is strong but ad targets are still
            based only on first-order ROAS, contact us. We can help
            incorporate real customer value.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
