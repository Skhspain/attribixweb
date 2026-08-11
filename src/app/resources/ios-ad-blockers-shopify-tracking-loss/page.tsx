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
    q: "How much Shopify tracking does iOS actually lose?",
    a: "There's no fixed, reliable percentage — it depends on how much of your traffic is Safari and iOS in-app browsers, your customers' consent choices, and how quickly people buy after seeing an ad. Treat any source that quotes a specific recovery or loss percentage with skepticism; the honest answer is 'a real and often meaningful share, not a fixed number.'",
  },
  {
    q: "Do ad blockers and Safari's ITP cause the same kind of tracking loss?",
    a: "No. Ad blockers stop a pixel's network request outright — a binary block. ITP is narrower: it restricts cookie lifespan and blocks third-party cookies, which mainly damages multi-session and cross-site tracking rather than blocking every request.",
  },
  {
    q: "Does server-side tracking (CAPI) fully fix iOS and ad blocker tracking loss?",
    a: "No — it recovers a meaningful share of the otherwise-missed signal, not all of it. It still depends on the customer having consented and on your server having enough identifying data to match the event to the right person.",
  },
  {
    q: "How can I tell if I'm actually losing iOS tracking, or if my ads just underperform on iOS?",
    a: "Compare Shopify's actual order count and revenue from iOS/Safari traffic against what the ad platform reports as attributed for that same segment, over the same period. A meaningful, consistent gap that other browsers don't show is a tracking signal, not a performance signal.",
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
  headline: "iOS, Ad Blockers and Privacy: How Much Shopify Tracking Are You Losing?",
  description:
    "Safari's ITP, ad blockers and iOS privacy defaults each remove real orders from browser-based ad tracking. How to tell, what it does to reported ROAS, and what server-side tracking can and can't fix.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/ios-ad-blockers-shopify-tracking-loss" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "iOS, ad blockers and Shopify tracking loss", item: "https://www.attribix.app/resources/ios-ad-blockers-shopify-tracking-loss" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "iOS & ad blocker tracking loss" }]} />
          <Eyebrow>Tracking &amp; Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            iOS, ad blockers and privacy: how much Shopify tracking are you losing?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Some real Shopify orders never show up as a conversion in Meta
            or Google Ads at all — not because the ad didn&apos;t work, but
            because Safari&apos;s tracking restrictions, an ad blocker, or a
            declined consent prompt stopped the browser-based purchase
            event from ever reaching the ad platform. There&apos;s no clean
            single percentage for how much this costs any given store, but
            the mechanism is real, documented, and worth understanding
            before you write off a campaign as underperforming.
          </p>
        </Reveal>
      </section>

      {/* SAFARI ITP */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What Safari&apos;s Intelligent Tracking Prevention actually restricts</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            ITP is Safari&apos;s built-in anti-tracking system, and it&apos;s
            the default on every iPhone and iPad, since Safari is the
            system browser there — it also runs on macOS Safari and inside
            many iOS in-app browsers that use Apple&apos;s WebKit engine.
            Two of its restrictions matter most for ad tracking. First, it
            blocks third-party cookies outright, which is the mechanism
            most cross-site ad tracking historically relied on. Second, it
            caps the lifespan of first-party cookies set via JavaScript for
            domains it classifies as having tracking capability — commonly
            down to about seven days — rather than the months or years a
            cookie might otherwise persist. A customer who saw an ad,
            didn&apos;t buy that session, and returned more than a week
            later on Safari can look to the ad platform like a fresh,
            untracked visitor, because the identifier that would have
            linked the two visits already expired.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            This is a documented, deliberate privacy feature, not a bug or
            an edge case affecting a sliver of traffic. iOS holds a large
            share of mobile traffic for most Shopify stores, and Safari is
            the default browser on it, which means ITP&apos;s restrictions
            apply to a substantial, ordinary slice of a typical store&apos;s
            visitors, not a rare configuration.
          </p>
        </Reveal>
      </section>

      {/* AD BLOCKERS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ad blockers are a blunter, more complete block</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Where ITP narrows what a tracking script can persist, an ad
              blocker (a browser extension, a built-in blocking feature, or
              network-level filtering like some VPNs and DNS blockers) is
              closer to a wall. It typically works from a maintained list
              of known tracking and advertising domains and request
              patterns, and it stops the browser from ever sending the
              request to those domains — the Meta Pixel or Google tag
              script simply never loads, or its request to log an event
              never leaves the browser. There&apos;s no cookie lifespan to
              reason about because there&apos;s no successful request in
              the first place. Anyone running an ad blocker who completes a
              purchase on your Shopify store is, from the ad platform&apos;s
              perspective, invisible for that order — full stop, not
              partially tracked.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY iOS SPECIFICALLY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why iOS traffic concentrates the problem</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            iOS traffic tends to stack several of these factors on top of
            each other rather than facing just one. Safari&apos;s ITP
            applies by default with no extra installation required, unlike
            a desktop ad blocker extension that a smaller share of users
            actively install. A large amount of iOS traffic also arrives
            through in-app browsers — someone tapping a link inside
            Instagram or another app rather than opening full Safari —
            which can behave differently again depending on how that
            in-app browser handles cookies and scripts. And Apple&apos;s
            broader privacy positioning across the platform, including
            prompts asking users to allow or block cross-app tracking, adds
            another layer where a customer can decline tracking before an
            ad platform ever gets a chance to observe anything. None of
            these individually guarantees tracking loss for a given
            customer, but together they make iOS the segment most likely to
            show a real gap between orders Shopify recorded and purchases
            the ad platform reports.
          </p>
        </Reveal>
      </section>

      {/* DIAGNOSIS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">How you&apos;d actually tell this is happening to you</h2>
            <div className="mt-2 space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                This isn&apos;t something to assume from general knowledge
                about iOS — it&apos;s something to check against your own
                data. A few concrete comparisons are more useful than
                intuition:
              </p>
              <p>
                <strong className="text-white/85">Segment Shopify orders by device and browser</strong>{" "}
                and compare that split against the device and browser
                breakdown the ad platform reports for attributed
                conversions from the same campaigns, over the same period.
                If iOS/Safari makes up a noticeably smaller share of
                attributed conversions than it does of actual completed
                orders, that gap is a tracking signal.
              </p>
              <p>
                <strong className="text-white/85">Compare checkout completions to purchase events fired.</strong>{" "}
                If your analytics or Shopify data shows a checkout was
                completed but the ad platform&apos;s purchase event count
                for that period runs meaningfully below actual order count,
                especially concentrated on iOS traffic, that&apos;s a more
                direct signal than an abstract CPA comparison.
              </p>
              <p>
                <strong className="text-white/85">Watch for a CPA or ROAS shift that&apos;s isolated to iOS-heavy placements</strong>{" "}
                without a corresponding change in spend, creative, or
                targeting. A campaign that leans heavily on Instagram or
                other mobile-first placements showing a sudden CPA increase,
                while a desktop-leaning campaign in the same account stays
                flat, points toward a tracking gap rather than an actual
                drop in ad effectiveness.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMPACT ON REPORTED METRICS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What this does to reported ROAS and CPA</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            The mechanism is straightforward and easy to misread. Spend on
            a campaign is recorded accurately regardless of tracking
            loss — the ad platform always knows what it charged you.
            Attributed revenue is what gets undercounted, because it
            depends on the purchase event successfully reaching the
            platform. Divide accurate spend by undercounted revenue and
            ROAS comes out lower than the campaign actually delivered. The
            same logic pushes reported CPA higher than the real cost per
            customer acquired. A campaign that&apos;s genuinely working can
            look mediocre or get paused on the strength of a number that&apos;s
            measuring tracking loss, not ad performance.
          </p>
        </Reveal>
      </section>

      {/* DIAGRAM */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-6">Where an order can drop out before the platform sees it</h2>
            <DiagramFrame caption="Illustrative — the browser-only path has more places a real order can fail to register as a conversion.">
              <svg viewBox="0 0 620 220" className="w-full h-auto" role="img" aria-label="Diagram showing a customer purchase path where ITP, an ad blocker, or a network drop can each independently prevent the browser purchase event from reaching the ad platform, versus a server-side path triggered by the order webhook.">
                <rect x="20" y="20" width="180" height="50" rx="10" className="fill-white/5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <text x="110" y="50" textAnchor="middle" className="fill-white text-[12px] font-semibold">Real Shopify order</text>

                <line x1="200" y1="45" x2="260" y2="45" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />

                <rect x="260" y="20" width="150" height="50" rx="10" className="fill-white/5" stroke="rgba(56,189,248,0.35)" strokeWidth="1" />
                <text x="335" y="42" textAnchor="middle" className="fill-white text-[11px] font-semibold">Browser purchase</text>
                <text x="335" y="58" textAnchor="middle" className="fill-white/55 text-[10px]">event attempt</text>

                <line x1="410" y1="45" x2="460" y2="45" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" markerEnd="url(#arrowA)" />

                <rect x="460" y="20" width="140" height="50" rx="10" className="fill-white/5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <text x="530" y="50" textAnchor="middle" className="fill-white text-[11px] font-semibold">Ad platform</text>

                <text x="260" y="100" className="fill-rose-300 text-[11px] font-semibold">Can be blocked by:</text>
                <text x="260" y="120" className="fill-white/55 text-[11px]">ITP cookie expiry (multi-session)</text>
                <text x="260" y="138" className="fill-white/55 text-[11px]">Ad blocker (request never sent)</text>
                <text x="260" y="156" className="fill-white/55 text-[11px]">Tab closed before event fires</text>

                <line x1="200" y1="70" x2="260" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <rect x="260" y="170" width="150" height="46" rx="10" className="fill-emerald-400/10" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
                <text x="335" y="190" textAnchor="middle" className="fill-white text-[11px] font-semibold">Server-side event</text>
                <text x="335" y="205" textAnchor="middle" className="fill-white/55 text-[10px]">from order webhook</text>

                <line x1="410" y1="193" x2="460" y2="193" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" markerEnd="url(#arrowA)" />
                <line x1="530" y1="70" x2="530" y2="193" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3,3" />

                <defs>
                  <marker id="arrowA" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="rgba(255,255,255,0.4)" />
                  </marker>
                </defs>
              </svg>
            </DiagramFrame>
          </Reveal>
        </div>
      </section>

      {/* WHAT SERVER-SIDE CAN FIX */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What server-side tracking can actually fix</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Meta&apos;s Conversions API and Google&apos;s Enhanced
            Conversions both work on the same underlying idea: instead of
            relying only on the customer&apos;s browser to successfully
            send a purchase event, your server sends it too, triggered by
            something like a Shopify order webhook that fires once the
            order genuinely exists. That path doesn&apos;t depend on
            whether ITP trimmed a cookie or whether an ad blocker stripped
            the pixel script, because it never asks the browser to be the
            one to report the purchase. It depends instead on your server
            reliably knowing the order happened, and on having enough
            matching data — usually a hashed email or phone number — to
            let the platform connect that order back to the right ad
            interaction.
          </p>
        </Reveal>
      </section>

      {/* WHAT IT CANNOT FIX */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What it honestly can&apos;t fix</h2>
            <div className="mt-2 space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Server-side tracking recovers a meaningful share of the
                otherwise-missed signal — it does not recover all of it,
                and any claim of complete or near-complete recovery, with a
                specific percentage attached, isn&apos;t something to
                trust. A few concrete limits are worth naming directly:
              </p>
              <p>
                <strong className="text-white/85">Consent still applies.</strong>{" "}
                A customer who declined tracking consent should be excluded
                from the server-side event exactly as they&apos;d be
                excluded from the browser event. Server-side tracking
                changes the route data travels, not whether you&apos;re
                allowed to send it — it never bypasses consent, and no
                legitimate implementation of it does.
              </p>
              <p>
                <strong className="text-white/85">Matching still requires data.</strong>{" "}
                If a customer checks out as a guest with minimal
                information, or the order lacks a usable email or phone
                number to hash and match, the server-side event has less to
                work with and the ad platform has a harder time connecting
                it back to the original ad interaction, even though the
                event itself reached the platform successfully.
              </p>
              <p>
                <strong className="text-white/85">It doesn&apos;t reconstruct the original journey.</strong>{" "}
                A server-side purchase event confirms an order happened and
                offers matching signals for the platform to work with — it
                doesn&apos;t hand back the exact click or impression path
                that ITP&apos;s cookie expiry already erased. The platform&apos;s
                own matching logic decides what to credit; server-side
                tracking improves the odds, it doesn&apos;t guarantee the
                outcome.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT MENTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Where Attribix fits</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Attribix connects Meta CAPI and Google Enhanced Conversions to
            your Shopify order webhooks, so a purchase that a customer&apos;s
            browser never successfully reported still has a second,
            server-side path to reach the ad platform. See how the
            architecture works on{" "}
            <Link href="/server-side-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Shopify server-side tracking
            </Link>
            ,{" "}
            <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Meta CAPI for Shopify
            </Link>{" "}
            and{" "}
            <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Google Ads conversion tracking for Shopify
            </Link>
            .
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
              <Link href="/server-side-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify server-side tracking
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-server-side-tracking-guide" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Shopify server-side tracking works
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/google-consent-mode-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Consent Mode on Shopify: why Google Ads conversions may change
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads ROAS dropped: how to diagnose it
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want your iOS tracking gap measured?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send an inquiry and we&apos;ll compare your actual iOS/Safari
            order volume against what Meta and Google report as attributed,
            on your own account.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
