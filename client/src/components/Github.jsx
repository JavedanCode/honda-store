import githubLogo from "../assets/github-mark.svg";
import styles from "../styles/Github.module.css";

export default function Github() {
  return (
    <div className={styles.githubCard}>
      <div className={styles.cardHeader}>
        <img className={styles.githubLogo} src={githubLogo} alt="GitHub" />

        <span className={styles.githubTitle}>GitHub</span>
      </div>

      <h2 className={styles.githubName}>JavedanCode</h2>

      <p className={styles.githubDescription}>
        Full Stack Developer building modern React & Node.js applications.
      </p>

      <div className={styles.githubAccent}></div>

      <a
        href="https://github.com/JavedanCode"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
      >
        View Profile →
      </a>
    </div>
  );
}
