// src/components/AppleBTS2025.jsx
import React from 'react';
import macbookImage from '../assets/images/macbook_air_skyblue.png'; // make sure this image is in the correct path

export default function AppleBTS2025() {
  return (
    <section className="w-full bg-gradient-to-b from-[#eaf6ff] to-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-semibold text-gray-900">MacBook Air</h1>
        <p className="text-xl mt-2 text-gray-700">
          Sky blue colour.<br />
          Sky high performance with M4.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition"
          >
            Learn more
          </a>
          <a
            href="#"
            className="border border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-50 transition"
          >
            Buy
          </a>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-lg">
          <span className="text-blue-600 font-medium">Built for </span>
          <span className="text-pink-600 font-medium">Apple Intelligence</span>
          <span className="text-orange-500">.</span>
        </p>

        {/* Image */}
        <div className="mt-10">
          <img
            src={macbookImage}
            alt="MacBook Air Sky Blue"
            className="mx-auto max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

