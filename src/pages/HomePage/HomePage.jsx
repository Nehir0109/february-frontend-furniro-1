import "./style.scss";
import { TopCategoriesSection } from "@/Components/TopCategoriesSection/TopCategories";
import Hero from "../../components/HeroComponent/Hero";
import { ExploreMoreSection } from "@/components/ExploreMoreSection/ExploreMoreSection";
import FurnitureSection from "../../Components/FurnitureShareSection/FurnitureSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TopCategoriesSection />
      <ExploreMoreSection />
      <FurnitureSection />
    </div>
  );
};

export default HomePage;
