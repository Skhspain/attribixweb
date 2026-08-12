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
  headline: "Google Ads Search Terms: What Should Ecommerce Advertisers Look For?",
  description: "How to read the Google Ads search terms report for a Shopify store: intent, wasted spend, opportunities, and judging queries by profit instead of CPC.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-search-terms-ecommerce" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Search terms report", item: "https://www.attribix.app/resources/google-ads-search-terms-ecommerce" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Search terms report" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads search terms: what should ecommerce advertisers look for?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The search terms report is where you find out what people
            actually typed before clicking your ads. Keywords are what you
            told Google you were willing to target. Search terms are what
            you paid for. That difference matters.
          </p>
        </Reveal>
      </section>

      {/* INTENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look for intent, not just matching words</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              A search can contain your product name and still be a bad
              commercial query. Someone searching &quot;how to repair leather
              boots&quot; may be irrelevant to a store selling new leather boots
              even though the words overlap.
            </p>
            <p>Classify terms by intent:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Ready to buy</li>
              <li>Product comparison</li>
              <li>Research</li>
              <li>Support / how-to</li>
              <li>Jobs or careers</li>
              <li>Irrelevant meaning</li>
              <li>Competitor</li>
              <li>Brand</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* WASTED SPEND */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Find wasted spend</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              One irrelevant click is rarely important. Repeated clusters
              are. Ten slightly different searches about free templates may
              tell you that a broad keyword is attracting the wrong
              audience.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Use negative keywords to block clear waste, but avoid becoming
              so aggressive that you remove useful discovery traffic, a
              tradeoff covered in more depth in{" "}
              <Link href="/resources/broad-vs-phrase-vs-exact-match-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                broad match vs phrase match vs exact match for ecommerce
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Find opportunities too</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>The report is not only a cleanup tool. It can reveal:</p>
            <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
              <li>Unexpected use cases</li>
              <li>Profitable product terms</li>
              <li>New category language</li>
              <li>Competitor comparisons</li>
              <li>High-intent long-tail searches</li>
            </ul>
            <p>
              Those can inform ad copy, landing pages, product titles and
              SEO content.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CONNECT TO PURCHASES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Connect queries to purchases</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A term with expensive clicks may still be excellent if it
              converts. A cheap term with lots of traffic can be terrible if
              nobody buys. Evaluate search terms through conversion value
              and profit, not CPC alone, which means the search terms
              report is only as useful as the{" "}
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                conversion tracking
              </Link>{" "}
              feeding it.
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
              <Link href="/resources/broad-vs-phrase-vs-exact-match-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Broad match vs phrase match vs exact match for ecommerce
              </Link>
            </li>
            <li>
              <Link href="/resources/negative-keywords-ecommerce-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Negative keywords for ecommerce Google Ads accounts
              </Link>
            </li>
            <li>
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads clicks but no sales? What to check first
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Know which searches are actually driving customers</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Google Ads account spends heavily but you do not know
            which real searches are driving profitable Shopify customers,
            send us an inquiry. We can review the query mix and clean up
            the account.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
