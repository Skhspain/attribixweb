// src/app/analytics/page.tsx
import React from "react"
import Link from "next/link"

const stats = [
  { label: "Total Visits",  value: "12.5k" },
  { label: "Conversions",   value: "1.2k" },
  { label: "Revenue",       value: "$18.9k" },
  { label: "ROAS",          value: "4.2" },
]

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* ─── SIDEBAR ─────────────────────────────── */}
      <aside className="w-64 bg-white border-r">
        <nav className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Menu</h2>
          <ul className="space-y-2">
            {[
              ["/",            "Home"],
              ["/analytics",   "Analytics"],
              ["/recommendations","Recommendations"],
              ["/settings",    "Settings"],
              ["/support",     "Support"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    href === "/analytics"
                      ? "block px-3 py-2 rounded bg-blue-50 text-blue-600 font-medium"
                      : "block px-3 py-2 rounded hover:bg-gray-100"
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* ─── MAIN CONTENT ───────────────────────── */}
      <main className="flex-1 p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-brand-primary mb-6">
          Dashboard
        </h1>

        {/* ─── STATS CARDS ────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 bg-white rounded-2xl shadow border border-gray-200 flex flex-col items-center"
            >
              <span className="text-xl font-semibold">{s.value}</span>
              <span className="text-sm text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ─── CHART PANELS ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="font-medium mb-2 text-brand-primary">Overview</h2>
            <div className="h-40 bg-gray-100 rounded" />
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="font-medium mb-2 text-brand-primary">
              Sessions by Source
            </h2>
            <div className="h-40 bg-gray-100 rounded" />
          </div>
        </div>

        {/* ─── ACTIVITY + INTEGRATIONS ────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="font-medium mb-2 text-brand-primary">
              Recent Activity
            </h2>
            <table className="w-full text-sm table-fixed border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Date</th>
                  <th className="py-2 text-left">User</th>
                  <th className="py-2 text-left">Activity</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="py-2">John Doe</td>
                  <td className="py-2">Signed up</td>
                  <td className="py-2">Signed up</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2">Jane Smith</td>
                  <td className="py-2">Purchase</td>
                  <td className="py-2">Purchase</td>
                </tr>
                <tr>
                  <td className="py-2">Jim Bean</td>
                  <td className="py-2">Refund</td>
                  <td className="py-2">Refund</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="font-medium mb-2 text-brand-primary">
              Integrations
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Meta Pixel Active</li>
              <li>Google Tracking Active</li>
              <li>GA4 Active</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}