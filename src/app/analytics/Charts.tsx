"use client";

import {
  ResponsiveContainer,
  ComposedChart, Area, Line,
  CartesianGrid, XAxis, YAxis, Tooltip,
  BarChart, Bar,
} from "recharts";
import type { OverviewDatum, SessionsDatum } from "./data";

const BRAND = "var(--brand-600)";
/** Use the logo blue token (falls back to exact hex if the var isn't present) */
const BARS  = "var(--logo-blue, #0e7eff)";

const tooltipStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "8px 12px",
};

export function OverviewChart({ data }: { data: OverviewDatum[] }) {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
          <defs>
            <linearGradient id="brandGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={BRAND} stopOpacity={0.35} />
              <stop offset="100%" stopColor={BRAND} stopOpacity={0.03} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip contentStyle={tooltipStyle} />

          <Area type="monotone" dataKey="value" stroke="none" fill="url(#brandGradient)" />
          <Line type="monotone" dataKey="value" stroke={BRAND} strokeWidth={2} dot={{ r: 2 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SessionsBySourceChart({ data }: { data: SessionsDatum[] }) {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="source" />
          <YAxis />
          <Tooltip contentStyle={tooltipStyle} />
          {/* Bars use the logo blue */}
          <Bar dataKey="sessions" fill={BARS} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
