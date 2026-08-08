"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ProductCTA } from "@/components/marketing/CTAGroup";

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Calculate True ROAS on Shopify",
  description: "Platform ROAS vs. blended ROAS vs. true ROAS, and what actually separates them — cross-channel overlap, refunds, discounts and revenue windows.",
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
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

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "True ROAS" }]} />
          <Eyebrow>Measurement</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to calculate true ROAS on Shopify
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            "Platform ROAS," "blended ROAS" and "true ROAS" get used
            interchangeably, but they're three different calculations that
            can produce three noticeably different numbers from the same
            spend and the same orders.
          </p>
        </Reveal>
      </section>

      {/* PLATFORM ROAS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Platform ROAS: what Meta or Google reports on its own</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            This is the ROAS shown inside Ads Manager or Google Ads itself —
            attributed revenue from that platform's own model, divided by
            that platform's own spend. It only counts orders that platform's
            attribution decided to credit to itself, using its own window
            and model. It's the least reliable of the three for judging
            total business impact, because it was never designed to
            represent anything beyond that platform's own view.
          </p>
        </Reveal>
      </section>

      {/* BLENDED ROAS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Blended ROAS: combining spend against attributed revenue</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Blended ROAS adds Meta and Google spend together and divides by
              their combined attributed revenue. It's a step closer to
              reality, but it inherits a problem from both platforms:
              because Meta and Google each independently attribute some of
              the same orders to themselves, simply adding their reported
              revenue together double-counts the overlap. Blended ROAS
              calculated this way is still usually inflated — just less
              inflated than either platform's number alone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRUE ROAS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">True ROAS: total ad spend against actual Shopify revenue</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            True ROAS steps outside platform attribution entirely: total ad
            spend across every channel, divided by actual Shopify revenue
            for a comparable period — net of refunds, with discounts and tax
            treated consistently. It doesn't try to credit specific orders
            to specific ads. It answers a plainer question: for what you
            spent on advertising, how much did the store actually take in.
            That's closer to what MER measures, covered in more detail on
            the MER vs ROAS page.
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
              Even "actual Shopify revenue" isn't a single obvious figure.
              Gross sales, net sales after discounts and refunds, and
              revenue including tax and shipping can each tell a different
              ROAS story from the same underlying orders. A refund processed
              two weeks after the sale rarely gets reflected back into
              platform-reported ROAS at all, but it should reduce true ROAS
              if you're calculating it from net revenue. Decide which
              revenue figure you're using and apply it consistently — mixing
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
            Attribix combines Meta and Google spend with net Shopify revenue
            and shows blended ROAS and true ROAS alongside each platform's
            own reported number — so the gap between them is visible, rather
            than something you'd only notice by reconciling spreadsheets
            manually.
          </p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold">See your blended and true ROAS</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and ad accounts to compare platform-reported
            ROAS against actual Shopify revenue.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
