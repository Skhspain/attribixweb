"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import { ProductCTA } from "@/components/marketing/CTAGroup";

export default function GoogleAdsTrackingPage() {
  return (
    <ProductPageShell>
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
              The result is a gap in the same direction every time: Google
              Ads under-counts. It rarely over-counts on its own, which is
              part of why the gap is easy to miss — the number that&apos;s
              wrong is the one you never see.
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
              Most Google Ads conversion values freeze at checkout and never
              adjust for the refund. Over enough orders, that gap compounds
              into a ROAS figure that looks better in Ads Manager than the
              store&apos;s bank balance would suggest.
            </p>
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
              native Google & YouTube channel integration and a separate
              Google tag, each logging its own conversion action for the
              same order. Google Ads doesn&apos;t automatically know they
              refer to the same sale.
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
            <h2 className="text-xl md:text-2xl font-extrabold">What Attribix checks</h2>
            <p className="mt-4 text-white/60 leading-relaxed text-sm max-w-2xl">
              Attribix compares what Google Ads reports against actual
              Shopify order data — net of refunds and adjusted for what
              really shipped — and flags accounts where the two have drifted
              apart, rather than requiring you to notice the gap yourself in
              two separate dashboards.
            </p>
          </Reveal>
        </div>
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
          <Link href="/managed-services" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
            See managed services
          </Link>
          .
        </p>
      </section>
    </ProductPageShell>
  );
}
