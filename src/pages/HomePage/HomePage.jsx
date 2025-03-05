import { Example } from "@/components/Example/Example";
import "./style.scss";
import { TopCategoriesSection } from "../../Components/Example/TopCategoriesSection/TopCategories";

const HomePage = () => {
  return (
    <div>
      <Example sectionName="Example Section" />
      <Example sectionName="Feature Section" />
      <TopCategoriesSection></TopCategoriesSection>
    </div>
  );
};

export default HomePage;
