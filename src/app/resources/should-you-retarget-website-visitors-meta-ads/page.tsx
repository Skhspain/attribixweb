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
  headline: "Should You Retarget Website Visitors on Meta Ads?",
  description:
    "The attribution trap behind impressive retargeting ROAS, when dedicated retargeting makes sense, and how to avoid drowning a warm audience.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/should-you-retarget-website-visitors-meta-ads" },
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
      name: "Should You Retarget Website Visitors",
      item: "https://www.attribix.app/resources/should-you-retarget-website-visitors-meta-ads",
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
              { label: "Should You Retarget Website Visitors" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Retarget Website Visitors on Meta Ads?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Retargeting makes intuitive sense. Someone visited your store,
            so showing that person another ad should be more efficient
            than advertising to a stranger. Sometimes it is. But
            retargeting can also make an account look better than the
            marketing really is.
          </p>
        </Reveal>
      </section>

      {/* WHY IT CONVERTS WELL */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why retargeting usually converts well</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Website visitors already know something about the brand.
            Product viewers and cart users are even further down the
            buying journey. Their conversion rate is naturally likely to
            be higher than a completely cold audience.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            A reminder, review, product demonstration or
            objection-handling ad can help move those people toward
            purchase.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBUTION TRAP */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The attribution trap</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The danger is assuming every retargeted purchase was caused
              by the retargeting campaign.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              A customer might: discover you through Google; add a
              product to cart; receive a Meta retargeting impression;
              return through email; buy. Meta may receive credit, but that
              does not prove the retargeting impression created the
              order.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              This is why retargeting campaigns often show impressive
              platform ROAS. They are advertising to people who were
              already unusually likely to buy. See{" "}
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                why Shopify and Meta sales numbers don&apos;t match
              </Link>{" "}
              for how attribution windows and reported credit diverge from
              real orders more broadly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHEN IT MAKES SENSE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When dedicated retargeting makes sense</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            It can be particularly useful when: the consideration period
            is longer; products need education; customers compare
            alternatives; cart abandonment is high; you have specific
            creative for objections or reassurance.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            For small stores, an overly fragmented retargeting campaign
            can be unnecessary. Modern automated campaigns may already
            reach warm users as part of overall delivery, the same
            question that comes up when deciding between{" "}
            <Link href="/resources/meta-ads-broad-vs-interest-targeting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              broad and interest targeting
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* DON'T DROWN AUDIENCE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t drown your warm audience</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Watch frequency and audience size. A small retargeting pool
              with a large budget can show the same ads repeatedly and
              claim a disproportionate amount of revenue.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Judge retargeting on more than reported ROAS. Ask whether
              total store sales, blended efficiency and new-customer
              acquisition improve when the strategy is active.
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
              <Link href="/resources/how-much-meta-ads-budget-retargeting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much Meta Ads budget should go to retargeting?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-frequency-too-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                When Meta Ads frequency is too high
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta sales numbers don&apos;t match
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure how much incremental value retargeting creates?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your retargeting campaign looks fantastic but you are not
            sure how much incremental value it actually creates, contact
            us. We can review the attribution alongside your Shopify
            results.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
