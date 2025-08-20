// src/app/analytics/attribution/customerlist/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { CUSTOMERS } from "../data";
import { attribute, fmtCurrency, type Model } from "../logic";

const MODELS: { key: Model; label: string }[] = [
  { key: "last", label: "Last‑Click" },
  { key: "first", label: "First‑Click" },
  { key: "linear", label: "Linear" },
  { key: "timeDecay", label: "Time‑Decay" },
];

export default function CustomerListPage() {
  const [model, setModel] = useState<Model>("last");
  const [query, setQuery] = useState("");

  const { perCustomer } = useMemo(() => attribute(CUSTOMERS, model), [model]);

  const rows = useMemo(
    () =>
      perCustomer.filter(
        (r) =>
          r.customerName.toLowerCase().includes(query.toLowerCase()) ||
          r.orderId.toLowerCase().includes(query.toLowerCase())
      ),
    [perCustomer, query]
  );

  return (
    <>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Customer List</h1>

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

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search customers or order IDs…"
          className="w-full md:w-80 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Customer</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Order</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">Value</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Attributed Split</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Path</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const split = Object.entries(r.shares)
                .sort((a, b) => b[1] - a[1])
                .map(([ch, v]) => `${ch} ${fmtCurrency(v)}`)
                .join("  ·  ");

              const pathText = r.path.map((t) => t.source).join(" → ");

              return (
                <tr key={r.orderId} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {r.customerName}
                    <div className="text-xs text-gray-500">ID: {r.customerId}</div>
                  </td>
                  <td className="px-4 py-3">{r.orderId}</td>
                  <td className="px-4 py-3 text-right">{fmtCurrency(r.orderValue)}</td>
                  <td className="px-4 py-3">{split || "-"}</td>
                  <td className="px-4 py-3">
                    <span title={pathText} className="text-gray-700">
                      {pathText}
                    </span>
                  </td>
                </tr>
              );
            })}
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-gray-500">
                  No customers match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
