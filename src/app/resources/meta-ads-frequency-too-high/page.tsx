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
  headline: "Meta Ads Frequency Too High: When Does It Become a Problem?",
  description:
    "There's no universal frequency ceiling. How to pair frequency with CTR, CPA and reach to tell whether repeated exposure is actually hurting performance.",
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
    "@id": "https://www.attribix.app/resources/meta-ads-frequency-too-high",
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
      name: "Meta Ads Frequency",
      item: "https://www.attribix.app/resources/meta-ads-frequency-too-high",
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
              { label: "Meta Ads Frequency" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads Frequency Too High: When Does It Become a Problem?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            There is no universal frequency number at which a Meta ad
            suddenly becomes &ldquo;bad.&rdquo; A frequency of 4 can be a
            serious problem in one campaign and completely normal in
            another. It depends on the audience, time period, objective,
            creative and buying cycle.
          </p>
        </Reveal>
      </section>

      {/* CLUE NOT VERDICT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Frequency is a clue, not a verdict</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Frequency tells you roughly how often the average reached person
            has been exposed during the selected period. It does not tell
            you whether those exposures were annoying, persuasive or
            profitable. For broad prospecting, rapidly rising frequency can
            indicate the campaign is repeatedly reaching a limited pool. For
            retargeting, higher frequency is expected because the audience
            is smaller and already familiar with the brand.
          </p>
        </Reveal>
      </section>

      {/* PAIR WITH RESPONSE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Pair frequency with response</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">Look for combinations:</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5 max-w-2xl">
              <li>Frequency rising + CTR falling</li>
              <li>Frequency rising + CPA increasing</li>
              <li>Reach flattening while spend continues to grow</li>
              <li>Negative comments or hiding behaviour increasing</li>
              <li>One creative absorbing most delivery</li>
            </ul>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Those patterns are more informative than frequency alone. If
              frequency rises but CTR, conversion rate and CPA remain
              strong, there is no urgent reason to panic.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROMOTIONS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Promotions change the calculation</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            During a short sale, you may intentionally accept more repeated
            exposure because the message is time-sensitive. A premium
            product with a long decision cycle may also benefit from
            repeated contact. Conversely, showing the same simple product ad
            five times in two days to a tiny audience can create waste
            quickly.
          </p>
        </Reveal>
      </section>

      {/* WHAT CAN YOU DO */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What can you do?</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              You can refresh creative, broaden eligible reach, reduce
              budget against a small warm audience, change the message or
              restructure overlapping campaigns. But first identify whether
              frequency is actually connected to the performance problem.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Do not reduce a profitable campaign merely to hit someone
              else&apos;s &ldquo;ideal frequency.&rdquo;
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
              <Link href="/resources/how-much-meta-ads-budget-retargeting" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much of your Meta Ads budget should go to retargeting?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-you-retarget-website-visitors-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you retarget website visitors on Meta Ads?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Frequency rising and results getting worse?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta account shows rising frequency and worsening
            results, contact us. We can determine whether the audience is
            saturated or whether another part of the funnel is causing the
            decline.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
