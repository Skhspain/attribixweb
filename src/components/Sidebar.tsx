// src/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  Monitor,
  Lightbulb,
  Settings as GearIcon,
} from "lucide-react";

const links = [
  { href: "/analytics",                  label: "Overview",        Icon: Monitor    },
  { href: "/analytics/sessions",         label: "Sessions",        Icon: BarChart2  },
  { href: "/analytics/recommendations",  label: "Recommendations", Icon: Lightbulb  },
  { href: "/analytics/settings",         label: "Settings",        Icon: GearIcon   },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 flex flex-col bg-gradient-to-b from-black/80 to-black/60 p-6">
      {/* Logo */}
      <Link href="/analytics" className="mb-8 block">
        <img src="/logo.svg" alt="Attribix logo" className="mx-auto h-8 w-auto" />
      </Link>

      {/* Nav links */}
      <nav className="flex-1 space-y-2">
        {links.map(({ href, label, Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-white/20 text-white font-semibold"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="uppercase tracking-wide text-sm">{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
