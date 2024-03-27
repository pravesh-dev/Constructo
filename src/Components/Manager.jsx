import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import manager1 from "../assets/manager1.jpg";
import manager2 from "../assets/manager2.jpg";
import manager3 from "../assets/manager3.jpg";
import manager4 from "../assets/manager4.jpg";
import manager5 from "../assets/manager5.jpg";
import manager6 from "../assets/manager6.jpg";

function Manager() {
  const manager_content = [
    {
      image: manager1,
      name: "EDWARD ELLIOTT",
      post: "Vice President of Operations",
      para: `Previously Edward owned his own mid-sized contracting company. That
            kind of a first hand, entrepreneurial experience in managing all the
            processes and operations for a construction company got our
            attention. Last year we invited him to join our team, which he
            fortunately did...`,
    },
    {
      image: manager2,
      name: "CALVIN FITZGERALD",
      post: "President",
      para: `Calvin Fitzgerald is an established and well-respected expert in the construction industry. With more than 35 years of practical experience in the business, Calvin has built his career on bringing the most outlandish conceptual visions from blueprints to a street next to yours... His leadership skills cemented Constructo's dominating positions among our competitors.`,
    },
    {
      image: manager3,
      name: "TAYLOR WILSON",
      post: "Chief Executive Officer",
      para: `Taylor's been involved in the construction business since the 1970's... His profound experience in building miscellaneous types of projects and his innovative mindset makes him the leading force in our company. The BIM and Db methods that he implemented are now the lynchpins of our business operations with all of our clients...`,
    },
    {
      image: manager4,
      name: "JOSH WAGNER",
      post: "Chief Design Officer",
      para: `Josh leads our creative team of designers and engineers...His proven ability to manage the most complex projects and bring the craziest concepts to life is what makes him as efficient as he is. Together, this creative team can be the launchpad of any project, giving it a head start at the earliest stages of the construction project's planning.`,
    },
    {
      image: manager5,
      name: "LUIS MAXWELL",
      post: "Contractors Operations Head",
      para: `While we do all the pre-construction planning and sketching, scheduling and managing on an in-house basis, we hire a lot of 3rd party contractors for the actual on-site work. Luis Maxwell is the person to manage all our contractors across all of our projects being currently in development.`,
    },
    {
      image: manager6,
      name: "KEN FERGUSON",
      post: "Chief Financial Officer",
      para: `Ken's been working as a chief financial analyst for Bechtel; Fluor Corp.; CB&I and Kiewit Corp. During those years he excelled in this field, efficiently cutting the side expenses that were bringing those top contractors down. Few years ago we managed to get him onboard, and not even a full year later we've had a our returns in a form of an optimized expenses budget!`,
    },
  ];
  return (
    <div className="w-full h-[130vh] bg-white flex flex-col items-center p-20">
      <span className="w-24 h-[2.5px] bg-primaryCol"></span>
      <h2 className="text-black/85 uppercase font-bold text-3xl tracking-wider my-8">
        EXECUTIVE MANAGERS
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-[80%]"
      >
        {manager_content.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className=" flex gap-1 flex-col pt-3 items-center p-2"
            >
              <img className="w-full" src={item.image} alt="" />
              <h2 className="text-black mt-5 text-2xl font-extralight tracking-wider hover:text-primaryCol cursor-pointer">
                {item.name}
              </h2>
              <h4 className="text-primaryCol text-sm">{item.post}</h4>
              <p className="text-black/55 mt-3 text-lg text-center">
                {item.para}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Manager;
