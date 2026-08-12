"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "How much should I increase budget by at once?",
    a: "Smaller, measured increases you can attribute a clear before-and-after to tend to be more useful than large jumps, since a big jump makes it harder to isolate whether a change in performance came from the extra budget or from something else happening at the same time.",
  },
  {
    q: "What's the first sign scaling is going too far?",
    a: "Marginal CPA (the cost of the next batch of conversions specifically, not your blended average) climbing faster than your margin can absorb. Blended CPA can still look fine for a while even as the newest spend is becoming distinctly less efficient.",
  },
  {
    q: "Is frequency creep only a Meta concept?",
    a: "The specific frequency metric is a Meta/paid social concept, but the underlying idea (showing the same audience your ads more and more often as you spend more against a limited pool) applies conceptually anywhere you're scaling within a finite audience.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Your Ads Are Profitable: When Should You Increase the Budget?",
  description: "What actually limits how far a profitable campaign can scale.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/when-to-scale-ad-budget" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "When to scale ad budget", item: "https://www.attribix.app/resources/when-to-scale-ad-budget" },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "When to scale ad budget" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Your ads are profitable: when should you increase the budget?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A campaign being profitable today doesn&apos;t mean it stays
            equally profitable at twice the spend. Scaling is a controlled
            test you run and measure, not a decision you make once and
            walk away from.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Watch marginal CPA, not blended CPA</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Your blended average CPA can look stable even while the cost of
            each additional conversion from new budget is rising, simply
            because it's averaged in with everything that was already
            performing well. After a budget increase, look specifically at
            the incremental conversions from that extra spend. If the
            cost of those specifically is climbing faster than your margin
            can absorb, you've likely found where the current ceiling is.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Available demand isn&apos;t unlimited</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Every audience and every search category has a finite pool of
              people actively interested at any given time. Pushing budget
              past what that pool can absorb means reaching further into
              lower-intent audiences or showing the same people your ads
              more often, both of which tend to raise cost per result even
              while total spend and total conversions both go up.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Frequency and creative fatigue</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            On Meta specifically, rising frequency alongside a budget
            increase is a useful early signal: it means the same people
            are seeing your ads more often rather than new people being
            reached. Creative supply needs to scale roughly in step with
            budget; the same handful of ad variations shown to a much
            larger audience wear out faster than people expect.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Cash flow and fulfillment are real ceilings too</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A campaign can be mathematically scalable and still outrun
              what the business can actually handle: inventory depth,
              fulfillment capacity, and the cash flow gap between paying
              for ads now and collecting margin from orders later. Scaling
              spend faster than the business can fulfill or finance isn&apos;t
              a marketing win even if the ROAS number holds up on paper.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Treat scaling as a test, not a decision</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Increase, measure the marginal impact specifically, and decide
            again, rather than committing to one large jump and hoping
            performance holds. And consider whether some of the increase
            should go to a second channel instead of pushing one channel
            further past its efficient range; diversifying is often a
            better next move than forcing more spend through an audience
            that's already showing signs of saturation.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources/shopify-advertising-budget-how-much-to-spend" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How much should a Shopify store spend on ads?</Link></li>
            <li><Link href="/resources/meta-ads-vs-google-ads-shopify-budget" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Meta Ads vs Google Ads: where to spend your budget</Link></li>
            <li><Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Shopify ROAS tracking</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want help scaling it properly?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Send us an inquiry and we can help test how far your current
            campaigns can scale before returns start softening.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
