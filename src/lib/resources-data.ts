// Single source of truth for the Resources archive AND the sitemap.
// Adding an article here makes it appear on /resources and in sitemap.xml —
// nothing else needs to be touched for a new article to be discoverable.

export type Article = { title: string; desc: string; href: string };

export const CORE_GUIDES: (Article & { category: string })[] = [
  {
    title: "Shopify Attribution Software",
    desc: "How to connect Meta and Google Ads clicks to real Shopify orders — first-click, last-click and multi-touch models explained.",
    category: "Attribution",
    href: "/shopify-attribution",
  },
  {
    title: "Shopify Server-Side Tracking",
    desc: "Why browser tracking misses a growing share of orders, how server-side tracking works, and what it still can't solve.",
    category: "Tracking",
    href: "/server-side-tracking-shopify",
  },
  {
    title: "Meta CAPI for Shopify",
    desc: "How the Conversions API works alongside the Pixel — event matching, deduplication, and Event Match Quality.",
    category: "Meta Ads",
    href: "/meta-capi-shopify",
  },
  {
    title: "Google Ads Conversion Tracking for Shopify",
    desc: "Why Google Ads and Shopify rarely agree on revenue, and how enhanced conversions and Consent Mode fit in.",
    category: "Google Ads",
    href: "/google-ads-conversion-tracking-shopify",
  },
  {
    title: "Shopify ROAS Tracking",
    desc: "Why adding Meta ROAS to Google ROAS overstates performance, and how blended ROAS and MER differ.",
    category: "Attribution",
    href: "/shopify-roas-tracking",
  },
];

