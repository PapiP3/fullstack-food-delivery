const BASE_URL = "http://localhost:5000/api";

export async function fetchFoods() {
  const res = await fetch(`${BASE_URL}/foods`);
  if (!res.ok) throw new Error("Failed to fetch foods");
  return res.json();
}
