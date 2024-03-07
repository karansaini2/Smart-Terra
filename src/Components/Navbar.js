import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

<nav className="flex justify-between items-center py-4 px-8 bg-transparent text-black relative">
      <div className="flex items-center">
        <span className="text-xl font-semibold">Smart Terra</span>
      </div>

      <div className="md:hidden">
        {isOpen ? (
          <FaTimes className="text-2xl" onClick={toggleMenu} />
        ) : (
          <FaBars className="text-2xl" onClick={toggleMenu} />
        )}
      </div>

      <div
        className={`absolute top-0 inset-x-0 bg-white h-36 transition-transform duration-300 z-10 ${
          isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
        } shadow-lg rounded-t-lg overflow-hidden`}
      >
        <div className="py-8 text-center">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-lg">Home</Link>
            </li>
            <li>
              <Link to="/form" className="text-lg">Form</Link>
            </li>
           
          </ul>
        </div>
        <button
          className="absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <FaTimes className="text-2xl" />
        </button>
      </div>

      <div className="hidden md:flex md:items-center">
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/form" className="hover:text-gray-300">Form</Link>
          </li>
        </ul>
      </div>
    </nav>

    </>
  );
}

export default Navbar;
