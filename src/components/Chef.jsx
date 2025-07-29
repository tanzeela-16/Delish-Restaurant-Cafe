import React from "react";

export default function PopularChefsGrid() {
  return (
    <section className="px-4 py-20 max-w-6xl mx-auto">
 
      <div className="text-center mb-12">
        <button className="bg-red-600 text-white px-4 py-1 text-xs uppercase font-bold rounded-full mb-3">
          Make Reservation
        </button>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Our Popular Chefs
        </h2>
        <div className="mt-2 flex justify-center space-x-1">
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
      
        <div className="relative bg-gray-200 h-100 w-full">
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-2 text-xs font-bold leading-tight text-center">
            <div>09</div>
            <div>DEC</div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 flex flex-col justify-center">
          <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gray-400" />
              <span className="font-semibold text-xs uppercase">
                Markus Daniel
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs">
              <svg
                className="w-4 h-4 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 10c0 3.866-3.582 7-8 7a8.6 8.6 0 01-4.9-1.5L2 18l1.5-3.1A7.947 7.947 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
              </svg>
              <span>2 Comment</span>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug">
            How restaurants foster connections and create memories
          </h3>
          <button className="border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
            Read More →
          </button>
        </div>

 
        <div className="bg-gray-100 p-6 flex flex-col justify-center">
          <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gray-400" />
              <span className="font-semibold text-xs uppercase">
                Markus Daniel
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs">
              <svg
                className="w-4 h-4 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 10c0 3.866-3.582 7-8 7a8.6 8.6 0 01-4.9-1.5L2 18l1.5-3.1A7.947 7.947 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
              </svg>
              <span>2 Comment</span>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug">
            Discovering affordable gourmet experiences in your city
          </h3>
          <button className="border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
            Read More →
          </button>
        </div>

 
        <div className="relative bg-gray-200 h-100 w-full">
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-2 text-xs font-bold leading-tight text-center">
            <div>09</div>
            <div>DEC</div>
          </div>
        </div>
      </div>
    </section>
  );
}
