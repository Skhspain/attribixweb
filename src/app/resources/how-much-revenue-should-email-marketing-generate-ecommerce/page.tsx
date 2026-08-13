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
  headline: "How Much Revenue Should Email Marketing Generate for a Shopify Store?",
  description: "There is no universal healthy percentage of revenue email 'should' generate. What a high or low share can actually mean, and how to judge program health with Shopify as the revenue anchor.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-much-revenue-should-email-marketing-generate-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Email revenue benchmark", item: "https://www.attribix.app/resources/how-much-revenue-should-email-marketing-generate-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Email revenue benchmark" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How much revenue should email marketing generate for a Shopify store?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There is no healthy universal percentage of revenue that
            &quot;should&quot; come from email. A store selling repeat-purchase
            consumables can generate a much larger email share than a store
            selling products customers buy once every five years.
          </p>
        </Reveal>
      </section>

      {/* CUSTOMER BASE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Email revenue depends on the customer base</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A mature brand with a large list and many returning customers
            naturally has more email opportunity than a new store acquiring
            mostly first-time buyers. A subscription brand with years of
            customer history can generate a large share of sales through
            email; a new furniture store may rely much more heavily on paid
            acquisition and generate fewer repeat purchases.
          </p>
        </Reveal>
      </section>

      {/* HIGH PERCENTAGE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A high percentage can mean several things</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>It might indicate:</p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
                <li>Excellent retention</li>
                <li>A mature list</li>
                <li>Strong flows</li>
                <li>Low new-customer acquisition</li>
                <li>Generous attribution windows</li>
                <li>Dependence on discounts</li>
              </ul>
              <p>Only the first three are obviously positive.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOW PERCENTAGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A low percentage is not automatically weak</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            A rapidly growing store can add so much new paid revenue that
            email&apos;s percentage falls even while email revenue itself
            increases.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBUTION INFLATES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution can inflate the percentage</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Klaviyo and other email tools attribute revenue according to
                their own windows and interaction rules. A customer can click
                an email, later click a Meta or Google ad and be claimed by
                multiple platforms.
              </p>
              <p>
                So &quot;30% of revenue from email&quot; does not necessarily
                mean email created 30% of store demand incrementally.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAM HEALTH */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Track absolute and relative performance</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Useful metrics include:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Revenue per recipient</li>
              <li>Flow revenue and campaign revenue, tracked separately</li>
              <li>Unsubscribe / spam rate</li>
              <li>List growth</li>
              <li>Repeat purchase rate</li>
              <li>Incremental lift where testable</li>
              <li>Total Shopify revenue growth</li>
            </ul>
            <p>
              Use the percentage to understand the business mix, not as a
              target in isolation.
            </p>
          </div>
        </Reveal>
      </section>

      {/* SHOPIFY ANCHOR */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use Shopify as the total revenue anchor</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Email-attributed revenue should be interpreted inside actual
                Shopify sales, not added on top of Meta and Google attributed
                revenue.
              </p>
              <p>
                The objective is not to reach a benchmark percentage. It is
                to use email profitably without exhausting the list or
                stealing credit from every other channel.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/klaviyo-revenue-too-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Klaviyo revenue looks too high: is email taking too much credit?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-vs-klaviyo-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify vs Klaviyo revenue doesn&apos;t match: why?
              </Link>
            </li>
            <li>
              <Link href="/resources/measure-email-marketing-true-impact-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to measure the true impact of email marketing
              </Link>
            </li>
            <li>
              <Link href="/resources/ad-platforms-report-more-revenue-than-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Meta and Google both claim the same Shopify sale
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">See what email is really contributing</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If email, Meta and Google all claim a large share of the same
            Shopify revenue, send us an inquiry. We can help reconcile the
            attribution.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
