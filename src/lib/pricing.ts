// Single source of truth for Attribix plans, prices and trial lengths.
//
// Verified against the live Shopify App Store listing
// (https://apps.shopify.com/attribix-app) on 2026-10-19. Billing itself is
// configured in Shopify, not here: if a price, trial or limit changes there,
// change it here and every page (homepage, /pricing, FAQ, signup, structured
// data, in-app billing preview) follows.
//
// Note: the listing labels the first plan "New stores"; the website has
// always called it "Starter". Keep `listingName` in sync with Shopify.

export const SHOPIFY_APP_URL = "https://apps.shopify.com/attribix-app";
export const CURRENCY = "USD";
export const BILLING_NOTE =
  "Prices are in US dollars. You pay every 30 days through your normal Shopify bill.";

export type PlanId = "starter" | "growth" | "pro";

export type Plan = {
  id: PlanId;
  name: string;
  listingName: string;
  monthly: number;
  yearly: number;
  trialDays: number;
  highlight: boolean;
  bestFor: string;
  /** Orders counted per month; null = unlimited. */
  orderLimit: number | null;
  historyDays: number;
  /** Limits shown on every plan card, in the same order for each plan. */
  limits: {
    orders: string;
    history: string;
    newsletter: string;
    reviews: string;
    leads: string;
  };
  /** Features that only some plans include. */
  extras: string[];
  /** Short list used on the compact homepage cards. */
  summary: string[];
};

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    listingName: "New stores",
    monthly: 49,
    yearly: 490,
    trialDays: 7,
    highlight: false,
    bestFor: "For smaller stores getting started, with up to 300 orders a month.",
    orderLimit: 300,
    historyDays: 30,
    limits: {
      orders: "Track up to 300 store orders each month",
      history: "Look back at results from the past 30 days",
      newsletter: "500 newsletter emails a month",
      reviews: "50 reviews a month",
      leads: "25 leads a month",
    },
    extras: ["Link builder (UTM builder)"],
    summary: ["Track up to 300 store orders each month", "Facebook and Google ad results", "Look back 30 days", "Link builder (UTM builder)"],
  },
  {
    id: "growth",
    name: "Growth",
    listingName: "Growth",
    monthly: 79,
    yearly: 720,
    trialDays: 7,
    highlight: true,
    bestFor: "For stores with more orders and growing advertising, up to 2,500 a month.",
    orderLimit: 2500,
    historyDays: 90,
    limits: {
      orders: "Track up to 2,500 store orders each month",
      history: "Look back at results from the past 90 days",
      newsletter: "5,000 subscribers, 20,000 emails",
      reviews: "Unlimited reviews",
      leads: "Unlimited leads",
    },
    extras: ["Social media calendar and stats", "Product list for Google and Facebook (product feed)"],
    summary: ["Track up to 2,500 store orders each month", "Look back 90 days", "Social media calendar and stats", "Product list for Google and Facebook"],
  },
  {
    id: "pro",
    name: "Pro",
    listingName: "Pro",
    monthly: 149,
    yearly: 1356,
    trialDays: 3,
    highlight: false,
    bestFor: "For busy stores that need no order limit and a full year of results.",
    orderLimit: null,
    historyDays: 365,
    limits: {
      orders: "Track every store order, no limit",
      history: "Look back at results from the past 365 days",
      newsletter: "Unlimited subscribers and emails",
      reviews: "Unlimited reviews",
      leads: "Unlimited leads",
    },
    extras: ["Visitor paths (visitor flow analysis)", "Social media calendar and stats", "Product list for Google and Facebook (product feed)", "Faster support (priority)"],
    summary: ["Track every store order, no limit", "Look back a full year", "Visitor paths", "Faster support"],
  },
];

/** Included on every plan. Written to read mid-sentence. */
export const INCLUDED_ON_ALL_PLANS = [
  "your Facebook and Google ad results",
  "correct sale counting (server-side tracking)",
  "a view of which ads earned each sale (attribution)",
  "unlimited SEO checks",
];

export function includedSentence() {
  const xs = INCLUDED_ON_ALL_PLANS;
  return `Every plan includes ${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}.`;
}

export const LOWEST_MONTHLY = Math.min(...PLANS.map((p) => p.monthly));

export function yearlySavingsPct(plan: Plan) {
  return Math.round((1 - plan.yearly / (plan.monthly * 12)) * 100);
}

export const MAX_YEARLY_SAVINGS_PCT = Math.max(...PLANS.map(yearlySavingsPct));

/** e.g. "7 days on Starter and Growth, 3 days on Pro" */
export function trialSummary() {
  const byDays = new Map<number, string[]>();
  for (const p of PLANS) byDays.set(p.trialDays, [...(byDays.get(p.trialDays) ?? []), p.name]);
  return [...byDays.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([days, names]) => `${days} days on ${names.join(" and ")}`)
    .join(", ");
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Attribix",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Shopify",
    url: "https://www.attribix.app",
    offers: PLANS.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: String(p.monthly),
      priceCurrency: CURRENCY,
      url: SHOPIFY_APP_URL,
    })),
  };
}
