// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 flex items-center justify-between p-6 z-30">
      <Link href="/">
        <Image src="/logo-optimal.png" alt="Attribix logo" width={120} height={40} priority />
      </Link>
      <ul className="flex gap-8 text-white">
        {['Features', 'Pricing', 'Blog', 'Contact'].map((label) => (
          <li key={label}>
            <Link
              href={`#${label.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/login"
        className="ml-6 px-4 py-2 bg-blue-600 rounded-full font-semibold text-white hover:bg-blue-500 transition-colors"
      >
        Log In
      </Link>
    </nav>
  );
}
