// Illustrative product visuals. Each one mirrors the structure of a real
// screen in the Attribix dashboard (src/app/analytics/*): same section names,
// metric names and controls. All numbers are invented sample data and every
// frame is labelled as such. Numbers are internally consistent
// (ROAS = revenue / spend, AOV = revenue / orders) so they teach correctly.
//
// Replace with real, anonymised screenshots when approved ones exist.

import React from "react";
import { ExampleLabel, cx } from "./ui";

const usd = (n: number, d = 0) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: d, minimumFractionDigits: d });

export function AppFrame({
  title,
  active,
  children,
  caption,
}: {
  title: string;
  active: string;
  children: React.ReactNode;
  caption?: string;
}) {
  const nav = ["Overview", "Meta Ads", "Google Ads", "Ads Review", "Attribution", "Orders", "Settings"];
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-2xl border border-white/15 bg-white text-slate-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-2 truncate text-[11px] font-medium text-slate-500">Attribix · {title}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr]">
          <nav aria-hidden className="hidden border-r border-slate-100 bg-white p-2 sm:block">
            {nav.map((n) => (
              <div
                key={n}
                className={cx(
                  "rounded-md px-2.5 py-1.5 text-[11px]",
                  n === active ? "bg-slate-900 font-semibold text-white" : "text-slate-500"
                )}
              >
                {n}
              </div>
            ))}
          </nav>
          <div className="min-w-0 p-4 sm:p-5">{children}</div>
        </div>
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white/55">
        <ExampleLabel />
        {caption && <span>{caption}</span>}
      </figcaption>
    </figure>
  );
}

function Kpi({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <div className="text-[10px] font-medium uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-base font-bold tabular-nums text-slate-900">{value}</div>
      {hint && <div className="text-[10px] text-slate-400">{hint}</div>}
    </div>
  );
}

/* ---------- Overview ---------- */
export function OverviewMock() {
  const revenue = 48320;
  const orders = 612;
  const spend = 14200;
  const sources = [
    { s: "Meta", v: 42 },
    { s: "Google", v: 31 },
    { s: "Email", v: 12 },
    { s: "Direct", v: 10 },
    { s: "Other", v: 5 },
  ];
  return (
    <AppFrame title="Overview" active="Overview" caption="Overview: your sales, orders and ad costs for the last 30 days.">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        <Kpi label="Sales" value={usd(revenue)} />
        <Kpi label="Orders" value={orders.toLocaleString("en-US")} />
        <Kpi label="Avg. order" value={usd(revenue / orders, 2)} />
        <Kpi label="Ad cost" value={usd(spend)} />
        <Kpi label="ROAS" value={`${(revenue / spend).toFixed(2)}x`} hint="Sales per $1 of ads" />
      </div>
      <div className="mt-3 rounded-lg border border-slate-200 p-3">
        <div className="text-[11px] font-semibold text-slate-700">Where visitors came from</div>
        <div className="mt-2 space-y-1.5">
          {sources.map((x) => (
            <div key={x.s} className="grid grid-cols-[56px_1fr_32px] items-center gap-2 text-[10px] text-slate-600">
              <span>{x.s}</span>
              <span className="h-2 rounded-full bg-slate-100">
                <span className="block h-2 rounded-full bg-[#0e7eff]" style={{ width: `${x.v * 2}%` }} />
              </span>
              <span className="text-right tabular-nums">{x.v}%</span>
            </div>
          ))}
        </div>
      </div>
    </AppFrame>
  );
}

/* ---------- Ads Review ---------- */
export const ADS_SAMPLE = [
  { c: "Prospecting · Broad", p: "Meta", spend: 4200, rev: 13860, buys: 151 },
  { c: "Retargeting · 30d", p: "Meta", spend: 1350, rev: 6345, buys: 74 },
  { c: "Search · Brand", p: "Google", spend: 900, rev: 7920, buys: 96 },
  { c: "Performance Max", p: "Google", spend: 3800, rev: 7600, buys: 88 },
  { c: "Creative test · UGC", p: "Meta", spend: 1100, rev: 1650, buys: 19 },
];

