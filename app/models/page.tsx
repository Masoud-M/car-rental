import Navbar from "../components/navbar/Navbar";
import CarCard from "../components/carcard/CarCard";
import BookBanner from "../components/bookbanner/BookBanner";
import Footer from "../components/footer/Footer";
import BgHero from "../components/bghero/BgHero";
import Audi from "../../public/Images/cars-big/audi-box.png";
import Golf from "../../public/Images/cars-big/golf6-box.png";
import Toyota from "../../public/Images/cars-big/toyota-box.png";
import Bmw from "../../public/Images/cars-big/bmw-box.png";
import Mercedes from "../../public/Images/cars-big/benz-box.png";
import Passat from "../../public/Images/cars-big/passat-box.png";

const page = () => {
  return (
    <div>
      <Navbar />
      <BgHero pagename="Vehicle Models" />

      <div className="my-[100px] w-[90%] lg:w-[65%] mx-auto ">
        <div className="w-fit mx-auto items-center justify-center gap-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CarCard
            img={Audi}
            name="Audi A1"
            price="45"
            brand="Audi"
            passenger="4/5"
            transmission="Manual"
            fuel="Diesel"
          />
          <CarCard
            img={Golf}
            name="Golf 6"
            price="37"
            brand="VW"
            passenger="4/5"
            transmission="Manual"
            fuel="Diesel"
          />
          <CarCard
            img={Toyota}
            name="Toyota"
            price="30"
            brand="Camry"
            passenger="4/5"
            transmission="Manual"
            fuel="Diesel"
          />
          <CarCard
            img={Bmw}
            name="BMW 320"
            price="35"
            brand="ModernLine"
            passenger="4/5"
            transmission="Manual"
            fuel="Diesel"
          />
          <CarCard
            img={Mercedes}
            name="Mercedes"
            price="50"
            brand="Benz GLK"
            passenger="4/5"
            transmission="Manual"
            fuel="Diesel"
          />
          <CarCard
            img={Passat}
            name="VW Passat"
            price="25"
            brand="CC"
            passenger="4/5"
            transmission="Manual"
            fuel="Diesel"
          />
        </div>
      </div>
      <BookBanner />
      <Footer />
    </div>
  );
};

export default page;
