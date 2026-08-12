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
  headline: "Should You Show Duties and Taxes Before Checkout?",
  description: "Yes, as early and accurately as practical. Customers do not enjoy discovering mandatory costs after they have already decided to buy.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/show-duties-taxes-before-checkout-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Show duties and taxes before checkout", item: "https://www.attribix.app/resources/show-duties-taxes-before-checkout-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Show duties and taxes before checkout" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should you show duties and taxes before checkout?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Yes, as early and accurately as practical. Customers do not
            enjoy discovering mandatory costs after they have already
            decided to buy.
          </p>
        </Reveal>
      </section>

      {/* TOTAL COST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Total cost affects product value</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A $100 product can become a $145 purchase after shipping and
            import charges. That is a different offer.
          </p>
        </Reveal>
      </section>

      {/* EXACT INFORMATION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Exact information is better than vague warnings</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              &quot;Additional fees may apply&quot; is better than silence
              and less useful than showing the actual expected cost where
              the technology supports it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MARKET SPECIFIC */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Market-specific messaging helps</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Domestic customers do not need international duty warnings.
            Show relevant information based on destination.
          </p>
        </Reveal>
      </section>

      {/* LEGAL ACCURACY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Be careful with legal accuracy</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Tax and duty collection rules vary. Use Shopify Markets,
                your tax setup and current authoritative guidance rather
                than hard-coding broad claims.
              </p>
              <p>
                Transparency may reduce some early conversion because
                customers see the true cost sooner. That can still be
                healthier than paying for checkout starts that were never
                commercially viable.
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
              <Link href="/resources/import-duties-ecommerce-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How import duties affect international Shopify conversion rates
              </Link>
            </li>
            <li>
              <Link href="/resources/international-shipping-low-conversion-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                International shipping is killing your conversion rate: how to diagnose it
              </Link>
            </li>
            <li>
              <Link href="/resources/local-currency-vs-store-currency-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Local currency vs store currency: what should you use in ads?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Customers only learn the cost at the end?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If international customers only learn the true order cost at
            the end of checkout, send us an inquiry. We can review how to
            make the offer clearer earlier.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
