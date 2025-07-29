import React from "react";

const menuItems = [
  { name: "Wild Mushroom Arancini", price: "$15.00" },
  { name: "Truffle Mushroom Risotto", price: "$15.00" },
  { name: "Braised Short Ribs", price: "$15.00" },
  { name: "Braised Short Ribs", price: "$15.00" },
  { name: "Honey Glazed Salmon", price: "$15.00" },
  { name: "Mediterranean Quinoa Salad", price: "$15.00" },
  { name: "Roasted Vegetable Platter", price: "$15.00" },
  { name: "Roasted Vegetable Platter", price: "$15.00" },
];

export default function MenuGrid() {
  return (
    <section className="  py-20 max-w-6xl mx-auto  md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] px-6 py-4 flex w-full items-center justify-between rounded-md "
          >
            <div className="flex items-start flex-col md:flex-row gap-4 w-full">
         
              <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0" />
   
              <div className="flex flex-col w-full">
                <div className="flex justify-between flex-col md:flex-row items-start w-full">
                  <h3 className="font-semibold text-sm md:text-base whitespace-nowrap">
                    {item.name}
                  </h3>
                  <span className="text-red-600 font-bold text-sm md:text-base ml-2 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <div className="w-full border-b border-dotted hidden md:block border-gray-400 my-1" />
                <p className="text-sm text-gray-500 mt-1">
                  Ricotta, goat cheese, beetroot and dateline.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
