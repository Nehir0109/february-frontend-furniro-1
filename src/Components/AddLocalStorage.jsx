import React, { useEffect } from "react";

const AddLocalStorage = () => {
  useEffect(() => {
    fetch("https://67c70de4c19eb8753e786926.mockapi.io/furniro-1-api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const baseItems = data.slice(0, 9);

        const basket = baseItems.map((item, index) => ({
          ...item,
          quantity: (index % 3) + 1,
        }));

        const favorites = baseItems;

        localStorage.setItem("favorites", JSON.stringify(favorites));
        localStorage.setItem("basket", JSON.stringify(basket));
        console.log("favorites", favorites);
        console.log("basket", basket);
      });
  }, []);

  return <div></div>;
};

export default AddLocalStorage;
