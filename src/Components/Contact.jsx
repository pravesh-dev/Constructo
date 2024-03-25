import React from "react";

function Contact() {
  return (
    <div className="w-full h-[50vh] bg-primaryCol flex gap-7 flex-col justify-center items-center">
      <span className="w-24 h-[2.5px] bg-white"></span>
      <h2 className="w-[45%] text-center leading-10 text-white uppercase font-bold text-2xl tracking-wider">
        IF YOU CAN ENVISION IT, THEN WE CAN BUILD IT! TELL US MORE ABOUT YOUR
        PROJECT
      </h2>
      <button className="uppercase px-10 py-4 rounded-md  bg-white text-black mt-7 hover:text-white hover:bg-black duration-300">
        Contact Us
      </button>
    </div>
  );
}

export default Contact;
