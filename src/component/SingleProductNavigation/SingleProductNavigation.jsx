import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import arrow from "@/assets/ShopPage/arrow.svg";
import line from "@/assets/ShopPage/line.png";
import capitalizeFirstLetter from "@/Utils/capitalizeFirstLetter";
import style from "./SingleProductNavigation.module.scss";
import { fetchProducts } from "@/Utils/fetchProducts";

const SingleProductNavigation = () => {
  const [productName, setProductName] = useState("");
  const { id } = useParams();

  const getProduct = async () => {
    if (id) {
      const product = await fetchProducts(id);
      if (product?.name) {
        setProductName(product.name);
      }
    }
  };
  getProduct();

  return (
    <div>
      <ul className={style.container}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <img src={arrow} alt="arrow" className={style.arrow} />
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <img src={arrow} alt="arrow" className={style.arrow} />
        <li>
          <span className={style.productName}>
            <img className={style.line} src={line} alt="line" />
            {productName ? capitalizeFirstLetter(productName) : ""}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SingleProductNavigation;
