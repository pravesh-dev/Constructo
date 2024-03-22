import React from "react";
import ContactTop from "./ContactTop";
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
        {/* <Header /> */}
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          {sliderContent.map((item, index) => {
            return (
              <SwiperSlide key={index} className="w-full h-full relative">
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
