"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import FAQList from "@/components/marketing/FAQList";

const INCLUDED = [
  { title: "Account structure and budget allocation", desc: "Campaigns split across Search, Shopping and Performance Max in proportion to what each is actually returning." },
  { title: "Merchant Center and product feed", desc: "Feed health monitored so Shopping listings stay approved, priced correctly, and in stock." },
  { title: "Search campaigns", desc: "Keyword and match-type strategy built around commercial intent, with regular negative keyword review." },
  { title: "Performance Max management", desc: "Asset groups, audience signals and feed inputs managed directly, since PMax bidding depends heavily on getting these right." },
  { title: "Conversion tracking", desc: "Purchase tracking and enhanced conversions checked against actual Shopify orders, not assumed correct." },
  { title: "Reporting", desc: "Monthly reporting against Shopify revenue, with the reasoning behind budget moves across campaign types." },
];

const FAQ_ITEMS = [
  {
    q: "Do you manage Shopping and Performance Max, or only Search?",
    a: "All three, where relevant to your catalogue. For most Shopify stores, Shopping and Performance Max carry more of the budget than Search alone.",
  },
  {
    q: "Will you fix our Merchant Center feed issues?",
    a: "Yes — feed problems are one of the most common reasons Shopping and Performance Max underperform, and we check for them as part of ongoing management.",
  },
  {
    q: "Can you take over an account someone else set up badly?",
    a: "Regularly. An account audit is usually the first step so we know exactly what we're inheriting before making changes.",
  },
];

export default function GoogleAdsManagementPage() {
  return (
    <ProductPageShell>
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-4">
        <Breadcrumbs items={[{ label: "Managed services", href: "/managed-services" }, { label: "Google Ads management" }]} />
      </section>

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pb-12">
        <Reveal>
          <Eyebrow>Google Ads management</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads management for Shopify stores
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Search, Shopping and Performance Max managed together — with
            Merchant Center, conversion tracking, and budget allocation
            handled as one account, not three separate problems.
          </p>
          <ManagedServicesCTA className="mt-9" />
        </Reveal>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">What&apos;s included</h2>
        </Reveal>
        <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
          {INCLUDED.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <div className="grid gap-1.5 py-5 sm:grid-cols-[260px_1fr] sm:gap-8">
                <p className="font-semibold text-sm text-white">{item.title}</p>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRACKING TIE-IN */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold">Performance Max is only as good as its inputs</h2>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Automated bidding optimises against whatever conversion value
              it&apos;s given — if that value is wrong, PMax will confidently
              spend toward the wrong outcome. We check this against your
              actual Shopify revenue through Attribix. Read more on{" "}
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-7">Questions specific to Google Ads management</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Talk to us about your Google Ads account</h2>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
