// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 max-w-6xl mx-auto">
      <Link href="/">
        <Image
          src="/logo-optimal.png"
          alt="Attribix logo"
          width={120}
          height={40}
          priority
        />
      </Link>
      <Link href="/login" className="text-white hover:underline">
        Login
      </Link>
    </nav>
  );
}
