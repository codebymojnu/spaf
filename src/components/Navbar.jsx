import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
            <ul className="flex space-x-4 text-gray-800">
              <li>
                <NavLink to="/" activeClassName="text-green-500" className="hover:text-green-500">
                  Home
                </NavLink>
              </li>
              {/* Add other menu items */}
            </ul>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 6L18 18M6 18L18 6L6 18Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20C20.5523 6 21 6.44772 21 7V17C21 17.5523 20.5523 18 20 18H4C3.44772 18 3 17.5523 3 17V7C3 6.44772 3.44772 6 4 6ZM20 4C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H20ZM6 8H18V10H6V8ZM6 12H18V14H6V12Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden bg-gray-800 fixed inset-y-0 right-0 z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end pt-4 pr-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-8 w-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 6L18 18M6 18L18 6L6 18Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <ul className="text-white text-lg mt-8">
          <li className="py-4 border-b border-gray-600">
            <NavLink to="/" activeClassName="text-green-500" className="block px-4 hover:text-green-500">Home</NavLink>
          </li>
          {/* Add other menu items */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
