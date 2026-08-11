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
  headline: "How to Tell Whether Your Meta Ad Creative Is the Problem",
  description:
    "A way to diagnose whether weak Meta Ads performance is a creative problem or a funnel problem further downstream, before you replace anything.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/how-to-tell-meta-ad-creative-problem",
  },
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
      name: "Creative Problem Diagnosis",
      item: "https://www.attribix.app/resources/how-to-tell-meta-ad-creative-problem",
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
              { label: "Creative Problem Diagnosis" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Tell Whether Your Meta Ad Creative Is the Problem
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            When a campaign underperforms, creative is often the first
            suspect. Sometimes correctly. But you should be able to explain
            why before replacing it.
          </p>
        </Reveal>
      </section>

      {/* BEFORE THE WEBSITE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Creative problems usually appear before the website</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If the ad struggles to earn attention or qualified clicks, look at:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5">
            <li>Low outbound CTR relative to comparable ads</li>
            <li>Rising CPC without a major CPM change</li>
            <li>Weak video retention</li>
            <li>Poor engagement with the core selling message</li>
            <li>Strong spend with little useful traffic</li>
          </ul>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Those patterns suggest the ad is failing before the customer
            reaches the store.
          </p>
        </Reveal>
      </section>

      {/* FOLLOW THE FUNNEL */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">If the click looks healthy, follow the funnel</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Good CTR plus poor product engagement can still be a creative
              problem if the ad attracts the wrong expectation. But it can
              also mean the landing page is weak.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Good page engagement plus poor add-to-cart points more strongly
              toward the offer, product or price.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Good carts plus weak checkout completion shifts the
              investigation further down the funnel.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SAME ENVIRONMENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare creatives against the same environment</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Creative A and B are easier to compare if they run in similar
            countries, periods, offers and landing pages. Comparing a Black
            Friday video with an evergreen static ad from June tells you very
            little about format quality.
          </p>
        </Reveal>
      </section>

      {/* ANSWER A QUESTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Creative should answer a customer question</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Before producing a replacement, define the weakness. Does the ad
              fail to explain the product? Lack proof? Attract the wrong
              person? Hide the offer? Look generic?
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              &ldquo;Make new creatives&rdquo; is not a diagnosis. Identify
              the communication problem first.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
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
            <li>
              <Link href="/resources/good-meta-ad-metrics-but-poor-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why your Meta Ads have good creative metrics but poor sales
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ad-creative-testing-what-to-test-first" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta ad creative testing: what should you test first?
              </Link>
            </li>
            <li>
              <Link href="/ad-management/meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads management
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if creative is really the constraint?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are replacing ads constantly but performance does not
            improve, send us an inquiry. We can determine whether creative is
            really the constraint.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
