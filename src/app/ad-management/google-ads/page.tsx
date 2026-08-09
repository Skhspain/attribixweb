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
  { title: "Merchant Center and product feed", desc: "Feed diagnosed and, within the agreed scope, corrected — item-level issues, category mapping, pricing mismatches." },
  { title: "Search campaigns", desc: "Keyword and match-type strategy built around commercial intent, with regular negative keyword review and brand vs. non-brand reporting split out." },
  { title: "Performance Max management", desc: "Asset groups, audience signals and feed inputs managed directly, since PMax bidding depends heavily on getting these right." },
  { title: "Conversion tracking", desc: "Purchase tracking and enhanced conversions checked against actual Shopify orders, not assumed correct." },
  { title: "New-customer acquisition", desc: "New vs. returning customer performance reported separately where Google's data supports it, not blended into one number." },
  { title: "Reporting", desc: "Monthly reporting against Shopify revenue, with the reasoning behind budget moves across campaign types." },
];

const SCOPE = [
  { label: "Account ownership", desc: "You own the Google Ads account and Merchant Center. We operate inside them as a partner via standard access, not as the owner." },
  { label: "Access required", desc: "Admin access to Google Ads and Merchant Center, plus read access to Shopify order and product data." },
  { label: "Onboarding", desc: "Account, feed and tracking review first, then a written plan before budget or structural changes go live." },
  { label: "Communication", desc: "A standing check-in call, plus messaging for anything time-sensitive in between." },
  { label: "Feed optimisation", desc: "Included within the agreed scope — title and attribute improvements, category fixes. Bulk product-data rewrites for large catalogues may be scoped separately." },
  { label: "Landing pages", desc: "We flag landing-page issues that hurt Quality Score or conversion, but page changes themselves are typically your team's or developer's responsibility unless agreed otherwise." },
  { label: "Performance Max creative", desc: "We direct asset strategy; image and video production is not included by default, similar to Meta Ads management." },
  { label: "Merchant Center suspensions", desc: "We help diagnose the cause and prepare an appeal. Some suspensions require account or business verification steps only Google can resolve directly with you." },
];

const FAQ_ITEMS = [
  {
    q: "Do you manage Shopping and Performance Max, or only Search?",
    a: "All three, where relevant to your catalogue. In our experience running Shopify accounts, Shopping and Performance Max usually carry more of the budget than Search alone.",
  },
  {
    q: "Will you fix our Merchant Center feed issues?",
    a: "We identify and help resolve feed and Merchant Center issues within the agreed service scope. Some problems may require website, product-data or policy changes outside the advertising account — those we flag clearly rather than promise to fix ourselves.",
  },
  {
    q: "Can you take over an account someone else set up badly?",
    a: "Regularly. An account audit is usually the first step so we know exactly what we're inheriting before making changes.",
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

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ad management", item: "https://www.attribix.app/ad-management" },
    { "@type": "ListItem", position: 2, name: "Google Ads management", item: "https://www.attribix.app/ad-management/google-ads" },
  ],
};

export default function GoogleAdsManagementPage() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-4">
        <Breadcrumbs items={[{ label: "Ad management", href: "/ad-management" }, { label: "Google Ads management" }]} />
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

      {/* SCOPE / OPERATIONS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">Where the scope starts and ends</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {SCOPE.map((s, i) => (
              <Reveal key={s.label} delay={i * 40}>
                <div>
                  <p className="text-sm font-semibold text-white">{s.label}</p>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKING TIE-IN */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold">Performance Max is only as good as its inputs</h2>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            Automated bidding optimises against whatever conversion value
            it&apos;s given — if that value is wrong, PMax spends toward
            whatever it&apos;s been told is a good outcome, even if it isn&apos;t.
            We check this against your actual{" "}
            <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Shopify revenue
            </Link>
            . Read more on{" "}
            <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Google Ads conversion tracking for Shopify
            </Link>
            .
          </p>
        </Reveal>
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
          <p className="mt-6 text-sm text-white/35">
            Need tracking fixed first?{" "}
            <Link href="/ad-management/inquiry" className="text-white/60 underline underline-offset-4 hover:text-white">
              Ask about tracking and attribution setup
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
