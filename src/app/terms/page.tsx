// src/app/terms/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/* -----------------------------------------------------
   Small helpers
----------------------------------------------------- */
function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/* -----------------------------------------------------
   Copy email helper (same as on home)
----------------------------------------------------- */
function CopyEmail({ email }: { email: string }) {
  const [ok, setOk] = React.useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setOk(true);
          setTimeout(() => setOk(false), 1200);
        } catch {
          // ignore
        }
      }}
      className="hover:text-white/90 underline underline-offset-4"
      aria-label={`Copy ${email}`}
    >
      {ok ? "Copied!" : email}
    </button>
  );
}

/* -----------------------------------------------------
   PAGE
----------------------------------------------------- */
export default function TermsPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white overflow-hidden">
      {/* HEADER (same as privacy + home) */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={28} height={28} />
            <span className="font-semibold">Attribix</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/#features" className="opacity-80 hover:opacity-100">
              Features
            </Link>
            <Link href="/#how" className="opacity-80 hover:opacity-100">
              How it works
            </Link>
            <Link href="/#integrations" className="opacity-80 hover:opacity-100">
              Integrations
            </Link>
            <Link href="/pricing" className="opacity-80 hover:opacity-100">
              Pricing
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
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/20 backdrop-blur transition"
              >
                Book demo
              </Link>
            </div>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-2 text-xs font-medium text-white/80 hover:bg-white/10"
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

        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-sm">
            <nav className="mx-auto max-w-7xl px-4 py-4 space-y-2 text-sm">
              <Link
                href="/#features"
                onClick={() => setMobileOpen(false)}
                className="block py-1 text-white/80 hover:text-white"
              >
                Features
              </Link>
              <Link
                href="/#how"
                onClick={() => setMobileOpen(false)}
                className="block py-1 text-white/80 hover:text-white"
              >
                How it works
              </Link>
              <Link
                href="/#integrations"
                onClick={() => setMobileOpen(false)}
                className="block py-1 text-white/80 hover:text-white"
              >
                Integrations
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className="block py-1 text-white/80 hover:text-white"
              >
                Pricing
              </Link>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg border border-white/20 px-4 py-2 text-center text-white/90 hover:bg-white/10"
                >
                  Log in
                </Link>
                <Link
                  href="/book-demo"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-white text-center text-gray-900 px-4 py-2 font-semibold"
                >
                  Book demo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Terms of Service</h1>
        <p className="text-sm text-white/70 mb-10">Last updated: 08 December 2025</p>

        <div className="space-y-8 text-sm md:text-[15px] leading-relaxed text-white/80 bg-black/30 border border-white/10 rounded-2xl px-6 md:px-8 py-8 md:py-10 shadow-[0_24px_60px_rgba(15,23,42,0.7)] backdrop-blur">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of
            the Attribix platform, including the Shopify app and any related websites and
            services. By installing or using Attribix, you agree to be bound by these
            Terms.
          </p>

          <section>
            <h2 className="text-lg font-semibold mb-2">1. Overview</h2>
            <p>
              Attribix provides analytics, attribution and tracking tools to help
              e-commerce merchants understand the performance of their marketing
              campaigns and advertising spend.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. Eligibility</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You must own or manage a Shopify store or other supported store.</li>
              <li>You must be at least 18 years old.</li>
              <li>
                You must comply with Shopify&apos;s terms, advertising platform terms and
                applicable laws.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Merchant Responsibilities</h2>
            <p className="mb-2">
              As a merchant using Attribix, you are responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ensuring your store and tracking comply with all laws and regulations</li>
              <li>
                Obtaining any required consents for tracking and analytics on your store
              </li>
              <li>
                Using Attribix only on properties you own or are authorised to manage
              </li>
              <li>Keeping your Shopify and ad platform accounts secure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Billing &amp; Subscription</h2>
            <p className="mb-2">
              Attribix is billed through the Shopify Billing API. By installing the app,
              you authorise Shopify to charge all applicable subscription and usage fees
              to your account.
            </p>
            <p>
              Pricing, trials and plan limits are shown on our website or inside the app.
              We may modify pricing or plans with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Data Processing</h2>
            <p className="mb-2">
              Under data protection laws such as GDPR, you are typically the{" "}
              <strong>Data Controller</strong> and Attribix acts as a{" "}
              <strong>Data Processor</strong>.
            </p>
            <p>
              We process data only to provide Attribix services, in accordance with our{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>{" "}
              and these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Service Availability</h2>
            <p className="mb-2">
              Attribix relies on external APIs and platforms (such as Shopify, Meta,
              Google, TikTok and others). We aim to keep the service available and
              accurate but cannot guarantee:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Uninterrupted or error-free operation</li>
              <li>Real-time or perfectly complete data</li>
              <li>
                Continued availability or behaviour of third-party APIs or platform
                policies
              </li>
            </ul>
            <p className="mt-2">
              We are not responsible for outages or changes in external platforms that
              affect Attribix.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Acceptable Use</h2>
            <p className="mb-2">
              You agree not to misuse Attribix. Prohibited uses include, but are not
              limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Attempting to access data you are not authorised to see</li>
              <li>Interfering with or degrading the service for others</li>
              <li>Reverse engineering or copying the platform</li>
              <li>
                Using Attribix to track individuals in ways that violate privacy or
                consumer protection laws
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">8. Termination &amp; Uninstallation</h2>
            <p className="mb-2">
              You may uninstall Attribix at any time via your Shopify admin. This will
              stop further data collection and revoke our access to your store.
            </p>
            <p>
              We may suspend or terminate your access if we reasonably believe you are
              violating these Terms, the law or platform policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">9. Limitation of Liability</h2>
            <p className="mb-2">
              To the maximum extent permitted by law, Attribix and its owners will not be
              liable for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Indirect, incidental or consequential damages</li>
              <li>Loss of profits, revenue or business opportunities</li>
              <li>
                Errors or delays caused by third-party platforms, APIs or integrations
              </li>
            </ul>
            <p className="mt-2">
              Our total liability for any claim relating to Attribix is limited to the
              fees you paid for the service in the previous month.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">10. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The &quot;Last updated&quot;
              date at the top will always reflect the current version. Continued use of
              Attribix after changes take effect constitutes acceptance of the updated
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">11. Contact</h2>
            <p>
              If you have questions about these Terms, contact us at:
              <br />
              <br />
              Attribix
              <br />
              Bevit Agency, Altea, Spain
              <br />
              Email:{" "}
              <a href="mailto:support@attribix.com" className="underline">
                support@attribix.com
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* FOOTER (same as home) */}
      <footer id="contact" className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Attribix" width={20} height={20} />
            <span>Attribix</span>
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <CopyEmail email="hello@attribix.app" />
            <Link href="/privacy" className="hover:text-white/90">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/90">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
