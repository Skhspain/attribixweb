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
  headline: "How to Match Your Ad Message to Your Landing Page",
  description: "A visitor should never have to figure out whether the page they landed on is connected to the ad they clicked. How to match claim, offer and visual across the two.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/ad-landing-page-message-match-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Ad-to-page message match", item: "https://www.attribix.app/resources/ad-landing-page-message-match-ecommerce" },
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
            How to match your ad message to your landing page
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A visitor should not have to figure out whether the page they
            landed on is connected to the ad they clicked. The product,
            offer and core promise should feel continuous.
          </p>
        </Reveal>
      </section>

      {/* MATCH CLAIM */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match the main claim</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              Ad: &ldquo;Carry seven days of clothing in one cabin
              bag.&rdquo;
            </p>
            <p>
              Landing page: The first section should reinforce packing
              capacity, not open with a generic company slogan.
            </p>
          </div>
        </Reveal>
      </section>

      {/* MATCH OFFER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match the offer</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>If the ad shows:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>20% off</li>
                <li>Free shipping</li>
                <li>$49 bundle</li>
              </ul>
              <p>the page should confirm the same offer immediately.</p>
              <p>
                Nothing destroys paid conversion faster than making
                customers wonder whether the promotion disappeared.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MATCH VISUAL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match the visual</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Using the same or closely related product imagery can reassure
            the visitor that they reached the correct destination.
          </p>
        </Reveal>
      </section>

      {/* MATCH INTENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match intent, not every sentence</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                The landing page does not need to repeat the ad word for
                word. It should expand the argument.
              </p>
              <p>
                Ad earns attention. Landing page provides proof. Product
                experience closes the sale.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BAD TRAFFIC */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Poor message match can look like bad traffic</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If CTR is strong and visitors bounce immediately, compare the ad
            promise with the first page screen before blaming targeting.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Make sure the ad and the page tell the same story</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your ads get strong engagement but visitors disappear as soon
            as they reach Shopify, send us an inquiry. We can check whether
            the campaign and page are telling the same story.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
