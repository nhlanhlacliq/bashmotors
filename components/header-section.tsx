import type { NextPage } from "next";

const HeaderSection: NextPage = () => {
  return (
    <div className="self-stretch h-[115px] flex flex-col items-center justify-center text-center text-5xl text-white font-rubik-one">
      <div className="self-stretch flex flex-row py-0 px-[111px] items-center justify-between">
        <div className="relative w-[229.75px] h-[115px]">
          <div className="absolute top-[37px] left-[72.75px] tracking-[0.22em] inline-block w-[157px] h-[41px]">
            MOTOR’S
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[163.7px] h-[115px] object-cover"
            alt=""
            src="/bmlogo02-1@2x.png"
          />
          <div className="absolute top-[14px] left-[107.91px] tracking-[0.22em] inline-block w-[100px] h-[34px]">
            BASH
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
