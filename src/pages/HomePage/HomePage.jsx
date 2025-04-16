import "./style.scss";
import { OurProductComponent } from "@/components/OurProductComponent/OurProductComponent";
import { TopCategoriesSection } from "@/components/TopCategoriesSection/TopCategories";
import Hero from "../../components/HeroComponent/Hero";
import { ExploreMoreSection } from "@/components/ExploreMoreSection/ExploreMoreSection";
import Modal from "../../Components/Modal/Modal";

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
