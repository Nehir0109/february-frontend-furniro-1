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
  { id: "2", name: "Bedroom", image: "src/assets/ExploreMoreSection/image4.svg" },
  { id: "3", name: "Bathroom", image: "src/assets/ExploreMoreSection/image5.svg" },
  { id: "4", name: "Living Room", image: "src/assets/ExploreMoreSection/image3.svg" },
  { id: "5", name: "Living Room", image: "src/assets/ExploreMoreSection/image5.svg" },
  { id: "6", name: "Living Room", image: "src/assets/ExploreMoreSection/image4.svg" },
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
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        500: { slidesPerView: 1.5 },
        680: { slidesPerView: 2 },
        860: { slidesPerView: 2.5},
        1200: { slidesPerView: 2.0 },
        1560: { slidesPerView: 2.5 },
        1700: { slidesPerView: 2.5},
      }}
    >
      {rooms.map((room, index) => (
        <SwiperSlide 
      
        key={room.id}>
          <ExploreCard room={room} isActive={activeIndex === index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
