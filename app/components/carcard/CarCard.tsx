import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaCarSide, FaStar } from "react-icons/fa";

interface CarCardProp {
  img: StaticImageData;
  name: string;
  price: string;
  brand: string;
  passenger: string;
  transmission: string;
  fuel: string;
}

const CarCard: React.FC<CarCardProp> = ({
  img,
  name,
  price,
  brand,
  passenger,
  transmission,
  fuel,
}) => {
  const carInfoLeftStyle =
    "flex text-[#777] text-[18px] white-space-no-wrap text-left items-center justify-start";
  const carInfoRightStyle =
    "flex text-[#777] text-[18px] white-space-no-wrap text-right items-center justify-end";
  return (
    <div className=" flex flex-col w-[350px] border-[1px] boreder-[#d5d5d5] rounded-sm">
      <Image className="max-h-[195px] object-cover" alt="/" src={img} />
      <div className="flex flex-col px-[30px] py-[20px]">
        <div className="flex items-center justify-between">
          <div className=" flex flex-col gap-[5px] text-left">
            <p className="text-[24px] font-bold">{name}</p>
            <span className="flex gap-1 text-[#ffc933] text-[14px]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
          </div>
          <div className="flex flex-col text-right">
            <h4 className="text-[28px] font-bold">${price}</h4>
            <p>per day</p>
          </div>
        </div>
        <div className="grid my-[20px] pb-[25px] border-b-[1px] border-b-[#c6c6c6] grid-cols-2 grid-rows-2 gap-x-[7px] gap-y-[20px] ">
          <span className={carInfoLeftStyle}>
            <FaCarSide className="font-extrabold text-black" />
            &nbsp; {brand}
          </span>
          <span className={carInfoRightStyle}>
            {passenger} &nbsp;
            <FaCarSide className="font-extrabold text-black" />
          </span>
          <span className={carInfoLeftStyle}>
            <FaCarSide className="font-extrabold text-black" />
            &nbsp; {transmission}
          </span>
          <span className={carInfoRightStyle}>
            {fuel} &nbsp;
            <FaCarSide className="font-extrabold text-black" />
          </span>
        </div>
        <div className="flex justify-center items-center bg-[#ff4d30] border-[2px] border-[#ff4d30] rounded-sm shadow-{0_10px_15px_0 rgba(255,83,48,.35} hover:shadow-md cursor-pointer text-[18px] transition px-[30px] py-[18px]">
          <Link className="text-white foont-bold" href={"/"}>
            Book Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
