// pages/index.js
import styles from '../components/layout.module.css'; // import CSS Module

export default function layout() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>Hi, I'm John Doe</h1>
        <p className={styles.subtitle}>A passionate web developer</p>
      </header>

      {/* About Section */}
      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          I'm a web developer with a love for creating beautiful, user-friendly websites and applications.
          My skills include HTML, CSS, JavaScript, and frameworks like React and Next.js.
        </p>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <h2>Skills</h2>
        <ul>
          <li>Frontend Development</li>
          <li>React & Next.js</li>
          <li>HTML, CSS, JavaScript</li>
          <li>API Development</li>
          <li>Responsive Web Design</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectCard}>
          <h3>Project 1: Personal Blog</h3>
          <p>A blog website built with Next.js to showcase articles and tutorials.</p>
        </div>
        <div className={styles.projectCard}>
          <h3>Project 2: E-commerce Store</h3>
          <p>An online store built using React and Firebase for the backend.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2>Contact Me</h2>
        <p>You can reach me via email: johndoe@example.com</p>
      </section>
    </div>
  );
}
