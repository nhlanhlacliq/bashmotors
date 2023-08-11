import type { NextPage } from "next";

const BrandsSection: NextPage = () => {
  return (
    <div className="self-stretch h-[35px] overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[105px]">
      <img
        className="relative w-16 h-[35px] object-cover"
        alt=""
        src="/pngegg-1@2x.png"
      />
      <img
        className="relative w-[66px] h-[35px] object-cover"
        alt=""
        src="/land-rover-logo-black-2@2x.png"
      />
    </div>
  );
};

export default BrandsSection;
