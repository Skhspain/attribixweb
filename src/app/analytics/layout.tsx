// src/app/analytics/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Analytics · Attribix",
};

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    // The .ax wrapper scopes the light theme to analytics only
    <div className="ax min-h-screen grid grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col gap-6 border-r bg-white p-4">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
          <span className="font-semibold">Attribix</span>
        </div>
        <nav className="space-y-1 text-sm">
          <Link className="sidebar-link sidebar-link-active" href="/analytics">Overview</Link>
          <Link className="sidebar-link" href="#">Sessions</Link>
          <Link className="sidebar-link" href="#">Recommendations</Link>
          <Link className="sidebar-link" href="#">Settings</Link>
        </nav>
        <div className="mt-auto text-xs text-slate-500">v1.0</div>
      </aside>

      {/* Main */}
      <main className="p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
