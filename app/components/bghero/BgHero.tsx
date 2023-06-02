import Link from "next/link";

interface BgHeroProps {
  pagename: string;
}

const BgHero: React.FC<BgHeroProps> = ({ pagename }) => {
  return (
    <div className="bg-hero">
      <div className="absolute top-0 right-0 w-full h-full bg-[hsla(0,0%,100%,.92)]"></div>
      <div className="w-[90%] lg:w-[65%] mx-auto">
        <div className="flex flex-col h-[410px] w-full z-[3] relative justify-center">
          <h3 className="text-[36px] font-bold mb-[5px]">{pagename}</h3>
          <p className="font-semibold">
            <Link className="hover:text-[#ff4d30] transition" href={"/"}>
              Home{" "}
            </Link>
            <span>/ {pagename}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BgHero;
