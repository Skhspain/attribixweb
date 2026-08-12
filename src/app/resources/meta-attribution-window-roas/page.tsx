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
    q: "What attribution window should I use on Meta?",
    a: "There's no universally correct setting. It depends on how long your customers typically take to decide. A narrower window (like 1-day click) gives a more conservative, click-driven number. A wider window pulls in more delayed purchases and reports higher, but neither is 'more accurate' in an absolute sense.",
  },
  {
    q: "Why did my ROAS suddenly change without changing my campaigns?",
    a: "Check whether the attribution window setting changed, either on a specific ad set or at the ad account default. Widening or narrowing the window can move reported ROAS noticeably even when nothing about the ads, audience, or spend changed.",
  },
  {
    q: "Does a wider attribution window mean Meta is tracking better?",
    a: "No. It means Meta is willing to credit purchases that happened further from the ad interaction, which is a modeling choice about how far back to look, not an improvement in what Meta can actually observe.",
  },
  {
    q: "Should I compare my Meta ROAS to my Google ROAS if they use different windows?",
    a: "Only with that difference in mind. Google's conversion window settings work on the same principle but aren't configured identically to Meta's by default, so a side-by-side comparison without checking both windows is comparing two different measurement standards, not two different channels' performance.",
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
  headline: "Why Changing Your Meta Attribution Window Changes Your ROAS",
  description:
    "How Meta's click and view attribution window settings change reported ROAS without any real change in campaign performance, with a worked hypothetical example.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-attribution-window-roas" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Meta attribution window and ROAS", item: "https://www.attribix.app/resources/meta-attribution-window-roas" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Attribution window & ROAS" }]} />
          <Eyebrow>Attribution &amp; Measurement</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why changing your Meta attribution window changes your ROAS
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Meta&apos;s attribution window setting decides how far back (from a
            click or a view) a purchase is still allowed to count as that
            ad&apos;s. Widen the window and more delayed purchases get pulled
            in, so reported ROAS rises, even though nothing about how the
            campaign actually performed has changed.
          </p>
        </Reveal>
      </section>

      {/* THE OPTIONS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What the attribution window setting actually controls</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Meta lets you set, at the ad set level, how long after someone
            clicks an ad (and separately, how long after they merely see
            one) a purchase is still eligible to be credited to it. These
            are configured as click and view components together: a common
            default pairs a click window of around a week with a view
            window of a day, but accounts can be set narrower (click-only,
            shorter windows) or wider, depending on what&apos;s available
            for the ad account and campaign objective at the time. The
            specific menu of options has changed over the platform&apos;s
            history and can vary by account, so treat the exact figures in
            your own Ads Manager as the source of truth rather than any
            fixed list.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            What matters conceptually is simpler than the settings screen
            makes it look: a shorter window only credits purchases that
            happened close in time to the ad interaction. A longer window
            credits purchases much further removed from it. Both are
            legitimate configurations. They just answer different
            questions.
          </p>
        </Reveal>
      </section>

      {/* WHY LONGER RAISES ROAS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A longer window doesn&apos;t improve performance. It counts more</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Every purchase that happens within a 7-day click window also
              happens within a 28-day click window. A wider window is a
              superset, never a different set. So widening the window can
              only add attributed purchases, never remove them, and adding
              purchases to the numerator while spend in the denominator
              stays fixed can only push reported ROAS up or leave it
              unchanged. This is arithmetic, not evidence that the campaign
              is reaching more people or converting better. The ads didn&apos;t
              change. The rule for what counts as &ldquo;caused by the
              ads&rdquo; did.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONSIDERATION CYCLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Short and long consideration cycles respond differently</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A cheap, impulse-friendly product (something under $30 with an
            obvious use case) mostly gets bought within minutes or hours of
            someone seeing the ad. Widening the attribution window from a
            day to a week won&apos;t change much for that product, because
            there aren&apos;t many purchases happening in days two through
            seven to pull in.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            A considered purchase (furniture, a subscription, anything
            over a few hundred dollars, or anything a customer would
            reasonably compare against alternatives) behaves differently.
            A meaningful share of eventual buyers might see the ad,
            leave, think about it, check reviews elsewhere, and come back
            to buy four or five days later. For that kind of product, the
            gap between a 1-day and a 7-day window can be large, because
            there&apos;s genuinely more purchase activity happening in the
            later days of the window. Neither business is being measured
            &ldquo;wrong&rdquo;; they just have different amounts of
            delayed purchase behavior for a wider window to capture.
          </p>
        </Reveal>
      </section>

      {/* WORKED EXAMPLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The same campaign, two window settings</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Hypothetical example, not a real ad account. Say a campaign
              spent $2,000 in a week.
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-6 space-y-2.5 text-sm font-mono">
            <div className="flex justify-between border-b border-white/10 py-2 text-white/60">
              <span>Spend</span>
              <span className="text-white/85">$2,000</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2 text-white/60">
              <span>Attributed revenue: 1-day click, no view window</span>
              <span className="text-white/85">$4,400 (2.2x)</span>
            </div>
            <div className="flex justify-between border-b border-white/10 py-2 text-white/60">
              <span>Attributed revenue: 7-day click, 1-day view window</span>
              <span className="text-white/85">$7,600 (3.8x)</span>
            </div>
            <div className="flex justify-between py-2 text-cyan-200 font-semibold">
              <span>Difference from window setting alone</span>
              <span>+$3,200 reported, same $2,000 spent</span>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-sm text-white/45 max-w-2xl">
              Nothing about the ads, the audience, or the offer changed
              between those two rows. The campaign didn&apos;t get better
              at 3.8x than it was at 2.2x. The second row is just allowed
              to look further back and claim more of what happened in that
              window. Anyone comparing this campaign&apos;s &ldquo;3.8x&rdquo;
              against a different campaign reported under a 1-day window is
              comparing two different rulers, not two different campaigns.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DIAGRAM */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-6">Why a wider window is always a superset</h2>
          <DiagramFrame caption="Illustrative: every purchase counted in a narrow window is also counted in a wider one that contains it.">
            <svg viewBox="0 0 600 170" className="w-full h-auto" role="img" aria-label="Diagram showing a 1-day attribution window nested inside a wider 7-day window, with more purchases falling inside the wider window.">
              <rect x="20" y="20" width="560" height="130" rx="14" className="fill-white/5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <text x="40" y="45" className="fill-white/60 text-[12px] font-semibold">7-day click window</text>
              <rect x="40" y="60" width="180" height="70" rx="12" className="fill-cyan-400/10" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
              <text x="130" y="88" textAnchor="middle" className="fill-white text-[12px] font-semibold">1-day click window</text>
              <text x="130" y="106" textAnchor="middle" className="fill-white/60 text-[11px]">Purchases: 44</text>
              <circle cx="330" cy="95" r="5" className="fill-emerald-400/70" />
              <circle cx="360" cy="70" r="5" className="fill-emerald-400/70" />
              <circle cx="400" cy="115" r="5" className="fill-emerald-400/70" />
              <circle cx="440" cy="80" r="5" className="fill-emerald-400/70" />
              <circle cx="480" cy="105" r="5" className="fill-emerald-400/70" />
              <circle cx="520" cy="65" r="5" className="fill-emerald-400/70" />
              <text x="330" y="140" className="fill-white/40 text-[11px]">Purchases on days 2&ndash;7, only counted once the window widens</text>
            </svg>
          </DiagramFrame>
        </Reveal>
      </section>

      {/* HOW TO USE THIS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Using the setting instead of getting misled by it</h2>
          <div className="mt-2 space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            <p>
              Keep the attribution window setting fixed when comparing
              campaigns against each other, or against past performance of
              the same campaign. A ROAS trend line is only meaningful if
              every point on it was measured the same way. A window change
              partway through the month will produce a jump that looks like
              a performance change but isn&apos;t one.
            </p>
            <p>
              If you run both Meta and Google, remember they don&apos;t use
              identical window logic by default, so comparing raw ROAS
              figures between the two platforms already has this same issue
              built in even before cross-platform overlap is considered.
              See{" "}
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                why Shopify and Meta Ads show different sales numbers
              </Link>
              . For a broader look at how first-click, last-click and other
              models change what gets credited in the first place, see{" "}
              <Link href="/resources/shopify-attribution-models" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution models explained
              </Link>
              .
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
              Attribix calculates ROAS from actual Shopify orders rather
              than from whichever attribution window a given ad set happens
              to be set to, so campaign comparisons hold up even if window
              settings differ or change over time. See how blended ROAS is
              built on{" "}
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
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
              <Link href="/resources/shopify-attribution-models" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution models explained
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta Ads show different sales numbers
              </Link>
            </li>
            <li>
              <Link href="/resources/view-through-conversions-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                View-through conversions: should you count them?
              </Link>
            </li>
            <li>
              <Link href="/resources/ad-platforms-report-more-revenue-than-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Meta and Google both claim the same Shopify sale
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Want your window settings audited?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send an inquiry and we&apos;ll check what attribution window
            your ad sets are actually using and how much of your reported
            ROAS depends on it.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
