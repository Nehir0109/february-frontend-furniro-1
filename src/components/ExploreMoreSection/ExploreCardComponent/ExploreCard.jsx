import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ExploreCard.module.scss";
import arrow from "../../../assets/ExploreMoreSection/arrow.svg";

function ExploreCard({ name, image, isActive }) {
  const [imageHeight, setImageHeight] = useState("auto");

  useEffect(() => {
    if (isActive) {
      setImageHeight("700px");
    } else {
      setImageHeight("auto");
    }
  }, [isActive]);

  return (
    <div className={styles.card}>
      <div id={styles.imageDiv} style={{ backgroundColor: "pink", height: imageHeight }}>
        <img src={image} alt={name} />
      </div>
      {isActive && (
        <div className={styles.cardContent}>
          <span>01 — Bed Room</span>
          <h3>Inner Peace</h3>
          <button className={styles.arrowBtn}>
            <img src={arrow} alt="Arrow" />
          </button>
        </div>
      )}
    </div>
  );
}

ExploreCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ExploreCard;
