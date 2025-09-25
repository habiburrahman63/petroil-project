import React from "react";
import Flex from "../Layout/Flex";
import Container from "../Layout/Container";
import Button from "../Layout/Button";

const Banner = () => {
  return (
    <div className="z-[2] bg-[url(./assets/banner.png)] bg-no-repeat bg-cover bg-center py-[70px] md:py-[257px] relative w-full">
      <div className="z-[-7] absolute w-full h-full bg-[#000000]/50 top-0 left-0"></div>
      <Container>
        <h1 className="text-[#FFFFFF] md:text-[64px] text-[24px] font-bold md:w-[842px] text-center md:text-start">
          We exist since 1975 on the oil and gas industry.
        </h1>
        <div className="w-[186px] m-auto md:m-0">
          <Button className="mt-[31px]">LEARN MORE</Button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
