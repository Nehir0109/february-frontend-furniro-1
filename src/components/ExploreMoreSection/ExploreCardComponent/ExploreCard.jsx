import React from "react";
import styles from "./ExploreCard.module.scss";

const rooms = [
  {
    name: "Living Room",
    image: "src/assets/ExploreMoreSection/image3.svg",
  },

  {
    name: "Bedroom",
    image: "src/assets/ExploreMoreSection/image3.svg",
  },
  {
    name: "Bathroom",
    image: "src/assets/ExploreMoreSection/image4.svg",
  },
  {
    name: "Living Room",
    image: "src/assets/ExploreMoreSection/image3.svg",
  },
  {
    name: "Living Room",
    image: "src/assets/ExploreMoreSection/image3.svg",
  },
  {
    name: "Living Room",
    image: "src/assets/ExploreMoreSection/image3.svg",
  },
  {
    name: "Living Room",
    image: "src/assets/ExploreMoreSection/image3.svg",
  },
  {
    name: "Living Room",
    image: "src/assets/ExploreMoreSection/image3.svg",
  },
];

function ExploreCard() {
  return (
    <div className={styles.exploreCardContainer}>
      {rooms.map((room, index) => (
        <div key={index} className={styles.card}>
          <img src={room.image} alt={room.name} className={styles.image} />
          <div>
            <h6>{index}</h6>
            <div style={{ border: "1px solid black" }}></div>

            <div className={styles.name}>{room.name}</div>
          </div>
          <div>inner Peace</div>
        </div>
      ))}
    </div>
  );
}

export default ExploreCard;
