// src/pages/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white px-8 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Total Earnings */}
        <div className="bg-[#151b2b] p-6 rounded-2xl shadow-lg">
          <h2 className="text-gray-400">Total Earnings</h2>
          <p className="text-3xl font-semibold mt-2">$0,00.00</p>
          <p className="text-green-400 text-sm mt-1">+0.0%</p>
        </div>

        {/* Average Yield Rate */}
        <div className="bg-[#151b2b] p-6 rounded-2xl shadow-lg">
          <h2 className="text-gray-400">Average Yield Rate</h2>
          <p className="text-3xl font-semibold mt-2">0.00%</p>
          <p className="text-green-400 text-sm mt-1">+0.0%</p>
        </div>

        {/* Staked Assets */}
        <div className="bg-[#151b2b] p-6 rounded-2xl shadow-lg">
          <h2 className="text-gray-400">Staked Assets</h2>
          <p className="text-3xl font-semibold mt-2">$0,000.00</p>
          <p className="text-gray-400 text-sm mt-1">00 NFTs Staked</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Earnings Over Time */}
        <div className="bg-[#151b2b] p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Earnings Over Time</h2>
            <div className="space-x-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">7D</button>
              <button className="bg-[#1e2538] text-gray-300 px-3 py-1 rounded-lg text-sm">30D</button>
              <button className="bg-[#1e2538] text-gray-300 px-3 py-1 rounded-lg text-sm">90D</button>
              <button className="bg-[#1e2538] text-gray-300 px-3 py-1 rounded-lg text-sm">All</button>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500 border border-[#222b44] rounded-lg">
            Chart Placeholder
          </div>
        </div>

        {/* Portfolio Breakdown */}
        <div className="bg-[#151b2b] p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Portfolio Breakdown</h2>
          <div className="h-64 flex items-center justify-center text-gray-500 border border-[#222b44] rounded-lg mb-4">
            Donut Chart Placeholder
          </div>
          <ul className="space-y-1 text-sm">
            <li className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span> Genomic Data
              </span>
              <span>00%</span>
            </li>
            <li className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span> Financial Data
              </span>
              <span>00%</span>
            </li>
            <li className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span> IoT Sensor Data
              </span>
              <span>00%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;