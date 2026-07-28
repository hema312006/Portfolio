const projects = [
  {
    id: '01',
    featured: true,
    title: 'FAI — Farm Agent Intelligent System',
    tagline: 'Autonomous multi-agent orchestration for precision agriculture',
    description:
      'Designed a distributed AI system where specialized agents handle crop monitoring, irrigation scheduling, and yield prediction. Used PDDL-based planning for goal-driven agent reasoning, constraint satisfaction scheduling for resource management, and integrated ML models for real-time anomaly detection across farm sensors.',
    impact: [
      'Multi-agent coordination across 4+ autonomous farm subsystems',
      'PDDL planning engine for autonomous decision-making',
      'Constraint satisfaction scheduler for resource allocation',
      'ML-based anomaly detection integrated at sensor level',
    ],
    stack: ['Java', 'PDDL', 'Machine Learning', 'Multi-Agent Systems', 'CSP'],
    accent: '#06b6d4',
    category: 'AI Systems',
    github: 'https://github.com/hema312006',
  },
  {
    id: '02',
    featured: true,
    title: 'Speaker Confidence Assessment via NLP',
    tagline: 'Explainable AI for human communication analysis',
    description:
      'Built an end-to-end NLP pipeline to classify speaker confidence levels from raw text. Combined TF-IDF feature extraction with ensemble classifiers (Random Forest + Gradient Boost), applied PCA for dimensionality reduction, and surfaced model decisions through SHAP-based explainability — making the system transparent and trustworthy for real-world use.',
    impact: [
      'Ensemble model outperformed baseline by ~18% F1 score',
      'SHAP explanations for every prediction — fully auditable',
      'Hyperparameter tuning via GridSearchCV across 50+ configs',
      'PCA reduced feature space by 60% with <2% accuracy loss',
    ],
    stack: ['Python', 'Scikit-learn', 'TF-IDF', 'SHAP', 'PCA', 'NLP'],
    accent: '#8b5cf6',
    category: 'NLP / XAI',
    github: 'https://github.com/hema312006',
  },
  {
    id: '03',
    featured: true,
    title: 'Resume Analyzer & Job Recommender',
    tagline: 'ML-powered career intelligence system',
    description:
      'End-to-end ML system that parses raw resume PDFs, extracts structured skill signals using NLP, and predicts candidate job categories. Uses cosine similarity matching against a job embedding space and connects to live job APIs to surface real-time opportunities — bridging static resume data with the dynamic job market.',
    impact: [
      'NLP extraction pipeline handles unstructured PDF input',
      'Classification model predicts job categories with semantic matching',
      'Real-time job fetching via external recruitment APIs',
      'Similarity scoring ranks opportunities by fit score',
    ],
    stack: ['Python', 'NLP', 'Scikit-learn', 'PDF Parsing', 'REST APIs'],
    accent: '#f97316',
    category: 'ML Product',
    github: 'https://github.com/hema312006',
  },
  {
    id: '04',
    featured: false,
    title: 'MATLAB Numerical Modeling Suite',
    tagline: 'Signal filtering, stability analysis & trajectory optimization',
    description:
      'Implemented a collection of MATLAB simulations applying numerical methods, optimization algorithms, and statistical techniques — covering signal filtering (Kalman, Butterworth), system stability via eigenvalue analysis, and trajectory optimization for motion planning.',
    impact: [
      'Kalman and Butterworth filter implementations',
      'Eigenvalue-based system stability analysis',
      'Trajectory optimization for constrained motion',
    ],
    stack: ['MATLAB', 'Numerical Methods', 'Optimization', 'Signal Processing'],
    accent: '#84cc16',
    category: 'Engineering',
    github: 'https://github.com/hema312006',
  },
  {
    id: '05',
    featured: false,
    title: 'Library Management System',
    tagline: 'Object-oriented Java application with full transaction logic',
    description:
      'Designed and implemented a console-based library management system in Java using OOP principles — featuring modular classes for books, users, and transactions with full CRUD operations, borrowing/return workflows, and data persistence.',
    impact: [
      'Clean OOP architecture with inheritance and polymorphism',
      'Full CRUD for books, users, and transaction records',
      'Borrow/return workflow with due-date tracking',
    ],
    stack: ['Java', 'OOP', 'Data Structures'],
    accent: '#06b6d4',
    category: 'Software Eng.',
    github: 'https://github.com/hema312006',
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  if (project.featured) {
    return (
      <div
        className="reveal group relative border border-white/5 bg-ink/40 hover:bg-ink/70 transition-all duration-400 card-hover overflow-hidden"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-all duration-300 group-hover:opacity-100 opacity-50"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        />

        <div className="p-8">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-xs tracking-widest font-500"
                style={{ color: project.accent }}
              >
                {project.id}
              </span>
              <span
                className="px-2 py-0.5 font-mono text-xs tracking-widest border"
                style={{
                  color: project.accent,
                  borderColor: `${project.accent}30`,
                  background: `${project.accent}08`,
                }}
              >
                {project.category}
              </span>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ghost hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          <h3 className="font-display font-700 text-xl text-white mb-1 group-hover:text-gradient-cyan transition-all duration-300">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-ghost tracking-wide mb-4">{project.tagline}</p>
          <p className="text-mist text-sm leading-relaxed mb-6 font-300">{project.description}</p>

          {/* Impact bullets */}
          <div className="space-y-2 mb-6">
            {project.impact.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-mist">
                <span
                  className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: project.accent }}
                />
                {item}
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
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
    )
  }

  // Compact card for non-featured
  return (
    <div className="reveal group p-6 border border-white/5 bg-ink/30 hover:bg-ink/60 transition-all duration-300 card-hover">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="font-mono text-xs tracking-widest"
          style={{ color: project.accent }}
        >
          {project.id}
        </span>
        <span className="font-mono text-xs text-ghost tracking-widest">{project.category}</span>
      </div>
      <h3 className="font-display font-600 text-white text-base mb-1">{project.title}</h3>
      <p className="font-mono text-xs text-ghost mb-3">{project.tagline}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span key={tech} className="px-2 py-0.5 font-mono text-xs text-ghost border border-white/5">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_30%,rgba(6,182,212,0.04),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4 reveal">
          <span className="font-mono text-xs text-pulse tracking-widest">02.</span>
          <span className="font-mono text-xs text-ghost tracking-widest uppercase">
            Featured Work
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-12 reveal">
          <h2 className="font-display font-700 text-3xl md:text-4xl text-white">
            Projects that{' '}
            <span className="text-gradient">ship, not just explore</span>
          </h2>
        </div>

        {/* Featured 3-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-12">
          <p className="font-mono text-xs text-ghost tracking-widest uppercase mb-6 reveal">
            Other Projects
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
