const skillGroups = [
  {
    category: 'ML & AI',
    accent: '#06b6d4',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Natural Language Processing', level: 80 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'TensorFlow', level: 70 },
      { name: 'Explainable AI (SHAP)', level: 72 },
      { name: 'Generative AI', level: 65 },
    ],
  },
  {
    category: 'Languages',
    accent: '#8b5cf6',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Java', level: 80 },
      { name: 'MATLAB', level: 72 },
      { name: 'SQL', level: 65 },
    ],
  },
  {
    category: 'Core CS',
    accent: '#f97316',
    skills: [
      { name: 'Data Structures & Algorithms', level: 82 },
      { name: 'Multi-Agent Systems', level: 75 },
      { name: 'Object-Oriented Programming', level: 85 },
      { name: 'Statistical Modeling', level: 70 },
    ],
  },
  {
    category: 'Tools & Ecosystem',
    accent: '#84cc16',
    skills: [
      { name: 'NumPy / Pandas', level: 85 },
      { name: 'Git & GitHub', level: 78 },
      { name: 'Web Development', level: 68 },
      { name: 'MLOps Fundamentals', level: 65 },
    ],
  },
]

const softSkills = [
  'Problem Solving',
  'Critical Thinking',
  'Effective Communication',
  'Project Management',
  'Team Collaboration',
  'Research & Learning',
]

const languages = [
  { lang: 'English', level: 'Fluent' },
  { lang: 'Telugu', level: 'Fluent' },
  { lang: 'Kannada', level: 'Fluent' },
  { lang: 'Hindi', level: 'Intermediate' },
]

function SkillBar({ name, level, accent }: { name: string; level: number; accent: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-mist">{name}</span>
        <span className="font-mono text-xs text-ghost">{level}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${accent}80, ${accent})`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(6,182,212,0.04),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4 reveal">
          <span className="font-mono text-xs text-pulse tracking-widest">04.</span>
          <span className="font-mono text-xs text-ghost tracking-widest uppercase">
            Skills
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-12 reveal">
          <h2 className="font-display font-700 text-3xl md:text-4xl text-white">
            The toolkit I{' '}
            <span className="text-gradient">reach for daily</span>
          </h2>
        </div>

        {/* Skill groups grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="reveal p-6 border border-white/5 bg-ink/40 card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: group.accent }}
                />
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: group.accent }}
                >
                  {group.category}
                </span>
              </div>
              {group.skills.map((s) => (
                <SkillBar key={s.name} {...s} accent={group.accent} />
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row: soft skills + languages */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Soft skills */}
          <div className="reveal p-6 border border-white/5 bg-ink/40 card-hover">
            <p className="font-mono text-xs text-ghost tracking-widest uppercase mb-5">
              Soft Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 border border-white/8 text-mist text-sm hover:border-pulse/30 hover:text-pulse transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="reveal p-6 border border-white/5 bg-ink/40 card-hover">
            <p className="font-mono text-xs text-ghost tracking-widest uppercase mb-5">
              Languages
            </p>
            <div className="space-y-3">
              {languages.map((l) => (
                <div key={l.lang} className="flex items-center justify-between">
                  <span className="text-mist text-sm">{l.lang}</span>
                  <span
                    className={`font-mono text-xs px-2 py-0.5 border ${
                      l.level === 'Fluent'
                        ? 'text-lime border-lime/20 bg-lime/5'
                        : 'text-ghost border-white/10'
                    }`}
                  >
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
