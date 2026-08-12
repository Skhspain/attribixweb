"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "Where do I see why a product was disapproved?",
    a: "The Diagnostics section in Google Merchant Center lists disapproved items with the specific policy or data issue attached to each one, rather than a single generic error. Start there instead of guessing.",
  },
  {
    q: "How long does a review take after fixing an issue?",
    a: "It varies and can take some time. Google doesn't guarantee a fixed turnaround for review requests, so don't assume a fix will be reflected instantly.",
  },
  {
    q: "Can a partial disapproval still hurt overall campaign performance?",
    a: "Yes. If a meaningful share of your catalog is disapproved, your eligible product pool shrinks even though the campaign itself looks like it's running normally. That can look like a targeting or bidding problem when the real issue is fewer products are actually allowed to show.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Merchant Center Products Disapproved: What It Means for Sales",
  description: "Why disapprovals happen, and how to tell how much of your catalog is actually eligible to run.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-merchant-center-product-disapproved" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Merchant Center disapprovals", item: "https://www.attribix.app/resources/google-merchant-center-product-disapproved" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Merchant Center disapprovals" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Merchant Center products disapproved: what it means for sales
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A disapproved product doesn&apos;t run at a lower priority. It
            simply doesn&apos;t show at all. If a chunk of your catalog is
            disapproved, your eligible product pool has quietly shrunk,
            which can look exactly like a campaign underperforming.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start in Diagnostics, not the campaign</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Merchant Center&apos;s Diagnostics section lists disapproved
            items along with the specific reason attached to each one,
            which is a much faster starting point than trying to infer the
            cause from campaign performance alone. Check what share of
            your total catalog is affected before assuming it&apos;s a
            small, isolated issue.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The common causes</h2>
            <ul className="space-y-3 text-sm text-white/60">
              <li><span className="text-white font-medium">Price mismatch</span>: the price in your feed doesn&apos;t match what&apos;s shown on the actual product page.</li>
              <li><span className="text-white font-medium">Missing or invalid GTIN</span>: required for most product categories; custom/handmade goods are a documented exception.</li>
              <li><span className="text-white font-medium">Availability mismatch</span>: the feed says in stock while the page says otherwise, or vice versa.</li>
              <li><span className="text-white font-medium">Shipping setting conflicts</span>: shipping data in the feed contradicting your account-level shipping settings.</li>
              <li><span className="text-white font-medium">Image policy issues</span>: placeholder, watermarked, or generic stock images where a real product photo is required.</li>
              <li><span className="text-white font-medium">Misrepresentation flags</span>: claims or content that Google&apos;s policy review considers misleading, which can trigger broader account-level scrutiny, not just a single listing.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Fixing it and requesting review</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Correct the specific field flagged in Diagnostics, in your
            feed, on the product page, or both, since a mismatch between
            them is the root cause more often than either being wrong on
            its own. After the fix, you can request a review; turnaround
            isn&apos;t instant, so don&apos;t assume the fix has failed if
            the status doesn&apos;t update immediately.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why this matters even if the campaign looks fine</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A campaign can appear to be running normally (budget
              spending, some conversions still coming in) while a large
              share of the catalog is silently excluded. That shows up as
              weaker overall performance without an obvious cause, because
              nothing in the campaign settings looks wrong. Checking feed
              health directly is the only way to catch this rather than
              inferring it from campaign-level numbers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/google-shopping-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Shopping getting clicks but no sales</Link></li>
            <li><Link href="/resources/performance-max-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max spending but getting no sales</Link></li>
            <li><Link href="/ad-management/google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads management</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Feed problems eating into your reach?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry and we can review your Merchant Center
            account alongside campaign performance.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
