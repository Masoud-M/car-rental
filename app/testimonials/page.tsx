import React from "react";
import Navbar from "../components/navbar/Navbar";
import BgHero from "../components/bghero/BgHero";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";
import Banner from "../components/banner/Banner";
import Booking from "../components/booking/Booking";
import BookBanner from "../components/bookbanner/BookBanner";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
        <BgHero pagename="Testimonials" />
        <div></div>
        <Testimonials />
        <BookBanner />
        <Footer />
      </div>
    </div>
  );
};

export default page;
