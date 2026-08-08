"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import { ProductCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const FAQ_ITEMS = [
  {
    q: "What are Google Enhanced Conversions?",
    a: "A feature that sends hashed first-party customer data, like email, alongside a standard conversion, so Google can match conversions it would otherwise miss due to cookie or click-ID loss.",
  },
  {
    q: "Why are Google Ads purchases sometimes duplicated?",
    a: "Usually because more than one tag or app is separately firing a conversion for the same order — a manual gtag snippet, a Shopify app integration, and Google's own sync layered on top of each other.",
  },
  {
    q: "Why does Google Ads revenue differ from Shopify's revenue?",
    a: "Different conversion windows, conversion-date-vs-order-date accounting, and the fact that Google Ads value doesn't automatically adjust for refunds, discounts, tax or shipping the way a Shopify order total does.",
  },
  {
    q: "Does Consent Mode affect how much Google Ads can track?",
    a: "Yes. Without ad-storage consent, Google models some conversions rather than observing them directly, which affects how conversion counts and value get reported.",
  },
  {
    q: "Does Performance Max need separate tracking setup?",
    a: "PMax uses the same conversion actions as Search and Shopping campaigns, so accurate purchase tracking benefits all three — there's no separate tracking layer specific to PMax.",
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

export default function GoogleAdsTrackingPage() {
  return (
    <ProductPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      {/* HERO */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-12 md:pt-32">
        <Reveal>
          <Eyebrow>Google Ads conversion tracking</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads conversion tracking for Shopify
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            Google Ads reports a conversion value the moment a tag fires. It
            doesn&apos;t automatically know about refunds, discount codes, or
            a checkout that skipped the tag entirely. Shopify does.
          </p>
          <ProductCTA className="mt-9" />
        </Reveal>
      </section>

      {/* WHY THEY DISAGREE */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Google Ads counts what it can see, not what shipped</h2>
          <div className="mt-5 space-y-4 text-white/65 leading-relaxed">
            <p>
              A standard Google Ads conversion fires from a tag on your
              order confirmation page. That works for a normal checkout, but
              accelerated checkout methods — Shop Pay, PayPal, an in-app
              browser — sometimes redirect a customer in ways that skip the
              confirmation page load the tag depends on, or that fire it in a
              context Google Ads can&apos;t attribute back to the original
              click.
            </p>
            <p>
              Depending on the implementation, Google Ads can undercount
              purchases that were never observed in the first place, or
              overcount them when multiple tags or conversion actions record
              the same order. The two problems point in opposite directions,
              which is exactly why they&apos;re easy to miss in the same
              account — one masks the other in the total.
            </p>
          </div>
        </Reveal>
      </section>

      {/* REVENUE VALUE EXAMPLE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">One order, several possible conversion values</h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              Illustrative example — a $120 order with a discount code, sales
              tax, and a later partial refund:
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2.5 text-white/55">Cart subtotal</td>
                  <td className="py-2.5 text-right font-medium text-white/80">$120.00</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2.5 text-white/55">Discount code (–15%)</td>
                  <td className="py-2.5 text-right font-medium text-white/80">–$18.00</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2.5 text-white/55">Sales tax + shipping</td>
                  <td className="py-2.5 text-right font-medium text-white/80">+$14.50</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2.5 text-white/55">Value at checkout (what the tag likely fires)</td>
                  <td className="py-2.5 text-right font-medium text-white/80">$116.50</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2.5 text-white/55">Partial refund, four days later</td>
                  <td className="py-2.5 text-right font-medium text-white/80">–$30.00</td>
                </tr>
                <tr>
                  <td className="py-2.5 text-cyan-200 font-medium">Actual net revenue in Shopify</td>
                  <td className="py-2.5 text-right font-semibold text-cyan-200">$86.50</td>
                </tr>
              </tbody>
            </table>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-sm text-white/45 max-w-2xl">
              Standard purchase implementations often retain the original
              checkout value unless later refunds or cancellations are sent
              back through conversion adjustments. Where that adjustment
              step isn&apos;t set up, the gap compounds over enough orders
              into a ROAS figure that looks better in Ads Manager than the
              store&apos;s bank balance would suggest.
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-4">How a refund reaches the conversion, if it's wired up</p>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {["Shopify order", "Original checkout value", "Google Ads conversion", "Refund or cancellation", "Adjusted net result"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/70">{step}</span>
                    {i < arr.length - 1 && <span aria-hidden className="text-white/25">→</span>}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/35">Conceptual — depends on conversion adjustments being configured for the account.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ENHANCED CONVERSIONS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Enhanced conversions fill in identity, not revenue</h2>
          <p className="mt-5 text-white/65 leading-relaxed">
            Enhanced conversions send hashed customer data — email, phone,
            address — alongside a standard conversion, so Google can match it
            to a signed-in user even when a click ID gets lost along the way.
            It improves how reliably a conversion gets attributed to the
            right ad. It doesn&apos;t, on its own, fix a revenue value that
            was wrong to begin with — that still depends on what value the
            store sends.
          </p>
        </Reveal>
      </section>

      {/* DUPLICATES + CONSENT MODE */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4 grid gap-10 sm:grid-cols-2">
          <Reveal>
            <h3 className="font-semibold text-white">Duplicate conversions</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              The most common cause on Shopify is running both Shopify&apos;s
              native Google &amp; YouTube channel integration and a separate,
              custom Google tag, each logging its own conversion action for
              the same order. If both are set as a primary conversion action
              used for bidding, Google Ads counts and optimises against the
              order twice — a secondary action, used for reporting only,
              doesn&apos;t carry the same risk.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="font-semibold text-white">Consent Mode</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Where a customer hasn&apos;t granted analytics or ad-storage
              consent, Consent Mode lets Google Ads model conversions
              statistically instead of tracking them directly. It narrows
              the gap in aggregate; it doesn&apos;t recover any individual
              customer&apos;s data.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OVER/UNDERCOUNT CAUSES */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">What pushes the number in each direction</h2>
        </Reveal>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 text-sm">
          <Reveal delay={40}>
            <p className="font-semibold text-white mb-2">Can overcount</p>
            <ul className="space-y-2 text-white/60 leading-relaxed list-disc list-inside">
              <li>Duplicate tags firing on the same page</li>
              <li>Multiple primary purchase conversion actions</li>
              <li>Duplicate conversion actions from Shopify's app plus a custom tag</li>
              <li>Incorrect event or trigger setup</li>
              <li>Incorrect revenue values in the event</li>
              <li>Attribution settings crediting more than one interaction</li>
              <li>Repeated purchase events on page refresh or back-navigation</li>
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-semibold text-white mb-2">Can undercount</p>
            <ul className="space-y-2 text-white/60 leading-relaxed list-disc list-inside">
              <li>Browser restrictions on third-party scripts</li>
              <li>Missing or declined consent</li>
              <li>Ad blockers</li>
              <li>Checkout implementations that skip the confirmation page</li>
              <li>Missing customer identifiers for matching</li>
              <li>Cross-device customer journeys</li>
              <li>Incorrectly configured tags</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CHANNEL SPECIFICS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Search, Shopping and Performance Max don&apos;t fail the same way</h2>
          <div className="mt-5 space-y-3 text-sm text-white/60 leading-relaxed">
            <p><strong className="text-white/80">Search</strong> is the most straightforward — a click, a tag, a conversion. Most tracking issues here trace back to the tag itself, not the campaign type.</p>
            <p><strong className="text-white/80">Shopping</strong> depends on your Merchant Center feed staying in sync with live Shopify pricing and availability; a stale feed shows up as disapproved or mispriced listings, not as a tracking error, but it looks similar in the reporting.</p>
            <p><strong className="text-white/80">Performance Max</strong> leans on conversion value more heavily than either, since its automated bidding optimises directly against whatever value it&apos;s given — which makes accurate revenue values matter more here than anywhere else in the account.</p>
          </div>
        </Reveal>
      </section>

      {/* HOW ATTRIBIX HELPS */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-extrabold">What Attribix sends, and what it doesn&apos;t control</h2>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Attribix sends purchase and enhanced-conversion data from your
              Shopify orders to Google Ads, and shows that alongside
              Google&apos;s own reported numbers so the gap is visible
              instead of buried across two separate dashboards. It doesn&apos;t
              control your Merchant Center feed, your account&apos;s
              conversion-action configuration, or how Google Ads itself
              models consent-restricted traffic — those stay in Google Ads
              and Merchant Center directly.
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

      {/* RELATED READING */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-xl md:text-2xl font-extrabold">Related reading</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/resources/google-ads-shopify-revenue-doesnt-match" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Why Google Ads and Shopify revenue don&apos;t match
              </Link>
            </li>
            <li>
              <Link href="/resources/enhanced-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Enhanced Conversions for Shopify explained
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">Compare your Google Ads and Shopify numbers</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Connect your store and Google Ads account to see the gap for
            your own orders, not an illustrative example.
          </p>
          <ProductCTA className="mt-8 justify-center" />
        </Reveal>
        <p className="mt-6 text-sm text-white/35">
          Want your Google Ads account managed?{" "}
          <Link href="/ad-management/google-ads" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            See Google Ads management
          </Link>
          , or{" "}
          <Link href="/ad-management/inquiry" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            ask about tracking setup
          </Link>
          .
        </p>
        <p className="mt-3 text-sm text-white/35">
          See how this fits into{" "}
          <Link href="/shopify-attribution" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            Shopify attribution
          </Link>{" "}
          and{" "}
          <Link href="/shopify-roas-tracking" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            ROAS tracking
          </Link>{" "}
          and{" "}
          <Link href="/server-side-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            server-side tracking
          </Link>
          .
        </p>
      </section>
    </ProductPageShell>
  );
}
