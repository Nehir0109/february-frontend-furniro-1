import React from "react";
import styles from "./ExploreCard.module.scss";
import arrow from "../../../assets/ExploreMoreSection/arrow.svg";
function ExploreCard({ name, image }) {
  return (
    <div className={styles.card}>
      <img className={styles.imageDiv} src={image} alt={name} />
      <div className={styles.cardContent}>
        <span>01 — Bed Room</span>
        <h3>Inner Peace</h3>
        <button className={styles.arrowBtn}>
          <img style={{}} src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default ExploreCard;
