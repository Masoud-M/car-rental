import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Plan from "../components/plan/Plan";
import Image from "next/image";
import Bg from "../../public/about-page/about-main.jpg";
import Icon1 from "../../public/about-page/icon1.png";
import Icon2 from "../../public/about-page/icon2.png";
import Icon3 from "../../public/about-page/icon3.png";
import { FaPhoneAlt } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="w-[50%] mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-end gap-[50px] max-w-[900px] my-[100px]">
          <div className="flex flex-1 items-end pb-5">
            <Image
              className=" max-w-[430px] max-h-[430px] lg:max-h-[415px]"
              alt="/"
              src={Bg}
            />
          </div>

          <div className="flex flex-1 flex-col">
            <h4 className="text-[22px] mb-3 font-semibold text-center lg:text-left">
              About Company
            </h4>
            <h1 className="text-[43px]/[50px] font-bold text-center lg:text-left">
              You start the engine and your adventure begins
            </h1>
            <p className="text-[#706f7b] text-[16px] mt-[20px] mb-[40px] text-center lg:text-left">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[40px]">
              <div className="flex flex-col items-center justify-center">
                <Image className="w-[70px]" src={Icon1} alt="/" />
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-[10px] md:pt-[20px]">
                  <span className="text-[46px] font-bold">20</span>
                  <h4 className="text-[#706f7b] font-semibold ">Car Types</h4>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image className="w-[70px]" src={Icon2} alt="/" />
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-[10px] md:pt-[20px]">
                  <span className="text-[46px] font-bold">85</span>
                  <h4 className="text-[#706f7b] font-semibold ">
                    Rental Outlets
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image className="w-[50px]" src={Icon3} alt="/" />
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-[10px] md:pt-[20px]">
                  <span className="text-[46px] font-bold">75</span>
                  <h4 className="text-[#706f7b] font-semibold ">Repair Shop</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Plan />
      <div className="about-bg w-full my-[70px] relative h-[200px]">
        <div className="z-10 bg-[#2d2d2d] opacity-90 absolute right-0 top-0 w-full h-full"></div>
        <div className="w-[90%] lg:w-[65%] mx-auto z-20">
          <div className="flex items-center text-white w-full gap-[50px] h-[200px] ">
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
      <Footer />
    </div>
  );
};

export default page;
