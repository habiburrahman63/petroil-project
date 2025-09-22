import React from "react";
import Container from "../Layout/Container";
import Flex from "../Layout/Flex";
import Button from "../Layout/Button";

const Mapp = () => {
  return (
    <>
      <div className="bg-[url('./assets/map.png')] py-[100px] md:py-0  md:h-[450px] w-full bg-no-repeat bg-center bg-cover"></div>

      <div className="py-[47px] bg-red-500">
        <Container>
          <Flex className="items-center justify-between ">
            <p className="md:text-[36px] text-[24px] text-center md:text-start font-bold text-[#FFFFFF]">
              Want to join as member branch in your area?
            </p>
            <div className="flex justify-center mt-[30px] md:mt-0">
              <Button className="text-[16px] font-semibold text-[#FFFFFF] border-2 bg-solid-[#ffffff]">
                CONTACT
              </Button>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Mapp;
