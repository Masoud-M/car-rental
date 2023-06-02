"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const menuStyle =
    " text-3xl font-semibold hover:cursor-pointer transition hover:text-[#ff4d30]";
  const menuLgStyle =
    " text-lg font-semibold hover:cursor-pointer transition hover:text-[#ff4d30] z-[99]";
  return (
    <nav>
      {/* small screens */}
      <div className="lg:hidden bg-transparent absolute left-0 right-0 top-0 z-[99] flex flex-row px-5 py-8 justify-between items-center">
        <div>
          {!nav ? <Image className="w-[145px]" src={Logo} alt="/" /> : <></>}
        </div>
        {!nav ? (
          <AiOutlineMenu
            onClick={handleNav}
            size={32}
            className="absolute top-8 right-4 z-[99] hover:text-[#ff4d30] font-bold transition lg:hidden "
          />
        ) : (
          <AiOutlineClose
            onClick={handleNav}
            size={32}
            className="absolute top-8 right-4 z-[99] hover:text-[#ff4d30] transition lg:hidden "
          />
        )}

        {nav ? (
          <ul className=" absolute top-0 bottom-0 right-0 left-0 bg-white w-full h-screen flex flex-col items-center justify-center gap-8 ">
            <li className={menuStyle}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={menuStyle}>
              <Link href={"/about"}>About</Link>
            </li>
            <li className={menuStyle}>
              <Link href={"/models"}>Vehicle Models</Link>
            </li>
            <li className={menuStyle}>Testimonials</li>
            <li className={menuStyle}>Our Team</li>
            <li className={menuStyle}>Contact</li>
          </ul>
        ) : (
          ""
        )}
      </div>

      {/* large screens */}
      <div className="hidden lg:flex z-[99] max-w-[67%] mx-auto py-8 items-center justify-between">
        <Image className="w-[145px]" src={Logo} alt="/" />

        <ul className="hidden 2xl:flex gap-6 ">
          <li className={menuLgStyle}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={menuLgStyle}>
            <Link href={"/about"}>About</Link>
          </li>
          <li className={menuLgStyle}>
            <Link href={"/models"}>Vehicle Models</Link>
          </li>
          <li className={menuLgStyle}>Testimonials</li>
          <li className={menuLgStyle}>Our Team</li>
          <li className={menuLgStyle}>Contact</li>
        </ul>

        <div className="flex items-center">
          <span className={menuLgStyle}>Sing In</span>

          <button className=" bg-[#ff4d30] text-white shadow-lg text-lg font-semibold px-[26px] py-[10px] ml-5  rounded-md hover:bg-[#a83220] transition z-[99]">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
