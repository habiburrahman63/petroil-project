import React, { useState } from "react";
import Container from "../Layout/Container";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navber = () => {
  const [show, setShow] = useState(false);

  const handaleclick = () => {
    console.log("ok cool");
    setShow(!show);
  };

  return (
    <div className="bg-red-500 py-[27px]">
      <Container>
        <div className="hidden md:flex justify-between items-center">
          <div>
            <img src={logo} alt="logo" />
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

        <div className="flex items-center justify-between md:hidden">
          <div>
            <img className="w-[150px]" src={logo} alt="logo" />
          </div>
          <div>
            {show ? (
              <div className="absolute top-[150px] left-0 w-[100%] bg-red-500 z-[999999] py-[40px]">
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
                  <li className="pt-[10px]">
                    <a
                      className="border-2 border-[#fff] py-[8px] px-[32px]  text-center"
                      href="#"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

            {show ? (
              <RxCross1
                className="text-2xl text-white cursor-pointer"
                onClick={() => {
                  setShow(!show);
                }}
              />
            ) : (
              <FaBars
                className="text-2xl text-white cursor-pointer"
                onClick={() => {
                  setShow(!show);
                }}
              />
            )}

            {/* <FaBars onClick={handaleclick} className="text-2xl text-white" /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
