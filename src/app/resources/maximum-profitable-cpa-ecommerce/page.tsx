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
  headline: "How to Calculate Your Maximum Profitable CPA",
  description: "Your maximum profitable CPA is the acquisition cost at which the order still meets the profit requirement you have chosen, not the number at which the campaign looks good.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/maximum-profitable-cpa-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Maximum profitable CPA", item: "https://www.attribix.app/resources/maximum-profitable-cpa-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Maximum profitable CPA" }]} />
          <Eyebrow>Attribution & Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to calculate your maximum profitable CPA
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Your maximum profitable CPA is not the number at which the
            campaign &quot;looks good.&quot; It is the acquisition cost at
            which the order still meets the profit requirement you have
            chosen.
          </p>
        </Reveal>
      </section>

      {/* CONTRIBUTION BEFORE ADVERTISING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with contribution before advertising</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>Example:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Selling price: $120</li>
              <li>Product cost: $50</li>
              <li>Fulfilment/payment/shipping subsidy: $15</li>
              <li>Expected refunds/variable cost: $5</li>
            </ul>
            <p>Contribution before advertising = $50.</p>
            <p>
              If you are willing to break even on the first order, $50 is
              the maximum first-order CPA.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PROFIT REQUIREMENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Add a profit requirement</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If you want to retain $15 contribution per first order: $50 -
              $15 = $35 target maximum CPA.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LIFETIME VALUE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Include customer lifetime value carefully</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If new customers reliably generate future contribution, you may
            accept a higher first-order CPA. Use actual cohort data and a
            defined payback period, not optimistic lifetime revenue.
          </p>
        </Reveal>
      </section>

      {/* SEGMENT BY PRODUCT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Segment by product</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                A single account CPA target can be misleading when products
                have different margins. Calculate allowable CPA by
                meaningful product groups.
              </p>
              <p>
                The maximum is an economic boundary. Your campaign target
                should normally leave enough safety for volatility and
                overhead.
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
              <Link href="/resources/maximum-profitable-cpc-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate your maximum profitable CPC for Google Ads
              </Link>
            </li>
            <li>
              <Link href="/resources/gross-margin-break-even-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How gross margin changes your break-even ROAS
              </Link>
            </li>
            <li>
              <Link href="/resources/calculate-profit-per-order-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate profit per order from paid ads
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Build your acquisition ceiling from real economics</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta or Google CPA target was chosen without a margin
            calculation, send us an inquiry. We can build the acquisition
            ceiling from your actual Shopify economics.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
