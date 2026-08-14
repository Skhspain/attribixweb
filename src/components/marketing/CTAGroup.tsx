import Link from "next/link";
import { cx } from "./Reveal";

const primaryClass =
  "rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-lg hover:bg-neutral-100 transition text-center";
const secondaryClass =
  "rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition text-center";

/**
 * "Send inquiry" must always read as more prominent than "Book a free
 * consultation call" should be solid fill vs. outline, primary listed first.
 */
export function ManagedServicesCTA({
  className,
  inquiryHref = "/ad-management/inquiry",
  consultationHref = "/ad-management/consultation",
}: {
  className?: string;
  inquiryHref?: string;
  consultationHref?: string;
}) {
  return (
    <div className={cx("flex flex-wrap items-center gap-3", className)}>
      <Link href={inquiryHref} className={primaryClass}>
        Send inquiry
      </Link>
      <Link href={consultationHref} className={secondaryClass}>
        Book a free consultation call
      </Link>
    </div>
  );
}

/**
 * Single, low-pressure CTA for early/informational-intent articles
 * (definitional, "what is X", format-comparison pieces). Do not pair
 * with a second button; that's the aggressive two-button pattern this
 * exists to avoid on pages where the reader isn't ready for it yet.
 */
export function SoftInquiryCTA({
  className,
  href = "/ad-management/inquiry",
  label = "Send inquiry",
}: {
  className?: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className={cx("flex flex-wrap items-center gap-3", className)}>
      <Link href={href} className={primaryClass}>
        {label}
      </Link>
    </div>
  );
}

export function ProductCTA({
  className,
  trialHref = "/signup",
  howHref = "/features",
  trialLabel = "Start free trial",
  howLabel = "See how it works",
}: {
  className?: string;
  trialHref?: string;
  howHref?: string;
  trialLabel?: string;
  howLabel?: string;
}) {
  return (
    <div className={cx("flex flex-wrap items-center gap-3", className)}>
      <Link href={trialHref} className={primaryClass}>
        {trialLabel}
      </Link>
      <Link href={howHref} className={secondaryClass}>
        {howLabel}
      </Link>
    </div>
  );
}
