
import "./style.scss";
import { ExploreMoreSection } from "@/components/ExploreMoreSection/ExploreMoreSection";
import { TopCategoriesSection } from "@/Components/TopCategoriesSection/TopCategories";
import Hero from "../../components/HeroComponent/Hero";


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
