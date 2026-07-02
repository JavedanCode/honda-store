import githubLogo from "../assets/github-mark.svg";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.hero}>
        <h1>Honda Store</h1>
        <p>A Full-Stack Practice Project</p>
      </section>

      <section className={styles.profile}>
        <img src={githubLogo} alt="GitHub" className={styles.githubLogo} />

        <h2>JavedanCode</h2>

        <p>
          Passionate about building clean, modern web applications while
          continuously learning new technologies.
        </p>

        <a
          href="https://github.com/JavedanCode"
          target="_blank"
          rel="noreferrer"
          className={styles.githubButton}
        >
          Visit GitHub
        </a>
      </section>

      <section className={styles.section}>
        <h2>About This Project</h2>

        <p>
          Honda Store started as a simple React practice project and gradually
          evolved into a complete full-stack application. The goal was to
          simulate the experience of developing a modern e-commerce website from
          the database layer all the way to the frontend while avoiding
          unnecessary libraries.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Technology Stack</h2>

        <div className={styles.grid}>
          <div>⚛ React</div>
          <div>🚀 Express.js</div>
          <div>🗄 PostgreSQL</div>
          <div>🔺 Prisma ORM</div>
          <div>🧭 React Router</div>
          <div>🎨 CSS Modules</div>
          <div>📡 REST API</div>
          <div>💻 JavaScript (ES6+)</div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Project Features</h2>

        <ul className={styles.features}>
          <li>Browse Honda motorcycles</li>
          <li>Dynamic search and category filtering</li>
          <li>Sorting by price and name</li>
          <li>Individual motorcycle details</li>
          <li>Shopping cart powered by React Context</li>
          <li>Responsive checkout page</li>
          <li>Custom REST API with Express & Prisma</li>
        </ul>
      </section>

      <section className={styles.footer}>
        <p>
          Built as a learning project to gain practical experience with modern
          full-stack web development.
        </p>
      </section>
    </main>
  );
}
