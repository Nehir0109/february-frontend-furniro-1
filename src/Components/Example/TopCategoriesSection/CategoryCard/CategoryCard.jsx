import style from "./CategoryCard.module.scss";

export const CategoryCard = ({ image, category }) => {
  return (
    <div className={style.CategoryCard}>
      <div className={style.card}>
        <img src={image} alt={category} className={style.card - image} />
        <div className={style.content}>
          <h3 className={style.card - category}>{category}</h3>
        </div>
      </div>
    </div>
  );
};
