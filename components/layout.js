import { useEffect, useState } from 'react';
import styles from '../components/layout.module.css';

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.layout}>
    
      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
        <div className={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      <div className={styles.main}>
  
        <header id="home" className={styles.header}>
          <h1>Nutcha Junthong</h1>
          <p>Full Stack Developer</p>
          <img src="/img/nahida.jpg" alt="Profile" className={styles.profileImage} />
        </header>
        

      <section id="portfolio" className={styles.section}>
          <h2>My Portfolio</h2>
        <div className={styles.grid}>
          <img src="/img/project.png" alt="project" />
          <img src="/img/bmi1.png" alt="bmi" />
        </div>
      </section>
      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <div className={styles.grid}>
        <div className={styles.item}>
          <img src="/img/html.png" alt="html" />
          <p>HTML</p>
        </div>
        <div className={styles.item}>
          <img src="/img/css.png" alt="css" />
        <p>CSS</p>
        </div>
        <div className={styles.item}>
          <img src="/img/java.png" alt="java" />
          <p>Java</p>
        </div>
        <div className={styles.item}>
          <img src="/img/python.png" alt="python" />
          <p>Python</p>
        </div>
        </div>
      </section>


        
      </div>
    </div>
  );
}
