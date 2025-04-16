import { useEffect, useState } from "react";
import { fetchProducts } from "@/Utils/fetchProducts";
import style from "./OurProductComponent.module.scss";
import { OurProductCard } from "./OurProductCard/OurProductCard";

export const OurProductComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.slice(0, 12));
    };

    getProducts();
  }, []);

  return (
    <div className={style.productComponentWrapper}>
      <div className={style.cardGrid}>
        {products.map((product) => (
          <OurProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
