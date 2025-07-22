// File: src/app/layout.tsx

import './globals.css'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Attribix',
  description: 'Smarter Attribution. Bigger Impact.',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* Next.js will auto-inject your metadata into <head> */}
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        {/* HEADER */}
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Attribix
            </Link>
            <nav className="space-x-6">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/analytics" className="hover:text-blue-600">
                Analytics
              </Link>
              <Link href="/settings" className="hover:text-blue-600">
                Settings
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Attribix. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}