import React from "react";
import Flex from "../Layout/Flex";
import Button from "../Layout/Button";

const Service = () => {
  return (
    <div className="mt-[28px] font-primary">
      <Flex className="justify-between items-center">
        <div className="flex justify-center md:justify-end w-auto md:w-[50%] md:mr-[150px]">
          <div className="py-[70px] md:py-0">
            <h1 className="text-[40px] text-center md:text-start md:text-[64px] font-bold text-[#000000]">
              Our Services
            </h1>
            <p className="text-[16px] text-center md:text-start font-medium text-[#6C6C6C] w-[405px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="bg-[url(./assets/service.png)] w-auto mt-[28px] md:mt-0 md:w-[50%] pt-[50px] md:pt-[147px] pb-[50px] md:pb-[139px] relative z-[1] bg-no-repeat bg-center bg-cover">
          <div className="absolute w-full h-full top-0 left-0  bg-[#000000]/60 z-[-1]"></div>
          <div className="md:ml-[116px]">
            <p className="text-[24px] md:text-[36px] text-center md:text-start  font-bold text-[#FFFFFF]">
              Modern natural oil and gas refineries.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button className="mt-[20px] ">Learn More</Button>
            </div>
          </div>
        </div>
      </Flex>
      <Flex>
        <div className="bg-[url(./assets/service2.png)] w-auto  md:mt-0 md:w-[60%] pt-[50px] md:pt-[147px] pb-[50px] md:pb-[139px] relative z-[1] bg-no-repeat bg-center bg-cover">
          <div className="absolute w-full h-full top-0 left-0  bg-[#000000]/60 z-[-1]"></div>
          <div className="md:ml-[116px]">
            <p className="text-[24px] md:text-[36px] text-center md:text-start font-bold text-[#FFFFFF]">
              Supply of national industries.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button className="mt-[20px] ">Learn More</Button>
            </div>
          </div>
        </div>
        <div className="bg-[url(./assets/service3.png)] w-auto  md:mt-0 md:w-[50%] pt-[50px] md:pt-[147px] pb-[50px] md:pb-[139px] relative z-[1] bg-no-repeat bg-center bg-cover">
          <div className="absolute w-full h-full top-0 left-0  bg-[#000000]/60 z-[-1]"></div>
          <div className="md:ml-[116px]">
            <p className="text-[24px] md:text-[36px] text-center md:text-start font-bold text-[#FFFFFF]">
              National fuel distribution and supply.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button className="mt-[20px] ">Learn More</Button>
            </div>
          </div>
        </div>
      </Flex>
      ;
    </div>
  );
};

export default Service;
