export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_50%,rgba(139,92,246,0.04),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 reveal">
          <span className="font-mono text-xs text-pulse tracking-widest">01.</span>
          <span className="font-mono text-xs text-ghost tracking-widest uppercase">
            About
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <div className="reveal">
            <h2 className="font-display font-700 text-3xl md:text-4xl text-white mb-6 leading-tight">
              Building the intelligence layer{' '}
              <span className="text-gradient">between data and decisions</span>
            </h2>

            <div className="space-y-4 text-mist leading-relaxed font-300">
              <p>
                I'm a third-year CSE with AI engineering student at Amrita Vishwa
                Vidyapeetham, Bengaluru — one of India's top-ranked engineering
                institutions for AI. My work sits at the crossroads of applied
                machine learning, multi-agent systems, and NLP.
              </p>
              <p>
                From designing autonomous multi-agent farming orchestration with
                PDDL-based planning to building explainable NLP classifiers,
                I gravitate toward projects that require both theoretical depth and
                production-grade implementation.
              </p>
              <p>
                Outside academics, I contribute to GSSoC'26 open-source
                initiatives and serve in the Microsoft Ignite Students Club, where
                I work on the engineering arm, helping peers build and ship
                real projects.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/k-hemalatha-reddy-a7a70a322/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/10 text-ghost font-mono text-xs tracking-widest uppercase hover:border-pulse/40 hover:text-pulse transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/hema312006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/10 text-ghost font-mono text-xs tracking-widest uppercase hover:border-pulse/40 hover:text-pulse transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Right: details */}
          <div className="space-y-6 reveal">
            {/* Education card */}
            <div className="p-6 border border-white/5 bg-ink/50 border-glow card-hover">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-pulse tracking-widest uppercase mb-1">
                    Currently Studying
                  </p>
                  <h3 className="font-display font-600 text-white text-lg">
                    Amrita Vishwa Vidyapeetham
                  </h3>
                  <p className="text-mist text-sm mt-0.5">
                    B.Tech — CSE (Artificial Intelligence)
                  </p>
                </div>
                <span className="font-mono text-xs text-ghost tracking-widest">
                  2024 → 2028
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-lime/10 border border-lime/20 font-mono text-xs text-lime">
                  GPA 8.48
                </div>
                <div className="px-3 py-1 bg-pulse/10 border border-pulse/20 font-mono text-xs text-pulse">
                  4 Semesters
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="p-6 border border-white/5 bg-ink/50 card-hover">
              <p className="font-mono text-xs text-ghost tracking-widest uppercase mb-4">
                Research Interests
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Machine Learning',
                  'Multi-Agent Systems',
                  'Natural Language Processing',
                  'Explainable AI',
                  'Generative Models',
                  'Reinforcement Learning',
                  'Computer Vision',
                ].map((interest) => (
                  <div
                    key={interest}
                    className="flex items-center gap-2 text-sm text-mist"
                  >
                    <span className="w-1 h-1 rounded-full bg-pulse flex-shrink-0" />
                    {interest}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="p-6 border border-white/5 bg-ink/50 card-hover">
              <p className="font-mono text-xs text-ghost tracking-widest uppercase mb-4">
                Certifications
              </p>
              <div className="space-y-2">
                {[
                  'Production Machine Learning Systems',
                  'Generative AI in Action',
                  'ML Operations (MLOps) for GenAI',
                  'Machine Learning in Production',
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-sm text-mist">
                    <svg
                      className="w-3.5 h-3.5 text-ember flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
