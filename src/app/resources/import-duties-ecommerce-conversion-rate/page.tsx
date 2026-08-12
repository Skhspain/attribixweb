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
  headline: "How Import Duties Affect International Shopify Conversion Rates",
  description: "Import duties hurt conversion most when customers discover them after they thought they knew the final price. How to make landed cost clear before checkout.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/import-duties-ecommerce-conversion-rate" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Import duties and conversion rate", item: "https://www.attribix.app/resources/import-duties-ecommerce-conversion-rate" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Import duties and conversion rate" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How import duties affect international Shopify conversion rates
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Import duties affect conversion most when customers discover
            them after they thought they knew the final price.
          </p>
        </Reveal>
      </section>

      {/* SURPRISE ABANDONMENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Surprise creates abandonment</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A customer may accept a $150 product and abandon when checkout
            warns that duties may be payable on delivery.
          </p>
        </Reveal>
      </section>

      {/* DELIVERED DUTY PAID */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Delivered-duty-paid experiences can improve clarity</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Where commercially and technically appropriate, collecting
                duties/taxes upfront can give customers a clearer landed
                cost.
              </p>
              <p>The feasibility and legal/tax treatment vary by country and setup.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAKE VISIBLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Make the information visible</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If duties are not included, tell customers clearly before the
            final checkout stage. This is the same principle explored in{" "}
            <Link href="/resources/show-duties-taxes-before-checkout-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              should you show duties and taxes before checkout?
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* MARKET VIABILITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Factor duties into market viability</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A country with cheap Meta CPM can still be unattractive if
              every order carries substantial duties, long customs delays
              and high return costs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AVOID TAX ADVICE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid giving tax/legal advice casually</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              Rules vary by product, origin and destination. Use current
              Shopify, carrier and authoritative customs guidance.
            </p>
            <p>
              From a marketing perspective, the principle is
              straightforward: customers convert better when they
              understand what the order will actually cost.
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
              <Link href="/resources/show-duties-taxes-before-checkout-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you show duties and taxes before checkout?
              </Link>
            </li>
            <li>
              <Link href="/resources/international-shipping-low-conversion-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                International shipping is killing your conversion rate: how to diagnose it
              </Link>
            </li>
            <li>
              <Link href="/resources/international-traffic-lower-conversion-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why international traffic has a lower Shopify conversion rate
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-checkout-no-purchase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify customers reach checkout but don&apos;t buy: what to check
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Cross-border checkout weak because landed cost is unclear?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If cross-border checkout performance is weak because total
            landed cost is unclear, contact us. We can review the customer
            journey around pricing and delivery.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
