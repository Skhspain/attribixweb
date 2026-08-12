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
    q: "Does falling platform ROAS always mean the ads got worse?",
    a: "No. It can also mean growth from other sources is diluting the ad platforms' apparent share of total revenue, or that tracking is under-reporting platform-attributed orders even as real sales grow. Check new-versus-returning customer mix before assuming the ads themselves are the problem.",
  },
  {
    q: "How do I check if it's returning customers driving the growth?",
    a: "Shopify's own customer reporting can split revenue by new versus returning customers. If returning-customer revenue is doing most of the growing, that's largely retention and brand strength, not new-customer acquisition: a different lever than your ad accounts.",
  },
  {
    q: "Should I keep spending on ads if ROAS looks worse but revenue is up?",
    a: "That depends on whether new-customer acquisition itself is still efficient, which platform ROAS alone won't answer cleanly. It's worth looking at new-customer CAC specifically rather than reacting to a blended ROAS number that's being pulled around by channels the ad platform had nothing to do with.",
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
  headline: "Shopify Revenue Is Up but Meta and Google ROAS Are Down",
  description: "Why total growth and platform ROAS can move in opposite directions, and what to check before reacting to either.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-revenue-up-roas-down" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Revenue up, ROAS down", item: "https://www.attribix.app/resources/shopify-revenue-up-roas-down" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Revenue up, ROAS down" }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify revenue is up but Meta and Google ROAS are down
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            These two numbers can move in opposite directions without
            anything being wrong. Total store revenue and platform-reported
            ROAS answer different questions, and the gap between them
            usually comes down to where the growth is actually coming from.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Growth the ad platforms don&apos;t get credit for</h2>
          <p className="text-white/60 leading-relaxed text-sm mb-6">
            Say a store grew total revenue 20% year over year while Meta
            and Google ROAS both fell. If most of that growth came from
            returning customers buying again through email, direct visits
            or organic search, the ad platforms had little to do with it.
            They&apos;re reporting on a shrinking share of a growing pie,
            which looks like underperformance even if new-customer
            acquisition through ads held steady.
          </p>
          <DiagramFrame caption="Illustrative: the actual split will differ by store.">
            <svg viewBox="0 0 600 170" className="w-full h-auto" role="img" aria-label="Diagram showing total Shopify revenue growing while the portion attributable to paid ads stays flat, with the rest of the growth coming from returning customers, email and direct traffic.">
              <rect x="10" y="20" width="260" height="130" rx="12" className="fill-white/5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <text x="140" y="42" textAnchor="middle" className="fill-white/70 text-[11px] font-semibold">Last year</text>
              <rect x="30" y="60" width="220" height="70" rx="8" className="fill-cyan-400/20" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
              <text x="140" y="100" textAnchor="middle" className="fill-white text-[12px] font-semibold">Total revenue</text>

              <rect x="330" y="20" width="260" height="130" rx="12" className="fill-white/5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <text x="460" y="42" textAnchor="middle" className="fill-white/70 text-[11px] font-semibold">This year</text>
              <rect x="350" y="60" width="220" height="30" rx="6" className="fill-cyan-400/20" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
              <text x="460" y="80" textAnchor="middle" className="fill-white text-[11px]">Paid ads: flat</text>
              <rect x="350" y="95" width="220" height="35" rx="6" className="fill-emerald-400/15" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
              <text x="460" y="116" textAnchor="middle" className="fill-white text-[11px]">Returning, email, direct: up</text>
            </svg>
          </DiagramFrame>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check new-versus-returning customer mix first</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Shopify's customer reporting can split revenue by new and
              returning buyers. If returning-customer revenue explains most
              of the growth, that's largely a retention and brand story:
              worth understanding, but not evidence that paid acquisition
              is failing. If new-customer revenue is also growing but ad
              platform ROAS is still falling, that's a stronger signal that
              acquisition efficiency is genuinely softening, or that
              measurement is under-reporting what the ads are actually
              doing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t rule out tracking either</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A tracking or consent change can suppress platform-reported
            purchases even while real Shopify revenue keeps climbing.
            They&apos;re measured independently. If reported ROAS dropped
            around the same time as a site, cookie-banner or app change,
            it&apos;s worth ruling that out before concluding the
            campaigns themselves got less efficient.
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
            <li><Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify ROAS tracking</Link></li>
            <li><Link href="/resources/ad-platforms-report-more-revenue-than-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why ad platforms report more revenue than Shopify</Link></li>
            <li><Link href="/resources/shopify-sales-down-traffic-same" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Sales dropped but traffic is the same</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want the split done properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry and we can help separate genuine acquisition
            performance from measurement noise, or see how Attribix
            connects ad spend to real Shopify orders.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
