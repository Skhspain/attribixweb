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
  headline: "How Much of Your Meta Ads Budget Should Go to Retargeting?",
  description:
    "There's no fixed percentage that works for every store. Why retargeting budget should be set by audience size and saturation signals, not a copied rule.",
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
    "@id": "https://www.attribix.app/resources/how-much-meta-ads-budget-retargeting",
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
      name: "Retargeting Budget",
      item: "https://www.attribix.app/resources/how-much-meta-ads-budget-retargeting",
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
              { label: "Retargeting Budget" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Much of Your Meta Ads Budget Should Go to Retargeting?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There is no sensible universal rule that says 10%, 20% or 30% of
            a Meta budget must go to retargeting. The right budget is
            constrained by the size of the opportunity. If 2,000 people
            visit your store each month, you cannot productively spend the
            same retargeting budget as a store with 500,000 visitors.
          </p>
        </Reveal>
      </section>

      {/* AUDIENCE VOLUME */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with audience volume</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Retargeting demand is created by your other marketing. Website
            visitors, product viewers, cart users and existing customers are
            finite groups. If you force too much spend into those
            audiences, Meta has only a few options: increase frequency,
            reach weaker members of the pool or expand delivery depending on
            the campaign configuration. That is why a fixed percentage rule
            can fail badly.
          </p>
        </Reveal>
      </section>

      {/* SATURATION SIGNALS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Let the economics tell you when the audience is saturated
            </h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">Watch:</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5 max-w-2xl">
              <li>Frequency</li>
              <li>Reach</li>
              <li>CPA</li>
              <li>Incremental store sales</li>
              <li>Blended ROAS/MER</li>
              <li>How much revenue is from existing customers</li>
              <li>Overlap with broader campaigns</li>
            </ul>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              If retargeting spend doubles while total Shopify sales barely
              move, the beautiful in-platform ROAS may not tell the whole
              story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROSPECTING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Prospecting creates tomorrow&apos;s retargeting pool</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Over-investing in warm audiences can also starve new-customer
            acquisition. Retargeting does not create demand by itself. It
            harvests demand generated elsewhere. A healthy ecommerce account
            often needs a much larger share of resources devoted to reaching
            new potential customers than chasing people who already know the
            brand.
          </p>
        </Reveal>
      </section>

      {/* CAPACITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Think in capacity rather than percentages</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Ask: how much spend can this warm audience absorb before
              marginal performance deteriorates? That number may be 5% of
              total spend in one account and 25% in another. It may also
              change during a large promotion when website traffic and cart
              volume rise sharply.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              The best split is dynamic. Build retargeting around the size
              and behaviour of the audience, not a number copied from
              someone else&apos;s ad account.
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
              <Link href="/resources/should-you-retarget-website-visitors-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you retarget website visitors on Meta Ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-20-percent-budget-rule" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                The Meta Ads 20% budget rule, examined
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-frequency-too-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads frequency too high: when does it become a problem?
              </Link>
            </li>
            <li>
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure how much retargeting is too much?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are unsure whether too much of your Meta budget is being
            spent on people who would have purchased anyway, send us an
            inquiry. We can assess the account alongside actual Shopify
            revenue.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
