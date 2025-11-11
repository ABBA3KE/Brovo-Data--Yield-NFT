import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marketplace from "./components/Marketplace";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import HowitWorks from "./components/HowitWorks";
import Creatorinvestor from "./components/Creatorinvestor";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Wallet from "./pages/Wallet";

export default function App() {
  return (
    <Router>
      <div className="bg-[#0B0F19] text-gray-100 font-sans min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
