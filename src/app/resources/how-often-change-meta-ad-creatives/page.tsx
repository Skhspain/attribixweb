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
  headline: "How Often Should You Change Meta Ad Creatives?",
  description:
    "Creative refresh schedules based on the calendar miss real fatigue signals. What to watch instead, and why killing winners on a timer wastes profit.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/how-often-change-meta-ad-creatives",
  },
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
      name: "Creative Refresh Frequency",
      item: "https://www.attribix.app/resources/how-often-change-meta-ad-creatives",
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
              { label: "Creative Refresh Frequency" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Often Should You Change Meta Ad Creatives?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Changing creatives on a fixed calendar sounds tidy. Real ad
            accounts are not tidy. Some creatives fatigue in five days.
            Others remain profitable for months. The right time to replace
            an ad is when the evidence says the audience or economics have
            changed, not because Tuesday is &ldquo;creative refresh
            day.&rdquo;
          </p>
        </Reveal>
      </section>

      {/* WATCH IN CONTEXT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch performance in context</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Creative fatigue often shows up through a combination of signals:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5">
            <li>Frequency increasing</li>
            <li>CTR declining</li>
            <li>CPC rising</li>
            <li>CPA deteriorating</li>
            <li>The same audience seeing the ad repeatedly</li>
            <li>Spend concentrating on an old creative while new ads struggle for delivery</li>
          </ul>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            No single metric proves fatigue. CPM can rise because
            competition increased. Conversion rate can fall because your
            website changed. CPA can deteriorate because a promotion ended.
          </p>
        </Reveal>
      </section>

      {/* DON'T KILL WINNERS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Do not kill winners just to look active</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              One of the strangest habits in paid social is replacing an ad
              that is still making money because it has been live &ldquo;too
              long.&rdquo; If the creative continues to deliver profitable
              incremental sales, let it work. Instead, develop new
              variations alongside it. That creates insurance if the winner
              weakens later.
            </p>
          </Reveal>
        </div>
      </section>

      {/* REFRESHING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Refreshing does not mean starting from zero</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A new creative can preserve the idea that made the original
            successful:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5">
            <li>Same customer problem, different hook</li>
            <li>Same testimonial, new edit</li>
            <li>Same product benefit, new format</li>
            <li>Same offer, different visual demonstration</li>
          </ul>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            This is usually more useful than creating five completely
            unrelated ads every week.
          </p>
        </Reveal>
      </section>

      {/* MATCH SUPPLY TO SPEND */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Match creative supply to spend</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A business spending $100 a day does not need the same
              production system as one spending $20,000 a day. Larger spend
              exposes more people to the ads faster and normally requires
              more creative volume. The goal is not a particular number of
              ads per month. It is to maintain enough fresh, relevant
              creative that the account is never dependent on one ageing
              winner.
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
              <Link href="/resources/how-to-tell-meta-ad-fatigue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How do you know when a Meta ad is fatigued?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-many-creatives-shopify-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many creatives do you actually need for Shopify Meta Ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-frequency-too-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads frequency too high: when does it become a problem?
              </Link>
            </li>
            <li>
              <Link href="/ad-management/meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads management
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure if it&apos;s fatigue or something else?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta account is constantly burning through creatives or
            you are not sure whether performance decline is actually
            fatigue, contact us. We can review the creative and campaign
            data together.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
