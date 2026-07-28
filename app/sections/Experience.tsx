const experiences = [
  {
    id: '01',
    type: 'internship',
    role: 'Python × AIML Intern',
    org: 'Next Chapter',
    period: 'Dec 2024 — Mar 2025',
    duration: '4 months',
    location: 'India',
    description:
      'Embedded with the AI/ML team to work on applied machine learning pipelines using Python. Shipped supervised and unsupervised learning experiments on real datasets, gaining hands-on experience with the full model development lifecycle from data prep to evaluation.',
    highlights: [
      'Built end-to-end ML pipelines using NumPy, Pandas, and Scikit-learn',
      'Implemented classification and clustering models on industry datasets',
      'Worked with TensorFlow for deep learning model experimentation',
      'Contributed to data preprocessing and feature engineering workflows',
    ],
    stack: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow'],
    accent: '#06b6d4',
  },
  {
    id: '02',
    type: 'leadership',
    role: 'Executive — Codes Team',
    org: 'Microsoft Ignite Students Club ASEB',
    period: 'Sep 2025 — Present',
    duration: '10 months',
    location: 'Bengaluru, India',
    description:
      'Part of the engineering arm of the Microsoft Ignite student club, helping peers build real-world projects and navigate the Microsoft tech ecosystem. Coordinate workshops, code reviews, and project showcases.',
    highlights: [
      'Organized technical workshops on Azure and AI tooling',
      'Mentored junior students on Python and ML fundamentals',
      'Coordinated cross-team project collaboration and demos',
    ],
    stack: ['Leadership', 'Mentorship', 'Azure', 'Community'],
    accent: '#8b5cf6',
  },
  {
    id: '03',
    type: 'open-source',
    role: 'Open Source Contributor',
    org: 'GSSoC\'26 (GirlScript Summer of Code)',
    period: '2026',
    duration: 'Ongoing',
    location: 'Remote',
    description:
      'Active contributor in one of India\'s largest open-source programs, working across community-nominated repositories with a focus on AI/ML tooling and web development projects.',
    highlights: [
      'Contributing to AI/ML open-source repositories',
      'Collaborative code review and PR workflows',
      'Documentation and developer experience improvements',
    ],
    stack: ['Open Source', 'Git', 'Python', 'Collaboration'],
    accent: '#84cc16',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_10%_50%,rgba(139,92,246,0.03),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4 reveal">
          <span className="font-mono text-xs text-pulse tracking-widest">03.</span>
          <span className="font-mono text-xs text-ghost tracking-widest uppercase">
            Experience
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-12 reveal">
          <h2 className="font-display font-700 text-3xl md:text-4xl text-white">
            Where I've{' '}
            <span className="text-gradient">built & led</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className="reveal relative md:pl-20"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 md:left-6 top-6 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center"
                  style={{
                    borderColor: exp.accent,
                    background: '#020409',
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: exp.accent }}
                  />
                </div>

                <div className="group p-8 border border-white/5 bg-ink/40 hover:bg-ink/70 transition-all duration-300 card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="px-2 py-0.5 font-mono text-xs tracking-widest border"
                          style={{
                            color: exp.accent,
                            borderColor: `${exp.accent}30`,
                            background: `${exp.accent}08`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-display font-700 text-xl text-white">
                        {exp.role}
                      </h3>
                      <p className="text-mist text-sm mt-0.5">{exp.org}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-ghost tracking-widest">
                        {exp.period}
                      </p>
                      <p className="font-mono text-xs mt-1" style={{ color: exp.accent }}>
                        {exp.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-mist text-sm leading-relaxed mb-5 font-300">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-mist">
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: exp.accent }}
                        />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 font-mono text-xs text-ghost border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
