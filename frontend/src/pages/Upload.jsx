import React, { useState } from 'react';
export default function Upload() {
  const [file, setFile] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Dataset uploaded (mock).');
  };
  return (
    <section className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Upload Dataset</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Upload & Mint
        </button>
      </form>
    </section>
  );
}
