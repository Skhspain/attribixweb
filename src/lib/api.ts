// src/lib/api.ts
// Authenticated fetch wrapper for the Attribix backend API.

const API_BASE = process.env.NEXT_PUBLIC_ATTRIBIX_API_BASE || "https://api.attribix.app";

export async function attribixFetch(
  path: string,
  token: string | null,
  opts?: RequestInit
): Promise<Response> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(opts?.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return fetch(`${API_BASE}${path}`, {
    ...opts,
    headers,
  });
}

export type OverviewData = {
  ok: boolean;
  accountId: string;
  shops: string[];
  period: { days: number; since: string };
  metrics: {
    revenue: number;
    orders: number;
    aov: number;
    spend: number;
    roas: number;
    totalEvents: number;
  };
  sources: Array<{ source: string; count: number }>;
  recentPurchases: Array<{
    id: string;
    createdAt: string;
    totalValue: number;
    currency: string;
    orderId: string | null;
    utmSource: string | null;
    utmMedium: string | null;
    utmCampaign: string | null;
  }>;
};

export type SourcesData = {
  ok: boolean;
  sources: Array<{
    source: string;
    events: number;
    purchases: number;
    revenue: number;
    cvr: number;
  }>;
  totals: { events: number; purchases: number };
};

export type EventsData = {
  ok: boolean;
  events: Array<{
    id: string;
    eventName: string;
    createdAt: string;
    url: string | null;
    utmSource: string | null;
    utmMedium: string | null;
    utmCampaign: string | null;
    revenue: number | null;
    orderId: string | null;
  }>;
  total: number;
  limit: number;
  offset: number;
};
