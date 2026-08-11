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
  headline: "Does Meta Ad Engagement Actually Matter for Sales?",
  description: "An ad with 10,000 likes and no profitable sales is not a successful sales ad.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/does-meta-ad-engagement-matter-for-sales" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Does engagement matter for sales", item: "https://www.attribix.app/resources/does-meta-ad-engagement-matter-for-sales" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Engagement vs sales" }]} />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Does Meta ad engagement actually matter for sales?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Likes, comments and shares can be useful. They can also
            distract you from the metric that matters. An ecommerce ad
            with 10,000 likes and no profitable sales is not a successful
            sales ad.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Engagement can create useful social proof</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Comments from real customers, questions, tags and positive
            reactions can reduce uncertainty for new viewers. A strong
            comment section can make an ad feel more credible than an
            isolated brand claim.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Engagement can also be entertainment</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Funny, controversial or emotionally charged ads can attract
              people who have no intention of buying. Engagement then
              becomes evidence that the content was interesting, not that
              the product is commercially persuasive.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at what happens after engagement</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Compare ads with similar reach and spend: outbound CTR,
            landing-page engagement, add-to-cart, purchase rate, CPA. If
            highly engaged ads consistently produce stronger purchase
            economics, engagement may be helping. If not, do not optimize
            toward applause.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Comments can provide research even when they don&apos;t sell</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Questions and objections reveal what customers care about.
              Use them to improve product pages, FAQs and future
              creatives. Engagement is best treated as a supporting signal
              and research source. For a sales campaign, the final test is
              still whether the attention turns into profitable customers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/good-meta-ad-metrics-but-poor-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why your Meta ads have good creative metrics but poor sales</Link></li>
            <li><Link href="/resources/what-makes-good-meta-ad-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What makes a good Meta ad for ecommerce?</Link></li>
            <li><Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta Ads getting clicks but no sales?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Plenty of activity, little revenue?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Contact us. We can help separate vanity engagement from useful
            customer intent.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
