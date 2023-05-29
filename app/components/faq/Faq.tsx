"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Faq = () => {
  const [activeQ, setActiveQ] = useState<string>("q1");

  const openQ = (id: string) => {
    setActiveQ(activeQ === id ? " " : id);
  };

  const getClassQuestion = (id: string) => {
    return activeQ === id ? activeQuestionStyle : " ";
  };

  const getClassAnswer = (id: string) => {
    return activeQ === id ? activeAnswerStyle : " hidden";
  };

  const activeQuestionStyle =
    " bg-[#ff4d30] shadow-[0_10px_15px_0_rgba(255,83,48,.35)] text-white";
  const activeAnswerStyle = " block ";

  return (
    <div className="faq-bg py-[100px]">
      <div className="w-[90%] lg:w-[65%] mx-auto flex flex-col  items-center justify-center">
        <div className="flex flex-col items-center justify-center  text-center">
          <h5 className="font-bold text-[22px]">FAQ</h5>
          <h1 className="font-bold text-[42px] mb-[17px]">
            Frequently Asked Questions
          </h1>
          <p className="text-[#706f7b]">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>

        <div className="flex flex-col shadow-lg bg-white items-center mt-[70px] ">
          <div className="flex w-full sm:w-[800px]  flex-col  mx-auto">
            <div
              id="q1"
              onClick={() => openQ("q1")}
              className={` flex justify-between items-center px-[45px] py-[18px] transition duration-{400} ease-in-out shadow-[0_3px_6px_0_rgba(0,0,0,0.1)] cursor-pointer ${getClassQuestion(
                "q1"
              )}`}
            >
              <p className="text-[18px] font-semibold">
                1. What is special about comparing rental car deals?
              </p>

              <FaAngleDown size={20} />
            </div>
            <div
              id="q1"
              onClick={() => openQ("q1")}
              className={` max-h-[200px] px-[45px] py-[28px] transition duration-{400} ease-in-out overflow-hidden cursor-pointer ${getClassAnswer(
                "q1"
              )}`}
            >
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </div>
          </div>

          <div className="flex w-full sm:w-[800px]  flex-col  mx-auto">
            <div
              id="q2"
              onClick={() => openQ("q2")}
              className={` flex justify-between items-center px-[45px] py-[18px] transition duration-{400} ease-in-out shadow-[0_3px_6px_0_rgba(0,0,0,0.1)] cursor-pointer ${getClassQuestion(
                "q2"
              )}`}
            >
              <p className="text-[18px] font-semibold">
                2. How do I find the car rental deals?
              </p>

              <FaAngleDown size={20} />
            </div>
            <div
              id="q2"
              onClick={() => openQ("q2")}
              className={` max-h-[200px] px-[45px] py-[28px] transition duration-{400} ease-in-out overflow-hidden cursor-pointer ${getClassAnswer(
                "q2"
              )}`}
            >
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </div>
          </div>
          <div className="flex w-full sm:w-[800px]  flex-col  mx-auto">
            <div
              id="q3"
              onClick={() => openQ("q3")}
              className={`flex  justify-between px-[45px] py-[18px] transition duration-{400} ease-in-out  shadow-[0_3px_6px_0_rgba(0,0,0,0.1)] cursor-pointer ${getClassQuestion(
                "q3"
              )}`}
            >
              <p className="text-[18px] font-semibold">
                3. How do I find such low rental car prices?
              </p>

              <FaAngleDown size={20} />
            </div>
            <div
              id="q3"
              onClick={() => openQ("q3")}
              className={` max-h-[200px] px-[45px] py-[28px] transition duration-{400} ease-in-out overflow-hidden cursor-pointer ${getClassAnswer(
                "q3"
              )}`}
            >
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
