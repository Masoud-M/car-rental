import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Plan from "./components/plan/Plan";
import "./globals.css";
import { Nunito } from "next/font/google";
import Booking from "./components/booking/Booking";
import VehicleModels from "./components/vehicleModels/Vehicle-models";
import Banner from "./components/banner/Banner";

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
      <body className="  overflow-y-scroll">
        <Navbar />
        <Hero />
        <Booking />
        <Plan />
        <VehicleModels />
        <Banner />
        {children}
      </body>
    </html>
  );
}
