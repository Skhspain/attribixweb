"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "What counts as a \"high\" CPM for Shopify ecommerce?",
    a: "There's no universal number — CPM varies enormously by country, audience size, niche, and time of year, so comparing your CPM to a generic benchmark isn't that useful. The more useful comparison is your own CPM against your own account's history, and against your CPA and ROAS in the same period.",
  },
  {
    q: "Will narrowing my audience lower CPM?",
    a: "Not reliably, and sometimes the opposite. A smaller, more competitive audience can push CPM up because you're bidding against more advertisers for the same limited pool of people. Broader audiences with Meta's automatic optimization often see lower CPM, though the tradeoff is less control over exactly who's reached.",
  },
  {
    q: "Does CPM affect ROAS directly?",
    a: "Only through cost. ROAS is revenue divided by spend, and CPM is one input into how much you spend to reach people — it doesn't touch the revenue side at all. A higher CPM lowers ROAS only if conversion rate and average order value don't move to offset it.",
  },
  {
    q: "Should I switch campaign objective if CPM is high?",
    a: "Not just because of CPM alone. Objective and optimization event affect who Meta shows the ad to, which affects CPM, but the objective should be chosen based on what action you actually want optimized for — switching it purely to chase a lower CPM number usually costs more in relevance than it saves in cost.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Is My Meta Ads CPM So High?",
  description:
    "CPM rising isn't automatically a problem. What actually drives it, and why CPA and ROAS matter more than the CPM number on its own.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/why-is-meta-ads-cpm-high" },
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
      name: "Why Is Meta Ads CPM So High",
      item: "https://www.attribix.app/resources/why-is-meta-ads-cpm-high",
    },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Why Is Meta CPM High" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Is My Meta Ads CPM So High?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            CPM — cost per thousand impressions — is set by an auction, not
            by anything you did wrong. It moves with audience size,
            competition, season, and how relevant your ad is judged to be.
            Before reacting to it, check whether the higher cost is actually
            hurting your CPA and ROAS, or just changing the shape of the bill.
          </p>
        </Reveal>
      </section>

      {/* WHAT CPM MEASURES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What CPM actually measures</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            CPM is the price of thousand impressions, decided by an auction
            Meta runs every time an ad has a chance to show. It isn&apos;t a
            fixed rate card — it&apos;s the outcome of how many advertisers
            are bidding for the same audience at the same moment, weighted
            by how relevant and engaging Meta judges each ad to be. A rising
            CPM means the auction got more competitive, more expensive
            relative to your budget, or both. It doesn&apos;t, by itself,
            say anything about whether people are buying.
          </p>
        </Reveal>
      </section>

      {/* GEOGRAPHY & AUDIENCE SIZE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Geography and audience size</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              CPM in the US, UK, Canada and Australia runs meaningfully
              higher than in most other markets, simply because more
              advertisers are competing for that attention. Within a single
              country, a narrow audience — a small interest stack, a tight
              lookalike, a small custom audience — has fewer available
              impressions to sell, which pushes the price of each one up.
              Broadening the audience or expanding geography is one of the
              more direct ways CPM comes down, though it isn&apos;t free —
              you trade some targeting precision for it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPETITION & SEASONALITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Auction competition and seasonality</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            CPM climbs whenever more advertisers show up wanting the same
            eyeballs — the run-up to Black Friday and the weeks around
            Christmas are the clearest example, when almost every ecommerce
            advertiser increases budget at once and bids the auction up
            across the board. Industry events, competitor launches, and even
            broader shifts in ad spend across the platform can do the same
            thing on a smaller scale. This kind of increase says nothing
            about your account specifically — it&apos;s the market getting
            more expensive for everyone in it.
          </p>
        </Reveal>
      </section>

      {/* OBJECTIVE & OPTIMIZATION EVENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Campaign objective and optimization event</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Optimizing for Purchase asks Meta to find people likely to buy,
              which is a smaller, more competitive pool than optimizing for
              a cheaper action like landing page views or add-to-cart.
              That&apos;s a deliberate tradeoff, not a mistake — a higher CPM
              on a Purchase-optimized campaign can still produce a lower CPA
              than a cheap-CPM campaign optimized for a lightweight event
              that doesn&apos;t reliably lead to a sale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CREATIVE RELEVANCE & FREQUENCY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Creative relevance and frequency</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Meta&apos;s auction rewards ads it expects people to engage with
            — relevant, well-performing creative tends to get cheaper
            impressions than an ad the system predicts people will scroll
            past or hide. If CPM has crept up gradually on the same creative
            over several weeks, rising frequency is usually part of the
            story: the audience has seen the ad enough times that engagement
            is dropping, and the auction is pricing that in. Fresh creative
            is often what brings CPM back down here, more than a targeting
            or budget change.
          </p>
        </Reveal>
      </section>

      {/* PLACEMENT MIX */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Placement mix</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Feed placements on Instagram and Facebook generally cost more
              per thousand impressions than Audience Network or some
              Stories and Reels inventory, because they&apos;re higher-demand
              real estate. If Meta&apos;s automatic placements have shifted
              more of your delivery toward premium feed placements — often
              because that&apos;s where the algorithm is finding your best
              converters — CPM rises as a side effect of the system doing
              its job, not a sign anything is wrong.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CPM VS CPA/ROAS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check CPA and ROAS before reacting to CPM</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            CPM only tells you the cost of getting in front of someone. What
            determines whether that&apos;s a problem is what happens after —
            your cost per purchase and your return on ad spend. A CPM
            increase that&apos;s matched by a proportional conversion-rate
            or average-order-value increase leaves CPA and ROAS untouched,
            or even improves them. Pull up CPA and ROAS for the same period
            before deciding a rising CPM needs a response at all — if
            they&apos;re holding steady, the CPM number on its own isn&apos;t
            the thing to fix. If ROAS has dropped alongside it, work through{" "}
            <Link href="/resources/meta-ads-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              our guide to a sudden ROAS drop
            </Link>{" "}
            to separate a real decline from a measurement issue.
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/meta-ads-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads ROAS dropped suddenly: ads, website, or tracking?
              </Link>
            </li>
            <li>
              <Link href="/resources/good-ctr-low-cpc-no-sales-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Good CTR and low CPC but no sales: what it actually means
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads getting clicks but no sales: full funnel diagnosis
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Still not sure what&apos;s causing it?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta, Google and Shopify are telling you different things,
            send us an inquiry — we can review the setup and help determine
            whether it&apos;s advertising performance, your website,
            tracking, or attribution.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
