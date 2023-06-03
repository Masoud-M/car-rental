import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import Icon1 from "../../../public/Images/testimonials/pfp1.jpg";
import Icon2 from "../../../public/Images/testimonials/pfp2.jpg";
const Testimonials = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className=" w-[90%] lg:w-[65%] mx-auto py-[100px] flex flex-col justify-center items-center">
        <div className="flex flex-col max-w-[700px] text-center mx-auto mb-[50px]">
          <h4 className="text-[22px] font-semibold">Reviewed by People</h4>
          <h1 className="text-[42px] font-bold mb-[14px]">
            Client's Testimonials
          </h1>
          <p className="text-[#706f7b] text-[16px]">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[50px] md:gap-[30px] justify-center  flex-wrap">
          <div className="flex flex-col max-w-[500px] bg-[#fff] shadow-lg  px-[30px] py-[50px] text-justify">
            <p className="text-[22px] font-semibold">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className=" flex mt-[30px] items-center gap-[20px] relative">
              <FaQuoteRight className="absolute text-[#ff4d30] text-[62px] bottom-[5px] right-[5px]" />
              <Image
                className="w-[70px] h-[70px] rounded-full"
                alt="/"
                src={Icon1}
              />
              <div className="flex flex-col  ">
                <p className="text-[18px] font-semibold">Parry Hotter</p>
                <p className="text-[16px]">Belgrade</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-[500px] bg-[#fff] shadow-lg  px-[30px] py-[50px] text-justify">
            <p className="text-[22px] font-semibold">
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </p>
            <div className=" flex mt-[30px] items-center gap-[20px] relative">
              <FaQuoteRight className="absolute text-[#ff4d30] text-[62px] bottom-[5px] right-[5px]" />
              <Image
                className="w-[70px] h-[70px] rounded-full"
                alt="/"
                src={Icon2}
              />
              <div className="flex flex-col  ">
                <p className="text-[18px] font-semibold">Ron Rizzly</p>
                <p className="text-[16px]">Novi Sad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
