import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Plan from "./components/plan/Plan";
import "./globals.css";
import { Nunito } from "next/font/google";
import Booking from "./components/booking/Booking";
import VehicleModels from "./components/vehicleModels/Vehicle-models";
import Banner from "./components/banner/Banner";
import WhyUs from "./components/whyUs/WhyUs";
import Testimonials from "./components/testimonials/Testimonials";
import Faq from "./components/faq/Faq";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";
import AudiA1 from "../public/Images/cars-big/audia1.jpg";
const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Rental",
  description: "Car Rental",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero />
        <Booking />
        <Plan />
        <VehicleModels
          name="Audi A1 S-Line"
          price="45"
          img={AudiA1}
          model="Audi"
          mark="A1"
          year="2012"
          doors="4/5"
          air="Yes"
          transmission="Manual"
          fuel="Gasoline"
        />
        <Banner />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Download />
        <Footer />
        {children}
      </body>
    </html>
  );
}
