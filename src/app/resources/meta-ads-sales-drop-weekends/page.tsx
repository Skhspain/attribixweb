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
  headline: "Meta Ads Sales Drop on Weekends: Is That Normal?",
  description:
    "Weekend Meta Ads performance can look worse than weekdays without anything being broken. How to tell a real day-of-week pattern apart from ordinary week-to-week noise.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ads-sales-drop-weekends" },
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
      name: "Meta Ads Sales Drop on Weekends",
      item: "https://www.attribix.app/resources/meta-ads-sales-drop-weekends",
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
              { label: "Weekend Performance" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads Sales Drop on Weekends: Is That Normal?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            It can be completely normal for a Meta campaign to perform
            differently on weekends. It can also be a sign that your
            customer behaviour, budget or offer is changing by day. The
            important part is not whether Saturday&apos;s ROAS is lower. It
            is whether the pattern is consistent enough to matter.
          </p>
        </Reveal>
      </section>

      {/* CUSTOMER BEHAVIOUR */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Customer behaviour changes through the week</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A B2B product, premium service or work-related purchase may
            convert better on weekdays. Leisure products may do the
            opposite. Some people browse on weekends and buy later, which
            can make the day of the click look weak while the eventual
            customer journey is healthy.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBUTION BLUR */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Attribution can blur day-by-day comparisons</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A person might click an ad on Sunday and purchase on Tuesday.
              Depending on reporting and{" "}
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                attribution
              </Link>
              , the relationship between ad day and order day is not always
              obvious. That is another reason to avoid pausing weekends
              because two Saturdays looked bad.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHECK ENOUGH WEEKS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check enough weeks</h2>
          <p className="text-white/60 leading-relaxed text-sm mb-4">
            If the same pattern appears across eight or twelve weekends, you
            have something worth investigating. If it happened once, you may
            be looking at ordinary randomness. Compare:
          </p>
          <ul className="space-y-2 text-sm text-white/60 list-disc pl-5">
            <li>Spend</li>
            <li>CPM</li>
            <li>CTR</li>
            <li>CPC</li>
            <li>Shopify sessions</li>
            <li>Conversion rate</li>
            <li>Average order value</li>
            <li>New vs returning customers</li>
            <li>Delayed conversions</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm mt-4">
            You may discover that traffic quality is stable and the store
            simply converts differently by day. Tracking those metrics
            consistently against{" "}
            <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Shopify ROAS
            </Link>{" "}
            is what turns a suspicion into evidence.
          </p>
        </Reveal>
      </section>

      {/* WEEKEND BUDGETS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Should you reduce weekend budgets?</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Maybe, but only if the evidence supports it and the campaign
              setup allows that control without creating more problems than
              it solves. Also consider the wider effect. Weekend exposure
              can assist purchases that happen later. Cutting it entirely
              may improve the weekend report and hurt the following week.
              The correct answer comes from repeated business data, not a
              belief that &ldquo;weekends never work.&rdquo;
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
              <Link href="/resources/meta-ads-performance-changes-after-budget-increase" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Meta Ads performance changes after increasing the budget
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads ROAS dropped suddenly: ads, website or tracking?
              </Link>
            </li>
            <li>
              <Link href="/resources/shopify-attribution-models" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution models explained
              </Link>
            </li>
            <li>
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution software
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Seeing a consistent day-of-week pattern?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are seeing consistent day-of-week performance changes and
            are unsure whether to adjust budgets, send us an inquiry. We can
            analyse the pattern across Meta and Shopify rather than judging
            one day&apos;s ROAS.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
