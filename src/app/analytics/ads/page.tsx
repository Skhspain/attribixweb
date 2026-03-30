// src/app/analytics/ads/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AdsRow, ADS } from "./data";
import AdsTable from "./AdsTable";

type Platform = "Meta" | "Google" | "TikTok";
const PLATFORMS: Platform[] = ["Meta", "Google"];

type PerfFilter = "all" | "positive" | "negative";

type Preset = "7d" | "30d" | "90d" | "custom";

const ROAS_TARGET_KEY = "attribix_roas_target";

export default function AdsReviewPage() {
  const [platform, setPlatform] = useState<Platform>("Meta");
  const [query, setQuery] = useState("");
  const [perfFilter, setPerfFilter] = useState<PerfFilter>("all");

  // ROAS target — persisted to localStorage
  const [roasTarget, setRoasTarget] = useState<number>(0);
  const [roasInput, setRoasInput] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem(ROAS_TARGET_KEY);
    if (stored) {
      const n = parseFloat(stored);
      if (!isNaN(n) && n > 0) { setRoasTarget(n); setRoasInput(String(n)); }
    }
  }, []);

  function applyRoasTarget() {
    const n = parseFloat(roasInput);
    if (!isNaN(n) && n > 0) {
      setRoasTarget(n);
      localStorage.setItem(ROAS_TARGET_KEY, String(n));
    } else {
      setRoasTarget(0);
      setRoasInput("");
      localStorage.removeItem(ROAS_TARGET_KEY);
    }
  }

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

  // search + perf filter
  const rows = useMemo(() => {
    return rowsCurrent.filter((r) => {
      const matchQuery = `${r.campaign} ${r.adset ?? ""} ${r.name}`
        .toLowerCase()
        .includes(query.toLowerCase());
      if (!matchQuery) return false;
      if (perfFilter !== "all" && roasTarget > 0) {
        const roas = r.spend > 0 ? r.revenue / r.spend : 0;
        const isPositive = roas >= roasTarget;
        if (perfFilter === "positive" && !isPositive) return false;
        if (perfFilter === "negative" && isPositive) return false;
      }
      return true;
    });
  }, [rowsCurrent, query, perfFilter, roasTarget]);

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

  // positive/negative counts based on ROAS target
  const perfCounts = useMemo(() => {
    if (roasTarget <= 0) return { positive: 0, negative: 0 };
    let positive = 0, negative = 0;
    rowsCurrent.forEach((r) => {
      const roas = r.spend > 0 ? r.revenue / r.spend : 0;
      roas >= roasTarget ? positive++ : negative++;
    });
    return { positive, negative };
  }, [rowsCurrent, roasTarget]);

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
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Ads Review</h1>

      {/* ROAS Target bar */}
      <div className="mb-6 flex flex-wrap items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4">
        <div className="flex-1 min-w-[200px]">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Target ROAS</div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              step="0.1"
              value={roasInput}
              onChange={(e) => setRoasInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applyRoasTarget()}
              placeholder="e.g. 3.0"
              className="w-28 rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={applyRoasTarget}
              className="rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-700 transition"
            >
              Set
            </button>
            {roasTarget > 0 && (
              <span className="text-sm text-gray-500">
                Current target: <strong className="text-gray-900">{roasTarget.toFixed(1)}×</strong>
              </span>
            )}
          </div>
        </div>

        {roasTarget > 0 && (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold text-emerald-700">{perfCounts.positive}</span>
              <span className="text-xs text-emerald-600">profitable</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-xl bg-rose-50 border border-rose-200 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              <span className="text-sm font-semibold text-rose-700">{perfCounts.negative}</span>
              <span className="text-xs text-rose-600">underperforming</span>
            </div>
          </div>
        )}
      </div>

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

      {/* Positive/negative filter tabs */}
      {roasTarget > 0 && (
        <div className="mb-4 flex items-center gap-2">
          {(["all", "positive", "negative"] as PerfFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => setPerfFilter(f)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                perfFilter === f
                  ? f === "positive"
                    ? "bg-emerald-600 text-white"
                    : f === "negative"
                    ? "bg-rose-600 text-white"
                    : "bg-gray-900 text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {f === "all"
                ? `All ads (${rowsCurrent.length})`
                : f === "positive"
                ? `↑ Profitable (${perfCounts.positive})`
                : `↓ Underperforming (${perfCounts.negative})`}
            </button>
          ))}
        </div>
      )}

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <AdsTable rows={rowsWithPrev} roasTarget={roasTarget} />
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
