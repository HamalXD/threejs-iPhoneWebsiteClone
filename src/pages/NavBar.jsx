import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-4">
        <p className="text-3xl font-bold text-gray-800">Logo</p>
        <div className="flex space-x-4 px-8">
          <a href="#" className="text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-800">
            About
          </a>
          <a href="#" className="text-gray-800">
            Services
          </a>
          <a href="#" className="text-gray-800">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
