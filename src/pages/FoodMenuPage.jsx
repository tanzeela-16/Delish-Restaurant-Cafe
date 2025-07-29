import React from "react";
import Header from "../components/Header";
import ChefComp from "../components/Chef";
import MenuComp from "../components/Menu";

export default function Menu() {
  return (
    <div className="font-sans text-gray-800 bg-[#F6F6F6]">
      <Header
        PageName={"Food menu page"}
        PageDetail={"Home / Menu Page"}
        Honed={"our food menu"}
      />

      <MenuComp />

      <section className="bg-black text-white py-30 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-medium">BOOK A TABLE</div>
          <div className="flex flex-col md:flex-row gap-x-10 w-full md:w-auto">
            <select className="p-2 bg-black border-2 border-[#202020] w-50 px-2 py-3 text-white rounded-md">
              <option>Person</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
            <input
              type="date"
              className="p-2 bg-black text-white border-2 border-[#202020] w-50 py-3 rounded-md"
              defaultValue="2024-12-09"
            />
            <input
              type="time"
              className="p-2 bg-black text-white border-2 border-[#202020] w-50 py-3 rounded-md"
              defaultValue="11:00"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              SUBMIT
            </button>
          </div>
        </div>
      </section>

      <ChefComp />
    </div>
  );
}
