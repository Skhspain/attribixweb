// src/app/analytics/page.tsx
import React from "react";
import Link from "next/link";

const stats = [
  { label: "Total Visits",  value: "12.5k" },
  { label: "Conversions",   value: "1.2k" },
  { label: "Revenue",       value: "$18.9k" },
  { label: "ROAS",          value: "4.2" },
];

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* —— Sidebar —— */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <nav className="p-6 space-y-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="block px-3 py-2 rounded hover:bg-gray-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/analytics"
                className="block px-3 py-2 rounded bg-blue-50 text-blue-600 font-medium"
              >
                Analytics
              </Link>
            </li>
            <li>
              <Link
                href="/recommendations"
                className="block px-3 py-2 rounded hover:bg-gray-100"
              >
                Recommendations
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="block px-3 py-2 rounded hover:bg-gray-100"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="block px-3 py-2 rounded hover:bg-gray-100"
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* —— Main Content —— */}
      <main className="flex-1 p-8 space-y-8">
        {/* — Stats row — */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center"
            >
              <div className="text-3xl font-bold">{value}</div>
              <div className="mt-1 text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>

        {/* — Charts — */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4">Overview</h3>
            <div className="h-40 bg-gray-100 rounded" />
          </section>
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4">Sessions by Source</h3>
            <div className="h-40 bg-gray-100 rounded" />
          </section>
        </div>

        {/* — Tables & Lists — */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white rounded-lg border border-gray-200 p-6 overflow-x-auto">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <table className="w-full text-sm text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-2 text-left">Date</th>
                  <th className="pb-2 text-left">User</th>
                  <th className="pb-2 text-left">Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-2">John Doe</td>
                  <td className="py-2">Signed up</td>
                  <td className="py-2">Signed up</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2">Jane Smith</td>
                  <td className="py-2">Purchase</td>
                  <td className="py-2">Purchase</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2">Jim Bean</td>
                  <td className="py-2">Refund</td>
                  <td className="py-2">Refund</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4">Integrations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Meta Pixel Active</li>
              <li>Google Tracking Active</li>
              <li>GA4 Active</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}