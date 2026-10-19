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
  "Prices in USD. Billed every 30 days through your Shopify invoice.";

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
    bestFor: "Newer stores with up to about 300 orders a month.",
    limits: {
      orders: "300 tracked orders / month",
      history: "30 days of analytics history",
      newsletter: "500 newsletter sends / month",
      reviews: "50 reviews / month",
      leads: "25 leads / month",
    },
    extras: ["UTM builder"],
    summary: ["300 tracked orders / month", "Meta and Google Ads data", "30 days of history", "UTM builder"],
  },
  {
    id: "growth",
    name: "Growth",
    listingName: "Growth",
    monthly: 79,
    yearly: 720,
    trialDays: 7,
    highlight: true,
    bestFor: "Established stores with up to 2,500 orders a month.",
    limits: {
      orders: "2,500 tracked orders / month",
      history: "90 days of analytics history",
      newsletter: "5,000 subscribers, 20,000 sends",
      reviews: "Unlimited reviews",
      leads: "Unlimited leads",
    },
    extras: ["Social calendar and analytics", "Google and Meta product feed"],
    summary: ["2,500 tracked orders / month", "90 days of history", "Social calendar and analytics", "Google and Meta product feed"],
  },
  {
    id: "pro",
    name: "Pro",
    listingName: "Pro",
    monthly: 149,
    yearly: 1356,
    trialDays: 3,
    highlight: false,
    bestFor: "High-volume stores that need unlimited orders and a full year of history.",
    limits: {
      orders: "Unlimited tracked orders",
      history: "365 days of analytics history",
      newsletter: "Unlimited subscribers and sends",
      reviews: "Unlimited reviews",
      leads: "Unlimited leads",
    },
    extras: ["Visitor flow analysis", "Social calendar and analytics", "Google and Meta product feed", "Priority support"],
    summary: ["Unlimited tracked orders", "365 days of history", "Visitor flow analysis", "Priority support"],
  },
];

/** Included on every plan. Written to read mid-sentence. */
export const INCLUDED_ON_ALL_PLANS = [
  "Meta and Google Ads data",
  "server-side tracking and attribution",
  "unlimited SEO audits",
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
