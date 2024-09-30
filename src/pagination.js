import axios from "axios";

export async function fetchInfo(page = 1, perPage = 4) {
  try {
    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=${page}&limit=${perPage}`
    );
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return { items: response.data.items, totalCampers: response.data.total };
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
