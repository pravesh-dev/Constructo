import React from "react";
import "./Project.css";
import proj1Img from "../assets/project-1.jpg";
import proj2Img from "../assets/project-2.jpg";
import proj3Img from "../assets/project-3.jpg";
import proj4Img from "../assets/project-4.jpg";
import proj5Img from "../assets/project-5.jpg";
import proj6Img from "../assets/project-6.jpg";
import proj7Img from "../assets/project-7.jpg";
import proj8Img from "../assets/project-8.jpg";

function Projects() {
  const projContent = [
    {
      img: proj1Img,
      heading: "Commercial",
      para: `It’s probably the most diverse category of construction to work
            in. But we’ve got experience…`,
    },
    {
      img: proj2Img,
      heading: "CULTURAL / LIFESTYLE",
      para: `Working on a socially important building, such as a park involves additional landscape construction expertise.…`,
    },
    {
      img: proj3Img,
      heading: "DATA / TECHNOLOGY",
      para: `While constructing a headquarters building for an IT company is relatively easy, we’ve also…`,
    },
    {
      img: proj4Img,
      heading: "EDUCATIONAL",
      para: `Educational institutions can be much more creative than your regular school or a college campus!…`,
    },
    {
      img: proj5Img,
      heading: "GOVERNMENT / MILITARY",
      para: `The US military and States governments used our expertise and manpower to build numerous military-grade…`,
    },
    {
      img: proj6Img,
      heading: "HEALTHCARE",
      para: `We can build any type of healthcare buildings. From a small private medical clinic to…`,
    },
    {
      img: proj7Img,
      heading: "MANUFACTURING / INDUSTRIAL",
      para: `Building a manufacturing facility or a factory house can be much more challenging than building…`,
    },
    {
      img: proj8Img,
      heading: "WAREHOUSE / LOGISTICS",
      para: `While building a warehouse for an e-store is no easy feat itself, think about building…`,
    },
  ];
  return (
    <div className="w-full h-screen bg-black flex flex-wrap justify-center items-center">
      {projContent.map((item, index) => {
        return (
          <div key={index} className="container w-1/4 h-1/2">
            <div className="card w-full h-full relative duration-[1.2s]">
              <div className="front w-full h-full absolute flex justify-center items-center">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <h2 className="w-full h-full flex justify-center items-center bg-black/70 text-2xl uppercase absolute text-center">
                  {item.heading}
                </h2>
              </div>
              <div className="back w-full h-full absolute bg-red-600 flex gap-3 flex-col justify-center items-center">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="w-full h-full bg-neutral-900/95 absolute flex gap-3 flex-col justify-center items-center p-[1.2vw]">
                  <h2 className="text-2xl uppercase">{item.heading}</h2>
                  <p className="text-center text-lg">{item.para}</p>
                  <button className="uppercase text-xl underline">
                    view projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
