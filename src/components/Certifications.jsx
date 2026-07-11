import styles from './Certifications.module.css'

const CERTS = [
  {
    icon: '🏅',
    title: 'Python for Data Science',
    issuer: 'Verified by NSDC',
    desc: 'Professional certification in Python for Data Science from the National Skill Development Corporation (NSDC), covering data analysis, ML foundations, and scientific computing.',
    link: 'https://www.skillsindia.gov.in/',
  },
  {
    icon: '🏅',
    title: 'Full Stack Web Development',
    issuer: 'Verified by Internshala',
    desc: 'Training & Project Certification in Full Stack Web Development covering HTML, CSS, JavaScript, React, Node.js, and databases with hands-on project work.',
    link: 'https://internshala.com/',
  },
  {
    icon: '🏆',
    title: 'Smart India Hackathon',
    issuer: 'SIH Participant',
    desc: 'Selected & participated in the prestigious Smart India Hackathon for building innovative digital solutions to real-world problems across India.',
    link: 'https://www.sih.gov.in/',
  },
  {
    icon: '💡',
    title: 'LeetCode – DSA Problem Solving',
    issuer: 'Verified by LeetCode',
    desc: 'Solved 200+ complex coding problems on LeetCode focusing on core Data Structures & Algorithms including arrays, trees, graphs, DP, and more.',
    link: 'https://leetcode.com/u/Karthikeya105/',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <div className="section-divider" />

      <div className={styles.grid}>
        {CERTS.map((c, i) => (
          <div
            key={c.title}
            className={styles.card}
            data-animate="fade-up"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className={styles.iconBox}>{c.icon}</div>
            <div className={styles.body}>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.issuer}>{c.issuer}</p>
              <p className={styles.desc}>{c.desc}</p>
            </div>
            <div className={styles.footer}>
              <span className={styles.credential}>CREDENTIAL ID: VERIFIED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
