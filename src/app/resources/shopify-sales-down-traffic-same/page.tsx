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
    q: "Does this rule out an ads problem entirely?",
    a: "It rules out reach — you're still getting roughly the same number of visits. It doesn't rule out the quality of that traffic changing, which session counts alone won't show you.",
  },
  {
    q: "What's the first thing to check?",
    a: "Traffic source mix. Session totals can stay flat while the underlying blend shifts toward channels or campaigns that historically convert worse, which produces exactly this pattern without any change to the store.",
  },
  {
    q: "If the mix hasn't changed either, what then?",
    a: "Then the more likely explanation is something in the store itself — price, stock, offer, checkout, or a site change — since the same visitors who used to convert now aren't.",
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
  headline: "Shopify Sales Dropped but Traffic Is the Same: What Does That Tell You?",
  description: "What stable traffic with falling sales does and doesn't rule out.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-sales-down-traffic-same" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Sales down, traffic same", item: "https://www.attribix.app/resources/shopify-sales-down-traffic-same" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Sales down, traffic same" }]} />
          <Eyebrow>Shopify Growth</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify sales dropped but traffic is the same: what does that tell you?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            If session counts haven&apos;t moved but revenue has, the
            problem almost certainly isn&apos;t how many people are
            reaching the site. It&apos;s what happens once they get there
            — or who, specifically, is showing up.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Same number of visits doesn&apos;t mean the same visitors</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A stable session count is a raw volume number. It says
            nothing about who those sessions are made of. If a
            higher-converting channel lost share to a lower-converting one
            — organic search traffic replaced by a broad social campaign,
            for instance — total sessions can hold perfectly steady while
            revenue falls, because the traffic quality changed underneath
            a number that looks unchanged.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Break it down by source before concluding anything</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Look at conversion rate and revenue per session for each
              major traffic source separately, not just in total. If every
              channel&apos;s individual rate held steady and only the mix
              between them shifted, that&apos;s a media allocation
              question. If conversion rate fell within a channel that used
              to perform reliably — the same email list, the same retargeting
              audience — that points at the store or the offer, not the
              traffic source.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">If the mix hasn&apos;t moved either</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            When both total traffic and its composition look unchanged but
            revenue is still down, the cause is almost certainly inside
            the store: a price change, a stock-out on a best-seller, a
            checkout issue, or a site change that quietly affected
            conversion. This is the scenario where it&apos;s worth walking
            through the funnel stage by stage rather than looking at
            traffic numbers again.
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
            <li><Link href="/resources/shopify-conversion-rate-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify conversion rate suddenly dropped</Link></li>
            <li><Link href="/resources/shopify-revenue-up-roas-down" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Revenue is up but Meta and Google ROAS are down</Link></li>
            <li><Link href="/resources/shopify-traffic-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify traffic but no sales</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a second set of eyes on it?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry and we can look at traffic mix, the store
            and the ad accounts together rather than one at a time.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
