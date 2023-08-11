import type { NextPage } from "next";

const ContactSection: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[38px] text-left text-sm text-white font-rubik-one">
      <div className="w-[250px] flex flex-row items-center justify-start gap-[38px]">
        <img
          className="relative w-8 h-[28.45px] overflow-hidden shrink-0"
          alt=""
          src="/iconphoneold-phone.svg"
        />
        <div className="relative tracking-[0.22em] inline-block w-[140px] shrink-0 opacity-[0.8]">
          081 410 4401
        </div>
      </div>
      <div className="h-[68px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[38px]">
        <img
          className="relative w-8 h-[28.35px] opacity-[0.8]"
          alt=""
          src="/iconhomehome.svg"
        />
        <div className="relative tracking-[0.22em] inline-block w-[178px] shrink-0 opacity-[0.8]">
          <p className="m-0">6807 Mount Kenya Street</p>
          <p className="m-0">Clayville, Ext 45</p>
          <p className="m-0">Midrand</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
