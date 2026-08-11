"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";
import DiagramFrame from "@/components/marketing/DiagramFrame";

const FAQ_ITEMS = [
  {
    q: "How long should I wait before assuming clicks genuinely aren't converting?",
    a: "Long enough to cover a stable sample of orders, not a day or two of noise. A Performance Max campaign in particular needs time out of its learning phase before its traffic quality is representative. Look at a rolling two-to-four week window rather than reacting to a single bad day.",
  },
  {
    q: "Is Performance Max more likely to cause this than Search?",
    a: "Not inherently, but PMax pulls inventory from placements — YouTube, Display, Discover — that a keyword-only Search campaign never touches, and those placements tend to carry lower purchase intent per click. That's not a flaw in PMax, it's just a different mix of traffic that needs judging on its own terms.",
  },
  {
    q: "Could this just be normal attribution lag rather than a real problem?",
    a: "Possibly. Google Ads logs a conversion when its tag fires and attributes it back to a click within its own window and model, which rarely lines up day-for-day with Shopify's order timestamps. Compare totals over a stable period before concluding anything is actually broken.",
  },
  {
    q: "What if Shopify shows zero orders from any channel, not just Google?",
    a: "That points away from Google Ads entirely and toward something site-wide — a broken checkout step, a payment gateway issue, or a theme change that affects every visitor regardless of where they came from. Worth ruling out before spending more time on campaign-level diagnosis.",
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
  headline: "Google Ads Getting Clicks But No Sales? What to Check First",
  description: "How to tell a real demand problem apart from a Google Ads tracking gap, and the diagnostic order to work through either one.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-clicks-no-sales" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Clicks but no sales", item: "https://www.attribix.app/resources/google-ads-clicks-no-sales" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Clicks but no sales" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads getting clicks but no sales? What to check first
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Clicks with no resulting Shopify orders come from one of two
            different places: the traffic genuinely isn&apos;t converting once it
            lands, or it is converting and Google Ads just isn&apos;t reporting
            it. Confusing the two wastes time — you end up rewriting ad copy
            when the real problem is a broken purchase tag, or chasing a
            tracking fix when nobody wants what&apos;s on the landing page at
            that price. A five-minute check in Shopify tells you which one
            you&apos;re dealing with before you touch anything else.
          </p>
        </Reveal>
      </section>

      {/* CHECK SHOPIFY FIRST */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check Shopify before you touch the campaign</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              Pull Shopify&apos;s own sessions and orders data for the same date
              range you&apos;re looking at in Google Ads, filtered to sessions
              sourced from google / cpc. Then compare that order count against
              the Conversions column in Google Ads for the matching campaigns.
              Two outcomes are possible, and they point in opposite
              directions:
            </p>
            <p>
              If Shopify shows real orders attributed to Google traffic but
              Google Ads&apos; own conversion count is near zero for the same
              period, that&apos;s a tracking problem, not a demand problem — the
              sales are happening and Google simply isn&apos;t seeing them. Skip
              ahead to the tracking diagnosis below.
            </p>
            <p>
              If Shopify shows little or no revenue attributable to Google
              traffic at all — not just a low Google Ads number, but no
              orders showing up from that source anywhere in Shopify either —
              that&apos;s a real demand or landing problem, and the checklist
              further down is where to spend your time.
            </p>
            <p>
              Compare over a stable multi-week window rather than a single
              day. Google Ads attributes a conversion to a click within its
              own window and model, which rarely lines up day-for-day with
              Shopify&apos;s order timestamps — a topic covered in more depth in{" "}
              <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                why Google Ads and Shopify revenue don&apos;t match
              </Link>
              . That kind of gap is normal noise. Zero or near-zero for weeks
              running is not.
            </p>
          </div>

          <div className="mt-8">
            <DiagramFrame caption="Two very different problems, two very different fixes.">
              <svg viewBox="0 0 620 210" className="w-full h-auto" role="img" aria-label="Diagram showing a Google Ads click branching into two outcomes: an order that exists in Shopify but wasn't reported by Google Ads (a tracking problem), or no order anywhere (a demand problem).">
                <rect x="10" y="75" width="140" height="56" rx="12" className="fill-white/5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <text x="80" y="99" textAnchor="middle" className="fill-white text-[13px] font-semibold">Google Ads</text>
                <text x="80" y="117" textAnchor="middle" className="fill-white/60 text-[11px]">click</text>

                <line x1="150" y1="90" x2="230" y2="40" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <line x1="150" y1="115" x2="230" y2="165" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />

                <rect x="230" y="10" width="180" height="60" rx="12" className="fill-emerald-400/10" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
                <text x="320" y="34" textAnchor="middle" className="fill-white text-[12px] font-semibold">Order exists in Shopify,</text>
                <text x="320" y="50" textAnchor="middle" className="fill-white text-[12px] font-semibold">not in Google Ads</text>
                <text x="320" y="66" textAnchor="middle" className="fill-cyan-300 text-[11px]">= tracking problem</text>

                <rect x="230" y="135" width="180" height="60" rx="12" className="fill-white/5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <text x="320" y="159" textAnchor="middle" className="fill-white text-[12px] font-semibold">No order anywhere</text>
                <text x="320" y="175" textAnchor="middle" className="fill-white/60 text-[11px]">for that traffic</text>
                <text x="320" y="191" textAnchor="middle" className="fill-white/45 text-[11px]">= demand / landing problem</text>

                <line x1="410" y1="40" x2="470" y2="40" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                <line x1="410" y1="165" x2="470" y2="165" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" markerEnd="url(#arrow2)" />

                <rect x="470" y="10" width="140" height="60" rx="12" className="fill-white/5" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
                <text x="540" y="36" textAnchor="middle" className="fill-white text-[11px] font-semibold">Fix the tag,</text>
                <text x="540" y="52" textAnchor="middle" className="fill-white text-[11px] font-semibold">not the campaign</text>

                <rect x="470" y="135" width="140" height="60" rx="12" className="fill-white/5" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
                <text x="540" y="161" textAnchor="middle" className="fill-white text-[11px] font-semibold">Fix the traffic</text>
                <text x="540" y="177" textAnchor="middle" className="fill-white text-[11px] font-semibold">or the offer</text>

                <defs>
                  <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="rgba(255,255,255,0.4)" />
                  </marker>
                </defs>
              </svg>
            </DiagramFrame>
          </div>
        </Reveal>
      </section>

      {/* ATTRIBIX MENTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              That Shopify-vs-Google-Ads comparison is exactly the gap Attribix
              is built to close — it connects your Shopify orders to your
              Google Ads account so the two numbers sit next to each other
              instead of living in separate dashboards that never talk to
              each other. See how the tracking side of this works on the{" "}
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>{" "}
              page.
            </p>
          </Reveal>
        </div>
      </section>

      {/* IF REAL DEMAND PROBLEM */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">If Shopify genuinely shows no sales, work down this list</h2>
          <p className="text-white/60 leading-relaxed text-sm mb-6">
            Assuming tracking checks out, the traffic itself is where to
            look. Each of these narrows down a different reason clicks aren&apos;t
            turning into orders — check them roughly in order, since earlier
            ones tend to explain later symptoms.
          </p>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-white text-sm">Search term relevance and intent match</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Pull the Search Terms report and look for two different
                failure modes, not one. The first is irrelevant queries
                slipping through under broad match — those clicks were never
                going to convert regardless of landing page. The second, more
                easily missed, is relevant queries with the wrong intent —
                &quot;how does [product] work&quot; and &quot;buy [product]&quot; can both
                match the same keyword but represent completely different
                stages of a purchase decision. Tightening match types and
                adding negatives fixes the first; nothing about the landing
                experience will fix the second.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">Campaign type and traffic quality</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Search, Shopping and Performance Max don&apos;t source clicks the
                same way. Search traffic has already typed an intent-bearing
                query. Shopping traffic has already seen your product image
                and price before clicking — so if that traffic bounces
                without buying, it&apos;s more often a price or offer mismatch
                than a landing page problem, since they saw the offer before
                they ever landed. PMax pulls additionally from Display,
                YouTube and Discover placements that carry lower purchase
                intent per click than either. A no-sales pattern concentrated
                in PMax placement data points at traffic mix; the same
                pattern concentrated in Search points somewhere else
                entirely.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">Landing page, offer and price fit</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Sending Search or Shopping clicks to a collection page or the
                homepage instead of the specific product adds a step the
                customer didn&apos;t ask for. Beyond that, check the price the
                ad is actually promising against what a shopper would find
                comparing elsewhere — Shopping ads in particular draw
                price-comparison behavior, since the price is visible before
                the click happens. A product priced noticeably above visible
                alternatives will keep collecting clicks and losing the sale
                at the price, not at the page.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">Competition and impression share</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Auction Insights and impression-share-lost-to-rank tell you
                whether you&apos;re winning the clicks worth winning. It&apos;s
                possible to lose the highest-intent auctions to better-funded
                competitors while still winning enough lower-relevance
                impressions on broader targeting to keep spend flowing — that
                combination produces exactly this symptom, clicks without
                sales, without anything being broken.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">Mobile experience</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Most Search and Shopping retail traffic skews mobile. A slow
                product page, an awkward mobile checkout, or a payment method
                that doesn&apos;t render cleanly on a phone can turn a genuinely
                interested click into an abandoned session even with correct
                tracking and a well-matched offer. Worth testing the full
                path — click through to checkout — on an actual phone, not
                just a browser window resized to look like one.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* IF TRACKING PROBLEM */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">If Shopify shows sales Google Ads doesn&apos;t</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              This is a tracking configuration issue, and the causes cluster
              around a handful of usual suspects: the wrong conversion action
              set as primary, the purchase tag not actually present on the
              order confirmation step, a conversion ID or label that doesn&apos;t
              match, or consent settings blocking the tag before it fires.
              The full step-by-step walkthrough, including where to check
              tag health in Google Ads itself, is in{" "}
              <Link href="/resources/google-ads-not-tracking-shopify-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads not tracking Shopify purchases
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* CROSS-PLATFORM */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Running Meta alongside Google Ads?</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The clicks-but-no-sales pattern shows up on Meta too, and the
            diagnostic logic differs by platform — different campaign types,
            different placement mix, different tracking mechanics. See{" "}
            <Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Meta Ads clicks but no sales
            </Link>{" "}
            for the platform-specific version of this same question.
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
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-not-tracking-shopify-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads not tracking Shopify purchases — step-by-step
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Google Ads and Shopify revenue don&apos;t match
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads clicks but no sales
              </Link>
            </li>
            <li>
              <Link href="/tools/roas-calculator" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                ROAS calculator
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">When the diagnosis needs account-level digging</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            This checklist gets you most of the way to a cause. When Google,
            Meta and Shopify are disagreeing and the reason needs someone
            actually in the account to track down, that&apos;s what our team
            does.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
