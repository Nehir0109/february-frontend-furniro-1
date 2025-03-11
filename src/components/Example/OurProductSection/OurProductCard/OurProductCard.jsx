import { useState } from "react";
import style from "./OurProductCard.module.scss";
import { FaStar } from "react-icons/fa";

export const OurProductCard = ({ image, title, description, currentPrice, oldPrice }) => {
  const [rating, setRating] = useState(null);
  return (
    <div className={style.cardWrapper}>
      <div className={style.cardImageDiv}>
        <img src={image} alt={title} className={style.cardImage} />
      </div>
      <div className={style.cardDetails}>
        <h3 className={style.cardTitle}>{title}</h3>
        <p className={style.cardDescription}>{description}</p>
        <div className={style.cardRating}>
          {[...Array(5)].map((star) => {
            return (
              <label>
                <input type="radio" name="rating" />
                <FaStar className={style.star} size={18} />
              </label>
            );
          })}
        </div>
        <div className={style.cardPrice}>
          <span className={style.currentPrice}>${currentPrice}</span>
          {oldPrice && <span className={style.oldPrice}>${oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};
