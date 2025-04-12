import style from "./OurProductCard.module.scss";
import { StarRating } from "@/Components/StarRating/StarRating";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export const OurProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className={style.cardWrapper}>
      <div className={style.cardImageDiv}>
        <img src={product.images} alt={product.name} className={style.cardImage} />
        <div className={style.hoverActions}>
          <button className={style.iconButton} onClick={toggleFavorite}>
            <FaHeart className={isFavorite ? style.filledHeart : ""} />
          </button>
          <button className={style.iconButton}>
            <FaSearch />
          </button>
          <button className={style.iconButton}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
      <div className={style.cardDetails}>
        <h3 className={style.cardTitle}>{product.name}</h3>
        <p className={style.cardDescription}>{product.shortDescription}</p>
        <div className={style.cardRating}>
          <StarRating rating={Math.round(product.rating)} />
        </div>
        <div className={style.cardPrice}>
          <span className={style.currentPrice}>${product.price}</span>
          {product.originalPrice && (
            <span className={style.price}>${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};
