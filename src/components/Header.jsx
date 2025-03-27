import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5"; // Icons for menu toggle

const Header = ({ value }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { option } = value;
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Aerospace", path: "/aerospace" },
    { name: "Transportation", path: "/transportation" },
  ];

  return (
    <header className="bg-[#f5f5f5] fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 sm:h-40 px-5 sm:px-0">
        <div className="flex items-center gap-3">
          <img src="/SES_LOGO.png" className="h-12 sm:h-16" alt="Logo" />
          <h1
            className="text-lg sm:text-4xl font-extrabold text-gray-700"
            style={{ fontFamily: "Roboto Condensed" }}
          >
            Space Energy Systems
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4">
          {menuItems.map(({ name, path }) => (
            <button
              key={name}
              onClick={() => navigate(path)}
              className={`px-4 py-2 rounded-md border border-gray-400 shadow-md transition-all duration-300 ${
                option === name
                  ? "bg-gray-600 text-white"
                  : "bg-[#93a7c7] text-gray-700 hover:bg-gray-400"
              }`}
              style={{ fontFamily: "Roboto Condensed" }}
            >
              {name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-5 bg-[#f5f5f5] shadow-md">
          {menuItems.map(({ name, path }) => (
            <button
              key={name}
              onClick={() => {
                navigate(path);
                setMenuOpen(false);
              }}
              className={`w-4/5 text-center py-2 rounded-md border border-gray-400 shadow-md transition-all duration-300 ${
                option === name
                  ? "bg-gray-600 text-white"
                  : "bg-[#93a7c7] text-gray-700 hover:bg-gray-400"
              }`}
              style={{ fontFamily: "Roboto Condensed" }}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
