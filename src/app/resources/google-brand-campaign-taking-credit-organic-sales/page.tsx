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
  headline: "Is Your Google Ads Brand Campaign Taking Credit for Organic Sales?",
  description: "Would the shopper have clicked the organic listing underneath and purchased anyway?",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-brand-campaign-taking-credit-organic-sales" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Brand campaign vs organic", item: "https://www.attribix.app/resources/google-brand-campaign-taking-credit-organic-sales" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Brand campaign vs organic" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Is your Google Ads brand campaign taking credit for organic sales?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A branded search campaign can report enormous ROAS and still
            create relatively little incremental revenue. That is because
            people searching your brand often intended to visit you
            already.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What the ad platform sees</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A shopper searches your brand, clicks the ad and buys. Google
            Ads can reasonably attribute the conversion to that click.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What the business needs to know</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Would the shopper have clicked the organic listing directly
              underneath and purchased anyway? That is the incrementality
              question.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at total search behaviour</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Compare paid brand clicks with organic branded traffic, total
            branded sessions and Shopify sales. If paid clicks rise while
            organic branded clicks fall by a similar amount, some
            cannibalization may be happening. Competitor ads, shopping
            modules and mobile SERP layouts can complicate the picture,
            which is why simple assumptions are risky.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep brand separate in reporting</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A Google account where brand delivers 1,500% ROAS and
              non-brand delivers 250% can look excellent when blended. If
              your goal is new-customer growth, those categories should
              not be interpreted as the same thing. Brand advertising may
              still be worthwhile — just do not confuse capturing existing
              demand with creating all of it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-you-bid-on-your-brand-name-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify stores bid on their own brand name?</Link></li>
            <li><Link href="/resources/google-ads-brand-vs-non-brand-budget" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How much budget should go to brand vs non-brand Google Ads?</Link></li>
            <li><Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify ROAS tracking</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Suspect branded search is doing most of the work?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry. We can separate brand capture from
            non-brand acquisition and measure the account more honestly.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
