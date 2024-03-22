import React from "react";

function Service() {
  return (
    <div className="w-full h-screen bg-white p-20 flex flex-col items-center">
      <span className="w-24 h-[2.5px] bg-primaryCol"></span>
      <h2 className="text-black/85 uppercase font-bold text-3xl tracking-wider my-8">
        our Services
      </h2>
      <div className="w-full h-5/6 border border-red-700">
        <div>
          <span>
            <i class="ri-ruler-2-line"></i>
          </span>
          <div>
            <h2>PRE-CONSTRUCTION SERVICES</h2>
            <p>
              We take our time on initial planning before any construction
              begins, to balance all the financial and efficiency issues
              beforehand...
            </p>
          </div>
        </div>
        {/* <i class="ri-group-line"></i>
        <i class="ri-building-line"></i>
        <i class="ri-building-4-line"></i>
        <i class="ri-home-2-line"></i>
        <i class="ri-pencil-ruler-2-line"></i> */}
      </div>
    </div>
  );
}

export default Service;
