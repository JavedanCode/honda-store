import { useState, useEffect } from "react";
import { getMotorcycles, getCategories } from "../api/motorcycleApi";
export default function Store() {
  const [motorcycles, setMotorcycles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("name");

  useEffect(async () => {
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
}
