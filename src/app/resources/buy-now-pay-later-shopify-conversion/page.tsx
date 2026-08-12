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
  headline: "Should Shopify Stores Offer Buy Now, Pay Later?",
  description: "Buy Now, Pay Later can reduce the psychological size of a purchase and help conversion on higher-AOV products, but it introduces fees and a different way of presenting price. When it's actually worth it.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/buy-now-pay-later-shopify-conversion" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Buy now, pay later", item: "https://www.attribix.app/resources/buy-now-pay-later-shopify-conversion" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Buy now, pay later" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Shopify stores offer Buy Now, Pay Later?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Buy Now, Pay Later can reduce the psychological size of a
            purchase by splitting it into smaller payments. That can help
            conversion, particularly for higher-AOV products. It also
            introduces fees, operational considerations and a different way
            of presenting price.
          </p>
        </Reveal>
      </section>

      {/* WHEN BNPL RELEVANT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When BNPL is most relevant</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            It tends to matter more when the purchase is expensive enough
            that affordability creates hesitation. On a $25 product,
            instalment messaging may add little value.
          </p>
        </Reveal>
      </section>

      {/* MAKE VISIBLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Make the option visible before checkout</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If BNPL is a meaningful benefit, showing &quot;or 4 payments
              of…&quot; near price can help customers understand
              affordability before they abandon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ECONOMICS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not hide the economics</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Merchant fees and settlement terms affect contribution margin. A
            conversion lift is only valuable if the additional profit
            exceeds the extra cost.
          </p>
        </Reveal>
      </section>

      {/* BRAND AND EXPERIENCE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider brand and customer experience</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Payment options should be clear and responsible. Do not make
              debt-like purchasing feel trivial or disguise terms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MEASURE WHO USES IT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure who uses it</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Compare conversion rate, AOV, refund rate and profitability for
            BNPL orders against other payments. The tool may be valuable for
            a specific customer segment rather than the entire store.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/does-klarna-increase-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does Klarna increase ecommerce conversion rate?
              </Link>
            </li>
            <li>
              <Link href="/resources/unexpected-shipping-costs-cart-abandonment" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why unexpected shipping costs kill ecommerce sales
              </Link>
            </li>
            <li>
              <Link href="/resources/cart-drawer-vs-cart-page-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify cart drawer vs cart page: which converts better?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-checkout-no-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify customers reach checkout but don&apos;t buy
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out whether payment flexibility is your real bottleneck</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If payment options appear to be limiting conversion on
            higher-priced products, contact us. We can review the checkout
            economics and customer journey.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
