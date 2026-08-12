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
  headline: "One Meta Campaign for Multiple Countries or Separate Campaigns?",
  description: "Combining countries gives Meta more data and freedom. Separating them gives you more control over budget and economics. How to choose the right structure.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/one-meta-campaign-multiple-countries-vs-separate" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "One campaign or separate by country", item: "https://www.attribix.app/resources/one-meta-campaign-multiple-countries-vs-separate" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "One campaign or separate by country" }]} />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            One Meta campaign for multiple countries or separate campaigns?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Combining countries gives Meta more data and freedom. Separating
            them gives you more control over budget and economics. The
            right structure depends on how similar the markets are.
          </p>
        </Reveal>
      </section>

      {/* COMBINE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Combine when countries are genuinely similar</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>One campaign can make sense when markets share:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Language</li>
              <li>Product pricing</li>
              <li>Shipping economics</li>
              <li>Conversion rate</li>
              <li>Creative</li>
              <li>Business targets</li>
            </ul>
            <p>That can reduce fragmentation.</p>
          </div>
        </Reveal>
      </section>

      {/* SEPARATE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Separate when business value differs</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>You may want individual campaigns when:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Shipping cost differs heavily</li>
                <li>One country has much higher AOV</li>
                <li>Languages differ</li>
                <li>Promotions differ</li>
                <li>Margins differ</li>
                <li>One market needs protected budget</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WATCH ALLOCATION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch allocation</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If the US converts more easily than Canada, a combined campaign
            may send most spend to the US. That can be efficient and
            unhelpful if your goal is to learn whether Canada can scale.
          </p>
        </Reveal>
      </section>

      {/* USE STRUCTURE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use structure to answer the business question</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>If the goal is maximum total efficiency, consolidation can be attractive.</p>
              <p>
                If the goal is controlled market expansion, separation can
                give you better learning. That's the same logic that applies to{" "}
                <Link href="/resources/separate-google-ads-campaigns-by-country" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  separating Google Ads campaigns by country
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
              <Link href="/resources/meta-ads-multiple-countries-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores run Meta Ads in multiple countries?
              </Link>
            </li>
            <li>
              <Link href="/resources/separate-google-ads-campaigns-by-country" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads by country: should you separate campaigns?
              </Link>
            </li>
            <li>
              <Link href="/resources/which-country-expand-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to choose which country to expand ecommerce ads into next
              </Link>
            </li>
            <li>
              <Link href="/resources/campaign-budget-vs-ad-set-budget-meta" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads campaign budget vs ad set budget: which should you use?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Budget only flowing to one country?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta keeps pushing budget into one country while other
            markets receive almost no delivery, contact us. We can
            restructure the account around the expansion objective.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
