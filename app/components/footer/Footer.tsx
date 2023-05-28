import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="w-[90%] lg:w-[65%] mx-auto bg-white py-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-[50px] ">
        <div className="flex flex-col justify-start">
          <h1 className="text-[24px] font-bold mb-4">CAR Rental</h1>
          <p className="text-[#706f7b] mb-[30px]">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div className="flex items-center  font-semibold mb-[10px]">
            <BsFillTelephoneFill className="mr-[15px]" />
            <p>(123)-456-789</p>
          </div>
          <div className="flex items-center font-semibold mb-[10px]">
            <HiMail className="mr-[15px]" />
            <p>carrental@gmail.com</p>
          </div>
          <div>Design by Placeholder</div>
        </div>
        <div className="flex flex-col items-start ">
          <h1 className="text-[24px] font-bold mb-4">WORKING HOURS</h1>
          <p className="mb-[10px]">Mon - Fri: 9:00AM - 9:00PM</p>
          <p className="mb-[10px]">Sat: 9:00AM - 19:00PM</p>
          <p className="mb-[10px]">Sun: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
