import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className=" flex justify-center font-semibold">
        <div className="flex my-5">
        <div className="mx-20">
            <span className="text-2xl"> Smart Terra</span>
           </div>

     <ul className="flex  my-1.5 ">
        <li className="mx-2">
            <Link to="/">Home</Link>
        </li>
        <li className="mx-2">
            <Link to="/form">Form</Link>
        </li>
        <li className="mx-2">
            <Link to="/camera">Camera</Link>
        </li>
        
     </ul>
     </div>
      </nav>
    </>
  );
}

export default Navbar;
