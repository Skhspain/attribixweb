"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ProductCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "How do you calculate blended ROAS for a Shopify store?",
    a: "Add spend across every ad platform you run, then divide it into a single revenue figure you've defined consistently: either combined platform-attributed revenue (still inflated by cross-platform overlap) or actual Shopify revenue for the period (closer to true ROAS). The formula matters less than picking one revenue definition and sticking with it.",
  },
  {
    q: "Is blended ROAS the same as true ROAS?",
    a: "Not quite. Blended ROAS commonly still uses each platform's attributed revenue added together, which keeps the double-counting problem. True ROAS replaces that with actual Shopify revenue, which removes it.",
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
  headline: "How to Calculate True ROAS on Shopify",
  description: "Platform ROAS vs. blended ROAS vs. true ROAS, and what actually separates them: cross-channel overlap, refunds, discounts and revenue windows.",
  datePublished: "2026-08-08",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/true-roas-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "True ROAS on Shopify", item: "https://www.attribix.app/resources/true-roas-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "True ROAS" }]} />
          <Eyebrow>Attribution &amp; Analytics</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to calculate true ROAS on Shopify
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            &quot;Platform ROAS,&quot; &quot;blended ROAS&quot; and &quot;true ROAS&quot; get used
            interchangeably, but they&apos;re three different calculations that
            can produce three noticeably different numbers from the same
            spend and the same orders.
          </p>
        </Reveal>
      </section>

      {/* FORMULA */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The formula, regardless of which ROAS you mean</h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80 text-sm font-mono">ROAS = Revenue ÷ Ad Spend</p>
            <p className="mt-2 text-white/60 text-sm">
              £20,000 revenue ÷ £5,000 ad spend = 4.0x ROAS = 400% ROAS.
            </p>
          </div>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Every version below uses this same direction. What changes
            between platform, blended and true ROAS is never the formula.
            It&apos;s which revenue figure and which spend figure go into it.
          </p>
        </Reveal>
      </section>

      {/* PLATFORM ROAS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Platform ROAS: what Meta or Google reports on its own</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            This is the ROAS shown inside Ads Manager or Google Ads itself:
            attributed revenue from that platform&apos;s own model, divided by
            that platform&apos;s own spend. It only counts orders that platform&apos;s
            attribution decided to credit to itself, using its own window
            and model. It&apos;s the least reliable of the three for judging
            total business impact, because it was never designed to
            represent anything beyond that platform&apos;s own view.
          </p>
        </Reveal>
      </section>

      {/* BLENDED ROAS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Blended ROAS: combined attributed revenue against combined spend</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Blended ROAS adds Meta and Google&apos;s attributed revenue
              together, then divides that by their combined spend (revenue ÷
              spend, the same direction as any ROAS calculation). It&apos;s a
              step closer to reality, but it inherits a problem from both
              platforms:
              because Meta and Google each independently attribute some of
              the same orders to themselves, simply adding their reported
              revenue together double-counts the overlap. Blended ROAS
              calculated this way is still usually inflated, just less
              inflated than either platform&apos;s number alone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRUE ROAS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">True ROAS: actual Shopify revenue against total ad spend</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            &quot;True ROAS&quot; isn&apos;t a term Meta or Google defines. It&apos;s how we
            refer to stepping outside platform attribution entirely: actual
            Shopify revenue for a comparable period, net of refunds, with
            discounts and tax treated consistently, divided by total ad
            spend across every channel (revenue ÷ spend, same as any ROAS
            figure, just with a different revenue number underneath it). It
            doesn&apos;t try to credit specific orders to specific ads. It
            answers a plainer question: for what you spent on advertising,
            how much did the store actually take in. Calculated this way,
            it&apos;s functionally the same figure as MER, covered in more
            detail on the MER vs ROAS page.
          </p>
        </Reveal>
      </section>

      {/* WHAT MOVES THE NUMBER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Refunds, discounts, tax and revenue windows</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Even &quot;actual Shopify revenue&quot; isn&apos;t a single obvious figure.
              Gross sales, net sales after discounts and refunds, and
              revenue including tax and shipping can each tell a different
              ROAS story from the same underlying orders. A refund processed
              two weeks after the sale rarely gets reflected back into
              platform-reported ROAS at all, but it should reduce true ROAS
              if you&apos;re calculating it from net revenue. Decide which
              revenue figure you&apos;re using and apply it consistently. Mixing
              gross platform numbers against net Shopify numbers is a common
              way the comparison gets distorted without anyone noticing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT ATTRIBIX SHOWS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What Attribix shows instead</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Attribix combines Meta and Google spend into a blended ROAS
            figure alongside each platform&apos;s own reported number, so the
            gap between them is visible instead of something you&apos;d only
            notice by reconciling spreadsheets manually. True ROAS (your
            full Shopify revenue, ad-attributed or not, against total
            spend) is something you calculate from those numbers rather
            than a single metric Attribix labels for you.
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
              <Link href="/tools/roas-calculator" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                ROAS calculator
              </Link>
            </li>
            <li>
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution software
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See your blended ROAS</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and ad accounts to compare blended and
            platform-reported ROAS against actual Shopify revenue.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
