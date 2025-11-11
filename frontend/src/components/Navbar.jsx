import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
      <div className="text-xl font-bold text-blue-400">DataYield</div>

      <ul className="hidden md:flex space-x-8 text-gray-300">
        <li><Link to="/" className="hover:text-white">Home</Link></li>
        <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
        <li><Link to="/upload" className="hover:text-white">Upload</Link></li>
        <li><Link to="/wallet" className="hover:text-white">Wallet</Link></li>
      </ul>

      <div className="flex space-x-4">
        <button className="hidden md:block bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          Learn More
        </button>
        <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
