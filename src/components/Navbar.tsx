// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Analytics", href: "/analytics" },
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname?.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-sky-400 text-xs font-bold text-white">
            AX
          </span>
          <span className="text-lg font-semibold text-white">Attribix</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-white/80 hover:text-white transition"
            >
              Log in
            </Link>
            <Link
              href="/book-demo"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-md hover:bg-neutral-200 transition"
            >
              Book demo
            </Link>
          </div>
        </div>

        {/* Mobile right side: CTAs + menu */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/book-demo"
            className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black shadow-md hover:bg-neutral-200 transition"
          >
            Book demo
          </Link>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-50 p-2 text-white"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-1 text-sm ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="text-sm text-white/80 hover:text-white"
              >
                Log in
              </Link>
              <Link
                href="/book-demo"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black text-center shadow-md hover:bg-neutral-200 transition"
              >
                Book demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
