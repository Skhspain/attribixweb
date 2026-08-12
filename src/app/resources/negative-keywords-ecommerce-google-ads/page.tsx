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
  "headline": "Google Ads Negative Keywords for Ecommerce: What to Look For",
  "description": "Negative keywords stop Google from showing ads for searches you deliberately do not want.",
  "datePublished": "2026-08-12",
  "dateModified": "2026-08-12",
  "author": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Attribix",
    "url": "https://www.attribix.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.attribix.app/assets/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.attribix.app/resources/negative-keywords-ecommerce-google-ads"
  }
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.attribix.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources",
      "item": "https://www.attribix.app/resources"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Google Ads Negative Keywords for Ecommerce",
      "item": "https://www.attribix.app/resources/negative-keywords-ecommerce-google-ads"
    }
  ]
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Google Ads Negative Keywords for Ecommerce" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads Negative Keywords for Ecommerce: What to Look For
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Negative keywords stop Google from showing ads for searches you deliberately do not want. They are essential, but bad negative keyword management can block valuable customers just as easily as it saves waste.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look for recurring irrelevant intent</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Common categories include: jobs/careers; free downloads; repairs when you sell new products; DIY/how-to when the product is not relevant; wholesale when you only sell retail; used/second-hand; unrelated meanings of the same word. The correct negatives depend on the business. Do not import a generic 1,000-word list blindly.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use the search terms report</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Patterns matter more than one odd query. If several variations show the same irrelevant intent and consume meaningful spend, add an appropriate negative at the right level.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Be careful with commercial research searches</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Terms containing &quot;review,&quot; &quot;best,&quot; &quot;vs&quot; or &quot;alternative&quot; may look informational but often sit very close to purchase. Excluding them automatically can remove valuable customers.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Review shared lists and account-level exclusions</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A negative added years ago can quietly block a new product category. Audit old exclusions when the business changes. Negative keywords should make the traffic more relevant, not merely make the search term report look cleaner.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-many-keywords-google-ads-campaign" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How Many Keywords Should a Google Ads Campaign Have?</Link></li>
            <li><Link href="/resources/google-ads-spend-increases-no-more-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Google Ads Spend Increases Without More Sales</Link></li>
            <li><Link href="/resources/broad-match-smart-bidding-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Ecommerce Stores Use Broad Match With Smart Bidding?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a straight answer for your account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If irrelevant Google queries are consuming budget or you inherited a large negative keyword list you no longer trust, contact us.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
