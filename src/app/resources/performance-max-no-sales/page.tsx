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
    q: "How long should a new PMax campaign run before I judge it broken?",
    a: "Google generally describes a one to two week learning period during which performance is expected to be erratic. That's a reason to hold off on structural changes for the first week or so, not a reason to ignore zero sales. If tracking, feed and landing pages all check out and two full weeks pass with adequate budget and still no purchases, something is actually wrong.",
  },
  {
    q: "Why does my Purchase conversion action show 'no recent conversions'?",
    a: "That status means Google Ads hasn't recorded a conversion through that action recently, regardless of how much traffic or spend the campaign has. It usually means the tag isn't firing, is firing in a state Google can't attribute back to a click, or the conversion action itself is misconfigured, not that customers aren't buying.",
  },
  {
    q: "Can Performance Max convert if only some of my products are approved in Merchant Center?",
    a: "Yes, but only the approved subset is eligible to show at all. If your bestsellers happen to be the disapproved ones, PMax is spending budget promoting a catalog that doesn't include the products most likely to convert.",
  },
  {
    q: "Does raising the budget fix a PMax campaign with no sales?",
    a: "Not on its own. More budget gives the algorithm more auctions to learn from, which can help once tracking, feed and landing pages are sound. Raising budget on top of a tracking gap or a broken landing page just spends more money to reach the same result.",
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
  headline: "Performance Max Spending Money but Getting No Sales",
  description:
    "The diagnostic order for a Performance Max campaign that's spending with no purchases: tracking first, then goal setup, feed health, landing pages, price, budget and audience signals.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/performance-max-no-sales" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Performance Max No Sales", item: "https://www.attribix.app/resources/performance-max-no-sales" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Performance Max No Sales" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Performance Max spending money but getting no sales
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Work the causes in order rather than jumping straight to feed or
            creative changes: first confirm Google Ads can actually see your
            Shopify purchases, then check the conversion goal, Merchant
            Center feed health, landing pages, pricing, budget realism, and
            audience signals. Performance Max is heavily automated, and it
            optimizes only against the conversion signal it&apos;s given, so
            a tracking gap looks identical to &ldquo;the campaign
            doesn&apos;t work.&rdquo; Most PMax accounts that look broken are
            actually just blind, and the diagnostics and channel-level
            reporting Google now exposes (covered in{" "}
            <Link href="/resources/how-to-see-what-performance-max-is-doing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how to tell what Performance Max is actually doing
            </Link>
            ) usually get you further than the &ldquo;black box&rdquo;
            reputation suggests.
          </p>
        </Reveal>
      </section>

      {/* TRACKING FIRST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why tracking comes before anything else</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              PMax bids across Search, Display, YouTube, Discover, Gmail and
              Maps inventory in a single campaign, deciding in real time
              where to spend based on one thing: the conversion signal
              reported back to it. If your Purchase conversion action isn&apos;t
              firing reliably, is firing with a $0 or incorrect value, or is
              being double-counted, PMax isn&apos;t underperforming. It&apos;s
              optimizing against a number that doesn&apos;t reflect what&apos;s
              actually happening on your store.
            </p>
            <p>
              Check this before touching anything else. In Google Ads, open{" "}
              <strong className="text-white/80">Goals → Conversions</strong>{" "}
              and look at your Purchase action&apos;s recent status. A
              &ldquo;no recent conversions&rdquo; flag, or a conversion count
              that doesn&apos;t come close to matching real Shopify orders
              for the same date range, points at a tracking problem, not a
              demand problem. Full detail on how this breaks on Shopify
              specifically is in{" "}
              <Link href="/resources/google-ads-not-tracking-shopify-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                why Google Ads isn&apos;t tracking Shopify purchases
              </Link>{" "}
              and{" "}
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
              .
            </p>
            <p>
              Attribix compares Google Ads&apos; reported conversions against
              actual Shopify orders side by side, which is the fastest way to
              catch a tracking gap without manually cross-referencing two
              dashboards for the same week.
            </p>
          </div>
        </Reveal>
      </section>

      {/* GOAL / CONVERSION ACTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Confirm the campaign is optimizing for the right goal</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Once tracking checks out, confirm PMax is actually targeting
              purchases. A campaign can technically be &ldquo;converting&rdquo;
              while producing no sales if its primary conversion action is
              set to something like Add to Cart or a micro-conversion instead
              of Purchase, or if the account&apos;s conversion goal is shared
              across campaigns in a way that pulls optimization toward a
              different action than the one you think it&apos;s chasing. Check
              the campaign-level goal settings and confirm Purchase is the
              conversion action actually driving bids, not just present
              somewhere in the account.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEED HEALTH */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Merchant Center feed health</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            PMax pulls its product listings straight from your Merchant
            Center feed. A disapproved product simply doesn&apos;t run: it&apos;s
            excluded from the auction entirely, not shown with a warning
            label. If a meaningful share of your catalog is disapproved, the
            campaign is spending against a shrunken version of your store
            without telling you that&apos;s what happened. Open Products →
            Needs attention in Merchant Center and check your item-level
            issues and disapproval rate before assuming the campaign itself
            is the problem. The common causes and how to read them are
            covered in{" "}
            <Link href="/resources/google-merchant-center-product-disapproved" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Google Merchant Center product disapprovals
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* LANDING PAGES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Landing pages that don&apos;t match what&apos;s shown</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A click that lands on a 404, a redirected collection page, an
              out-of-stock variant with no clear alternative, or a checkout
              with unexpected friction converts at a fraction of what it
              should regardless of how well-targeted the click was. Spot
              check landing pages for the products actually driving
              impressions, not just your homepage or bestsellers, since
              PMax will show whichever products in the feed match demand,
              and those aren&apos;t always the ones your team checks most
              often.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRICE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Price competitiveness</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Merchant Center&apos;s price competitiveness report shows how your
            listed prices compare with other retailers advertising similar
            products. A campaign can generate plenty of impressions and
            clicks on a fairly matched, well-tracked, well-built product page
            and still convert poorly if the price is meaningfully above what
            shoppers are seeing elsewhere in the same results. Shopping and
            PMax surface price directly, so this comparison happens before
            the customer ever reaches your site.
          </p>
        </Reveal>
      </section>

      {/* BUDGET / BIDDING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Budget and bidding target realism</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Two opposite budget problems both produce &ldquo;no
                sales.&rdquo; A Target ROAS set well above what your account
                or category has historically supported restricts PMax to
                only the small slice of auctions it&apos;s confident will hit
                that target, which for a new campaign with little history
                can mean almost no spend gets through at all. On the other
                end, a budget too small to generate enough conversion volume
                gives the algorithm too little signal to optimize with,
                stretching out the learning period indefinitely rather than
                letting it exit.
              </p>
              <p>
                If a Maximize Conversion Value strategy with a Target ROAS
                isn&apos;t producing sales, try removing the target
                temporarily to see whether spend and conversions pick up:
                that isolates whether the target itself is the constraint.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AUDIENCE SIGNALS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Audience signals quality</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Audience signals (customer lists, custom segments, interest
            categories) don&apos;t restrict who PMax can show ads to, but
            they give the algorithm a starting point during the early phase
            when it has little else to go on. A campaign launched with no
            audience signals at all typically takes longer to find its
            footing than one seeded with a customer list or a relevant
            in-market or custom segment, simply because there&apos;s less for
            the system to anchor its early guesses to.
          </p>
        </Reveal>
      </section>

      {/* LEARNING PERIOD */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The learning period is real, but it&apos;s not a blank check</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Google generally describes a one to two week learning window
              where PMax is exploring inventory and performance can be
              erratic. That&apos;s a legitimate reason to avoid major
              structural changes in the first week. It isn&apos;t a reason to
              wave off zero purchases for a month while spend keeps going
              out. If tracking is confirmed correct, the feed is clean,
              landing pages work, price is competitive, and budget is
              reasonable, and you&apos;re still at zero sales after a full two
              weeks, that&apos;s a real problem worth escalating, not
              something to keep waiting out.
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
              <Link href="/resources/google-ads-not-tracking-shopify-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads not tracking Shopify purchases
              </Link>
            </li>
            <li>
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/google-merchant-center-product-disapproved" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Merchant Center product disapprovals explained
              </Link>
            </li>
            <li>
              <Link href="/resources/performance-max-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Performance Max ROAS suddenly dropped
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Get your Performance Max account diagnosed</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            We&apos;ll check tracking, feed health, and account setup against
            your actual Shopify orders before recommending a single change.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
