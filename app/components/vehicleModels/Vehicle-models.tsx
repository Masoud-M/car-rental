"use client";
import { useRef, useState } from "react";
import { CarDataApi } from "../CarData";

import Golf6 from "../../../public/Images/cars-big/golf6.jpg";
import AudiA1 from "../../../public/Images/cars-big/AudiA1.jpg";
import Toyota from "../../../public/Images/cars-big/Toyota.jpg";
import Bmw320 from "../../../public/Images/cars-big/Bmw320.jpg";
import Benz from "../../../public/Images/cars-big/Benz.jpg";
import Passat from "../../../public/Images/cars-big/Passat.jpg";

import Image, { StaticImageData } from "next/image";
interface CarInfoProp {
  name: string;
  price: string;
  img: StaticImageData;
  model: string;
  mark: string;
  year: string;
  doors: string;
  air: string;
  transmission: string;
  fuel: string;
}

const VehicleModels: React.FC<CarInfoProp> = () => {
  const info = CarDataApi;
  const [activeCar, setActiveCar] = useState({
    name: "Audi A1 S-Line",
    price: "45",
    img: AudiA1,
    model: "Audi",
    mark: "A1",
    year: "2012",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
  });

  const activeCarRef = useRef();

  const gridMainStyle = "grid grid-cols-1 grid-flow-row box-border ";
  const gridChildStyle =
    "text-[17px] font-semibold px-[9px] py-[5px] grid grid-cols-2 grid-flow-col text-center border-r-2 border-l-2 border-b-2 border-[#706f7b]";
  const gridSpanStyle = "border-r-2 border-[#706f7b]";
  console.log(activeCarRef.current);
  return (
    <div className="w-[90%] lg:w-[65%] mx-auto my-[100px]">
      <div className="flex flex-col justify-center items-center text-center max-w-[60%] mx-auto mb-20">
        <h2 className="text-3xl font-semibold">Vehicle Models</h2>
        <h1 className="text-5xl font-bold mt-4">Our rental fleet</h1>
        <p className="text-[16px] text-[#706f7b] my-4">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>

      <div className="flex justify-between box-border gap-4 flex-col lg:flex-row ">
        {/* car menu */}
        <div className=" flex flex-col gap-2 box-border lg:max-w-[400px]">
          {info.map((item) => {
            return (
              <div
                key={item.name}
                id={item.name}
                ref={activeCarRef}
                onClick={() => {
                  setActiveCar((prev) => ({
                    ...prev,
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    model: item.model,
                    mark: item.mark,
                    year: item.year,
                    doors: item.doors,
                    air: item.air,
                    transmission: item.transmission,
                    fuel: item.fuel,
                    bg: " bg-[#ff4d30] text-white",
                  }));
                }}
                className={`text-[1.5rem] font-semibold px-[20px] rounded-md bg-[#e9e9e9] hover:cursor-pointer hover:bg-[#ff4d30]  hover:text-white transition py-[12px] `}
              >
                <h1>{item.name}</h1>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col justify-between items-center  md:flex-row lg:gap-[11rem] ">
          {/* image */}
          <div className=" max-w-[500px] ">
            <Image className=" block w-full" src={activeCar.img} alt="/" />
          </div>

          {/* car info */}
          <div className=" h-[400px] w-[250px]">
            <div className="flex flex-col w-full h-full justify-center">
              <div className="bg-[#ff4d30] flex justify-center items-center">
                <span className="text-[28px] text-white font-bold ">
                  ${activeCar.price}
                </span>
                <span className="text-white text-[18px] font-semibold px-5 py-1">
                  &#47; rent per day
                </span>
              </div>
              <div className={gridMainStyle}>
                <div className={gridChildStyle}>
                  <span className={gridSpanStyle}>Model</span>
                  <span>{activeCar.model}</span>
                </div>
                <div className={gridChildStyle}>
                  <span className={gridSpanStyle}>Mark</span>
                  <span>{activeCar.mark}</span>
                </div>
                <div className={gridChildStyle}>
                  <span className={gridSpanStyle}>Year</span>
                  <span>{activeCar.year}</span>
                </div>
                <div className={gridChildStyle}>
                  <span className={gridSpanStyle}>Doors</span>
                  <span>{activeCar.doors}</span>
                </div>
                <div className={gridChildStyle}>
                  <span className={gridSpanStyle}>AC</span>
                  <span>{activeCar.air}</span>
                </div>
                <div className={gridChildStyle}>
                  <span className={gridSpanStyle}>Transmission</span>
                  <span>{activeCar.transmission}</span>
                </div>
                <div className={gridChildStyle}>
                  <span className={gridSpanStyle}>Fuel</span>
                  <span>{activeCar.fuel}</span>
                </div>
              </div>
              <div className="w-full">
                <button className="w-full bg-[#ff4d30] p-[10px] text-[20px] text-white flex items-center justify-center hover:bg-[#b33521] transition mt-[14px] shadow-lg">
                  RESERVE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleModels;
