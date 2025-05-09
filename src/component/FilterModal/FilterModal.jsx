import React, { useState } from "react";
import styles from "./FilterModal.module.scss";
import { Rate } from "antd";
import clearClr from "./../../assets/ShopPage/clearClr.svg";
import { toggleValue } from "./../../Utils/toggleValue.js";
const colors = ["#000", "#f00", "#0f0", "#00f", "#ff0"];

const FilterModal = ({ onClose }) => {
  const [price, setPrice] = useState(10000);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const toggleColor = (color) => {
    toggleValue(color, setSelectedColors, selectedColors);
  };

  const toggleRating = (rating) => {
    toggleValue(rating, setSelectedRatings, selectedRatings);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Price */}
        <div className={styles.priceSection}>
          <h4>Price</h4>
          <input
            type="range"
            min="0"
            max="10000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className={styles.rangeLabels}>
            <span>$0</span>
            <span>${price}</span>
          </div>
          <div className={style.priceBoc}>$0 - ${price}</div>
        </div>

        {/* Color */}
        <div className={styles.ClrSection}>
          <h4>Color</h4>

          <div className={styles.colorOptions}>
            {colors.map((color, idx) => (
              <button
                key={idx}
                className={`${styles.colorBtn} `}
                style={{ backgroundColor: color }}
                onClick={() => toggleColor(color)}
              />
            ))}
          </div>
          <div className={styles.selectedColors}>
            {selectedColors.map((color, idx) => (
              <div
                onClick={() => toggleColor(color)}
                style={{
                  backgroundColor: color,
                }}
                key={idx}
                className={styles.selectedColorItem}
              >
                <img style={{ width: "10px" }} src={clearClr} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className={styles.ratingSection}>
          <h4>Customer Rating</h4>
          <div className={styles.rating}>
            {[5, 4, 3, 2, 1].map((rate) => (
              <label key={rate} className={styles.ratingItem}>
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rate)}
                  onChange={() => toggleRating(rate)}
                />
                <span className={styles.checkmark}></span>
                <Rate disabled defaultValue={rate} />
              </label>
            ))}
          </div>
        </div>

        <div>
          <button className={styles.closeBtn} onClick={onClose}>
            Apply Filters
          </button>
          <button className={styles.closeBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default FilterModal;
