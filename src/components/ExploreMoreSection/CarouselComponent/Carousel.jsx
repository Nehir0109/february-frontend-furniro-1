import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Carousel.module.scss";
import ExploreCard from "../ExploreCardComponent/ExploreCard";

const rooms = [
  { id: "1", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "2", name: "Bedroom", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "3", name: "Bathroom", image: "src/assets/ExploreMoreSection/image4.svg" },
  { id: "4", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "5", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "6", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "7", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "8", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
];
const Carousel = () => {
  return (
    <div className={styles.rightContent}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 2 },
        }}
      >
        {rooms.map((room) => (
          <SwiperSlide key={room.id}>
            <ExploreCard image={room.image} name={room.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
