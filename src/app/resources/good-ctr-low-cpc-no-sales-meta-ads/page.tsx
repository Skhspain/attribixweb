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
    q: "Should I pause an ad with good CTR that isn't converting?",
    a: "Not immediately. First check landing page views against clicks, and add-to-cart against landing page views, to see whether the issue is the traffic quality or something further down the funnel. If the traffic genuinely isn't reaching the product page with intent, that's when the creative itself needs to change.",
  },
  {
    q: "Is a high CTR ever a bad sign on its own?",
    a: "It can be, if it's paired with a low click-to-landing-page-view ratio or very low time-on-page after landing. That combination often means the creative is generating attention for reasons unrelated to the product: curiosity, novelty, or a hook that doesn't connect to what's actually being sold.",
  },
  {
    q: "What's the difference between an outbound click and a landing page view?",
    a: "An outbound click is counted the moment someone taps the ad, before the destination page has necessarily loaded. A landing page view requires the page to actually load in the browser. A gap between the two (more outbound clicks than landing page views) usually points at slow load times, but can also reflect people tapping and immediately backing out.",
  },
  {
    q: "Does lowering CPC always mean better performance?",
    a: "No. A low CPC paired with no sales can mean you're winning cheap clicks from a broad or curiosity-driven audience rather than efficient clicks from people likely to buy. Cost per purchase is the number that matters: CPC on its own only tells you what a click cost, not what it was worth.",
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
  headline: "Good CTR and Low CPC but No Sales on Meta Ads: What's Wrong?",
  description:
    "Attractive top-funnel metrics don't guarantee buyers. Why CTR measures the ad, not the customer, and how to tell curiosity clicks from buying intent.",
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
    "@id": "https://www.attribix.app/resources/good-ctr-low-cpc-no-sales-meta-ads",
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
      name: "Good CTR, Low CPC, No Sales",
      item: "https://www.attribix.app/resources/good-ctr-low-cpc-no-sales-meta-ads",
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
              { label: "Good CTR, No Sales" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Good CTR and Low CPC but No Sales on Meta Ads: What&apos;s Wrong?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            CTR measures whether the ad got someone to click. It says nothing
            about whether that person wanted to buy anything. A campaign can
            post a great CTR and a cheap CPC while pulling in traffic that
            was never going to convert, and those two things can be true at
            the same time without contradicting each other.
          </p>
        </Reveal>
      </section>

      {/* CTR MEASURES THE AD NOT THE BUYER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">CTR measures the ad, not the buyer</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Click-through rate is a ratio of impressions to clicks. It
            answers one narrow question: did this creative catch enough
            attention to make someone tap it, and nothing else. It doesn&apos;t
            know whether the person clicking is in the market for what
            you&apos;re selling, whether they mistook the ad for something
            else, or whether they clicked reflexively and forgot about it
            thirty seconds later. A strong CTR is a real signal that the
            creative is doing its narrow job well. It was never a signal
            about the people behind the clicks.
          </p>
        </Reveal>
      </section>

      {/* CURIOSITY VS BUYING INTENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Curiosity clicks vs. buying-intent clicks</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Not every click carries the same intent behind it. A visually
              striking hook, a surprising claim, or an unusual product shot
              can pull in clicks from people who are curious about the ad
              itself rather than looking to buy the product it&apos;s
              advertising. Those clicks are cheap and plentiful, and they
              inflate CTR while doing almost nothing for sales. A more
              literal, product-forward ad often earns a lower CTR from a
              smaller pool of people, but a higher share of that smaller
              pool actually wants the product.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CLICKBAIT CREATIVE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When the creative is doing too much of the selling</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Creative that leans hard on a hook (a bold claim, a satisfying
            visual, a pattern interrupt) can outperform the product it&apos;s
            attached to. If the landing page can&apos;t deliver on whatever
            made the ad compelling, the click was essentially borrowed
            against a promise the page doesn&apos;t keep. This shows up as a
            healthy CTR and a landing page bounce rate that doesn&apos;t
            match it. The fix usually isn&apos;t a better landing page.
            It&apos;s creative that sets an expectation the product can
            actually meet.
          </p>
        </Reveal>
      </section>

      {/* OUTBOUND CLICKS VS LPV */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Outbound clicks aren&apos;t the same as landing page views</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Meta counts an outbound click the instant someone taps the ad,
              before the destination page has loaded, and sometimes before
              they&apos;ve committed to actually visiting it. Landing page
              views only count once the page has loaded in the browser. If
              outbound clicks are noticeably higher than landing page views,
              part of that reported CTR reflects taps that never turned into
              a real visit at all: slow load times, accidental taps, or
              people who tapped and backed out of the app before the page
              rendered.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ENGAGEMENT BAIT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Engagement bait pulls the wrong audience</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Ads built to spark comments, shares, or reactions (a
            controversial hook, a poll-style caption, an intentionally
            confusing image) can perform well on engagement metrics and
            CTR while training Meta&apos;s delivery toward people who engage
            with attention-grabbing content in general, not people who buy
            products in your category specifically. Over time, that can
            actually steer future delivery toward a lower-intent audience,
            since the algorithm optimizes for whatever signal it&apos;s been
            given the most of.
          </p>
        </Reveal>
      </section>

      {/* WHERE TO GO NEXT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">If you need the fuller diagnosis</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              This article covers why attractive top-funnel numbers can
              mislead you about buying intent specifically. If you need to
              walk the whole path from click to purchase and find exactly
              where the drop happens (landing page, offer, cart, checkout,
              or tracking), see{" "}
              <Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                our full funnel diagnosis for clicks without sales
              </Link>
              , which goes stage by stage through the rest of the funnel.
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
              <Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads getting clicks but no sales: full funnel diagnosis
              </Link>
            </li>
            <li>
              <Link href="/resources/why-is-meta-ads-cpm-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why is my Meta Ads CPM so high?
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads clicks but no sales
              </Link>
            </li>
            <li>
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution
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
            send us an inquiry. We can review the setup and help determine
            whether it&apos;s advertising performance, your website,
            tracking, or attribution.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
