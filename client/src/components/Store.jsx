import { useState, useEffect } from "react";
import { getMotorcycles, getCategories } from "../api/motorcycleApi";
import Card from "./Card";
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

  function handleClick() {
    //God Help me
    return;
  }

  return (
    <div className="store-container">
      <h2 className="store-heading">Current Offers</h2>
      <div className="bike-grid">
        {motorcycles.map((motorcycle) => {
          return (
            <Card
              key={motorcycle.slug}
              onClick={handleClick}
              motorcycle={motorcycle}
            />
          );
        })}
      </div>
    </div>
  );
}
