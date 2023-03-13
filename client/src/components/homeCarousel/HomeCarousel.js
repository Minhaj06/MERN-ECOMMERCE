import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./homeCarousel.css";

// import required modules
import { Pagination } from "swiper";

const HomeCarousel = () => {
  return (
    <div className="container homeCarouselContainer">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper homeCarousel"
      >
        <SwiperSlide>
          <NavLink to="/shop">
            <img
              src="https://icms-image.slatic.net/images/ims-web/2920b6a8-87f0-4650-8497-92b9a27cf30f.jpg_1200x1200.jpg"
              alt="img"
            />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/shop">
            <img
              src="https://icms-image.slatic.net/images/ims-web/c92277b8-9e09-4d9b-8933-ba83b454da3d.jpg"
              alt="img"
            />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/shop">
            <img
              src="https://icms-image.slatic.net/images/ims-web/8feeadd0-f5f2-45eb-b81a-cd15004ef004.jpg"
              alt="img"
            />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/shop">
            <img
              src="https://icms-image.slatic.net/images/ims-web/34a65341-4de4-409e-abe8-10f382dd0385.jpg"
              alt="img"
            />
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
