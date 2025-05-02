import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import arrow from "@/assets/ShopPage/arrow.svg";
import line from "@/assets/ShopPage/line.png";
import capitalizeFirstLetter from "@/Utils/capitalizeFirstLetter";
import style from "./SingleProductNavigation.module.scss";
import { fetchProducts } from "@/Utils/fetchProducts";

const SingleProductNavigation = () => {
  const [productName, setProductName] = useState("");
  const location = useLocation();
  const { id } = useParams();
  const pathnames = location.pathname.split("/").filter((path) => path);

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const product = await fetchProducts(id);
        if (product?.name) {
          setProductName(product.name);
        }
      }
    };
    getProduct();
  }, [id]);

  return (
    <div>
      <ul className={style.container}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={index}>
              <img src={arrow} alt="arrow" className={style.arrow} />
              {isLast ? (
                <span className={style.productName}>
                  <img className={style.line} src={line} alt="line" />
                  {productName
                    ? capitalizeFirstLetter(productName)
                    : capitalizeFirstLetter(name)}
                </span>
              ) : (
                <Link to={routeTo}>{capitalizeFirstLetter(name)}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleProductNavigation;
