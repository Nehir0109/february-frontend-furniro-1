import { Example } from "@/components/Example/Example";
import "./style.scss";
import { TopCategoriesSection } from "@/Components/TopCategoriesSection/TopCategories";
import Hero from "../../components/HeroComponent/Hero";

const HomePage = () => {
  return (
    <div>
      <TopCategoriesSection />
      <Hero />
    </div>
  );
};

export default HomePage;
