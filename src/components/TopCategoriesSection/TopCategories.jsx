import { CategoryCard } from "./CategoryCard/CategoryCard";
import style from "./TopCategories.module.scss";
import diningRoom from "@/assets/TopCategories/Image-dining-room.svg";
import livingRoom from "@/assets/TopCategories/Image-living-room.svg";
import bedRoom from "@/assets/TopCategories/Image-bedroom.svg";

const categoryCardData = [
  { image: diningRoom, category: "Dining" },
  { image: livingRoom, category: "Living" },
  { image: bedRoom, category: "Bedroom" },
];
export const TopCategoriesSection = () => {
  return (
    <section className={style.topCategoriesWrapper}>
      <div className={style.topCategoriesContainer}>
        <div className={style.topCategoriesHeader}>
          <h3 className={style.title1}>Browse The Range</h3>
          <h3 className={style.title2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
        </div>
        <div className={style.categoryCards}>
          {categoryCardData.map((item, index) => (
            <CategoryCard key={index} image={item.image} category={item.category} />
          ))}
        </div>
      </div>
    </section>
  );
};
