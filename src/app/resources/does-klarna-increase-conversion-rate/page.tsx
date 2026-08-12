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
  headline: "Does Klarna Increase Ecommerce Conversion Rate?",
  description: "Klarna can increase conversion for some Shopify stores, but it is not a universal law. How product price, visibility, fees and customer quality determine whether it actually helps.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/does-klarna-increase-conversion-rate" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Klarna and conversion", item: "https://www.attribix.app/resources/does-klarna-increase-conversion-rate" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Klarna and conversion" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does Klarna increase ecommerce conversion rate?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Klarna can increase conversion for some stores because it gives
            customers more payment flexibility. But &quot;adding Klarna
            increases conversion&quot; is not a universal law.
          </p>
        </Reveal>
      </section>

      {/* PRODUCT PRICE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product price matters</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A customer considering a $900 purchase may value instalments far
            more than someone buying a $20 accessory.
          </p>
        </Reveal>
      </section>

      {/* VISIBILITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Visibility matters</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If Klarna is available only after the shopper enters checkout,
              it cannot influence the earlier product decision. Showing
              eligible payment options near price can make the benefit
              clearer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Fees matter too</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A higher conversion rate can still produce lower contribution
            profit if payment fees rise substantially. Measure total order
            economics.
          </p>
        </Reveal>
      </section>

      {/* CUSTOMER QUALITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch customer quality</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Look at AOV, refund rate, repeat purchases and support issues
              by payment type where data is available. More orders are not
              automatically better orders.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ATTRIBUTION MISTAKES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid attribution mistakes</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              If conversion improves after adding Klarna, check whether
              other changes happened at the same time: promotion, traffic
              mix, seasonality or website redesign.
            </p>
            <p>
              Klarna can remove a real payment barrier. Test it as a
              commercial change, not a magic CRO plugin.
            </p>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/buy-now-pay-later-shopify-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores offer Buy Now, Pay Later?
              </Link>
            </li>
            <li>
              <Link href="/resources/discount-code-box-checkout-conversion" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Is your Shopify discount code box hurting conversion rate?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out whether payment flexibility is the real bottleneck</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are considering BNPL because checkout conversion is weak,
            send us an inquiry. We can help determine whether payment
            flexibility is actually the bottleneck.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
