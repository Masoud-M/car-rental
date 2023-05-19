"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Logo from "./logo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const menuStyle =
    " text-3xl font-semibold hover:cursor-pointer transition hover:text-[#ff4d30]";
  return (
    <nav>
      {/* small screens */}
      <div className="lg:hidden flex flex-row px-5 py-8 justify-between items-center">
        <div>
          {!nav ? <Image className="w-[145px]" src={Logo} alt="/" /> : <></>}
        </div>
        {!nav ? (
          <AiOutlineMenu
            onClick={handleNav}
            size={30}
            className="fixed top-4 right-4 z-[99] lg:hidden "
          />
        ) : (
          <AiOutlineClose
            onClick={handleNav}
            size={30}
            className="fixed top-4 right-4 z-[99] lg:hidden "
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
      <div className="hidden lg:block">
        <Image className="w-[145px]" src={Logo} alt="/" />

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Vehicle Models</li>
          <li>Testimonials</li>
          <li>Our Team</li>
          <li>Contact</li>
        </ul>

        <div>
          <button>Sing In</button>
          <button>Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
