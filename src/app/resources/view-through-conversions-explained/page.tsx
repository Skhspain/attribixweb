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
    q: "What is a view-through conversion?",
    a: "A purchase (or other conversion) credited to an ad the customer saw on screen but didn't click, based on them buying within a set window afterward. It's built into Meta's and Google's display and video attribution, not a third-party add-on.",
  },
  {
    q: "Should I turn off view-through attribution entirely?",
    a: "Not necessarily. That swings to the opposite extreme of assuming impressions never influence anyone, which isn't defensible either. The point of this article is that neither extreme is automatically right; look at your own view-through volume and consideration cycle before deciding.",
  },
  {
    q: "Does a high view-through conversion count mean my ads are working?",
    a: "It means a lot of purchases happened after an impression within the attribution window. It doesn't by itself mean the impression caused those purchases: some of that volume is very likely people who would have bought anyway and simply also saw an ad.",
  },
  {
    q: "How is view-through different from click-through attribution?",
    a: "Click-through requires an actual click before the purchase, a more direct, verifiable interaction. View-through only requires that an ad was served and the person later converted, with no interaction in between. Click-through is the more defensible half of most platforms' reported numbers.",
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
  headline: "View-Through Conversions: Should You Count Them?",
  description:
    "The case for and against counting view-through conversions across Meta and Google, and a framework for deciding based on your own attribution data.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/view-through-conversions-explained" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "View-through conversions", item: "https://www.attribix.app/resources/view-through-conversions-explained" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "View-through conversions" }]} />
          <Eyebrow>Attribution &amp; Measurement</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            View-through conversions: should you count them?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There isn&apos;t a single correct answer. A view-through
            conversion is a purchase credited to an ad someone saw but never
            clicked, and whether that credit is meaningful depends on your
            product, your volume of impressions, and how much you trust the
            assumption behind it. Here&apos;s both sides, and a way to decide
            using your own numbers instead of a rule of thumb.
          </p>
        </Reveal>
      </section>

      {/* WHAT IT IS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What a view-through conversion actually is</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            An ad is served to someone&apos;s screen. They don&apos;t click
            it, don&apos;t interact with it at all, maybe they scrolled past
            it in a feed, maybe it played as a pre-roll video they skipped
            after a few seconds. Some time later, within a defined window,
            that same person makes a purchase. The platform that served the
            impression credits itself with the conversion, on the theory
            that seeing the ad played some role in the eventual purchase.
            This applies across Meta&apos;s feed and Reels placements, and
            across Google&apos;s Display Network and video inventory: the
            mechanic is the same wherever an ad can be served without
            requiring a click.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Click-through attribution, by contrast, requires an actual
            click before the purchase. That&apos;s a real, logged
            interaction: the customer did something. View-through has no
            equivalent action to point to. The entire claim rests on
            proximity in time between an impression and a purchase.
          </p>
        </Reveal>
      </section>

      {/* THE CASE FOR */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The case for counting it</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Not every real purchase is preceded by a click, and treating
              clicks as the only legitimate signal of ad influence ignores a
              genuine pattern in how people actually shop. Someone scrolls
              past a product ad, doesn&apos;t click because they&apos;re
              mid-commute or mid-meeting, remembers it that evening, and
              types the brand name directly into a search bar or their
              browser. No click was ever logged against the original ad,
              but the ad plausibly did the work of introducing the product.
              A measurement system that only ever credits clicks will
              systematically undercount awareness-stage advertising
              (video, Reels, Display placements) that&apos;s doing exactly
              what it&apos;s supposed to do: get someone thinking about a
              product they&apos;d otherwise never have searched for.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE CASE AGAINST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The case against, or at least for skepticism</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Impressions are cheap and abundant in a way clicks aren&apos;t.
            A single campaign can serve an ad to the same broad audience
            dozens of times over a week for a fraction of what a click
            costs, which means almost any active shopper in your
            addressable audience has a reasonable chance of having &ldquo;seen
            an ad&rdquo; shortly before buying, whether or not that ad had
            anything to do with the decision. If someone was already going
            to search for your brand and buy, an impression that happened
            to land in front of them beforehand isn&apos;t evidence it
            caused the sale. It&apos;s closer to correlation dressed up as
            causation.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            No platform can prove counterfactual incrementality (what
            would have happened without the ad) from view data alone.
            Meta and Google both know whether an impression was served and
            whether a purchase followed. Neither knows what that same
            person would have done if the impression had never been shown,
            because there&apos;s no unexposed version of that specific
            person to compare against. The view-through number is a
            plausible story, not a measured causal effect.
          </p>
        </Reveal>
      </section>

      {/* WHY IT INFLATES REPORTED PERFORMANCE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why this shows up as inflated ROAS, not just a philosophical debate</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              This isn&apos;t only an abstract measurement question. It
              shows up directly in reported ROAS. Because view-through
              credit only ever adds purchases to a campaign&apos;s
              attributed total and never subtracts any, it&apos;s one of
              the largest single levers behind a platform reporting more
              revenue than the campaign plausibly drove. It also
              contributes to the broader pattern where Meta and Google both
              claim the same Shopify order and their combined reported
              revenue overstates what the store actually made, see{" "}
              <Link href="/resources/ad-platforms-report-more-revenue-than-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                why Meta and Google both claim the same Shopify sale
              </Link>
              . It&apos;s also a big part of why widening an attribution
              window setting can raise reported ROAS without the campaign
              itself changing at all, covered in{" "}
              <Link href="/resources/meta-attribution-window-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                why changing your Meta attribution window changes your ROAS
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A framework for deciding with your own numbers</h2>
          <div className="mt-2 space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              <strong className="text-white/85">Look at the split, not just the total.</strong>{" "}
              Break reported conversions into click-through and view-through
              separately, most platforms let you view this. If view-through
              is a small share of total attributed conversions, the debate
              barely matters to your numbers either way. If it&apos;s a
              large share, it&apos;s worth scrutinizing before you trust the
              headline ROAS figure.
            </p>
            <p>
              <strong className="text-white/85">Consider your consideration cycle.</strong>{" "}
              A cheap, impulse product has less room for a delayed,
              unclicked purchase to plausibly trace back to a specific
              impression, so the case for view-through credit is weaker.
              A higher-consideration purchase, where people research before
              buying, has more genuine room for an impression to do real
              work days before the purchase, so the case is stronger, though
              still not proof.
            </p>
            <p>
              <strong className="text-white/85">Watch what happens when you exclude it.</strong>{" "}
              Recalculate ROAS using click-through data only, and compare it
              against your blended, Shopify-revenue-based efficiency number.
              If click-only ROAS is already healthy, view-through credit is
              icing, not the thing holding the campaign&apos;s case
              together. If a campaign only looks profitable once
              view-through is included, treat that as a reason to test
              further, not as confirmation the campaign works.
            </p>
            <p>
              <strong className="text-white/85">Use it for direction, not for individual campaign verdicts.</strong>{" "}
              Tracking whether view-through volume is trending up or down
              over time can be a reasonable proxy for changing awareness,
              but making a scale-or-kill decision on a specific campaign
              based mostly on view-through credit is building a decision on
              the least verifiable part of the data you have.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PRODUCT MENTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4">Where Attribix fits</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Attribix ties reported conversions back to actual Shopify
              orders, so you can see how much of a campaign&apos;s
              attributed revenue depends on view-through credit versus
              orders with a real click or server-recorded event behind
              them. See how that connection works on{" "}
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution
              </Link>{" "}
              and{" "}
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
              .
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
              <Link href="/resources/meta-attribution-window-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why changing your Meta attribution window changes your ROAS
              </Link>
            </li>
            <li>
              <Link href="/resources/ad-platforms-report-more-revenue-than-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Meta and Google both claim the same Shopify sale
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta Ads show different sales numbers
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-attribution-models" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution models explained
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want your view-through share checked?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send an inquiry and we&apos;ll break down how much of your
            reported conversions come from view-through credit versus
            clicks, on your actual account.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
