// src/app/analytics/attribution/data.ts

export type Touch = {
  ts: string; // ISO date string
  source: "Meta" | "Google" | "TikTok" | "Email" | "Organic" | "Direct" | "Referral";
  campaign?: string;
};

export type CustomerConversion = {
  customerId: string;
  customerName: string;
  orderId: string;
  orderValue: number; // revenue for the conversion
  path: Touch[];      // touchpoints in chronological order
};

// Mock dataset — replace with API/Prisma later.
export const CUSTOMERS: CustomerConversion[] = [
  {
    customerId: "c001",
    customerName: "Alex Morgan",
    orderId: "o-1001",
    orderValue: 240,
    path: [
      { ts: "2025-07-05", source: "Meta", campaign: "Prospecting Broad" },
      { ts: "2025-07-12", source: "Email", campaign: "Welcome Flow" },
      { ts: "2025-07-15", source: "Google", campaign: "Brand" },
    ],
  },
  {
    customerId: "c002",
    customerName: "Sam Woods",
    orderId: "o-1002",
    orderValue: 120,
    path: [
      { ts: "2025-07-10", source: "TikTok", campaign: "Creator #14" },
      { ts: "2025-07-12", source: "Direct" },
    ],
  },
  {
    customerId: "c003",
    customerName: "Jamie Lee",
    orderId: "o-1003",
    orderValue: 480,
    path: [
      { ts: "2025-07-02", source: "Google", campaign: "PMax" },
      { ts: "2025-07-09", source: "Meta", campaign: "Remarketing 7d" },
      { ts: "2025-07-11", source: "Meta", campaign: "Remarketing 7d" },
    ],
  },
  {
    customerId: "c004",
    customerName: "Taylor Reed",
    orderId: "o-1004",
    orderValue: 90,
    path: [
      { ts: "2025-07-01", source: "Organic" },
      { ts: "2025-07-06", source: "Referral" },
      { ts: "2025-07-08", source: "Direct" },
    ],
  },
  {
    customerId: "c005",
    customerName: "Chris Diaz",
    orderId: "o-1005",
    orderValue: 320,
    path: [
      { ts: "2025-07-03", source: "Google", campaign: "Non‑Brand Search" },
      { ts: "2025-07-08", source: "Email", campaign: "Promo" },
      { ts: "2025-07-10", source: "Google", campaign: "Brand" },
      { ts: "2025-07-12", source: "Direct" },
    ],
  },
];
