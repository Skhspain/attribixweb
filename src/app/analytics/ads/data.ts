// src/app/analytics/ads/data.ts

export type AdsRow = {
  id: string;
  platform: "Meta" | "Google" | "TikTok";
  name: string;       // Ad name
  campaign: string;
  adset?: string;     // Ad group / ad set (optional for Google)

  // Current period
  spend: number;
  purchases: number;
  revenue: number;

  // Previous period (same length window, e.g., prior 30d)
  prevSpend: number;
  prevPurchases: number;
  prevRevenue: number;
};

export const ADS: AdsRow[] = [
  // Meta
  {
    id: "m1",
    platform: "Meta",
    name: "UGC – Hook A",
    campaign: "Prospecting – Broad – US",
    adset: "18–54 Broad",
    spend: 820,
    purchases: 42,
    revenue: 3150,
    prevSpend: 760,
    prevPurchases: 38,
    prevRevenue: 2920,
  },
  {
    id: "m2",
    platform: "Meta",
    name: "Static – Benefit 3",
    campaign: "Remarketing – 7d View/ATC",
    adset: "All Visitors 7d",
    spend: 410,
    purchases: 28,
    revenue: 1800,
    prevSpend: 430,
    prevPurchases: 26,
    prevRevenue: 1650,
  },

  // Google
  {
    id: "g1",
    platform: "Google",
    name: "PMax – Shopping",
    campaign: "PMax – US",
    spend: 1450,
    purchases: 70,
    revenue: 5600,
    prevSpend: 1500,
    prevPurchases: 64,
    prevRevenue: 5280,
  },
  {
    id: "g2",
    platform: "Google",
    name: "Search – Brand",
    campaign: "Brand – Exact",
    spend: 260,
    purchases: 33,
    revenue: 1200,
    prevSpend: 240,
    prevPurchases: 28,
    prevRevenue: 980,
  },

  // TikTok
  {
    id: "t1",
    platform: "TikTok",
    name: "Creator Spark #14",
    campaign: "Prospecting – Interests",
    spend: 520,
    purchases: 20,
    revenue: 1600,
    prevSpend: 470,
    prevPurchases: 18,
    prevRevenue: 1420,
  },
  {
    id: "t2",
    platform: "TikTok",
    name: "Carousel – Offer",
    campaign: "Retargeting – 14d",
    spend: 300,
    purchases: 16,
    revenue: 980,
    prevSpend: 310,
    prevPurchases: 14,
    prevRevenue: 900,
  },
];
