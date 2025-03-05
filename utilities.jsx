const API_URL = "https://67c70de4c19eb8753e786926.mockapi.io/furniro-1-api/products";

/*Tüm ürünleri getirir.*/
export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Ürünler alınırken hata oluştu.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
/*
export let productsJsonList = [];

export const fetchProducts = async (category, id = null) => {
  try {
    const url = id
      ? `https://67c70de4c19eb8753e786926.mockapi.io/furniro-1-api/products${id}`
      : `https://67c70de4c19eb8753e786926.mockapi.io/furniro-1-api/products?category=${category}`;

    const response = await fetch(url);
    const productsJson = await response.json();
    productsJsonList = id ? productsJson : productsJson.slice(0, 16);
  } catch (error) {
    console.error("There was an error in fetching:", error);
  }
};*/
