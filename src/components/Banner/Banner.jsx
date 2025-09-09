import React from "react";
import Flex from "../Layout/Flex";
import Container from "../Layout/Container";
import Button from "../Layout/Button";

const Banner = () => {
  return (
    <div className="z-[2] bg-[url(./assets/banner.png)] bg-no-repeat bg-cover bg-center py-[257px] relative">
      <div className="z-[-7] absolute w-full h-full bg-[#000000]/50 top-0 left-0"></div>
      <Container>
        <h1 className="text-[#FFFFFF] text-[64px] font-bold w-[842px]">
          We exist since 1975 on the oil and gas industry.
        </h1>
        <Button className="mt-[31px]">LEARN MORE</Button>
      </Container>
    </div>
  );
};

export default Banner;
