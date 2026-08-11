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
  headline: "What Makes a Good Meta Ad for Ecommerce?",
  description:
    "A good Meta ad isn't the one people applaud — it's the one that attracts attention your business can profitably convert. How to build the message before the format.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/what-makes-good-meta-ad-ecommerce" },
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
      name: "What Makes a Good Meta Ad",
      item: "https://www.attribix.app/resources/what-makes-good-meta-ad-ecommerce",
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
              { label: "What Makes a Good Meta Ad" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What Makes a Good Meta Ad for Ecommerce?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A good Meta ad does not need to look expensive. It needs to
            make the right person care quickly enough to keep watching,
            click or buy.
          </p>
        </Reveal>
      </section>

      {/* BACKWARDS BUILDING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <p className="text-white/60 leading-relaxed text-sm">
            That sounds obvious, but many ecommerce ads are built backwards.
            They start with a format trend, editing style or &ldquo;hook
            template&rdquo; and only later ask what the customer actually
            needs to hear.
          </p>
        </Reveal>
      </section>

      {/* ONE CLEAR REASON */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with one clear reason to care</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A strong ad usually has a dominant idea. It might be: a
              painful problem; a desired outcome; a product demonstration;
              a surprising comparison; proof from a customer; a compelling
              offer.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Trying to communicate six benefits in the first five seconds
              often makes none of them memorable.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SHOW THE PRODUCT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Show the product doing the job</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            For physical products, demonstration is powerful because it
            reduces imagination. If the value is softness, show texture. If
            it saves time, show the before-and-after process. If it fits
            into a small space, demonstrate the size.
          </p>
        </Reveal>
      </section>

      {/* MATCH SOPHISTICATION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match the sophistication of the customer</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Someone who has never heard of the problem needs different
              messaging from a shopper comparing three brands. Good
              accounts therefore use several angles instead of assuming one
              universal ad can speak to everybody.
            </p>
          </Reveal>
        </div>
      </section>

      {/* JUDGE BEYOND CTR */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Judge beyond CTR</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            An ad that generates curiosity clicks can look brilliant on CTR
            and fail commercially. Review: landing-page engagement;
            add-to-cart rate; purchase rate; CPA; new-customer quality.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            A good Meta ad is not the one people applaud. It is the one
            that attracts the kind of attention your business can
            profitably convert.
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
              <Link href="/resources/static-images-vs-video-ads-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Static images vs video ads for ecommerce
              </Link>
            </li>
            <li>
              <Link href="/resources/carousel-ads-vs-single-image-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Carousel ads vs single image ads
              </Link>
            </li>
            <li>
              <Link href="/resources/good-meta-ad-metrics-but-poor-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why your Meta ads have good creative metrics but poor sales
              </Link>
            </li>
            <li>
              <Link href="/resources/how-to-tell-meta-ad-fatigue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to tell if your Meta ad creative has fatigued
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Need a clearer creative strategy?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you need a clearer Meta creative strategy rather than an
            endless stream of random new ads, contact us. We can connect
            creative testing to the campaign and Shopify funnel.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
