import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const BookBanner = () => {
  return (
    <div className="w-full my-[70px] relative h-[200px]">
      <div className="about-bg w-full relative h-full">
        <div className="z-10 bg-[#2d2d2d] opacity-90 absolute right-0 top-0 w-full h-full"></div>
      </div>
      <div className="w-[90%] lg:w-[65%] mx-auto z-20 absolute top-0 right-0 left-0 bottom-0">
        <div className="flex flex-col text-center items-center justify-center text-white w-full gap-[10px] md:flex-row md:text-left md:gap-[50px]  h-[200px] ">
          <h1 className="text-[32px] font-extrabold">
            Book a car by getting in touch with us
          </h1>
          <span className="text-[#ff4d30] text-[27px] items-center  font-extrabold flex gap-[10px] white-space-no-wrap">
            <FaPhoneAlt />
            <h3>(123) 456-7869</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookBanner;
