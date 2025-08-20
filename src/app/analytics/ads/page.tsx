// src/app/analytics/ads/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AdsRow, ADS } from "./data";
import AdsTable from "./AdsTable";

type Platform = "Meta" | "Google" | "TikTok";
const PLATFORMS: Platform[] = ["Meta", "Google", "TikTok"];

type Preset = "7d" | "30d" | "90d" | "custom";

export default function AdsReviewPage() {
  const [platform, setPlatform] = useState<Platform>("Meta");
  const [query, setQuery] = useState("");

  // timeframe state
  const [preset, setPreset] = useState<Preset>("30d");
  const [from, setFrom] = useState<string>(isoNDaysAgo(30)); // yyyy-mm-dd
  const [to, setTo] = useState<string>(isoToday());

  // recompute previous period bounds based on window length
  const windowDays = useMemo(() => daysBetween(from, to) + 1, [from, to]);
  const prevTo = useMemo(() => shiftDate(from, -1), [from]);
  const prevFrom = useMemo(
    () => shiftDate(from, -windowDays),
    [from, windowDays]
  );

  // mimic fetch on timeframe/platform change (wire to API later)
  const [rowsCurrent, setRowsCurrent] = useState<AdsRow[]>([]);
  const [rowsPrev, setRowsPrev] = useState<AdsRow[]>([]);
  useEffect(() => {
    // TODO: Replace with real fetch to your API:
    // fetch(`/api/ads?platform=${platform}&from=${from}&to=${to}`).then(...)
    // fetch(`/api/ads?platform=${platform}&from=${prevFrom}&to=${prevTo}`).then(...)
    // For now we return the mock ADS filtered by platform.
    const current = ADS.filter((r) => r.platform === platform);
    // Derive "previous" values from prev* fields (in your backend, return real previous-period aggregates)
    const previous = current.map((r) => ({
      ...r,
      spend: r.prevSpend,
      purchases: r.prevPurchases,
      revenue: r.prevRevenue,
    }));
    setRowsCurrent(current);
    setRowsPrev(previous);
  }, [platform, from, to, prevFrom, prevTo]);

  // search filter
  const rows = useMemo(
    () =>
      rowsCurrent.filter((r) =>
        `${r.campaign} ${r.adset ?? ""} ${r.name}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [rowsCurrent, query]
  );

  // build a map of previous-period by id for row deltas (AdsTable already shows per-metric deltas via prev* fields)
  const rowsWithPrev = useMemo(() => {
    const prevById = new Map(rowsPrev.map((r) => [r.id, r]));
    return rows.map((r) => {
      const p = prevById.get(r.id);
      return {
        ...r,
        prevSpend: p?.spend ?? 0,
        prevPurchases: p?.purchases ?? 0,
        prevRevenue: p?.revenue ?? 0,
      };
    });
  }, [rows, rowsPrev]);

  const kpis = useMemo(() => {
    const sum = (rs: AdsRow[], fn: (r: AdsRow) => number) =>
      rs.reduce((s, r) => s + fn(r), 0);

    const spend = sum(rowsWithPrev, (r) => r.spend);
    const prevSpendSum = sum(rowsWithPrev, (r) => r.prevSpend);

    const purchases = sum(rowsWithPrev, (r) => r.purchases);
    const prevPurchasesSum = sum(rowsWithPrev, (r) => r.prevPurchases);

    const revenue = sum(rowsWithPrev, (r) => r.revenue);
    const prevRevenueSum = sum(rowsWithPrev, (r) => r.prevRevenue);

    const cpp = purchases > 0 ? spend / purchases : 0;
    const prevCpp =
      prevPurchasesSum > 0 ? prevSpendSum / prevPurchasesSum : 0;

    const roas = spend > 0 ? revenue / spend : 0;
    const prevRoas = prevSpendSum > 0 ? prevRevenueSum / prevSpendSum : 0;

    return {
      spend,
      prevSpend: prevSpendSum,
      purchases,
      prevPurchases: prevPurchasesSum,
      revenue,
      prevRevenue: prevRevenueSum,
      cpp,
      prevCpp,
      roas,
      prevRoas,
    };
  }, [rowsWithPrev]);

  return (
    <>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Ads Review</h1>

      {/* Platform tabs + search + timeframe */}
      <div className="flex flex-col gap-3 mb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          {/* Platforms */}
          <div className="inline-flex overflow-hidden rounded-xl border border-gray-200 bg-white">
            {PLATFORMS.map((p) => (
              <button
                key={p}
                className={`px-4 py-2 text-sm font-medium ${
                  platform === p
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setPlatform(p)}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Presets */}
          <div className="inline-flex overflow-hidden rounded-xl border border-gray-200 bg-white">
            {(["7d", "30d", "90d"] as Preset[]).map((pr) => (
              <button
                key={pr}
                className={`px-3 py-2 text-xs font-medium ${
                  preset === pr
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => {
                  setPreset(pr);
                  const days = pr === "7d" ? 7 : pr === "30d" ? 30 : 90;
                  setFrom(isoNDaysAgo(days));
                  setTo(isoToday());
                }}
              >
                Last {pr}
              </button>
            ))}
            <button
              className={`px-3 py-2 text-xs font-medium ${
                preset === "custom"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setPreset("custom")}
            >
              Custom
            </button>
          </div>

          {/* Custom date range */}
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
                setPreset("custom");
              }}
              className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs"
            />
            <span className="text-xs text-gray-500">to</span>
            <input
              type="date"
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
                setPreset("custom");
              }}
              className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs"
            />
          </div>

          <span className="text-xs text-gray-500">
            comparing to previous {windowDays} days ({prevFrom} → {prevTo})
          </span>
        </div>

        {/* Search */}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search ads, ad sets, campaigns…"
          className="w-full lg:w-80 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* KPIs with deltas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <KpiCard
          label="Ad Spend"
          value={kpis.spend}
          prev={kpis.prevSpend}
          format="currency"
        />
        <KpiCard
          label="Purchases"
          value={kpis.purchases}
          prev={kpis.prevPurchases}
        />
        <KpiCard
          label="Cost / Purchase"
          value={kpis.cpp}
          prev={kpis.prevCpp}
          format="currency"
          decimals={2}
        />
        <KpiCard label="ROAS" value={kpis.roas} prev={kpis.prevRoas} decimals={2} />
        <KpiCard
          label="Revenue"
          value={kpis.revenue}
          prev={kpis.prevRevenue}
          format="currency"
        />
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <AdsTable rows={rowsWithPrev} />
      </div>
    </>
  );
}

