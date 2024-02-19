import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
                <a href="#" className="hover:text-green-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Donor and Lifetime Member
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Video
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Volunteer Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
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
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          <ul className="px-2 pt-2 pb-3">
            <li>
              <a href="#" className="block text-gray-800 hover:text-green-500 py-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-green-500 py-2">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-green-500 py-2">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-green-500 py-2">
                Donor and Lifetime Member
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-green-500 py-2">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-green-500 py-2">
                Video
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-green-500 py-2">
                Volunteer Registration
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-green-500 py-2">
                News
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-800 hover:text-green-500 py-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
