import "./style.scss";
import { OurProductComponent } from "@/components/OurProductComponent/OurProductComponent";
import { TopCategoriesSection } from "@/components/TopCategoriesSection/TopCategories";
import Hero from "../../components/HeroComponent/Hero";
import { ExploreMoreSection } from "@/components/ExploreMoreSection/ExploreMoreSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TopCategoriesSection />
      <OurProductComponent />
      <ExploreMoreSection />
    </div>
  );
};

export default HomePage;
