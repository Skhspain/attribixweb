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
  headline: "Broad Match vs Phrase Match vs Exact Match for Ecommerce",
  description: "What each Google Ads keyword match type actually does now that broad, phrase and exact all use intent and context, and how to judge which one your data can support.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/broad-vs-phrase-vs-exact-match-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Match types", item: "https://www.attribix.app/resources/broad-vs-phrase-vs-exact-match-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Match types" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Broad match vs phrase match vs exact match for ecommerce
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Google&apos;s keyword match types are no longer simple boxes where
            exact means &quot;only these exact words&quot; and broad means
            &quot;anything vaguely related.&quot; Modern matching uses more context,
            intent and automation than the old definitions suggest. That
            makes strategy more important, not less.
          </p>
        </Reveal>
      </section>

      {/* EXACT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Exact match gives the strongest guardrails</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Exact match is useful when you know the commercial query you
            want and need tighter control. It can still match close
            variants and intent-equivalent searches, so the{" "}
            <Link href="/resources/google-ads-search-terms-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              search terms report
            </Link>{" "}
            remains important.
          </p>
        </Reveal>
      </section>

      {/* PHRASE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Phrase match balances reach and control</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Phrase match can discover useful variations without opening
              delivery as widely as broad. For many advertisers it provides
              a practical middle ground, particularly while building
              negative keyword lists.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BROAD */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Broad match needs good signals</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Broad match can work extremely well with strong conversion
            tracking and smart bidding because Google has more freedom to
            identify related intent. It can also spend money very quickly
            when the account has weak conversion signals, ambiguous
            products or loose campaign goals.
          </p>
        </Reveal>
      </section>

      {/* JUDGE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match type is only one part of quality</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                A broad keyword paired with excellent conversion data,
                negatives and a relevant landing page can outperform an
                exact keyword in a poorly structured account.
              </p>
              <p>Judge match types by:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Search term quality</li>
                <li>Conversion rate</li>
                <li>CPA / ROAS</li>
                <li>Incremental query reach</li>
                <li>Management burden</li>
              </ul>
              <p>
                There is no moral victory in using the &quot;most controlled&quot;
                match type. Use the level of freedom your data and business
                can support.
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
              <Link href="/resources/google-ads-search-terms-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads search terms: what should ecommerce advertisers look for?
              </Link>
            </li>
            <li>
              <Link href="/resources/negative-keywords-ecommerce-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Negative keywords for ecommerce Google Ads accounts
              </Link>
            </li>
            <li>
              <Link href="/resources/broad-match-smart-bidding-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Broad match and smart bidding for ecommerce
              </Link>
            </li>
            <li>
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Get control back over your query mix</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your search terms have become difficult to control or broad
            match is spending into irrelevant queries, contact us. We can
            restructure the campaigns around real ecommerce intent.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
