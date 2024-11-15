import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white ">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-3xl font-bold text-gray-800">Positivus</h1>

        {/* Menu Icon for Small Screens */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoIosMenu size={30} />
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 bg-white w-full md:w-auto  z-50 p-4 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <div className="text-gray-700 hover:text-blue-500">About us</div>
            </li>
            <li>
              <div className="text-gray-700 hover:text-blue-500">Services</div>
            </li>
            <li>
              <div className="text-gray-700 hover:text-blue-500">Use Cases</div>
            </li>
            <li>
              <div className="text-gray-700 hover:text-blue-500">Pricing</div>
            </li>
            <li>
              <div className="text-gray-700 hover:text-blue-500">Blog</div>
            </li>
            <li>
              <div className="text-gray-700 hover:text-blue-500 border border-black px-4 py-2 rounded-xl">
                Request a Quote
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
