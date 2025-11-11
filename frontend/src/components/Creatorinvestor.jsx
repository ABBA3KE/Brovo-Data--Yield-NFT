import React from "react";

export default function CreatorsInvestors() {
  return (
    <section className="py-20 px-6 text-center bg-[#0B0F19]">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        For Creators & Investors
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h4 className="text-lg font-semibold mb-4 text-blue-400">
            Creators: Monetize
          </h4>
          <ul className="text-gray-400 space-y-2 text-sm list-disc ml-5">
            <li>Turn your data into continuous revenue.</li>
            <li>Maintain full control and transparency.</li>
            <li>Access a global investor marketplace.</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h4 className="text-lg font-semibold mb-4 text-purple-400">
            Investors: Invest
          </h4>
          <ul className="text-gray-400 space-y-2 text-sm list-disc ml-5">
            <li>Invest in real, yield-bearing data assets.</li>
            <li>Diversify with a new data economy class.</li>
            <li>Gain exposure to AI, biotech, and finance sectors.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
