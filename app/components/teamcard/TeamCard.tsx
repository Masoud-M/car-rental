import Image, { StaticImageData } from "next/image";

interface TeamCardProp {
  img: StaticImageData;
  name: string;
  job: string;
}

const TeamCard: React.FC<TeamCardProp> = ({ img, name, job }) => {
  return (
    <div className="w-[330px] shadow-xl text-center">
      <div className="bg-[#f6f6f6] w-full h-auto">
        <Image src={img} alt="/" />
      </div>
      <div className="flex flex-col items-center justify-center text-center p-[30px]">
        <h3 className="text-[22px] font-bold">{name}</h3>
        <p className="text-[#777]">{job}</p>
      </div>
    </div>
  );
};

export default TeamCard;
