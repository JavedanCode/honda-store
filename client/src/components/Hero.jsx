import styles from "../styles/Hero.module.css";
import Github from "./Github";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <Navbar />

      <div className={styles.content}>
        <p className={styles.heroQuote}>Ignite your journey with Honda</p>

        <button className={styles.exploreBtn}>Explore Collection</button>
      </div>

      <div className={styles.githubWrapper}>
        <Github />
      </div>
    </section>
  );
}
