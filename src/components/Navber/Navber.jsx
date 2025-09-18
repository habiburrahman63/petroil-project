import React from "react";
import Container from "../Layout/Container";
import logo from "../../assets/logo.png";

const Navber = () => {
  return (
    <div className="bg-red-500 py-[27px]">
      <Container>
        <div className="md:flex justify-between items-center">
          <div>
            <img className="w-[192px] m-auto" src={logo} alt="logo" />
          </div>
          <ul className="md:flex items-center gap-[47px] text-white text-[16px] font-semibold text-center">
            <li className="mb-[20px] mt-[20px] md:mb-0 md:mt-0">
              <a href="#">Home</a>
            </li>
            <li className="mb-[20px] md:mb-0 md:mt-0">
              <a href="#">About</a>
            </li>
            <li className="mb-[20px] md:mb-0 md:mt-0">
              <a href="#">Services</a>
            </li>
            <li className="mb-[20px] md:mb-0 md:mt-0">
              <a href="#">Gallery</a>
            </li>
            <li className="mb-[20px] md:mb-0 md:mt-0">
              <a href="#">Blog</a>
            </li>
            <li className="border-2 border-[#fff] py-[13px] px-[32px] text-center">
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
