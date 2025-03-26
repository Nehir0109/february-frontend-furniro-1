import { ExploreMoreSection } from "@/components/ExploreMoreSection/ExploreMoreSection";
import "./style.scss";
import { TopCategoriesSection } from "@/Components/TopCategoriesSection/TopCategories";
import Hero from "../../components/HeroComponent/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TopCategoriesSection />
      <ExploreMoreSection sectionName=" ExploreMoreSection" />
    </div>
  );
};

export default HomePage;
