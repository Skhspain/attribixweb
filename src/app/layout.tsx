import "./globals.css"; // you can leave this or delete it for now

export const metadata = {
  title: "Attribix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* ———————— Tailwind CDN ———————— */}
        <script
          src="https://cdn.tailwindcss.com"
          // optional: you can customize your theme here inline:
          // dangerouslySetInnerHTML={{
          //   __html: `tailwind.config = { theme: { extend: { colors: { primary: '#1E40AF' } } } };`,
          // }}
        ></script>
      </head>

      <body className="flex flex-col min-h-screen">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              Attribix
            </a>
            <nav className="space-x-4">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/analytics" className="hover:underline font-semibold">
                Analytics
              </a>
              <a href="/settings" className="hover:underline">
                Settings
              </a>
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
  );
}