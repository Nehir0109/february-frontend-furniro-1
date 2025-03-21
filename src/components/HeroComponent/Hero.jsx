import styles from "./Hero.module.scss";
import image from "@/assets/Hero/heroBackground.svg";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroContent}>
        <h5>New Arrival</h5>
        <h1>Discover Our New Collection</h1>
        <p>
          Explore Furniro's latest collection, where elegance meets innovation. Elevate
          your space with our brand-new, stylish furniture pieces. Redefine your home with
          the latest trends and timeless classics. Shop now!.
        </p>
        <button className={styles.heroBtn}>BUY Now</button>
      </div>
    </div>
  );
};

export default Hero;
