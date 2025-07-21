// src/app/analytics/page.tsx
export default function AnalyticsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                Metric
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-3">Total Visits</td>
              <td className="px-4 py-3">12.5k</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}