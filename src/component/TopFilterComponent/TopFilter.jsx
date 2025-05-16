import style from "./TopFilter.module.scss";
import FilterModal from "./../FilterModal/FilterModal";
import { useState } from "react";
import filterIcon from "@/assets/ShopPage/filter.svg";

const TopFilter = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Default");

  const options = ["Default", "Low to High", "High to Low", "Newest"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={style.TopFilterContainer}>
      <div className={style.FilterContainer}>
        <div className={style.FilterContainerLeft}>
          <button className={style.btn} onClick={() => setShowModal(true)}>
            <img src={filterIcon} alt="Filter Icon" />
            <span>Filter</span>
          </button>
          {showModal && <FilterModal onClose={() => setShowModal(false)} />}
          <div className={style.result}>Showing 1–16 of 32 results</div>
        </div>

        <div className={style.FilterContainerRight}>
          <span>Sort by</span>
          <div className={style.dropdown}>
            <button onClick={() => setIsOpen(!isOpen)}>{selected}</button>
            {isOpen && (
              <ul className={style.dropdownMenu}>
                {options.map((option, idx) => (
                  <li key={idx} onClick={() => handleSelect(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFilter;
