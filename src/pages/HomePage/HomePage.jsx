import "./style.scss";
import { OurProductComponent } from "@/component/OurProductComponent/OurProductComponent";
import { TopCategoriesSection } from "@/component/TopCategoriesSection/TopCategories";
import Hero from "@/component/HeroComponent/Hero";
import { ExploreMoreSection } from "@/component/ExploreMoreSection/ExploreMoreSection";
import FurnitureSection from "../../Components/FurnitureShareSection/FurnitureSection";

const HomePage = () => {
  return (
    <div>
      {/* <Modal/> */}
      <Hero />
      <TopCategoriesSection />
      <OurProductComponent />
      <ExploreMoreSection />
      <FurnitureSection />
    </div>
  );
};

export default HomePage;
