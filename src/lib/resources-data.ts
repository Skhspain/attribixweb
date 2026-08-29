// Single source of truth for the Resources archive AND the sitemap.
// Adding an article here makes it appear on /resources and in sitemap.xml —
// nothing else needs to be touched for a new article to be discoverable.

export type Article = { title: string; desc: string; href: string };

export const CORE_GUIDES: (Article & { category: string })[] = [
  {
    title: "Shopify Attribution Software",
    desc: "How to connect Meta and Google Ads clicks to real Shopify orders: first-click, last-click and multi-touch models explained.",
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
    desc: "How the Conversions API works alongside the Pixel: event matching, deduplication, and Event Match Quality.",
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
    intro: "Diagnosing performance problems and tracking issues on Meta: Facebook and Instagram ads for Shopify stores.",
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
      { title: "How Much Data Does Meta Ads Need Before You Can Judge Performance?", desc: "Matching your confidence to the amount of evidence you actually have, level by level.", href: "/resources/how-much-data-does-meta-ads-need" },
      { title: "How Often Should You Change Meta Ad Creatives?", desc: "Watching for real fatigue signals instead of refreshing on a fixed calendar.", href: "/resources/how-often-change-meta-ad-creatives" },
      { title: "How Do You Know When a Meta Ad Is Fatigued?", desc: "The signals that actually indicate fatigue, read together instead of in isolation.", href: "/resources/how-to-tell-meta-ad-fatigue" },
      { title: "What Makes a Good Meta Ad for Ecommerce?", desc: "Why many ecommerce ads are built backwards, and how to judge creative beyond CTR.", href: "/resources/what-makes-good-meta-ad-ecommerce" },
      { title: "Why Your Meta Ads Have Good Creative Metrics but Poor Sales", desc: "Hook rate, watch time and CTR describe attention. Revenue requires attention from the right people.", href: "/resources/good-meta-ad-metrics-but-poor-sales" },
      { title: "Why Winning Meta Ad Creatives Stop Working", desc: "The audience, the auction, the offer or the website can all be the real reason a winner declines.", href: "/resources/why-winning-meta-creatives-stop-working" },
      { title: "Why Purchase Event IDs Matter for Meta CAPI", desc: "The event ID is how Meta recognizes a browser and server Purchase as one business event instead of two.", href: "/resources/meta-capi-event-id-deduplication" },
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
      { title: "Google Ads and GA4 Don't Match: Which Numbers Should You Trust?", desc: "Why the two systems are built to answer different questions.", href: "/resources/google-ads-ga4-dont-match" },
      { title: "Google Ads Conversions Suddenly Dropped: Performance or Tracking?", desc: "A set of scenarios for reading conversions against Shopify's own numbers.", href: "/resources/google-ads-conversions-dropped-suddenly" },
      { title: "Should You Import GA4 Purchases Into Google Ads on Shopify?", desc: "Native conversion tracking vs GA4 import, and why running both as primary causes trouble.", href: "/resources/import-ga4-conversions-google-ads-shopify" },
      { title: "Why Google Ads and Shopify Revenue Don't Match", desc: "Conversion date vs. order date, duplicate conversion actions, refunds, and cross-channel overlap.", href: "/resources/google-ads-shopify-revenue-doesnt-match" },
      { title: "Enhanced Conversions for Shopify Explained", desc: "What Enhanced Conversions recover, what they don't fix, and how they relate to server-side tracking.", href: "/resources/enhanced-conversions-shopify" },
      { title: "Performance Max Spending Money but Getting No Sales", desc: "Why checking tracking comes before touching the feed, bidding or budget.", href: "/resources/performance-max-no-sales" },
      { title: "Google Merchant Center Products Disapproved: What It Means for Sales", desc: "Disapproved products don't show at all, and a shrinking catalog can look like a campaign problem.", href: "/resources/google-merchant-center-product-disapproved" },
      { title: "Google Ads Search Terms: What Should Ecommerce Advertisers Look For?", desc: "Keywords are what you targeted. Search terms are what you actually paid for.", href: "/resources/google-ads-search-terms-ecommerce" },
      { title: "Should Shopify Stores Bid on Their Own Brand Name?", desc: "Branded search can protect your result and control messaging, but is it incremental?", href: "/resources/should-you-bid-on-your-brand-name-google-ads" },
      { title: "Google Ads Negative Keywords for Ecommerce: What to Look For", desc: "Negative keywords stop Google from showing ads for searches you deliberately do not want.", href: "/resources/negative-keywords-ecommerce-google-ads" },
      { title: "How Much of Performance Max Revenue Comes From Brand Searches?", desc: "There is no universal percentage.", href: "/resources/performance-max-brand-revenue" },
      { title: "How to Tell What Performance Max Is Actually Doing", desc: "Performance Max is deliberately more automated than traditional Search, which means advertisers often feel they are funding a black box.", href: "/resources/how-to-see-what-performance-max-is-doing" },
      { title: "When Should You Split Products Into Multiple PMax Campaigns?", desc: "Split PMax campaigns when separate control creates a business advantage.", href: "/resources/when-to-split-performance-max-campaigns" },
    ],
  },
  {
    id: "shopify-growth",
    label: "Shopify Growth",
    intro: "Reading the funnel (sessions, product views, cart, checkout and purchase) to find where conversion actually breaks.",
    items: [
      { title: "Shopify Traffic but No Sales? Find Where the Funnel Is Breaking", desc: "A full-funnel diagnostic instead of a generic CRO checklist.", href: "/resources/shopify-traffic-no-sales" },
      { title: "Lots of Add to Carts but No Purchases on Shopify", desc: "Shipping shock, payment options and general trust: what usually sits between the two.", href: "/resources/shopify-add-to-cart-no-purchases" },
      { title: "Shopify Customers Reach Checkout but Don't Buy: What to Check", desc: "The narrower, later-stage causes specific to the checkout step itself.", href: "/resources/shopify-checkout-no-purchase" },
      { title: "Shopify Revenue Is Up but Meta and Google ROAS Are Down", desc: "Why total growth and platform ROAS can move in opposite directions.", href: "/resources/shopify-revenue-up-roas-down" },
      { title: "International Shipping Is Killing Your Conversion Rate: How to Diagnose It", desc: "If the funnel collapses at checkout, shipping cost, delivery time and duties are the first areas to inspect.", href: "/resources/international-shipping-low-conversion-ecommerce" },
      { title: "When Is a Shopify Store Ready to Advertise Internationally?", desc: "A store is ready for international ads when the business can deliver an experience that is competitive enough for the target market.", href: "/resources/shopify-ready-for-international-ads" },
    ],
  },
  {
    id: "cro-landing-pages",
    label: "CRO & Landing Pages",
    intro: "Product pages, checkout friction, offers and the mobile buying path, turning existing traffic into more Shopify orders.",
    items: [
      { title: "Should Shopify Stores Offer Buy Now, Pay Later?", desc: "BNPL can help conversion on higher-AOV products, but it introduces fees and a different way of presenting price.", href: "/resources/buy-now-pay-later-shopify-conversion" },
      { title: "Should You Show Duties and Taxes Before Checkout?", desc: "Yes, as early and accurately as practical. Customers do not enjoy discovering mandatory costs after deciding to buy.", href: "/resources/show-duties-taxes-before-checkout-ecommerce" },
      { title: "Why Shopify Customers Abandon Checkout After Seeing Shipping Costs", desc: "When abandonment jumps after shipping appears, the customer has learned something about the deal they didn't know earlier.", href: "/resources/shopify-checkout-abandonment-shipping-costs" },
      { title: "What Should Be Above the Fold on a Shopify Product Page?", desc: "The first screen of a product page should help a customer answer one question: \"Is this worth looking at?\" It does not need to contain every sales argument on the page.", href: "/resources/shopify-product-page-above-the-fold" },
      { title: "Free Shipping vs Discount: Which Converts Better?", desc: "A discount reduces the price of the product.", href: "/resources/free-shipping-vs-discount-conversion" },
      { title: "Shopify Mobile Conversion Rate Lower Than Desktop: Is That Normal?", desc: "It is common for mobile and desktop conversion rates to differ, but \"mobile is always lower\" is not a useful excuse for a poor mobile store.", href: "/resources/shopify-mobile-conversion-rate-lower-than-desktop" },
      { title: "Why Your Landing Page Gets Clicks but No Sales", desc: "If customers clicked the ad, the ad created enough interest to earn a visit.", href: "/resources/why-your-landing-page-gets-clicks-but-no-sales" },
      { title: "How Long Should an Ecommerce Landing Page Be?", desc: "A landing page should be long enough to answer the questions preventing the purchase and no longer.", href: "/resources/how-long-should-an-ecommerce-landing-page-be" },
      { title: "What Is an Advertorial Landing Page and When Should Ecommerce Brands Use One?", desc: "An advertorial is a sales-oriented educational page written in an article-like format.", href: "/resources/what-is-an-advertorial-landing-page-and-when-should" },
      { title: "How to Know Whether Your Ecommerce Offer Is the Problem", desc: "An offer problem often appears when customers understand the product, show interest and stop before committing money.", href: "/resources/how-to-know-whether-your-ecommerce-offer-is-the-problem" },
    ],
  },
  {
    id: "attribution",
    label: "Attribution & Analytics",
    intro: "How attribution models, ROAS and MER actually work, and why platforms rarely agree with each other or with Shopify.",
    items: [
      { title: "Why Meta and Google Both Claim the Same Shopify Sale", desc: "A worked example of why adding platform-reported revenue together overstates real sales.", href: "/resources/ad-platforms-report-more-revenue-than-shopify" },
      { title: "Why Changing Your Meta Attribution Window Changes Your ROAS", desc: "The same campaign, two different reported ROAS figures, and why.", href: "/resources/meta-attribution-window-roas" },
      { title: "View-Through Conversions: Should You Count Them?", desc: "The case for and against, and a framework instead of a flat answer.", href: "/resources/view-through-conversions-explained" },
      { title: "Shopify Attribution Models Explained", desc: "First-click, last-click, linear, position-based and data-driven: what each one rewards and hides.", href: "/resources/shopify-attribution-models" },
      { title: "How to Calculate True ROAS on Shopify", desc: "Platform ROAS vs. blended ROAS vs. true ROAS, and what actually separates them.", href: "/resources/true-roas-shopify" },
      { title: "MER vs ROAS for Shopify", desc: "ROAS depends on attribution; MER doesn't. When each one is the right tool.", href: "/resources/mer-vs-roas-shopify" },
      { title: "How to Calculate Your Maximum Profitable CPA", desc: "The acquisition cost at which the order still meets your profit requirement, built from contribution rather than a target that just looks good.", href: "/resources/maximum-profitable-cpa-ecommerce" },
      { title: "How Gross Margin Changes Your Break-Even ROAS", desc: "Break-even ROAS = 1 ÷ gross margin, and the real number is usually higher once fees, fulfilment and returns are included.", href: "/resources/gross-margin-break-even-roas" },
      { title: "Why a 400% ROAS Can Still Lose Money", desc: "A 400% ROAS says nothing about what the product costs to make and deliver: a worked example of thin margin eating the contribution.", href: "/resources/400-roas-profitable" },
      { title: "Why Revenue Is a Bad Metric Without Gross Margin", desc: "Revenue tells you how much customers paid.", href: "/resources/why-revenue-is-a-bad-metric-without-gross-margin" },
      { title: "How to Calculate CAC for a Shopify Store", desc: "A practical CAC calculation answers: how much did we spend to acquire each new customer?", href: "/resources/how-to-calculate-cac-for-a-shopify-store" },
      { title: "Why Meta View-Through Attribution Can Overvalue Meta Ads", desc: "View-through attribution gives Meta credit when a person sees an ad, does not click it and later purchases within the relevant window.", href: "/resources/why-meta-view-through-attribution-can-overvalue-meta" },
      { title: "How Discounts Change Your Break-Even ROAS", desc: "Discounting reduces revenue while product and fulfilment costs often stay largely the same.", href: "/resources/how-discounts-change-your-break-even-roas" },
      { title: "How Refunds Affect Your True Advertising ROAS", desc: "Ad platforms usually report conversion value when the purchase happens.", href: "/resources/how-refunds-affect-your-true-advertising-roas" },
      { title: "How to Calculate Profit per Order From Paid Ads", desc: "Profit per paid order starts with the order value and subtracts the costs that order creates.", href: "/resources/how-to-calculate-profit-per-order-from-paid-ads" },
      { title: "What Is a Good Contribution Margin After Advertising?", desc: "There is no universal “good” contribution margin after ads because businesses have very different fixed costs, growth goals and repeat-customer economics.", href: "/resources/what-is-a-good-contribution-margin-after-advertising" },
    ],
  },
  {
    id: "tracking",
    label: "Tracking & Privacy",
    intro: "Consent, server-side tracking and the privacy changes that quietly move your conversion numbers.",
    items: [
      { title: "Consent Mode on Shopify: Why Google Ads Conversions May Change", desc: "What consent modeling actually does, and what it doesn't recover.", href: "/resources/google-consent-mode-shopify" },
      { title: "iOS, Ad Blockers and Privacy: How Much Shopify Tracking Are You Losing?", desc: "What ITP and ad blockers actually block, and what server-side tracking can and can't fix.", href: "/resources/ios-ad-blockers-shopify-tracking-loss" },
      { title: "How Shopify Server-Side Tracking Works", desc: "A technical guide covering architecture, deduplication, consent, testing and common implementation mistakes.", href: "/resources/shopify-server-side-tracking-guide" },
    ],
  },
  {
    id: "email-retention",
    label: "Email & Retention",
    intro: "Klaviyo flows, repeat purchase rate and retention economics for Shopify stores running paid acquisition.",
    items: [
      { title: "Klaviyo Revenue Looks Too High: Is Email Taking Too Much Credit?", desc: "Why attribution and causation are different, and how to check whether Klaviyo's number reconciles with Shopify and paid media.", href: "/resources/klaviyo-revenue-too-high" },
      { title: "How to Measure the True Impact of Email Marketing", desc: "Platform metrics, Shopify outcomes, holdout tests, profit and list health: a fuller way to judge what email actually contributes.", href: "/resources/measure-email-marketing-true-impact-ecommerce" },
      { title: "First-Order Profit vs Lifetime Value: Which Should Drive Ad Spend?", desc: "First-order profit protects cash. LTV can justify growth, but only when cohort evidence actually supports it.", href: "/resources/first-order-profit-vs-lifetime-value-ecommerce" },
      { title: "What Is CAC Payback Period in Ecommerce?", desc: "The time it takes for a new customer's contribution to recover the cost of acquiring them, with a worked example.", href: "/resources/cac-payback-period-ecommerce" },
      { title: "How to Calculate Repeat Customer Value for a Shopify Store", desc: "A cohort method for turning repeat revenue into an expected repeat contribution you can use for acquisition targets.", href: "/resources/calculate-repeat-customer-value-shopify" },
    ],
  },
  {
    id: "creative-offers",
    label: "Creative & Offers",
    intro: "Offer structure, discounting and creative testing systems for Meta and Google ecommerce campaigns.",
    items: [
      { title: "How to Calculate a Profitable Free Shipping Threshold", desc: "A four-step model for testing whether a threshold's basket lift actually covers the shipping subsidy.", href: "/resources/calculate-profitable-free-shipping-threshold" },
      { title: "Should You Advertise Your Best Seller or Highest-Margin Product?", desc: "Proven demand and acquisition room are different assets. Here's how to classify products by role instead of picking one metric.", href: "/resources/advertise-bestseller-or-high-margin-product" },
      { title: "How to Find New Meta Ad Angles Without Guessing", desc: "The best ad angles usually already exist in customer language.", href: "/resources/how-to-find-new-meta-ad-angles-without-guessing" },
      { title: "How to Create Different Ad Angles for the Same Product", desc: "One product can solve several customer problems.", href: "/resources/how-to-create-different-ad-angles-for-the-same-product" },
      { title: "How to Build an Ecommerce Creative Testing System That Produces Useful Learnings", desc: "Creative testing becomes expensive when every new ad is simply another piece of content.", href: "/resources/ecommerce-creative-testing-system" },
    ],
  },
  {
    id: "marketing-agency",
    label: "Marketing & Agency",
    intro: "Deciding between in-house and an agency, what an engagement should actually include, and what it costs.",
    items: [
      { title: "Marketing Agency vs In-House: Which Is Better for Meta and Google Ads?", desc: "An honest comparison, including when in-house genuinely wins.", href: "/resources/marketing-agency-vs-in-house" },
      { title: "How Much Does an Ecommerce Marketing Agency Cost?", desc: "The common pricing structures and what actually moves the price.", href: "/resources/ecommerce-marketing-agency-cost" },
      { title: "How to Choose a Meta Ads Agency for Ecommerce", desc: "A genuine buyer's guide, not a ranked listicle.", href: "/resources/how-to-choose-a-meta-ads-agency" },
      { title: "How to Choose a Google Ads Agency for Ecommerce", desc: "What to ask about Shopping, PMax and feed experience specifically.", href: "/resources/how-to-choose-a-google-ads-agency" },
      { title: "Meta Ads vs Google Ads for Shopify: Where to Spend First", desc: "How product type, AOV and buying cycle should shape the decision.", href: "/resources/meta-ads-vs-google-ads-shopify-budget" },
      { title: "Your Ads Are Profitable: When Should You Increase the Budget?", desc: "Why a profitable campaign isn't automatically infinitely scalable.", href: "/resources/when-to-scale-ad-budget" },
    ],
  },
];

export function allResourceHrefs(): string[] {
  const core = CORE_GUIDES.map((g) => g.href);
  const articles = CATEGORIES.flatMap((c) => c.items.map((a) => a.href));
  return [...core, ...articles];
}
