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
  headline: "How Many Meta Ads Should You Test at Once?",
  description:
    "Why there is no perfect number of Meta ads to test, and how spend, conversion volume and the question you are asking should set the testing volume.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-many-meta-ads-test-at-once" },
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
      name: "How Many Ads to Test",
      item: "https://www.attribix.app/resources/how-many-meta-ads-test-at-once",
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
              { label: "How Many Ads to Test" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How Many Meta Ads Should You Test at Once?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Testing more creatives sounds like a good idea until your
            budget is spread so thin that none of them gets enough
            delivery to teach you anything.
          </p>
          <p className="mt-4 text-lg text-white/65 max-w-xl leading-relaxed">
            There is no perfect number of Meta ads to test at once. The
            correct number is limited by spend, conversion volume and what
            you are trying to learn.
          </p>
        </Reveal>
      </section>

      {/* START WITH THE QUESTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Start with the question</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A useful creative test should answer something.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            For example: Does customer proof beat product demonstration?
            Does price-led messaging outperform benefit-led messaging? Is
            a static image more efficient than a short video?
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            If you launch 20 unrelated ads at once, you may end up with 20
            outcomes and no clear lesson.
          </p>
        </Reveal>
      </section>

      {/* BUDGET DETERMINES */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Budget determines how many ads can get a fair chance</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A store spending $100 a day cannot support the same test
              volume as an account spending $10,000. Meta will naturally
              concentrate delivery on some ads, meaning several may
              receive very little spend.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              That is not always a problem. The system is supposed to
              allocate delivery. But if your goal is a controlled creative
              learning process, too many simultaneous variables make
              interpretation difficult. Creative volume itself should
              scale with spend too — see{" "}
              <Link href="/resources/how-many-creatives-shopify-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                how many creatives a Shopify store actually needs
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEST CONCEPTS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Test concepts, not tiny cosmetic changes</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Changing one button colour or moving a logo rarely tells you
            much about customer motivation.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Start with meaningful distinctions:
          </p>
          <ul className="mt-3 space-y-1.5 text-white/60 text-sm list-disc list-inside">
            <li>Different hooks</li>
            <li>Different customer problems</li>
            <li>Different proof</li>
            <li>Different offers</li>
            <li>Different formats</li>
          </ul>
          <p className="mt-4 text-white/60 leading-relaxed text-sm">
            Once you find a strong concept, develop variations within it.
            Testing usually surfaces fatigue and burnout signals too — see{" "}
            <Link href="/resources/how-to-tell-meta-ad-fatigue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              how to tell when a Meta ad has hit fatigue
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* KEEP WINNERS ACTIVE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Keep winners active while testing challengers</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Creative testing should not mean repeatedly deleting
              everything that already works. A healthy account can keep
              proven ads generating revenue while allocating a deliberate
              share of spend and production toward finding the next
              winners.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              The right testing volume is therefore the amount your
              budget can support without starving both the current
              winners and the new ideas of meaningful delivery.
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
              <Link href="/resources/how-many-creatives-shopify-meta-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How many creatives does a Shopify store need for Meta ads?
              </Link>
            </li>
            <li>
              <Link href="/resources/how-to-tell-meta-ad-fatigue" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How to tell when a Meta ad has hit fatigue
              </Link>
            </li>
            <li>
              <Link href="/resources/how-often-change-meta-ad-creatives" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                How often should you change Meta ad creatives?
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
          <h2 className="text-2xl md:text-3xl font-extrabold">Turn creative testing into real decisions</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If your Meta account has dozens of ads but very little clear
            learning from them, contact us. We can simplify the testing
            process and build a structure around decisions that matter.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
