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
  headline: "Should Your Meta Ad Show the Price?",
  description:
    "Why showing the price on a Meta ad can lower CTR and still improve results, and how to tell whether your ads should qualify customers earlier.",
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
    "@id": "https://www.attribix.app/resources/should-meta-ads-show-price",
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
      name: "Price in Meta Ads",
      item: "https://www.attribix.app/resources/should-meta-ads-show-price",
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
              { label: "Price in Meta Ads" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Should Your Meta Ad Show the Price?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Showing price can reduce clicks and improve the campaign at the
            same time. That sounds contradictory until you remember that not
            every click is valuable.
          </p>
        </Reveal>
      </section>

      {/* PRICE QUALIFIES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Price qualifies the customer</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If a product costs $250 and the ad hides that fact, a large
            number of people may click expecting a $40 product. The landing
            page then does the filtering, after you have already paid for
            the visit.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Displaying the price can lower CTR but send more realistic
            prospects to the site.
          </p>
        </Reveal>
      </section>

      {/* HIDING PRICE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Hiding price can be useful when context matters first</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Premium, technical or unfamiliar products sometimes need their
              value explained before the price makes sense. Leading with $799
              before demonstrating why the product is different may create
              premature rejection.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              In that case, the ad may be better at building value first.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OFFERS ARE DIFFERENT */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Offers are different</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If price itself is a competitive advantage or promotion, showing
            it can be the strongest hook: &ldquo;From $29&rdquo;;
            &ldquo;2 for $49&rdquo;; &ldquo;20% off this week.&rdquo;
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Again, only use genuine, accurate pricing.
          </p>
        </Reveal>
      </section>

      {/* TEST DOWNSTREAM QUALITY */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test downstream quality</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Do not decide from CTR. Compare:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/60 list-disc pl-5">
              <li>Landing-page engagement</li>
              <li>Add-to-cart rate</li>
              <li>Purchase rate</li>
              <li>CPA</li>
              <li>Average order value</li>
            </ul>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              A price-visible ad may attract fewer visitors and more buyers.
              That can be a better ad.
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
              <Link href="/resources/good-ctr-low-cpc-no-sales-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Good CTR and low CPC but no sales on Meta Ads: what&apos;s wrong
              </Link>
            </li>
            <li>
              <Link href="/resources/good-meta-ad-metrics-but-poor-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why your Meta Ads have good creative metrics but poor sales
              </Link>
            </li>
            <li>
              <Link href="/resources/what-makes-good-meta-ad-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What makes a good Meta ad for ecommerce?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-to-tell-meta-ad-creative-problem" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to tell whether your Meta ad creative is the problem
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Cheap clicks that collapse at the price?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta traffic looks cheap but collapses when visitors see
            the product price, send us an inquiry. We can test whether the ad
            should qualify customers earlier.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
