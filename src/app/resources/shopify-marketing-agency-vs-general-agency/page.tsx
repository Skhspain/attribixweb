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
    q: "Is a Shopify-specific agency always better than a generalist?",
    a: "No. If your main challenge is creative strategy, offer positioning, or top-of-funnel Meta prospecting, a good generalist agency with solid ecommerce experience on any platform can do that job well. Shopify-specific knowledge earns its keep on the technical layer — feed structure, checkout limitations, tracking setup — not on every part of the account.",
  },
  {
    q: "What's the single biggest technical difference Shopify creates?",
    a: "Checkout. Shopify locks down the default checkout for most stores, which rules out certain customizations and third-party checkout scripts that agencies used to running on WooCommerce or a custom cart might expect to have access to. Anyone proposing a checkout change should be asked directly whether it's actually possible on your current Shopify plan and checkout setup.",
  },
  {
    q: "Can a general agency learn Shopify's quirks on the job?",
    a: "Usually, yes — the learning curve is real but not enormous for a competent team. The risk isn't that it's unlearnable, it's that you're often the one paying (in slower setup, tracking mistakes, or feed errors) while they learn it on your account instead of a previous client's.",
  },
  {
    q: "Does Shopify Plus change any of this?",
    a: "Somewhat. Shopify Plus opens up checkout.liquid customization and script editor access that standard Shopify plans don't have, which changes what's technically possible for CRO and checkout-level tracking. An agency that's only worked on standard Shopify plans may not know what Plus unlocks, and vice versa.",
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
  headline: "Shopify Marketing Agency vs General Digital Marketing Agency: What Actually Matters",
  description:
    "What Shopify-specific expertise genuinely adds over a generalist digital marketing agency, and where the distinction stops mattering.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/shopify-marketing-agency-vs-general-agency" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Shopify vs General Marketing Agency", item: "https://www.attribix.app/resources/shopify-marketing-agency-vs-general-agency" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Shopify vs General Agency" }]} />
          <Eyebrow>Marketing &amp; Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Shopify Marketing Agency vs General Digital Marketing Agency
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The honest answer is that Shopify-specific knowledge matters for
            a fairly narrow but important slice of the work — the feed,
            the checkout, the tracking setup, the way Shopify reports
            revenue — and matters much less for creative strategy, media
            buying fundamentals, or offer positioning, where a good
            generalist is just as capable. The distinction is where those
            two categories fall, not which agency type is universally
            better.
          </p>
        </Reveal>
      </section>

      {/* WHAT DOESN'T CHANGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What doesn&apos;t actually change with Shopify</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Worth saying plainly: campaign strategy, audience targeting,
            creative testing, bid management fundamentals, and copywriting
            work basically the same whether the store runs on Shopify,
            WooCommerce, or a custom build. If an agency&apos;s pitch is
            entirely about &quot;we specialize in Shopify&quot; with nothing
            underneath it, that&apos;s marketing, not a real differentiator.
            The useful question isn&apos;t whether they say Shopify — it&apos;s
            whether they can speak to the specific technical points below
            without hand-waving.
          </p>
        </Reveal>
      </section>

      {/* FEED STRUCTURE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Product feed structure</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Shopify generates product data in a specific shape, and
              getting it into Google Merchant Center or Meta&apos;s catalog
              cleanly usually means understanding Shopify&apos;s variant
              system, metafields, and how collections map to product
              groups. An agency that&apos;s built feeds for Shopify stores
              before will recognize these issues on sight — a generalist
              coming from a different platform may spend real time (yours)
              rediscovering them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHECKOUT CONSTRAINTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Checkout constraints</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Shopify locks down its default checkout more than most other
            ecommerce platforms — you can&apos;t freely inject third-party
            scripts or restructure the flow the way you could on an
            open-cart system, unless you&apos;re on Shopify Plus with access
            to checkout extensibility and the script editor. This
            genuinely changes what&apos;s technically possible for CRO and
            for certain tracking setups. An agency used to unrestricted
            checkouts elsewhere may propose changes that simply aren&apos;t
            available on your plan, which wastes a planning cycle finding
            that out.
          </p>
        </Reveal>
      </section>

      {/* ANALYTICS QUIRKS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Shopify analytics and reporting quirks</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Shopify&apos;s built-in analytics attribute sales differently
              than GA4 or an ad platform&apos;s own reporting, and orders,
              returns, and partial refunds can shift revenue numbers after
              the fact in ways that surprise people who haven&apos;t worked
              inside Shopify&apos;s reporting before. Agencies familiar with
              this expect the discrepancy and know where to look. Agencies
              new to Shopify sometimes mistake it for a tracking bug, which
              leads to wasted time chasing a problem that isn&apos;t really
              there.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRACKING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Meta CAPI and Google conversion tracking, specifically on Shopify</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Setting up Meta&apos;s Conversions API or Google&apos;s Enhanced
            Conversions on Shopify usually means working through Shopify&apos;s
            checkout events, order webhooks, and (depending on the setup)
            the Shopify app ecosystem, rather than editing arbitrary
            server-side code the way you might on a custom stack. Knowing
            which of Shopify&apos;s native integrations to trust and which
            gaps still need a custom or app-based fix is a specific,
            learnable skill — and one that&apos;s easy to get subtly wrong in
            ways that don&apos;t surface until conversion counts start
            drifting from real orders.
          </p>
        </Reveal>
      </section>

      {/* MERCHANT CENTER, MARGIN, RETENTION, CRO */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The rest: Merchant Center, margin, retention, CRO</h2>
            <div className="text-white/60 leading-relaxed text-sm max-w-2xl space-y-4">
              <p>
                <strong className="text-white/80">Merchant Center integration.</strong>{" "}
                Whether it&apos;s wired through Shopify&apos;s native Google
                channel or a separate feed app changes how quickly product
                changes propagate and where feed errors need to be fixed.
              </p>
              <p>
                <strong className="text-white/80">AOV and margin-aware decisions.</strong>{" "}
                Shopify makes order-level margin data available (if
                cost-per-item is filled in) in a way that&apos;s useful for
                setting real target CPAs rather than guessing — an agency
                that never asks about your margins isn&apos;t using it.
              </p>
              <p>
                <strong className="text-white/80">Repeat purchase and retention thinking.</strong>{" "}
                Shopify&apos;s customer and order history makes cohort and
                repeat-purchase analysis straightforward if someone
                actually pulls the data — this shapes whether it makes
                sense to bid more aggressively than a first-purchase-only
                CPA would suggest.
              </p>
              <p>
                <strong className="text-white/80">CRO within theme constraints.</strong>{" "}
                Shopify themes vary widely in what they allow without
                custom development. An agency that understands Shopify
                theme architecture can tell you quickly whether a proposed
                landing page change is a five-minute edit or a developer
                project.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHEN GENERALIST IS FINE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When a generalist agency is genuinely fine</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If your account is mostly Search and Meta prospecting with no
            complex tracking needs, your feed is already clean and stable,
            and what you actually need is stronger creative and media
            strategy, Shopify-specific experience matters less than you&apos;d
            think. Plenty of strong generalist agencies run Shopify
            accounts well without ever calling themselves Shopify
            specialists. The distinction earns its weight specifically
            when tracking accuracy, feed health, or checkout-level changes
            are part of what&apos;s broken or what&apos;s being proposed.
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
              <Link href="/resources/when-to-hire-a-marketing-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                When should you hire a marketing agency
              </Link>
            </li>
            <li>
              <Link href="/resources/marketing-agency-vs-in-house" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Marketing agency vs building in-house
              </Link>
            </li>
            <li>
              <Link href="/resources/ecommerce-marketing-agency-cost" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What an ecommerce marketing agency costs
              </Link>
            </li>
            <li>
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution explained
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want the Shopify-specific parts handled for you?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            We manage Meta and Google Ads specifically for Shopify stores —
            feed, checkout constraints and tracking setup included, not
            bolted on afterward.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
