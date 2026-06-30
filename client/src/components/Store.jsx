import { useState, useEffect } from "react";
export default function Store() {
  const [motorcycles, setMotorcycles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("name");
}
