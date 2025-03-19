import PropTypes from "prop-types";
import styles from "./ExploreCard.module.scss";
import arrow from "../../../assets/ExploreMoreSection/arrow.svg";



function ExploreCard({ room, isActive }) {
  return (
    <div className={styles.card}>
      <div className={isActive ? styles.imageDiv : styles.inActiveCard}>
        <img src={room.image} alt={room.name} />
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
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
};
export default ExploreCard;
