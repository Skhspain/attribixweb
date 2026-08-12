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
  headline: "What Is a Good Email Marketing Revenue Percentage for Ecommerce?",
  description: "There is no percentage every store should try to reach. What a high or low email revenue share can actually mean, and which metrics matter more than the headline number.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/good-email-revenue-percentage-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Good email revenue percentage", item: "https://www.attribix.app/resources/good-email-revenue-percentage-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Good email revenue percentage" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            What is a good email marketing revenue percentage for ecommerce?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There is no percentage every ecommerce store should try to
            reach. A subscription brand with years of customer history can
            generate a large share of sales through email. A new furniture
            store may rely much more heavily on paid acquisition and
            generate fewer repeat purchases.
          </p>
        </Reveal>
      </section>

      {/* HIGH PERCENTAGE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A high percentage can mean several things</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
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
      </section>

      {/* LOW PERCENTAGE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A low percentage is not automatically weak</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A rapidly growing store can add so much new paid revenue that
              email&apos;s percentage falls even while email revenue
              increases.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRACK PERFORMANCE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Track absolute and relative performance</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>Look at:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Email revenue dollars</li>
              <li>Revenue per recipient</li>
              <li>Flow/campaign split</li>
              <li>Repeat purchase rate</li>
              <li>Unsubscribe rate</li>
              <li>Total Shopify revenue growth</li>
            </ul>
            <p>
              Use the percentage to understand the business mix, not as a
              target in isolation.
            </p>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/how-much-revenue-should-email-marketing-generate-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  How much revenue should email marketing generate for a Shopify store?
                </Link>
              </li>
              <li>
                <Link href="/resources/klaviyo-revenue-too-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  Klaviyo revenue looks too high: is email taking too much credit?
                </Link>
              </li>
              <li>
                <Link href="/resources/measure-email-marketing-true-impact-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  How to measure the true impact of email marketing
                </Link>
              </li>
              <li>
                <Link href="/resources/good-repeat-purchase-rate-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  What is a good repeat purchase rate for Shopify?
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Put the number in context</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your team is chasing a &quot;30% from email&quot; benchmark
            without understanding the attribution or customer base, send us
            an inquiry. We can help put the number in context.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
