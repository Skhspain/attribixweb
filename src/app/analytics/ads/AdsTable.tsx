// src/app/analytics/ads/AdsTable.tsx
"use client";

import React, { useMemo, useState } from "react";
import type { AdsRow } from "./data";

type SortKey =
  | "name"
  | "campaign"
  | "adset"
  | "spend"
  | "purchases"
  | "cpp"
  | "roas"
  | "revenue";

export default function AdsTable({
  rows,
  roasTarget = 0,
}: {
  rows: AdsRow[];
  roasTarget?: number;
}) {
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({
    key: "roas",
    dir: "desc",
  });

  const computed = useMemo(() => {
    return rows.map((r) => {
      const cpp = r.purchases > 0 ? r.spend / r.purchases : 0;
      const prevCpp =
        r.prevPurchases > 0 ? r.prevSpend / r.prevPurchases : 0;
      const roas = r.spend > 0 ? r.revenue / r.spend : 0;
      const prevRoas = r.prevSpend > 0 ? r.prevRevenue / r.prevSpend : 0;
      const positive = roasTarget > 0 ? roas >= roasTarget : null;
      return { ...r, cpp, prevCpp, roas, prevRoas, positive };
    });
  }, [rows, roasTarget]);

  const sorted = useMemo(() => {
    const copy = [...computed];
    copy.sort((a, b) => {
      const av = (a as any)[sort.key] ?? 0;
      const bv = (b as any)[sort.key] ?? 0;
      if (typeof av === "string" && typeof bv === "string") {
        return sort.dir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      return sort.dir === "asc" ? av - bv : bv - av;
    });
    return copy;
  }, [computed, sort]);

  const onSort = (key: SortKey) =>
    setSort((s) =>
      s.key === key
        ? { key, dir: s.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "desc" }
    );

  const th = (label: string, key: SortKey, align?: "right") => (
    <th
      onClick={() => onSort(key)}
      className={`px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 cursor-pointer select-none whitespace-nowrap ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <div className="inline-flex items-center gap-1">
        {label}
        <span className="text-gray-300">
          {sort.key === key ? (sort.dir === "asc" ? "▲" : "▼") : "↕"}
        </span>
      </div>
    </th>
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {roasTarget > 0 && (
              <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-gray-400 text-center w-8" />
            )}
            {th("Ad", "name")}
            {th("Campaign", "campaign")}
            {th("Ad Set", "adset")}
            {th("Spend", "spend", "right")}
            {th("Purchases", "purchases", "right")}
            {th("CPP", "cpp", "right")}
            {th("ROAS", "roas", "right")}
            {th("Revenue", "revenue", "right")}
          </tr>
        </thead>
        <tbody>
          {sorted.map((r) => {
            const rowBg =
              r.positive === true
                ? "bg-emerald-50/60"
                : r.positive === false
                ? "bg-rose-50/60"
                : "";

            return (
              <tr
                key={r.id}
                className={`border-t border-gray-100 hover:brightness-95 transition-colors ${rowBg}`}
              >
                {/* Positive/negative indicator */}
                {roasTarget > 0 && (
                  <td className="px-3 py-3 text-center">
                    {r.positive === true ? (
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-bold">↑</span>
                    ) : (
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-rose-100 text-rose-600 text-[10px] font-bold">↓</span>
                    )}
                  </td>
                )}
                <td className="px-4 py-3 font-medium text-gray-900 max-w-[180px] truncate">{r.name}</td>
                <td className="px-4 py-3 text-gray-600 max-w-[180px] truncate">{r.campaign}</td>
                <td className="px-4 py-3 text-gray-500 max-w-[140px] truncate">{r.adset ?? "–"}</td>

                <NumericWithDelta
                  className="px-4 py-3 text-right"
                  value={r.spend}
                  prev={r.prevSpend}
                  format="currency"
                />
                <NumericWithDelta
                  className="px-4 py-3 text-right"
                  value={r.purchases}
                  prev={r.prevPurchases}
                />
                <NumericWithDelta
                  className="px-4 py-3 text-right"
                  value={r.cpp}
                  prev={r.prevCpp}
                  format="currency"
                  decimals={2}
                  lowerIsBetter
                />
                {/* ROAS — highlighted vs target */}
                <td className="px-4 py-3 text-right">
                  <div className="flex flex-col items-end gap-0.5">
                    <span
                      className={`font-semibold ${
                        r.positive === true
                          ? "text-emerald-600"
                          : r.positive === false
                          ? "text-rose-600"
                          : "text-gray-900"
                      }`}
                    >
                      {r.roas.toFixed(2)}×
                    </span>
                    {roasTarget > 0 && (
                      <span
                        className={`text-[10px] rounded-full px-1.5 py-0.5 ${
                          r.positive
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        target {roasTarget.toFixed(1)}×
                      </span>
                    )}
                  </div>
                </td>

                <NumericWithDelta
                  className="px-4 py-3 text-right"
                  value={r.revenue}
                  prev={r.prevRevenue}
                  format="currency"
                />
              </tr>
            );
          })}
          {sorted.length === 0 && (
            <tr>
              <td
                colSpan={roasTarget > 0 ? 9 : 8}
                className="px-4 py-10 text-center text-gray-400"
              >
                No ads match your filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

/* ── helpers ── */
function pctChange(curr: number, prev: number) {
  if (!isFinite(curr) || !isFinite(prev) || prev === 0) return null;
  return ((curr - prev) / Math.abs(prev)) * 100;
}
function fmtCurrency(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 2 });
}

function NumericWithDelta({
  value,
  prev,
  className,
  decimals = 0,
  format,
  lowerIsBetter = false,
}: {
  value: number;
  prev: number;
  className?: string;
  decimals?: number;
  format?: "currency";
  lowerIsBetter?: boolean;
}) {
  const v = format === "currency" ? fmtCurrency(value) : value.toFixed(decimals);
  const delta = pctChange(value, prev);
  const rawPositive = delta !== null && delta >= 0;
  const positive = lowerIsBetter ? !rawPositive : rawPositive;
  const badge =
    delta === null || Math.abs(delta) === Infinity || Number.isNaN(delta)
      ? null
      : `${rawPositive ? "▲" : "▼"} ${Math.abs(delta).toFixed(1)}%`;

  return (
    <td className={className}>
      <div className="flex flex-col items-end">
        <div className="text-gray-900">{v}</div>
        {badge !== null && (
          <div
            className={`mt-0.5 inline-block rounded-full px-1.5 py-0.5 text-[10px] ${
              positive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
            }`}
            title={`Previous: ${format === "currency" ? fmtCurrency(prev) : prev.toFixed(decimals)}`}
          >
            {badge}
          </div>
        )}
      </div>
    </td>
  );
}
