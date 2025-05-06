const API_URL = "https://67c70de4c19eb8753e786926.mockapi.io/furniro-1-api/products";

export const fetchProducts = async (id = null) => {
  try {
    console.log("Fetching data...");
    const url = id ? `${API_URL}/${id}` : `${API_URL}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const productsJson = await response.json();
    return productsJson;
  } catch (error) {
    console.error("There was an error in fetching:", error);
  }
};
