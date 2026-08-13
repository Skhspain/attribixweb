"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { SoftInquiryCTA } from "@/components/marketing/CTAGroup";

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Star Ratings vs Written Reviews: Which Matter More?",
  description: "Star ratings help customers scan. Written reviews help them understand. Why the two answer different trust questions and how to use both well.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/star-ratings-vs-written-reviews-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Star ratings vs written reviews", item: "https://www.attribix.app/resources/star-ratings-vs-written-reviews-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Star ratings vs written reviews" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Star ratings vs written reviews: which matter more?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Star ratings help customers scan. Written reviews help them
            understand. Both serve a purpose.
          </p>
        </Reveal>
      </section>

      {/* RATINGS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ratings answer the first trust question</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A 4.8-star rating from a meaningful number of verified customers
            can quickly signal that the product has performed well for
            others.
          </p>
        </Reveal>
      </section>

      {/* WRITTEN REVIEWS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Written reviews answer the next question</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>&ldquo;Will this work for me?&rdquo;</p>
              <p>Detailed customer feedback can reveal:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>fit;</li>
                <li>size;</li>
                <li>durability;</li>
                <li>comfort;</li>
                <li>colour;</li>
                <li>quality;</li>
                <li>ease of use;</li>
                <li>delivery experience.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RATING LIMITS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A rating without context has limits</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Two products can both show 4.7 stars. One may have 12 reviews
            and the other 8,000. The strength of the evidence feels
            different.
          </p>
        </Reveal>
      </section>

      {/* IMPERFECT AVERAGES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Written detail can overcome imperfect averages</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A customer may accept a 4.3 rating when the negative reviews
              relate to an issue irrelevant to them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* USE BOTH */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use both</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Rating summary for quick reassurance.</p>
            <p>Written reviews for decision support.</p>
            <p>Don&apos;t optimize one at the expense of the other.</p>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/where-to-put-reviews-shopify-product-page" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Where should customer reviews appear on a Shopify product page?
              </Link>
            </li>
            <li>
              <Link href="/resources/social-proof-ecommerce-conversion-rate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Does social proof actually increase ecommerce conversion rate?
              </Link>
            </li>
            <li>
              <Link href="/resources/product-reviews-vs-testimonials-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Product reviews vs testimonials: which build more trust?
              </Link>
            </li>
            <li>
              <Link href="/resources/show-number-sold-product-page-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should Shopify stores show the number of products sold?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Turn social proof into actual objection handling</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your product reviews generate stars but little useful
            customer information, send us an inquiry. We can help turn
            social proof into actual objection handling.
          </p>
          <SoftInquiryCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
