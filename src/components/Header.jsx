import React from "react";

export default function Header({ PageName, PageDetail, Honed }) {
  return (
    <div className="w-full bg-[#0A0A0ABA] h-150 ">
      <div className="  h-150 flex flex-col justify-center  md:justify-end items-center  gap-y-10">
        <div className="flex flex-col text-center gap-y-5">
          <h1 className="  md:text-6xl text-3xl uppercase font-bold text-white ">
            Gallery Page
          </h1>
          <p className="text-sm  text-white uppercase">Home / Gallery Page</p>
        </div>

        <div className="mb-10">
          <h1
            className="uppercase text-4 xl md:text-[10rem] text-6xl  text-center font-bold text-transparent"
            style={{
              WebkitTextStroke: "0.4px rgba(255, 255, 255, 0.3)",
            }}
          >
            Food Gallery
          </h1>
        </div>
      </div>
    </div>
  );
}
