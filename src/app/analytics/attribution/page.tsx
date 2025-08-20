// src/app/analytics/attribution/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { CUSTOMERS } from "./data";
import { attribute, fmtCurrency, type Model } from "./logic";

const MODELS: { key: Model; label: string }[] = [
  { key: "last", label: "Last‑Click" },
  { key: "first", label: "First‑Click" },
  { key: "linear", label: "Linear" },
  { key: "timeDecay", label: "Time‑Decay" },
];

export default function AttributionOverviewPage() {
  const [model, setModel] = useState<Model>("last");

  const { channels, totalRevenue, totalConversions } = useMemo(
    () => attribute(CUSTOMERS, model),
    [model]
  );

  const aov = totalConversions > 0 ? totalRevenue / totalConversions : 0;

  return (
    <>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Attribution</h1>

      {/* Model picker + subnav */}
      <div className="flex flex-col gap-3 mb-6 md:flex-row md:items-center md:justify-between">
        <div className="inline-flex overflow-hidden rounded-xl border border-gray-200 bg-white">
          {MODELS.map((m) => (
            <button
              key={m.key}
              onClick={() => setModel(m.key)}
              className={`px-4 py-2 text-sm font-medium ${
                model === m.key
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="text-sm">
          <a
            href="/analytics/attribution/customerlist"
            className="rounded-xl border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50"
          >
            Customer List →
          </a>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Kpi label="Attributed Revenue" value={fmtCurrency(totalRevenue)} />
        <Kpi label="Attributed Conversions" value={totalConversions.toLocaleString()} />
        <Kpi label="AOV (Attributed)" value={fmtCurrency(aov)} />
      </div>

      {/* Channel table */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Channel</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Conversions</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Attributed Revenue</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Share</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((row) => {
              const share = totalRevenue > 0 ? (row.revenue / totalRevenue) * 100 : 0;
              return (
                <tr key={row.channel} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{row.channel}</td>
                  <td className="px-4 py-3 text-right">{row.conversions.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">{fmtCurrency(row.revenue)}</td>
                  <td className="px-4 py-3 text-right">{share.toFixed(1)}%</td>
                </tr>
              );
            })}
            {channels.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center text-gray-500">
                  No data for this model.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
}
