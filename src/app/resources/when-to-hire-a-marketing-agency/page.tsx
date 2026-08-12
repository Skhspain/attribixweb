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
    q: "Is there a spend level where hiring an agency starts to make financial sense?",
    a: "It depends more on the value of the time you're spending and the cost of mistakes than on a fixed spend threshold. A founder losing several hours a week to campaign management, on an account where a poor decision is expensive, can justify outside help even at modest spend.",
  },
  {
    q: "Can an agency fix a store that isn't converting?",
    a: "An agency focused on ad management can improve traffic quality and tracking, but if the underlying product, pricing or website experience isn't converting visitors who are genuinely interested, that's a separate problem an ads-only engagement won't solve.",
  },
  {
    q: "What if I'm not sure whether the problem is the ads or the tracking?",
    a: "That uncertainty is itself a reasonable trigger to bring someone in. Untangling whether numbers reflect a real performance issue or a measurement issue is exactly the kind of diagnostic work worth outside expertise.",
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
  headline: "When Should You Hire an Ecommerce Marketing Agency?",
  description: "The signals worth acting on, and the ones that mean an agency won't fix the actual problem.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/when-to-hire-a-marketing-agency" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "When to hire an agency", item: "https://www.attribix.app/resources/when-to-hire-a-marketing-agency" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "When to hire an agency" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            When should you hire an ecommerce marketing agency?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There's no single spend level or revenue milestone that makes
            the decision for you. A few signals tend to matter more than a
            number on their own, and just as importantly, a few signals
            mean an agency isn't the fix you're looking for yet.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Signals worth acting on</h2>
          <ul className="space-y-3 text-sm text-white/60">
            <li><span className="text-white font-medium">You're spending hours a week in the ad accounts</span> instead of on the parts of the business only you can do: product, operations, customer relationships.</li>
            <li><span className="text-white font-medium">Spend has reached a level where mistakes are expensive.</span> A wasted week of budget matters a lot more at $15,000/month than at $500/month.</li>
            <li><span className="text-white font-medium">You genuinely can't tell whether Meta, Google and Shopify agreeing or disagreeing means anything</span>, which is a real diagnostic gap, not just inconvenience.</li>
            <li><span className="text-white font-medium">You're running multiple channels without the capacity to manage any of them well</span>, which usually means all of them underperform a little rather than one performing a lot.</li>
            <li><span className="text-white font-medium">Performance has plateaued despite real effort</span>, and you suspect there's a specialist technique or setup you're missing: PMax structure, CAPI implementation, creative testing cadence.</li>
            <li><span className="text-white font-medium">You can't test at the pace needed to actually improve</span>: not enough creative variations, not enough audience experiments, because there isn't time to run them properly.</li>
          </ul>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Signals it's not the right move yet</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If you're still finding product-market fit, spend is too low
              for an agency relationship to justify itself economically;
              that money is often better spent on product, inventory or
              testing the offer directly. And if the real issue is the
              product, the price, or a website that doesn't convert
              interested visitors, an ads-focused agency engagement won't
              fix that. Diagnose where the funnel is actually breaking
              first, because paying someone to send more traffic to a
              broken funnel just gets you a bigger version of the same
              problem.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A middle path exists</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Hiring doesn't have to mean handing over full account
            management immediately. A one-off account audit or a
            diagnostic engagement can tell you whether the problem is
            genuinely something specialist help would fix, before
            committing to an ongoing retainer.
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
            <li><Link href="/resources/marketing-agency-vs-in-house" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Marketing agency vs in-house</Link></li>
            <li><Link href="/resources/ecommerce-marketing-agency-cost" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How much does an ecommerce marketing agency cost?</Link></li>
            <li><Link href="/resources/shopify-traffic-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify traffic but no sales</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure which category you're in?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry and tell us where things stand. We can
            tell you honestly whether this is something we'd take on.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
