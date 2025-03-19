import { Example } from "@/components/Example/Example";
import "./style.scss";
import { OurProductSection } from "@/components/OurProductSection/OurProductSection";

const HomePage = () => {
  return (
    <div>
      <Example sectionName="Example Section" />
      <Example sectionName="Feature Section" />
      <OurProductSection />
    </div>
  );
};

export default HomePage;
