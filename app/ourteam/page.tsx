import React from "react";
import Navbar from "../components/navbar/Navbar";
import BgHero from "../components/bghero/BgHero";
import BookBanner from "../components/bookbanner/BookBanner";
import Footer from "../components/footer/Footer";
import Img1 from "../../public/Images/team/1.png";
import Img2 from "../../public/Images/team/2.png";
import Img3 from "../../public/Images/team/3.png";
import Img4 from "../../public/Images/team/4.png";
import Img5 from "../../public/Images/team/5.png";
import Img6 from "../../public/Images/team/6.png";

import TeamCard from "../components/teamcard/TeamCard";
const page = () => {
  return (
    <div>
      <div>
        <Navbar />
        <BgHero pagename="Our Team" />
        <div className="w-[90%] lg:w-[65%] mx-auto py-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center w-fit gap-[40px] mx-auto">
            <TeamCard img={Img1} name="Luke Miller" job="Salesman" />
            <TeamCard img={Img2} name="Michael Diaz" job="Business Owner" />
            <TeamCard img={Img3} name="Briana Ross" job="Photographer" />
            <TeamCard img={Img4} name="Lauren Rivera" job="Car Detailist" />
            <TeamCard img={Img5} name="Martin Rizz" job="Mechanic" />
            <TeamCard img={Img6} name="Caitlyn Hunt" job="Menager" />
          </div>
        </div>
        <BookBanner />
        <Footer />
      </div>
    </div>
  );
};

export default page;
