// import React from "react";

// export default function Hero() {
//   return (
//     <section className="text-center py-24 px-4">
//       <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//         Monetize Your Data. Earn with Every Use.
//       </h1>
//       <p className="text-gray-400 max-w-2xl mx-auto mb-8">
//         Transform your data into a liquid asset. Our platform allows you to mint
//         data-yield NFTs, creating new revenue streams and investment opportunities
//         in the data economy.
//       </p>
//       <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
//         Get Started
//       </button>

//       <div className="mt-12 text-sm text-gray-500">Trusted by industry leaders</div>
//       <div className="flex justify-center gap-8 mt-4 text-gray-400 font-medium">
//         <span>QuantumLeap</span>
//         <span>DataSphere</span>
//         <span>SynthCore</span>
//         <span>Infiniti</span>
//         <span>NexusAI</span>
//       </div>
//     </section>
//   );
// }

import React from "react";
import Hero from "../components/Hero";
import Marketplace from "../components/Marketplace";
import Steps from "../components/Steps";
import HowitWorks from "../components/Howitworks";
import CreatorInvestor from "../components/Creatorinvestor";

export default function Home() {
  return (
    <div>
      <Hero />
      <Steps />
      <HowitWorks />
      <Marketplace />
      <CreatorInvestor />
    </div>
  );
}
