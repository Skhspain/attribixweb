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
  headline: "Are Competitor Keywords Worth Bidding on in Google Ads?",
  description: "The intent behind a competitor-name search isn't neutral — what that costs you and when it's still worth it.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/competitor-keywords-google-ads-worth-it" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Competitor keywords", item: "https://www.attribix.app/resources/competitor-keywords-google-ads-worth-it" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Competitor keywords" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Are competitor keywords worth bidding on in Google Ads?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Competitor keywords can put your brand in front of people who
            are already shopping in your category. They can also be some
            of the most expensive and least efficient clicks in the
            account.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why they are tempting</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Someone searching a competitor by name has demonstrated
            commercial interest. If your product is a credible
            alternative, that search can be valuable. But the intent is
            not neutral. The customer asked for someone else.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Expect lower relevance</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Your ad and landing page must work harder to explain why the
              user should switch. CTR may be lower, CPC may be higher and
              conversion rate may lag behind generic high-intent product
              terms.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Comparison pages can help</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If it is legally and factually appropriate, a useful
            comparison page can answer the question the searcher actually
            has: why should I consider you instead? Do not make
            unsupported competitor claims or misleading ad copy.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Judge incremental profit</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Competitor campaigns can make sense when they acquire
              customers profitably and do not crowd out stronger
              opportunities. They are less attractive if the account is
              budget constrained and high-intent generic terms are already
              losing impression share. Start controlled, monitor search
              terms and compare customer quality.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/should-you-bid-on-your-brand-name-google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify stores bid on their own brand name?</Link></li>
            <li><Link href="/resources/google-ads-search-terms-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Google Ads search terms: what should ecommerce advertisers look for?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Considering competitor campaigns?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Contact us. We can evaluate whether they deserve budget
            relative to other Google opportunities.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
