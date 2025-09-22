import React from "react";
import Container from "../Layout/Container";
import Flex from "../Layout/Flex";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  return (
    <div className="pt-[110px] pb-[172px] bg-[#F0F0F0]">
      <Container>
        <Flex className="justify-between">
          <div className="z-[1] bg-[url(./assets/blog1.png)] pt-[75px] pb-[55px] w-auto md:w-[339px] bg-no-repeat bg-cover bg-center relative px-[44px]">
            <div className="absolute top-0 left-0 bg-black/60 h-[100%] w-[100%] z-[-1]"></div>

            <p className="text-[#FFFFFF] text-[24px] font-bold text-center md:text-start w-auto md:w-[249px]">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="py-[10px] px-[22px] bg-[#FFFFFF]/50 text-[12px] text-[#FFFFFF] mt-[30px] md:mt-[52px]">
                Read more
              </button>
            </div>
          </div>
          <div className="z-[1] bg-[url(./assets/blog2.png)] my-[28px] md:my-0 pt-[75px] pb-[55px] w-auto md:w-[339px] bg-no-repeat bg-cover bg-center relative px-[44px]">
            <div className="absolute top-0 left-0 bg-black/60 h-[100%] w-[100%] z-[-1]"></div>

            <p className="text-[#FFFFFF] text-[24px] font-bold text-center md:text-start w-auto md:w-[249px]">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="py-[10px] px-[22px] bg-[#FFFFFF]/50 text-[12px] text-[#FFFFFF] mt-[30px] md:mt-[52px]">
                Read more
              </button>
            </div>
          </div>
          <div className="z-[1] bg-[url(./assets/blog3.png)] pt-[75px] pb-[55px] w-auto md:w-[339px] bg-no-repeat bg-cover bg-center relative px-[44px]">
            <div className="absolute top-0 left-0 bg-black/60 h-[100%] w-[100%] z-[-1]"></div>

            <p className="text-[#FFFFFF] text-[24px] font-bold text-center md:text-start w-auto md:w-[249px]">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="py-[10px] px-[22px] bg-[#FFFFFF]/50 text-[12px] text-[#FFFFFF] mt-[30px] md:mt-[52px]">
                Read more
              </button>
            </div>
          </div>
        </Flex>
        <Flex className="flex justify-end items-center mt-[29px]">
          <p className="text-[16px] text-black font-bold">
            MORE FROM THE BLLOG
          </p>
          <IoIosArrowForward className="text-[18px] font-bold" />
        </Flex>
      </Container>
    </div>
  );
};

export default Blog;
