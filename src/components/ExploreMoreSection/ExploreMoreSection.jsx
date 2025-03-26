import styles from "./ExploreMoreSection.module.scss";
import Carousel from "./CarouselComponent/Carousel";
import { Col } from "antd";

export const ExploreMoreSection = () => {
  return (
    <div className={styles.exploreMoreContainer}>
      <div className={styles.exploreMoreWrapper}>

    
      <div span={10} className={styles.leftContent}>
        <div>
          <h2>50+ Beautiful rooms 
            inspiration</h2>
          <p>
            Our designer already made a lot of beautiful <br />
            prototipe of rooms that inspire you
          </p>
        </div>
        <button className={styles.btn}>Explore More</button>
      </div>
      <Col className={styles.rightContent} span={14}>
        <Carousel />
      </Col>
    </div>  </div>
  );
};
