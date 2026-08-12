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
  headline: "Can Server-Side Tracking Improve Ad Performance?",
  description: "Server-side tracking can improve the quality and resilience of conversion signals sent to advertising platforms. It does not guarantee lower CPA or higher revenue.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/can-server-side-tracking-improve-ad-performance" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Server-side tracking and ad performance", item: "https://www.attribix.app/resources/can-server-side-tracking-improve-ad-performance" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Server-side tracking and ad performance" }]} />
          <Eyebrow>Tracking &amp; Privacy</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Can server-side tracking improve ad performance?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Server-side tracking can improve the quality and resilience of
            conversion signals sent to advertising platforms. That can help
            optimization when browser-side measurement is incomplete. It
            does not guarantee lower CPA or higher revenue.
          </p>
        </Reveal>
      </section>

      {/* WHY THE SIGNAL MATTERS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Why the signal can matter</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              Ad systems learn from observed conversions. If genuine
              purchases are missing because browser events are blocked or
              unreliable, the platform has less feedback.
            </p>
            <p>
              A correctly implemented server-side setup can recover some
              eligible signals and send richer first-party matching
              information, subject to consent and platform rules.
            </p>
          </div>
        </Reveal>
      </section>

      {/* REPORTING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Better reporting may be the first visible change</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                After implementation, Meta or Google may report more
                purchases because previously missing events are now
                measured. Shopify sales can remain exactly the same.
              </p>
              <p>
                That is not fake improvement. It is better measurement. But
                it should not be presented as new sales created by the
                tracking system. That distinction is covered further in{" "}
                <Link href="/resources/does-better-tracking-improve-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                  why better tracking doesn&apos;t automatically create more sales
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NOT INVISIBLE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Server-side is not invisible tracking</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Privacy, consent, platform terms and legal obligations still
            apply. It is not a method for bypassing user choices.
          </p>
        </Reveal>
      </section>

      {/* QUALITY MATTERS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Quality of implementation matters</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Duplicate events, wrong transaction IDs or incorrect values
              can make measurement worse. Test browser/server
              deduplication and purchase accuracy carefully.
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
              <Link href="/resources/shopify-server-side-tracking-guide" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How Shopify server-side tracking works
              </Link>
            </li>
            <li>
              <Link href="/resources/does-better-tracking-improve-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why more accurate tracking doesn&apos;t automatically create more sales
              </Link>
            </li>
            <li>
              <Link href="/resources/meta-pixel-vs-capi-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Pixel vs Conversions API for Shopify
              </Link>
            </li>
            <li>
              <Link href="/server-side-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify server-side tracking
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Find out whether signal quality is the problem</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If you are considering server-side tracking for Shopify, send
            us an inquiry or explore Attribix&apos;s tracking features. We
            can help determine whether signal quality is actually part of
            the problem.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
