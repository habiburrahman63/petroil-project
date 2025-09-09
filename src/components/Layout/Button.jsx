import React from "react";

const Button = ({ children, className}) => {
  return <button className={`py-[13px] px-[40px] bg-red-500 text-[#ffffff] text-[16px] font-bold ${className}`}>{children}</button>;
};

export default Button;
