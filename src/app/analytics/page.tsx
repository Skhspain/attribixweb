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
function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
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
  }, [value]);

  return <span>{prefix}{Math.round(display).toLocaleString()}{suffix}</span>;
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
  };
};

export default function AnalyticsPage() {
  const [data, setData] = React.useState<OverviewResponse | null>(null);
  const [loading, setLoading] = React.useState(true);

  async function load() {
    setLoading(true);
    const base = process.env.NEXT_PUBLIC_ATTRIBIX_API_BASE!;
    const key = process.env.NEXT_PUBLIC_ATTRIBIX_API_KEY!;
    const res = await fetch(`${base}/api/report/overview`, {
      headers: { "x-attribix-key": key },
      cache: "no-store",
    });
    const json = (await res.json()) as OverviewResponse;
    setData(json);
    setLoading(false);
  }

  React.useEffect(() => { load(); }, []);

  const m = data?.metrics || { visits: 0, conversions: 0, revenue: 0, adspend: 0, roas: 0, cpp: 0 };

  return (
    <div className="min-w-0 px-4 py-6 md:px-6 md:py-8">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Dashboard</h1>
        <button onClick={load} className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50">
          Refresh
        </button>
      </header>

      {/* Row 1: Visits / Conversions / Revenue */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="ax-card ax-card-body"><div className="ax-metric-label">Total Visits</div><div className="ax-metric-value"><AnimatedNumber value={m.visits} /></div></div>
        <div className="ax-card ax-card-body"><div className="ax-metric-label">Conversions</div><div className="ax-metric-value"><AnimatedNumber value={m.conversions} /></div></div>
        <div className="ax-card ax-card-body"><div className="ax-metric-label">Revenue</div><div className="ax-metric-value"><AnimatedNumber value={m.revenue} prefix="$" /></div></div>
      </section>

      {/* Row 2: Spend / Confirmed Revenue / ROAS */}
      <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="ax-card ax-card-body"><div className="ax-metric-label">Ad Spend</div><div className="ax-metric-value"><AnimatedNumber value={m.adspend} prefix="$" /></div></div>
        <div className="ax-card ax-card-body"><div className="ax-metric-label">Confirmed Revenue (Ads)</div><div className="ax-metric-value"><AnimatedNumber value={m.revenue} prefix="$" /></div></div>
        <div className="ax-card ax-card-body"><div className="ax-metric-label">ROAS</div><div className="ax-metric-value">{m.roas == null ? "–" : <AnimatedNumber value={m.roas} />}</div></div>
      </section>

      {/* Charts */}
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="ax-card ax-card-body min-w-0"><h2 className="text-base font-medium mb-3">Overview</h2><OverviewChart data={overview} /></div>
        <div className="ax-card ax-card-body min-w-0"><h2 className="text-base font-medium mb-3">Sessions by Source</h2><SessionsBySourceChart data={sessionsBySource} /></div>
      </section>

      {/* Table + Integrations */}
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 ax-card ax-card-body">
          <h3 className="text-base font-medium mb-3">Recent Activity</h3>
          <table className="ax-table w-full">
            <thead><tr><th>Date</th><th>User</th><th>Activity</th></tr></thead>
            <tbody>{recent.map((r) => (<tr key={r.date+r.user}><td>{r.date}</td><td>{r.user}</td><td>{r.activity}</td></tr>))}</tbody>
          </table>
        </div>
        <div className="ax-card ax-card-body">
          <h3 className="text-base font-medium mb-3">Integrations</h3>
          <ul className="space-y-2 text-sm">
            {integrations.map((i) => (
              <li key={i.name} className="flex items-center justify-between rounded-xl border border-slate-200 p-2">
                <span>{i.name}</span>
                <span className="text-emerald-600 font-medium">{i.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {loading && <p className="mt-6 text-xs text-slate-500">Loading latest numbers…</p>}
      {data?.range && <p className="mt-2 text-xs text-slate-500">Range: {data.range.from.slice(0,10)} → {data.range.to.slice(0,10)}</p>}
    </div>
  );
}
