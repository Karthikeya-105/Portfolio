import { useState } from 'react'
import styles from './Skills.module.css'

const CATEGORIES = [
  { key: 'all',       label: 'All'                    },
  { key: 'languages', label: 'Programming Languages'  },
  { key: 'frontend',  label: 'Frontend'               },
  { key: 'backend',   label: 'Backend & Frameworks'   },
  { key: 'databases', label: 'Databases'              },
  { key: 'tools',     label: 'Tools & Platforms'      },
]

const SKILL_CARDS = [
  {
    category: 'languages',
    title: 'Programming Languages',
    count: 4,
    items: [
      { name: 'Java',       icon: '☕', bg: '#f89820' },
      { name: 'Python',     icon: '🐍', bg: '#3776AB' },
      { name: 'JavaScript', icon: 'JS', bg: '#f7df1e', color: '#000' },
      { name: 'SQL',        icon: '🗄️', bg: '#4a90d9' },
    ],
  },
  {
    category: 'frontend',
    title: 'Frontend',
    count: 4,
    items: [
      { name: 'HTML5',      icon: '5',  bg: '#e34c26'           },
      { name: 'CSS3',       icon: '3',  bg: '#1572B6'           },
      { name: 'React.js',   icon: '⚛️', bg: '#20232a'           },
      { name: 'JavaScript', icon: 'JS', bg: '#f7df1e', color: '#000' },
    ],
  },
  {
    category: 'backend',
    title: 'Backend & Frameworks',
    count: 3,
    items: [
      { name: 'Node.js',    icon: 'N',   bg: '#68a063' },
      { name: 'Spring Boot', icon: 'SB', bg: '#6DB33F' },
      { name: 'REST APIs',  icon: 'API', bg: '#FF6B35' },
    ],
  },
  {
    category: 'databases',
    title: 'Databases',
    count: 2,
    items: [
      { name: 'MySQL',   icon: 'SQL', bg: '#00758F' },
      { name: 'MongoDB', icon: 'M',   bg: '#13aa52' },
    ],
  },
  {
    category: 'tools',
    title: 'Tools & Platforms',
    count: 3,
    items: [
      { name: 'Git',     icon: '🔀', bg: '#f05032' },
      { name: 'GitHub',  icon: '🐙', bg: '#24292e' },
      { name: 'VS Code', icon: '📝', bg: '#007ACC' },
    ],
  },
  {
    category: 'tools',
    title: 'Core Concepts',
    count: 6,
    items: [
      { name: 'DSA',             icon: '🧮', bg: '#6c63ff' },
      { name: 'OOP',             icon: '🔷', bg: '#e91e63' },
      { name: 'DBMS',            icon: '🗃️', bg: '#009688' },
      { name: 'SDLC',            icon: 'SD', bg: '#4169e1' },
      { name: 'Problem Solving', icon: 'PS', bg: '#9b59b6' },
      { name: 'Version Control', icon: '🔀', bg: '#ff9800' },
    ],
  },
]

export default function Skills() {
  const [active, setActive] = useState('all')

  const visible = SKILL_CARDS.filter(
    c => active === 'all' || c.category === active
  )

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="section-divider" />

      <div className={styles.filters}>
        {CATEGORIES.map(({ key, label }) => (
          <button
            key={key}
            className={`filter-btn ${active === key ? 'active' : ''}`}
            onClick={() => setActive(key)}
          >{label}</button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((card, i) => (
          <div
            key={card.title}
            className={styles.card}
            data-animate="fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.catTitle}>{card.title}</h3>
              <span className={styles.count}>{card.count} ITEMS</span>
            </div>
            <div className={styles.items}>
              {card.items.map(({ name, icon, bg, color }) => (
                <div key={name} className={styles.item}>
                  <span
                    className={styles.icon}
                    style={{ background: bg, color: color || '#fff' }}
                  >{icon}</span>
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
