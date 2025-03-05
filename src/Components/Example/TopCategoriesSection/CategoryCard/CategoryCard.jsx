import style from "./CategoryCard.module.scss";

export const CategoryCard = ({ image, category }) => {
  return (
    <div className={style.CategoryCard}>
      <img src={image} alt={category} className={style.cardImage} />
      <div className={style.content}>
        <h3 className={style.cardCategory}>{category}</h3>
      </div>
    </div>
  );
};
