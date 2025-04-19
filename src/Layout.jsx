import { Outlet } from "react-router-dom";
import "./layout.scss";
import Navbar from "./component/NavbarComponent/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
