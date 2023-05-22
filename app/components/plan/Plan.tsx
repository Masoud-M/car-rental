"use client";

import Image from "next/image";
import Icon1 from "../../../public/plan/icon1.png";
import Icon2 from "../../../public/plan/icon2.png";
import Icon3 from "../../../public/plan/icon3.png";
const Plan = () => {
  return (
    <div>
      <div className=" px-4 lg:px-0 lg:w-[65%] mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h4 className="text-2xl font-bold">Plan your trip now</h4>
          <h1 className="text-5xl/[70px] font-bold ">
            Quick & easy car rental
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-items-center text-center mt-12 mb-[100px]">
          <div className="flex flex-col w-[300px] h-[300px] items-center justify-center justify-items-center">
            <Image src={Icon1} alt="/" />
            <h2 className="font-bold text-[24px] mb-2">Select Car</h2>
            <p className="text-[#706f7b] text-[16px]">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div className="flex flex-col w-[300px] h-[300px] items-center justify-center justify-items-center">
            <Image src={Icon2} alt="/" />
            <h2 className="font-bold text-[24px] mb-2">Contact Operator</h2>
            <p className="text-[#706f7b] text-[16px]">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div className="flex flex-col w-[300px] h-[300px] items-center justify-center justify-items-center ">
            <Image src={Icon3} alt="/" />
            <h2 className="font-bold text-[24px] mb-2">Let's Drive</h2>
            <p className="text-[#706f7b] text-[16px]">
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
