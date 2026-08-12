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
    q: "Why do Meta and Google both show revenue for the same order?",
    a: "Because each platform runs its own attribution model on the same pool of customer journeys. If a shopper crossed paths with both a Meta ad and a Google ad before buying, both models can reasonably credit themselves. Neither is aware of what the other platform saw.",
  },
  {
    q: "Should I just add Meta's and Google's reported revenue together to see total ad-driven sales?",
    a: "No. Any order both platforms touched gets counted twice in that sum, so the total will overstate what advertising actually produced. Shopify's total revenue is the only number that isn't inflated by overlap.",
  },
  {
    q: "Is this a tracking bug I should try to fix?",
    a: "No, it's how independent, platform-siloed attribution is built to work. There's no setting that makes Meta aware of Google's conversions or vice versa. The fix is in how you read the numbers, not in the tracking setup.",
  },
  {
    q: "Does turning off view-through attribution solve the overlap?",
    a: "It reduces it somewhat, since view-through credit is one of the bigger contributors to inflated counts. It doesn't eliminate the overlap, because click-based journeys that touch both platforms still get double-claimed.",
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
  headline: "Why Meta and Google Both Claim the Same Shopify Sale",
  description:
    "How overlapping attribution windows and view-through credit let Meta and Google both report revenue for the same Shopify order, and why the fix is Shopify revenue as ground truth, not summing platform numbers.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/ad-platforms-report-more-revenue-than-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Ad platforms report more revenue than Shopify", item: "https://www.attribix.app/resources/ad-platforms-report-more-revenue-than-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Ad platforms vs Shopify revenue" }]} />
          <Eyebrow>Attribution &amp; Measurement</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Meta and Google both claim the same Shopify sale
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Meta and Google can both report a purchase as theirs, for the
            same order, at the same time, because each platform&apos;s
            attribution model only ever looks at itself. Add their reported
            revenue together and you&apos;re not measuring total ad-driven
            sales, you&apos;re counting some orders twice.
          </p>
        </Reveal>
      </section>

      {/* THE MECHANIC */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A week where the math doesn&apos;t add up</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Say Shopify records 100 real orders in a week. Pull up Meta Ads
            Manager for the same week and it reports 70 attributed
            purchases. Pull up Google Ads and it reports 55 attributed
            purchases. Add those together and you get 125: twenty-five more
            purchases than actually happened. This is a hypothetical example
            to illustrate the mechanic, not a claim about typical overlap on
            any real account; the actual split depends entirely on how much
            your customers cross paths with both platforms before buying.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Nobody double-charged a customer and nobody duplicated an order
            in Shopify. What happened is that some number of those 100 real
            orders (the ones where a shopper saw or clicked a Meta ad{" "}
            <em>and</em> a Google ad before buying) got counted by both
            platforms independently. Each platform&apos;s number is
            internally consistent. Adding them together is where the count
            breaks.
          </p>
        </Reveal>
      </section>

      {/* WHY IT HAPPENS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why both platforms can honestly claim the same order</h2>
            <div className="mt-2 space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                <strong className="text-white/85">Overlapping attribution windows.</strong>{" "}
                Meta and Google each apply their own lookback window (commonly
                something like a week for clicks and a day for views on Meta,
                a comparable range on Google) to decide whether a purchase
                counts. Those windows aren&apos;t coordinated with each
                other. A purchase that falls inside both platforms&apos;
                windows is fair game for both.
              </p>
              <p>
                <strong className="text-white/85">Both platforms crediting the same journey.</strong>{" "}
                A shopper sees a Meta ad on Instagram, doesn&apos;t click,
                searches the brand name on Google two days later, clicks a
                Google ad, and buys. Meta&apos;s model can credit the
                impression it served. Google&apos;s model can credit the
                click that immediately preceded the order. Both are
                describing something real about that journey. Neither is
                lying, but only one order happened.
              </p>
              <p>
                <strong className="text-white/85">View-through credit inflating the count.</strong>{" "}
                An impression the customer never clicked can still earn
                attribution credit on both platforms if a purchase follows
                within the view-through window. Impressions are cheap and
                plentiful compared to clicks, so this is usually the single
                biggest driver of a platform&apos;s reported number running
                ahead of what click activity alone would explain. We cover
                this in more depth in{" "}
                <Link href="/resources/view-through-conversions-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  view-through conversions explained
                </Link>
                .
              </p>
              <p>
                <strong className="text-white/85">Assisted-journey overlap.</strong>{" "}
                Multi-touch journeys are the norm, not the exception, for
                anything beyond an impulse purchase. The more touchpoints a
                purchase has, the more platforms have a plausible claim to
                it, and every platform&apos;s attribution model is built to
                take credit for the touchpoints it can see, not to defer to
                whichever channel actually mattered most.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NORMAL, NOT A BUG */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">This is normal platform behavior, not a bug</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            It&apos;s tempting to read a 125-order combined claim against 100
            real orders as something broken: a tracking error, a
            duplicate-event problem, a misconfiguration worth chasing down.
            Usually it isn&apos;t. Meta&apos;s attribution model was never
            designed to know what Google saw, and Google&apos;s wasn&apos;t
            designed to know what Meta saw. Each platform is reporting an
            honest answer to a narrow question: &ldquo;how much revenue can
            I defensibly attribute to my own ads, using only what I can
            observe?&rdquo; Neither platform is incentivized to net
            out the other&apos;s claim. The overlap is a structural feature
            of siloed, platform-level attribution, not evidence that
            either number is wrong on its own terms.
          </p>
        </Reveal>
      </section>

      {/* THE FIX */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The fix isn&apos;t adding the platforms together</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If summing Meta and Google&apos;s reported revenue overstates
              reality, the obvious next move (subtracting some estimated
              overlap percentage from the sum) just replaces one guess with
              another. The more reliable approach is to stop treating
              platform-reported revenue as something that should sum to a
              meaningful total in the first place.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Shopify&apos;s actual revenue for the period is ground truth:
              it&apos;s a record of what was purchased, not a model of what
              probably caused it. Compare that single number against total
              ad spend across every channel and you get a blended
              efficiency figure that can&apos;t be inflated by cross-platform
              double-claiming, because it never asks either platform to
              self-report in the first place. We walk through how blended
              ROAS and MER are calculated, and where each is the right tool,
              on{" "}
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>{" "}
              and{" "}
              <Link href="/resources/mer-vs-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                MER vs ROAS for Shopify
              </Link>
              .
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Platform-reported ROAS still has a job to do: comparing this
              week&apos;s Meta number to last week&apos;s Meta number is a
              reasonable way to judge whether a campaign is trending better
              or worse, because the same model bias applies consistently
              across both weeks. What it can&apos;t do is tell you total
              ad-driven revenue once you&apos;re running more than one
              platform, and it shouldn&apos;t be asked to.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT TO ACTUALLY MONITOR */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What&apos;s actually worth watching</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A combined platform claim of 125% of real orders isn&apos;t
            itself a red flag. The useful question is whether that ratio
            holds roughly steady from week to week. If Meta plus Google
            usually runs around 20&ndash;30% over Shopify&apos;s actual
            order count and one week it jumps to 60% over, something
            changed: an attribution window got widened, a new campaign is
            leaning heavily on view-through-eligible placements, or a
            duplicate-event issue is inflating one platform&apos;s count on
            its own. Chasing an exact match between the platforms and
            Shopify isn&apos;t realistic by design; watching the gap for
            sudden movement is.
          </p>
        </Reveal>
      </section>

      {/* PRODUCT MENTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4">Where Attribix fits</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Attribix pulls Meta and Google&apos;s reported numbers
              alongside actual Shopify orders and calculates blended ROAS
              from the Shopify total, so the gap between what each platform
              claims and what the store actually made is something you can
              see directly instead of reconciling by hand. See how it
              connects orders to campaigns on{" "}
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution
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
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
            <li>
              <Link href="/resources/mer-vs-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                MER vs ROAS for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta Ads show different sales numbers
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-attribution-window-roas" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why changing your Meta attribution window changes your ROAS
              </Link>
            </li>
            <li>
              <Link href="/resources/view-through-conversions-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                View-through conversions: should you count them?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want this checked on your own account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send an inquiry and we&apos;ll look at how much Meta and Google&apos;s
            reported revenue actually overlaps on your store, and what your
            real blended efficiency looks like.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
