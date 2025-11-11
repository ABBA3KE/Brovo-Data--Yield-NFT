import React from "react";

export default function Steps() {
  const steps = [
    {
      icon: "🔷",
      title: "Mint Your Data NFT",
      desc: "Securely package your dataset as a unique, tradable NFT on the blockchain.",
    },
    {
      icon: "💠",
      title: "Earn Royalties",
      desc: "Receive passive income every time your data is accessed or sold.",
    },
    {
      icon: "📈",
      title: "Invest in Data",
      desc: "Invest in high-potential datasets and earn yield from data-backed assets.",
    },
  ];

  return (
    <section className="py-20 px-6 text-center bg-[#0B0F19]">
      <h3 className="text-blue-500 font-semibold tracking-wide mb-3">
        HOW IT WORKS
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Unlock the Power of Your Data in 3 Steps
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition"
          >
            <div className="text-blue-500 text-4xl mb-4">{step.icon}</div>
            <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
