import style from "./OurProductCard.module.scss";
import { StarRating } from "@/Components/StarRating/StarRating";

export const OurProductCard = ({ product }) => {
  return (
    <div className={style.cardWrapper}>
      <div className={style.cardImageDiv}>
        <img src={product.images} alt={product.name} className={style.cardImage} />
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
            <span className={style.oldPrice}>${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};
