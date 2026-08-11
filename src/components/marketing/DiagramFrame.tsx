export default function DiagramFrame({
  caption,
  children,
}: {
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
      {children}
      {caption && (
        <figcaption className="mt-4 text-center text-xs text-white/40">{caption}</figcaption>
      )}
    </figure>
  );
}
