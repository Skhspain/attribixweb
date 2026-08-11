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
  headline: "Should You Use Advantage+ Shopping Campaigns for Shopify?",
  description:
    "Where automated sales campaigns tend to work well, what they don't solve, and when more manual control still matters.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/advantage-plus-shopping-campaigns-shopify" },
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
      name: "Advantage+ Shopping for Shopify",
      item: "https://www.attribix.app/resources/advantage-plus-shopping-campaigns-shopify",
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
              { label: "Advantage+ Shopping for Shopify" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Use Advantage+ Shopping Campaigns for Shopify?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Meta&apos;s automated sales campaign options can be very
            effective for Shopify stores, but &ldquo;more automation&rdquo;
            is not automatically the same as &ldquo;better strategy.&rdquo;
            The right question is not whether Advantage+ is good. It is
            whether the campaign gives Meta strong enough inputs to make
            good decisions for your particular store.
          </p>
        </Reveal>
      </section>

      {/* WHERE IT WORKS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Where automation tends to work well</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Automated sales campaigns can be attractive when you already
            have: reliable purchase tracking; enough conversion history; a
            clear product or collection to promote; a steady supply of
            good creative; sensible budget relative to your sales volume.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            In that situation, reducing unnecessary audience restrictions
            can give the delivery system more room to find customers.
          </p>
        </Reveal>
      </section>

      {/* WHAT IT DOESN'T SOLVE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What automation does not solve</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              An automated campaign cannot repair a weak offer, slow
              product page or incorrect purchase event. It cannot make an
              uncompetitive product attractive just because the campaign
              type is newer.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              This is where advertisers sometimes misdiagnose the problem.
              They switch between manual and automated structures while
              the real issue is that landing-page conversion has fallen or
              the account has only three active creatives supporting a
              large budget. If purchase tracking itself is the weak link,
              see{" "}
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>{" "}
              before changing campaign structure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHEN CONTROL MATTERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When more control may still matter</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            There are cases where separate campaign structures are useful.
            You may need clearer control over markets, product groups,
            customer types, creative tests or budget allocation. An
            account with multiple countries, drastically different
            margins or separate product categories can have different
            needs from a one-product store.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Meta also changes campaign naming and automation options over
            time, so evaluate the current available controls rather than
            following an old &ldquo;ASC vs manual&rdquo; playbook blindly.
          </p>
        </Reveal>
      </section>

      {/* HOW TO DECIDE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">How to decide</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Run the decision through business questions: Is purchase
              tracking trustworthy? Is there enough creative variety? Does
              the website convert? Are products similar enough to share
              budget? Do you need strict control over geography or
              customer type? Can you measure actual Shopify outcomes
              independently of Meta&apos;s reported attribution?
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              If those foundations are solid, automated sales campaigns
              deserve testing. If the foundations are weak, changing
              campaign type is unlikely to rescue performance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/meta-ads-broad-vs-interest-targeting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads broad targeting vs interests: what works better for ecommerce?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-learning-phase-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads learning phase explained
              </Link>
            </li>
            <li>
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
            <li>
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Deciding how to structure Meta campaigns?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Want help deciding how to structure Meta campaigns for your
            Shopify store? Contact us and we can review the account,
            tracking and product mix.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
