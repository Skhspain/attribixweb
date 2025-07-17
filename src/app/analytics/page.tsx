// src/app/analytics/page.tsx
import React from "react";
import Link from "next/link";

const stats = [
  { label: "Total Visits",   value: "12.5k"   },
  { label: "Conversions",    value: "1.2k"    },
  { label: "Revenue",        value: "$18.9k"  },
  { label: "ROAS",           value: "4.2"     },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-2 bg-white rounded-lg border">
          <nav className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <ul className="space-y-2">
              <li><Link href="/"           className="block px-3 py-2 rounded hover:bg-gray-100">Home</Link></li>
              <li><Link href="/analytics"   className="block px-3 py-2 rounded bg-blue-50 text-blue-600 font-medium">Analytics</Link></li>
              <li><Link href="/recommendations" className="block px-3 py-2 rounded hover:bg-gray-100">Recommendations</Link></li>
              <li><Link href="/settings"    className="block px-3 py-2 rounded hover:bg-gray-100">Settings</Link></li>
              <li><Link href="/support"     className="block px-3 py-2 rounded hover:bg-gray-100">Support</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main */}
        <main className="col-span-12 lg:col-span-10 space-y-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center p-6 bg-white rounded-lg border"
              >
                <span className="text-2xl font-semibold">{s.value}</span>
                <span className="text-sm text-gray-500">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border p-4">
              <h2 className="font-medium mb-2 text-gray-800">Overview</h2>
              <div className="h-48 bg-gray-100 rounded" />
            </div>
            <div className="bg-white rounded-lg border p-4">
              <h2 className="font-medium mb-2 text-gray-800">Sessions by Source</h2>
              <div className="h-48 bg-gray-100 rounded" />
            </div>
          </div>

          {/* Recent Activity & Integrations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border p-4">
              <h2 className="font-medium mb-2 text-gray-800">Recent Activity</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left">Date</th>
                    <th className="py-2 text-left">User</th>
                    <th className="py-2 text-left">Activity</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
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
                  <tr>
                    <td className="py-1">Jim Bean</td>
                    <td className="py-1">Refund</td>
                    <td className="py-1">Refund</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h2 className="font-medium mb-2 text-gray-800">Integrations</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Meta Pixel Active</li>
                <li>Google Tracking Active</li>
                <li>GA4 Active</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}