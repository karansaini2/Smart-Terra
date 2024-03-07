import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

<nav className="flex justify-between items-center py-4 px-8 bg-transparent text-black">
      <div className="flex items-center">
        <span className="text-xl font-semibold">Smart Terra</span>
      </div>

      <div className="md:hidden">
        <FaBars className="text-2xl" onClick={toggleMenu} />
      </div>

      <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex space-x-4 md:space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/form" className="hover:text-gray-300">Form</Link>
          </li>
          <li>
            <Link to="/camera" className="hover:text-gray-300">Camera</Link>
          </li>
        </ul>
      </div>
    </nav>

    </>
  );
}

export default Navbar;
