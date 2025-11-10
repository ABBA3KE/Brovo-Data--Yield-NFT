import React from 'react';
const sampleNFTs = [
  { id: 1, title: 'Climate Data 2025', price: '0.1 ETH' },
  { id: 2, title: 'Traffic Patterns', price: '0.08 ETH' }
];
export default function Marketplace() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sampleNFTs.map(nft => (
          <div key={nft.id} className="border p-4 rounded-lg shadow bg-white">
            <h3 className="text-xl font-semibold">{nft.title}</h3>
            <p className="text-gray-600">Price: {nft.price}</p>
            <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
              Buy NFT
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
