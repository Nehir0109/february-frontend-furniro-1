import "./style.scss";
import { TopCategoriesSection } from "@/Components/TopCategoriesSection/TopCategories";
import Hero from "../../components/HeroComponent/Hero";
import { ExploreMoreSection } from "@/components/ExploreMoreSection/ExploreMoreSection";
import Modal from "../../Components/Modal/Modal";

const HomePage = () => {
  return (
    <div>
   {/* <Modal/> */}
      <Hero />
   
      <TopCategoriesSection />
      <ExploreMoreSection />
    </div>
  );
};

export default HomePage;
