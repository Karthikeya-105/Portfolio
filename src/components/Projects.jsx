import styles from './Projects.module.css'

const GitIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const PROJECTS = [
  {
    id: 'placement',
    category: ['fullstack'],
    previewClass: 'placementPreview',
    badge: '🎓 College Placement Portal',
    previewTitle: 'College Placement',
    previewSpan: 'Portal',
    previewSub: 'Placement drives, eligibility & application tracking',
    title: 'College Placement Portal',
    desc: 'Developed a full-stack placement portal to manage student profiles, company details, placement drives, and applications.',
    tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs'],
    features: [
      'Student and company profile management',
      'Role-based registration and functionality',
      'Eligibility management and job-drive listings',
      'Application tracking and selection status in MySQL',
    ],
    github: 'https://github.com/Karthikeya105',
  },
  {
    id: 'ai',
    category: ['ai', 'fullstack'],
    previewClass: 'aiPreview',
    badge: '🤖 AI-Powered Learning Platform',
    previewTitle: 'Study Smarter',
    previewSpan: 'with AI Assistance',
    previewSub: 'Personalized education & intelligent doubt resolution',
    title: 'AI-Based Learning Assistant',
    desc: 'Developed an AI-powered learning platform for personalized education and intelligent doubt resolution.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'NLP'],
    features: [
      'Adaptive learning recommendations',
      'Automated quiz generation',
      'Detailed progress tracking',
      'Intelligent doubt resolution engine',
    ],
    github: 'https://github.com/Karthikeya105',
  },
  {
    id: 'civic',
    category: ['civic', 'fullstack'],
    previewClass: 'civicPreview',
    badge: '🗺️ Civic Management Dashboard',
    previewTitle: 'Civic Dashboard',
    previewSpan: 'Real-Time Reporting',
    previewSub: 'Geolocation-based issue tracking with interactive maps',
    title: 'Civic Dashboard',
    desc: 'Built a comprehensive civic issue management dashboard with real-time complaint reporting and geolocation-based tracking.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Leaflet.js'],
    features: [
      'Real-time complaint reporting system',
      'Interactive map visualization (Leaflet.js)',
      'Custom issue status monitoring',
      'Geolocation-based tracking',
    ],
    github: 'https://github.com/Karthikeya105',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="section-divider" />

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            className={styles.card}
            data-animate="fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Preview */}
            <div className={`${styles.preview} ${styles[p.previewClass]}`}>
              <div className={styles.glow} />
              <div className={styles.previewContent}>
                <div className={styles.previewBadge}>{p.badge}</div>
                <div className={styles.previewTitle}>
                  {p.previewTitle}<br/>
                  <span>{p.previewSpan}</span>
                </div>
                <div className={styles.previewSub}>{p.previewSub}</div>
              </div>
            </div>

            {/* Info */}
            <div className={styles.info}>
              <div className={styles.header}>
                <h3 className={styles.title}>{p.title}</h3>
                <a href={p.github} target="_blank" rel="noreferrer" className={styles.linkIcon} aria-label="GitHub" style={{ position: 'relative', zIndex: 10 }}>
                  <GitIcon />
                </a>
              </div>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              <div className={styles.divider} />
              <div className={styles.features}>
                <h4>Key Features</h4>
                <ul>
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <div className={styles.actions}>
                <a href={p.github} target="_blank" rel="noreferrer" className={styles.codeBtn} style={{ position: 'relative', zIndex: 10 }}>
                  <GitIcon /> Code Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
