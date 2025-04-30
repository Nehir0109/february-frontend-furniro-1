import { Link, useLocation } from "react-router-dom";
import arrow from "@/assets/ShopPage/arrow.svg";
import style from "./BreadcrumbBanner.module.scss";
import capitalizeFirstLetter from "@/Utils/capitalizeFirstLetter";
const BreadCrumbBanner = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);

  return (
    <nav>
      <ul className={style.breadcrumb}>
        <li className={style.breadcrumbItem}>
          <Link to="/">Home</Link>
        </li>
        <img src={arrow} alt="" className={style.arrow} />
        <li className={style.breadcrumbItem}>
          <span>{capitalizeFirstLetter(pathnames[0])}</span>
        </li>
      </ul>
    </nav>
  );
};

export default BreadCrumbBanner;
