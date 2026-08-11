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
  headline: "How Much Data Does Meta Ads Need Before You Can Judge Performance?",
  description:
    "Why ten clicks tell you almost nothing, and how to judge creative, offer and profitability with the right amount of evidence for each.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-much-data-does-meta-ads-need" },
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
      name: "How Much Data Does Meta Ads Need",
      item: "https://www.attribix.app/resources/how-much-data-does-meta-ads-need",
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
              { label: "How Much Data Does Meta Ads Need" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Much Data Does Meta Ads Need Before You Can Judge Performance?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Marketers often ask for a magic number: 50 purchases, 100
            clicks, three days, one week. Unfortunately, Meta performance
            does not become trustworthy because a counter reaches an
            arbitrary threshold. What matters is whether you have enough
            observations to distinguish a real pattern from normal
            variation.
          </p>
        </Reveal>
      </section>

      {/* TEN CLICKS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Ten clicks tell you almost nothing</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Imagine two ads. One gets one purchase from 12 clicks. The
            other gets none. It is tempting to declare the first ad the
            winner, but one additional sale on the second ad could reverse
            the conclusion completely.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            As volume grows, the result becomes more stable. That does not
            mean you need thousands of purchases before acting. It means
            your confidence should match the amount of evidence you have.
          </p>
        </Reveal>
      </section>

      {/* JUDGE EACH LEVEL */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Judge each level with the metric that belongs there</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Creative can be evaluated earlier than profitability because
              it produces more frequent signals. You might learn something
              from: thumb-stop or video engagement; outbound CTR; CPC;
              landing-page-view rate. But none of those proves the ad is
              profitable.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Offer and website performance need deeper funnel data:
              product views; add-to-cart rate; checkout rate; purchase
              conversion rate. Profitability needs actual purchases,
              revenue and enough spend to make CPA or ROAS meaningful.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SPEND VS TARGET CPA */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Relate spend to your target CPA</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A useful practical question is: how many target CPAs has this
            ad spent? If your target CPA is $50 and a new ad has spent
            $12, a lack of purchases is not surprising. At $150 with no
            purchase, the evidence is more concerning. At $400, you should
            have a very good reason to keep spending.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            That does not mean a rigid &ldquo;three-times CPA&rdquo; rule
            works everywhere. Higher-AOV products, long consideration
            periods and small conversion volumes create more volatility —
            which is also why{" "}
            <Link href="/resources/how-long-should-meta-ads-run-before-changes" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how long you let a campaign run
            </Link>{" "}
            and how much data it needs are really the same question asked
            two different ways.
          </p>
        </Reveal>
      </section>

      {/* LOOK ACROSS ACCOUNT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look across the account</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A result becomes easier to interpret when you have
              comparable campaigns. If five creatives with similar spend
              convert at $35&ndash;$55 CPA and one has spent $200 with no
              sale, the account itself gives you context.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              The best decisions combine volume, historical performance
              and funnel behaviour. Do not ask whether Meta has
              &ldquo;enough data&rdquo; in the abstract. Ask whether you
              have enough data to support the specific decision you are
              about to make.
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
              <Link href="/resources/how-long-should-meta-ads-run-before-changes" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How long should you let Meta Ads run before making changes?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-learning-phase-explained" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads learning phase explained
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads getting clicks but no sales? Diagnose the problem
              </Link>
            </li>
            <li>
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure what&apos;s signal and what&apos;s noise?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your account is generating data but you are not sure what
            is signal and what is noise, contact us. We can review the
            campaign against your actual Shopify sales and business
            targets.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
