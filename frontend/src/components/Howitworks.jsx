import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Mint Your Data NFT",
      desc: "Securely package your dataset as a unique, tradeable NFT on the blockchain.",
    },
    {
      title: "Earn Royalties",
      desc: "Receive passive income every time your data is accessed, used, or sold.",
    },
    {
      title: "Invest in Data",
      desc: "Browse the marketplace and invest in high-potential data assets for future returns.",
    },
  ];

  return (
    <section className="py-20 px-6 text-center">
      <h3 className="text-sm text-blue-500 font-semibold tracking-wide mb-3">
        HOW IT WORKS
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        Unlock the Power of Your Data in 3 Simple Steps
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((item, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
          >
            <div className="text-blue-500 text-3xl mb-4">📦</div>
            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
