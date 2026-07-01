import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMotorcycle } from "../api/motorcycleApi";
export default function Details() {
  const { slug } = useParams();
  const [motorcycle, setMotorcycle] = useState(null);
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
              <button>-</button>

              <span>1</span>

              <button>+</button>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.addToCart}>Add to Cart</button>

            <button className={styles.buyNow}>Buy Now</button>
          </div>
        </aside>
      </section>

      <section className={styles.specificationSection}>
        <h2>Technical Specifications</h2>

        <div className={styles.specGrid}>
          <div className={styles.specCard}>
            <span>Engine Type</span>
            <strong>{motorcycle.engineType}</strong>
          </div>

          <div className={styles.specCard}>
            <span>Displacement</span>
            <strong>{motorcycle.displacement} cc</strong>
          </div>

          <div className={styles.specCard}>
            <span>Horsepower</span>
            <strong>{motorcycle.horsepower} hp</strong>
          </div>

          <div className={styles.specCard}>
            <span>Torque</span>
            <strong>{motorcycle.torque} Nm</strong>
          </div>

          <div className={styles.specCard}>
            <span>Cooling</span>
            <strong>{motorcycle.cooling}</strong>
          </div>

          <div className={styles.specCard}>
            <span>Transmission</span>
            <strong>{motorcycle.transmission}</strong>
          </div>

          <div className={styles.specCard}>
            <span>Weight</span>
            <strong>{motorcycle.weight} kg</strong>
          </div>

          <div className={styles.specCard}>
            <span>Seat Height</span>
            <strong>{motorcycle.seatHeight} mm</strong>
          </div>

          <div className={styles.specCard}>
            <span>Fuel Capacity</span>
            <strong>{motorcycle.fuelCapacity} L</strong>
          </div>

          {motorcycle.topSpeed && (
            <div className={styles.specCard}>
              <span>Top Speed</span>
              <strong>{motorcycle.topSpeed} km/h</strong>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
