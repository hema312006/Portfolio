export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(139,92,246,0.06),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 reveal">
          <span className="font-mono text-xs text-pulse tracking-widest">05.</span>
          <span className="font-mono text-xs text-ghost tracking-widest uppercase">
            Contact
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal mb-4">
            <span className="font-mono text-xs text-pulse tracking-widest uppercase">
              Let's build something intelligent
            </span>
          </div>

          <h2 className="reveal font-display font-700 text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Open to internships,{' '}
            <span className="text-gradient">research & collaborations</span>
          </h2>

          <p className="reveal text-mist text-lg md:text-xl leading-relaxed font-300 mb-12 max-w-xl mx-auto">
            Whether it's an AI research role, ML engineering internship, or an
            open-source project — I'd love to hear from you. Currently based in
            Bengaluru.
          </p>

          {/* Primary CTA */}
          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:hema31reddy@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-pulse text-void font-display font-600 text-sm tracking-widest uppercase hover:bg-cyan-300 transition-all duration-200"
            >
              hema31reddy@gmail.com
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Social links */}
          <div className="reveal flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/k-hemalatha-reddy-a7a70a322/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ghost hover:text-pulse transition-colors font-mono text-xs tracking-widest uppercase"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <span className="text-white/10">|</span>

            <a
              href="https://github.com/hema312006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ghost hover:text-pulse transition-colors font-mono text-xs tracking-widest uppercase"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            <span className="text-white/10">|</span>

            <div className="flex items-center gap-2 font-mono text-xs text-ghost tracking-widest uppercase">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Bengaluru, India
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