export function AdsReviewMock({ target = 2.5 }: { target?: number }) {
  return (
    <AppFrame
      title="Ads Review"
      active="Ads Review"
      caption={`Ads Review: each campaign checked against your goal of $${target.toFixed(2)} in sales for every $1 spent.`}
    >
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs font-semibold text-slate-800">Campaigns, last 30 days</div>
        <div className="rounded-md border border-slate-200 px-2 py-1 text-[10px] text-slate-600">
          Goal <b className="text-slate-900">{target.toFixed(1)}x</b>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[460px] text-left text-[11px]">
          <thead className="text-[10px] uppercase tracking-wide text-slate-500">
            <tr className="border-b border-slate-200">
              <th className="py-1.5 pr-2 font-medium">Campaign</th>
              <th className="py-1.5 pr-2 text-right font-medium">Cost</th>
              <th className="py-1.5 pr-2 text-right font-medium">Sales</th>
              <th className="py-1.5 pr-2 text-right font-medium">Cost per sale</th>
              <th className="py-1.5 pr-2 text-right font-medium">ROAS</th>
              <th className="py-1.5 text-right font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {ADS_SAMPLE.map((r) => {
              const roas = r.rev / r.spend;
              const ok = roas >= target;
              return (
                <tr key={r.c} className="border-b border-slate-100">
                  <td className="py-1.5 pr-2">
                    <div className="font-medium text-slate-800">{r.c}</div>
                    <div className="text-[10px] text-slate-400">{r.p}</div>
                  </td>
                  <td className="py-1.5 pr-2 text-right tabular-nums">{usd(r.spend)}</td>
                  <td className="py-1.5 pr-2 text-right tabular-nums">{r.buys}</td>
                  <td className="py-1.5 pr-2 text-right tabular-nums">{usd(r.spend / r.buys, 2)}</td>
                  <td className="py-1.5 pr-2 text-right font-semibold tabular-nums">{roas.toFixed(2)}x</td>
                  <td className="py-1.5 text-right">
                    <span
                      className={cx(
                        "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                        ok ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                      )}
                    >
                      {ok ? "Beats goal" : "Below goal"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AppFrame>
  );
}

/* ---------- Attribution ---------- */
export function AttributionMock() {
  const rows = [
    { ch: "Meta", conv: 201, rev: 16900 },
    { ch: "Google", conv: 168, rev: 14250 },
    { ch: "Email", conv: 74, rev: 6120 },
    { ch: "Direct / other", conv: 131, rev: 11050 },
  ];
  const total = rows.reduce((a, r) => a + r.rev, 0);
  const conv = rows.reduce((a, r) => a + r.conv, 0);
  return (
    <AppFrame
      title="Attribution"
      active="Attribution"
      caption="Attribution: your Shopify sales split by channel. You pick the rule for who gets the credit."
    >
      <div className="mb-3 flex flex-wrap gap-1.5" aria-hidden>
        {["Last click", "First click", "Linear", "Time-decay"].map((m) => (
          <span
            key={m}
            className={cx(
              "rounded-md border px-2 py-1 text-[10px]",
              m === "Linear" ? "border-slate-900 bg-slate-900 font-semibold text-white" : "border-slate-200 text-slate-600"
            )}
          >
            {m}
          </span>
        ))}
      </div>
      <div className="mb-3 grid grid-cols-3 gap-2">
        <Kpi label="Sales counted" value={usd(total)} />
        <Kpi label="Orders" value={conv.toLocaleString("en-US")} />
        <Kpi label="Avg. order" value={usd(total / conv, 2)} />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[360px] text-left text-[11px]">
          <thead className="text-[10px] uppercase tracking-wide text-slate-500">
            <tr className="border-b border-slate-200">
              <th className="py-1.5 pr-2 font-medium">Channel</th>
              <th className="py-1.5 pr-2 text-right font-medium">Orders</th>
              <th className="py-1.5 pr-2 text-right font-medium">Sales credited</th>
              <th className="py-1.5 text-right font-medium">Share</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.ch} className="border-b border-slate-100">
                <td className="py-1.5 pr-2 font-medium text-slate-800">{r.ch}</td>
                <td className="py-1.5 pr-2 text-right tabular-nums">{r.conv}</td>
                <td className="py-1.5 pr-2 text-right font-semibold tabular-nums">{usd(r.rev)}</td>
                <td className="py-1.5 text-right tabular-nums">{((r.rev / total) * 100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppFrame>
  );
}

/* ---------- Tracking ---------- */
function Toggle({ on, label, sub }: { on: boolean; label: string; sub?: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-3 py-2">
      <div>
        <div className="text-[11px] font-semibold text-slate-800">{label}</div>
        {sub && <div className="text-[10px] text-slate-500">{sub}</div>}
      </div>
      <span className={cx("relative h-4 w-7 shrink-0 rounded-full", on ? "bg-emerald-500" : "bg-slate-300")} aria-hidden>
        <span className={cx("absolute top-0.5 h-3 w-3 rounded-full bg-white", on ? "left-3.5" : "left-0.5")} />
      </span>
      <span className="sr-only">{on ? "On" : "Off"}</span>
    </div>
  );
}

export function TrackingMock() {
  return (
    <AppFrame
      title="Settings · Server-side (CAPI)"
      active="Settings"
      caption="Settings: every sale is sent to Facebook and Google from a server, and counted only once."
    >
      <div className="grid gap-2 sm:grid-cols-2">
        <Toggle on label="Facebook (Meta Conversions API)" sub="Send sales from the server" />
        <Toggle on label="Google (server-side)" sub="Send sales from the server" />
        <div className="rounded-lg border border-slate-200 px-3 py-2 sm:col-span-2">
          <div className="text-[11px] font-semibold text-slate-800">Count each sale once (deduplication)</div>
          <div className="mt-1 text-[10px] text-slate-500">Both reports of a sale get the same ID, so it is only counted once.</div>
          <div className="mt-2 inline-flex rounded-md border border-slate-200 text-[10px]">
            <span className="rounded-l-md bg-slate-900 px-2 py-1 font-semibold text-white">event_id</span>
            <span className="px-2 py-1 text-slate-500">order_id</span>
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-[10px] text-slate-600">
        <div className="mb-1.5 font-semibold text-slate-700">Order #1042 · {usd(84, 2)}</div>
        <div className="grid gap-1 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <span className="rounded border border-slate-200 bg-white px-2 py-1">From the browser · ID a91f…</span>
          <span aria-hidden className="text-center text-slate-400">+</span>
          <span className="rounded border border-slate-200 bg-white px-2 py-1">From the server · ID a91f…</span>
        </div>
        <div className="mt-1.5 font-semibold text-emerald-700">Same ID, so Facebook counts it once</div>
      </div>
    </AppFrame>
  );
}
