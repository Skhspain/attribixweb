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
  headline: "Should You Create Different Landing Pages for Meta and Google Ads?",
  description: "Why Meta and Google traffic often need different landing pages, not because of design but because of how much the customer already knows when they click.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/different-landing-pages-meta-and-google-ads" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Meta vs Google landing pages", item: "https://www.attribix.app/resources/different-landing-pages-meta-and-google-ads" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Meta vs Google landing pages" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should you create different landing pages for Meta and Google Ads?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Often, yes. Not because Meta and Google require different
            designs, but because the customer can arrive with very
            different intent.
          </p>
        </Reveal>
      </section>

      {/* GOOGLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Google often captures an existing need</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Someone searching &ldquo;waterproof dog bed&rdquo; has already
            defined the problem and product category. The landing page can
            focus on why your product is the right option.
          </p>
        </Reveal>
      </section>

      {/* META */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Meta often creates the interest</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Someone scrolling Instagram may not have been thinking about a
              dog bed at all. The ad and page may need more context,
              demonstration and education.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DUPLICATION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid duplicating pages without a reason</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              If the same Shopify product page already serves both
              audiences effectively, maintaining two near-identical pages
              adds complexity.
            </p>
            <p>
              Different landing pages make sense when the selling argument
              needs to change.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CONSISTENT OFFER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep the underlying offer consistent</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Price, shipping, guarantee and product claims should not
              contradict each other across channels unless there is a
              deliberate channel-specific offer that is communicated
              clearly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MEASURE BY SOURCE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure by source</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              Compare conversion rate, AOV and CPA for each traffic type
              rather than expecting Meta and Google visitors to behave
              identically.
            </p>
            <p>
              The page should meet the customer at the level of awareness
              they had when they clicked.
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
              <Link href="/resources/collection-page-vs-product-page-google-shopping" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Collection page vs product page for Google Shopping traffic
              </Link>
            </li>
            <li>
              <Link href="/resources/ad-to-landing-page-message-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Ad-to-landing-page message match: why it matters for conversion rate
              </Link>
            </li>
            <li>
              <Link href="/resources/paid-ads-traffic-to-homepage-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why sending all paid traffic to your homepage is usually a mistake
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-vs-google-ads-shopify-budget" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads vs Google Ads for Shopify: where to spend first
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Meet each visitor at their actual level of awareness</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta and Google send very different customers to the same
            generic page, contact us. We can help align each campaign with
            the right landing experience.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
