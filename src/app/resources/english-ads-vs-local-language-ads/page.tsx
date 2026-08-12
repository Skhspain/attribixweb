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
  headline: "English Ads vs Local-Language Ads: Which Perform Better?",
  description: "Local-language ads often improve relevance because customers process familiar language more naturally, but English can still work well in some categories and markets.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/english-ads-vs-local-language-ads" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "English vs local-language ads", item: "https://www.attribix.app/resources/english-ads-vs-local-language-ads" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "English vs local-language ads" }]} />
          <Eyebrow>Creative & Offers</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            English ads vs local-language ads: which perform better?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Local-language ads often improve relevance because customers
            process familiar language more naturally. English can still
            perform well in markets where it is widely used, especially
            for international brands.
          </p>
        </Reveal>
      </section>

      {/* CATEGORY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The category matters</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Luxury, technology and fashion brands may already communicate
            in English globally. Local service/product categories can
            require stronger localization.
          </p>
        </Reveal>
      </section>

      {/* TRANSLATION QUALITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Translation quality matters</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A bad local-language ad can perform worse than clear English.
              Awkward grammar immediately reduces trust.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MATCH LANDING PAGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match the landing page</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Do not test local-language ads while sending users to an
            unrelated English page and conclude that localization failed.
            The reason{" "}
            <Link href="/resources/translate-landing-pages-for-international-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              translating the landing page
            </Link>{" "}
            usually comes first.
          </p>
        </Reveal>
      </section>

      {/* TEST BY MARKET */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test by market</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>Run meaningful creative variants and compare:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>CTR</li>
                <li>Landing-page engagement</li>
                <li>Purchase conversion</li>
                <li>CPA</li>
                <li>AOV</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CREATIVE CULTURE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider creative culture too</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              Localization is more than translating the headline. Humor,
              proof, testimonials and product angles can vary by market.
            </p>
            <p>Test language as one part of local relevance.</p>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/translate-landing-pages-for-international-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you translate Shopify landing pages for paid ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/different-meta-creatives-by-country" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you run different Meta creatives for different countries?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-to-find-facebook-ad-angles" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to find new Meta ad angles without guessing
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
          <h2 className="text-2xl md:text-3xl font-extrabold">All markets getting the same English creative?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are spending internationally but all markets receive the
            same English creative, contact us. We can help structure
            country-level tests.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
