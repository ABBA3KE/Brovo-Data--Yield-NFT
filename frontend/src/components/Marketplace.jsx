import React, { useState } from "react";

export default function Marketplace() {
  const [search, setSearch] = useState("");

  const datasets = [
    {
      name: "S&P 500 Historical Price",
      owner: "user1234",
      price: "1.5 ETH",
      image: "https://images.unsplash.com/photo-1581093588401-22f636ba2e95",
    },
    {
      name: "Global Temperature Anomalies",
      owner: "data_king",
      yield: "7.8% APY",
      image: "https://images.unsplash.com/photo-1613470208854-7a47b6cdad37",
    },
    {
      name: "Genomic Sequence Data",
      owner: "gene_sequencer",
      price: "2.1 ETH",
      image: "https://images.unsplash.com/photo-1581092334641-f9a4d3d0e3a4",
    },
    {
      name: "Social Media Trends API",
      owner: "social_guru",
      yield: "5.2% APY",
      image: "https://images.unsplash.com/photo-1611162617213-7d7d07a3a3a3",
    },
    {
      name: "Real Estate Market Analytics",
      owner: "prop_investor",
      yield: "6.5% APY",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    },
    {
      name: "Weather Prediction Model",
      owner: "weather_wiz",
      price: "0.8 ETH",
      image: "https://images.unsplash.com/photo-1500674425229-f692875b0ab7",
    },
    {
      name: "AI Training Datasets",
      owner: "mlMaven",
      yield: "9.1% APY",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      name: "Urban Logistics Data",
      owner: "supplychain_op",
      price: "1.2 ETH",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
  ];

  const filtered = datasets.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-[#0B0F19] text-gray-100 font-sans py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Explore Datasets</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <input
            type="text"
            placeholder="Search by dataset name or owner"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[250px] bg-gray-900 text-sm px-4 py-3 rounded-lg border border-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          {["Data Category", "Price Range", "Yield Rate", "Sort By"].map(
            (f, i) => (
              <select
                key={i}
                className="bg-gray-900 border border-gray-800 text-sm px-4 py-3 rounded-lg text-gray-400 focus:outline-none"
              >
                <option>{f}</option>
              </select>
            )
          )}
        </div>

        {/* Dataset Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-600 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-52">
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">
                    Owned by: {item.owner}
                  </p>
                  {item.price && (
                    <p className="text-sm font-medium text-white">
                      Price: <span className="text-green-400">{item.price}</span>
                    </p>
                  )}
                  {item.yield && (
                    <p className="text-sm font-medium text-green-400">
                      Yield: {item.yield}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  {item.price ? (
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-sm py-2 rounded-lg font-medium">
                      Buy Now
                    </button>
                  ) : (
                    <button className="bg-amber-500 hover:bg-amber-600 text-sm py-2 rounded-lg font-medium">
                      Stake
                    </button>
                  )}
                  <button className="bg-gray-800 hover:bg-gray-700 text-sm py-2 rounded-lg font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
