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
  headline: "Ad-to-Landing-Page Message Match: Why It Matters for Conversion Rate",
  description: "Paid advertising creates an expectation before the visitor reaches your store. Why the landing page must confirm it, and how to match claim, offer and visual across the two.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/ad-to-landing-page-message-match" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Ad-to-page message match", item: "https://www.attribix.app/resources/ad-to-landing-page-message-match" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Ad-to-page message match" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Ad-to-landing-page message match: why it matters for conversion rate
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Paid advertising creates an expectation before the visitor
            reaches your store. The landing page either confirms that
            expectation or makes the customer reassess the click.
          </p>
        </Reveal>
      </section>

      {/* EXPECTATION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Expectation affects conversion</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              Imagine an ad focused entirely on: &ldquo;Finally, hiking
              trousers designed for short women.&rdquo;
            </p>
            <p>
              The visitor clicks and lands on a generic women&apos;s
              clothing page.
            </p>
            <p>
              The store may sell the exact product, but the customer has to
              find the promise again.
            </p>
          </div>
        </Reveal>
      </section>

      {/* MISMATCH WASTES ADS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Message mismatch wastes strong ads</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A creative can generate highly qualified traffic and still
              appear to &ldquo;not convert&rdquo; because the landing
              experience becomes generic. If CTR is strong and visitors
              bounce immediately, compare the ad promise with the first page
              screen before blaming targeting.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MATCH CLAIM, OFFER, VISUAL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What &quot;matching&quot; actually means</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              <span className="text-white/80 font-medium">Match the main claim.</span>{" "}
              If the ad says &ldquo;Carry seven days of clothing in one
              cabin bag,&rdquo; the landing page&apos;s first section should
              reinforce packing capacity, not open with a generic company
              slogan.
            </p>
            <p>
              <span className="text-white/80 font-medium">Match the offer.</span>{" "}
              If the ad shows 20% off, free shipping or a $49 bundle, the
              page should confirm the same offer immediately. Nothing
              destroys paid conversion faster than making customers wonder
              whether the promotion disappeared.
            </p>
            <p>
              <span className="text-white/80 font-medium">Match the visual.</span>{" "}
              Using the same or closely related product imagery reassures
              the visitor they reached the correct destination.
            </p>
            <p>
              <span className="text-white/80 font-medium">Match intent, not every sentence.</span>{" "}
              The page does not need to repeat the ad word for word; it
              should expand the argument. The ad earns attention, the
              landing page provides proof, the product experience closes
              the sale.
            </p>
          </div>
        </Reveal>
      </section>

      {/* KEEP CHAIN INTACT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep the chain intact</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p className="font-semibold text-white/80">
                Search/ad message → Landing-page headline → Product/offer →
                Proof → CTA
              </p>
              <p>
                Each step should feel like the logical continuation of the
                previous one.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DON'T EXAGGERATE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t exaggerate in the ad</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              Sometimes the landing page cannot match because the
              advertisement made a claim the actual product cannot support.
            </p>
            <p>
              The fix is not more landing-page copy. It is a more accurate
              advertisement. Message match works because clarity reduces
              unnecessary doubt.
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
              <Link href="/resources/paid-ads-traffic-to-homepage-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why sending all paid traffic to your homepage is usually a mistake
              </Link>
            </li>
            <li>
              <Link href="/resources/different-landing-pages-meta-and-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you create different landing pages for Meta and Google Ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/collection-page-vs-product-page-google-shopping" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Collection page vs product page for Google Shopping traffic
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads clicks but no sales? Diagnose it first
              </Link>
            </li>
            <li>
              <Link href="/resources/good-ctr-low-cpc-no-sales-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Good CTR and low CPC but no sales on Meta Ads: what&apos;s wrong
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Keep the promise from click to purchase</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If paid traffic looks qualified but conversion falls immediately
            after the click, contact us. We can review the full ad-to-page
            journey.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
