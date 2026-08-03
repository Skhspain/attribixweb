export type FAQItem = { q: string; a: React.ReactNode };

export default function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5 open:bg-white/[0.02]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white marker:content-none">
            {item.q}
            <span
              aria-hidden
              className="shrink-0 text-white/40 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3 text-sm leading-relaxed text-white/60">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
