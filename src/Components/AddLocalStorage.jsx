import React, { useEffect } from "react";

const AddLocalStorage = () => {
  useEffect(() => {
    fetch("https://67c70de4c19eb8753e786926.mockapi.io/furniro-1-api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const basket = data.slice(0, 5);
        const favorites = data.slice(0, 9);

        localStorage.setItem("favorites", JSON.stringify(favorites));
        localStorage.setItem("basket", JSON.stringify(basket));
        console.log("favorites", favorites);
        console.log("basket", basket);
      });
  }, []);

  return <div>AddLocalStorage</div>;
};
export default AddLocalStorage;
