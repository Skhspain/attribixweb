"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../globals.css";

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const links = [
    { href: "/analytics", label: "Overview" },
    { href: "/analytics/sessions", label: "Sessions" },
    { href: "/analytics/ads", label: "Ads Review" },
    { href: "/analytics/attribution", label: "Attribution" },
    { href: "/analytics/attribution/customerlist", label: "Customer List" },
    { href: "/analytics/recommendations", label: "Recommendations" },

    // --- Site Intelligence section ---
    { href: "/analytics/sitemap", label: "Sitemap", section: "SITE INTELLIGENCE" } as any,
    { href: "/analytics/behavior", label: "Behavior overview" },
    // ----------------------------------

    { href: "/analytics/settings", label: "Settings" },
  ];

  return (
    <div className="ax min-h-screen ax-grid">
      {/* Left rail */}
      <aside className="ax-sticky border-r bg-white p-4 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
        </div>

        <nav className="space-y-1 text-sm">
          {links.map((l, idx) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");

            const next = links[idx - 1];
            const showSection = "section" in l && (!next || !(next as any).section);

            return (
              <div key={l.href}>
                {"section" in l && showSection && (
                  <div className="mt-4 mb-1 px-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    {(l as any).section}
                  </div>
                )}
                <Link
                  href={l.href}
                  className={`block sidebar-link ${active ? "sidebar-link-active" : ""}`}
                >
                  {l.label}
                </Link>
              </div>
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
