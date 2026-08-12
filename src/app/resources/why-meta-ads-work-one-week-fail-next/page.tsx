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
  headline: "Why Meta Ads Work One Week and Fail the Next",
  description:
    "Why Meta Ads volatility is often normal statistical noise rather than a real problem, and how to use rolling windows to tell the difference.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/why-meta-ads-work-one-week-fail-next" },
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
      name: "Work One Week, Fail the Next",
      item: "https://www.attribix.app/resources/why-meta-ads-work-one-week-fail-next",
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
              { label: "Work One Week, Fail the Next" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Why Meta Ads Work One Week and Fail the Next
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Meta Ads performance is rarely a straight line. A campaign can
            have an excellent Monday, a terrible Tuesday and finish the
            week almost exactly on target.
          </p>
          <p className="mt-4 text-lg text-white/65 max-w-xl leading-relaxed">
            That volatility is frustrating, but it does not always mean
            anything needs to be fixed.
          </p>
        </Reveal>
      </section>

      {/* PURCHASES ARE LUMPY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Purchases are lumpy</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Imagine a store expecting five sales per day. Losing two sales
            to normal timing variation can move daily ROAS dramatically. A
            large account generating 500 purchases has far more stable
            percentages.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            The lower the conversion volume, the more dangerous it is to
            manage the account from daily screenshots. Knowing how much
            purchase volume you actually have before reacting is worth
            checking (see{" "}
            <Link href="/resources/how-much-data-does-meta-ads-need" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how much data Meta ads need before you can judge performance
            </Link>
            ).
          </p>
        </Reveal>
      </section>

      {/* AUCTION CHANGES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">The auction changes constantly</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Your ads compete in a live marketplace. Competitor spend,
              seasonal demand, audience availability and placement cost
              change. Your store conversion rate also moves with device
              mix, customer type and product availability.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Even if you change nothing, the environment does. Some of
              that variation follows a weekly pattern of its own (see{" "}
              <Link href="/resources/meta-ads-sales-drop-weekends" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                why Meta ads sales drop on weekends
              </Link>
              ).
            </p>
          </Reveal>
        </div>
      </section>

      {/* GENUINE ISSUE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Weekly performance can also reveal a genuine issue</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Do not dismiss every decline as noise. Look for persistent
            patterns:
          </p>
          <ul className="mt-3 space-y-1.5 text-white/60 text-sm list-disc list-inside">
            <li>CPM rising over several weeks</li>
            <li>Frequency building</li>
            <li>CTR weakening</li>
            <li>Shopify conversion rate falling</li>
            <li>One winner absorbing almost all spend</li>
            <li>Offer or promotion changes</li>
            <li>Stock problems</li>
            <li>Tracking discrepancies</li>
          </ul>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            A sustained CPM rise is worth investigating on its own (see{" "}
            <Link href="/resources/why-is-meta-ads-cpm-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              why Meta ads CPM is so high
            </Link>
            ), and tracking discrepancies are usually easiest to rule out
            against Shopify&apos;s own order data (see{" "}
            <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              why Shopify and Meta ads show different sales numbers
            </Link>
            ).
          </p>
        </Reveal>
      </section>

      {/* ROLLING WINDOWS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Use rolling windows</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Daily data is useful for spotting emergencies. Decisions
              about strategy are usually stronger when you compare broader
              windows and understand how much conversion volume sits
              behind the averages.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              For example, compare the last seven days with the previous
              seven, but also look at 14- and 30-day trends. Then inspect
              the day-level detail to see when the movement began.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DON'T MANUFACTURE INSTABILITY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Don&apos;t manufacture instability</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Accounts become even more volatile when advertisers respond to
            every bad day with new budgets, audiences and creatives. The
            account never gets a chance to show whether the decline was
            temporary.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            The aim is not perfectly stable daily ROAS. It is stable
            enough business economics over a meaningful period.
          </p>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/meta-ads-sales-drop-weekends" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Meta ads sales drop on weekends
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-ads-roas-dropped" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta ads ROAS dropped suddenly? Ads, website or tracking
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta ads show different sales numbers
              </Link>
            </li>
            <li>
              <Link href="/resources/how-much-data-does-meta-ads-need" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much data does Meta ads need before you can judge performance?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Tell normal variance from real deterioration</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta account feels unpredictable and you are changing
            things constantly without understanding why results move,
            contact us. We can help separate normal variance from real
            deterioration.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
