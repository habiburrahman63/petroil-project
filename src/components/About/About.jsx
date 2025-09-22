import React from "react";
import Flex from "../Layout/Flex";
import AboutImge from "../../assets/about.png";
import Container from "../Layout/Container";

const About = () => {
  return (
    <div className="py-[136px] bg-[#F0F0F0]">
      <Container>
        <Flex>
          <div className="bg-red-500 py-[30px] md:py-[100px] md:px-[75px]">
            <p className="text-[36px] font-bold text-[#FFFFFF]  text-center md:w-[221px] ">
              Learn more about our company
            </p>
          </div>
          <div className="relative">
            <img className="w-[100%]" src={AboutImge} alt="About" />

            <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-white ">
              <p className="py-[13px] px-[30px] text-[#F40404] text-[16px] font-semibold">
                Learn More
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default About;
