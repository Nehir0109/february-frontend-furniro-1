import "./style.scss";
import { ExploreMoreSection } from "@/components/ExploreMoreSection/ExploreMoreSection";
import { TopCategoriesSection } from "@/Components/TopCategoriesSection/TopCategories";
import Hero from "../../components/HeroComponent/Hero";

const HomePage = () => {
  return (
    <div>
      <TopCategoriesSection />
      <ExploreMoreSection />
      <Hero />
    </div>
  );
};

export default HomePage;
