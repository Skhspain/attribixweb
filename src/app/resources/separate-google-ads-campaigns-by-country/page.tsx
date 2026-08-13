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
  headline: "Google Ads by Country: Should You Separate Campaigns?",
  description: "Separate Google campaigns by country when markets require different budgets, targets, feeds, language or economics, and when combining them is fine.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/separate-google-ads-campaigns-by-country" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Google Ads campaigns by country", item: "https://www.attribix.app/resources/separate-google-ads-campaigns-by-country" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google Ads campaigns by country" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads by country: should you separate campaigns?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Separate Google campaigns by country when the markets require
            different budgets, targets, feeds, language or economics.
            Combining markets can be simpler when they genuinely behave
            alike.
          </p>
        </Reveal>
      </section>

      {/* WHY SEPARATION HELPS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why separation helps</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Country-specific campaigns give you control over:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Budget</li>
              <li>Bidding targets</li>
              <li>Language</li>
              <li>Ad copy</li>
              <li>Merchant Center feeds</li>
              <li>Products</li>
              <li>Landing pages</li>
              <li>Scheduling</li>
            </ul>
            <p>They also make profitability easier to interpret.</p>
          </div>
        </Reveal>
      </section>

      {/* TOO MUCH SEPARATION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why too much separation hurts</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Ten tiny campaigns with almost no conversion volume can reduce
              useful data and make management difficult.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PMAX */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">PMax adds another consideration</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Product availability, shipping and Merchant Center country
            settings need to support the market properly. Do not simply
            duplicate a domestic PMax campaign into a new country and
            assume the economics follow.
          </p>
        </Reveal>
      </section>

      {/* MEANINGFUL DIFFERENCES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use meaningful differences</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>Separate markets when there is a reason you want Google to treat them differently.</p>
              <p>
                If two countries share currency, language, margins and
                fulfilment and perform similarly, one structure may be
                enough. The same principle is covered in{" "}
                <Link href="/resources/one-meta-campaign-multiple-countries-vs-separate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  one Meta campaign for multiple countries or separate campaigns
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
              <Link href="/resources/one-meta-campaign-multiple-countries-vs-separate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                One Meta campaign for multiple countries or separate campaigns?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-to-choose-which-country-to-expand-ecommerce-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to choose which country to expand ecommerce ads into next
              </Link>
            </li>
            <li>
              <Link href="/resources/performance-max-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Performance Max ROAS suddenly dropped: how to diagnose it
              </Link>
            </li>
            <li>
              <Link href="/resources/google-merchant-center-product-disapproved" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Merchant Center products disapproved: what it means for sales
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Over-fragmented or hiding market-level performance?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your international Google account is either over-fragmented
            or hiding market-level performance, send us an inquiry. We can
            restructure it around the real commercial differences.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
