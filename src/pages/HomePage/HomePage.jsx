import "./style.scss";
import { TopCategoriesSection } from "@/Components/TopCategoriesSection/TopCategories";
import Hero from "../../components/HeroComponent/Hero";
import { ExploreMoreSection } from "@/components/ExploreMoreSection/ExploreMoreSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TopCategoriesSection />
      <ExploreMoreSection />
    </div>
  );
};

export default HomePage;
