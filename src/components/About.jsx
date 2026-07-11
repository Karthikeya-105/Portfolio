import styles from './About.module.css'
import profilePhoto from '../assets/Karthikeya_prfl.jpeg'

const HIGHLIGHTS = [
  { icon: '🧠', title: 'Problem Solving',       desc: 'Strong analytical skills focused on writing clean, optimized algorithms.' },
  { icon: '💻', title: 'Full Stack Development', desc: 'Hands-on experience building web systems using React, Node, and Flask.'    },
  { icon: '🤖', title: 'AI Integration',         desc: 'Building intelligent applications with NLP and AI-powered features.'       },
  { icon: '📊', title: 'DSA Enthusiast',          desc: 'Solved 200+ problems on LeetCode focusing on core DSA patterns.'          },
]

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="section-divider" />

      <div className={styles.grid}>
        {/* Photo Container */}
        <div className={styles.imageCard} data-animate="fade-left">
          <div className={styles.imageGlow} />
          <div className={styles.imageWrapper}>
            <img src={profilePhoto} alt="G. Karthikeya" className={styles.profileImg} />
            <div className={styles.imageOverlay} />
          </div>
        </div>

        {/* About Text */}
        <div className={styles.text} data-animate="fade-right">
          <h3 className={styles.subtitle}>Professional Profile</h3>
          <p className={styles.desc}>
            I am a B.Tech Computer Science and Engineering student at Sreyas Institute of Engineering
            and Technology. With a strong academic foundation (CGPA 9.04) and a passion for engineering
            real-world solutions, I have focused my study and hands-on coding on building scalable web
            interfaces and incorporating AI tools.
          </p>
          <p className={styles.desc}>
            My objective is to solve technical problems efficiently, write structured, maintainable code,
            and contribute to impactful products through developer internships and software engineer roles.
          </p>

          <div className={styles.highlights}>
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div key={title} className={styles.highlightCard}>
                <span className={styles.hIcon}>{icon}</span>
                <div>
                  <div className={styles.hTitle}>{title}</div>
                  <div className={styles.hDesc}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
