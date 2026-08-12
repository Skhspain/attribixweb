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
  headline: "Why International Traffic Has a Lower Shopify Conversion Rate",
  description: "International traffic often converts lower because the customer journey contains more uncertainty: shipping, currency, duties, payment, trust, language and product fit.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/international-traffic-lower-conversion-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "International traffic lower conversion", item: "https://www.attribix.app/resources/international-traffic-lower-conversion-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "International traffic lower conversion" }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why international traffic has a lower Shopify conversion rate
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            International traffic often converts lower because the
            customer journey contains more uncertainty.
          </p>
        </Reveal>
      </section>

      {/* WHERE UNCERTAINTY COMES FROM */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Where the uncertainty comes from</h2>
          <dl className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <div>
              <dt className="font-semibold text-white/85">Shipping</dt>
              <dd>Cost and delivery times are usually less competitive than domestic orders.</dd>
            </div>
            <div>
              <dt className="font-semibold text-white/85">Currency</dt>
              <dd>Customers may have to interpret unfamiliar prices or worry about exchange charges.</dd>
            </div>
            <div>
              <dt className="font-semibold text-white/85">Duties</dt>
              <dd>Import fees can increase the final price significantly.</dd>
            </div>
            <div>
              <dt className="font-semibold text-white/85">Payment</dt>
              <dd>Local shoppers may expect payment methods your store does not offer.</dd>
            </div>
            <div>
              <dt className="font-semibold text-white/85">Trust</dt>
              <dd>A customer may not know whether returns, support or consumer rights work across borders.</dd>
            </div>
            <div>
              <dt className="font-semibold text-white/85">Language</dt>
              <dd>Even fluent English speakers can respond more strongly to native-language product details and customer service.</dd>
            </div>
            <div>
              <dt className="font-semibold text-white/85">Product fit</dt>
              <dd>Demand may genuinely be weaker in that market.</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* DIAGNOSE BEFORE LOCALIZE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Diagnose before you localize everything</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                The answer is not automatically &quot;localize
                everything.&quot; First identify where each country&apos;s
                funnel differs from domestic customers.
              </p>
              <p>
                If product-page engagement is weak, offer or relevance may
                be the issue. If checkout collapses, logistics/payment
                becomes more suspicious. This is the same funnel-stage approach
                used in{" "}
                <Link href="/resources/international-shipping-low-conversion-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  diagnosing international shipping and conversion
                </Link>
                .
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
              <Link href="/resources/import-duties-ecommerce-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How import duties affect international Shopify conversion rates
              </Link>
            </li>
            <li>
              <Link href="/resources/ads-perform-differently-by-country-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why your ads perform well in one country and poorly in another
              </Link>
            </li>
            <li>
              <Link href="/resources/translate-landing-pages-for-international-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you translate Shopify landing pages for paid ads?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Cheap traffic that never becomes revenue?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If international traffic is cheap but rarely becomes Shopify
            revenue, contact us. We can diagnose whether the problem is
            traffic quality or the cross-border offer.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
