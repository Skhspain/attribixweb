import Image from "next/image";
import { cx } from "./ui";

// Only integrations the app actually ships and the Shopify listing names.
// TikTok has settings scaffolding in the dashboard but is not offered on the
// listing, so it is deliberately not advertised.
export const INTEGRATIONS = [
  {
    id: "shopify",
    name: "Shopify",
    logo: "/assets/logos/shopify.svg",
    role: "Your real orders and sales. You install Attribix from the Shopify App Store, with no code to edit.",
  },
  {
    id: "meta",
    name: "Facebook and Instagram ads",
    logo: "/assets/logos/meta.svg",
    role: "What each ad cost and what it brought in. Attribix also sends your sales back to Meta (the company behind Facebook and Instagram), so it can find more buyers like them.",
  },
  {
    id: "google",
    name: "Google Ads",
    logo: "/assets/logos/google.svg",
    role: "What each Google ad cost and what it brought in. Attribix also sends your sales back to Google, and can list your products in Google Shopping.",
  },
] as const;

export function IntegrationStrip({ className }: { className?: string }) {
  return (
    <div className={cx("flex flex-wrap items-center gap-x-8 gap-y-3", className)}>
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Works with</span>
      {INTEGRATIONS.map((i) => (
        <span key={i.id} className="inline-flex items-center gap-2 text-sm font-medium text-white/80">
          <Image src={i.logo} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
          {i.name}
        </span>
      ))}
    </div>
  );
}

export function IntegrationCards() {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {INTEGRATIONS.map((i) => (
        <li key={i.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
              <Image src={i.logo} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
            </span>
            <h3 className="text-base font-semibold text-white">{i.name}</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{i.role}</p>
        </li>
      ))}
    </ul>
  );
}
