// src/app/analytics/page.tsx
import { kpis, overview, sessionsBySource, recent, integrations } from "./data";
import { OverviewChart, SessionsBySourceChart } from "./Charts";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Dashboard</h1>
      </header>

      {/* KPI cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-2xl border bg-white p-4 shadow-sm">
            <div className="text-sm text-slate-500">{k.label}</div>
            <div className="mt-1 text-2xl font-semibold">{k.value}</div>
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-medium">Overview</h2>
          </div>
          <OverviewChart data={overview} />
        </div>

        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-medium">Sessions by Source</h2>
          </div>
          <SessionsBySourceChart data={sessionsBySource} />
        </div>
      </section>

      {/* Table + Integrations */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border bg-white p-4 shadow-sm">
          <h3 className="text-base font-medium mb-3">Recent Activity</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="py-2 pr-6">Date</th>
                  <th className="py-2 pr-6">User</th>
                  <th className="py-2">Activity</th>
                </tr>
              </thead>
              <tbody className="[&_tr:not(:last-child)]:border-b">
                {recent.map((r) => (
                  <tr key={r.date}>
                    <td className="py-2 pr-6">{r.date}</td>
                    <td className="py-2 pr-6">{r.user}</td>
                    <td className="py-2">{r.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <h3 className="text-base font-medium mb-3">Integrations</h3>
          <ul className="space-y-2 text-sm">
            {integrations.map((i) => (
              <li key={i.name} className="flex items-center justify-between rounded-xl border p-2">
                <span>{i.name}</span>
                <span className="text-emerald-600 font-medium">{i.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
