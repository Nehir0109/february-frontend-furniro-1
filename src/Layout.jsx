import { Outlet } from "react-router-dom";
import "./layout.scss";
import Navbar from "./components/NavbarComponent/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
