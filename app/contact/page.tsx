import BgHero from "../components/bghero/BgHero";
import BookBanner from "../components/bookbanner/BookBanner";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <BgHero pagename="contact" />
      <div></div>
      <BookBanner />
      <Footer />
    </div>
  );
};

export default page;
