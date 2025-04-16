import "./style.scss";
import { OurProductComponent } from "@/component/OurProductComponent/OurProductComponent";
import { TopCategoriesSection } from "@/component/TopCategoriesSection/TopCategories";
import Hero from "@/component/HeroComponent/Hero";
import { ExploreMoreSection } from "@/component/ExploreMoreSection/ExploreMoreSection";

const HomePage = () => {
  return (
    <div>
      {/* <Modal/> */}
      <Hero />
      <TopCategoriesSection />
      <OurProductComponent />
      <ExploreMoreSection />
    </div>
  );
};

export default HomePage;
