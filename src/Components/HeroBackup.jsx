import React from "react";
import Header from "./Header";
import ContactTop from "./ContactTop";
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";

function Hero() {
  const sliderContent = [
    {
      img: Hero1,
      heading: "discounts",
      para: "Summer discounts for big contruction projects.",
    },
    {
      img: Hero2,
      heading: "projects",
      para: "This year we took more complex constructions then ever before...",
    },
    {
      img: Hero3,
      heading: "construction",
      para: "See how a 10-stories tower is being built, in a time-lapse",
    },
  ];
  return (
    <div className="w-full h-screen relative">
      <ContactTop />
      <div className="w-full h-[93%]">
        <Header />
        <div className="w-full h-full whitespace-nowrap inline ">
          {sliderContent.map((item, index) => {
            return (
              <div key={index} className="w-full h-full inline relative">
                <img className="w-full h-full" src={item.img} alt="" />
                <div className="w-full h-full flex gap-8 flex-col justify-center items-center absolute top-0 left-0">
                  <span className="w-24 h-[2.5px] bg-primaryCol"></span>
                  <h1 className="text-9xl tracking-wider uppercase font-bold">
                    {item.heading}
                  </h1>
                  <p className="text-3xl tracking-wider uppercase font-bold">
                    {item.para}
                  </p>
                  <button className="uppercase px-8 py-4  bg-primaryCol mt-4">
                    Contact Us
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
