import React from "react";
import { Link } from "react-router-dom";
import amazon from "../assets/Amazon-Logo-2000.png";

const Header = ({ value }) => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 
      bg-white/80 backdrop-blur-md border-b border-gray-200 
      shadow-sm dark:bg-gray-900/80"
    >
      <div className="flex items-center justify-between mx-auto p-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={amazon}
            className="h-10 w-20 object-contain"
            alt="Amazon Logo"
          />
        </Link>

        {/* Cart Button */}
        <Link to="/cart" className="relative">
          <button
            className="flex items-center justify-center 
            text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium 
            rounded-lg text-sm px-5 py-2.5"
          >
            <i className="fa-solid fa-cart-shopping text-lg"></i>

            {/* Badge */}
            {value > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-yellow-600 text-white 
                text-xs font-bold rounded-full h-5 w-5 flex items-center 
                justify-center"
              >
                {value}
              </span>
            )}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
