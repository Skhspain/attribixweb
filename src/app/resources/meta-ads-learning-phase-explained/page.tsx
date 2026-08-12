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
  headline: "Meta Ads Learning Phase Explained: Should You Worry About It?",
  description:
    "Why learning exists, what disrupts it, and why judging performance against real business outcomes matters more than the delivery label.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ads-learning-phase-explained" },
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
      name: "Meta Ads Learning Phase Explained",
      item: "https://www.attribix.app/resources/meta-ads-learning-phase-explained",
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
              { label: "Meta Ads Learning Phase Explained" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads Learning Phase Explained: Should You Worry About It?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The learning phase is useful context, but it should not
            become the thing you optimize your entire business around.
            Meta uses early delivery to understand which people,
            placements and opportunities are most likely to produce the
            event you have asked it to optimize for. Advertisers often
            see the &ldquo;Learning&rdquo; status and assume they must
            not touch anything under any circumstances. That is too
            simplistic.
          </p>
        </Reveal>
      </section>

      {/* WHY LEARNING EXISTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why learning exists</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A purchase campaign is asking Meta to find people likely to
            buy, not merely click. It needs conversion feedback to improve
            that prediction. More useful conversion volume generally gives
            the system more information.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Large accounts can accumulate that feedback quickly. Smaller
            stores may take much longer. Some low-volume campaigns may
            never gather enough events to look beautifully &ldquo;stable&rdquo;
            in the interface and can still be commercially useful, which
            is the same conclusion covered in{" "}
            <Link href="/resources/how-much-data-does-meta-ads-need" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how much data Meta ads actually needs before you can judge performance
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* WHAT DISRUPTS LEARNING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What can disrupt learning?</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Significant edits can cause the delivery system to reassess
              the campaign. Depending on Meta&apos;s current campaign
              architecture, changes to budgets, targeting, optimization
              settings, creatives or other major variables can alter
              delivery materially.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              That is a reason to avoid constant tinkering. It is not a
              reason to leave a bad setup untouched. If your conversion
              tracking is broken, your product page is down or the
              campaign is targeting the wrong market, preserving the
              learning phase is the least important problem you have.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LEARNING LIMITED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">&ldquo;Learning limited&rdquo; does not automatically mean &ldquo;bad&rdquo;</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            This label often appears when a setup is not generating much
            of the optimization event. That may indicate fragmentation,
            insufficient budget or an event that occurs too rarely. But
            judge the business outcome too.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            A campaign generating profitable sales at acceptable volume
            does not suddenly become worthless because the interface
            displays an undesirable label.
          </p>
        </Reveal>
      </section>

      {/* WHAT TO DO */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What should you actually do?</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Keep structure reasonably simple, avoid unnecessary changes,
              give the system clean conversion signals and judge
              performance against real business outcomes.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              If a campaign is struggling, ask why. Is the audience too
              fragmented? Is the budget spread across too many ad sets? Is
              purchase tracking reliable? Is the offer converting? Those
              questions are more useful than treating &ldquo;Learning&rdquo;
              as a problem by itself.
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
              <Link href="/resources/how-long-should-meta-ads-run-before-changes" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How long should you let Meta Ads run before making changes?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-much-data-does-meta-ads-need" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How much data does Meta Ads need before you can judge performance?
              </Link>
            </li>
            <li>
              <Link href="/resources/advantage-plus-shopping-campaigns-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you use Advantage+ Shopping Campaigns for Shopify?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Constantly stuck in learning or limited delivery?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta account is constantly entering learning or
            showing limited delivery and you are unsure whether structure,
            budget or tracking is responsible, send us an inquiry.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
