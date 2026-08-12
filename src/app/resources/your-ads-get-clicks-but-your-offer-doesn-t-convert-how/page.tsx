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
  "headline": "Your Ads Get Clicks but Your Offer Doesn't Convert: How to Tell",
  "description": "When ads get qualified clicks and the website works technically, the problem may be the offer itself.",
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
    "@id": "https://www.attribix.app/resources/your-ads-get-clicks-but-your-offer-doesn-t-convert-how"
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
      "name": "Your Ads Get Clicks but Your Offer Doesn't...",
      "item": "https://www.attribix.app/resources/your-ads-get-clicks-but-your-offer-doesn-t-convert-how"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Your Ads Get Clicks but Your Offer Doesn't..." }]} />
          <Eyebrow>CRO & Landing Pages</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Your Ads Get Clicks but Your Offer Doesn&apos;t Convert: How to Tell
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              When ads get qualified clicks and the website works technically, the problem may be the offer itself.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              The difficult part is separating an offer problem from a traffic or page problem.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at product engagement</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            If visitors:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>view product details</li>
            <li>scroll</li>
            <li>read reviews</li>
            <li>interact with variants</li>
          </ul>
          <p className="text-white/60 leading-relaxed text-sm">
            but rarely add to cart, they may understand the product and simply not think the deal is attractive enough.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare against intent</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              High-intent Google traffic is useful here. If people explicitly searching for the product category reach a relevant page and still do not buy, offer competitiveness deserves attention.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What is part of the offer?</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            More than price:
          </p>
          <ul className="list-disc list-inside space-y-1.5 marker:text-cyan-400">
            <li>product</li>
            <li>price</li>
            <li>bundle</li>
            <li>shipping</li>
            <li>guarantee</li>
            <li>delivery</li>
            <li>payment terms</li>
            <li>bonus</li>
            <li>returns</li>
          </ul>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare competitors honestly</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Does the customer have a reason to pay your price rather than choose another option?
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test meaningful changes</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A new ad headline will not solve an uncompetitive offer. Test shipping, bundle, guarantee, pricing or product presentation one variable at a time where practical.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/how-to-know-whether-your-ecommerce-offer-is-the-problem" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Know Whether Your Ecommerce Offer Is the Problem</Link></li>
            <li><Link href="/resources/does-showing-savings-in-dollars-convert-better-than" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Does Showing Savings in Dollars Convert Better Than Percentages?</Link></li>
            <li><Link href="/resources/should-shopify-app-costs-count-as-marketing-costs" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Should Shopify App Costs Count as Marketing Costs?</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure where the page loses customers?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If paid traffic looks qualified but customers still do not think the purchase is worth it, contact us. We can help determine whether the offer is the real bottleneck.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
