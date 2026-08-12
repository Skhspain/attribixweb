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
  headline: "Discount Code vs Automatic Discount: Which Converts Better?",
  description: "Automatic discounts remove a step at checkout. Discount codes give you more control over distribution and attribution. Which is right depends on how the promotion is meant to work.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/discount-code-vs-automatic-discount-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Discount code vs automatic discount", item: "https://www.attribix.app/resources/discount-code-vs-automatic-discount-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Discount code vs automatic discount" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Discount code vs automatic discount: which converts better?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Automatic discounts remove a step. Discount codes give you more
            control over distribution and attribution. The better choice
            depends on how the promotion is meant to work.
          </p>
        </Reveal>
      </section>

      {/* AUTOMATIC DISCOUNTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Automatic discounts reduce friction</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If a sale applies to everyone, making customers remember{" "}
            <code className="text-white/80 bg-white/10 rounded px-1.5 py-0.5 text-xs">SUMMER20</code>{" "}
            creates unnecessary work. Applying the price automatically also
            reduces support issues around forgotten codes.
          </p>
        </Reveal>
      </section>

      {/* CODES FOR TARGETED OFFERS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Codes are useful for targeted offers</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Influencers, partners, customer service, email segments and
              private promotions may need distinct codes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COUPON HUNTING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Codes can trigger coupon hunting</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A visible &quot;Discount code&quot; field may send full-price
            customers to Google searching for a coupon. If the offer is
            universal, automatic application can avoid that behaviour.
          </p>
        </Reveal>
      </section>

      {/* MEASUREMENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measurement differs</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Codes can be useful for partner/influencer reporting, but they
              are not perfect attribution either. Customers can share codes
              or discover them elsewhere.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL PRICE OBVIOUS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Make the final price obvious</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Whether automatic or code-based, customers should understand when
            the discount applies and what they will pay.
          </p>
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
                <Link href="/resources/constant-discounts-ecommerce-profitability" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Are constant discounts destroying your ecommerce profitability?
                </Link>
              </li>
              <li>
                <Link href="/resources/evergreen-discount-vs-limited-promotion-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Should you run evergreen discounts or short promotions?
                </Link>
              </li>
              <li>
                <Link href="/resources/set-free-shipping-threshold-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Free shipping threshold: how should Shopify stores set it?
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Simplify the offer flow before it costs you sales</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If coupon mechanics are creating checkout friction or making
            attribution messy, send us an inquiry. We can help simplify the
            offer flow.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
