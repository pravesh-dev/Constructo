import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const [activeNav, setActiveNav] = useState("home");
  const [headerHeight, setHeaderHeight] = useState(6);
  const [headerPos, setHeaderPos] = useState("top-14");
  const [headerBg, setHeaderBg] = useState("transparent");
  const handleNavClick = (elem) => {
    setActiveNav(elem);
  };
  const handleScroll = () => {
    setHeaderHeight(window.scrollY > 8 ? 4.5 : 6);
    setHeaderPos(window.scrollY > 8 ? "top-0" : "top-14");
    setHeaderBg(window.scrollY > 8 ? "bg-[#272727]" : "transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      // initial={{ height: "6rem" }}
      style={{ height: `${headerHeight}rem` }}
      className={`w-full h-24 ${headerBg} flex items-center justify-between px-28 z-50 fixed ${headerPos} left-0 duration-700`}
    >
      <img className="w-72" src={logo} alt="" />
      <ul className="flex gap-5 uppercase">
        <li
          className={`${
            activeNav == "home" ? "text-primaryCol" : "text-white"
          }  hover:text-primaryCol cursor-pointer transition-all duration-200`}
          onClick={() => {
            handleNavClick("home");
          }}
        >
          home
        </li>
        <li
          className={`${
            activeNav == "about" ? "text-primaryCol" : "text-white"
          }  hover:text-primaryCol cursor-pointer transition-all duration-200`}
          onClick={() => {
            handleNavClick("about");
          }}
        >
          about
        </li>
        <li
          className={`${
            activeNav == "service" ? "text-primaryCol" : "text-white"
          }  hover:text-primaryCol cursor-pointer transition-all duration-200`}
          onClick={() => {
            handleNavClick("service");
          }}
        >
          services
        </li>
        <li
          className={`${
            activeNav == "project" ? "text-primaryCol" : "text-white"
          }  hover:text-primaryCol cursor-pointer transition-all duration-200`}
          onClick={() => {
            handleNavClick("project");
          }}
        >
          projects
        </li>
        <li
          className={`${
            activeNav == "testimonial" ? "text-primaryCol" : "text-white"
          }  hover:text-primaryCol cursor-pointer transition-all duration-200`}
          onClick={() => {
            handleNavClick("testimonial");
          }}
        >
          testimonials
        </li>
        <li
          className={`${
            activeNav == "contact" ? "text-primaryCol" : "text-white"
          }  hover:text-primaryCol cursor-pointer transition-all duration-200`}
          onClick={() => {
            handleNavClick("contact");
          }}
        >
          contacts
        </li>
      </ul>
    </motion.div>
  );
}

export default Header;
