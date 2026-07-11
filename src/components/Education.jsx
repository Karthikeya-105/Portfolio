import styles from './Education.module.css'

const CalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)
const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const EDU_ITEMS = [
  {
    icon: '🎓',
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Sreyas Institute of Engineering and Technology',
    score: 'CGPA: 9.04',
    period: '2023 – Present',
    location: 'Hyderabad, India',
    extra: 'Computer Science & Engineering',
  },
  {
    icon: '📚',
    degree: 'Intermediate (MPC – Maths, Physics, Chemistry)',
    institution: 'Prathibha Junior College',
    score: '94%',
    period: '2021 – 2023',
    location: 'Hyderabad, India',
    extra: null,
  },
  {
    icon: '🏫',
    degree: 'Secondary Education (10th Grade)',
    institution: 'Modern High School',
    score: 'CGPA: 9.8',
    period: '2020',
    location: 'Hyderabad, India',
    extra: null,
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education Timeline</h2>
      <div className="section-divider" />

      <div className={styles.timeline}>
        {EDU_ITEMS.map((item, i) => (
          <div key={i} className={styles.item} data-animate="fade-right">
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  <p className={styles.institution}>{item.institution}</p>
                </div>
                <span className={styles.score}>{item.score}</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.meta}>
                <span className={styles.metaItem}><CalIcon /> {item.period}</span>
                <span className={styles.metaItem}><PinIcon /> {item.location}</span>
                {item.extra && <span className={styles.metaItem}>{item.extra}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
