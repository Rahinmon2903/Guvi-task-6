import React from "react";
import amazon from "../assets/Amazon-Logo-2000.png";

const Header = ({value}) => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 
             backdrop-blur-md bg-white/70 dark:bg-gray-900/60 
             border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-2 ">
        <a href="#" className="flex items-center space-x-3">
          <img
            src={amazon}
            className="h-12 w-20"
            alt="Amazon Logo"
          />
        </a>
        <div>
          <button
          
            className="relative flex items-center justify-center 
               text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
               focus:outline-none focus:ring-blue-300 font-medium 
               rounded-lg text-sm px-5 py-2.5 
               dark:bg-blue-600 dark:hover:bg-blue-700 
               dark:focus:ring-blue-800"
          >
            {/* Cart Icon */}
            <i className="fa-solid fa-cart-shopping text-lg"></i>

            {/* Badge */}
            {value > 0 && (
              <span
                className="absolute -top-1 -right-1 
                   bg-yellow-600 text-white text-xs font-bold 
                   rounded-full h-5 w-5 flex items-center justify-center"
              >
                {value}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
