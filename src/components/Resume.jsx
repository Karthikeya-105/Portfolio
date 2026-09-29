import styles from './Resume.module.css'

export default function Resume() {
  return (
    <section id="resume" className={`section ${styles.section}`}>
      <div className={styles.container}>
        <div className={styles.headerActions}>
          <a
            href="#hero"
            className={styles.backBtn}
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >← Back to Portfolio</a>
          <a href="/Karthikeya_Resume.pdf" download="Karthikeya_Resume.pdf" className={styles.printBtn}>
            📥 Download PDF
          </a>
        </div>

        <div className={styles.doc} id="resume-doc">
          {/* Top */}
          <div className={styles.top}>
            <h1 className={styles.name}>G. KARTHIKEYA</h1>
            <div className={styles.contactLine}>
              <span>Hyderabad, India</span>
              <span className={styles.sep}>|</span>
              <a href="tel:+917993538716">+91-7993538716</a>
              <span className={styles.sep}>|</span>
              <a href="mailto:karthikeyag105@gmail.com">karthikeyag105@gmail.com</a>
              <span className={styles.sep}>|</span>
              <a href="https://linkedin.com/in/karthikeya-goud-507845347" target="_blank" rel="noreferrer">LinkedIn</a>
              <span className={styles.sep}>|</span>
              <a href="https://github.com/Karthikeya105" target="_blank" rel="noreferrer">GitHub</a>
              <span className={styles.sep}>|</span>
              <a href="https://leetcode.com/u/Karthikeya105/" target="_blank" rel="noreferrer">LeetCode</a>
            </div>
          </div>

          {/* Summary */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>PROFESSIONAL SUMMARY</h2>
            <p>
              Motivated Computer Science Engineering undergraduate with expertise in Java, Python, Full Stack
              Development, and software engineering. Proficient in developing web applications using React.js,
              Node.js, Flask, Django, HTML, CSS, JavaScript, and MySQL. Strong understanding of Data Structures,
              Algorithms, OOP, DBMS, and REST APIs, eager to contribute technical, analytical, and
              problem-solving skills in technology-driven roles.
            </p>
          </div>

          {/* Skills */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>TECHNICAL SKILLS</h2>
            <table className={styles.skillsTable}>
              <tbody>
                {[
                  ['Programming Languages', 'Java, Python, JavaScript, SQL'],
                  ['Frontend Technologies', 'HTML5, CSS3, React.js, JavaScript'],
                  ['Backend Technologies', 'Node.js, Spring Boot, REST APIs'],
                  ['Database Technologies', 'MySQL, MongoDB'],
                  ['Developer Tools', 'Git, GitHub, VS Code'],
                  ['Core Concepts', 'Data Structures and Algorithms, OOP, DBMS, SDLC, Problem Solving, Version Control'],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td><strong>{k}:</strong></td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Education */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>EDUCATION</h2>
            {[
              { inst: 'Sreyas Institute of Engineering and Technology', period: '2023 – 2027', detail: 'Bachelor of Technology in Computer Science and Engineering | CGPA: 9.04/10' },
              { inst: 'Prathibha Junior College',                        period: '2021 – 2023', detail: 'Intermediate Education – MPC | Percentage: 94%' },
              { inst: 'Modern High School',                               period: '2020',        detail: 'Secondary Education | CGPA: 9.8/10' },
            ].map(e => (
              <div key={e.inst} className={styles.eduItem}>
                <div className={styles.eduHeader}>
                  <strong>{e.inst}</strong>
                  <span>{e.period}</span>
                </div>
                <div className={styles.eduDetail}>{e.detail}</div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>PROJECTS</h2>
            {[
              {
                title: 'College Placement Portal',
                tech: 'Java, Spring Boot, React.js, MySQL, REST APIs',
                points: [
                  'Developed a full-stack placement portal to manage student profiles, company details, placement drives, and applications.',
                  'Implemented REST APIs and role-based functionality for registration, eligibility management, job-drive listings, and application tracking.',
                  'Designed a MySQL database to manage student records, company information, placement drives, applications, and selection status across multiple tables.',
                ],
              },
              {
                title: 'AI-Based Learning Assistant',
                tech: 'React.js, Node.js, MongoDB, NLP',
                points: [
                  'Developed an AI-powered learning platform for personalized education and intelligent doubt resolution using React.js, Node.js, MongoDB, and NLP.',
                  'Implemented adaptive learning recommendations, automated quiz generation, and progress tracking.',
                ],
              },
              {
                title: 'Civic Dashboard',
                tech: 'React.js, Node.js, MongoDB, Leaflet.js',
                points: [
                  'Built a civic issue management dashboard using React.js, Node.js, MongoDB, and Leaflet.js for complaint reporting, issue tracking, and geolocation-based monitoring.',
                  'Integrated interactive map visualization and issue status monitoring for structured information management and user-focused workflows.',
                ],
              },
            ].map(p => (
              <div key={p.title} className={styles.project}>
                <div className={styles.projectHeader}>
                  <strong>{p.title}</strong>
                  <span className={styles.tech}>{p.tech}</span>
                </div>
                <ul>
                  {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Certs */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>CERTIFICATIONS &amp; ACHIEVEMENTS</h2>
            <ul className={styles.achievements}>
              <li>Solved 200+ complex coding problems on LeetCode focusing on core Data Structures &amp; Algorithms (DSA).</li>
              <li>Python for Data Science Professional Certification – National Skill Development Corporation (NSDC).</li>
              <li>Full Stack Web Development Training &amp; Project Certification – Internshala Trainings.</li>
              <li>Selected &amp; Participated in the prestigious Smart India Hackathon (SIH) for building innovative digital solutions.</li>
              <li>Active contributor on GitHub with multiple open-source web development and full-stack project repositories.</li>
              <li>Recognized for academic excellence, maintaining a top-tier CGPA of 9.04/10 throughout the B.Tech program.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
