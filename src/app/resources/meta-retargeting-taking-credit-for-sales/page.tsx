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
  headline: "Meta Retargeting Is Taking Credit for Too Many Sales: What to Do",
  description:
    "High retargeting ROAS often reflects warm shoppers who were already likely to buy, not incremental revenue. How to spot over-attribution and set a sensible budget split.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-retargeting-taking-credit-for-sales" },
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
      name: "Meta Retargeting Taking Credit for Sales",
      item: "https://www.attribix.app/resources/meta-retargeting-taking-credit-for-sales",
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
              { label: "Retargeting Taking Credit for Sales" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Retargeting Is Taking Credit for Too Many Sales: What to Do
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Retargeting campaigns often have the best ROAS in an account.
            That does not necessarily mean they are the best place to put
            the next dollar.
          </p>
        </Reveal>
      </section>

      {/* WARM AUDIENCES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <p className="text-white/60 leading-relaxed text-sm">
            Warm audiences contain people who already visited, added to
            cart, searched for the brand or purchased before. Many of them
            would have had a high probability of buying without another ad.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBUTION VS CAUSATION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution is not the same as causation</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If a shopper adds a product to cart, sees a retargeting ad
              that evening and completes the order the next morning, Meta
              may attribute the purchase. The ad may have helped. It may
              also have simply appeared during a journey that was already
              going to end in a sale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SIGNS OF OVER-CREDIT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Signs retargeting may be over-credited</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Look for: extremely high reported ROAS compared with the rest
            of the business; small audiences with high frequency; large
            overlap with email/SMS flows; returning customers dominating
            reported purchases; total store revenue barely changing as
            retargeting spend increases.
          </p>
        </Reveal>
      </section>

      {/* TEST THE WIDER BUSINESS EFFECT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test the wider business effect</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Instead of only asking what Meta reports, compare periods,
              geographies or controlled audience groups where possible.
              Does blended efficiency improve? Does overall purchase volume
              increase? Are more customers completing carts?
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              You may find that retargeting is useful but cannot absorb
              unlimited budget.
            </p>
          </Reveal>
        </div>
      </section>

      {/* REDUCE DEPENDENCY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Reduce dependency, not necessarily the campaign</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The answer is rarely &ldquo;turn off all retargeting.&rdquo;
            Use it intentionally for reminders, objections, product proof
            and offers, but keep enough budget focused on creating new
            demand.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/should-you-retarget-website-visitors-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you retarget website visitors on Meta Ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-much-meta-ads-budget-retargeting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much Meta Ads budget should go to retargeting?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure how much of your revenue is truly incremental?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If retargeting is claiming a large share of your Shopify
            revenue and you are unsure how much is truly incremental, send
            us an inquiry. We can review the attribution and budget split.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
