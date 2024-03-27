import React from "react";
import "remixicon/fonts/remixicon.css";
function Footer() {
  return (
    <div className="w-full h-16 bg-[#272727] flex items-center justify-between px-14">
      <p className="text-sm text-white/50 font-extralight">
        Constructo 2024. All Rights Reserved
      </p>
      <div className="flex gap-4 text-base font-semibold">
        <span className="hover:text-primaryCol cursor-pointer">
          <i class="ri-facebook-fill"></i>
        </span>
        <span className="hover:text-primaryCol cursor-pointer">
          <i className="ri-twitter-fill"></i>
        </span>
        <span className="hover:text-primaryCol cursor-pointer">
          <i className="ri-google-fill"></i>
        </span>
        <span className="hover:text-primaryCol cursor-pointer">
          <i className="ri-vimeo-fill"></i>
        </span>
        <span className="hover:text-primaryCol cursor-pointer">
          <i className="ri-youtube-fill"></i>
        </span>
        <span className="hover:text-primaryCol cursor-pointer">
          <i className="ri-pinterest-fill"></i>
        </span>
      </div>
    </div>
  );
}

export default Footer;
