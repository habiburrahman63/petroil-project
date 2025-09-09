import React from "react";
import Container from "../Layout/Container";
import Flex from "../Layout/Flex";
import Button from "../Layout/Button";

const Mapp = () => {
  return (
    <>
      <div className="bg-[url('./assets/map.png')] h-[450px] w-full bg-no-repeat bg-center bg-cover"></div>

      <div className="py-[47px] bg-red-500">
        <Container>
          <Flex className="items-center justify-between ">
            <p className="text-[36px] font-bold text-[#FFFFFF]">
              Want to join as member branch in your area?
            </p>
            <Button className="text-[16px] font-semibold text-[#FFFFFF] border-2 bg-solid-[#ffffff]">
              CONTACT
            </Button>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Mapp;
