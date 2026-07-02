import styles from "../styles/CartItem.module.css";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  const { motorcycle, quantity } = item;

  return (
    <article className={styles.card}>
      <img
        src={`http://localhost:3000${motorcycle.imagePath}`}
        alt={motorcycle.name}
        className={styles.image}
      />

      <div className={styles.info}>
        <span className={styles.category}>{motorcycle.category}</span>

        <h2>{motorcycle.name}</h2>

        <p className={styles.price}>${motorcycle.price.toLocaleString()}</p>

        <div className={styles.specs}>
          <span>{motorcycle.engineType}</span>
          <span>{motorcycle.displacement} cc</span>
          <span>{motorcycle.horsepower} hp</span>
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.quantity}>
          <button onClick={() => updateQuantity(motorcycle.slug, quantity - 1)}>
            −
          </button>

          <span>{quantity}</span>

          <button onClick={() => updateQuantity(motorcycle.slug, quantity + 1)}>
            +
          </button>
        </div>

        <h3>${(motorcycle.price * quantity).toLocaleString()}</h3>

        <button
          className={styles.remove}
          onClick={() => removeFromCart(motorcycle.slug)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}
