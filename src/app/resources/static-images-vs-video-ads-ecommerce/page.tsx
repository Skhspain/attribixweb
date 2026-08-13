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
  headline: "Static Images vs Video Ads for Ecommerce",
  description:
    "Video gets more attention in marketing conversations, but static images still sell a lot of products. Which format to use depends on what needs to be communicated.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/static-images-vs-video-ads-ecommerce" },
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
      name: "Static Images vs Video Ads",
      item: "https://www.attribix.app/resources/static-images-vs-video-ads-ecommerce",
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
              { label: "Static Images vs Video Ads" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Static Images vs Video Ads for Ecommerce
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Video gets more attention in marketing conversations, but
            static images still sell a lot of products.
          </p>
        </Reveal>
      </section>

      {/* DEPENDS ON MESSAGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <p className="text-white/60 leading-relaxed text-sm">
            The better format depends on what needs to be communicated.
          </p>
        </Reveal>
      </section>

      {/* STATIC FAST */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Static is excellent at making one point fast</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A strong image can communicate product, price, offer and
              benefit almost instantly. It is cheap to produce, easy to
              vary and particularly useful for testing hooks or offers.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Static also gives the viewer control over how long to look.
              There is no opening sequence to wait through before the
              product appears.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VIDEO EXPLAINS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Video can explain what a still image cannot</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Use video when movement is part of the proof: how the product
            works; how it fits; before and after; texture; installation;
            customer story; comparison.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            A ten-second demonstration can answer an objection that would
            take a paragraph of copy.
          </p>
        </Reveal>
      </section>

      {/* DON'T COMPARE WEAK VS STRONG */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t compare weak static with strong video</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A beautiful video will normally beat a generic product image.
              That does not prove video is the reason. Test strong
              executions of both.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Also look beyond thumb-stop metrics. Video can achieve
              excellent watch time without producing qualified clicks.
              Static may look less exciting while generating a better CPA.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORMAT FOLLOWS MESSAGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Format follows message</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Start with the thing the customer needs to understand, then
            choose the format that communicates it most efficiently. A
            mature creative strategy usually contains both.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/ugc-ads-vs-product-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                UGC ads vs product ads: which converts better?
              </Link>
            </li>
            <li>
              <Link href="/resources/carousel-ads-vs-single-image-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Carousel ads vs single image ads
              </Link>
            </li>
            <li>
              <Link href="/resources/what-makes-good-meta-ad-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What makes a good Meta ad for ecommerce?
              </Link>
            </li>
            <li>
              <Link href="/resources/good-meta-ad-metrics-but-poor-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why your Meta ads have good creative metrics but poor sales
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">More video, no more sales?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are producing more and more video but cannot see a
            corresponding improvement in sales, contact us. We can review
            creative formats against downstream conversion data.
          </p>
          <SoftInquiryCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
