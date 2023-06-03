import { BsFillTelephoneFill } from "react-icons/bs";
import BgHero from "../components/bghero/BgHero";
import BookBanner from "../components/bookbanner/BookBanner";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { HiMail } from "react-icons/hi";
import { IoIosPin } from "react-icons/io";
import { FaEnvelopeOpenText } from "react-icons/fa";
const page = () => {
  return (
    <div>
      <Navbar />
      <BgHero pagename="contact" />
      <div className="w-[90%] lg:w-[65%] mx-auto my-[100px]">
        <div className="bg-contact grid w-fit items-center justify-center mx-auto grid-cols-1 md:grid-cols-2 gap-[30px]">
          <div className="flex flex-col gap-[10px] max-w-[410px] text-center md:text-left md:items-start items-center justify-center mb-[20px]">
            <h1 className="text-[42px] font-extrabold mb-[20px]">
              Need additional information?
            </h1>
            <p className="text-[#706f7b] mb-[20px]">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <div className="flex items-center  font-semibold mb-[5px]">
              <BsFillTelephoneFill size={16} className="mr-[15px]" />
              <p>(123)-456-789</p>
            </div>
            <div className="flex items-center font-semibold mb-[5px]">
              <HiMail size={20} className="mr-[15px]" />
              <p>carrental@gmail.com</p>
            </div>
            <div className="flex items-center font-semibold mb-[5px]">
              <IoIosPin size={20} className="mr-[15px]" />
              <p>Belgrade, Serbia</p>
            </div>
          </div>
          <div className="flex flex-col">
            <form className="flex flex-col">
              <span className="font-semibold mb-[10px]">
                Full Name<b className="text-[#ff4d30]">*</b>
              </span>
              <input
                className="bg-[#f2f2f2] border-none outline-none px-[30px] py-[19px] mb-[23px]"
                type="text"
                placeholder="Your Name"
              />
              <span className="font-semibold mb-[10px]">
                Email<b className="text-[#ff4d30]">*</b>
              </span>
              <input
                className="bg-[#f2f2f2] border-none outline-none px-[30px] py-[19px] mb-[23px]"
                type="email"
                placeholder="youremail@example.com"
              />
              <span className="font-semibold mb-[10px]">
                Tell us about it<b className="text-[#ff4d30]">*</b>
              </span>
              <textarea
                className="bg-[#f2f2f2] border-none outline-none px-[30px] py-[19px] mb-[25px] h-[180px]"
                placeholder="Write Here..."
              ></textarea>
              <button
                className="flex flex-row align-middle items-center justify-center bg-[#ff4d30] text-[#fff] font-bold text-[18px] rounded-md border-[2px] border-[#ff4d30] cursor-pointer transition px-[30px] py-[18px] shadow-lg hover:shadow-[0_10px_15px_0_rgba(255,83,48,.35)]"
                type="submit"
              >
                <FaEnvelopeOpenText className="mr-3" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <BookBanner />
      <Footer />
    </div>
  );
};

export default page;
