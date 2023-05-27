import Image from "next/image";
import GoogleApp from "../../../public/download/googleapp.svg";
import AppStore from "../../../public/download/appstore.svg";

const Download = () => {
  return (
    <div className="download-bg w-full py-[100px] h-auto bg-[#f8f8f8]">
      <div className="w-[90%] lg:w-[65%] mx-auto max-w-[1330px]">
        <div className="flex flex-col gap-[20px] max-w-[550px] text-left">
          <h1 className="font-bold text-[42px]">
            Download our app to get most out of it
          </h1>
          <p className="text-[#706f7b]">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex gap-[30px] mt-[20px]">
            <Image className="cursor-pointer" alt="/" src={GoogleApp} />
            <Image className="cursor-pointer" alt="/" src={AppStore} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
