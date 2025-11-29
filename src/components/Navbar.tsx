// src/components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

type NavItem = {
  label: string;
  href: string;
  match?: (pathname: string) => boolean;
};

const navItems: NavItem[] = [
  {
    label: "Features",
    href: "/features",
    match: (pathname) => pathname.startsWith("/features"),
  },
  {
    label: "How it works",
    href: "/#how",
  },
  {
    label: "Integrations",
    href: "/#integrations",
  },
  {
    label: "Pricing",
    href: "/pricing",
    match: (pathname) => pathname.startsWith("/pricing"),
  },
];

function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8 text-sm">
      {navItems.map((item) => {
        const isActive =
          item.match?.(pathname) ??
          (item.href !== "/" && pathname === item.href);

        return (
          <Link
            key={item.label}
            href={item.href}
            className={[
              "opacity-80 hover:opacity-100 relative transition",
              isActive &&
                "opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400/70 rounded",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {item.label}
          </Link>
        );
      })}

      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
        >
          Log in
        </Link>
        <MagneticButton href="/book-demo" className="text-sm px-4 py-2">
          Book demo
        </MagneticButton>
      </div>
    </nav>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/20 p-2 hover:bg-black/40"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur">
          <div className="absolute right-4 top-4 rounded-2xl border border-white/10 bg-black/90 p-4 w-[260px]">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/logo.svg"
                  alt="Attribix"
                  width={24}
                  height={24}
                />
                <span className="text-sm font-semibold">Attribix</span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-full px-3 py-2 text-sm hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}

              <hr className="my-2 border-white/10" />

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/10 px-3 py-2 text-center text-sm hover:bg-white/15"
              >
                Log in
              </Link>
              <Link
                href="/book-demo"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white px-3 py-2 text-center text-sm font-semibold text-black shadow-md hover:bg-neutral-200 transition"
              >
                Book demo
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
          <span className="font-semibold">Attribix</span>
        </Link>

        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
