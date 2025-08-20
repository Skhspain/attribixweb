// src/app/analytics/SidebarNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav() {
  const pathname = usePathname();
  const links = [
    { href: "/analytics", label: "Overview" },
    { href: "/analytics/sessions", label: "Sessions" },
    { href: "/analytics/ads", label: "Ads Review" },
    { href: "/analytics/recommendations", label: "Recommendations" },
    { href: "/analytics/settings", label: "Settings" },
  ];

  return (
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
  );
}
