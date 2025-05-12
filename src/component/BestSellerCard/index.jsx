import { useNavigate } from "react-router-dom";
import { StarRating } from "../StarRating/StarRating";
import style from "./BestSellerCard.module.scss";

const BestSellerCard = (product) => {
  const navigate = useNavigate();
  const { id, image, title, oldPrice, newPrice, rating } = product;

  const handleGoToAbout = () => {
    navigate("/product/{id}");
  };

  return (
    <div className={style.container} onClick={handleGoToAbout}>
      <img className={style.image} src={image} alt="image" />

      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <StarRating rating={rating} />
        <div className={style.priceWrapper}>
          <p className={style.oldPrice}>${oldPrice}</p>
          <p className={style.newPrice}>${newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
