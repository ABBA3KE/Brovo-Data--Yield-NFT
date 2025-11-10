import React from 'react';
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 shadow">
      <h1 className="text-xl font-bold text-blue-600">DataYield</h1>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/upload" className="hover:underline">Upload</a>
        <a href="/marketplace" className="hover:underline">Marketplace</a>
      </div>
    </nav>
  );
}
