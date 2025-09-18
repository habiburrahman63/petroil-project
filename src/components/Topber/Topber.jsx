import React from "react";
import { IoIosMailUnread } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Container from "../Layout/Container";

const Topber = () => {
  return (
    <div className="py-[15px] bg-[#282828] border-b-5 border-[#FFB800] font-primary">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <div className="md:flex gap-[49px]">
              <div className="flex items-center gap-[5px]">
                <h1 className="text-[17px] text-white">
                  <IoIosMailUnread />
                </h1>
                <h2 className="text-[12px] font-normal text-white">
                  mail@yourcompany.com
                </h2>
              </div>
              <div
                className="relative flex items-center gap-[5px] after:absolute after:conten-[''] after:h-[20px] 
            after:w-[2px] after:left-[-27px] after:top[0] after:bg-[#5C6A92]"
              >
                <h1 className="text-[17px] text-white">
                  <FaPhone />
                </h1>
                <h2 className="text-[12px] font-normal text-white py-[10px] md:py-0">
                  +896 120 5889 (Toll free)
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-[19px] text-[16px] text-white">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topber;
