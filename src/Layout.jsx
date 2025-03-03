import { Example } from "@/components/Example/Example";
import { Outlet } from "react-router-dom";
import "./layout.scss";
export const Layout = () => {
  return (
    <>
      <Example sectionName="Navbar" />

      <Outlet />
    </>
  );
};
