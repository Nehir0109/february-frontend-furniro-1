import style from "./OurProductSection.module.scss";
import { OurProductCard } from "./OurProductCard/OurProductCard";
const productCardData = [
  {
    id: 1,
    image: "./src/assets/ourproductcardimg.svg",
    title: "Syltherine",
    description: "Stylish cafe chair",
    rating: 4,
    currentPrice: 120,
    oldPrice: 150,
  },
  {
    id: 2,
    image: "./src/assets/ourproductcardimg.svg",
    title: "Leviosa",
    description: "Minimalist chair",
    rating: 5,
    currentPrice: 90,
    oldPrice: 120,
  },
  {
    id: 3,
    image: "./src/assets/ourproductcardimg.svg",
    title: "Lolito",
    description: "Luxury seat",
    rating: 3,
    currentPrice: 140,
    oldPrice: 170,
  },
  {
    id: 4,
    image: "./src/assets/ourproductcardimg.svg",
    title: "Respira",
    description: "Outdoor bar chair",
    rating: 4,
    currentPrice: 100,
    oldPrice: null,
  },
  /*{
    id: 5,
    image: "./src/assets/ourproductcardimg.svg",
    title: "Syltherine",
    description: "Stylish cafe chair",
    rating: 4,
    currentPrice: 120,
    oldPrice: 150,
  },
  {
    id: 6,
    image: "./src/assets/ourproductcardimg.svg",
    title: "Leviosa",
    description: "Minimalist chair",
    rating: 5,
    currentPrice: 90,
    oldPrice: 120,
  },
  {
    id: 7,
    image: "./src/assets/ourproductcardimg.svg",
    title: "Lolito",
    description: "Luxury seat",
    rating: 3,
    currentPrice: 140,
    oldPrice: 170,
  },
  {
    id: 8,
    image: "./src/assets/ourproductcardimg.svg",
    title: "Respira",
    description: "Outdoor bar chair",
    rating: 4,
    currentPrice: 100,
    oldPrice: null,
  },*/
];
export const OurProductSection = () => {
  return (
    <div className={style.productSectionWrapper}>
      <h2 className={style.productSectionTitle}>Our Products</h2>
      <div className={style.cardGrid}>
        {productCardData.map((product) => (
          <OurProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
