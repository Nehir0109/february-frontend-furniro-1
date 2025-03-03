import { Example } from "@/components/Example/Example";
import { ExploreMoreSection } from "@/components/ExploreMoreSection/ExploreMoreSection";
import React from "react";
import "./style.scss";

const HomePage = () => {
  return (
    <div>
      <ExploreMoreSection sectionName=" ExploreMoreSection" />
      <Example sectionName="Example Section" />
      <Example sectionName="Feature Section" />
    </div>
  );
};

export default HomePage;
