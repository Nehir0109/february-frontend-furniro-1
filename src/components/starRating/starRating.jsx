import styles from "./starRating.module.scss";

export const StarRating = ({ rating }) => {
  return (
    <div className={styles["star-rating"]}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`${styles.star} ${index < rating ? styles.filled : ""}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};
