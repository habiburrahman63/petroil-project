import React from "react";
import unsplash_1 from "../../assets/unsplash_1.png";
import unsplash_2 from "../../assets/unsplash_2.png";
import unsplash_3 from "../../assets/unsplash_3.png";
import unsplash_4 from "../../assets/unsplash_4.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Imagecarosel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      // pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 4, spaceBetween: 50 },
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="w-full" src={unsplash_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={unsplash_2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={unsplash_3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={unsplash_4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={unsplash_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={unsplash_2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={unsplash_3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={unsplash_4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Imagecarosel;
