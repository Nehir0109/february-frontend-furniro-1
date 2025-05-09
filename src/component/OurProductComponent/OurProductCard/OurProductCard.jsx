import style from "./OurProductCard.module.scss";
import { StarRating } from "@/component/StarRating/StarRating";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { localStorageUtility } from "@/Utils/localStorageUtility";
import PropTypes from "prop-types";

export const OurProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [inBasket, setInBasket] = useState(false);
  const handleFavoriteClick = () => {
    const favorites = localStorageUtility.get("favorites") || [];
    if (favorites.some((item) => item.id === product.id)) {
      const updatedFavorites = favorites.filter((item) => item.id !== product.id);
      localStorageUtility.set("favorites", updatedFavorites);
    } else {
      localStorageUtility.set("favorites", [...favorites, product]);
    }

    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    const cart = localStorageUtility.get("cart") || [];

    if (cart.some((item) => item.id === product.id)) {
      localStorageUtility.remove("cart", product.id);
      setInBasket(false);
    } else {
      setInBasket(true);
      localStorageUtility.set("cart", [...cart, product]);
    }
  };

  return (
    <div className={style.cardWrapper}>
      <div className={style.cardImageDiv}>
        <img src={product.images} alt={product.name} className={style.cardImage} />
        <div className={style.hoverActions}>
          <button className={style.iconButton} onClick={handleFavoriteClick}>
            <FaHeart className={isFavorite ? style.filledHeart : " "} />
          </button>
          <button className={style.iconButton}>
            <FaSearch />
          </button>
          <button className={style.iconButton} onClick={handleAddToCart}>
            {!inBasket ? (
              <FaShoppingCart />
            ) : (
              <FaShoppingCart className={style.filledBasket} />
            )}
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

OurProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    shortDescription: PropTypes.string,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    rating: PropTypes.number,
    images: PropTypes.string.isRequired,
  }).isRequired,
};
