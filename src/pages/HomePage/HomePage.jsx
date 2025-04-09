import { Example } from "@/components/Example/Example";
import "./style.scss";
import { OurProductComponent } from "@/Components/OurProductComponent/OurProductComponent";

const HomePage = () => {
  return (
    <div>
      <Example sectionName="Example Section" />
      <Example sectionName="Feature Section" />
      <OurProductComponent />
    </div>
  );
};

export default HomePage;
