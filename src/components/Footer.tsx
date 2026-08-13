import Link from "next/link";
import Image from "next/image";
import CopyEmail from "./CopyEmail";
import CookiePreferencesButton from "./CookiePreferencesButton";

const COLUMNS = [
  {
    heading: "Attribution & tracking",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Shopify attribution", href: "/shopify-attribution" },
      { label: "Server-side tracking", href: "/server-side-tracking-shopify" },
      { label: "Meta CAPI for Shopify", href: "/meta-capi-shopify" },
      { label: "Google Ads tracking", href: "/google-ads-conversion-tracking-shopify" },
      { label: "Shopify ROAS tracking", href: "/shopify-roas-tracking" },
    ],
  },
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Free tools", href: "/tools" },
      { label: "Book demo", href: "/book-demo" },
      { label: "Log in", href: "/login" },
    ],
  },
  {
    heading: "Ad management",
    links: [
      { label: "Overview", href: "/ad-management" },
      { label: "Meta Ads management", href: "/ad-management/meta-ads" },
      { label: "Google Ads management", href: "/ad-management/google-ads" },
      { label: "Send inquiry", href: "/ad-management/inquiry" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Partners", href: "/partners" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/assets/logo.svg" width={22} height={22} alt="Attribix" />
              <span className="text-sm font-semibold text-white">Attribix</span>
            </Link>
            <p className="mt-3 text-xs text-white/40 leading-relaxed max-w-[200px]">
              Shopify attribution and server-side tracking for Meta and Google Ads.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/35">{col.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/60 hover:text-white/90">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Attribix, a bevit product.</p>
          <div className="flex items-center gap-4">
            <CookiePreferencesButton />
            <CopyEmail email="hello@attribix.app" />
          </div>
        </div>
      </div>
    </footer>
  );
}
