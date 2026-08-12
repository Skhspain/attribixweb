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
  headline: "How Many Abandoned Cart Emails Should a Shopify Store Send?",
  description: "One abandoned-cart email is better than none, but there's no universal reason every store needs exactly three. How to build the sequence around objections and buying cycle.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-many-abandoned-cart-emails-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Abandoned cart email count", item: "https://www.attribix.app/resources/how-many-abandoned-cart-emails-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Abandoned cart email count" }]} />
          <Eyebrow>Email &amp; Retention</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How many abandoned cart emails should a Shopify store send?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            One abandoned-cart email is better than none, but there is no
            universal reason every store needs exactly three messages. The
            right sequence is long enough to answer the customer&apos;s
            likely concerns without turning a cart reminder into a week of
            harassment.
          </p>
        </Reveal>
      </section>

      {/* DIFFERENT JOBS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Give each email a different job</h2>
          <div className="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>A useful sequence might look like:</p>
            <ol className="list-decimal list-inside space-y-1.5 marker:text-cyan-400">
              <li>Reminder: you left these items behind. Make returning easy.</li>
              <li>Reassurance: answer delivery, returns, sizing or product questions.</li>
              <li>Final prompt: use genuine urgency or an incentive only if it fits the economics.</li>
            </ol>
            <p>
              Sending the same &quot;You forgot something&quot; message
              three times adds little.
            </p>
          </div>
        </Reveal>
      </section>

      {/* BUYING CYCLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Consider the buying cycle</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A $30 impulse item may need a short sequence. A $1,500
              purchase can require more time and education.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DISCOUNT CAREFULLY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Discount carefully</h2>
          <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
            If every cart receives a discount quickly, customers can learn
            to abandon on purpose. Test whether the extra recovery exceeds
            the margin given away.
          </p>
        </Reveal>
      </section>

      {/* WATCH BEHAVIOUR */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch total customer behaviour</h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              <p>
                Measure recovery rate, revenue per recipient, unsubscribe
                rate and incremental lift where possible. A
                platform-attributed sale may also receive credit from Meta
                retargeting or Google.
              </p>
              <p>
                Build the flow around actual objections and purchase timing
                rather than an email-marketing template.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/abandoned-cart-email-vs-retargeting-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Abandoned cart email vs Meta retargeting: which should get the credit?
              </Link>
            </li>
            <li>
              <Link href="/resources/should-abandoned-cart-emails-offer-discount" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Should you offer a discount in your abandoned cart emails?
              </Link>
            </li>
            <li>
              <Link href="/resources/good-abandoned-cart-recovery-rate-ecommerce" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                What is a good abandoned cart recovery rate?
              </Link>
            </li>
            <li>
              <Link href="/resources/browse-abandonment-vs-cart-abandonment" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Browse abandonment vs cart abandonment: what&apos;s the difference?
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Make cart-recovery measurement clearer</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your abandoned-cart program reports strong revenue but you
            are unsure how it overlaps with paid retargeting, send us an
            inquiry. We can help make the measurement clearer.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
