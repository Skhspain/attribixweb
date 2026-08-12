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
  headline: "Does Social Proof Actually Increase Ecommerce Conversion Rate?",
  description: "Social proof can reduce uncertainty when customers have reason to trust it, and backfire when it looks manufactured. Why specificity and placement matter more than volume.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/social-proof-ecommerce-conversion-rate" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Social proof and conversion", item: "https://www.attribix.app/resources/social-proof-ecommerce-conversion-rate" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Social proof and conversion" }]} />
          <Eyebrow>CRO &amp; Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does social proof actually increase ecommerce conversion rate?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Social proof can reduce uncertainty when the customer has
            reason to trust it. Fake-looking proof can do the opposite.
          </p>
        </Reveal>
      </section>

      {/* WHY IT MATTERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why proof matters</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Online shoppers cannot hold the product or speak to another
            customer in the store. Reviews, customer photos and credible
            usage stories can reduce the perceived risk.
          </p>
        </Reveal>
      </section>

      {/* SPECIFIC PROOF */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Specific proof is stronger</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>&ldquo;Great product, love it!&rdquo; says very little.</p>
              <p>A review explaining:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>sizing;</li>
                <li>delivery;</li>
                <li>durability;</li>
                <li>how the product solved a particular problem</li>
              </ul>
              <p>helps another shopper make a decision.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLACEMENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Placement matters</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Proof is strongest near the question it answers.</p>
            <p>A delivery testimonial can support shipping information.</p>
            <p>A sizing review belongs near sizing.</p>
            <p>Overall ratings can appear near the product title.</p>
          </div>
        </Reveal>
      </section>

      {/* MORE ISN'T BETTER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">More proof is not always better</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A page filled with repetitive testimonials can feel
              manufactured. Quality, relevance and credibility matter more
              than raw quantity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MEASURE FUNNEL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure the funnel</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              If customers already add products to cart at a strong rate,
              lack of social proof may not be the bottleneck.
            </p>
            <p>Use proof to remove uncertainty, not as decoration.</p>
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
              <Link href="/resources/star-ratings-vs-written-reviews-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Star ratings vs written reviews: which matter more?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out whether trust is actually the bottleneck</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your store has reviews but conversion still struggles, send
            us an inquiry. We can identify whether trust is actually the
            issue.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
