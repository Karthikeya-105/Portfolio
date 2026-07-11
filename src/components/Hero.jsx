import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const ROLES = [
  'Full Stack Developer',
  'React.js Developer',
  'Problem Solver',
  'B.Tech CSE Student',
  'Open Source Contributor',
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex]     = useState(0)
  const [charIndex, setCharIndex]     = useState(0)
  const [deleting, setDeleting]       = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 85)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 45)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(r => (r + 1) % ROLES.length)
    }

    setDisplayText(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
          Open For Opportunities &amp; Internships
        </div>

        <p className={styles.greeting}>HI, MY NAME IS</p>

        <h1 className={styles.name}>G. Karthikeya</h1>

        <p className={styles.role}>
          I am a{' '}
          <span className={styles.typedHighlight}>{displayText}</span>
          <span className={styles.cursor}>|</span>
        </p>

        <p className={styles.description}>
          B.Tech Computer Science student with expertise in Java, Python, Full Stack Development,
          and software engineering. Skilled in building scalable web applications using React.js, Node.js.
           Passionate about solving real-world problems with clean, maintainable code.
        </p>

        <div className={styles.btns} style={{ position: 'relative', zIndex: 10 }}>
          <a href="#projects" className={styles.btnPrimary}
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}) }}>
            View Projects <span>→</span>
          </a>
          <a href="#resume" className={styles.btnSecondary}
            onClick={e => { e.preventDefault(); document.getElementById('resume')?.scrollIntoView({behavior:'smooth'}) }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            View Resume
          </a>
          <a href="#contact" className={styles.btnTertiary}
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}) }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,12 2,6"/>
            </svg>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
