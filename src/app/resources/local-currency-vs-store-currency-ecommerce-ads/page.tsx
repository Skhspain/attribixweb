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
  headline: "Local Currency vs Store Currency: What Should You Use in Ads?",
  description: "Customers prefer prices in a familiar local currency. Your ad account can still operate in another currency: what matters is keeping price and tracking consistent.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/local-currency-vs-store-currency-ecommerce-ads" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Local currency vs store currency", item: "https://www.attribix.app/resources/local-currency-vs-store-currency-ecommerce-ads" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Local currency vs store currency" }]} />
          <Eyebrow>Attribution</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Local currency vs store currency: what should you use in ads?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Customers generally prefer to understand prices in a familiar
            local currency. Your internal advertising account can still
            operate in another currency. The important part is keeping the
            customer-facing price and tracking values consistent.
          </p>
        </Reveal>
      </section>

      {/* LOCAL CURRENCY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Local currency reduces mental friction</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A UK shopper shown €84.63 has to translate the price mentally.
            Showing £72 is easier to evaluate.
          </p>
        </Reveal>
      </section>

      {/* GOOGLE SHOPPING FEED */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Google Shopping needs feed consistency</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Merchant Center price, ad price and landing-page price should
              align according to Google&apos;s current requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* META CREATIVE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Meta creative needs updating</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If you hard-code a dollar price into an ad shown across several
            countries, the website may display something different. That
            creates message mismatch.
          </p>
        </Reveal>
      </section>

      {/* TRACKING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Tracking should send accurate order value</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The event should represent the actual transaction in the
              intended reporting currency according to your implementation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DON'T CONFUSE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t confuse customer currency with Ads Manager currency</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              Meta can report spend in the ad account&apos;s currency while
              Shopify sells in multiple currencies. Business reporting
              needs normalization, a point that also drives{" "}
              <Link href="/resources/currency-affects-ecommerce-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                how currency differences affect ecommerce ROAS
              </Link>
              .
            </p>
            <p>
              Use local currency for customer clarity where the store
              supports it, then make sure measurement translates those
              transactions consistently.
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
              <Link href="/resources/currency-affects-ecommerce-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How currency differences affect ecommerce ROAS
              </Link>
            </li>
            <li>
              <Link href="/resources/translate-landing-pages-for-international-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you translate Shopify landing pages for paid ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/show-duties-taxes-before-checkout-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you show duties and taxes before checkout?
              </Link>
            </li>
            <li>
              <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate true ROAS on Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Pricing mismatches between ads, Shopify and reporting?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If international pricing is creating mismatches between ads,
            Shopify and reporting, contact us. We can help standardize the
            setup.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
