import React from "react";
import styles from "./ExploreMoreSection.module.scss";

import Carousel from "./CarouselComponent/Carousel";
export const ExploreMoreSection = () => {
  return (
    <div className={styles.exploreMoreContainer}>
      <div className={styles.exploreMoreContent}>
        <div>
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that inspire
            you
          </p>
        </div>
        <button>Explore More</button>
      </div>
      {/* Buraya Carousel component gelecek */}
      <Carousel />
      {/* carousel bitiş */}
    </div>
  );
};
