import { Example } from "@/components/Example/Example";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import Navbar from "./Components/NavbarComponent/Navbar.jsx";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
