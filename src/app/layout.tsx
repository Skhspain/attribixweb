// src/app/layout.tsx
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Attribix',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Attribix</Link>
            <nav className="space-x-4">
              <Link href="/"      className="hover:underline">Home</Link>
              <Link href="/analytics" className="hover:underline font-semibold">Analytics</Link>
              <Link href="/settings"  className="hover:underline">Settings</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-100 text-center py-4">
          © {new Date().getFullYear()} Attribix, Inc.
        </footer>
      </body>
    </html>
  )
}