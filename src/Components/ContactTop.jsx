import React from "react";
import "remixicon/fonts/remixicon.css";

function ContactTop() {
  return (
    <div className="w-full py-3 px-24 bg-[#272727] flex items-center justify-between">
      <div className="flex gap-7">
        <p className="hover:text-primaryCol transition-all duration-150 cursor-pointer text-sm">
          <span className="text-primaryCol mr-2 text-lg">
            <i className="ri-map-pin-line"></i>
          </span>{" "}
          Address: 4578 Marmora Road, Glasgow, D04 89GR
        </p>
        <p className="hover:text-primaryCol transition-all duration-150 cursor-pointer text-sm">
          <span className="text-primaryCol mr-2 text-lg">
            <i className="ri-phone-line"></i>
          </span>{" "}
          (800) 123-0045 (800) 123-0045
        </p>
      </div>
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

export default ContactTop;
