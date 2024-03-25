import React, { useState } from "react";

function Service() {
  const serviceContent = [
    {
      iconClass: "ri-ruler-2-line",
      heading: "PRE-CONSTRUCTION SERVICES",
      para: `We take our time on initial planning before any construction
      begins, to balance all the financial and efficiency issues
      beforehand...`,
    },
    {
      iconClass: "ri-group-line",
      heading: "GENERAL CONTRACTING",
      para: `We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority of our projects!`,
    },
    {
      iconClass: "ri-building-line",
      heading: "CONSTRUCTION SERVICES",
      para: `Our customers love the pace/quality tempo that we show during each of the principal construction processes!`,
    },
    {
      iconClass: "ri-building-4-line",
      heading: "CONSTRUCTION MANAGEMENT",
      para: `Construction project management is essential. We're using the most time and iterations efficient life cycles methods for that.`,
    },
    {
      iconClass: "ri-home-2-line",
      heading: "BUILDING INFORMATION MODELING (BIM)",
      para: `Oftentimes physical and functional essence of any construction project needs to be represented digitally, in a 3D model format.`,
    },
    {
      iconClass: "ri-pencil-ruler-2-line",
      heading: "DESIGN-BUILD",
      para: `If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of the construction shorter.`,
    },
  ];
  // const [hoverSpan, setHoverSpan] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="w-full h-screen bg-white p-20 flex flex-col items-center">
      <span className="w-24 h-[2.5px] bg-primaryCol"></span>
      <h2 className="text-black/85 uppercase font-bold text-3xl tracking-wider my-8">
        our Services
      </h2>
      <div className="w-full h-5/6 flex flex-wrap">
        {serviceContent.map((item, index) => {
          return (
            <div
              key={index}
              className="w-1/3 h-1/2 flex gap-5 p-3"
              onMouseEnter={(e) => {
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
            >
              <span
                className={`text-4xl w-60 h-20 flex overflow-hidden justify-center items-center z-10 relative text-white bg-primaryCol rounded-full before:content-[''] before:w-full before:h-full before:bg-neutral-800 before:absolute before:rounded-full before:duration-500 before:z-20 ${
                  hoveredIndex === index
                    ? "before:top-0 before:left-0"
                    : "before:top-full before:-left-full"
                }`}
              >
                <i className={`${item.iconClass} absolute z-30`}></i>
              </span>
              <div>
                <h2 className="text-2xl text-black font-extralight cursor-pointer hover:text-primaryCol duration-500">
                  {item.heading}
                </h2>
                <p className="text-lg text-black/40 mt-3">{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
