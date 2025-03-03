import React from "react";
import styles from "./Carousel.module.scss";
import ExploreCard from "../ExploreCardComponent/ExploreCard";
function Carousel() {
  return (
    <div className={styles.carouselContainer}>
      <ExploreCard />
    </div>
  );
}

export default Carousel;
