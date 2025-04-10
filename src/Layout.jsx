import { Outlet } from "react-router-dom";
import "./layout.scss";
import Navbar from "./Components/NavbarComponent/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
