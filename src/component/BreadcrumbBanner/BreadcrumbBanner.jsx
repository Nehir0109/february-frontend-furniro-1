import { Link, useLocation } from "react-router-dom";
import arrow from "../../assets/ShopPage/arrow.svg";
import style from "./BreadcrumbBanner.module.scss";
import capitalizeFirstLetter from "../../Utils/capitalizeFirstLetter";
const BreadCrumbBanner = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  return (
    <nav>
      <ul className={style.breadcrumb}>
        <li className={`${style.tohomeItem} ${style.breadcrumbItem}`}>
          <Link to="/">Home</Link>
        </li>
        <img src={arrow} alt="" className={style.arrow} />
        <li className={style.breadcrumbItem}>
          <span>{capitalizeFirstLetter(pathname[0])}</span>
        </li>
      </ul>
    </nav>
  );
};

export default BreadCrumbBanner;
