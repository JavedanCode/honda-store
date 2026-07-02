import styles from "../styles/Card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({ onClick, motorcycle }) {
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();
  return (
    <article
      className={styles.card}
      onClick={() => navigate(`/bike/${motorcycle.slug}`)}
    >
      <img
        className={styles.cardImage}
        src={`${IMAGE_URL}${motorcycle.imagePath}`}
        alt={motorcycle.name}
      />

      <div className={styles.cardContent}>
        <h3 className={styles.cardName}>{motorcycle.name}</h3>

        <p className={styles.cardPrice}>${motorcycle.price.toLocaleString()}</p>
      </div>
    </article>
  );
}
