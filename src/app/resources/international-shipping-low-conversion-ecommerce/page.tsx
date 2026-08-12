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
  headline: "International Shipping Is Killing Your Conversion Rate: How to Diagnose It",
  description: "International traffic can look promising until customers see delivery cost, delivery time or duties. A funnel-stage way to check whether shipping is the real reason.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/international-shipping-low-conversion-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "International shipping and conversion", item: "https://www.attribix.app/resources/international-shipping-low-conversion-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "International shipping and conversion" }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            International shipping is killing your conversion rate: how to diagnose it
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            International traffic can look promising until customers see
            delivery cost, delivery time or duties. If the funnel collapses
            late, shipping is one of the first areas to inspect.
          </p>
        </Reveal>
      </section>

      {/* COMPARE FUNNEL STAGES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare funnel stages by country</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>Country A:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Product view → cart: strong</li>
              <li>Cart → checkout: strong</li>
              <li>Checkout → purchase: weak</li>
            </ul>
            <p>
              That suggests the product is attractive and the late-stage
              offer may be the problem.
            </p>
          </div>
        </Reveal>
      </section>

      {/* SHIPPING COST */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check shipping cost</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A $25 shipping charge on a $40 order can make the purchase
              uneconomic.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DELIVERY TIME */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check delivery time</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Two-week delivery can be acceptable for a unique product and
            unacceptable for an easily available alternative.
          </p>
        </Reveal>
      </section>

      {/* DUTIES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check duties</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Unexpected import charges create both abandonment and unhappy
              customers. That's a topic covered in more depth in{" "}
              <Link href="/resources/import-duties-ecommerce-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                how import duties affect international Shopify conversion rates
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* AVAILABILITY HONESTLY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check whether ads mention availability honestly</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Running &quot;free delivery&quot; creative globally when the
            offer applies only domestically creates instant trust problems.
          </p>
        </Reveal>
      </section>

      {/* THRESHOLDS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider thresholds or local fulfilment</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              For strong international markets, local warehousing,
              market-specific free-shipping thresholds or different
              product bundles may improve economics.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/import-duties-ecommerce-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How import duties affect international Shopify conversion rates
              </Link>
            </li>
            <li>
              <Link href="/resources/show-duties-taxes-before-checkout-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you show duties and taxes before checkout?
              </Link>
            </li>
            <li>
              <Link href="/resources/international-traffic-lower-conversion-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why international traffic has a lower Shopify conversion rate
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-add-to-cart-no-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Lots of add to carts but no purchases on Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">International traffic disappears at checkout?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If international Meta or Google traffic gets as far as checkout
            and disappears, send us an inquiry. We can help determine
            whether shipping is the real reason.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
