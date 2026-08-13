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
  headline: "Carousel Ads vs Single Image Ads: Which Should You Use?",
  description:
    "Carousel ads help when the customer benefits from seeing several things. A single image helps when one clear message deserves all the attention. How to decide.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/carousel-ads-vs-single-image-ads" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Carousel Ads vs Single Image Ads",
      item: "https://www.attribix.app/resources/carousel-ads-vs-single-image-ads",
    },
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
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Carousel Ads vs Single Image Ads" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Carousel Ads vs Single Image Ads: Which Should You Use?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Carousel ads are useful when the customer benefits from seeing
            several things. A single image is useful when one clear
            message deserves all the attention.
          </p>
        </Reveal>
      </section>

      {/* SIMPLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <p className="text-white/60 leading-relaxed text-sm">
            That sounds simple because it is.
          </p>
        </Reveal>
      </section>

      {/* WHEN CAROUSEL HELPS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use a carousel when sequence or variety helps</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Carousels can work well for: multiple products in a
              collection; different colours or variations; step-by-step
              features; before/after or problem/solution sequences; several
              customer benefits; product catalog retargeting.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              They let people browse without leaving Meta, which can
              increase interaction with products they actually care about.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SINGLE IMAGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Single images are stronger when focus matters</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If one hero product, offer or visual can carry the message,
            additional cards may simply create distraction. A strong single
            image can make the decision easier: this is the product, this
            is why it matters, this is the offer.
          </p>
        </Reveal>
      </section>

      {/* CTR MISLEADS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">CTR alone can mislead</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Carousel cards can create more interaction opportunities, but
              clicks are not the final objective. Compare product-page
              engagement, purchases and CPA.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Also consider which products receive clicks. A carousel may
              reveal that one item creates most of the interest, which can
              inform future creative and merchandising decisions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LET SALES IDEA DECIDE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Let the sales idea decide</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Do not use a carousel because the ad manager offers the format.
            Use it when multiple frames make the selling argument stronger.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/static-images-vs-video-ads-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Static images vs video ads for ecommerce
              </Link>
            </li>
            <li>
              <Link href="/resources/ugc-ads-vs-product-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                UGC ads vs product ads: which converts better?
              </Link>
            </li>
            <li>
              <Link href="/resources/what-makes-good-meta-ad-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What makes a good Meta ad for ecommerce?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-retargeting-taking-credit-for-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta retargeting is taking credit for too many sales
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Unsure which formats are actually contributing?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are unsure which Meta formats are genuinely contributing
            to sales, send us an inquiry. We can compare creative
            performance through the full Shopify funnel.
          </p>
          <SoftInquiryCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
