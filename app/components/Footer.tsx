export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ghost tracking-widest">
          © 2025 K. HEMALATHA REDDY
        </p>
        <p className="font-mono text-xs text-ghost tracking-widest">
          BUILT WITH NEXT.JS + TAILWIND
        </p>
        <div className="flex items-center gap-1 font-mono text-xs text-ghost">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          <span className="tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
        </div>
      </div>
    </footer>
  )
}
