const API_URL = "http://localhost:3000/api";

export async function getMotorcycles({
  search = "",
  category = "",
  sort = "",
  order = "",
} = {}) {
  const params = new URLSearchParams();

  if (search) {
    params.append("search", search);
  }

  if (category) {
    params.append("category", category);
  }

  if (sort) {
    params.append("sort", sort);
  }

  if (order) {
    params.append("order", order);
  }

  const response = await fetch(`${API_URL}/motorcycles?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch motorcycles");
  }

  return response.json();
}

export async function getMotorcycle(slug) {
  const response = await fetch(`${API_URL}/motorcycles/${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch motorcycle");
  }
  return response.json();
}

export async function getCategories() {
  const response = await fetch(`${API_URL}/motorcycles/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}
