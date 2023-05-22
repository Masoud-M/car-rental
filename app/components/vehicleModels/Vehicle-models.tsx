"use client";
import { useState } from "react";
import { CarDataApi } from "../CarData";

import Golf6 from "../../../public/cars-big/golf6.jpg";
import AudiA1 from "../../../public/cars-big/AudiA1.jpg";
import Toyota from "../../../public/cars-big/Toyota.jpg";
import Bmw320 from "../../../public/cars-big/Bmw320.jpg";
import Benz from "../../../public/cars-big/Benz.jpg";
import Passat from "../../../public/cars-big/Passat.jpg";

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
    name: "VW Golf 6",
    price: "37",
    img: Golf6,
    model: "Golf 6",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  });

  return (
    <div>
      <div className="w-[90%] lg:w-[65%] mx-auto">
        <div className="flex flex-col justify-center items-center text-center max-w-[60%] mx-auto">
          <h2 className="text-3xl font-semibold">Vehicle Models</h2>
          <h1 className="text-5xl font-bold mt-4">Our rental fleet</h1>
          <p className="text-[16px] text-[#706f7b] my-4">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>

        <div className="grid ">
          {/* car menu */}
          <div>
            {info.map((item) => {
              return (
                <div
                  key={item.name}
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
                    }));
                  }}
                  className=" text-[22px] font-semibold px-5 py-3 bg-[#e9e9e9] mt-4 mb-2  rounded-md hover:cursor-pointer hover:bg-[#ff4d30] hover:text-white transition"
                >
                  <h1>{item.name}</h1>
                </div>
              );
            })}
          </div>

          {/* image */}
          <div>
            <Image className="max-w-[500px]" src={activeCar.img} alt="/" />
          </div>

          {/* car info */}
          <div>
            <div className="flex flex-col">
              <div>
                <h1>
                  <span>${activeCar.price}</span>/ rent per day
                </h1>
              </div>
              <div>
                <div>
                  <span>Model</span>
                  <span>{activeCar.model}</span>
                </div>
                <div>
                  <span>Mark</span>
                  <span>{activeCar.mark}</span>
                </div>
                <div>
                  <span>Year</span>
                  <span>{activeCar.year}</span>
                </div>
                <div>
                  <span>Doors</span>
                  <span>{activeCar.doors}</span>
                </div>
                <div>
                  <span>AC</span>
                  <span>{activeCar.air}</span>
                </div>
                <div>
                  <span>Transmission</span>
                  <span>{activeCar.transmission}</span>
                </div>
                <div>
                  <span>Fuel</span>
                  <span>{activeCar.fuel}</span>
                </div>
              </div>
              <div>
                <button>RESERVE NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleModels;
