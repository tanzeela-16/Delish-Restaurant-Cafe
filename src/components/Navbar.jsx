import { ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <div className="text-white font-sans text-xs">
      {/* Top Info Bar */}
      <div className="bg-[#111111] py-1 px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span>Mon-Wed: 11a-9p</span>
            <span className="text-[#484848] text-sm">&#9830;</span>
            <span>Thurs-Sat: 11a-10p</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end text-right whitespace-nowrap">
            <span>reservations@Delish.com</span>
            <span className="text-[#484848] text-sm">&#9830;</span>
            <span>123 456 7899</span>
            <span className="text-[#484848] text-sm">&#9830;</span>
            <span>296 Ridao Avenie Mor Berlin 251584</span>
          </div>
        </div>

        <div className="border-t border-[#484848] mt-1"></div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#111111] px-8">
        <div className="flex justify-between items-center py-3">
          <div>
            <img
              src="/logo.png" 
              alt="Delish Logo"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-6 uppercase font-medium tracking-wide text-white text-xs">
            {["Home", "Pages", "Shop", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center hover:text-red-500 transition"
              >
                {item}
                <ChevronDown size={14} className="ml-1" />
              </a>
            ))}
          </div>

          {/* Button */}
          <div>
            <button className="flex items-center gap-2 border border-red-600 px-4 py-1 text-xs uppercase text-white hover:bg-red-600 transition">
              <span>Book a Table</span>
              <span>——</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
