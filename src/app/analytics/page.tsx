// src/app/analytics/page.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { overview, sessionsBySource, recent, integrations } from "./data";
import { ADS } from "./ads/data";

const SessionsBySourceChart = dynamic(
  () => import("./Charts").then((m) => m.SessionsBySourceChart),
  { ssr: false }
);

// Animated number display
function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const start = performance.now();
    const from = display;
    const to = value;
    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 600);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const shown =
    decimals > 0
      ? display.toLocaleString(undefined, {
          maximumFractionDigits: decimals,
          minimumFractionDigits: decimals,
        })
      : Math.round(display).toLocaleString();

  return (
    <span>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}

type OverviewResponse = {
  range: { from: string; to: string };
  metrics: {
    visits: number;
    conversions: number;
    revenue: number;
    adspend: number;
    roas: number | null;
    cpp: number | null;
    confirmedRevenue?: number;
  };
};

export default function AnalyticsPage() {
  const [data, setData] = React.useState<OverviewResponse | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);

    try {
      // IMPORTANT: call our Next.js server proxy (no API key in the browser)
      const res = await fetch("/api/report/overview", { cache: "no-store" });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `Request failed (${res.status})`);
      }
      const json = (await res.json()) as OverviewResponse;
      setData(json);
    } catch (e: any) {
      console.error("Failed to load overview:", e);
      setError(
        typeof e?.message === "string" ? e.message : "Failed to load overview"
      );
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    load();
  }, []);

  const m =
    data?.metrics ||
    ({
      visits: 0,
      conversions: 0,
      revenue: 0,
      adspend: 0,
      roas: null,
      cpp: null,
      confirmedRevenue: undefined,
    } as OverviewResponse["metrics"]);

  const confirmed = m.confirmedRevenue ?? m.revenue;

  return (
    <div className="min-w-0 px-4 py-6 md:px-6 md:py-8">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Dashboard
        </h1>
        <button
          onClick={load}
          className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50"
        >
          Refresh
        </button>
      </header>

      {error && (
        <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
          <div className="font-medium">Couldn’t load live metrics</div>
          <div className="mt-0.5 break-words text-rose-800/80">{error}</div>
          <div className="mt-2 text-xs text-rose-800/70">
            Tip: ensure <code>ATTRIBIX_API_BASE</code> and{" "}
            <code>ATTRIBIX_API_KEY</code> are set on the server.
          </div>
        </div>
      )}

      {/* Row 1: Visits / Conversions / Revenue */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="ax-card ax-card-body">
          <div className="ax-metric-label">Total Visits</div>
          <div className="ax-metric-value">
            <AnimatedNumber value={m.visits} />
          </div>
        </div>
        <div className="ax-card ax-card-body">
          <div className="ax-metric-label">Conversions</div>
          <div className="ax-metric-value">
            <AnimatedNumber value={m.conversions} />
          </div>
        </div>
        <div className="ax-card ax-card-body">
          <div className="ax-metric-label">Revenue</div>
          <div className="ax-metric-value">
            <AnimatedNumber value={m.revenue} prefix="$" />
          </div>
        </div>
      </section>

      {/* Row 2: Spend / Confirmed Revenue / ROAS */}
      <section className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="ax-card ax-card-body">
          <div className="ax-metric-label">Ad Spend</div>
          <div className="ax-metric-value">
            <AnimatedNumber value={m.adspend} prefix="$" />
          </div>
        </div>
        <div className="ax-card ax-card-body">
          <div className="ax-metric-label">Confirmed Revenue (Ads)</div>
          <div className="ax-metric-value">
            <AnimatedNumber value={confirmed} prefix="$" />
          </div>
        </div>
        <div className="ax-card ax-card-body">
          <div className="ax-metric-label">ROAS</div>
          <div className="ax-metric-value">
            {m.roas == null ? (
              "–"
            ) : (
              <AnimatedNumber value={m.roas} decimals={2} suffix="x" />
            )}
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="ax-card ax-card-body min-w-0">
          <h2 className="mb-3 text-base font-medium">Overview</h2>
          <table className="ax-table w-full">
            <thead>
              <tr>
                <th>Month</th>
                <th className="text-right">Revenue</th>
                <th className="text-right">vs Prev</th>
              </tr>
            </thead>
            <tbody>
              {overview.map((row, i) => {
                const prev = i > 0 ? overview[i - 1].value : null;
                const delta = prev !== null ? ((row.value - prev) / prev) * 100 : null;
                return (
                  <tr key={row.month}>
                    <td className="font-medium">{row.month}</td>
                    <td className="text-right">${row.value.toLocaleString()}</td>
                    <td className="text-right">
                      {delta !== null ? (
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                            delta >= 0
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-rose-50 text-rose-600"
                          }`}
                        >
                          {delta >= 0 ? "▲" : "▼"} {Math.abs(delta).toFixed(1)}%
                        </span>
                      ) : (
                        <span className="text-slate-400 text-xs">–</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="ax-card ax-card-body min-w-0">
          <h2 className="mb-3 text-base font-medium">Sessions by Source</h2>
          <SessionsBySourceChart data={sessionsBySource} />
        </div>
      </section>

      {/* Table + Integrations */}
      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="ax-card ax-card-body lg:col-span-2">
          <h3 className="mb-3 text-base font-medium">Recent Activity</h3>
          <table className="ax-table w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>User</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r) => (
                <tr key={r.date + r.user}>
                  <td>{r.date}</td>
                  <td>{r.user}</td>
                  <td>{r.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ax-card ax-card-body">
          <h3 className="mb-3 text-base font-medium">Integrations</h3>
          <ul className="space-y-2 text-sm">
            {integrations.map((i) => (
              <li
                key={i.name}
                className="flex items-center justify-between rounded-xl border border-slate-200 p-2"
              >
                <span>{i.name}</span>
                <span className="font-medium text-emerald-600">{i.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BEST META ADS */}
      <BestMetaAds />

      {loading && (
        <p className="mt-6 text-xs text-slate-500">Loading latest numbers…</p>
      )}
      {data?.range && (
        <p className="mt-2 text-xs text-slate-500">
          Range: {data.range.from.slice(0, 10)} → {data.range.to.slice(0, 10)}
        </p>
      )}
    </div>
  );
}

/* ── BestMetaAds ── */
function BestMetaAds() {
  const [roasTarget, setRoasTarget] = React.useState<number>(0);

  React.useEffect(() => {
    const stored = localStorage.getItem("attribix_roas_target");
    if (stored) {
      const n = parseFloat(stored);
      if (!isNaN(n) && n > 0) setRoasTarget(n);
    }
  }, []);

  const metaAds = ADS.filter((r) => r.platform === "Meta");

  // Best individual ad by ROAS
  const bestAd = React.useMemo(() => {
    return metaAds.reduce(
      (best, r) => {
        const roas = r.spend > 0 ? r.revenue / r.spend : 0;
        const bestRoas = best ? (best.spend > 0 ? best.revenue / best.spend : 0) : -1;
        return roas > bestRoas ? r : best;
      },
      null as (typeof metaAds)[0] | null
    );
  }, [metaAds]);

  // Best campaign by aggregated ROAS
  const campaignMap = React.useMemo(() => {
    const map = new Map<string, { spend: number; revenue: number; purchases: number }>();
    metaAds.forEach((r) => {
      const c = map.get(r.campaign) ?? { spend: 0, revenue: 0, purchases: 0 };
      map.set(r.campaign, {
        spend: c.spend + r.spend,
        revenue: c.revenue + r.revenue,
        purchases: c.purchases + r.purchases,
      });
    });
    return map;
  }, [metaAds]);

  const bestCampaign = React.useMemo(() => {
    let best: { name: string; spend: number; revenue: number; purchases: number; roas: number } | null = null;
    campaignMap.forEach((v, name) => {
      const roas = v.spend > 0 ? v.revenue / v.spend : 0;
      if (!best || roas > best.roas) best = { name, ...v, roas };
    });
    return best as { name: string; spend: number; revenue: number; purchases: number; roas: number } | null;
  }, [campaignMap]);

  // Positive / negative counts
  const { positive, negative } = React.useMemo(() => {
    if (roasTarget <= 0) return { positive: 0, negative: 0 };
    let pos = 0, neg = 0;
    metaAds.forEach((r) => {
      const roas = r.spend > 0 ? r.revenue / r.spend : 0;
      roas >= roasTarget ? pos++ : neg++;
    });
    return { positive: pos, negative: neg };
  }, [metaAds, roasTarget]);

  const bestAdRoas = bestAd && bestAd.spend > 0 ? bestAd.revenue / bestAd.spend : 0;
  const bestAdPositive = roasTarget > 0 ? bestAdRoas >= roasTarget : null;

  return (
    <section className="mt-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-medium">Meta Ads Performance</h2>
        <Link
          href="/analytics/ads"
          className="text-sm text-indigo-600 hover:text-indigo-500 font-medium flex items-center gap-1"
        >
          See detailed Meta Ads performance
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Best campaign */}
        {bestCampaign && (
          <div className="ax-card ax-card-body lg:col-span-2">
            <div className="ax-metric-label mb-1">Top Campaign</div>
            <div className="font-semibold text-slate-800 text-sm truncate mb-2">{bestCampaign.name}</div>
            <div className="flex items-end gap-4">
              <div>
                <div className="text-xs text-slate-500">ROAS</div>
                <div className="text-xl font-bold text-emerald-600">{bestCampaign.roas.toFixed(2)}×</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Revenue</div>
                <div className="text-sm font-semibold text-slate-800">
                  ${bestCampaign.revenue.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Spend</div>
                <div className="text-sm font-semibold text-slate-800">
                  ${bestCampaign.spend.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Purchases</div>
                <div className="text-sm font-semibold text-slate-800">{bestCampaign.purchases}</div>
              </div>
            </div>
          </div>
        )}

        {/* Best ad */}
        {bestAd && (
          <div className={`ax-card ax-card-body ${bestAdPositive === true ? "ring-1 ring-emerald-200 bg-emerald-50/40" : bestAdPositive === false ? "ring-1 ring-rose-200 bg-rose-50/40" : ""}`}>
            <div className="ax-metric-label mb-1">Top Ad</div>
            <div className="font-semibold text-slate-800 text-sm truncate mb-2">{bestAd.name}</div>
            <div className="text-xl font-bold text-emerald-600">{bestAdRoas.toFixed(2)}×</div>
            <div className="text-xs text-slate-500 mt-0.5">ROAS · ${bestAd.revenue.toLocaleString()} rev</div>
            {roasTarget > 0 && (
              <div className={`mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${bestAdPositive ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>
                target {roasTarget.toFixed(1)}× {bestAdPositive ? "✓" : "✗"}
              </div>
            )}
          </div>
        )}

        {/* Positive/negative summary */}
        <div className="ax-card ax-card-body">
          <div className="ax-metric-label mb-3">
            {roasTarget > 0 ? `vs. ${roasTarget.toFixed(1)}× target` : "Ad Performance"}
          </div>
          {roasTarget > 0 ? (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2">
                <span className="flex items-center gap-1.5 text-sm text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Profitable
                </span>
                <span className="font-bold text-emerald-700">{positive}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-rose-50 border border-rose-200 px-3 py-2">
                <span className="flex items-center gap-1.5 text-sm text-rose-700">
                  <span className="h-2 w-2 rounded-full bg-rose-500" />
                  Underperforming
                </span>
                <span className="font-bold text-rose-700">{negative}</span>
              </div>
            </div>
          ) : (
            <div className="text-sm text-slate-500">
              Set a ROAS target in{" "}
              <Link href="/analytics/ads" className="text-indigo-600 underline underline-offset-2">
                Ads Review
              </Link>{" "}
              to see profitable vs. underperforming ads.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
