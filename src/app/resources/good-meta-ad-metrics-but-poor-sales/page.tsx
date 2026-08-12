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
  headline: "Why Your Meta Ads Have Good Creative Metrics but Poor Sales",
  description:
    "An ad can have an excellent hook rate, watch time and CTR and still be a poor sales ad. Creative metrics describe attention; revenue requires the right attention.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/good-meta-ad-metrics-but-poor-sales" },
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
      name: "Good Metrics but Poor Sales",
      item: "https://www.attribix.app/resources/good-meta-ad-metrics-but-poor-sales",
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
              { label: "Good Metrics but Poor Sales" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Your Meta Ads Have Good Creative Metrics but Poor Sales
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            An ad can have an excellent hook rate, high watch time, strong
            CTR and still be a poor sales ad.
          </p>
        </Reveal>
      </section>

      {/* ATTENTION VS REVENUE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <p className="text-white/60 leading-relaxed text-sm">
            Those metrics describe attention. Revenue requires attention
            from the right people for the right reason.
          </p>
        </Reveal>
      </section>

      {/* CURIOSITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Curiosity can create beautiful ad metrics</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A shocking opening, dramatic claim or funny video may earn
              cheap views and clicks. If the product is revealed late or
              the hook attracts people who were never likely to buy, the
              creative report can look better than the business result.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOLLOW TRAFFIC */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Follow the traffic after the click</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Compare: outbound CTR; landing-page-view rate; product-page
            engagement; add-to-cart rate; checkout rate; purchase rate.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            If CTR is excellent but visitors bounce quickly, the ad may be
            over-promising or attracting low-intent curiosity.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            If product engagement is strong but carts are weak, the offer
            or price may be the issue.
          </p>
        </Reveal>
      </section>

      {/* DIAGNOSTIC NOT GOALS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Creative metrics are diagnostic, not goals</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Hook rate can tell you whether the opening earned attention.
              Watch time can tell you whether people stayed. CTR tells you
              whether they clicked. None answers whether the ad acquired a
              profitable customer.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Use them to identify where the creative succeeds or fails,
              then let CPA, contribution margin and new-customer
              performance decide the commercial winner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUALIFY AS WELL AS ATTRACT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Make the ad qualify as well as attract</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Sometimes showing price, product type or a specific use case
            lowers CTR and improves purchase quality. That is a good trade
            if you are paying for fewer but better clicks.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads getting clicks but no sales? Diagnose it first
              </Link>
            </li>
            <li>
              <Link href="/resources/good-ctr-low-cpc-no-sales-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Good CTR and low CPC but no sales on Meta Ads
              </Link>
            </li>
            <li>
              <Link href="/resources/what-makes-good-meta-ad-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What makes a good Meta ad for ecommerce?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Winning on engagement, not on sales?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta creatives win all the engagement metrics but the
            Shopify sales are not following, contact us. We can diagnose
            where the disconnect begins.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
