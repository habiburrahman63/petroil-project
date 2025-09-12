import React from "react";
import Flex from "../Layout/Flex";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Imagecarosel = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div>
      {/* <Flex className="gap-[30px]">

      </Flex> */}
      <Slider {...settings}>
        <img className="w-[25%] px-[15px]" src="/unsplash_1.png" alt="" />
        <img className="w-[25%] px-[15px]" src="/unsplash_2.png" alt="" />
        <img className="w-[25%] px-[15px]" src="/unsplash_3.png" alt="" />
        <img className="w-[25%] px-[15px]" src="/unsplash_4.png" alt="" />
        <img className="w-[25%] px-[15px]" src="/unsplash_1.png" alt="" />
        <img className="w-[25%] px-[15px]" src="/unsplash_2.png" alt="" />
        <img className="w-[25%] px-[15px]" src="/unsplash_3.png" alt="" />
        <img className="w-[25%] px-[15px]" src="/unsplash_4.png" alt="" />
      </Slider>
    </div>
  );
};

export default Imagecarosel;
