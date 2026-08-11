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
  headline: "How Long Does a Meta Ad Creative Usually Last?",
  description:
    "There's no average lifespan worth running your account by. Why exposure, not calendar days, determines when a Meta creative wears out, and how to prepare the replacement early.",
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
    "@id": "https://www.attribix.app/resources/how-long-does-meta-ad-creative-last",
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
      name: "Meta Creative Lifespan",
      item: "https://www.attribix.app/resources/how-long-does-meta-ad-creative-last",
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
              { label: "Meta Creative Lifespan" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Long Does a Meta Ad Creative Usually Last?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There is no average lifespan useful enough to run your account
            by. A creative shown to a small broad audience at high spend can
            fatigue quickly. The same ad in a huge market at modest spend
            can work for months.
          </p>
        </Reveal>
      </section>

      {/* EXPOSURE DETERMINES LIFESPAN */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Exposure determines lifespan more than calendar days</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Think about:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5 max-w-2xl">
            <li>Audience size</li>
            <li>Spend</li>
            <li>Reach</li>
            <li>Frequency</li>
            <li>Number of placements</li>
            <li>Number of active creatives</li>
          </ul>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            A $50,000-a-day campaign consumes creative opportunity much
            faster than a $100-a-day campaign.
          </p>
        </Reveal>
      </section>

      {/* RELEVANCE CAN EXTEND LIFE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Relevance can extend life</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Evergreen product demonstrations, strong customer stories and
              distinctive branded assets may remain useful longer than
              promotion-heavy or trend-based content.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              An ad tied to a specific meme or seasonal moment can age
              quickly even if frequency is low.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WATCH THE RESPONSE CURVE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch the response curve</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            Instead of counting days, compare:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5 max-w-2xl">
            <li>CTR trend</li>
            <li>CPC trend</li>
            <li>Frequency</li>
            <li>CPA</li>
            <li>Purchase volume</li>
            <li>Performance by audience</li>
          </ul>
          <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
            If the ad remains commercially strong, age alone is not a reason
            to kill it.
          </p>
        </Reveal>
      </section>

      {/* PREPARE THE REPLACEMENT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Always prepare the replacement before you need it</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              The most dangerous creative strategy is waiting until
              performance collapses before producing something new. Keep
              testing challengers while the winner still works.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              The answer to &ldquo;How long will this ad last?&rdquo; is:
              until the audience and economics tell you otherwise. Your
              production system should not need to know the exact date in
              advance.
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
              <Link href="/resources/why-winning-meta-creatives-stop-working" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why winning Meta ad creatives stop working
              </Link>
            </li>
            <li>
              <Link href="/resources/how-often-change-meta-ad-creatives" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How often should you change Meta ad creatives?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-many-variations-winning-meta-ad" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many variations of a winning Meta ad should you make?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Build a more sustainable refresh system</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your account is overly dependent on one creative and you need
            a more sustainable refresh system, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
