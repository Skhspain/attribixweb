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
      <aside className="ax-sticky border-r bg-white flex flex-col">

        {/* Brand header */}
        <div className="px-5 py-5 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image src="/assets/logo.svg" alt="Attribix" width={26} height={26} />
            <span className="text-base font-extrabold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
              Attribix
            </span>
          </Link>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-slate-500 font-medium">attribix-com.myshopify.com</span>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-0.5 text-sm overflow-y-auto">
          {links.map((l, idx) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            const next = links[idx - 1];
            const showSection = "section" in l && (!next || !(next as any).section);

            return (
              <div key={l.href}>
                {"section" in l && showSection && (
                  <div className="mt-5 mb-1.5 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
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

        <div className="px-5 py-4 border-t border-slate-100">
          <div className="text-[11px] text-slate-400 font-medium">Attribix v1.0</div>
        </div>
      </aside>

      {/* Main content */}
      <main className="p-4 md:p-8 md:pr-10">
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
