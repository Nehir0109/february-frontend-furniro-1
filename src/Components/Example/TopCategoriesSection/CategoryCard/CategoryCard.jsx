import style from "./CategoryCard.module.scss";

export const CategoryCard = (card) => {
  return (
    <div className={style.CategoryCard}>
      <img src={card.image} alt={card.category} className={style.cardImage} />
      <div className={style.content}>
        <h3 className={style.cardCategory}>{card.category}</h3>
      </div>
    </div>
  );
};
