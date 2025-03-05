import { CategoryCard } from "./CategoryCard/CategoryCard";
import style from "./TopCategories.module.scss";

const categoryCardData = [
  { image: "./src/assets/Topcategories/Image-dining room.svg", category: "Dining" },
  { image: "./src/assets/Topcategories/Image-living room.svg", category: "Living" },
  { image: "./src/assets/Topcategories/Image-bedroom.svg", category: "Bedroom" },
];
export const TopCategoriesSection = () => {
  return (
    <section className={style.TopCategoriesWrapper}>
      <div className={style.TopCategoriesContainer}>
        <div className={style.TopCategoriesHeader}>
          <h3 className={style.title1}>Browse The Range</h3>
          <h3 className={style.title2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
        </div>
        <div className={style.CategoryCards}>
          {categoryCardData.map((item, index) => (
            <CategoryCard key={index} image={item.image} category={item.category} />
          ))}
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};
