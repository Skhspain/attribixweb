// src/app/analytics/page.tsx
"use client";

import dynamic from "next/dynamic";
import {
  kpis,
  spendKpis,
  overview,
  sessionsBySource,
  recent,
  integrations,
} from "./data";

// client-only charts
const OverviewChart = dynamic(
  () => import("./Charts").then((m) => m.OverviewChart),
  { ssr: false }
);
const SessionsBySourceChart = dynamic(
  () => import("./Charts").then((m) => m.SessionsBySourceChart),
  { ssr: false }
);

export default function AnalyticsPage() {
  return (
    <div className="min-w-0 px-4 py-6 md:px-6 md:py-8">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Dashboard</h1>
      </header>

      {/* Row 1: Total Visits / Conversions / Revenue */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="ax-card ax-card-body">
            <div className="ax-metric-label">{k.label}</div>
            <div className="ax-metric-value">{k.value}</div>
            {typeof k.delta === "number" && (
              <div className="mt-1 flex items-center gap-2">
                <span
                  className={[
                    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                    k.delta >= 0 ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700",
                  ].join(" ")}
                >
                  <svg
                    className={["mr-1 h-3 w-3", k.delta >= 0 ? "text-emerald-600" : "text-rose-600"].join(" ")}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {k.delta >= 0 ? <path d="M10 4l6 6H4l6-6z" /> : <path d="M10 16l-6-6h12l-6 6z" />}
                  </svg>
                  {k.delta >= 0 ? "+" : ""}
                  {k.delta.toFixed(1)}%
                </span>
                <span className="text-xs text-slate-500">vs last 30d</span>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Row 2: Ad Spend / Confirmed Revenue (Ads) / ROAS */}
      <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(spendKpis ?? []).map((k) => (
          <div key={k.label} className="ax-card ax-card-body">
            <div className="ax-metric-label">{k.label}</div>
            <div className="ax-metric-value">{k.value}</div>
            {typeof k.delta === "number" && (
              <div className="mt-1 flex items-center gap-2">
                <span
                  className={[
                    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                    k.delta >= 0 ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700",
                  ].join(" ")}
                >
                  <svg
                    className={["mr-1 h-3 w-3", k.delta >= 0 ? "text-emerald-600" : "text-rose-600"].join(" ")}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {k.delta >= 0 ? <path d="M10 4l6 6H4l6-6z" /> : <path d="M10 16l-6-6h12l-6 6z" />}
                  </svg>
                  {k.delta >= 0 ? "+" : ""}
                  {k.delta.toFixed(1)}%
                </span>
                <span className="text-xs text-slate-500">vs last 30d</span>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="ax-card ax-card-body min-w-0">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-medium">Overview</h2>
          </div>
          <OverviewChart data={overview} />
        </div>

        <div className="ax-card ax-card-body min-w-0">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-medium">Sessions by Source</h2>
          </div>
          <SessionsBySourceChart data={sessionsBySource} />
        </div>
      </section>

      {/* Table + Integrations */}
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 ax-card ax-card-body">
          <h3 className="text-base font-medium mb-3">Recent Activity</h3>
          <div className="overflow-x-auto">
            <table className="ax-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>User</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((r) => (
                  <tr key={`${r.date}-${r.user}`}>
                    <td>{r.date}</td>
                    <td>{r.user}</td>
                    <td>{r.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
    </div>
  );
}
