import React from "react";
import AboutImg from "../assets/aboutImg.jpg";

function About() {
  return (
    <div className="w-full h-[90vh] bg-white flex p-20">
      <div className="w-1/2 h-full flex flex-col items-start justify-center pr-6">
        <span className="w-24 h-[2.5px] bg-primaryCol"></span>
        <h2 className="text-black uppercase font-bold text-3xl tracking-wider my-8">
          about us
        </h2>
        <h3 className="text-black/75 text-xl tracking-widest leading-9 pr-2">
          OUR CONSTRUCTION COMPANY HAS BEEN FOUNDED 10 YEARS AGO, AT THE VERY
          PEAK OF THE BUILDING FRENZY IN THE US...
        </h3>
        <p className="text-black/40 text-base mt-3">
          Since then we've built hundreds of commercial, government and private
          buildings and facilities. It may not sound like a lot, but if you
          estimate the manpower, working hours, materials, planning and
          correlating that were all involved in completing each separate
          project, then our productivity is immense!
        </p>
        <button className="uppercase px-8 py-4  bg-primaryCol mt-16 hover:bg-black duration-300 rounded-sm">
          Contact Us
        </button>
      </div>
      <div className="w-1/2 h-full">
        <img className="w-full h-full object-cover" src={AboutImg} alt="" />
      </div>
    </div>
  );
}

export default About;
