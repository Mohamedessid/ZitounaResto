import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";
import logo from "../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // For programmatic navigation

  const handleScroll = (id) => {
    setIsOpen(false); // Close mobile menu
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#0c0c0c] text-white">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-2 border-b border-gray-700 space-y-2 md:space-y-0">
        <span className="flex items-center space-x-3">
          <ImLocation />
          <span className="text-sm md:text-base">
            Route de Soukra km 1, Sfax, Tunisie (résidence Yesmine)
          </span>
        </span>

        <span className="flex items-center space-x-3">
          <MdOutlineMailOutline />
          <span className="text-sm md:text-base">zitouna.restaurant@gmail.com</span>
        </span>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/reservation")}
            className="px-6 md:px-10 py-2 md:py-3 bg-white text-black font-semibold hover:bg-[#2f762f] hover:text-white transition duration-300 text-sm md:text-base"
          >
            RÉSERVER UNE TABLE
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            className="w-40 md:w-52 h-auto object-contain transform hover:scale-105 transition duration-500"
            src={logo}
            alt="zitouna Logo"
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-lg cursor-pointer">
          <li className="hover:text-[#2f762f] transition duration-300">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-[#2f762f] transition duration-300" onClick={() => handleScroll("about")}>
            ABOUT US
          </li>
          <li className="hover:text-[#2f762f] transition duration-300">
            <Link to="/menu">MENU</Link> {/* Navigates to Menu Page */}
          </li>
          <li className="hover:text-[#2f762f] transition duration-300" onClick={() => handleScroll("gallery")}>
            GALLERY
          </li>
        </ul>

        {/* Phone */}
        <div className="hidden md:flex items-center space-x-2 text-[#2f762f]">
          <FaPhone className="text-xl" />
          <div>
            <p className="text-xs text-white">Phone Call Us</p>
            <p className="text-lg hover:text-white transition duration-300">
              +216 20 513 513
            </p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#2f762f] hover:text-white transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0c0c0c] text-white text-center py-4">
          <li className="py-2 border-b border-gray-700 hover:text-[#2f762f] transition duration-300">
            <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          </li>
          <li className="py-2 border-b border-gray-700 hover:text-[#2f762f] transition duration-300" onClick={() => handleScroll("about")}>
            ABOUT US
          </li>
          <li className="py-2 border-b border-gray-700 hover:text-[#2f762f] transition duration-300">
            <Link to="/menu" onClick={() => setIsOpen(false)}>MENU</Link>
          </li>
          <li className="py-2 border-b border-gray-700 hover:text-[#2f762f] transition duration-300" onClick={() => handleScroll("gallery")}>
            GALLERY
          </li>
        </ul>
      )}
    </header>
  );
}
