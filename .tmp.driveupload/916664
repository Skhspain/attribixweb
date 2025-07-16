// src/app/analytics/page.tsx
import React from "react";

const stats = [
  { label: "Total Visits", value: "12.5k" },
  { label: "Conversions",  value: "1.2k" },
  { label: "Revenue",      value: "$18.9k" },
  { label: "ROAS",         value: "4.2" },
];

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-8 text-gray-900">
      {/* Dashboard header */}
      <h1 className="text-2xl font-bold text-brand-primary">
        Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-4 bg-white rounded-2xl shadow border border-brand-accent flex flex-col items-center"
          >
            <span className="text-xl font-semibold">{s.value}</span>
            <span className="text-sm text-gray-500">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="font-medium mb-2 text-brand-primary">Overview</h2>
          {/* TODO: insert line chart component */}
          <div className="h-40 bg-gray-100 rounded" />
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="font-medium mb-2 text-brand-primary">Sessions by Source</h2>
          {/* TODO: insert bar chart component */}
          <div className="h-40 bg-gray-100 rounded" />
        </div>
      </div>

      {/* Recent Activity & Integrations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="font-medium mb-2 text-brand-primary">Recent Activity</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-1 text-left">Date</th>
                <th className="py-1 text-left">User</th>
                <th className="py-1 text-left">Activity</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {/* TODO: map over real data */}
              <tr>
                <td className="py-1">John Doe</td>
                <td className="py-1">Signed up</td>
                <td className="py-1">Signed up</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-1">Jane Smith</td>
                <td className="py-1">Purchase</td>
                <td className="py-1">Purchase</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="font-medium mb-2 text-brand-primary">Integrations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Meta Pixel Active</li>
            <li>Google Tracking Active</li>
            <li>GA4 Active</li>
          </ul>
        </div>
      </div>
    </div>
  );
}