export const CATEGORIES: { id: string; label: string; intro: string; items: Article[] }[] = [
  {
    id: "meta-ads",
    label: "Meta Ads",
    intro: "Diagnosing performance problems and tracking issues on Meta — Facebook and Instagram ads for Shopify stores.",
    items: [
      { title: "Meta Ads Clicks but No Sales? Diagnose It First", desc: "A funnel walkthrough for finding exactly where the drop happens before touching the campaign.", href: "/resources/meta-ads-clicks-no-sales" },
      { title: "Meta Ads ROAS Dropped Suddenly? Ads, Website or Tracking", desc: "How to tell an actual performance decline apart from a reported one.", href: "/resources/meta-ads-roas-dropped" },
      { title: "Meta Ads Shows Sales but Shopify Has No Matching Orders", desc: "The usual configuration causes behind this specific, urgent-looking mismatch.", href: "/resources/meta-ads-shows-sales-shopify-no-orders" },
      { title: "Good CTR and Low CPC but No Sales on Meta Ads: What's Wrong", desc: "Why attractive top-funnel metrics can hide low-intent traffic.", href: "/resources/good-ctr-low-cpc-no-sales-meta-ads" },
      { title: "Why Is Your Meta Ads CPM So High?", desc: "What actually moves CPM, and why it isn't the number to react to on its own.", href: "/resources/why-is-meta-ads-cpm-high" },
      { title: "Why Shopify and Meta Ads Show Different Sales Numbers", desc: "Attribution windows, view-through credit and consent limits explain most of the gap.", href: "/resources/why-shopify-meta-sales-dont-match" },
      { title: "How to Fix Duplicate Purchases in Meta Ads for Shopify", desc: "The usual causes, and a step-by-step way to diagnose which one you have.", href: "/resources/fix-duplicate-meta-purchases-shopify" },
      { title: "Meta Event Match Quality for Shopify Explained", desc: "What EMQ measures, what moves it, and why a higher score isn't the same as better attribution.", href: "/resources/meta-event-match-quality-shopify" },
      { title: "Meta Pixel vs Conversions API for Shopify", desc: "What the Pixel sees, what CAPI recovers, and how to run both without double-counting.", href: "/resources/meta-pixel-vs-capi-shopify" },
    ],
  },
  {
    id: "google-ads",
    label: "Google Ads",
    intro: "Search, Shopping and Performance Max performance and conversion tracking problems for Shopify stores.",
    items: [
      { title: "Google Ads Clicks But No Sales? What to Check First", desc: "Separating a real sales problem from a tracking one before touching the campaign.", href: "/resources/google-ads-clicks-no-sales" },
      { title: "Google Ads Not Tracking Shopify Purchases? Step-by-Step Diagnosis", desc: "A technical checklist covering conversion actions, tags, GA4 import and Enhanced Conversions.", href: "/resources/google-ads-not-tracking-shopify-purchases" },
      { title: "Duplicate Google Ads Conversions on Shopify", desc: "Why Google can look like it's reporting more sales than you actually have.", href: "/resources/google-ads-duplicate-conversions-shopify" },
      { title: "Google Ads Conversion Value Is Wrong on Shopify", desc: "How subtotal, tax, shipping and discounts can all change what value gets reported.", href: "/resources/google-ads-conversion-value-wrong-shopify" },
      { title: "Google Ads and GA4 Don't Match: Which Numbers Should You Trust?", desc: "Why the two systems are built to answer different questions.", href: "/resources/google-ads-ga4-dont-match" },
      { title: "Google Ads Conversions Suddenly Dropped: Performance or Tracking?", desc: "A set of scenarios for reading conversions against Shopify's own numbers.", href: "/resources/google-ads-conversions-dropped-suddenly" },
      { title: "Google Ads Says I Have Conversions but Shopify Has No Orders", desc: "Almost always a labeling or configuration issue, not a phantom sale.", href: "/resources/google-ads-conversions-no-shopify-orders" },
      { title: "Google Ads Clicks Don't Match Shopify Sessions: Why?", desc: "Why a click and a session are never going to be the same number.", href: "/resources/google-ads-clicks-vs-shopify-sessions" },
      { title: "Should You Import GA4 Purchases Into Google Ads on Shopify?", desc: "Native conversion tracking vs GA4 import, and why running both as primary causes trouble.", href: "/resources/import-ga4-conversions-google-ads-shopify" },
      { title: "Why Google Ads and Shopify Revenue Don't Match", desc: "Conversion date vs. order date, duplicate conversion actions, refunds, and cross-channel overlap.", href: "/resources/google-ads-shopify-revenue-doesnt-match" },
      { title: "Enhanced Conversions for Shopify Explained", desc: "What Enhanced Conversions recover, what they don't fix, and how they relate to server-side tracking.", href: "/resources/enhanced-conversions-shopify" },
      { title: "Performance Max Spending Money but Getting No Sales", desc: "Why checking tracking comes before touching the feed, bidding or budget.", href: "/resources/performance-max-no-sales" },
      { title: "Performance Max ROAS Suddenly Dropped: How to Diagnose It", desc: "Tracking, feed changes, seasonality and brand-vs-non-brand mix, in order.", href: "/resources/performance-max-roas-dropped" },
      { title: "Google Shopping Getting Clicks but No Sales", desc: "Why query relevance, feed quality and price shown in the ad matter more here than in Search.", href: "/resources/google-shopping-clicks-no-sales" },
      { title: "Google Merchant Center Products Disapproved: What It Means for Sales", desc: "Disapproved products don't show at all — how a shrinking catalog can look like a campaign problem.", href: "/resources/google-merchant-center-product-disapproved" },
    ],
  },
  {
    id: "shopify-growth",
    label: "Shopify Growth",
    intro: "Reading the funnel — sessions, product views, cart, checkout and purchase — to find where conversion actually breaks.",
    items: [
      { title: "Shopify Traffic but No Sales? Find Where the Funnel Is Breaking", desc: "A full-funnel diagnostic instead of a generic CRO checklist.", href: "/resources/shopify-traffic-no-sales" },
      { title: "Shopify Conversion Rate Suddenly Dropped: What to Check First", desc: "How to find the exact day something changed, and cross-reference against it.", href: "/resources/shopify-conversion-rate-dropped" },
      { title: "Lots of Add to Carts but No Purchases on Shopify", desc: "Shipping shock, payment options, and general trust — what usually sits between the two.", href: "/resources/shopify-add-to-cart-no-purchases" },
      { title: "Shopify Customers Reach Checkout but Don't Buy: What to Check", desc: "The narrower, later-stage causes specific to the checkout step itself.", href: "/resources/shopify-checkout-no-purchase" },
      { title: "Shopify Sales Dropped but Traffic Is the Same: What Does That Tell You?", desc: "Why stable sessions point the problem at the store, not media reach.", href: "/resources/shopify-sales-down-traffic-same" },
      { title: "Shopify Revenue Is Up but Meta and Google ROAS Are Down", desc: "Why total growth and platform ROAS can move in opposite directions.", href: "/resources/shopify-revenue-up-roas-down" },
    ],
  },
  {
    id: "attribution",
    label: "Attribution & Measurement",
    intro: "How attribution models, ROAS and MER actually work, and why platforms rarely agree with each other or with Shopify.",
    items: [
      { title: "Why Meta and Google Both Claim the Same Shopify Sale", desc: "A worked example of why adding platform-reported revenue together overstates real sales.", href: "/resources/ad-platforms-report-more-revenue-than-shopify" },
      { title: "Why Changing Your Meta Attribution Window Changes Your ROAS", desc: "The same campaign, two different reported ROAS figures, and why.", href: "/resources/meta-attribution-window-roas" },
      { title: "View-Through Conversions: Should You Count Them?", desc: "The case for and against, and a framework instead of a flat answer.", href: "/resources/view-through-conversions-explained" },
      { title: "Shopify Attribution Models Explained", desc: "First-click, last-click, linear, position-based and data-driven — what each one rewards and hides.", href: "/resources/shopify-attribution-models" },
      { title: "How to Calculate True ROAS on Shopify", desc: "Platform ROAS vs. blended ROAS vs. true ROAS, and what actually separates them.", href: "/resources/true-roas-shopify" },
      { title: "MER vs ROAS for Shopify", desc: "ROAS depends on attribution; MER doesn't. When each one is the right tool.", href: "/resources/mer-vs-roas-shopify" },
    ],
  },
  {
    id: "tracking",
    label: "Tracking & Privacy",
    intro: "Consent, server-side tracking and the privacy changes that quietly move your conversion numbers.",
    items: [
      { title: "Consent Mode on Shopify: Why Google Ads Conversions May Change", desc: "What consent modeling actually does, and what it doesn't recover.", href: "/resources/google-consent-mode-shopify" },
      { title: "iOS, Ad Blockers and Privacy: How Much Shopify Tracking Are You Losing?", desc: "What ITP and ad blockers actually block, and what server-side tracking can and can't fix.", href: "/resources/ios-ad-blockers-shopify-tracking-loss" },
      { title: "How Shopify Server-Side Tracking Works", desc: "A technical guide — architecture, deduplication, consent, testing and common implementation mistakes.", href: "/resources/shopify-server-side-tracking-guide" },
    ],
  },
  {
    id: "marketing-agency",
    label: "Marketing & Agency",
    intro: "Deciding between in-house and an agency, what an engagement should actually include, and what it costs.",
    items: [
      { title: "Marketing Agency vs In-House: Which Is Better for Meta and Google Ads?", desc: "An honest comparison, including when in-house genuinely wins.", href: "/resources/marketing-agency-vs-in-house" },
      { title: "How Much Does an Ecommerce Marketing Agency Cost?", desc: "The common pricing structures and what actually moves the price.", href: "/resources/ecommerce-marketing-agency-cost" },
      { title: "Percentage of Ad Spend vs Fixed Fee: How Should a Marketing Agency Charge?", desc: "The incentive tradeoffs behind the two dominant pricing models.", href: "/resources/percentage-ad-spend-vs-flat-fee" },
      { title: "What Does a Meta Ads Agency Actually Do?", desc: "The real scope of the work, beyond campaign setup.", href: "/resources/what-does-a-meta-ads-agency-do" },
      { title: "What Does a Google Ads Agency Actually Do?", desc: "Account structure, feed oversight, tracking and reporting, explained.", href: "/resources/what-does-a-google-ads-agency-do" },
      { title: "How to Choose a Meta Ads Agency for Ecommerce", desc: "A genuine buyer's guide, not a ranked listicle.", href: "/resources/how-to-choose-a-meta-ads-agency" },
      { title: "How to Choose a Google Ads Agency for Ecommerce", desc: "What to ask about Shopping, PMax and feed experience specifically.", href: "/resources/how-to-choose-a-google-ads-agency" },
      { title: "Shopify-Specific Expertise vs a General Marketing Agency", desc: "What ecommerce-specific knowledge actually matters, and why.", href: "/resources/shopify-marketing-agency-vs-general-agency" },
      { title: "Meta Ads vs Google Ads for Shopify: Where to Spend First", desc: "How product type, AOV and buying cycle should shape the decision.", href: "/resources/meta-ads-vs-google-ads-shopify-budget" },
      { title: "How Much Should a Shopify Store Spend on Meta and Google Ads?", desc: "Building a budget from AOV, margin and target CPA instead of a rule of thumb.", href: "/resources/shopify-advertising-budget-how-much-to-spend" },
      { title: "When Should You Hire an Ecommerce Marketing Agency?", desc: "The signals worth acting on, and the ones that mean it's not the right move yet.", href: "/resources/when-to-hire-a-marketing-agency" },
      { title: "Your Ads Are Profitable: When Should You Increase the Budget?", desc: "Why a profitable campaign isn't automatically infinitely scalable.", href: "/resources/when-to-scale-ad-budget" },
    ],
  },
];

export function allResourceHrefs(): string[] {
  const core = CORE_GUIDES.map((g) => g.href);
  const articles = CATEGORIES.flatMap((c) => c.items.map((a) => a.href));
  return [...core, ...articles];
}
