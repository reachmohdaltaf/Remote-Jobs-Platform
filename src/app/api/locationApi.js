
import axios from "axios";


export const fetchLocations = async (query) => {
  const API_KEY = "7a973b98f8a642b880889379e13d9fb7"; 
  const API_URL = "https://api.opencagedata.com/geocode/v1/json";

  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        key: API_KEY,
        language: "en",
        limit: 10, // Limit the number of results
      },
    });

    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
};
