// src/app/analytics/data.ts

export type KPI = { label: string; value: string; delta?: number };
export type OverviewDatum = { month: string; value: number };
export type SessionsDatum = { source: string; sessions: number };
export type Recent = { date: string; user: string; activity: string };
export type Integration = { name: string; status: string };

export const kpis: KPI[] = [
  { label: "Total Visits", value: "12.5k", delta: 3.2 },
  { label: "Conversions", value: "1.2k", delta: 6.8 },
  { label: "Revenue", value: "$18.9k", delta: 1.8 },
];

export const spendKpis: KPI[] = [
  { label: "Ad Spend", value: "$4.5k", delta: -2.1 },
  { label: "Confirmed Revenue (Ads)", value: "$15.7k", delta: 4.9 },
  { label: "ROAS", value: "3.5", delta: 7.2 },
];

export const overview: OverviewDatum[] = [
  { month: "Jan", value: 420 },
  { month: "Feb", value: 620 },
  { month: "Mar", value: 480 },
  { month: "Apr", value: 690 },
  { month: "May", value: 660 },
  { month: "Jun", value: 780 },
];

export const sessionsBySource: SessionsDatum[] = [
  { source: "Facebook", sessions: 160 },
  { source: "Google", sessions: 210 },
  { source: "TikTok", sessions: 290 },
  { source: "Email", sessions: 260 },
  { source: "Direct", sessions: 340 },
];

export const recent: Recent[] = [
  { date: "Jan 1", user: "John Doe", activity: "Signed up" },
  { date: "Jan 2", user: "Jane Smith", activity: "Purchase" },
  { date: "Jan 3", user: "Jane Doe", activity: "Purchase" },
];

export const integrations: Integration[] = [
  { name: "Meta Pixel", status: "Active" },
  { name: "Google Tracking", status: "Active" },
  { name: "GA4", status: "Active" },
];
