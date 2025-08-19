import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";

export const metadata: Metadata = { title: "Analytics · Attribix" };

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ax min-h-screen ax-grid">
      {/* Left rail */}
      <aside className="ax-sticky border-r bg-white p-4 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
          <span className="font-semibold">Attribix</span>
        </div>

        <nav className="space-y-1 text-sm">
          <Link className="block sidebar-link sidebar-link-active" href="/analytics">Overview</Link>
          <Link className="block sidebar-link" href="#">Sessions</Link>
          <Link className="block sidebar-link" href="#">Recommendations</Link>
          <Link className="block sidebar-link" href="#">Settings</Link>
        </nav>

        <div className="mt-auto text-xs text-slate-500">v1.0</div>
      </aside>

      {/* Main content */}
      <main className="p-4 md:p-8 md:pr-10">
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