/* ---------- helpers ---------- */
function isoToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}
function isoNDaysAgo(n: number) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - (n - 1));
  return d.toISOString().slice(0, 10);
}
function shiftDate(iso: string, deltaDays: number) {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + deltaDays);
  return d.toISOString().slice(0, 10);
}
function daysBetween(from: string, to: string) {
  const a = new Date(from + "T00:00:00").getTime();
  const b = new Date(to + "T00:00:00").getTime();
  const ms = Math.max(0, b - a);
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}
function pctChange(curr: number, prev: number) {
  if (!isFinite(curr) || !isFinite(prev) || prev === 0) return 0;
  return ((curr - prev) / Math.abs(prev)) * 100;
}
function fmtCurrency(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

function KpiCard({
  label,
  value,
  prev,
  format,
  decimals = 0,
}: {
  label: string;
  value: number;
  prev: number;
  format?: "currency";
  decimals?: number;
}) {
  const delta = pctChange(value, prev);
  const positive = delta >= 0;
  const valueText =
    format === "currency" ? fmtCurrency(value) : value.toFixed(decimals);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-gray-900">{valueText}</div>
      <div
        className={`mt-2 inline-block rounded-full px-2 py-0.5 text-xs ${
          positive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
        }`}
        title={`Previous: ${
          format === "currency" ? fmtCurrency(prev) : prev.toFixed(decimals)
        }`}
      >
        {positive ? "▲" : "▼"} {Math.abs(delta).toFixed(1)}% vs previous {/**/}
      </div>
    </div>
  );
}
