import "./style.scss";
import { TopCategoriesSection } from "@/component/TopCategoriesSection/TopCategories";
import Hero from "@/component/HeroComponent/Hero";
import { ExploreMoreSection } from "@/component/ExploreMoreSection/ExploreMoreSection";
import AllProducts from "@/component/AllProductsComponent/AllProducts";

const HomePage = () => {
  return (
    <div>
      {/* <Modal/> */}
      <Hero />
      <TopCategoriesSection />
      <AllProducts />
      <ExploreMoreSection />
    </div>
  );
};

export default HomePage;
