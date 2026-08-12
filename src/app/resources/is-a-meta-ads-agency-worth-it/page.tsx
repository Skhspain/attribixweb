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
  "headline": "Is a Meta Ads Agency Worth It?",
  "description": "A Meta Ads agency is worth it when the value of better decisions, execution and freed-up internal time exceeds the fee.",
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
    "@id": "https://www.attribix.app/resources/is-a-meta-ads-agency-worth-it"
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
      "name": "Is a Meta Ads Agency Worth It",
      "item": "https://www.attribix.app/resources/is-a-meta-ads-agency-worth-it"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Is a Meta Ads Agency Worth It" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Is a Meta Ads Agency Worth It?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A Meta Ads agency is worth it when the value of better decisions, execution and freed-up internal time exceeds the fee. That sounds obvious, but it is a better test than “Can I run Ads Manager myself?”
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Most business owners can technically launch a campaign. The harder work is diagnosing why performance changes, building creative systems, connecting ads to the website and tracking, and knowing when not to make a change.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When an agency can add meaningful value</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            The case is strongest when:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>ad spend is large enough that small efficiency gains matter</li>
            <li>the account needs regular creative testing</li>
            <li>Meta and Shopify numbers do not reconcile</li>
            <li>the founder is spending too much time in Ads Manager</li>
            <li>performance has plateaued</li>
            <li>multiple countries/products make budget allocation complex</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When it may not be worth it</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              A very early store with little sales evidence and a tiny advertising budget may be better served by improving the product, offer and website first. An agency cannot manufacture product-market fit.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare fee with opportunity cost</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A $2,000 monthly management fee is expensive on $1,000 ad spend. On $100,000 monthly spend, preventing a 5% efficiency loss can be worth much more than the fee.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Choose the agency carefully</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Ask who manages the account, how creative is handled, how tracking is verified, who owns the ad account and how success is measured beyond platform ROAS.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/is-a-google-ads-agency-worth-it" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is a Google Ads Agency Worth It?</Link></li>
            <li><Link href="/resources/is-an-ecommerce-marketing-agency-worth-the-cost" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Is an Ecommerce Marketing Agency Worth the Cost?</Link></li>
            <li><Link href="/resources/freelancer-vs-marketing-agency-which-should-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Freelancer vs Marketing Agency: Which Should Ecommerce Brands Hire?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure what you should be getting?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are considering external Meta Ads management and want to know whether your account is large or complex enough to benefit, send us an inquiry. We&apos;ll tell you candidly whether we think we can add value.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
