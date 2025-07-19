// src/app/analytics/page.tsx
export default function AnalyticsPage() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Metric</th>
            <th className="border p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Total Visits</td>
            <td className="border p-2">12.5k</td>
          </tr>
          {/* … */}
        </tbody>
      </table>
    </div>
  )
}