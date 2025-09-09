import React from "react";
import Container from "../Layout/Container";
import { GiTeapotLeaves } from "react-icons/gi";
import Flex from "../Layout/Flex";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="pt-[149px] pb-[170px] bg-[#1F1F1F]">
        <Container>
          <Flex className=" justify-between">
            <div className="w-[334px]">
              <h1 className="flex items-center gap-[5px] text-[36px] font-black text-[#FFFFFF] mb-[33px]">
                <GiTeapotLeaves />
                PETROIL
              </h1>

              <p className="flex items-center gap-[5px] text-[14px] font-normal text-[#FFFFFF] mb-[15px]">
                <span>
                  <MdEmail />
                </span>
                mail@yourcompany.com
              </p>
              <p className="flex items-center gap-[5px] text-[14px] font-normal text-[#FFFFFF] mb-[15px]">
                <span>
                  <FaPhoneAlt />
                </span>
                +896 120 5889 (Toll free)
              </p>
              <p className="flex items-center gap-[5px] text-[14px] font-normal text-[#FFFFFF] mb-[34px]">
                <span>
                  <FaLocationDot />
                </span>
                101 Baker Street, New York, USA, 12345
              </p>
              <Flex className="gap-[12px]">
                <FaFacebookF className="text-[20px] font-black text-[#FFFFFF] bg-red-500 rounded-[100%] p-[4px]" />
                <FaTwitter className="text-[20px] font-black text-[#FFFFFF] bg-red-500 rounded-[100%] p-[4px]" />
                <FaLinkedin className="text-[20px] font-black text-[#FFFFFF] bg-red-500 rounded-[100%] p-[4px]" />
                <FaInstagramSquare className="text-[20px] font-black text-[#FFFFFF] bg-red-500 rounded-[100%] p-[4px]" />
              </Flex>
            </div>

            <ul>
              <li className="text-[16px] font-bold text-[#FFFFFF] mb-[21px]">
                Company
              </li>
              <li className="text-[16px] font-normal text-[#FFFFFF] mb-[15px]">
                Home
              </li>
              <li className="text-[16px] font-normal text-[#FFFFFF] mb-[15px]">
                About
              </li>
              <li className="text-[16px] font-normal text-[#FFFFFF] mb-[15px]">
                Services
              </li>
              <li className="text-[16px] font-normal text-[#FFFFFF]">
                Gallery
              </li>
            </ul>
            <ul>
              <li className="text-[16px] font-bold text-[#FFFFFF] mb-[21px]">
                Others
              </li>
              <li className="text-[16px] font-normal text-[#FFFFFF] mb-[15px]">
                Blog
              </li>
              <li className="text-[16px] font-normal text-[#FFFFFF] mb-[15px]">
                Contact
              </li>
              <li className="text-[16px] font-normal text-[#FFFFFF] mb-[15px]">
                Terms & Conditions
              </li>
              <li className="text-[16px] font-normal text-[#FFFFFF]">
                Privacy Policy
              </li>
            </ul>

            <div>
              <li className="text-[16px] font-bold text-[#FFFFFF] mb-[21px] list-none">
                Certificate
              </li>
              <Flex className="gap-[10px]">
                <div className="py-[8px] px-[20px] bg-[white] rounded-[8px]">
                  <p className="text-[24px] font-bold text-[#008AD8] leading-none">
                    ISO 88
                  </p>
                  <p className="text-[8px] font-medium text-[#008AD8] leading-none">
                    Environmentally Safe
                  </p>
                </div>
                <div className="py-[8px] px-[20px] bg-[white] rounded-[8px]">
                  <p className="text-[24px] font-bold text-[#008AD8] leading-none">
                    Liquid
                    <span className="text-green-500">Green</span>
                  </p>
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>

      <div className="py-[42px] bg-[#282828]">
        <Container>
          <p className="text-[16px] font-medium text-[#6C6C6C]">
            © Copyright 2024 by AltDesain Studio – All right reserved.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
