import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductPageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F0620] via-[#0E1530] to-[#053B56] text-white overflow-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-indigo-600/8 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/6 blur-3xl" />
      </div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
