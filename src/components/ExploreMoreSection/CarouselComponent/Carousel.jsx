import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import ExploreCard from "../ExploreCardComponent/ExploreCard";

const rooms = [
  { id: "1", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "2", name: "Bedroom", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "3", name: "Bathroom", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "4", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "5", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "6", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "7", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "8", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      style={{
        height: "582px",
      }}
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      breakpoints={{
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
        1280: { slidesPerView: 3 },
      }}
    >
      {rooms.map((room, index) => (
        <SwiperSlide
          key={room.id}
          style={{
            border: "1px solid red",
            height: activeIndex === index ? "582px" : "486px",
          }}
        >
          <ExploreCard
            image={room.image}
            name={room.name}
            isActive={activeIndex === index}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
