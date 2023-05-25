import Image from "next/image";
import Bg from "../../../public/whyus/bg.png";
import MainBg from "../../../public/whyus/main.png";
import Icon1 from "../../../public/whyus/icon1.png";
import Icon2 from "../../../public/whyus/icon2.png";
import Icon3 from "../../../public/whyus/icon3.png";

const WhyUs = () => {
  return (
    <div className="whyus-bg py-[100px]">
      <Image className="w-[90%] lg:w-[60%] mx-auto" src={MainBg} alt="/" />

      <div className="w-[90%] lg:w-[65%] mx-auto">
        <div className="flex flex-col gap-[55px] lg:flex-row justify-center items-center mt-[30px] w-full lg:justify-around ">
          <div className="flex flex-col max-w-[500px] lg:text-left justify-center items-center text-center lg:justify-start lg:items-start">
            <h4 className="text-[22px] font-bold mb-[7px]">Why Choose Us</h4>
            <h1 className="text-[42px]/[50px] mb-[20px] font-bold">
              Best valued deals you will ever find
            </h1>
            <p className="text-[16px] text-[#706f7b] mb-[33px]">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <div>
              <button className=" items-center bg-[#ff4d30] border-[2px] border-[#ff4d30] text-[white] font-bold text-[16px] px-[25px] py-[15px] rounded-md hover:bg-[#c43924] hover:border-[#c43924] hover:shadow-lg transition shadow-md">
                Find Details &gt;
              </button>
            </div>
          </div>
          <div className="flex flex-col max-w-[440px] gap-[45px]">
            <div className="flex flex-col sm:flex-row justify-center items-center text-center lg:text-left lg:items-start">
              <Image
                className="w-[110px] h-[110px] mr-[11px]"
                alt="/"
                src={Icon1}
              />
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[24px] font-bold">Cross Country Drive</h2>
                <p className="text-[16px] text-[#706f7b]">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center text-center lg:text-left lg:items-start">
              <Image
                alt="/"
                src={Icon2}
                className="w-[110px] h-[110px] mr-[11px]"
              />
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[24px] font-bold">All Inclusive Pricing</h2>
                <p className="text-[16px] text-[#706f7b]">
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center text-center lg:text-left lg:items-start">
              <Image
                alt="/"
                src={Icon3}
                className="w-[110px] h-[110px] mr-[11px]"
              />
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[24px] font-bold">No Hidden Charges</h2>
                <p className="text-[16px] text-[#706f7b]">
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
