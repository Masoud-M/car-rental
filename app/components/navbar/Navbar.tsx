"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Logo from "../../../public/logo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const menuStyle =
    " text-3xl font-semibold hover:cursor-pointer transition hover:text-[#ff4d30]";
  const menuLgStyle =
    " text-lg font-semibold hover:cursor-pointer transition hover:text-[#ff4d30]";
  return (
    <nav>
      {/* small screens */}
      <div className="lg:hidden bg-transparent absolute left-0 right-0 top-0 z-50 flex flex-row px-5 py-8 justify-between items-center">
        <div>
          {!nav ? <Image className="w-[145px]" src={Logo} alt="/" /> : <></>}
        </div>
        {!nav ? (
          <AiOutlineMenu
            onClick={handleNav}
            size={30}
            className="fixed top-8 right-4 z-[99] lg:hidden "
          />
        ) : (
          <AiOutlineClose
            onClick={handleNav}
            size={30}
            className="fixed top-8 right-4 z-[99] lg:hidden "
          />
        )}

        {nav ? (
          <ul className=" w-full h-screen flex flex-col items-center justify-center gap-8 ">
            <li className={menuStyle}>Home</li>
            <li className={menuStyle}>About</li>
            <li className={menuStyle}>Vehicle Models</li>
            <li className={menuStyle}>Testimonials</li>
            <li className={menuStyle}>Our Team</li>
            <li className={menuStyle}>Contact</li>
          </ul>
        ) : (
          ""
        )}
      </div>

      {/* large screens */}
      <div className="hidden lg:flex z-50 max-w-[67%] mx-auto   py-8 items-center justify-between  ">
        <Image className="w-[145px]" src={Logo} alt="/" />

        <ul className="hidden 2xl:flex gap-6 ">
          <li className={menuLgStyle}>Home</li>
          <li className={menuLgStyle}>About</li>
          <li className={menuLgStyle}>Vehicle Models</li>
          <li className={menuLgStyle}>Testimonials</li>
          <li className={menuLgStyle}>Our Team</li>
          <li className={menuLgStyle}>Contact</li>
        </ul>

        <div className="flex items-center">
          <span className={menuLgStyle}>Sing In</span>

          <button className=" bg-[#ff4d30] text-white shadow-lg text-lg font-semibold px-[26px] py-[10px] ml-5  rounded-md hover:bg-[#a83220] transition">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
