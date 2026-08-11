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
  headline: "How Much Budget Should Go to Brand vs Non-Brand Google Ads?",
  description: "Why brand and non-brand shouldn't be judged against the same efficiency expectation.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-brand-vs-non-brand-budget" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Brand vs non-brand budget", item: "https://www.attribix.app/resources/google-ads-brand-vs-non-brand-budget" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Brand vs non-brand budget" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How much budget should go to brand vs non-brand Google Ads?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There is no useful rule that says 10% of Google spend belongs
            to brand and 90% to non-brand. Brand demand is a consequence
            of how many people are already searching for you.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Brand should usually be constrained by demand</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Give the campaign enough budget to capture the branded traffic
            you intentionally want, then watch impression share,
            competitor presence and organic substitution. If the brand
            campaign is already covering nearly all valuable demand,
            increasing budget further will not create more people
            searching your name.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Non-brand is where acquisition expands</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Generic product, category, Shopping and Performance Max
              traffic can reach people who did not start with your brand
              in mind. That makes non-brand critical for growth, but
              usually at lower ROAS than branded traffic.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not compare them on the same efficiency expectation</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A brand campaign may acquire sales at a fraction of the CPA
            because those shoppers already have intent. Expecting
            non-brand to match that number can cause underinvestment in
            growth.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Let marginal opportunity set the split</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The right allocation depends on available search demand,
              profitability, impression share, customer acquisition goals
              and what other channels are doing. Budget is not something
              you divide once. It should follow the best profitable
              incremental opportunities.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-you-bid-on-your-brand-name-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify stores bid on their own brand name?</Link></li>
            <li><Link href="/resources/google-brand-campaign-taking-credit-organic-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is your Google Ads brand campaign taking credit for organic sales?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure how much non-brand acquisition deserves?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Contact us. We can structure and report brand and non-brand
            separately.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
