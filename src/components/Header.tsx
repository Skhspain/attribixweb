// src/components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const RESOURCES_CATEGORIES = [
  { label: "Meta Ads", href: "/resources#meta-ads" },
  { label: "Google Ads", href: "/resources#google-ads" },
  { label: "Shopify Growth", href: "/resources#shopify-growth" },
  { label: "Attribution & Measurement", href: "/resources#attribution" },
  { label: "Tracking & Privacy", href: "/resources#tracking" },
  { label: "Marketing & Agency", href: "/resources#marketing-agency" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [resourcesOpen, setResourcesOpen] = React.useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = React.useState(false);
  const resourcesRef = React.useRef<HTMLDivElement | null>(null);

  const isActive = (href: string) => pathname === href;
  const isResourcesActive = pathname === "/resources" || pathname.startsWith("/resources/");

  React.useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setResourcesOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

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
            href="/ad-management"
            className={cx(
              "opacity-80 hover:opacity-100 relative",
              isActive("/ad-management") &&
                "opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400/70 rounded"
            )}
          >
            Ad Management
          </Link>
          <div className="relative" ref={resourcesRef}>
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              className={cx(
                "flex items-center gap-1 opacity-80 hover:opacity-100 relative",
                isResourcesActive &&
                  "opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400/70 rounded"
              )}
            >
              Resources
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={cx("transition-transform", resourcesOpen && "rotate-180")}
                aria-hidden
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {resourcesOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0E0A1A]/95 backdrop-blur-md p-2 shadow-2xl">
                <Link
                  href="/resources"
                  onClick={() => setResourcesOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  All Resources
                </Link>
                <div className="my-1 h-px bg-white/10" />
                {RESOURCES_CATEGORIES.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setResourcesOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
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
        <div id="mobile-nav" className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-sm">
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
              href="/ad-management"
              onClick={() => setMobileOpen(false)}
              className={cx(
                "block py-1 text-white/80 hover:text-white",
                isActive("/ad-management") && "text-white"
              )}
            >
              Ad Management
            </Link>
            <div>
              <button
                type="button"
                onClick={() => setMobileResourcesOpen((v) => !v)}
                aria-expanded={mobileResourcesOpen}
                className={cx(
                  "flex w-full items-center justify-between py-1 text-white/80 hover:text-white",
                  isResourcesActive && "text-white"
                )}
              >
                Resources
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className={cx("transition-transform", mobileResourcesOpen && "rotate-180")}
                  aria-hidden
                >
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileResourcesOpen && (
                <div className="mt-1 ml-3 border-l border-white/10 pl-3 space-y-1">
                  <Link
                    href="/resources"
                    onClick={() => { setMobileOpen(false); setMobileResourcesOpen(false); }}
                    className="block py-1 text-sm font-semibold text-white/90 hover:text-white"
                  >
                    All Resources
                  </Link>
                  {RESOURCES_CATEGORIES.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => { setMobileOpen(false); setMobileResourcesOpen(false); }}
                      className="block py-1 text-sm text-white/60 hover:text-white"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
