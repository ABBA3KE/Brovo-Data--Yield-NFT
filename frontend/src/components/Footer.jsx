import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0E1321] py-12 px-6 text-gray-400 text-sm border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-white font-bold text-lg mb-3">DataYield</div>
          <p>The premier marketplace for data-backed NFTs.</p>
          <div className="flex gap-3 mt-3">
            <a href="#" className="hover:text-white">
              Discord
            </a>
            <a href="#" className="hover:text-white">
              Telegram
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">Marketplace</h5>
          <ul className="space-y-1">
            <li>Explore</li>
            <li>Statistics</li>
            <li>Trending</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">Resources</h5>
          <ul className="space-y-1">
            <li>Docs</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">Stay Updated</h5>
          <div className="flex">
            <input
              placeholder="Enter your email"
              className="bg-gray-800 px-3 py-2 rounded-l-lg text-white w-full text-sm outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-600">
        © 2025 DataYield. All rights reserved.
      </div>
    </footer>
  );
}
