import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-gray-300 px-6 py-4 flex items-center justify-between border-b border-gray-800 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-400">DataYield</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link to="/" className="hover:text-white transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-white transition-colors duration-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/upload" className="hover:text-white transition-colors duration-300">
            Upload
          </Link>
        </li>
        <li>
          <Link to="/wallet" className="hover:text-white transition-colors duration-300">
            Wallet
          </Link>
        </li>
        <li>
          <Link to="/Marketplace" className="hover:text-white transition-colors duration-300">
            Marketplace
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">
          Learn More
        </button>
        <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300">
          Connect Wallet
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center transition-all duration-300 md:hidden ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 py-6 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/upload"
              className="hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Upload
            </Link>
          </li>
          <li>
            <Link
              to="/wallet"
              className="hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Wallet
            </Link>
          </li>
          <li>
            <Link
              to="/Marketplace"
              className="hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Marketplace
            </Link>
          </li>
          <div className="flex flex-col space-y-3 mt-4">
            <button className="bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              Learn More
            </button>
            <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300">
              Connect Wallet
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
