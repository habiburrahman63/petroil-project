import React from "react";
import Container from "../Layout/Container";
import Flex from "../Layout/Flex";

const Supplier = () => {
  return (
    <div className="pt-[78px] pb-[100px]">
      <Container>
        <Flex className="items-center justify-between">
          <p className="text-[30px] md:text-[48px] font-bold w-auto text-center md:text-start md:w-[289px] text-[#000000]">
            The biggest supplier on the country
          </p>
          <p className="w-auto text-center md:text-start md:w-[651px] text-[16px] font-normal md:font-medium text-[#6C6C6C] mt-[10px] md:mt-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
        </Flex>
      </Container>
    </div>
  );
};

export default Supplier;
