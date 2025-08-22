"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/features", label: "Features" },
  { href: "/analytics", label: "Analytics" },
  { href: "/book-demo", label: "Book a demo", primary: true },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-black/20 bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo → always to HOME */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Attribix" className="h-7 w-auto" />
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-4">
            {links.map((l) =>
              l.primary ? (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:opacity-90"
                >
                  {l.label}
                </Link>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-2 rounded-lg hover:bg-white/10 ${
                    pathname === l.href ? "bg-white/10" : ""
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
