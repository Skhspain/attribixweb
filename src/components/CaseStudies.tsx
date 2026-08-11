"use client";
import React from "react";

type CaseItem = {
  brand: string;
  metric: string;
  summary: string;
  image?: string; // optional bg css
};

export default function CaseStudies({ items }: { items: CaseItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((c) => (
        <NeonCard key={c.brand} className="p-5 group overflow-hidden">
          {/* soft bg / image layer */}
          <div
            className="absolute inset-0 -z-10 opacity-25 group-hover:opacity-40 transition-opacity"
            style={{
              background:
                c.image ??
                "radial-gradient(600px 200px at 0% 0%, rgba(56,189,248,.25), transparent 50%)",
            }}
          />
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">{c.brand}</div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-200">
              {c.metric}
            </div>
          </div>
          <p className="mt-3 text-sm text-white/70">{c.summary}</p>
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="mt-3 text-xs text-white/60 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
            View breakdown →
          </div>
        </NeonCard>
      ))}
    </div>
  );
}

/* Inline NeonCard so there’s no extra import */
function NeonCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(56,189,248,0.15)] " +
        className
      }
      onMouseMove={(e) => {
        const t = e.currentTarget as HTMLDivElement;
        const r = t.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        t.style.setProperty("--mx", `${x}%`);
      }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[18px] [background:radial-gradient(120px_60px_at_var(--mx,50%)_-20px,rgba(56,189,248,.25),transparent)]" />
      {children}
    </div>
  );
}
