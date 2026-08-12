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
    q: "Should conversion value include tax and shipping?",
    a: "There's no single correct answer enforced by Google Ads: it depends on what your implementation sends. What matters is consistency: if the native tag and any imported GA4 value are built from different definitions of the order total, they'll disagree even though both are technically working.",
  },
  {
    q: "Why does Performance Max care more about this than Search?",
    a: "PMax's automated bidding optimizes directly against whatever conversion value it receives. Manually managed Search campaigns are steered by more than value alone, so a value error has a smaller direct effect on bidding decisions there than it does in a value-based PMax campaign.",
  },
  {
    q: "Can currency issues affect stores that only sell in one currency?",
    a: "Less commonly, but it's still worth checking the conversion action's currency setting against the store's actual transaction currency directly rather than assuming they match. A mismatch here silently multiplies or divides every reported value by the conversion rate difference.",
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
  headline: "Google Ads Conversion Value Is Wrong on Shopify",
  description: "What determines the value Google Ads reports for a Shopify order, and the specific mechanics (subtotal vs total, currency, duplication, GA4 import) that make it diverge from the real order total.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-conversion-value-wrong-shopify" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Conversion value is wrong", item: "https://www.attribix.app/resources/google-ads-conversion-value-wrong-shopify" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Conversion value is wrong" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads conversion value is wrong on Shopify
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            A wrong conversion value almost never comes from a single
            obvious bug. It&apos;s usually one of a handful of definitional
            mismatches: what counts as &quot;value&quot; in the first place, which
            currency it&apos;s reported in, whether duplicate conversions are
            doubling it, or whether a GA4 import and the native tag disagree
            about how to calculate the same order. Each produces a
            different-shaped error, which is the fastest way to tell them
            apart.
          </p>
        </Reveal>
      </section>

      {/* WHAT VALUE MEANS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">What &quot;value&quot; actually means in the tag</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            The conversion value Google Ads reports comes from whatever
            number the implementation decides to pass as the purchase
            event&apos;s value parameter at the moment it fires. There&apos;s no
            single Shopify-mandated definition of that number: it can be
            cart subtotal, order total including tax and shipping, or total
            minus a discount code, depending entirely on how the theme,
            the Google &amp; YouTube app, or a manual GTM setup populates it.
            The value is only &quot;wrong&quot; relative to whatever you expected it
            to represent, which is exactly why it&apos;s worth confirming what
            your own setup actually sends before assuming a bug.
          </p>
        </Reveal>
      </section>

      {/* EXAMPLE TABLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">One order, two different reported values</h2>
            <p className="text-white/65 leading-relaxed text-sm">
              Illustrative example: a single $95 order, where the native
              Google tag sends the full checkout total and a GA4-imported
              conversion action sends subtotal only:
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2.5 text-white/55">Cart subtotal</td>
                  <td className="py-2.5 text-right font-medium text-white/80">$95.00</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2.5 text-white/55">Discount code (–10%)</td>
                  <td className="py-2.5 text-right font-medium text-white/80">–$9.50</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2.5 text-white/55">Sales tax</td>
                  <td className="py-2.5 text-right font-medium text-white/80">+$7.20</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2.5 text-white/55">Shipping</td>
                  <td className="py-2.5 text-right font-medium text-white/80">+$6.80</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2.5 text-white/55">Total charged at checkout</td>
                  <td className="py-2.5 text-right font-medium text-white/80">$99.50</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2.5 text-cyan-200 font-medium">Value sent by native Google tag (checkout total)</td>
                  <td className="py-2.5 text-right font-semibold text-cyan-200">$99.50</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-cyan-200 font-medium">Value sent via GA4 import (subtotal after discount only)</td>
                  <td className="py-2.5 text-right font-semibold text-cyan-200">$85.50</td>
                </tr>
              </tbody>
            </table>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-sm text-white/45 max-w-2xl">
              Neither number is necessarily wrong on its own. Both are
              internally consistent with how each path defines value. The
              problem is having both live as conversion actions
              simultaneously, reporting two different revenue figures for
              the identical order and leaving whichever one you&apos;re looking
              at unrepresentative of the other.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CURRENCY */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Currency mismatches</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            If the store sells in a currency different from the Google Ads
            account&apos;s billing currency, and the conversion action isn&apos;t
            explicitly configured to declare the currency it&apos;s receiving,
            Google Ads can treat the incoming number as face value in the
            wrong currency rather than converting it, which either
            multiplies or divides every reported figure by whatever the
            exchange rate happens to be. Multi-currency Shopify stores are
            especially exposed here, since the value passed can come from
            either the shop&apos;s default currency or the customer&apos;s
            presentment currency depending on how the event is built, and
            those aren&apos;t always the same number.
          </p>
        </Reveal>
      </section>

      {/* ATTRIBIX MENTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Attribix sends order value from Shopify to Google Ads using a
              single, consistent definition per order and shows it next to
              what Google Ads actually recorded, so a subtotal-vs-total or
              currency mismatch is visible as a specific per-order gap
              instead of a mysterious dip in reported revenue. See how it
              connects on the{" "}
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>{" "}
              page.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DUPLICATES INFLATING VALUE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Duplicate conversions inflate aggregate value even when per-order value is correct</h2>
          <p className="text-white/60 leading-relaxed text-sm">
            A subtly different failure mode: each individual order&apos;s value
            is calculated correctly, but the order is counted twice because
            two conversion actions or two tag implementations both fired for
            it. The per-order figure looks right when you spot-check one
            order; the total looks wrong because it&apos;s doubled across every
            order that hit the same duplication. Worth checking count and
            value together rather than value alone. See{" "}
            <Link href="/resources/google-ads-duplicate-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              duplicate Google Ads conversions on Shopify
            </Link>{" "}
            for the mechanics behind that specific pattern.
          </p>
        </Reveal>
      </section>

      {/* TRANSACTION ID */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Transaction ID matters for value too, not just counting</h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Transaction ID&apos;s main job is deduplication, but it also
              controls whether a later correction reaches the original
              conversion. A refund or cancellation reported back to Google
              Ads as a conversion adjustment references the transaction ID
              to find which recorded conversion to reduce. If the ID on the
              adjustment doesn&apos;t match the ID on the original event (a
              common gap when refunds are handled through a different system
              or app than the original purchase tracking) the value never
              gets corrected, and the original, pre-refund figure stays in
              Google Ads&apos; reporting indefinitely.
            </p>
          </Reveal>
        </div>
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
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-duplicate-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Duplicate Google Ads conversions on Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Google Ads and Shopify revenue don&apos;t match
              </Link>
            </li>
            <li>
              <Link href="/tools/roas-calculator" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                ROAS calculator
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">When the value gap needs account-level tracing</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Comparing definitions and settings covers most of this. When the
            gap persists after checking them, or spans multiple conversion
            actions and imports, that&apos;s worth a closer look from someone
            in the account.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
