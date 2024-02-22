import React from "react";
import About from "./About";
import Stepper from "./Stepper";

function HeroSection() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Company Information */}
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <About />
          <Stepper />
        </div>
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src="./slideImages/2.jpg"
            alt="spaf hero image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
