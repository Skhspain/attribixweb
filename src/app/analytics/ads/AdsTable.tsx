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

export default function AdsTable({ rows }: { rows: AdsRow[] }) {
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({
    key: "spend",
    dir: "desc",
  });

  const computed = useMemo(() => {
    return rows.map((r) => {
      const cpp = r.purchases > 0 ? r.spend / r.purchases : 0;
      const prevCpp =
        r.prevPurchases > 0 ? r.prevSpend / r.prevPurchases : 0;

      const roas = r.spend > 0 ? r.revenue / r.spend : 0;
      const prevRoas = r.prevSpend > 0 ? r.prevRevenue / r.prevSpend : 0;

      return {
        ...r,
        cpp,
        prevCpp,
        roas,
        prevRoas,
      };
    });
  }, [rows]);

  const sorted = useMemo(() => {
    const copy = [...computed];
    copy.sort((a, b) => {
      const k = sort.key as keyof typeof copy[number];
      const av = (a as any)[k] ?? 0;
      const bv = (b as any)[k] ?? 0;
      if (typeof av === "string" && typeof bv === "string") {
        return sort.dir === "asc"
          ? av.localeCompare(bv)
          : bv.localeCompare(av);
      }
      return sort.dir === "asc" ? av - bv : bv - av;
    });
    return copy;
  }, [computed, sort]);

  const onSort = (key: SortKey) =>
    setSort((s) =>
      s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "desc" }
    );

  const th = (label: string, key: SortKey, align?: "right") => (
    <th
      onClick={() => onSort(key)}
      className={`px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 cursor-pointer select-none ${
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
        <thead className="bg-gray-50">
          <tr>
            {th("Ad", "name")}
            {th("Campaign", "campaign")}
            {th("Ad Set", "adset")}
            {th("Ad Spend", "spend", "right")}
            {th("Purchases", "purchases", "right")}
            {th("Cost / Purchase", "cpp", "right")}
            {th("ROAS", "roas", "right")}
            {th("Revenue", "revenue", "right")}
          </tr>
        </thead>
        <tbody>
          {sorted.map((r) => (
            <tr key={r.id} className="border-t border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">{r.name}</td>
              <td className="px-4 py-3 text-gray-700">{r.campaign}</td>
              <td className="px-4 py-3 text-gray-700">{r.adset ?? "-"}</td>

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
              />
              <NumericWithDelta
                className="px-4 py-3 text-right"
                value={r.roas}
                prev={r.prevRoas}
                decimals={2}
              />
              <NumericWithDelta
                className="px-4 py-3 text-right"
                value={r.revenue}
                prev={r.prevRevenue}
                format="currency"
              />
            </tr>
          ))}
          {sorted.length === 0 && (
            <tr>
              <td colSpan={8} className="px-4 py-10 text-center text-gray-500">
                No ads found for your filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function pctChange(curr: number, prev: number) {
  if (!isFinite(curr) || !isFinite(prev) || prev === 0) return 0;
  return ((curr - prev) / Math.abs(prev)) * 100;
}
function fmtCurrency(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}
function NumericWithDelta({
  value,
  prev,
  className,
  decimals = 0,
  format,
}: {
  value: number;
  prev: number;
  className?: string;
  decimals?: number;
  format?: "currency";
}) {
  const v = format === "currency" ? fmtCurrency(value) : value.toFixed(decimals);
  const delta = pctChange(value, prev);
  const positive = delta >= 0;
  const badge =
    Math.abs(delta) === Infinity || Number.isNaN(delta)
      ? null
      : `${positive ? "▲" : "▼"} ${Math.abs(delta).toFixed(1)}%`;

  return (
    <td className={className}>
      <div className="flex flex-col items-end">
        <div>{v}</div>
        {badge !== null && (
          <div
            className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-[11px] ${
              positive
                ? "bg-emerald-50 text-emerald-600"
                : "bg-rose-50 text-rose-600"
            }`}
            title={`Previous: ${
              format === "currency" ? fmtCurrency(prev) : prev.toFixed(decimals)
            }`}
          >
            {badge}
          </div>
        )}
      </div>
    </td>
  );
}
