import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-16 px-4 md:py-24 md:px-8 bg-gray-900 text-gray-100">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug md:leading-tight">
        Monetize Your Data. Earn with Every Use.
      </h1>

      {/* Description */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg">
        Transform your data into a liquid asset. Our platform allows you to mint
        data-yield NFTs, creating new revenue streams and investment opportunities
        in the data economy.
      </p>

      {/* Call-to-action button */}
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
        Get Started
      </button>

      {/* Trusted by section */}
      <div className="mt-12 text-sm sm:text-base text-gray-500">
        Trusted by industry leaders
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4 text-gray-400 font-medium">
        <span className="px-2 py-1 border border-gray-700 rounded">QuantumLeap</span>
        <span className="px-2 py-1 border border-gray-700 rounded">DataSphere</span>
        <span className="px-2 py-1 border border-gray-700 rounded">SynthCore</span>
        <span className="px-2 py-1 border border-gray-700 rounded">Infiniti</span>
        <span className="px-2 py-1 border border-gray-700 rounded">NexusAI</span>
      </div>
    </section>
  );
}

