import React from "react";
import Parallex1Img from "../assets/parallex1Img.jpg";
import { motion } from "framer-motion";
function Parallex1() {
  const parallex1Content = [
    {
      count: 250,
      name: "projects completed",
    },
    {
      count: 302,
      name: "STAFF MEMBERS",
    },
    {
      count: 15,
      name: "MILLION MAN-HOURS",
    },
    {
      count: 99,
      name: "AWARDS WON",
    },
  ];
  return (
    <div className="w-full h-80">
      <motion.div
        data-scroll
        data-scroll-section
        data-scroll-speed=".5"
        className="w-full h-full fixed top-0 left-0 -z-10"
      >
        <img className="w-full h-full object-cover" src={Parallex1Img} alt="" />
      </motion.div>
      <div className="w-full h-full flex items-center justify-center gap-44">
        {parallex1Content.map((item, index) => {
          return (
            <div className="flex flex-col gap-3 items-center">
              <h2 className="text-primaryCol font-bold text-6xl">
                {item.count}
              </h2>
              <h3 className="text-xl uppercase tracking-wider">{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Parallex1;
