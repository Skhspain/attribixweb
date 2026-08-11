// Client-safe helper: always go via our Next.js API routes so no secrets leak.

export async function fetchOverview(range?: { from?: string; to?: string }) {
  const url = new URL(
    "/api/report/overview",
    typeof window === "undefined" ? "http://localhost" : window.location.origin
  );
  if (range?.from) url.searchParams.set("from", range.from);
  if (range?.to) url.searchParams.set("to", range.to);

  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) throw new Error(`Overview error: ${res.status}`);

  return res.json() as Promise<{
    metrics: {
      visits: number;
      conversions: number;
      revenue: number;
      adspend: number;
      roas: number | null;
      cpp: number | null;
    };
    range: { from: string; to: string };
  }>;
}
