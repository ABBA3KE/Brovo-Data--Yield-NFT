import React from "react";
export default function Steps() {
  return (
    <section className="py-20 px-8 text-center bg-gray-950">
      <h2 className="text-blue-500 font-semibold mb-2">HOW IT WORKS</h2>
      <h3 className="text-3xl font-bold mb-12 text-white">
        Unlock the Power of Your Data in 3 Simple Steps
      </h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
          <div className="text-blue-500 text-4xl mb-4">🔷</div>
          <h4 className="text-xl font-semibold mb-2 text-white">1. Mint Your Data NFT</h4>
          <p className="text-gray-400">
            Securely package your dataset as a unique, tradable NFT on the blockchain.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
          <div className="text-blue-500 text-4xl mb-4">💠</div>
          <h4 className="text-xl font-semibold mb-2 text-white">2. Earn Royalties</h4>
          <p className="text-gray-400">
            Receive passive income every time your data is accessed, used, or sold.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
          <div className="text-blue-500 text-4xl mb-4">📈</div>
          <h4 className="text-xl font-semibold mb-2 text-white">3. Invest in Data</h4>
          <p className="text-gray-400">
            Browse the marketplace and invest in high-potential data assets for future returns.
          </p>
        </div>
      </div>
    </section>
  );
}
