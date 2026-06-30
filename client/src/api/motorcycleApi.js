const API_URL = "http://localhost:3000/api";

export async function getMotorcycles(query = "") {
  const response = await fetch(`${API_URL}/motorcycles${query}`);

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
