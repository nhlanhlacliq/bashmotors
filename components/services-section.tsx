import type { NextPage } from "next";

const ServicesSection: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center text-center text-base text-white font-rubik-one">
      <div className="w-full h-[34px] flex flex-row py-0 px-[19px] box-border items-center justify-between opacity-[0.9] min-w-[249px] max-w-[480px] min-h-[34px]">
        <div className="relative tracking-[0.22em]">Service</div>
        <div className="relative tracking-[0.22em] inline-block w-[27px] h-[25px] shrink-0">
          |
        </div>
        <div className="relative tracking-[0.22em]">Repair</div>
      </div>
    </div>
  );
};

export default ServicesSection;
