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
    q: "Should I only consider agencies that specialize in my exact product category?",
    a: "Category specialization helps but isn't essential. What matters more is genuine ecommerce and Shopify experience — the mechanics of feed data, tracking, and margin-aware decision-making transfer across categories more than people assume.",
  },
  {
    q: "Is it a red flag if an agency won't guarantee a specific ROAS?",
    a: "It's the opposite. No one running a real account can honestly guarantee a specific return before seeing your numbers — market conditions, product economics and starting point all matter too much. Be more cautious of agencies that guarantee results upfront than ones that ask for account history first.",
  },
  {
    q: "Who should own the ad account — me or the agency?",
    a: "Generally you, on your own business assets, with the agency granted admin access. That way historical data, audiences and account history stay with you if the relationship ends, rather than starting over with a new agency's account.",
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
  headline: "How to Choose a Meta Ads Agency for Ecommerce",
  description: "What actually separates a good ecommerce Meta Ads agency from a generic one.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/how-to-choose-a-meta-ads-agency" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Choosing a Meta Ads agency", item: "https://www.attribix.app/resources/how-to-choose-a-meta-ads-agency" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Choosing a Meta Ads agency" }]} />
          <Eyebrow>Marketing & Agency</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            How to choose a Meta Ads agency for ecommerce
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Most searches on this end up at a ranked list of "best
            agencies." That's not this. This is a framework for evaluating
            whoever you're actually talking to — the questions that
            separate someone who genuinely understands ecommerce accounts
            from someone who's good at sales calls.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Real ecommerce and Shopify experience</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Lead-gen Meta advertising and ecommerce Meta advertising are
            different disciplines — different optimization events, offer
            structures, and creative needs. Ask specifically about Shopify
            experience: product feed handling, checkout constraints, and
            how they've set up tracking on stores like yours before.
            Vague answers about "performance marketing" without specifics
            are worth pressing on.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Who owns the account</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Find out upfront whether campaigns run on your business's ad
              account with the agency granted access, or on the agency's
              own account. The first keeps your history, audiences and
              learnings with you if you ever switch agencies. The second
              means starting from zero elsewhere — worth knowing before you
              sign, not after you leave.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Reporting transparency</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Ask what metrics they lead with in reporting. An agency that
            leads with platform-reported ROAS alone, without reconciling
            it against actual Shopify revenue, is either not paying
            attention to the gap or hoping you won't ask about it. Ask how
            they'd explain a week where Meta's numbers and your Shopify
            orders disagree.
          </p>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Tracking and attribution competence</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Ask directly whether they set up and maintain the Conversions
              API, how they handle Pixel and server-side deduplication,
              and what Event Match Quality means to them. An agency
              focused purely on campaign structure and creative, with no
              real answer on tracking, is missing half of what actually
              determines reported performance on Meta.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Creative process, landing pages, and contract terms</h2>
          <p className="text-white/60 leading-relaxed text-sm mb-4">
            A few more practical things worth asking before signing:
          </p>
          <ul className="space-y-2 text-sm text-white/60 list-disc pl-5">
            <li>Do they produce creative in-house, source it, or expect you to supply it?</li>
            <li>What's their testing cadence for new creative and audiences?</li>
            <li>Will they weigh in on landing page performance, or treat it as entirely out of scope?</li>
            <li>What's the contract length, and what's the actual exit process if it doesn't work out?</li>
            <li>How often do you communicate, and who's your actual point of contact day to day?</li>
          </ul>
        </Reveal>
      </section>

      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Red flags worth taking seriously</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Guaranteed results before seeing your account. Vague or
              inconsistent reporting. Reluctance to grant you visibility
              into the ad account itself. Dismissing questions about
              tracking or attribution as unimportant. None of these are
              automatically disqualifying on their own, but more than one
              together is worth taking seriously.
            </p>
          </Reveal>
        </div>
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
            <li><Link href="/resources/how-to-choose-a-google-ads-agency" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">How to choose a Google Ads agency for ecommerce</Link></li>
            <li><Link href="/resources/what-does-a-meta-ads-agency-do" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">What does a Meta Ads agency actually do?</Link></li>
            <li><Link href="/resources/marketing-agency-vs-in-house" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">Marketing agency vs in-house</Link></li>
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Want to talk it through?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            We manage Meta Ads with the same tracking and measurement
            focus described in this guide. Send us an inquiry if you'd
            like to compare notes.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
