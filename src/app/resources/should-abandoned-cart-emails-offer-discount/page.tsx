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
  headline: "Should You Offer a Discount in Your Abandoned Cart Emails?",
  description: "A discount can recover carts, but it can also teach customers to abandon on purpose. When an incentive is commercially sensible, and how to calculate its real cost.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/should-abandoned-cart-emails-offer-discount" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Abandoned cart discounts", item: "https://www.attribix.app/resources/should-abandoned-cart-emails-offer-discount" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Abandoned cart discounts" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should you offer a discount in your abandoned cart emails?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A discount can recover carts. It can also teach customers that
            abandoning is the easiest way to get a better price.
          </p>
        </Reveal>
      </section>

      {/* START WITHOUT ONE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start without one</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            The first reminder should usually make it easy to return and
            resolve practical uncertainty. Many customers simply got
            distracted.
          </p>
        </Reveal>
      </section>

      {/* USE WHEN PRICE IS BARRIER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use discounts when price is genuinely the barrier</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If data or customer feedback shows cost is the main objection,
              a later incentive can be commercially sensible. Test the
              smallest offer that changes behaviour.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CALCULATE COST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Calculate the cost</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A 15% discount applied to orders that would have converted
            anyway is pure margin loss. Compare incremental recovered
            contribution, not just attributed revenue.
          </p>
        </Reveal>
      </section>

      {/* ALTERNATIVES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider alternatives</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Free shipping, a gift, extended returns or product reassurance
              may solve the real objection without discounting the item
              itself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEGMENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment if possible</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              High-value returning customers, first-time buyers and
              low-margin products may deserve different logic.
            </p>
            <p>
              A discount should be a deliberate recovery tool, not the
              automatic final email in every template.
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
                <Link href="/resources/how-many-abandoned-cart-emails-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  How many abandoned cart emails should a Shopify store send?
                </Link>
              </li>
              <li>
                <Link href="/resources/welcome-flow-discount-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Should your welcome flow offer a discount?
                </Link>
              </li>
              <li>
                <Link href="/resources/increase-repeat-purchase-rate-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  How to increase repeat purchase rate without constant discounts
                </Link>
              </li>
              <li>
                <Link href="/resources/abandoned-cart-emails-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Why your abandoned cart emails get clicks but no sales
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Check whether the incentive is actually profitable</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If discounting recovers carts but your margins are suffering,
            send us an inquiry. We can help analyse whether the incentive
            creates profitable incremental orders.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
