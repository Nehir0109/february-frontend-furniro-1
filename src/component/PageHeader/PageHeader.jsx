import style from "./Pageheader.module.scss";
import Logo from "@/assets/ShopPage/logo.svg";
import { useLocation } from "react-router-dom";
import BreadcrumbBanner from "../BreadcrumbBanner/BreadcrumbBanner";
import capitalizeFirstLetter from "./../../Utils/capitalizeFirstLetter";
const PageHeader = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);
  const pathnameCapitalized = capitalizeFirstLetter(pathnames[0]);
  return (
    <div className={style.headerComponent}>
      <div className={style.headerBackground}></div>
      <div className={style.headerContent}>
        <img src={Logo} alt="logo" />
        <h1> {pathnameCapitalized}</h1>
        <BreadcrumbBanner />
      </div>
    </div>
  );
};

export default PageHeader;
