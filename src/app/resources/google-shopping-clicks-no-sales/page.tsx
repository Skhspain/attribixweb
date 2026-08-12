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
    q: "How is this different from Performance Max not converting?",
    a: "This is about standalone Shopping campaign mechanics specifically: feed data, price shown in the ad, and query-to-product matching. Performance Max wraps Shopping inventory into a broader automated campaign with additional signals and asset groups, which fails in some different ways too. If you're running PMax rather than standalone Shopping, see the Performance Max diagnosis piece instead.",
  },
  {
    q: "Does a low click-through rate on Shopping ads mean the same thing as on Search ads?",
    a: "Not exactly. Shopping ads already show price and image before the click, so people who click have generally already accepted the price. The drop-off after a click is more often about the landing page not matching, or something changing between the ad and the site (like a lower stock message).",
  },
  {
    q: "Should I check tracking before feed and price?",
    a: "Yes, briefly: confirm purchase conversions are actually being recorded before spending time on feed and pricing changes. If tracking is broken, no amount of feed or price optimization will show up as improved conversions.",
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
  headline: "Google Shopping Getting Clicks but No Sales",
  description: "What to check when Shopping campaigns spend without converting.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-shopping-clicks-no-sales" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Google Shopping clicks, no sales", item: "https://www.attribix.app/resources/google-shopping-clicks-no-sales" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google Shopping, no sales" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Shopping getting clicks but no sales
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Shopping ads already show the price and a product image before
            anyone clicks, which changes the diagnosis compared to a
            Search or Meta ad. Someone who clicks has already accepted the
            price they saw, so the drop-off usually happens somewhere
            between that click and the product page matching up.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Confirm the purchase conversion is actually recording first</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Before touching the feed or pricing, place a test order and
            confirm the purchase conversion shows up correctly in Google
            Ads. If tracking is broken, Shopping can look like it&apos;s
            not converting when it actually is, and no feed or price
            change will fix that.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Query-to-product relevance</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Shopping matches search queries to your product feed
              automatically, without you choosing keywords directly. Check
              the search terms report for the campaign. If you&apos;re
              showing up for queries that are only loosely related to what
              you sell, the traffic itself has weak intent no matter how
              good the landing page is. Negative keywords work in Shopping
              campaigns the same way they do in Search, and are worth
              reviewing regularly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Feed data quality</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The title, image and category data in your product feed
            determine which queries you show up for in the first place. A
            generic or keyword-thin title can get you matched to the wrong
            searches; a poor product image can get the click but signal
            low quality before someone even reaches your site. GTINs,
            brand data and category mapping all affect how well Google can
            place your product in front of the right searcher.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Price and shipping shown in the ad vs at checkout</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Unlike a text ad, Shopping shows your price directly next to
              competitors&apos; prices before the click. If your price is
              genuinely uncompetitive for a comparable product, clicks
              will still happen (people compare visually), but conversion
              stays low. Shipping cost and delivery time shown in the
              listing (or missing from it) matter the same way; a shopper
              who sees a lower price elsewhere including shipping isn&apos;t
              coming back to buy from you at checkout.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Landing page consistency</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The product page someone lands on should show the same
            product, price and availability as the Shopping listing they
            clicked. A price that changed since the feed last synced, or a
            product that&apos;s actually out of stock, breaks the trust
            the click was built on and sends the shopper elsewhere.
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
            <li><Link href="/resources/performance-max-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max spending but getting no sales</Link></li>
            <li><Link href="/resources/google-merchant-center-product-disapproved" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Merchant Center products disapproved</Link></li>
            <li><Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads conversion tracking for Shopify</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want us to look at the feed and account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry and we can review Shopping performance,
            feed quality and tracking together.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
