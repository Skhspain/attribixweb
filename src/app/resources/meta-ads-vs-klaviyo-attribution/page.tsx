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
  headline: "Meta Ads vs Klaviyo Attribution: Who Gets Credit for the Sale?",
  description: "Meta and Klaviyo can both legitimately claim the same Shopify sale because each evaluates its own interactions. How to use each platform without double-counting revenue.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ads-vs-klaviyo-attribution" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Meta vs Klaviyo attribution", item: "https://www.attribix.app/resources/meta-ads-vs-klaviyo-attribution" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Meta vs Klaviyo attribution" }]} />
          <Eyebrow>Attribution &amp; Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads vs Klaviyo attribution: who gets credit for the sale?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Both can get credit, because both platforms evaluate their own
            interactions. Imagine this journey: Meta ad → product visit →
            welcome email → email click → Meta retargeting impression →
            purchase.
          </p>
        </Reveal>
      </section>

      {/* NO CONTRADICTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">There is no contradiction</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              Meta may attribute the sale. Klaviyo may attribute the sale.
              Shopify still records one order.
            </p>
            <p>
              The platforms are not dividing a single pie between
              themselves. Each runs its own attribution model.
            </p>
          </div>
        </Reveal>
      </section>

      {/* WHICH CHANNEL */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Which channel caused the purchase?</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The data cannot always answer perfectly. Meta may have created
              initial awareness. Email may have reminded the customer.
              Retargeting may have reinforced trust.
            </p>
          </Reveal>
        </div>
      </section>

      {/* USE ATTRIBUTION ACCORDINGLY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use attribution according to the decision</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            For Meta creative optimization, Meta reporting is useful. For
            email-flow comparison, Klaviyo is useful. For total business
            performance, use Shopify and a consistent cross-channel
            measurement approach.
          </p>
        </Reveal>
      </section>

      {/* AVOID ADDING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid adding channel revenue</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The biggest practical mistake is summing Meta-attributed and
              Klaviyo-attributed revenue and calling it &quot;revenue
              generated by marketing.&quot; The same order may be present in
              both.
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
              <Link href="/resources/google-ads-vs-klaviyo-revenue-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads vs Klaviyo revenue: why both can claim the same customer
              </Link>
            </li>
            <li>
              <Link href="/resources/ad-platforms-report-more-revenue-than-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Meta and Google both claim the same Shopify sale
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-retargeting-taking-credit-for-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta retargeting is taking credit for too many sales: what to do
              </Link>
            </li>
            <li>
              <Link href="/resources/klaviyo-attribution-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Klaviyo attribution explained for Shopify stores
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Make cross-platform performance easier to read</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your channels are all claiming the same Shopify customers,
            contact us. Attribix is built around making cross-platform
            performance easier to interpret.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
