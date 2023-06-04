"use client";

import Image from "next/image";
import HeroBg from "../../../public/Images/hero-bg.png";
import MainCar from "../../../public/Images/main-car.png";
const Hero = () => {
  return (
    <div>
      <Image className=" absolute top-0 right-0 -z-10" src={HeroBg} alt="/" />
      <div className="flex flex-row  justify-between w-[90%] lg:w-[65%] h-screen mx-auto items-center relative">
        <div className=" flex flex-col w-[500px] z-10 justify-center items-center text-center lg:text-start lg:items-start lg:justify-start mx-auto lg:mx-0">
          <h4 className="text-[22px] font-bold">Plan your trip now</h4>
          <h1 className="text-[56px]/[55px] font-bold mt-[10px] mb-[23px]">
            Save <span className="text-[#ff4d30] ">big</span> with our car
            rental
          </h1>
          <p className="text-[#706f7b] text-[16px] mb-[40px]">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="flex md:flex md:flex-row md:justify-start">
            <button className=" bg-[#ff4d30] text-white shadow-lg text-lg font-semibold px-[26px] py-[10px]  rounded-md hover:bg-[#a83220] transition">
              Book Ride
            </button>
            <button className=" bg-black text-white hover:text-black shadow-lg text-lg font-semibold px-[26px] py-[10px] ml-5  rounded-md hover:bg-transparent transition border-[2px] border-black">
              Learn More &gt;
            </button>
          </div>
        </div>

        <Image
          className=" hidden lg:block w-[65%] absolute right-0"
          src={MainCar}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
