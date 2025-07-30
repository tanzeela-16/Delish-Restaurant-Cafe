import React, { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table Booked:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="bg-[#111111] text-white">
      {/* Header Section */}
      <div className="bg-[#2f2f2f] text-center py-16 px-4">
        <h2 className="text-4xl font-bold tracking-wider mb-2">BOOK A TABLE</h2>
        <p className="text-sm uppercase text-gray-400"> Book a Table</p>
        <h1 className="text-[6rem] font-bold text-[#2f2f2f] tracking-wide -mt-6 select-none">
          RESERVATION
        </h1>
      </div>

      {/* Form Section */}
      <div className="bg-[#111111] px-4 md:px-20 py-12">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          <input
            type="text"
            name="guests"
            placeholder="Number of Guests"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white placeholder-gray-500 focus:outline-none"
            required
          />
          <input
            type="date"
            name="date"
            placeholder="Select Date"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white focus:outline-none"
            required
          />
          <input
            type="time"
            name="time"
            placeholder="Select Time"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white focus:outline-none"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white placeholder-gray-500 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white placeholder-gray-500 focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white placeholder-gray-500 focus:outline-none"
            required
          />
          {/* Full Width TextArea */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Optional Message"
            onChange={handleChange}
            className="md:col-span-2 bg-[#1a1a1a] px-4 py-3 border border-[#333] text-white placeholder-gray-500 focus:outline-none"
          ></textarea>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white uppercase px-8 py-3 transition font-semibold tracking-wide"
            >
              Book a Table — →
            </button>
          </div>
        </form>
      </div>

      {/* Image & Info Section */}
      <div className="bg-white py-16 px-4 md:px-24 flex flex-col md:flex-row gap-10 justify-center items-center">
        {/* Overlapping Images */}
        <div className="relative w-64 h-64 bg-gray-300">
          <div className="absolute top-16 left-16 w-40 h-40 bg-gray-400" />
        </div>

        {/* Opening Hours and Address */}
        <div className="text-black max-w-sm">
          <div className="mb-8">
            <h4 className="font-semibold mb-1 text-lg">OPENING HOURS</h4>
            <p className="text-sm">Open: 10am - 9pm (Mon - Sun)</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-lg">VISIT YOUR RESTAURANT</h4>
            <p className="text-sm">78 St. Avenue, Los Angeles</p>
            <p className="text-sm">hello@delish.com</p>
          </div>
        </div>
      </div>

      {/* Footer-style Extra Section */}
      <div className="bg-[#f4f4f4] text-black py-16 px-4 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Need a table on coffee house?
        </h3>
        <button className="bg-black text-white px-6 py-3 hover:bg-red-600 transition">
          Book a table
        </button>
      </div>
    </div>
  );
};

export default Reservation;
