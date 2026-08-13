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
    q: "My CTR looks completely normal. Why isn't anyone buying?",
    a: "CTR only tells you the ad copy and creative got someone to click. It says nothing about what happens after they land, which is where most no-sales problems actually live. Check landing page views, add-to-cart rate, and checkout completion separately before touching the ad itself.",
  },
  {
    q: "How do I know if this is a tracking problem instead of a real sales problem?",
    a: "Compare Shopify's order count and revenue for the period directly against what Meta Ads Manager is reporting. If Shopify shows real orders that Meta simply isn't crediting to itself, that's a measurement gap, not a conversion problem: the sales are happening, Meta just isn't seeing or attributing them correctly.",
  },
  {
    q: "How much click volume do I need before this analysis means anything?",
    a: "A handful of clicks isn't enough to read funnel ratios reliably: a couple of add-to-carts or one abandoned checkout can swing the percentages wildly. Look at this over at least a few hundred clicks, or a week or two of spend, before drawing conclusions.",
  },
  {
    q: "Should I pause the campaign while I figure this out?",
    a: "Not automatically. A brief pause doesn't necessarily reset an ad set's learning, but pausing for an extended period (Meta's current guidance points to roughly a week or more) can cause it to re-enter the learning phase once reactivated. Unless spend is clearly being wasted at a rate you can't tolerate, it's usually better to keep it running at the same budget while you diagnose, then make one deliberate change once you know where the problem is.",
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
  headline: "Meta Ads Getting Clicks but No Sales? Diagnose the Problem Before Changing Your Ads",
  description:
    "A step-by-step way to find where clicks stop turning into Shopify orders (ad-page mismatch, weak offer, checkout friction, or a tracking problem) before you touch the campaign.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ads-clicks-no-sales" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Meta Ads Clicks but No Sales",
      item: "https://www.attribix.app/resources/meta-ads-clicks-no-sales",
    },
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
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Meta Ads Clicks but No Sales" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads Getting Clicks but No Sales? Diagnose the Problem Before Changing Your Ads
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            If Meta is generating clicks but Shopify isn&apos;t generating
            orders, don&apos;t start by rewriting ad copy or swapping
            creative. Work out where in the funnel the clicks actually stop
            converting first. The fix looks completely different depending
            on whether the problem is the ad, the landing page, the offer,
            checkout friction, or how the sale is being measured.
          </p>
        </Reveal>
      </section>

      {/* THE FUNNEL APPROACH */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Work down the funnel, not across the campaign</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            &ldquo;Clicks but no sales&rdquo; isn&apos;t one problem, it&apos;s
            a symptom that a handful of different problems produce
            identically. Rewriting the ad copy fixes a mismatch between the
            ad and the landing page. It does nothing for a checkout that&apos;s
            leaking customers at the shipping-cost reveal, and it does
            nothing at all if the real issue is that Meta isn&apos;t
            correctly recording orders that are actually happening in
            Shopify. The only way to tell these apart is to walk down the
            funnel stage by stage and see exactly where the ratio between
            one step and the next collapses.
          </p>
        </Reveal>
      </section>

      {/* CLICKS TO LANDING PAGE VIEWS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 1: clicks vs. landing page views</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Meta counts a link click the moment someone taps the ad, before
              the page has necessarily loaded. If landing page views are
              running noticeably lower than link clicks, the traffic is
              leaving before it ever sees the product, usually a slow page,
              a broken redirect, an app conflict on the storefront, or, on
              older campaigns, low-quality clicks from placements that
              generate taps without real intent. If clicks and landing page
              views are close together, the page is loading fine for most
              visitors and the problem lives further down the funnel.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LPV TO ATC */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 2: landing page views vs. add-to-cart</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            This ratio is about whether what the visitor sees matches what
            the ad promised. Plenty of landing page views with very few
            add-to-carts usually means one of three things: the page doesn&apos;t
            deliver on the ad&apos;s claim (different product, different
            price, different offer than what got the click), the price or
            positioning doesn&apos;t make sense to someone seeing the brand
            for the first time, or there&apos;s a trust gap: no reviews
            visible, thin product photography, no clear return policy. A
            strong add-to-cart rate here rules out ad-page mismatch and
            points the investigation further down the funnel.
          </p>
        </Reveal>
      </section>

      {/* ATC TO CHECKOUT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 3: add-to-cart vs. checkout initiated</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              People who add a product to the cart have already decided they
              want it. This is the stage where cart-level friction shows up.
              Shipping costs only revealed at checkout, a forced account
              creation step, or a cart page that&apos;s slow or confusing on
              mobile all show up here as a drop between add-to-cart and
              checkout initiation. If this ratio is strong, the product and
              price are both working and the remaining issue is at checkout
              itself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHECKOUT TO PURCHASE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Step 4: checkout initiated vs. purchase completed</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A customer who starts checkout is about as close to a sale as
            traffic gets, which makes drop-off here worth taking seriously.
            Common causes: a payment method the customer expected isn&apos;t
            available, a declined card with no clear retry path, an
            unexpected total once tax or shipping is added, or a checkout
            that simply feels untrustworthy at the exact moment someone is
            about to hand over card details. If Shopify&apos;s checkout
            analytics show healthy completion rates but Meta still isn&apos;t
            reporting the purchases, the problem has moved from the
            storefront to how the sale is being measured.
          </p>
        </Reveal>
      </section>

      {/* TRACKING CROSS-CHECK */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Before you conclude it&apos;s a real sales problem, check Shopify against Meta</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If Shopify orders are steady but Meta&apos;s reported purchases
              have dropped or gone missing, that&apos;s very often a
              measurement issue rather than a real drop in sales: an ad
              blocker stopping the Pixel, Safari&apos;s tracking limits
              trimming cookie lifespan, or a checkout event that stopped
              firing after a theme or app update. This is exactly the kind
              of gap that browser-only tracking is prone to, and it&apos;s
              why running server-side purchase events alongside the Pixel
              (Attribix connects to Shopify order webhooks to send both)
              closes most of it. See{" "}
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>{" "}
              for how that works, or{" "}
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                why Shopify and Meta sales numbers don&apos;t match
              </Link>{" "}
              for the full breakdown of causes.
            </p>

            <div className="mt-8">
              <DiagramFrame caption="Diagnostic funnel: the ratio that collapses tells you which cause to investigate.">
                <svg viewBox="0 0 600 260" className="w-full h-auto" role="img" aria-label="Funnel diagram showing clicks narrowing through landing page views, add to cart, checkout initiated, and purchase completed, with the likely cause labeled at each drop-off point.">
                  <rect x="10" y="10" width="130" height="40" rx="8" className="fill-white/5" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
                  <text x="75" y="34" textAnchor="middle" className="fill-white text-[11px] font-semibold">Clicks</text>

                  <rect x="10" y="70" width="130" height="40" rx="8" className="fill-white/5" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
                  <text x="75" y="94" textAnchor="middle" className="fill-white text-[11px] font-semibold">Landing views</text>

                  <rect x="10" y="130" width="130" height="40" rx="8" className="fill-white/5" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
                  <text x="75" y="154" textAnchor="middle" className="fill-white text-[11px] font-semibold">Add to cart</text>

                  <rect x="10" y="190" width="130" height="40" rx="8" className="fill-white/5" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
                  <text x="75" y="214" textAnchor="middle" className="fill-white text-[11px] font-semibold">Checkout started</text>

                  <text x="160" y="45" className="fill-white/40 text-[10px]">Page/redirect issue</text>
                  <text x="160" y="105" className="fill-white/40 text-[10px]">Ad-page mismatch, offer, trust</text>
                  <text x="160" y="165" className="fill-white/40 text-[10px]">Shipping cost, cart friction</text>
                  <text x="160" y="225" className="fill-white/40 text-[10px]">Payment, checkout trust</text>

                  <rect x="440" y="100" width="150" height="60" rx="10" className="fill-emerald-400/10" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
                  <text x="515" y="125" textAnchor="middle" className="fill-white text-[11px] font-semibold">Purchase completed</text>
                  <text x="515" y="142" textAnchor="middle" className="fill-white/50 text-[10px]">check vs. Meta-reported</text>

                  <line x1="140" y1="30" x2="440" y2="130" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="140" y1="90" x2="440" y2="130" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="140" y1="150" x2="440" y2="130" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="140" y1="210" x2="440" y2="130" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                </svg>
              </DiagramFrame>
            </div>
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
              <Link href="/resources/meta-ads-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads ROAS dropped suddenly: ads, website, or tracking?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-shows-sales-shopify-no-orders" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads shows sales but Shopify has no matching orders
              </Link>
            </li>
            <li>
              <Link href="/resources/good-ctr-low-cpc-no-sales-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Good CTR and low CPC but no sales: what it actually means
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta sales numbers don&apos;t match
              </Link>
            </li>
            <li>
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Still not sure what&apos;s causing it?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta, Google and Shopify are telling you different things,
            send us an inquiry. We can review the setup and help determine
            whether it&apos;s advertising performance, your website,
            tracking, or attribution.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
