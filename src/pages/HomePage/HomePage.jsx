import { Example } from "@/components/Example/Example";
import "./style.scss";
import Hero from "../../components/HeroComponent/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero sectionName="Hero Section" />
      <Example sectionName="Example Section" />
      <Example sectionName="Feature Section" />
    </div>
  );
};

export default HomePage;
