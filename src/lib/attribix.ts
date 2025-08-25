const BASE = process.env.NEXT_PUBLIC_ATTRIBIX_API_BASE || "http://localhost:3001";
const KEY  = process.env.NEXT_PUBLIC_ATTRIBIX_API_KEY || "";

export async function fetchOverview(range?: { from?: string; to?: string }) {
  const url = new URL("/api/report/overview", BASE);
  if (range?.from) url.searchParams.set("from", range.from);
  if (range?.to)   url.searchParams.set("to", range.to);

  const res = await fetch(url.toString(), {
    headers: KEY ? { "x-attribix-key": KEY } : {},
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Overview error: ${res.status}`);
  return res.json() as Promise<{
    metrics: { visits: number; conversions: number; revenue: number; adspend: number; roas: number | null; cpp: number | null };
    range: { from: string; to: string };
  }>;
}
