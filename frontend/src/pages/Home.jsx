import React from "react";
export default function Steps() {
  return (

//         <section
//       className="text-center py-24 px-4 bg-cover bg-center bg-no-repeat text-white"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//       }}
//     >
//       <div className="bg-black/60 py-24 px-4">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//           Monetize Your Data. Earn with Every Use.
//         </h1>
//         <p className="text-gray-300 max-w-2xl mx-auto mb-8">
//           Transform your data into a liquid asset. Our platform allows you to mint
//           data-yield NFTs, creating new revenue streams and investment opportunities
//           in the data economy.
//         </p>
//         <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
//           Get Started
//         </button>

//         <div className="mt-12 text-sm text-gray-400">
//           Trusted by industry leaders
//         </div>
//         <div className="flex justify-center gap-8 mt-4 text-gray-300 font-medium">
//           <span>QuantumLeap</span>
//           <span>DataSphere</span>
//           <span>SynthCore</span>
//           <span>Infiniti</span>
//           <span>NexusAI</span>
//         </div>
//       </div>
//     </section>
//   );
// }
 
  
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
// import React from "react";

// export default function Steps() {
//   return (
//     <div>
//       {/* ==== HERO SECTION ==== */}
//       <section
//         className="text-center py-24 px-4 bg-cover bg-center bg-no-repeat text-white"
//         style={{
//           backgroundImage: `url(${heroBg})`,
//         }}
//       >
//         <div className="bg-black/60 py-24 px-4">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//             Monetize Your Data. Earn with Every Use.
//           </h1>
//           <p className="text-gray-300 max-w-2xl mx-auto mb-8">
//             Transform your data into a liquid asset. Our platform allows you to mint
//             data-yield NFTs, creating new revenue streams and investment opportunities
//             in the data economy.
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
//             Get Started
//           </button>

//           <div className="mt-12 text-sm text-gray-400">
//             Trusted by industry leaders
//           </div>
//           <div className="flex justify-center gap-8 mt-4 text-gray-300 font-medium">
//             <span>QuantumLeap</span>
//             <span>DataSphere</span>
//             <span>SynthCore</span>
//             <span>Infiniti</span>
//             <span>NexusAI</span>
//           </div>
//         </div>
//       </section>

//       {/* ==== HOW IT WORKS SECTION ==== */}
//       <section className="py-20 px-8 text-center bg-gray-950">
//         <h2 className="text-blue-500 font-semibold mb-2">HOW IT WORKS</h2>
//         <h3 className="text-3xl font-bold mb-12 text-white">
//           Unlock the Power of Your Data in 3 Simple Steps
//         </h3>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* Step 1 */}
//           <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
//             <div className="text-blue-500 text-4xl mb-4">🔷</div>
//             <h4 className="text-xl font-semibold mb-2 text-white">1. Mint Your Data NFT</h4>
//             <p className="text-gray-400">
//               Securely package your dataset as a unique, tradable NFT on the blockchain.
//             </p>
//           </div>

//           {/* Step 2 */}
//           <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
//             <div className="text-blue-500 text-4xl mb-4">💠</div>
//             <h4 className="text-xl font-semibold mb-2 text-white">2. Earn Royalties</h4>
//             <p className="text-gray-400">
//               Receive passive income every time your data is accessed, used, or sold.
//             </p>
//           </div>

//           {/* Step 3 */}
//           <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
//             <div className="text-blue-500 text-4xl mb-4">📈</div>
//             <h4 className="text-xl font-semibold mb-2 text-white">3. Invest in Data</h4>
//             <p className="text-gray-400">
//               Browse the marketplace and invest in high-potential data assets for future returns.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

