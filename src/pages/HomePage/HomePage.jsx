import "./style.scss";
import { TopCategoriesSection } from "@/components/TopCategoriesSection/TopCategories";
import Hero from "@/components/HeroComponent/Hero";
import { ExploreMoreSection } from "@/components/ExploreMoreSection/ExploreMoreSection";
import AllProducts from "@/Components/AllProductsComponent/AllProducts";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TopCategoriesSection />
      <AllProducts />
      <ExploreMoreSection />
    </div>
  );
};

export default HomePage;
