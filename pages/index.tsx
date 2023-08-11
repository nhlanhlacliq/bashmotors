import type { NextPage } from "next";
import HeaderSection from "../components/header-section";
import BrandsSection from "../components/brands-section";
import ServicesSection from "../components/services-section";
import ContactSection from "../components/contact-section";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-[667px] overflow-hidden flex flex-col py-[38px] px-[17px] box-border items-start justify-start gap-[38px] bg-[url(/home@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-base text-white font-rubik-one">
      <HeaderSection />
      <BrandsSection />
      <div className="self-stretch relative tracking-[0.22em]">
        Jaguar Land Rover Specialist
      </div>
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Home;
