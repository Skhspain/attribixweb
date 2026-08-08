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
    q: "Can I just use CAPI and drop the Pixel?",
    a: "Technically yes, but Meta's own guidance is to run both — the Pixel still contributes browser-side signals like browsing behavior that CAPI alone doesn't replicate, and having both gives you two independent paths for the same event.",
  },
  {
    q: "Does CAPI need the customer's consent?",
    a: "Yes. CAPI changes how an event reaches Meta, not whether you're allowed to send it. If a customer hasn't consented to tracking, the corresponding server event shouldn't be sent either.",
  },
  {
    q: "What happens if I don't deduplicate?",
    a: "Meta counts the browser and server events as two separate purchases, inflating your reported conversions and usually confusing automated bidding, which optimizes toward a number that doesn't match reality.",
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
  headline: "Meta Pixel vs Conversions API for Shopify",
  description: "What the Pixel sees, what CAPI recovers, and how event_id deduplication keeps them from double-counting.",
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-pixel-vs-capi-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Meta Pixel vs Conversions API", item: "https://www.attribix.app/resources/meta-pixel-vs-capi-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Pixel vs CAPI" }]} />
          <Eyebrow>Meta Ads Tracking</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Pixel vs Conversions API for Shopify
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The Pixel and the Conversions API aren't competing options —
            they're two different routes for the same event, each catching
            what the other misses. The question isn't which one to use. It's
            how to run both without counting the same purchase twice.
          </p>
        </Reveal>
      </section>

      {/* PIXEL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What the Pixel sees</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The Meta Pixel is JavaScript running in the customer's browser.
            It fires when a page loads or an action happens — a product
            view, an add-to-cart, a purchase — and sends that event straight
            from the browser to Meta. It's fast to set up and gives Meta
            direct browser-side signal, but it only works if the browser
            actually lets the request through.
          </p>
        </Reveal>
      </section>

      {/* WHY IT MISSES THINGS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Where browser tracking breaks down</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Ad blockers stop the Pixel request outright. Safari's Intelligent
              Tracking Prevention trims how long identifiers survive. A slow
              connection can mean the customer completes checkout and closes
              the tab before the purchase event finishes firing. None of these
              are edge cases — on iOS traffic in particular, browser-side
              purchase tracking commonly misses a meaningful share of real
              orders, and that share isn't visible anywhere in Ads Manager;
              it just looks like the ad performed worse than it did.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAPI */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What CAPI adds</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The Conversions API sends the same kind of event — a purchase, a
            lead — directly from your server to Meta, bypassing the
            browser entirely. It doesn't care about ad blockers or cookie
            lifespan, because it never touches the customer's browser. It
            depends instead on your server actually knowing the order
            happened, which for a Shopify store means firing it from an
            order webhook or a checkout completion event.
          </p>
        </Reveal>
      </section>

      {/* DEDUP */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Running both without double-counting</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If the Pixel fires for a purchase and the server also fires a
              CAPI event for the same purchase, Meta will count two sales
              unless it's told otherwise. The fix is a shared{" "}
              <code className="text-cyan-300">event_id</code> — the same
              identifier attached to both the browser and server event for
              that order. Meta uses it to recognize the pair and count the
              purchase once. Skip this and duplicate purchases in Ads
              Manager is the most common symptom.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONSENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">CAPI doesn't get around consent</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            It's tempting to think of server-side tracking as a way past
            browser-based tracking restrictions. It isn't. CAPI changes the
            route data travels — server to server instead of browser to
            server — not whether you're allowed to send it. A customer who
            declined tracking consent should be excluded from both the
            Pixel and the server-side event, the same way they would be
            excluded from any other tracking method.
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
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/fix-duplicate-meta-purchases-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to fix duplicate purchases in Meta Ads
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-event-match-quality-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Event Match Quality explained
              </Link>
            </li>
            <li>
              <Link href="/server-side-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify server-side tracking
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See your Pixel and CAPI coverage</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and Meta account to see which purchases are
            landing through the Pixel, the server event, or neither.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
