import styles from "./ExploreMoreSection.module.scss";
import Carousel from "./CarouselComponent/Carousel";
import { Col, Row } from "antd"

export const ExploreMoreSection = () => {
  return (
 
    <Row className={styles.exploreMoreContainer}>
      <Col span={10}  className={styles.leftContent}>
        <div>
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful <br />
            prototipe of rooms that inspire you
          </p>
        </div>
        <button className={styles.btn}>Explore More</button>
      </Col>
      <Col style={{
           display:"flex",
           alignItems:"center",
           justifyContent:"center"
      }} span={14}> 
      <Carousel  />
      </Col>

    </Row>
  );
};
