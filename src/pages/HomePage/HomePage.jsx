import "./style.scss";
import { TopCategoriesSection } from "@/component/TopCategoriesSection/TopCategories";
import Hero from "@/component/HeroComponent/Hero";
import { ExploreMoreSection } from "@/component/ExploreMoreSection/ExploreMoreSection";
import FurnitureSection from "@/component/FurnitureShareSection/FurnitureSection";
import AllProducts from "@/component/AllProductsComponent/AllProducts";

const HomePage = () => {
  return (
    <div>
      {/* <Modal/> */}
      <Hero />
      <TopCategoriesSection />
      <AllProducts />
      <ExploreMoreSection />
      <FurnitureSection />
    </div>
  );
};

export default HomePage;
