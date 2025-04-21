import style from "./Pageheader.module.scss";
import Logo from "../../assets/ShopPage/logo.svg";
import { useLocation } from "react-router-dom";
import BreadcrumbBanner from "../BreadcrumbBanner/BreadcrumbBanner";

const PageHeader = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={style.headerComponent}>
      <div className={style.headerBackground}></div>
      <div className={style.headerContent}>
        <img src={Logo} alt="logo" />
        <h1> {location.pathname}</h1>
        <BreadcrumbBanner />
      </div>
    </div>
  );
};

export default PageHeader;
