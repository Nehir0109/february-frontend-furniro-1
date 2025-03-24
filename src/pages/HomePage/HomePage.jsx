import { Example } from "@/components/Example/Example";
import "./style.scss";
import { TopCategoriesSection } from "@/Components/TopCategoriesSection/TopCategories";

const HomePage = () => {
  return (
    <div>
      <Example sectionName="Example Section" />
      <Example sectionName="Feature Section" />
      <TopCategoriesSection />
    </div>
  );
};

export default HomePage;
