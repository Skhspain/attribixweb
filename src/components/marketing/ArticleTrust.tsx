import Link from "next/link";

export type OfficialSource = { label: string; href: string };

/** Compact "Last reviewed" + official-source citations for technical platform articles. Keep subtle. */
export function LastReviewed({ date }: { date: string }) {
  return (
    <p className="text-xs text-white/35">
      Last reviewed {date} by the Attribix team, for platform accuracy against current Meta, Google and Shopify documentation.
    </p>
  );
}

export function OfficialSources({ sources }: { sources: OfficialSource[] }) {
  return (
    <div className="text-xs text-white/40">
      <span className="text-white/50">Official sources: </span>
      {sources.map((s, i) => (
        <span key={s.href}>
          <Link href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white/70">
            {s.label}
          </Link>
          {i < sources.length - 1 ? ", " : ""}
        </span>
      ))}
    </div>
  );
}
