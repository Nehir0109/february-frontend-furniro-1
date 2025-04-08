import { Example } from "@/components/Example/Example";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import Footer from "@/components/Footer/Footer.jsx";

export const Layout = () => {
  return (
    <>
      <Example sectionName="Navbar" />
      <Outlet />
      <Footer />
    </>
  );
};
