import React from "react";

import imag from '../data/assets_processed.jpg';
import Navbar from "./navbar";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-8 lg:px-16 lg:py-20 bg-white">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Navigating the digital landscape for success
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 lg:mb-8">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-black text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-base lg:text-lg hover:bg-gray-800 transition duration-300">
            Book a consultation
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex items-center justify-center">
            <img src={imag} alt="Marketing illustration" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
