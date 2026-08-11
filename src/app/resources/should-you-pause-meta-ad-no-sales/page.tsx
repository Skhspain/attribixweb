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
  headline: "Should You Pause a Meta Ad That Has No Sales?",
  description:
    "Zero sales doesn't mean a bad ad — it depends on spend relative to target CPA and what happened earlier in the funnel. How to make a pause decision for a reason.",
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
    "@id": "https://www.attribix.app/resources/should-you-pause-meta-ad-no-sales",
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
      name: "Pause Ad, No Sales",
      item: "https://www.attribix.app/resources/should-you-pause-meta-ad-no-sales",
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
              { label: "Pause Ad, No Sales" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should You Pause a Meta Ad That Has No Sales?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A Meta ad with zero sales is not automatically a bad ad. The
            missing context is how much opportunity it has had to generate
            one. An ad that has spent $8 with no purchase is very different
            from one that has spent $400. The same is true for a $25
            impulse product versus a $1,500 product with a longer buying
            cycle.
          </p>
        </Reveal>
      </section>

      {/* COMPARE SPEND */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare spend with the economics</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Start with your target acquisition cost. If your target CPA is
            $45 and the ad has spent $15, there is not much purchase data to
            judge. If it has spent several times the amount you can
            profitably pay for a customer without producing useful
            lower-funnel activity, the case for pausing becomes much
            stronger. But do not look at spend alone.
          </p>
        </Reveal>
      </section>

      {/* WHAT HAPPENED BEFORE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What happened before the missing purchase?</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">An ad can fail in different ways.</p>
            <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5 max-w-2xl">
              <li>Few clicks — the creative or offer may not be generating interest.</li>
              <li>Plenty of clicks, little product engagement — the ad may be attracting the wrong people or making a promise the page does not fulfil.</li>
              <li>Product engagement but no carts — look at price, offer and product-market fit.</li>
              <li>Carts and checkouts but no purchases — investigate shipping, payment, checkout or tracking.</li>
              <li>Shopify orders but no Meta purchases — pausing the ad because Meta says zero could be exactly the wrong decision.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* COMPARE WITH OTHER ADS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare it with other ads</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Context from the same account is useful. If three creatives each
            generated purchases around your target CPA and one has spent
            heavily without any meaningful funnel activity, you have
            stronger evidence than if the whole account is struggling.
          </p>
        </Reveal>
      </section>

      {/* PAUSE FOR A REASON */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Pause for a reason</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A good pause decision sounds like this: &ldquo;This ad has
              spent enough relative to our target CPA, its click quality is
              weaker than the alternatives, and it has produced no
              lower-funnel signals.&rdquo;
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              A poor pause decision sounds like: &ldquo;It hasn&apos;t sold
              anything today.&rdquo;
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Paid social is noisy. The goal is to remove persistent losers
              without cutting promising ads before they have had a fair
              chance.
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
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta Ads show different sales numbers
              </Link>
            </li>
            <li>
              <Link href="/resources/fix-duplicate-meta-purchases-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to fix duplicate purchases in Meta Ads for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/scale-winning-meta-ad-or-duplicate" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you scale a winning Meta ad or duplicate it?
              </Link>
            </li>
            <li>
              <Link href="/meta-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta CAPI for Shopify
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure which ads deserve more budget?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are unsure which Meta ads deserve more budget and which
            are simply wasting spend, send us an inquiry. We can review the
            decisions against your actual Shopify sales.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
