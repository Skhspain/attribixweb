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
  headline: "How to Increase Shopify Average Order Value Without Hurting Conversion Rate",
  description: "Increasing AOV is only useful if customers still buy: natural cross-sells, thresholds, bundles and why too many upsell popups can turn a simple purchase into a negotiation.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/increase-shopify-average-order-value" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Increase AOV", item: "https://www.attribix.app/resources/increase-shopify-average-order-value" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Increase AOV" }]} />
          <Eyebrow>Creative &amp; Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to increase Shopify average order value without hurting conversion rate
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Increasing AOV is useful only if customers still buy. An upsell
            strategy that raises average basket size while reducing the
            number of orders can leave revenue or profit unchanged.
          </p>
        </Reveal>
      </section>

      {/* NATURAL ADDITIONS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with natural additions</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            The easiest cross-sell usually answers: &quot;What else would
            someone buying this genuinely need?&quot; Accessories, refills
            and complementary products create less friction than unrelated
            recommendations.
          </p>
        </Reveal>
      </section>

      {/* THRESHOLDS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use thresholds carefully</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Free shipping above a sensible basket value can encourage
              customers to add an item. Set the threshold slightly above
              current AOV only if the extra margin can support the shipping
              cost.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BUNDLES PRE-BUILD */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Bundles can pre-build the decision</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Instead of asking customers to assemble a set themselves, offer
            a coherent package with a clear saving or convenience benefit.
          </p>
        </Reveal>
      </section>

      {/* DON'T INTERRUPT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not interrupt checkout excessively</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Too many upsell popups and post-cart offers can turn a simple
              purchase into a negotiation. Test whether each element
              increases revenue/profit per visitor, not only AOV.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEGMENT RESULTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment results</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            AOV may rise because a small number of customers buy expensive
            bundles while conversion falls for everyone else. Look at total
            contribution profit and customer count.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/product-bundles-vs-discounts-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Product bundles vs discounts: which increase AOV?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-checkout-abandonment-shipping-costs" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify customers abandon checkout after seeing shipping costs
              </Link>
            </li>
            <li>
              <Link href="/resources/revenue-vs-gross-margin-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why revenue is a bad metric without gross margin
              </Link>
            </li>
            <li>
              <Link href="/resources/cart-drawer-vs-cart-page-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify cart drawer vs cart page: which converts better?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Raise AOV without sacrificing conversion</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you want higher AOV but do not want to sacrifice Shopify
            conversion, contact us. We can review the offer structure
            against your paid-traffic economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
