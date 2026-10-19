"use client";

// Shared building blocks for the marketing site: buttons, section headers,
// cards and tracked CTAs. Keep variants few and consistent:
//   primary   = one per section, solid white
//   secondary = outline, for the demonstration / "learn more" action
//   text      = inline links

import Link from "next/link";
import React from "react";
import { SHOPIFY_APP_URL } from "@/lib/pricing";
import { trackConsultationClick, trackDemoClick, trackTrialClick } from "@/lib/track";

export function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export const btnPrimary =
  "inline-flex min-h-[44px] items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";
export const btnSecondary =
  "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";
export const textLink =
  "font-medium text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200 hover:decoration-cyan-200";

/** Shopify App Store link that records a trial_click with its placement. */
export function TrialLink({
  location,
  className = btnPrimary,
  children = "Start free trial",
}: {
  location: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={SHOPIFY_APP_URL}
      className={className}
      onClick={() => trackTrialClick(location)}
      rel="noopener"
    >
      {children}
    </a>
  );
}

export function DemoLink({
  location,
  className = btnSecondary,
  children = "Book a demo",
}: {
  location: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href="/book-demo" className={className} onClick={() => trackDemoClick(location)}>
      {children}
    </Link>
  );
}

export function ConsultationLink({
  location,
  className = btnSecondary,
  children = "Book a free consultation",
}: {
  location: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/ad-management/consultation"
      className={className}
      onClick={() => trackConsultationClick(location)}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cx("text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/90", className)}>
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  as: As = "h2",
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
}) {
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <As
        id={id}
        className={cx(
          "font-extrabold tracking-tight text-white",
          As === "h1" ? "text-4xl sm:text-5xl leading-[1.08]" : "text-3xl md:text-4xl leading-tight"
        )}
      >
        {title}
      </As>
      {intro && <p className="mt-4 text-base md:text-lg leading-relaxed text-white/70">{intro}</p>}
    </div>
  );
}

export function Section({
  children,
  id,
  className,
  tone = "plain",
  labelledBy,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  tone?: "plain" | "band";
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx("relative scroll-mt-24 py-16 md:py-24", tone === "band" && "bg-black/20", className)}
    >
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}

export function Card({
  children,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <As className={cx("rounded-2xl border border-white/10 bg-white/[0.04] p-6", className)}>{children}</As>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cx("mt-0.5 h-4 w-4 shrink-0", className ?? "text-cyan-300")}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/** Small label used on every illustrative product visual. */
export function ExampleLabel({ children = "Illustrative example with sample data" }: { children?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-amber-300/25 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-100/90">
      {children}
    </span>
  );
}
