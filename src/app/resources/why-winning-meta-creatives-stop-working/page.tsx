"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Winning Meta Ad Creatives Stop Working",
  description:
    "Fatigue is only one explanation. Why a winning Meta creative can decline — repetition, a shifting market, a weakening website, or a tracking change — and how to tell them apart.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/why-winning-meta-creatives-stop-working",
  },
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
      name: "Why Winners Stop Working",
      item: "https://www.attribix.app/resources/why-winning-meta-creatives-stop-working",
    },
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
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Why Winners Stop Working" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Winning Meta Ad Creatives Stop Working
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A winning creative can stop working because the audience
            changed, the auction changed, the offer changed or the ad simply
            lost its ability to earn attention. &ldquo;Fatigue&rdquo; is only
            one explanation.
          </p>
        </Reveal>
      </section>

      {/* REPETITION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Repetition is the obvious cause</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            As more of the available audience sees the same creative
            repeatedly, response can weaken. Frequency rises, CTR can fall
            and CPA may increase.
          </p>
        </Reveal>
      </section>

      {/* MARKET MOVES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The market can move underneath the ad</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Competitors launch promotions. Seasonality changes demand.
              Your product price increases. Shipping gets slower. A creative
              that was persuasive in May may be less competitive in
              November.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WEBSITE GETS WORSE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The ad may still be good while the website gets worse</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If CTR stays stable but purchase conversion falls, the creative
            may not be the problem at all. Check stock, page speed, price,
            checkout and traffic mix.
          </p>
        </Reveal>
      </section>

      {/* MEASUREMENT CAN CHANGE TOO */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measurement can change too</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A tracking deployment can make Meta report fewer purchases
              even when Shopify sales remain healthy. Replacing the
              creative will not repair attribution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRESERVE THE LEARNING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Preserve the learning from the winner</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            When you retire or reduce a winning creative, document why it
            probably worked. Keep the angle, proof and customer insight.
            Those can inform the next generation.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            A good creative system does not try to make one ad immortal. It
            continuously converts successful ideas into new executions
            before the account becomes dependent on a single asset.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/how-to-tell-meta-ad-fatigue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How do you know when a Meta ad is fatigued?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-long-does-meta-ad-creative-last" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How long does a Meta ad creative usually last?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-many-variations-winning-meta-ad" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many variations of a winning Meta ad should you make?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads clicks but no sales? Diagnose it first
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if it&apos;s the creative or something else?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your former Meta winners are declining and every replacement
            performs worse, send us an inquiry. We can determine whether the
            constraint is creative or somewhere else in the funnel.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
