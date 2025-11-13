import React, { useState } from "react";
import { ethers } from "ethers";

export default function Wallet() {
  const [walletAddress, setWalletAddress] = useState("");

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("MetaMask not detected");
    }
  }

  const collections = [
    {
      name: "Q4 2023 Market Analysis",
      desc: "US stock market performance data.",
      format: "CSV",
      price: "0.75 ETH",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    },
    {
      name: "Weather History API",
      desc: "Global temperature & precipitation records.",
      format: "JSON",
      price: "1.12 ETH",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
    },
    {
      name: "Oceanic Salinity Levels",
      desc: "20-year satellite observation dataset.",
      format: "GeoTIFF",
      price: "2.50 ETH",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    },
  ];

  return (
    <div className="bg-[#0B0F19] min-h-screen text-gray-100 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-5 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="font-semibold text-lg">DataNFT Marketplace</span>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-6">
        {/* Left Side - Collection */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">My Collection</h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 text-sm mb-6 border-b border-gray-800 pb-2">
            <button className="text-blue-500 font-medium border-b-2 border-blue-500">
              Owned
            </button>
            <button className="hover:text-white">Created</button>
            <button className="hover:text-white">Activity</button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <select className="bg-gray-900 border border-gray-700 text-sm px-3 py-2 rounded-lg">
              <option>Recently Acquired</option>
            </select>
            <select className="bg-gray-900 border border-gray-700 text-sm px-3 py-2 rounded-lg">
              <option>All Data Types</option>
            </select>
          </div>

          {/* NFT Collection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collections.map((item, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs bg-blue-700/20 text-blue-400 px-2 py-1 rounded">
                      {item.format}
                    </span>
                    <span className="text-sm text-gray-300 font-medium">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Wallet Info */}
        <div className="w-full md:w-80 flex-shrink-0 flex flex-col gap-6 mt-6 md:mt-0">
          {/* Profile */}
          <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                🧑‍🚀
              </div>
              <div>
                <h4 className="font-semibold">CryptoKing_7</h4>
                <p className="text-xs text-gray-400">
                  {walletAddress
                    ? walletAddress.slice(0, 8) + "..." + walletAddress.slice(-4)
                    : "0x1A2b...c3D4"}
                </p>
              </div>
            </div>
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-sm font-medium">
              Upload Dataset & Mint NFT
            </button>
          </div>

          {/* Wallet Overview */}
          <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 flex flex-col gap-4">
            <h4 className="font-semibold text-gray-200">Wallet Overview</h4>

            <div>
              <p className="text-sm text-gray-400">Total Earnings</p>
              <h3 className="text-xl font-bold">0.00 ETH</h3>
              <p className="text-green-400 text-sm">$0,000.00 USD</p>
            </div>

            <button className="bg-gray-800 hover:bg-gray-700 py-2 rounded-lg text-sm font-medium">
              Withdraw
            </button>

            <div className="flex justify-between text-sm text-gray-400 border-t border-gray-800 pt-3">
              <span>00 NFTs Owned</span>
              <span>0 NFTs Created</span>
            </div>

            <div className="bg-gray-800 mt-3 rounded-lg py-2 px-3 text-center">
              <p className="text-xs text-gray-400">Total Sales Volume</p>
              <p className="text-lg font-semibold text-white">0.0 ETH</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
