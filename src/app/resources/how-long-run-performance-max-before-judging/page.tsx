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
  "headline": "How Long Should a New Performance Max Campaign Run Before You Judge It?",
  "description": "A new PMax campaign needs enough time and conversions to show a pattern, but there is no responsible answer such as \"always wait six weeks.\"",
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
    "@id": "https://www.attribix.app/resources/how-long-run-performance-max-before-judging"
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
      "name": "How Long Should a New Performance Max...",
      "item": "https://www.attribix.app/resources/how-long-run-performance-max-before-judging"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Long Should a New Performance Max..." }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Long Should a New Performance Max Campaign Run Before You Judge It?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A new PMax campaign needs enough time and conversions to show a pattern, but there is no responsible answer such as &quot;always wait six weeks.&quot;
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Conversion volume matters more than days</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              A store producing 100 purchases a day can learn more in three days than a high-AOV store producing three purchases a month can learn in six weeks. Judge confidence against the number of useful outcomes, not the calendar alone.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Verify foundations immediately</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              You should not wait patiently if: purchase tracking is wrong; Merchant Center products are disapproved; the landing page is broken; the campaign targets the wrong country; conversion goals are incorrect. Those are setup issues, not learning.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Expect volatility early</h2>
          <div className="space-y-4">
            <p className="text-white/60 leading-relaxed text-sm">
              Automated bidding explores opportunities and may shift product distribution during early delivery. Avoid reacting to every short-term movement.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Compare against a meaningful baseline</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Look at Shopify sales, Google conversion value, product performance and new-customer contribution. If possible, compare to the previous campaign setup or broader store trend. A new PMax campaign should be given enough data to be judged fairly, but &quot;give it more time&quot; should never become an excuse for ignoring obvious bad economics.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/performance-max-brand-search-overspending" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max Is Overspending on Branded Searches: What to Do</Link></li>
            <li><Link href="/resources/performance-max-learning-period-avoid-changing" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Performance Max Learning Period: What Should You Avoid Changing?</Link></li>
            <li><Link href="/resources/why-performance-max-stops-spending" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Why Performance Max Stops Spending</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want a straight answer for your account?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you launched PMax and do not know whether the campaign needs patience or intervention, contact us. We can assess the data against your actual sales volume.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
