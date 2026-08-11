export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
      {children}
    </p>
  );
}
