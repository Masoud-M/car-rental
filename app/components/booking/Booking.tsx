"use client";

import { FaCarAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
const Booking = () => {
  const inputSectionStyle = "flex flex-col";
  const titleStyle = "flex items-center";
  const iconStyle = "text-[#ff4d30] mr-4";
  const spanStyle = "text-[20px] font-semibold";
  const inputStyle =
    "mt-3 border-blue-100 border-[1px] px-4 py-2 rounded-md text-[#ababab] font-semibold ";
  return (
    <div>
      <div className="h-auto  p-4 lg:px-0 lg:w-[65%] w-[90%] mx-auto mb-44  rounded-lg shadow-2xl">
        <div className="booking-bg bg-no-repeat bg-cover px-8 py-6 flex flex-col">
          <h2 className="text-[30px] font-bold ">Book a car</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            <div className="flex flex-col ">
              <div className="flex items-center">
                <FaCarAlt size={20} className={iconStyle} />
                <span className={spanStyle}> Select Your Car Type </span>
              </div>

              <select className={inputStyle}>
                <option selected disabled value="Select your car type">
                  Select your car type
                </option>
                <option value="Audi-A1-S-Line">Audi A1 S Line</option>
                <option value="VW-Golf-6">VW Golf 6</option>
                <option value="Toyota-Camry">Toyota Camry</option>
                <option value="BMW-320-ModernLine">BMW 320 ModernLine</option>
                <option value="Mercedes-Benz-GLK">Mercedes Benz GLK</option>
                <option value="VW-Passat-CC">VW Passat CC</option>
              </select>
            </div>

            <div className={inputSectionStyle}>
              <div className={titleStyle}>
                <MdLocationPin size={20} className={iconStyle} />
                <span className={spanStyle}> Pick-up </span>
              </div>

              <select className={inputStyle}>
                <option selected disabled value="Select your car type">
                  Select your pick up location
                </option>
                <option value="Belgrade">Belgrade</option>
                <option value="Novi-Sad">Novi Sad</option>
                <option value="Nis">Nis</option>
                <option value="Kragujevac">Kragujevac</option>
                <option value="Subotica">Subotica</option>
              </select>
            </div>

            <div className={inputSectionStyle}>
              <div className={titleStyle}>
                <MdLocationPin size={20} className={iconStyle} />
                <span className={spanStyle}> Drop-of </span>
              </div>

              <select className={inputStyle}>
                <option selected disabled value="Select your car type">
                  Select your pick up location
                </option>
                <option value="Belgrade">Belgrade</option>
                <option value="Novi-Sad">Novi Sad</option>
                <option value="Nis">Nis</option>
                <option value="Kragujevac">Kragujevac</option>
                <option value="Subotica">Subotica</option>
              </select>
            </div>

            <div className={inputSectionStyle}>
              <div className={titleStyle}>
                <BsFillCalendarDateFill size={20} className={iconStyle} />
                <span className={spanStyle}> Pick-up </span>
              </div>

              <input className={inputStyle} type="date" />
            </div>

            <div className={inputSectionStyle}>
              <div className={titleStyle}>
                <BsFillCalendarDateFill size={20} className={iconStyle} />
                <span className={spanStyle}> Drop-of </span>
              </div>

              <input className={inputStyle} type="date" />
            </div>

            <button className="bg-[#ff4d30] text-white text-[20px] font-semibold h-fit self-end p-[7px] rounded-md shadow-md hover:shadow-xl cursor-pointer transition border-none ">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
