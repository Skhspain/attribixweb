// src/components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
          <span className="font-semibold">Attribix</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            href="/features"
            className={cx(
              "opacity-80 hover:opacity-100 relative",
              isActive("/features") &&
                "opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400/70 rounded"
            )}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={cx(
              "opacity-80 hover:opacity-100 relative",
              isActive("/pricing") &&
                "opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400/70 rounded"
            )}
          >
            Pricing
          </Link>
          <Link
            href="/faq"
            className={cx(
              "opacity-80 hover:opacity-100 relative",
              isActive("/faq") &&
                "opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400/70 rounded"
            )}
          >
            FAQ
          </Link>
          <Link
            href="/agency"
            className={cx(
              "opacity-80 hover:opacity-100 relative",
              isActive("/agency") &&
                "opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400/70 rounded"
            )}
          >
            Agency
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/15"
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
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs font-medium text-white/80 hover:bg-white/10"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="mr-1">Menu</span>
          <span className="flex flex-col gap-[3px]">
            <span className="h-[2px] w-4 bg-white rounded-full" />
            <span className="h-[2px] w-4 bg-white rounded-full" />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-sm">
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-2 text-sm">
            <Link
              href="/features"
              onClick={() => setMobileOpen(false)}
              className={cx(
                "block py-1 text-white/80 hover:text-white",
                isActive("/features") && "text-white"
              )}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className={cx(
                "block py-1 text-white/80 hover:text-white",
                isActive("/pricing") && "text-white"
              )}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileOpen(false)}
              className={cx(
                "block py-1 text-white/80 hover:text-white",
                isActive("/faq") && "text-white"
              )}
            >
              FAQ
            </Link>
            <Link
              href="/agency"
              onClick={() => setMobileOpen(false)}
              className={cx(
                "block py-1 text-white/80 hover:text-white",
                isActive("/agency") && "text-white"
              )}
            >
              Agency
            </Link>

            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg border border-white/15 px-4 py-2 text-center text-sm text-white/90 hover:bg-white/10"
              >
                Log in
              </Link>
              <Link
                href="/book-demo"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg bg-white text-center text-gray-900 px-4 py-2 font-semibold hover:bg-neutral-200"
              >
                Book demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
