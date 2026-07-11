import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',           href: '#about'           },
  { label: 'Skills',          href: '#skills'          },
  { label: 'Projects',        href: '#projects'        },
  { label: 'Education',       href: '#education'       },
  { label: 'Certifications',  href: '#certifications'  },
  { label: 'Coding Profiles', href: '#coding-profiles' },
  { label: 'Contact',         href: '#contact'         },
]

export default function Navbar({ theme, setTheme }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeSection, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Highlight active nav link
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 90) {
          setActive(sections[i]); break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      {/* Brand */}
      <div className={styles.brand} onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
        <span className={styles.logo}>Karthikeya<span className={styles.dot}>.</span></span>
        <span className={styles.subtitle}>PORTFOLIO</span>
      </div>

      {/* Desktop Links */}
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`${styles.link} ${activeSection === href.slice(1) ? styles.active : ''}`}
              onClick={e => { e.preventDefault(); handleNavClick(href) }}
            >{label}</a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className={styles.actions}>
        <a href="#resume" className={styles.resumeBtn} onClick={e => { e.preventDefault(); handleNavClick('#resume') }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
          </svg>
          View Resume
        </a>
        <button
          className={styles.themeBtn}
          onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamOpen : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  )
}
