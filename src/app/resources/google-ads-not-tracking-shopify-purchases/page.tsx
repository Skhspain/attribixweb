"use client";

import Link from "next/link";
import ProductPageShell from "@/components/marketing/ProductPageShell";
import { Reveal } from "@/components/marketing/Reveal";
import Eyebrow from "@/components/marketing/Eyebrow";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import { ManagedServicesCTA } from "@/components/marketing/CTAGroup";
import FAQList from "@/components/marketing/FAQList";

const STEPS = [
  {
    title: "Is the right conversion action actually set as Primary?",
    body: "Google Ads only reports and bids against conversion actions marked Primary. A Secondary action still logs data but doesn't show up in the headline Conversions column or feed automated bidding. If a Purchase action exists but got left as Secondary during setup, or a different action entirely (like a newsletter signup) is marked Primary instead, purchases can be recording correctly and still look invisible from where you're looking.",
  },
  {
    title: "Is the Google tag actually live on the store?",
    body: "Check the storefront itself, not the theme editor or a preview link: a tag added to an unpublished theme or a draft of the Google & YouTube channel setup won't fire for real customers. A browser's network tab or a tag-inspection extension on the live site will show whether the base tag is present at all before you go further.",
  },
  {
    title: "Is it specifically the purchase event, not just a page view?",
    body: "The base Google tag firing on every page (which supports remarketing and basic measurement) is a separate thing from the conversion event tied to the order confirmation step. It's possible for the base tag to work fine sitewide while the purchase-specific event on the thank-you or order-status page never fires. Check that the confirmation page itself is actually loading and triggering the conversion snippet, not just that the site has a tag somewhere.",
  },
  {
    title: "Do the conversion ID and label match the conversion action exactly?",
    body: "If the tag was hardcoded manually rather than deployed through the Google & YouTube app, a copy-paste mismatch between the conversion ID/label shown in the Google Ads UI and what's actually in the snippet is a common, easy-to-miss cause. The values have to match the specific conversion action character for character; a stale ID from a recreated action is enough to break it silently.",
  },
  {
    title: "Is the transaction ID unique per order?",
    body: "Each purchase event should carry the Shopify order ID or order name as its transaction identifier. A missing transaction ID, or a static placeholder value used across every order, breaks Google's ability to tell one order apart from another, which shows up either as conversions silently dropping or, in the opposite direction, as the same value getting recounted on page reloads.",
  },
  {
    title: "Are value and currency actually populated?",
    body: "A purchase event with an empty or zero value still counts toward conversion count, but it wrecks value-based bidding and revenue reporting: the order shows up as a conversion worth nothing. Currency has to match (or be explicitly declared against) the store's transaction currency; a value passed without a currency, or in the wrong one, distorts every revenue figure downstream even when the count is accurate.",
  },
  {
    title: "Which implementation is actually live: the Shopify app, or manual GTM?",
    body: "Purchases can be tracked through Shopify's built-in Google & YouTube channel integration, or through a manually configured Google Tag Manager container in the theme, or, on stores with a longer history, both at once because a migration was never finished. Confirm which one you believe is active is actually the one live on the store. A disconnected app with an old manual snippet still assumed removed is a common way tracking quietly stops.",
  },
  {
    title: "Is GA4 import involved, and is GA4 itself tracking purchases correctly?",
    body: "If the Google Ads conversion action is set up to import a GA4 event rather than use its own native tag, that import is only as good as GA4's own ecommerce tracking. If GA4 isn't capturing the purchase event correctly in the first place (wrong event name, missing parameters), the import brings the same gap into Google Ads. Import processing also runs on its own delay, so check GA4's Realtime and standard ecommerce reports directly rather than assuming the import lag explains everything.",
  },
  {
    title: "Is Enhanced Conversions configured correctly, or missing entirely?",
    body: "Enhanced Conversions send hashed customer data alongside the standard conversion to improve matching; they don't create the underlying conversion record. Misconfigured field mapping here won't stop base purchases from tracking, but if base tracking is already broken, turning Enhanced Conversions on won't fix it. See enhanced conversions for Shopify for how the feature actually works.",
  },
  {
    title: "Is consent blocking the tag before it ever fires?",
    body: "Under Consent Mode, a customer who hasn't granted ad or analytics storage consent means the conversion tag either doesn't fire the way it normally would, or fires in a cookieless, consent-aware mode where results get statistically modeled rather than individually recorded. If a cookie banner's default state denies consent until explicit opt-in, and a meaningful share of customers never interact with the banner, that alone can suppress a large share of recorded purchases without anything being misconfigured in the tag itself.",
  },
  {
    title: "Place a real test order and check tag status in Google Ads directly",
    body: "After working through the above, the most reliable confirmation is placing an actual order (even a low-value one) and watching it through. Google Ads' own diagnostics area for a conversion action will show whether the tag was detected recently and whether it's receiving events, which is a more direct signal than inferring from delayed reporting. Give it 24–48 hours after the test order before concluding anything, since conversion processing isn't instant.",
  },
];

