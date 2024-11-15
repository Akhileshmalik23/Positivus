import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-20 mt-10 rounded-t-3xl">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Positivus</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6 md:mb-0">
          <a href="#" className="text-gray-300 hover:underline">
            About us
          </a>
          <a href="#" className="text-gray-300 hover:underline">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:underline">
            Use Cases
          </a>
          <a href="#" className="text-gray-300 hover:underline">
            Pricing
          </a>
          <a href="#" className="text-gray-300 hover:underline">
            Blog
          </a>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 justify-center md:justify-start">
          <a href="#" className="text-gray-300 hover:text-lime-300">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-300 hover:text-lime-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-300 hover:text-lime-300">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row justify-between  mt-7 gap-y-4 md:gap-x-4">
        <div>
          <p className="text-lime-300 font-semibold bg-gray-800 rounded-md px-2 py-1 inline-block mb-4">
            Contact us:
          </p>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
        </div>
        <div className="bg-gray-800 py-4 px-6 rounded-3xl flex flex-col sm:flex-col md:flex-row  items-center">
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-900 text-white px-3 py-2 border border-gray-600 rounded-lg outline-none"
          />
          <button className="bg-lime-300 text-gray-900 px-4 py-2 rounded-lg font-semibold ml-4 mt-4 md:mt-0">
            Subscribe to news
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row mt-10 items-center border-t border-gray-700 pt-4">
        <div>
          <p className="text-gray-500 text-sm">&copy; 2023 Positivus. All Rights Reserved.</p>
        </div>
        <div className="mt-4 md:mt-0 md:ml-10">
          <a href="#" className="text-gray-500 hover:underline text-sm">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
