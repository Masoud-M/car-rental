import React from "react";
import Navbar from "../components/navbar/Navbar";
import BgHero from "../components/bghero/BgHero";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";
import BookBanner from "../components/bookbanner/BookBanner";

const page = () => {
  return (
    <div>
      <Navbar />
      <BgHero pagename="Testimonials" />
      <Testimonials />
      <BookBanner />
      <Footer />
    </div>
  );
};

export default page;
