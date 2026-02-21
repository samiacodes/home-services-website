import React, { useState } from "react";
import { Menu, X, Truck } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#f0d7d0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-[#c94f4f]" />
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              Movable
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#c94f4f] font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}

            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#c94f4f] transition-all duration-300 shadow-sm">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#c94f4f] transition"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-[#c94f4f] font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <button className="w-full bg-gray-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#c94f4f] transition">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;