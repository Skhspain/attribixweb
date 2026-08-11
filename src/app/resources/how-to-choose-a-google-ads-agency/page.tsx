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
    q: "Does the agency need Shopify-specific experience, or is general ecommerce experience enough?",
    a: "General ecommerce experience gets you most of the way there — the core Search/Shopping/PMax mechanics don't change by platform. But Shopify-specific experience matters for the parts that touch your stack directly: how the feed gets built and refreshed, how conversion tracking is wired to checkout, and how Shopify's own reporting differs from what Google Ads shows. An agency that's only worked on Magento or custom carts will have a learning curve on those specifics.",
  },
  {
    q: "Should I ask to see results from their other clients?",
    a: "Ask, but expect limits. Reputable agencies usually can't hand over screenshots of another client's account without permission, and confidentiality clauses are normal in this industry. What you can reasonably ask for is a description of the account (spend level, vertical, timeframe) and what changed, without exact numbers if they're not able to share them. Be skeptical of anyone who freely shows you a competitor's private dashboard — it means they'd do the same with yours.",
  },
  {
    q: "Is a 12-month contract normal for a Google Ads agency?",
    a: "Long lock-ins are common but not universal, and they're more of a business-model signal than a competence signal. Some agencies genuinely need a few months of runway before Search and Shopping data stabilizes enough to show a fair result, which is a reasonable reason to ask for a minimum term. A 12-month contract with no exit clause and no defined checkpoint to review results is a different thing — that's a retention mechanism, not a reflection of how long good work takes.",
  },
  {
    q: "What's the difference between a Google Ads agency and a Google Shopping agency?",
    a: "In practice, not much — \"Shopping agency\" is usually a positioning choice rather than a separate skill set, since Shopping and Performance Max both run through the same Merchant Center feed that Search campaigns often reference too. The more useful question is whether whoever you're talking to can speak fluently about feed structure and product data, not just keyword bidding, regardless of what they call themselves.",
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
  headline: "How to Choose a Google Ads Agency for Ecommerce",
  description:
    "What separates a Google Ads agency that actually understands ecommerce from a generalist PPC shop, and the questions worth asking before you sign.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-to-choose-a-google-ads-agency" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "How to Choose a Google Ads Agency", item: "https://www.attribix.app/resources/how-to-choose-a-google-ads-agency" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Choosing a Google Ads Agency" }]} />
          <Eyebrow>Marketing &amp; Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to Choose a Google Ads Agency for Ecommerce
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The short version: look for someone who can talk fluently about
            your product feed and your conversion tracking, not just your
            keyword list. Google Ads for a Shopify store is a Merchant
            Center problem and a tracking problem as much as it&apos;s a
            bidding problem, and a lot of agencies that are genuinely good
            at lead-gen PPC have never had to deal with either.
          </p>
        </Reveal>
      </section>

      {/* WHY GENERIC PPC EXPERIENCE ISN'T ENOUGH */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why &quot;we do PPC&quot; isn&apos;t a useful filter</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Plenty of agencies run Google Ads well for lawyers, SaaS
            companies and local services. That doesn&apos;t automatically
            transfer to ecommerce. Lead-gen accounts optimize toward a form
            fill or a phone call, usually with a handful of high-value
            keywords and a sales team downstream to close the deal.
            Ecommerce accounts optimize toward a purchase, often across
            hundreds or thousands of SKUs, with Shopping and Performance
            Max campaigns doing most of the volume and Search filling in
            around them. The skills overlap, but the day-to-day work — feed
            hygiene, product-level bid strategy, seasonal inventory shifts —
            is different enough that &quot;we run Google Ads&quot; on its own
            tells you very little.
          </p>
        </Reveal>
      </section>

      {/* SEARCH VS SHOPPING/PMAX */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Search vs Shopping/PMax expertise</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              For most ecommerce stores, Shopping and Performance Max
              campaigns carry more of the spend and more of the revenue
              than standard text-based Search campaigns. Ask directly how
              they split budget and thinking between the two. An agency
              that only talks about keywords, match types and search terms
              is describing Search-campaign management — useful, but not
              the whole job. You want to hear them talk about product
              groups, priority tiers between Shopping and PMax to avoid
              cannibalization, and how they handle PMax&apos;s more limited
              visibility into what&apos;s actually driving results, since PMax
              deliberately gives advertisers less granular reporting than
              Search does.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MERCHANT CENTER / FEED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Merchant Center and feed competence</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Shopping and PMax campaigns run entirely on your product feed —
            titles, images, GTINs, categories, availability, price. A feed
            with disapproved items, mismatched pricing, or thin product data
            quietly caps how well those campaigns can perform, no matter how
            well the bidding is managed. A competent agency should be able
            to explain, without prompting, how they audit feed health, how
            they handle Merchant Center disapprovals and policy flags, and
            whether they touch product titles and structured data directly
            or leave that entirely to you. If nobody on the team has opened
            Merchant Center diagnostics before, that&apos;s worth knowing
            up front.
          </p>
        </Reveal>
      </section>

      {/* TRACKING + ENHANCED CONVERSIONS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion tracking and Enhanced Conversions</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Google&apos;s automated bidding is only as good as the
              conversion data it&apos;s optimizing against. Ask specifically
              whether they set up and maintain Enhanced Conversions —
              Google&apos;s method for matching conversions using hashed
              customer data when cookies alone fall short — and how they
              handle Consent Mode for EU and UK traffic. If your reported
              Google Ads conversions and your actual Shopify orders drift
              apart, an agency that understands tracking should be able to
              explain why, rather than just reporting the platform number
              at face value. This is also where the line between &quot;runs
              your ads&quot; and &quot;understands your tracking&quot; usually
              shows itself — plenty of agencies are fine at the first and
              weak at the second.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ATTRIBUTION LITERACY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution literacy</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Google Ads reports conversions using its own attribution model
            and its own view of the customer journey, which usually
            doesn&apos;t match what actually shipped in Shopify — some of that
            gap is normal and explainable, not a red flag on its own. What
            matters is whether the agency can talk about it honestly: how
            they reconcile Google Ads numbers against Shopify revenue, how
            they think about assisted conversions and cross-channel credit,
            and whether they treat platform-reported ROAS as gospel or as
            one input among several. An agency that can&apos;t explain why its
            own reported numbers don&apos;t match your order data is either
            new to ecommerce or hasn&apos;t looked closely.
          </p>
        </Reveal>
      </section>

      {/* OWNERSHIP, REPORTING, CONTRACTS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Account ownership, reporting, and contract terms</h2>
            <div className="text-white/60 leading-relaxed text-sm max-w-2xl space-y-4">
              <p>
                <strong className="text-white/80">Ownership.</strong> The
                Google Ads account, Merchant Center account, and any
                conversion tracking setup should be owned by you, with the
                agency added as a user. If an agency insists on building
                everything under their own manager account with no
                practical way for you to take it with you, that&apos;s a
                switching-cost tactic, not a technical requirement.
              </p>
              <p>
                <strong className="text-white/80">Reporting.</strong> Good
                reporting explains what changed and why, tied to your
                actual revenue — not a screenshot of the Google Ads
                dashboard with a green ROAS number circled. Ask to see a
                real (anonymized) example of a monthly report before you
                sign anything.
              </p>
              <p>
                <strong className="text-white/80">Contract terms.</strong>{" "}
                Understand the notice period, what happens to the account
                on termination, and whether fees are flat, percentage of
                spend, or performance-based. None of these structures is
                inherently wrong, but you should know which one you&apos;re
                signing before spend starts, not after.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RED FLAGS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Red flags worth taking seriously</h2>
          <ul className="text-white/60 leading-relaxed text-sm space-y-3 list-disc pl-5">
            <li>Guaranteed ROAS numbers before they&apos;ve seen your account, your margins, or your historical data.</li>
            <li>No mention of Merchant Center or the product feed anywhere in the pitch.</li>
            <li>Reluctance to give you admin-level access to your own ad accounts.</li>
            <li>Reporting that only shows platform metrics, never reconciled against your Shopify revenue.</li>
            <li>A generic proposal that could apply to any client, with your store name swapped in.</li>
          </ul>
        </Reveal>
      </section>

      {/* THE META COMPANION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">If you&apos;re also evaluating Meta</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Most of this reasoning applies to Meta Ads too, but the
              specifics differ — Meta doesn&apos;t have a Merchant Center
              equivalent in the same sense, and its tracking questions
              center on the Pixel and Conversions API rather than
              Enhanced Conversions. If you&apos;re hiring for both channels,
              or trying to decide which one to prioritize first, see{" "}
              <Link href="/resources/how-to-choose-a-meta-ads-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                how to choose a Meta Ads agency
              </Link>{" "}
              as the companion piece to this one, and{" "}
              <Link href="/resources/meta-ads-vs-google-ads-shopify-budget" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                where to put your budget between the two
              </Link>{" "}
              if you haven&apos;t decided yet.
            </p>
          </Reveal>
        </div>
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
              <Link href="/resources/how-to-choose-a-meta-ads-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to choose a Meta Ads agency
              </Link>
            </li>
            <li>
              <Link href="/resources/what-does-a-google-ads-agency-do" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What does a Google Ads agency actually do
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Google Ads revenue doesn&apos;t match Shopify
              </Link>
            </li>
            <li>
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution explained
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want us to run this evaluation for you?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you&apos;d rather skip the vetting process, we manage Google
            Ads and Shopping/PMax for Shopify stores directly, with
            tracking reconciled against real Shopify revenue rather than
            platform-reported numbers.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
