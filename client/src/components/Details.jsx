import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMotorcycle } from "../api/motorcycleApi";
import { useCart } from "../context/CartContext";
import styles from "../styles/Details.module.css";
export default function Details() {
  const { addToCart } = useCart();
  const { slug } = useParams();
  const [motorcycle, setMotorcycle] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    async function fetchMotorcycle() {
      const bike = await getMotorcycle(slug);
      setMotorcycle(bike);
    }

    fetchMotorcycle();
  }, [slug]);

  if (!motorcycle) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className={styles.detailsPage}>
      <section className={styles.heroSection}>
        {/* Left */}
        <div className={styles.imageContainer}>
          <img
            src={`http://localhost:3000${motorcycle.imagePath}`}
            alt={motorcycle.name}
            className={styles.bikeImage}
          />
        </div>

        {/* Right */}
        <aside className={styles.purchasePanel}>
          <span className={styles.categoryBadge}>{motorcycle.category}</span>

          <h1 className={styles.bikeTitle}>{motorcycle.name}</h1>

          <p className={styles.bikePrice}>
            ${motorcycle.price.toLocaleString()}
          </p>

          <p className={styles.shortDescription}>{motorcycle.description}</p>

          <div className={styles.quickSpecs}>
            <div>
              <span>Engine</span>
              <strong>{motorcycle.engineType}</strong>
            </div>

            <div>
              <span>Displacement</span>
              <strong>{motorcycle.displacement} cc</strong>
            </div>

            <div>
              <span>Power</span>
              <strong>{motorcycle.horsepower} hp</strong>
            </div>

            <div>
              <span>Transmission</span>
              <strong>{motorcycle.transmission}</strong>
            </div>
          </div>

          <div className={styles.quantityContainer}>
            <label>Quantity</label>

            <div className={styles.quantitySelector}>
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity((q) => Math.min(motorcycle.stock, q + 1))
                }
              >
                +
              </button>
            </div>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.addToCart}
              onClick={() => addToCart(motorcycle, quantity)}
            >
              Add to Cart
            </button>

            <button className={styles.buyNow}>Buy Now</button>
          </div>
        </aside>
      </section>

      <section className={styles.specificationSection}>
        <h2>Technical Specifications</h2>

        <div className={styles.specGrid}>
          <div className={styles.specRow}>
            <span>Engine Type</span>
            <strong>{motorcycle.engineType}</strong>
          </div>

          <div className={styles.specRow}>
            <span>Displacement</span>
            <strong>{motorcycle.displacement} cc</strong>
          </div>

          <div className={styles.specRow}>
            <span>Horsepower</span>
            <strong>{motorcycle.horsepower} hp</strong>
          </div>

          <div className={styles.specRow}>
            <span>Torque</span>
            <strong>{motorcycle.torque} Nm</strong>
          </div>

          <div className={styles.specRow}>
            <span>Cooling</span>
            <strong>{motorcycle.cooling}</strong>
          </div>

          <div className={styles.specRow}>
            <span>Transmission</span>
            <strong>{motorcycle.transmission}</strong>
          </div>

          <div className={styles.specRow}>
            <span>Weight</span>
            <strong>{motorcycle.weight} kg</strong>
          </div>

          <div className={styles.specRow}>
            <span>Seat Height</span>
            <strong>{motorcycle.seatHeight} mm</strong>
          </div>

          <div className={styles.specRow}>
            <span>Fuel Capacity</span>
            <strong>{motorcycle.fuelCapacity} L</strong>
          </div>

          {motorcycle.topSpeed && (
            <div className={styles.specRow}>
              <span>Top Speed</span>
              <strong>{motorcycle.topSpeed} km/h</strong>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
