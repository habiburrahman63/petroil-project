import React from "react";
import Flex from "../Layout/Flex";
import Button from "../Layout/Button";

const Service = () => {
  return (
    <div className="mt-[28px]">
      <Flex className="justify-between items-center">
        <div className="ml-[390px] mr-[150px]">
          <h1 className="text-[64px] font-bold text-[#000000]">Our Services</h1>
          <p className="text-[16px] font-medium text-[#6C6C6C] w-[405px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="bg-[url(./assets/service.png)] w-[100%] pt-[147px] pb-[139px] relative z-[1] bg-no-repeat bg-center bg-cover">
          <div className="absolute w-full h-full top-0 left-0  bg-[#000000]/60 z-[-1]"></div>
          <div className="ml-[116px]">
            <p className="text-[36px] font-bold text-[#FFFFFF]">
              Modern natural oil and gas refineries.
            </p>
            <Button className="mt-[20px]">Learn More</Button>
          </div>
        </div>
      </Flex>
      <Flex>
        <div className="bg-[url(./assets/service2.png)] w-[100%] pt-[147px] pb-[139px] relative z-[1] bg-no-repeat bg-center bg-cover">
          <div className="absolute w-full h-full top-0 left-0  bg-[#000000]/60 z-[-1]"></div>
          <div className="ml-[116px]">
            <p className="text-[36px] font-bold text-[#FFFFFF]">
              Supply of national industries.
            </p>
            <Button className="mt-[20px]">Learn More</Button>
          </div>
        </div>
        <div className="bg-[url(./assets/service3.png)] w-[100%] pt-[147px] pb-[139px] relative z-[1] bg-no-repeat bg-center bg-cover">
          <div className="absolute w-full h-full top-0 left-0  bg-[#000000]/60 z-[-1]"></div>
          <div className="ml-[116px]">
            <p className="text-[36px] font-bold text-[#FFFFFF]">
              National fuel distribution and supply.
            </p>
            <Button className="mt-[20px]">Learn More</Button>
          </div>
        </div>
      </Flex>
      ;
    </div>
  );
};

export default Service;
