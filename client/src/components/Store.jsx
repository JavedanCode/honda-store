import { useState, useEffect } from "react";
import { getMotorcycles, getCategories } from "../api/motorcycleApi";
import Card from "./Card";
import styles from "../styles/Store.module.css";
export default function Store() {
  const [motorcycles, setMotorcycles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("name");

  useEffect(() => {
    async function loadMotorcycles() {
      const bikes = await getMotorcycles({
        search,
        category: selectedCategory,
        sort,
      });
      setMotorcycles(bikes);
    }

    loadMotorcycles();
  }, [search, selectedCategory, sort]);

  useEffect(() => {
    async function loadCategories() {
      setCategories(await getCategories());
    }

    loadCategories();
  }, []);

  return (
    <section id="store" className={styles.storeContainer}>
      <header className={styles.storeHeader}>
        <h2 className={styles.storeHeading}>Current Offers</h2>

        <p className={styles.storeSubtitle}>
          Explore Honda's latest motorcycles.
        </p>

        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Search motorcycles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.select}
          >
            <option value="">All Categories</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className={styles.select}
          >
            <option value="name">Sort: Name</option>
            <option value="price">Sort: Price</option>
          </select>
        </div>
      </header>

      <section className={styles.bikeGrid}>
        {motorcycles.map((motorcycle) => (
          <Card key={motorcycle.slug} motorcycle={motorcycle} />
        ))}
      </section>
    </section>
  );
}
