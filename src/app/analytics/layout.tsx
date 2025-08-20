// src/app/analytics/layout.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../globals.css";

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const links = [
    { href: "/analytics",                                label: "Overview" },
    { href: "/analytics/sessions",                       label: "Sessions" },
    { href: "/analytics/ads",                            label: "Ads Review" },
    { href: "/analytics/attribution",                    label: "Attribution" },
    { href: "/analytics/attribution/customerlist",       label: "Customer List" },
    { href: "/analytics/recommendations",                label: "Recommendations" },
    { href: "/analytics/settings",                       label: "Settings" },
  ];

  return (
    <div className="ax min-h-screen ax-grid">
      {/* Left rail */}
      <aside className="ax-sticky border-r bg-white p-4 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
        </div>

        <nav className="space-y-1 text-sm">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`block sidebar-link ${active ? "sidebar-link-active" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
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
