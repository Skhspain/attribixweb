"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ProductCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";
import DiagramFrame from "@/components/marketing/DiagramFrame";

const FAQ_ITEMS = [
  {
    q: "What is ROAS?",
    a: "Return on ad spend — revenue attributed to advertising divided by what you spent on it. It depends entirely on which attribution model produced the revenue figure.",
  },
  {
    q: "What is MER?",
    a: "Marketing efficiency ratio — total store revenue divided by total marketing spend, with no attribution model involved at all.",
  },
  {
    q: "Which one should I use to decide what to scale?",
    a: "Platform ROAS is more useful for campaign-level decisions because it's granular. MER is more useful for business-level decisions because it's stable and attribution-independent. Neither replaces the other.",
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
  headline: "MER vs ROAS for Shopify",
  description: "When to use ROAS, when to use MER, and why they answer different questions for Shopify stores.",
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/mer-vs-roas-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "MER vs ROAS", item: "https://www.attribix.app/resources/mer-vs-roas-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "MER vs ROAS" }]} />
          <Eyebrow>Measurement</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            MER vs ROAS for Shopify
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            ROAS depends on attribution — a model deciding which revenue
            counts as &quot;from&quot; advertising. MER skips that decision entirely.
            That difference is why they move differently, and why neither
            one alone tells the whole story.
          </p>
        </Reveal>
      </section>

      {/* ROAS RECAP */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">ROAS is an attribution-dependent ratio</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Return on ad spend takes revenue an attribution model has
            credited to advertising and divides it by what was spent to
            generate it. Because it relies on attribution, ROAS is sensitive
            to every choice baked into that attribution: which model,
            which window, which platform. Two stores with identical sales
            and spend can report meaningfully different ROAS if their
            attribution settings differ.
          </p>
        </Reveal>
      </section>

      {/* MER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">MER removes attribution from the equation</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Marketing efficiency ratio is simpler by design: total store
              revenue for a period, divided by total marketing spend for
              that same period. No individual order is credited to any
              specific ad. It doesn&apos;t try to answer &quot;which campaign caused
              this sale&quot; — it answers &quot;given what I spent on marketing
              overall, how much did the business bring in.&quot; That makes it
              far steadier than platform ROAS, since it isn&apos;t exposed to
              attribution-window changes, tracking gaps, or cross-platform
              double-counting.
            </p>

            <div className="mt-8">
              <DiagramFrame caption="ROAS divides by what a model attributes. MER divides by everything.">
                <svg viewBox="0 0 600 170" className="w-full h-auto" role="img" aria-label="Diagram contrasting ROAS, which divides ad-attributed revenue by ad spend, against MER, which divides total store revenue by total marketing spend.">
                  <rect x="10" y="10" width="280" height="150" rx="12" className="fill-cyan-400/5" stroke="rgba(56,189,248,0.35)" strokeWidth="1" />
                  <text x="150" y="34" textAnchor="middle" className="fill-white text-[13px] font-semibold">ROAS</text>
                  <text x="150" y="60" textAnchor="middle" className="fill-white/60 text-[11px]">Attributed revenue (subset)</text>
                  <line x1="60" y1="72" x2="240" y2="72" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                  <text x="150" y="90" textAnchor="middle" className="fill-white/60 text-[11px]">Ad spend (one platform)</text>
                  <text x="150" y="130" textAnchor="middle" className="fill-white/40 text-[10px]">Depends on the attribution model</text>

                  <rect x="310" y="10" width="280" height="150" rx="12" className="fill-fuchsia-400/5" stroke="rgba(168,85,247,0.35)" strokeWidth="1" />
                  <text x="450" y="34" textAnchor="middle" className="fill-white text-[13px] font-semibold">MER</text>
                  <text x="450" y="60" textAnchor="middle" className="fill-white/60 text-[11px]">Total store revenue (all)</text>
                  <line x1="360" y1="72" x2="540" y2="72" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                  <text x="450" y="90" textAnchor="middle" className="fill-white/60 text-[11px]">Total marketing spend</text>
                  <text x="450" y="130" textAnchor="middle" className="fill-white/40 text-[10px]">No attribution model involved</text>
                </svg>
              </DiagramFrame>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHEN EACH IS USEFUL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When each one earns its keep</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            ROAS is more useful at the campaign or ad-set level, where you
            need enough granularity to compare one creative or audience
            against another — MER doesn&apos;t break down that far. MER is more
            useful at the business level, for questions like &quot;is our overall
            marketing spend sustainable relative to revenue,&quot; where
            attribution noise would otherwise make the trend hard to read.
            Neither replaces the other; they&apos;re suited to different
            altitudes of the same decision.
          </p>
        </Reveal>
      </section>

      {/* LIMITATIONS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What neither metric proves</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Neither ROAS nor MER proves incrementality — that the ad spend
              caused sales that wouldn&apos;t have happened anyway. A high MER
              can coexist with a business that would have sold nearly as
              much through organic and repeat demand alone. Both metrics
              measure efficiency against spend, not the counterfactual of
              what would have happened without it.
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
              <Link href="/resources/true-roas-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to calculate true ROAS on Shopify
              </Link>
            </li>
            <li>
              <Link href="/tools/mer-calculator" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                MER calculator
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See ROAS and MER side by side</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and ad accounts to see both metrics
            calculated from the same underlying data.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
