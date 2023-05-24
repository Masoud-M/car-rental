const Banner = () => {
  return (
    <div className="my-[80px]">
      <div className="py-[60px] px-[25px] flex flex-col w-full bg-[#2d2d2d] items-center justify-center text-center">
        <h1 className="text-white font-bold text-[40px] md:text-[56px]">
          Save big with our cheap car rental!
        </h1>
        <h3 className="mt-4 text-white  text-[18px] md:text-[24px]">
          Top Airports. Local Suppliers.{" "}
          <span className="text-[#ff4d30] font-semibold">24/7</span> Support.
        </h3>
      </div>
    </div>
  );
};

export default Banner;