const FAQ_ITEMS = [
  {
    q: "I checked the tag and it's firing. Why is Google Ads still showing zero purchases?",
    a: "A firing base tag doesn't guarantee the purchase-specific conversion event is firing on the confirmation step, or that its conversion ID and label match the action you're looking at in Google Ads. Those are the two most common gaps once basic tag presence is confirmed.",
  },
  {
    q: "Does the Google & YouTube Shopify app handle all of this automatically?",
    a: "It handles a lot of it (tag deployment, transaction ID, standard event structure), which is why it's the recommended path for most stores. It doesn't protect against a leftover manual tag still running alongside it, or against the conversion action itself being misconfigured as Secondary rather than Primary.",
  },
  {
    q: "How long should I wait after fixing something before checking if it worked?",
    a: "Place a test order after the fix, then give it at least 24–48 hours before judging results, since conversion processing and reporting both run with some delay, and judging too early tends to produce false negatives.",
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
  headline: "Google Ads Not Tracking Shopify Purchases? Step-by-Step Diagnosis",
  description: "An in-order checklist for finding why Google Ads isn't recording Shopify purchases, from conversion action setup through consent and a real test order.",
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  author: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app" },
  publisher: { "@type": "Organization", name: "Attribix", url: "https://www.attribix.app", logo: { "@type": "ImageObject", url: "https://www.attribix.app/assets/logo.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.attribix.app/resources/google-ads-not-tracking-shopify-purchases" },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.attribix.app" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.attribix.app/resources" },
    { "@type": "ListItem", position: 3, name: "Google Ads not tracking purchases", item: "https://www.attribix.app/resources/google-ads-not-tracking-shopify-purchases" },
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Not tracking purchases" }]} />
          <Eyebrow>Google Ads</Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Google Ads not tracking Shopify purchases? Step-by-step diagnosis
          </h1>
          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            When Shopify shows orders from Google traffic and Google Ads
            doesn&apos;t, the cause is almost always one specific link in the
            chain between an order completing and a conversion getting
            recorded, not a vague &quot;tracking is broken.&quot; Work through the
            checks below in order. Most stores find the answer within the
            first half of the list.
          </p>
        </Reveal>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">The checklist, in order</h2>
        </Reveal>
        <div className="space-y-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 20}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-xs font-semibold text-cyan-300">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-semibold text-white text-sm">{step.title}</div>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ATTRIBIX MENTION */}
      <section className="relative py-10">
        <div className="absolute inset-0 -z-10 bg-black/15" />
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              This exact chain (order completes, event should fire, value
              and transaction ID should populate) is what Attribix sends
              from Shopify to Google Ads on every order, alongside a view of
              what Google Ads actually recorded, so a broken step shows up as
              a visible gap instead of a mystery. More on how that fits
              together on the{" "}
              <Link href="/google-ads-conversion-tracking-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversion tracking for Shopify
              </Link>{" "}
              page.
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
              <Link href="/resources/enhanced-conversions-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Enhanced Conversions for Shopify explained
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-clicks-no-sales" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads getting clicks but no sales?
              </Link>
            </li>
            <li>
              <Link href="/resources/import-ga4-conversions-google-ads-shopify" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Importing GA4 conversions into Google Ads for Shopify
              </Link>
            </li>
            <li>
              <Link href="/resources/google-ads-conversions-dropped-suddenly" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                Google Ads conversions dropped suddenly: what changed
              </Link>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-extrabold">When the checklist doesn&apos;t turn up the answer</h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            This covers the great majority of Shopify accounts with broken
            purchase tracking. When it doesn&apos;t and the cause needs someone
            actually inside the account and the tag setup, that&apos;s where our
            team steps in.
          </p>
          <ManagedServicesCTA className="mt-8 justify-center" />
        </Reveal>
      </section>
    </ProductPageShell>
  );
}
