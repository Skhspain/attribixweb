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
  headline: "How Long Should You Let Meta Ads Run Before Making Changes?",
  description:
    "Why the right waiting period depends on data volume, not the clock, and how to tell patience from passivity.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-long-should-meta-ads-run-before-changes" },
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
      name: "How Long to Let Meta Ads Run",
      item: "https://www.attribix.app/resources/how-long-should-meta-ads-run-before-changes",
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
              { label: "How Long to Let Meta Ads Run" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Long Should You Let Meta Ads Run Before Making Changes?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A Meta campaign can look terrible after a few hours and
            perfectly healthy three days later. The opposite also happens.
            That is why changing campaigns too quickly is one of the
            easiest ways to make paid social harder than it needs to be.
          </p>
          <p className="mt-4 text-lg text-white/65 max-w-xl leading-relaxed">
            There is no universal rule such as &ldquo;never touch an ad
            for seven days.&rdquo; The right waiting period depends on how
            much data the campaign is collecting. An account spending $50
            a day on a $150 product learns at a very different speed from
            an account spending $5,000 a day on a $40 product.
          </p>
        </Reveal>
      </section>

      {/* DATA NOT CLOCK */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with the amount of useful data, not the clock</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Before making a major change, look at what has actually
            happened. Has the campaign produced enough landing-page
            visits, add-to-carts, checkouts and purchases to show a
            pattern? If the answer is no, you may simply be reacting to
            noise.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Suppose your target CPA is $40 and an ad set has spent $18
            without a purchase. That tells you very little. If it has
            spent $250 without a purchase while comparable ads are
            converting, that is a different situation. For a closer look
            at what &ldquo;enough data&rdquo; actually means, see{" "}
            <Link href="/resources/how-much-data-does-meta-ads-need" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how much data Meta ads need before you can judge performance
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* SMALL CHANGES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Small changes can create big interpretation problems</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Budget edits, new creatives, targeting changes and
              conversion-event changes can alter delivery. If you change
              several things at once, you also lose the ability to
              understand what caused the next result.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              For a new campaign, we would normally avoid making
              unnecessary edits during the earliest delivery period unless
              something is clearly wrong: broken links, incorrect
              geography, bad tracking, an accidental budget, rejected
              products or obviously poor traffic.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTERVENE EARLIER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When should you intervene earlier?</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            You do not need to &ldquo;let it learn&rdquo; while money is
            being wasted for an obvious reason. Check immediately if: the
            landing page is broken; purchases are happening in Shopify but
            Meta is not recording them; the wrong country or audience is
            receiving the ads; CPM or CPC is wildly outside the
            account&apos;s normal range; the creative has a clear error;
            the campaign is optimizing for the wrong event. If Shopify
            orders and Meta&apos;s reported purchases have already drifted
            apart, that is worth ruling out before you touch anything
            else. See{" "}
            <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Meta CAPI for Shopify
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* BETTER RULE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A better rule</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Give a campaign enough time to collect meaningful data, but
              do not confuse patience with passivity. Watch the funnel. If
              clicks arrive but product engagement is poor, the problem
              may be the traffic or landing page. If checkouts happen but
              purchases do not, waiting another week will not fix a
              checkout issue.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              The goal is not to avoid changes. It is to make changes for
              a reason you can explain.
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
              <Link href="/resources/how-much-data-does-meta-ads-need" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much data does Meta Ads need before you can judge performance?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-learning-phase-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads learning phase explained
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-event-match-quality-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Event Match Quality for Shopify explained
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if it needs more time or an intervention?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are unsure whether a Meta campaign needs more time or
            actually needs intervention, send us an inquiry. We can
            review the campaign, funnel and tracking before you make
            changes that may reset useful momentum.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
