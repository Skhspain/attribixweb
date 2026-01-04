// src/app/api/report/overview/route.ts
// Server-side proxy to the Attribix backend so we never expose API keys to the browser.

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type OverviewResponse = {
  range: { from: string; to: string };
  metrics: {
    visits: number;
    conversions: number;
    revenue: number;
    adspend: number;
    roas: number | null;
    cpp: number | null;
    // Optional fields if/when your API adds them
    confirmedRevenue?: number;
  };
};

export async function GET(req: NextRequest) {
  const apiBase =
    process.env.ATTRIBIX_API_BASE || process.env.NEXT_PUBLIC_ATTRIBIX_API_BASE;
  const apiKey = process.env.ATTRIBIX_API_KEY;

  if (!apiBase) {
    return NextResponse.json(
      { error: "Missing ATTRIBIX_API_BASE" },
      { status: 500 }
    );
  }

  // We require a server-only key for real data.
  // If you want a public demo dashboard, you can return mocked data here instead.
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing ATTRIBIX_API_KEY" },
      { status: 500 }
    );
  }

  const url = new URL("/api/report/overview", apiBase);
  const from = req.nextUrl.searchParams.get("from");
  const to = req.nextUrl.searchParams.get("to");
  if (from) url.searchParams.set("from", from);
  if (to) url.searchParams.set("to", to);

  try {
    const upstream = await fetch(url.toString(), {
      headers: {
        "x-attribix-key": apiKey,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const text = await upstream.text();

    if (!upstream.ok) {
      return NextResponse.json(
        {
          error: "Upstream error",
          status: upstream.status,
          body: text.slice(0, 2000),
        },
        { status: 502 }
      );
    }

    const json = JSON.parse(text) as OverviewResponse;
    return NextResponse.json(json, { status: 200 });
  } catch (err) {
    console.error("/api/report/overview proxy failed:", err);
    return NextResponse.json(
      { error: "Failed to reach Attribix API" },
      { status: 502 }
    );
  }
}
