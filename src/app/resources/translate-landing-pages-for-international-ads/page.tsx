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
  headline: "Should You Translate Shopify Landing Pages for Paid Ads?",
  description: "If you run ads in a customer's local language, the landing page should normally continue in that language. What to translate first, and what localization requires beyond words.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/translate-landing-pages-for-international-ads" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Translating landing pages for ads", item: "https://www.attribix.app/resources/translate-landing-pages-for-international-ads" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Translating landing pages for ads" }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should you translate Shopify landing pages for paid ads?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            If you run ads in a customer&apos;s local language, the landing
            page should normally continue in that language. Sending a
            Spanish-language Meta ad to an English product page breaks the
            experience immediately.
          </p>
        </Reveal>
      </section>

      {/* TRANSLATION IMPROVES CLARITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Translation improves clarity</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Shipping, returns, sizing and product benefits deserve the same
            understanding as the advertisement.
          </p>
        </Reveal>
      </section>

      {/* LOCALIZATION BEYOND WORDS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Localization goes beyond words</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm">
              <p>Consider:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Currency</li>
                <li>Measurement units</li>
                <li>Delivery expectations</li>
                <li>Local reviews</li>
                <li>Payment methods</li>
                <li>Legal information</li>
                <li>Cultural references</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRIORITIZE MARKETS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Prioritize markets with real potential</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Translating the entire store into ten languages before proving
            demand is expensive. A market-specific landing page can be a
            useful test.
          </p>
        </Reveal>
      </section>

      {/* HUMAN QUALITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use human-quality language</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Literal machine translation can make a premium brand look
              unprofessional. Review important sales copy with a native or
              highly proficient speaker.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEO ARCHITECTURE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep SEO architecture clean</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              If localized pages are intended for organic search as well,
              implement proper language/region SEO rather than creating
              duplicate thin pages.
            </p>
            <p>
              For paid campaigns, the objective is simple: do not make
              customers switch language halfway through the purchase.
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
              <Link href="/resources/english-ads-vs-local-language-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                English ads vs local-language ads: which perform better?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-you-run-different-meta-creatives-for-different" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you run different Meta creatives for different countries?
              </Link>
            </li>
            <li>
              <Link href="/resources/international-traffic-lower-conversion-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why international traffic has a lower Shopify conversion rate
              </Link>
            </li>
            <li>
              <Link href="/resources/ad-to-landing-page-message-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to match your ad message to your landing page
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Expanding into non-English markets?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are expanding paid traffic into non-English markets,
            send us an inquiry. We can help decide which pages need
            localization first.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
