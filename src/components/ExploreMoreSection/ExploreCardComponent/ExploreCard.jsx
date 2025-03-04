import React from "react";
import styles from "./ExploreCard.module.scss";

function ExploreCard({ name, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className="slide-content">
        <span>01 — Bed Room</span>
        <h3>Inner Peace</h3>
        <button className="arrow-btn">→</button>
      </div>
    </div>
  );
}

export default ExploreCard;
