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
  "headline": "Email Open Rate Is High but Sales Are Low: What Does That Mean?",
  "description": "A high open rate tells you that the message was opened or at least recorded as opened.",
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
    "@id": "https://www.attribix.app/resources/high-email-open-rate-low-sales"
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
      "name": "Email Open Rate Is High but Sales Are Low",
      "item": "https://www.attribix.app/resources/high-email-open-rate-low-sales"
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Email Open Rate Is High but Sales Are Low" }]} />
          <Eyebrow>Email & Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Email Open Rate Is High but Sales Are Low: What Does That Mean?
          </h1>
          <div className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed space-y-3">
            <p className="text-white/60 leading-relaxed text-sm">
              A high open rate tells you that the message was opened or at least recorded as opened. It does not tell you that the content created purchase intent.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Privacy-related changes also make open data less reliable than it once was, so treat the metric carefully.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Look at the next step</h2>
          <div className="space-y-4">

          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">High opens + low clicks</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              The subject line earned attention, but the email content or offer did not create enough reason to act.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">High clicks + low sales</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            Follow customers into the website. Product, price, landing page or checkout may be the problem.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Low tracked clicks + Shopify sales</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Attribution or direct-return behaviour may mean the platform is not seeing the full path.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Avoid subject-line clickbait</h2>
          <div className="space-y-4">
          <p className="text-white/60 leading-relaxed text-sm">
            A sensational subject can inflate opens and create disappointment after the email loads.
          </p>
          </div>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Measure revenue per recipient and downstream conversion</h2>
            <div className="space-y-4 max-w-2xl">
            <p className="text-white/60 leading-relaxed text-sm">
              Those metrics connect communication more closely to commercial performance than open rate alone.
            </p>
            <p className="text-white/60 leading-relaxed text-sm">
              Opens are an early diagnostic signal. Sales happen much later in the funnel.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/good-email-click-rate-but-no-sales-what-to-check" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Good Email Click Rate but No Sales: What to Check</Link></li>
            <li><Link href="/resources/are-you-sending-too-many-marketing-emails" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Are You Sending Too Many Marketing Emails?</Link></li>
            <li><Link href="/resources/how-to-measure-email-profitability-instead-of-just" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to Measure Email Profitability Instead of Just Revenue</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Not sure the flow is pulling its weight?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your email engagement looks healthy but Shopify revenue does not follow, send us an inquiry. We can help diagnose the gap across channels.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
