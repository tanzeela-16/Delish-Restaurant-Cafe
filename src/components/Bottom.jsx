import React from "react";

export default function Bottom() {
  return (
    <div className="w-full  h-70 bg-[#D9D9D9] ">
      <div className=" w-full h-full max-w-7xl mx-auto  md:px-0 md:py-0 px-10 py-10 flex md:flex-row flex-col justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-ms text-white uppercase">
            Book A Table For Your and Family Members
          </p>
          <h1 className=" text-2xl md:text-5xl  text-white uppercase font-bold">
            Need A Table On Coffee House
          </h1>
        </div>

        <div className="">
          <div className="px-10 py-4 border-2 border-white">
            <p className=" uppercase  text-white font-bold"> Book A Table</p>
          </div>
        </div>
      </div>
    </div>
  );
}
