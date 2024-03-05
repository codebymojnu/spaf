import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-white text-2xl font-semibold mb-4">
              Safe and Poverty Alleviation Foundation
            </h2>
            <p className="text-gray-400">
              একটি অরাজনৈতিক, অলাভজনক সেবামূলক প্রতিষ্ঠান।
            </p>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center text-gray-400">
          <p>
            &copy; 2024 Safe and Poverty Alleviation Foundation. All rights
            reserved.
          </p>
          <p>
            Designed and developed with{" "}
            <span className="text-red-500">&#10084;</span> by Mojnu
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
