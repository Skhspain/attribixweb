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
  headline: "How Many Creatives Does a Shopify Store Need for Meta Ads?",
  description:
    "Why creative volume tracks ad spend rather than catalog size, and how to build a production pace that avoids dependence on one ad.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-many-creatives-shopify-meta-ads" },
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
      name: "How Many Creatives You Need",
      item: "https://www.attribix.app/resources/how-many-creatives-shopify-meta-ads",
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
              { label: "How Many Creatives You Need" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Many Creatives Does a Shopify Store Need for Meta Ads?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The answer depends less on the size of your product catalogue
            than on how much money you are asking Meta to spend.
          </p>
          <p className="mt-4 text-lg text-white/65 max-w-xl leading-relaxed">
            Creative is inventory for the advertising system. The larger
            your audience exposure and budget, the faster that inventory
            can become repetitive.
          </p>
        </Reveal>
      </section>

      {/* SMALL ACCOUNT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A small account does not need a content factory</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If a Shopify store spends $100 a day, producing 50 new videos
            every month can be wasteful. Many creatives will never receive
            enough delivery to justify the production effort.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            The better goal is a steady pipeline of meaningful new ideas
            while proven ads stay active. Deciding how many of those ideas
            deserve simultaneous testing is a separate question. See{" "}
            <Link href="/resources/how-many-meta-ads-test-at-once" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how many Meta ads to test at once
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* LARGE SPEND */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Large spend changes the requirement</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              At $5,000 or $20,000 per day, Meta can exhaust narrow
              creative pools much faster. Larger budgets also justify
              testing more angles because small improvements can be
              economically meaningful.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Creative volume therefore tends to scale with:
            </p>
            <ul className="mt-3 space-y-1.5 text-white/60 text-sm list-disc list-inside">
              <li>Spend</li>
              <li>Audience size</li>
              <li>Campaign breadth</li>
              <li>Number of markets</li>
              <li>Number of products</li>
              <li>How quickly current winners fatigue</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* COUNT CONCEPTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Count concepts, not exports</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Ten videos made from the same script with different background
            music are not ten genuinely different creative ideas.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            A healthier library contains different reasons to buy:
          </p>
          <ul className="mt-3 space-y-1.5 text-white/60 text-sm list-disc list-inside">
            <li>Problem/solution</li>
            <li>Customer story</li>
            <li>Demonstration</li>
            <li>Comparison</li>
            <li>Founder explanation</li>
            <li>Review/proof</li>
            <li>Offer</li>
            <li>Use case</li>
          </ul>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Then each winning concept can produce several executions.
          </p>
        </Reveal>
      </section>

      {/* DEPENDENCE WARNING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The warning sign is dependence</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              If 70% of your Meta revenue depends on one creative that has
              been running for three months, you do not necessarily need
              to turn it off. You do need alternatives ready. Watching for
              the signs that a long-running winner is starting to wear
              out is part of that. See{" "}
              <Link href="/resources/how-often-change-meta-ad-creatives" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                how often to change Meta ad creatives
              </Link>
              .
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Creative supply is risk management as much as optimization.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              There is no universal &ldquo;12 creatives a month&rdquo;
              answer. Build a production pace that matches your spend and
              replaces successful ideas before the account is forced to
              depend on worn-out material.
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
              <Link href="/resources/how-many-meta-ads-test-at-once" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many Meta ads should you test at once?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-often-change-meta-ad-creatives" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How often should you change Meta ad creatives?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-to-tell-meta-ad-fatigue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to tell when a Meta ad has hit fatigue
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Build a creative pipeline that matches your spend</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are spending heavily on Meta but do not have a clear
            creative testing and refresh system, send us an inquiry. We
            can help connect creative production to campaign performance.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
