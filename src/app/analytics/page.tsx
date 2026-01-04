// src/app/analytics/page.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { overview, sessionsBySource, recent, integrations } from "./data";

const OverviewChart = dynamic(
  () => import("./Charts").then((m) => m.OverviewChart),
  { ssr: false }
);
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
          <OverviewChart data={overview} />
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
