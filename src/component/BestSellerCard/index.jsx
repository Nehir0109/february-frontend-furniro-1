/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { StarRating } from "../StarRating/StarRating";
import style from "./BestSellerCard.module.scss";

const BestSellerCard = ({ product }) => {
  const navigate = useNavigate();
  const { id, images, name, originalPrice, price, rating } = product;

  const handleGoToAbout = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={style.container} onClick={handleGoToAbout}>
      <img className={style.image} src={images?.[0]} alt={name} />

      <div className={style.content}>
        <h3 className={style.title}>{name}</h3>
        <StarRating rating={rating} />
        <div className={style.priceWrapper}>
          <p className={style.oldPrice}>${originalPrice}</p>
          <p className={style.newPrice}>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
