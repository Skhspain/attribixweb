"use client";

import React from "react";
import { OverviewChart, SessionsChart } from "./Charts";
import { recentActivity, integrations } from "./data";

export default function AnalyticsPage() {
  const metrics: [string, string][] = [
    ["12.5k", "Total Visits"],
    ["1.2k", "Conversions"],
    ["$18.9k", "Revenue"],
    ["4.2", "ROAS"],
  ];

  return (
    <>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-10">
        Dashboard
      </h1>

      {/* Metric cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {metrics.map(([value, label]) => (
          <div
            key={label}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-2xl font-bold text-gray-900">{value}</div>
            <div className="text-sm text-gray-500">{label}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Overview
          </h2>
          <div className="h-52">
            <OverviewChart />
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Sessions by Source
          </h2>
          <div className="h-52">
            <SessionsChart />
          </div>
        </section>
      </div>

      {/* Tables */}
      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <table className="w-full text-sm">
            <thead className="text-gray-500">
              <tr>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">User</th>
                <th className="text-left py-2">Activity</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {recentActivity.map((row, i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td className="py-2">{row.date}</td>
                  <td className="py-2">{row.user}</td>
                  <td className="py-2">{row.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Integrations
          </h2>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            {integrations.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
