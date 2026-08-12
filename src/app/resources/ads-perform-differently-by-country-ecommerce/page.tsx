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
  headline: "Why Your Ads Perform Well in One Country and Poorly in Another",
  description: "The same product, creative and campaign can produce very different economics in two countries. Auction cost, shipping, payment and creative context explain most of the gap.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/ads-perform-differently-by-country-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Ads perform differently by country", item: "https://www.attribix.app/resources/ads-perform-differently-by-country-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Ads perform differently by country" }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why your ads perform well in one country and poorly in another
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The same product, creative and campaign can produce completely
            different economics in two countries. That does not necessarily
            mean the advertising algorithm is inconsistent.
          </p>
        </Reveal>
      </section>

      {/* AUCTION COST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Auction cost differs</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Competition changes CPM and CPC. A customer can cost twice as
            much to reach in one market before website conversion is even
            considered.
          </p>
        </Reveal>
      </section>

      {/* CUSTOMERS VALUE DIFFERENTLY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Customers value products differently</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Brand familiarity, local alternatives, income levels, product
              category maturity and cultural preferences affect demand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SHIPPING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shipping changes conversion</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A domestic customer offered two-day shipping may convert well.
            An international customer facing a ten-day delivery estimate
            and duties may not. That is one of the most common reasons{" "}
            <Link href="/resources/international-shipping-low-conversion-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              international shipping quietly kills conversion rate
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* PAYMENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Payment options matter</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Preferred payment methods vary by country. An unfamiliar
              checkout can reduce trust.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CREATIVE LANGUAGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Creative language and context matter</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Translation alone may not make an ad locally relevant.
          </p>
        </Reveal>
      </section>

      {/* COMPARE WHOLE EQUATION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare the whole economic equation</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Country A can have higher CPM and better conversion.
                Country B can have cheap traffic and weak sales.
              </p>
              <p>
                Review CPA, AOV, margin after shipping, returns and
                new-customer value before deciding which country is
                &quot;better.&quot;
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
              <Link href="/resources/currency-affects-ecommerce-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How currency differences affect ecommerce ROAS
              </Link>
            </li>
            <li>
              <Link href="/resources/which-country-expand-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to choose which country to expand ecommerce ads into next
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Performance varies wildly by country?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If international campaign performance varies wildly and you
            cannot identify why, contact us. We can compare the markets
            from impression through Shopify purchase.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
