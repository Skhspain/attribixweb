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
    q: "What's a normal gap between Google Ads clicks and Shopify sessions?",
    a: "There isn't a fixed normal figure worth chasing: the gap depends on your traffic mix, devices and markets. What matters more is whether the ratio between clicks and sessions stays roughly consistent over time, not whether it hits some specific benchmark.",
  },
  {
    q: "Could ad blockers be causing this?",
    a: "They can contribute. Some analytics scripts get blocked the same way pixels do, which means a real visit happens but never gets recorded as a session, even though Google Ads still counted the click.",
  },
  {
    q: "Should I be more worried if the gap suddenly gets bigger?",
    a: "A sudden change is more worth investigating than a stable gap. Check whether anything changed around the same time: a new tracking-prevention setting in browsers, a site speed regression, or a consent-banner update.",
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
  headline: "Google Ads Clicks Don't Match Shopify Sessions: Why?",
  description: "A click and a session are counted by two different systems, measuring two different things.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-clicks-vs-shopify-sessions" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Clicks vs sessions", item: "https://www.attribix.app/resources/google-ads-clicks-vs-shopify-sessions" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Clicks vs sessions" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads clicks don&apos;t match Shopify sessions: why?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A click is what Google Ads counts when someone taps your ad. A
            session is what Shopify counts when a visit gets recorded on
            the store. They&apos;re measured by two separate systems, and a
            gap between them is expected. The question is whether that
            gap is stable or whether it just changed.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A click isn&apos;t a session</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Google counts a click the moment the ad is tapped, before the
            landing page even starts loading. If the page is slow, or the
            visitor closes the tab before it finishes loading, that click
            never turns into a recorded Shopify session. The visit
            happened, but nothing was there to count it. The same person
            clicking an ad twice in one session (once from search, once
            from a retargeting placement) can also register as two
            clicks against a single session.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Tracking prevention and ad blockers cut into the session side</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Google Ads counts the click on its own servers, independent
              of anything running on your site. Shopify&apos;s session
              count depends on analytics scripts actually executing in the
              visitor&apos;s browser. Ad blockers, browser tracking
              prevention and UTM parameters getting stripped by some apps
              can all reduce the session count without touching the click
              count at all, which is the main reason the click side is
              usually the larger number.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Track the ratio, not the exact numbers</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            There&apos;s no universal figure for what a normal gap looks
            like: it depends on your device mix, markets and page speed.
            What&apos;s more useful is watching whether the ratio between
            clicks and sessions holds steady over time. A consistent gap
            just reflects the measurement mechanics above. A gap that
            suddenly widens is worth investigating: check for a recent
            site speed regression, a consent-banner change, or a new app
            that might be interfering with tracking.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads conversion tracking for Shopify</Link></li>
            <li><Link href="/resources/google-ads-not-tracking-shopify-purchases" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads not tracking Shopify purchases</Link></li>
            <li><Link href="/resources/ios-ad-blockers-shopify-tracking-loss" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">iOS, ad blockers and privacy: how much tracking are you losing</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Numbers not adding up on your account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry and we can take a look at your tracking
            setup directly.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
