import React from "react";

const Container = ({ children }) => {
  return (
    <div className="md:w-[1144px] px-[20px] md:px-0 m-auto font-primary">
      {children}
    </div>
  );
};

export default Container;
