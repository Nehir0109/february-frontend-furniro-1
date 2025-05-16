import React, { useEffect, useState } from "react";
import styles from "./RelatedProducts.module.scss";
import { OurProductCard } from "../OurProductComponent/OurProductCard/OurProductCard";
import { fetchProducts } from "../../Utils/fetchProducts";
import { useNavigate } from "react-router-dom";

export const RelatedProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      if (data && data.length > 0) {
        setProducts(data.slice(0, 5));
      }
    };
    getProducts();
  }, []);

  return (
    <section className={styles.relatedProducts}>
      <h2 className={styles.title}>Related Products</h2>

      <div className={styles.cardList}>
        {products.map((product) => (
          <div key={product.id} className={styles.cardWrapper}>
            <OurProductCard product={product} />
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <button
          className={styles.showMoreBtn}
          onClick={() => navigate("/shop")}
        >
          Show More
        </button>
      </div>
    </section>
  );
};