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
    q: "Meta ROAS dropped but Shopify revenue looks the same. Is that normal?",
    a: "It happens more often than you'd think, and it points at measurement rather than a real decline. Meta can only report ROAS on the purchases it can attribute to itself. If something changed in how the Pixel or Conversions API is firing, Shopify keeps recording real orders while Meta's version of the same period shows fewer of them.",
  },
  {
    q: "How long should I wait before reacting to a ROAS drop?",
    a: "Meta's reporting revises for several days as attribution windows close, so a drop that shows up today can partly correct itself by the end of the week. Give it at least three to four days of stable data before treating a dip as a real trend rather than reporting lag.",
  },
  {
    q: "Could a Shopify app or theme update cause this?",
    a: "Yes, this is one of the more common causes. Theme updates, checkout customizations, cookie consent tools, and app installs can all interfere with pixel or event firing without breaking anything visible to the customer. If the drop lines up with a change like that, check tracking before anything else.",
  },
  {
    q: "Is a rising CPM always a bad sign?",
    a: "No. CPM rising because of seasonal competition or a larger targeted audience doesn't hurt ROAS by itself: what matters is whether your conversion rate held up against the higher cost. Check CPA and ROAS together rather than reacting to CPM alone.",
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
  headline: "Meta Ads ROAS Dropped Suddenly: Ads, Website or Tracking?",
  description:
    "A sudden ROAS drop can mean real performance decline or a tracking gap making performance look worse than it is. Here's how to tell which one you're looking at.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: {
    "@type": "Organization",
    name: "Attribix",
    url: "https://www.attribix.app",
    logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/meta-ads-roas-dropped" },
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
      name: "Meta Ads ROAS Dropped Suddenly",
      item: "https://www.attribix.app/resources/meta-ads-roas-dropped",
    },
  ],
};

export default function Page() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 md:pt-32">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Meta Ads ROAS Dropped" },
            ]}
          />
          <Eyebrow>Meta Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Meta Ads ROAS Dropped Suddenly: Ads, Website or Tracking?
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            The first question isn&apos;t &ldquo;why did performance get
            worse&rdquo;. It&apos;s whether performance actually got worse
            at all. A ROAS drop inside Meta can mean the ads stopped working,
            or it can mean Meta simply stopped seeing purchases it used to
            see. Those need completely different responses.
          </p>
        </Reveal>
      </section>

      {/* REAL VS REPORTED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Check Shopify revenue before you touch the campaign</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            Open Shopify&apos;s own analytics for the same date range Meta is
            reporting on. If total store revenue held roughly steady while
            Meta&apos;s reported ROAS fell, the most likely explanation is
            that Meta stopped attributing orders it used to attribute: a
            tracking or measurement gap, not a performance problem. If
            Shopify revenue dropped too, over the same period, you&apos;re
            probably looking at a real decline in how the ads are
            performing, and it&apos;s worth working through the same
            click-to-purchase funnel breakdown we cover in{" "}
            <Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              our guide to clicks without sales
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* SIGNAL TABLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Reading the combination of signals</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl mb-6">
              No single metric tells you what happened. It&apos;s the
              combination that narrows down the cause:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-4 py-3 font-semibold text-white/80">What you see</th>
                    <th className="px-4 py-3 font-semibold text-white/80">Most likely cause</th>
                  </tr>
                </thead>
                <tbody className="text-white/60">
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3">Meta ROAS down, Shopify revenue stable</td>
                    <td className="px-4 py-3">Measurement/tracking gap, not a real drop</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3">Meta ROAS down, Shopify revenue also down</td>
                    <td className="px-4 py-3">Real ads or market performance problem</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3">CPM up, CTR stable</td>
                    <td className="px-4 py-3">Auction competition, seasonality, audience size: not necessarily bad</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3">CTR down</td>
                    <td className="px-4 py-3">Creative fatigue or targeting drift</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3">Conversion rate down, traffic quality unchanged</td>
                    <td className="px-4 py-3">Landing page, offer, or a tracking event that stopped firing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Purchases vanish right after a site or tracking change</td>
                    <td className="px-4 py-3">Tracking: check the change first</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CPM SECTION */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">A rising CPM isn&apos;t the same as a real problem</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            It&apos;s tempting to treat a CPM increase as the explanation for
            a ROAS drop, but CPM only measures what you&apos;re paying for
            reach, not whether that reach converts. CPM commonly rises
            around competitive periods like Q4, when more advertisers are
            bidding into the same auction, or when an audience has simply
            gotten smaller relative to how much you&apos;re spending into it.
            If CTR and conversion rate held steady through a CPM increase,
            ROAS moves mechanically with cost per result, and that&apos;s a
            budget-efficiency question, not evidence the campaign broke. We
            cover this distinction in more depth in{" "}
            <Link href="/resources/why-is-meta-ads-cpm-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              why your Meta CPM is high
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* CREATIVE FATIGUE / TARGETING */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">When CTR itself has dropped</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              A falling click-through rate on creative that used to perform
              well is usually one of two things: the audience has seen the
              ad enough times that it&apos;s stopped earning attention
              (frequency climbing alongside the CTR drop is the tell), or
              Meta&apos;s delivery has drifted the ad toward a less relevant
              slice of the audience since the last time you touched targeting
              or budget. Either way, this is a real performance signal worth
              acting on: new creative or a targeting reset, not a tracking
              question.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRACKING CHANGE TRIGGER */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Purchases disappearing right after a change</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If the ROAS drop lines up almost exactly with a theme update, a
            new checkout app, a consent-management tool going live, or any
            other change to the storefront, treat tracking as the prime
            suspect before anything else. A Pixel or Conversions API event
            that stops firing doesn&apos;t announce itself. Orders keep
            happening in Shopify, Meta just stops hearing about a portion of
            them, and the ROAS chart drops as if performance collapsed. Running
            server-side purchase events from Shopify&apos;s own order data,
            alongside the browser Pixel, is what closes this specific gap.
            See{" "}
            <Link href="/server-side-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              Shopify server-side tracking
            </Link>{" "}
            for how it works. For the fuller breakdown of why platform and
            store numbers diverge in general, see{" "}
            <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              why Shopify and Meta sales don&apos;t match
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Common questions</h2>
          <FAQList items={FAQ_ITEMS} />
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold mb-4">Related reading</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/meta-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Meta Ads getting clicks but no sales: full funnel diagnosis
              </Link>
            </li>
            <li>
              <Link href="/resources/why-shopify-meta-sales-dont-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Shopify and Meta sales numbers don&apos;t match
              </Link>
            </li>
            <li>
              <Link href="/resources/why-is-meta-ads-cpm-high" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why is my Meta Ads CPM so high?
              </Link>
            </li>
            <li>
              <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Shopify ROAS tracking
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Still not sure what&apos;s causing it?</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            If Meta, Google and Shopify are telling you different things,
            send us an inquiry: we can review the setup and help determine
            whether it&apos;s advertising performance, your website,
            tracking, or attribution.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
