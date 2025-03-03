import { Example } from "@/components/Example/Example";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import { ExploreMoreSection } from "@/components/ExploreMoreSection/ExploreMoreSection";
export const Layout = () => {
  return (
    <>
      <Example sectionName="Navbar" />
      <ExploreMoreSection sectionName=" ExploreMoreaaaSection" />
      <Outlet />
    </>
  );
};
