import style from "./TopFilter.module.scss";
import FilterModal from "./../FilterModal/FilterModal";
import { useState } from "react";
import filterIcon from "./../../assets/ShopPage/filter.svg";
const TopFilter = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={style.TopFilterContainer}>
      <div className={style.FilterContainer}>
        <div className={style.FilterContainerLeft}>
          <button className={style.btn} onClick={() => setShowModal(true)}>
            <img src={filterIcon} alt="" />
            <span>Filter</span>
          </button>
          {showModal && <FilterModal onClose={() => setShowModal(false)} />}
          <div className={style.result}>Showing 1–16 of 32 results</div>
        </div>
        <div className={style.FilterContainerRight}>
          <span>Sort by</span>
          <button>Default</button>
        </div>{" "}
      </div>
    </div>
  );
};

export default TopFilter;
