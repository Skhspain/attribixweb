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
  headline: "How Do You Know When a Meta Ad Is Fatigued?",
  description:
    "Ad fatigue gets blamed for problems it didn't cause. The signals that actually indicate fatigue, and how to rule out website, tracking or auction issues first.",
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
    "@id": "https://www.attribix.app/resources/how-to-tell-meta-ad-fatigue",
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
      name: "Meta Ad Fatigue",
      item: "https://www.attribix.app/resources/how-to-tell-meta-ad-fatigue",
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
              { label: "Meta Ad Fatigue" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Do You Know When a Meta Ad Is Fatigued?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Ad fatigue is real, but it is also blamed for far too many
            unrelated problems. When sales fall, &ldquo;the creative is
            fatigued&rdquo; is an easy explanation. It avoids asking harder
            questions about the offer, site conversion rate, competition or
            tracking.
          </p>
        </Reveal>
      </section>

      {/* WHAT FATIGUE MEANS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What fatigue actually means</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A creative becomes less effective as repeated exposure reduces
            its ability to get attention or persuade the available
            audience. The important word is repeated. A mature ad with
            rising frequency, falling CTR and worsening acquisition cost is
            a stronger fatigue case than an ad whose CPA increased for one
            day while frequency remains low.
          </p>
        </Reveal>
      </section>

      {/* SIGNALS TOGETHER */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Signals to look for together</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Compare trends rather than isolated snapshots:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5 max-w-2xl">
              <li>Frequency up + CTR down: the audience may be responding less to repeated exposure.</li>
              <li>CTR stable + website conversion down: this looks less like creative fatigue and more like a post-click problem.</li>
              <li>CPM up + CTR stable + CVR stable: auction cost may be the main reason CPA increased.</li>
              <li>Meta CPA up + Shopify revenue stable: before blaming creative, verify attribution and channel mix.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* AUDIENCE & PLACEMENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check by audience and placement</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A creative may be exhausted in a small retargeting audience while
            still working for broad prospecting. Overall account averages
            can hide this. Also look at how heavily Meta has concentrated
            spend. If 80% of the budget has gone to one creative for weeks,
            you have more reason to prepare replacements than if delivery is
            spread across many ads.
          </p>
        </Reveal>
      </section>

      {/* WHAT TO DO NEXT */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What to do next</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Do not automatically shut the ad off. Introduce new variations
              and let them compete. Preserve the successful idea while
              changing the hook, proof, opening seconds, visual or objection
              addressed. Fatigue is a creative-supply problem, not an
              invitation to rebuild the entire account.
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
              <Link href="/resources/meta-ads-frequency-too-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads frequency too high: when does it become a problem?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-often-change-meta-ad-creatives" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How often should you change Meta ad creatives?
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta Ads show different sales numbers
              </Link>
            </li>
            <li>
              <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify attribution
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Can&apos;t tell what&apos;s actually causing the decline?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are seeing declining Meta performance and cannot tell
            whether the creative, auction, website or tracking is
            responsible, send us an inquiry. We can diagnose the full funnel
            before you replace what may still be working.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
