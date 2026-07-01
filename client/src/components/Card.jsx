import styles from "../styles/Card.module.css";

export default function Card({ onClick, motorcycle }) {
  return (
    <article className={styles.card} onClick={onClick}>
      <img
        className={styles.cardImage}
        src={`http://localhost:3000${motorcycle.imagePath}`}
        alt={motorcycle.name}
      />

      <div className={styles.cardContent}>
        <h3 className={styles.cardName}>{motorcycle.name}</h3>

        <p className={styles.cardPrice}>${motorcycle.price.toLocaleString()}</p>
      </div>
    </article>
  );
}
